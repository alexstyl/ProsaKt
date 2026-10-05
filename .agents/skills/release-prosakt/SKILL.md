---
name: release-prosakt
description: Release Prosa.kt to Maven Central through its GitHub Actions Release workflow, including preparing pending changes, monitoring publication, publishing the GitHub release, and handling retries.
---

# Release Prosa.kt

Use the manual dispatch of `.github/workflows/release.yml` on `main`. The workflow owns the version commit and tag; do not bump `package.yml`, create a release tag locally, or publish directly from the workstation for this flow.

## Prepare

- Read `.github/workflows/release.yml`, `.github/scripts/release.sh`, and `package.yml` to confirm the current behavior and version.
- Inspect the working tree and changes since the latest release. Review, test, and commit the intended pending changes; keep unrelated work out. Document new concepts using the repository's `document-prosakt` skill. Preserve separate code and documentation commits when requested.
- Fetch `origin/main` and tags. Get the intended release changes onto remote `main` before dispatching. The workflow releases remote source, not local uncommitted files.
- Resolve the requested bump from `package.yml`: for example, a minor bump from `0.1.1` is `0.2.0`. Prefer dispatching the exact resolved version so the intended release is clear. Check that its `v<version>` tag does not already exist.
- Check secret names with `gh secret list --repo alexstyl/prosa.kt`, without exposing values. The workflow requires `MAVEN_CENTRAL_USERNAME`, `MAVEN_CENTRAL_PASSWORD`, and `SIGNING_KEY`; signing may also use `SIGNING_KEY_ID` and `SIGNING_PASSWORD`.

## Dispatch

A request to release authorizes dispatching and finishing that release. An inspection or planning request does not.

```sh
gh workflow run release.yml --repo alexstyl/prosa.kt --ref main \
  -f version=0.2.0 -f retry=false
```

Replace the example version with the intended release. The workflow also accepts `patch`, `minor`, and `major`.

Find the run created by this dispatch and monitor that run, rather than assuming the latest completed run belongs to this release:

```sh
gh run list --repo alexstyl/prosa.kt --workflow release.yml --limit 5
gh run view <run-id> --repo alexstyl/prosa.kt
```

The workflow:

1. Checks credentials and resolves a source commit from `main`.
2. Tests the release CLI, Git helper, and library across JVM, JS, Wasm, Linux, macOS, and Windows.
3. Confirms `main` has not advanced, updates `package.yml`, creates an annotated `v<version>` tag, and atomically pushes the version commit and tag.
4. Publishes all publications to Maven Central from the tested release commit using the Go release CLI.
5. Creates a **draft** GitHub release with generated notes. No `CHANGELOG.md` is required by this workflow.

## Finish

- Confirm the publishing run succeeded and verify the release's Maven Central artifacts, including the root multiplatform metadata and JVM artifact.
- Review the draft release notes against the shipped changes. Correct incomplete generated notes before publishing them; use a body file for multiline notes.
- For a request to ship the release, publish the draft:

```sh
gh release edit v0.2.0 --repo alexstyl/prosa.kt --draft=false
```

- Publishing the GitHub release triggers `.github/workflows/website.yml`. Monitor that deployment and verify the released version is reflected in the documentation.
- Fetch and fast-forward the local checkout when safe so it includes the workflow-created version commit. Report the version, release link, artifact coordinates, and any incomplete verification.
- Updating downstream consumers is separate work unless the user included it in the task.

## Failure and retry

Inspect the failing job before retrying. If `main` advanced before a version commit was created, reconcile the intended source and dispatch again.

If the release tag already exists, reuse that exact version:

```sh
gh workflow run release.yml --repo alexstyl/prosa.kt --ref main \
  -f version=0.2.0 -f retry=true
```

Retry mode validates and tests the existing tagged commit without another version commit. Do not delete or move the tag. Check whether artifacts were already published before retrying a partially successful run; Maven Central versions cannot be overwritten. If correcting the source requires a new version, report the failure and obtain a new release decision rather than silently changing the requested version. Stop repeated retries when the same external blocker remains unresolved.
