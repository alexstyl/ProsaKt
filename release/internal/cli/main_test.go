package cli

import (
	"bytes"
	"errors"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
)

func writeFile(t *testing.T, dir, name, content string) {
	t.Helper()
	if err := os.WriteFile(filepath.Join(dir, name), []byte(content), 0644); err != nil {
		t.Fatal(err)
	}
}

func readFile(t *testing.T, dir, name string) string {
	t.Helper()
	data, err := os.ReadFile(filepath.Join(dir, name))
	if err != nil {
		t.Fatal(err)
	}
	return string(data)
}

func testGit(t *testing.T, dir string, args ...string) string {
	t.Helper()
	result, err := git(dir, args...)
	if err != nil {
		t.Fatal(err)
	}
	return result
}

func repository(t *testing.T) string {
	t.Helper()
	dir := t.TempDir()
	// Isolate identity, hooks and signing from the developer's Git configuration.
	t.Setenv("GIT_CONFIG_GLOBAL", os.DevNull)
	t.Setenv("GIT_CONFIG_NOSYSTEM", "1")
	testGit(t, dir, "init", "-q")
	testGit(t, dir, "config", "user.name", "CLI Test")
	testGit(t, dir, "config", "user.email", "cli@example.test")
	writeFile(t, dir, "package.yml", "name: Example\nversion: 1.2.3\n")
	testGit(t, dir, "add", "package.yml")
	testGit(t, dir, "commit", "-qm", "Initial package")
	return dir
}

func invoke(dir string, args ...string) (string, error) {
	var output bytes.Buffer
	err := run(dir, args, &output, &output)
	return output.String(), err
}

func TestVersionCommitsAndTags(t *testing.T) {
	dir := repository(t)
	output, err := invoke(dir, "version", "minor", "-m", "Release %s")
	if err != nil {
		t.Fatal(err)
	}
	if output != "1.3.0\n" {
		t.Fatal(output)
	}
	if got := testGit(t, dir, "log", "-1", "--format=%s"); got != "Release 1.3.0" {
		t.Fatal(got)
	}
	if got := testGit(t, dir, "cat-file", "-t", "refs/tags/v1.3.0"); got != "tag" {
		t.Fatal(got)
	}
	if got := testGit(t, dir, "rev-parse", "v1.3.0^{commit}"); got != testGit(t, dir, "rev-parse", "HEAD") {
		t.Fatal("tag does not point to version commit")
	}
	if got := testGit(t, dir, "status", "--porcelain"); got != "" {
		t.Fatal(got)
	}
	if !strings.Contains(readFile(t, dir, "package.yml"), "version: 1.3.0") {
		t.Fatal("version not updated")
	}
}

func TestVersionRejectsDirtyTreeAndExistingTag(t *testing.T) {
	for _, conflict := range []string{"tracked", "untracked", "staged", "tag"} {
		t.Run(conflict, func(t *testing.T) {
			dir := repository(t)
			switch conflict {
			case "tracked":
				writeFile(t, dir, "package.yml", "version: 1.2.3\nname: Changed\n")
			case "untracked":
				writeFile(t, dir, "other.txt", "unfinished work")
			case "staged":
				writeFile(t, dir, "other.txt", "unfinished work")
				testGit(t, dir, "add", "other.txt")
			case "tag":
				testGit(t, dir, "tag", "v1.2.4")
			}
			before := readFile(t, dir, "package.yml")
			head := testGit(t, dir, "rev-parse", "HEAD")
			if _, err := invoke(dir, "version", "patch"); err == nil {
				t.Fatal("expected rejection")
			}
			if readFile(t, dir, "package.yml") != before {
				t.Fatal("modified package on rejection")
			}
			if testGit(t, dir, "rev-parse", "HEAD") != head {
				t.Fatal("created a commit")
			}
		})
	}
}

