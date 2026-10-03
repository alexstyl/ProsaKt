import os
from pathlib import Path
import subprocess
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[2]
SCRIPT = ROOT / '.github/scripts/release.sh'


class ReleaseWorkflowTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tools = tempfile.TemporaryDirectory(prefix='release-workflow-tools-')
        cls.cli = str(Path(cls.tools.name) / 'release')
        subprocess.run(['go', 'build', '-o', cls.cli, '.'], cwd=ROOT / 'release', check=True)

    @classmethod
    def tearDownClass(cls):
        cls.tools.cleanup()

    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='release-workflow-')
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.remote = self.root / 'origin.git'
        self.repo = self.root / 'repo'
        self.repo.mkdir()
        self.env = dict(os.environ, GIT_CONFIG_GLOBAL=os.devnull, GIT_CONFIG_NOSYSTEM='1',
                        GIT_AUTHOR_NAME='Test', GIT_AUTHOR_EMAIL='test@example.test',
                        GIT_COMMITTER_NAME='Test', GIT_COMMITTER_EMAIL='test@example.test')
        self.git('init', '--bare', str(self.remote))
        self.git('init', '-b', 'main')
        (self.repo / 'package.yml').write_text('name: Example\nversion: 0.1.0\n')
        self.git('add', 'package.yml')
        self.git('commit', '-m', 'Initial package')
        self.git('remote', 'add', 'origin', str(self.remote))
        self.git('push', '-u', 'origin', 'main')
        self.original = self.git('rev-parse', 'HEAD')

    def git(self, *args):
        return subprocess.check_output(['git', *args], cwd=self.repo, env=self.env,
                                       stderr=subprocess.PIPE, text=True).strip()

    def run_script(self, phase, ok=True, **values):
        output = self.root / 'outputs'
        output.write_text('')
        env = dict(self.env, RELEASE_CLI=self.cli, GITHUB_OUTPUT=str(output),
                   GITHUB_REF='refs/heads/main', VERSION_REQUEST='0.1.0', RETRY='false',
                   EXPECTED_SHA=self.original, RELEASE_VERSION='0.1.0')
        env.update(values)
        result = subprocess.run(['bash', str(SCRIPT), phase], cwd=self.repo, env=env,
                                capture_output=True, text=True)
        if ok:
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        else:
            self.assertNotEqual(result.returncode, 0, result.stdout + result.stderr)
        return dict(line.split('=', 1) for line in output.read_text().splitlines())

    def test_first_release_pushes_commit_and_annotated_tag_to_main(self):
        plan = self.run_script('resolve')
        self.assertEqual(plan, {'version': '0.1.0', 'tag': 'v0.1.0', 'sha': self.original})
        self.assertEqual(self.git('status', '--porcelain'), '')
        result = self.run_script('prepare')
        self.assertNotEqual(result['sha'], self.original)
        self.assertEqual(self.git('rev-parse', 'HEAD^'), self.original)
        self.assertEqual(self.git('rev-parse', 'v0.1.0^{commit}'), result['sha'])
        self.assertEqual(self.git('cat-file', '-t', 'v0.1.0'), 'tag')
        self.assertEqual(self.git('--git-dir', str(self.remote), 'rev-parse', 'main'), result['sha'])
        self.assertEqual(self.git('--git-dir', str(self.remote), 'rev-parse', 'v0.1.0^{commit}'), result['sha'])

    def test_increment_uses_cli_without_modifying_resolve_checkout(self):
        before = (self.repo / 'package.yml').read_text()
        plan = self.run_script('resolve', VERSION_REQUEST='minor')
        self.assertEqual(plan['version'], '0.2.0')
        self.assertEqual((self.repo / 'package.yml').read_text(), before)
        self.run_script('prepare', RELEASE_VERSION=plan['version'])
        self.assertIn('version: 0.2.0', (self.repo / 'package.yml').read_text())

    def test_main_advancing_during_tests_stops_before_tagging(self):
        self.git('commit', '--allow-empty', '-m', 'Concurrent work')
        advanced = self.git('rev-parse', 'HEAD')
        self.git('push', 'origin', 'main')
        self.git('checkout', '--detach', self.original)
        self.run_script('prepare', ok=False)
        self.assertEqual(self.git('tag', '--list'), '')
        self.assertEqual(self.git('--git-dir', str(self.remote), 'rev-parse', 'main'), advanced)

    def test_retry_reuses_tested_tag_without_bumping_or_pushing(self):
        prepared = self.run_script('prepare')
        self.run_script('resolve', ok=False)
        plan = self.run_script('resolve', RETRY='true')
        result = self.run_script('prepare', RETRY='true', EXPECTED_SHA=plan['sha'])
        self.assertEqual(result, prepared)
        self.run_script('resolve', RETRY='true', VERSION_REQUEST='minor', ok=False)

    def test_retry_rejects_mismatched_version_and_tag_outside_main(self):
        self.git('tag', 'v9.0.0')
        self.git('push', 'origin', 'v9.0.0')
        self.run_script('resolve', RETRY='true', VERSION_REQUEST='9.0.0', ok=False)
        self.git('checkout', '-b', 'other')
        (self.repo / 'package.yml').write_text('version: 2.0.0\n')
        self.git('commit', '-am', 'Unmerged release')
        self.git('tag', 'v2.0.0')
        self.git('push', 'origin', 'v2.0.0')
        self.run_script('resolve', RETRY='true', VERSION_REQUEST='2.0.0', ok=False)

    def test_atomic_push_rejection_leaves_remote_main_and_tags_untouched(self):
        hook = self.remote / 'hooks/pre-receive'
        hook.write_text('#!/bin/sh\nexit 1\n')
        hook.chmod(0o755)
        self.run_script('prepare', ok=False)
        self.assertEqual(self.git('--git-dir', str(self.remote), 'rev-parse', 'main'), self.original)
        self.assertEqual(self.git('--git-dir', str(self.remote), 'tag', '--list'), '')

    def test_invalid_dispatch_inputs_leave_repository_unchanged(self):
        self.run_script('resolve', GITHUB_REF='refs/heads/feature', ok=False)
        for value in ['0.2.0-SNAPSHOT', 'from-git', '--help', '0.1', '$(exit 0)']:
            self.run_script('resolve', VERSION_REQUEST=value, ok=False)
        self.assertEqual(self.git('status', '--porcelain'), '')
        self.assertEqual(self.git('rev-parse', 'HEAD'), self.original)