func TestVersionWithoutGitTagPreservesMetadata(t *testing.T) {
	dir := repository(t)
	before := "# Package metadata\nname: Example\nversion: '1.2.3' # current version\nlicenses:\n  - name: MIT\n    url: https://example.test/LICENSE\n"
	writeFile(t, dir, "package.yml", before)
	head := testGit(t, dir, "rev-parse", "HEAD")
	if _, err := invoke(dir, "version", "--no-git-tag-version", "minor"); err != nil {
		t.Fatal(err)
	}
	content := readFile(t, dir, "package.yml")
	for _, value := range []string{"# Package metadata", "'1.3.0' # current version", "name: MIT", "https://example.test/LICENSE"} {
		if !strings.Contains(content, value) {
			t.Fatalf("lost %q in %s", value, content)
		}
	}
	if testGit(t, dir, "rev-parse", "HEAD") != head || testGit(t, dir, "tag", "--list") != "" {
		t.Fatal("changed Git history")
	}
}

func TestVersionSameAndFromGit(t *testing.T) {
	dir := repository(t)
	if _, err := invoke(dir, "version", "1.2.3"); err == nil {
		t.Fatal("accepted same version")
	}
	if _, err := invoke(dir, "version", "1.2.3", "--allow-same-version"); err != nil {
		t.Fatal(err)
	}
	testGit(t, dir, "tag", "-a", "v2.0.0", "-m", "Imported release")
	// describe can choose either tag on the same commit; add a commit for an unambiguous latest tag.
	writeFile(t, dir, "other.txt", "release")
	testGit(t, dir, "add", "other.txt")
	testGit(t, dir, "commit", "-qm", "Next release")
	testGit(t, dir, "tag", "-a", "v2.1.0", "-m", "Next release")
	if _, err := invoke(dir, "version", "from-git", "--no-git-tag-version"); err != nil {
		t.Fatal(err)
	}
	if !strings.Contains(readFile(t, dir, "package.yml"), "version: 2.1.0") {
		t.Fatal("did not use Git version")
	}
}

func TestVersionWithoutRepositoryAndFromSubdirectory(t *testing.T) {
	dir := t.TempDir()
	writeFile(t, dir, "package.yml", "version: 0.1.0-SNAPSHOT\n")
	nested := filepath.Join(dir, "src")
	if err := os.Mkdir(nested, 0755); err != nil {
		t.Fatal(err)
	}
	if _, err := invoke(nested, "version", "patch"); err != nil {
		t.Fatal(err)
	}
	if output, err := invoke(nested, "version"); err != nil || output != "0.1.0\n" {
		t.Fatalf("%s %v", output, err)
	}
}

func TestInvalidYAMLDoesNotChangeFile(t *testing.T) {
	for _, content := range []string{
		"version: 1.2.3\nversion: 1.2.4\n",
		"name: Example\n", "version: 1\n", "- version: 1.2.3\n",
		"version: 1.2.3\n---\nversion: 2.0.0\n",
		"version: &ver 1.2.3\nother: *ver\n",
		"version: 1.2.3\nscm:\n  url: a\n  url: b\n",
	} {
		t.Run(content, func(t *testing.T) {
			dir := t.TempDir()
			writeFile(t, dir, "package.yml", content)
			if _, err := invoke(dir, "version", "patch", "--no-git-tag-version"); err == nil {
				t.Fatal("accepted invalid YAML")
			}
			if readFile(t, dir, "package.yml") != content {
				t.Fatal("modified invalid YAML")
			}
		})
	}
}

func TestFailedCommitDoesNotTag(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip("POSIX Git hook")
	}
	dir := repository(t)
	hook := filepath.Join(dir, ".git", "hooks", "pre-commit")
	if err := os.WriteFile(hook, []byte("#!/bin/sh\nexit 1\n"), 0755); err != nil {
		t.Fatal(err)
	}
	head := testGit(t, dir, "rev-parse", "HEAD")
	_, err := invoke(dir, "version", "patch")
	if err == nil || !strings.Contains(err.Error(), "commit failed") {
		t.Fatalf("unexpected error: %v", err)
	}
	if testGit(t, dir, "rev-parse", "HEAD") != head || testGit(t, dir, "tag", "--list") != "" {
		t.Fatal("changed history after failed commit")
	}
}

func TestPublishDelegatesToGradle(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip("POSIX wrapper fixture")
	}
	for _, dryRun := range []bool{false, true} {
		dir := t.TempDir()
		content := "version: 1.2.3\n"
		writeFile(t, dir, "package.yml", content)
		wrapper := "#!/bin/sh\nprintf '%s\\n' \"$PWD\" \"$@\" \"$ORG_GRADLE_PROJECT_mavenCentralUsername\" > invocation.txt\nexit 0\n"
		if err := os.WriteFile(filepath.Join(dir, "gradlew"), []byte(wrapper), 0755); err != nil {
			t.Fatal(err)
		}
		t.Setenv("ORG_GRADLE_PROJECT_mavenCentralUsername", "test-user")
		args := []string{"publish"}
		if dryRun {
			args = append(args, "--dry-run")
		}
		if _, err := invoke(dir, args...); err != nil {
			t.Fatal(err)
		}
		expected := dir + "\npublishAllPublicationsToMavenCentral\n--no-configuration-cache\n"
		if dryRun {
			expected += "--dry-run\n"
		}
		expected += "test-user\n"
		// macOS can canonicalize /var to /private/var in the shell.
		actual := strings.ReplaceAll(readFile(t, dir, "invocation.txt"), "/private/var/", "/var/")
		expected = strings.ReplaceAll(expected, "/private/var/", "/var/")
		if actual != expected {
			t.Fatalf("got %q; want %q", actual, expected)
		}
		if readFile(t, dir, "package.yml") != content {
			t.Fatal("publishing changed the version")
		}
	}
}

func TestPublishFailure(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip("POSIX wrapper fixture")
	}
	dir := t.TempDir()
	writeFile(t, dir, "package.yml", "version: 1.2.3\n")
	if _, err := invoke(dir, "publish"); err == nil {
		t.Fatal("accepted missing wrapper")
	}
	if err := os.WriteFile(filepath.Join(dir, "gradlew"), []byte("#!/bin/sh\nexit 7\n"), 0755); err != nil {
		t.Fatal(err)
	}
	_, err := invoke(dir, "publish")
	var exit *exec.ExitError
	if !errors.As(err, &exit) || exit.ExitCode() != 7 {
		t.Fatalf("lost exit status: %v", err)
	}
}

func TestHelpAndInvalidArguments(t *testing.T) {
	dir := t.TempDir()
	for _, args := range [][]string{{}, {"--help"}, {"version", "--help"}, {"publish", "--help"}} {
		if _, err := invoke(dir, args...); err != nil {
			t.Fatal(err)
		}
	}
	writeFile(t, dir, "package.yml", "version: 1.2.3\n")
	for _, args := range [][]string{{"unknown"}, {"version", "patch", "minor"}, {"version", "patch", "--preid"}, {"version", "--bogus"}, {"publish", "patch"}, {"publish", "--bogus"}} {
		if _, err := invoke(dir, args...); err == nil {
			t.Fatalf("accepted %v", args)
		}
	}
}

func TestVersionTagPrefixOverride(t *testing.T) {
	for _, prefix := range []string{"", "release-"} {
		t.Run(prefix, func(t *testing.T) {
			dir := repository(t)
			if _, err := invoke(dir, "version", "patch", "--tag-version-prefix="+prefix); err != nil {
				t.Fatal(err)
			}
			if got := testGit(t, dir, "tag", "--list"); got != prefix+"1.2.4" {
				t.Fatalf("unexpected tag %q", got)
			}
		})
	}
}

func TestRemovedPrereleaseCommandsLeavePackageUnchanged(t *testing.T) {
	dir := t.TempDir()
	original := "version: 0.1.0-SNAPSHOT\n"
	writeFile(t, dir, "package.yml", original)
	for _, args := range [][]string{
		{"version", "prerelease"}, {"version", "prepatch"},
		{"version", "preminor"}, {"version", "premajor"},
		{"version", "patch", "--preid=beta"},
	} {
		if _, err := invoke(dir, args...); err == nil {
			t.Fatalf("accepted removed option: %v", args)
		}
		if readFile(t, dir, "package.yml") != original {
			t.Fatal("modified package after invalid command")
		}
	}
}
