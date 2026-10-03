#!/usr/bin/env bash
set -euo pipefail

: "${RELEASE_CLI:?Path to the release CLI is required}"
: "${GITHUB_OUTPUT:?GitHub output file is required}"

fail() { echo "$*" >&2; exit 1; }

stable_version() {
  [[ "$1" =~ ^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$ ]]
}

fetch_main() {
  git fetch origin refs/heads/main:refs/remotes/origin/main --tags
}

case "${1:-}" in
  resolve)
    [[ "${GITHUB_REF:-}" == refs/heads/main ]] || fail 'Dispatch this workflow from main.'
    : "${VERSION_REQUEST:?A version or increment is required}"
    fetch_main
    scratch=$(mktemp -d)
    trap 'rm -rf "$scratch"' EXIT
    if [[ "${RETRY:-false}" == true ]]; then
      version=${VERSION_REQUEST#v}
      stable_version "$version" || fail 'For a retry, enter an exact version such as 0.1.0.'
      tag="v$version"
      sha=$(git rev-parse --verify "refs/tags/$tag^{commit}")
      git merge-base --is-ancestor "$sha" origin/main || fail 'The release tag must point to a commit on main.'
      git show "$sha:package.yml" > "$scratch/package.yml"
      actual=$(cd "$scratch" && "$RELEASE_CLI" version)
      [[ "$actual" == "$version" ]] || fail 'The tag does not match the version in package.yml.'
    else
      [[ "$(git rev-parse HEAD)" == "$(git rev-parse origin/main)" ]] || fail 'Main advanced before this run started; dispatch again.'
      case "$VERSION_REQUEST" in
        patch|minor|major) ;;
        *) stable_version "${VERSION_REQUEST#v}" || fail 'Use patch, minor, major, or an exact stable version.' ;;
      esac
      cp package.yml "$scratch/package.yml"
      version=$(cd "$scratch" && "$RELEASE_CLI" version "$VERSION_REQUEST" --no-git-tag-version --allow-same-version)
      stable_version "$version" || fail 'Only stable releases are supported by this workflow.'
      tag="v$version"
      if git show-ref --verify --quiet "refs/tags/$tag"; then
        fail "Tag $tag already exists. Select retry with the exact version to publish that commit."
      fi
      sha=$(git rev-parse HEAD)
    fi
    ;;
  prepare)
    : "${EXPECTED_SHA:?Tested commit is required}"
    : "${RELEASE_VERSION:?Resolved version is required}"
    stable_version "$RELEASE_VERSION" || fail 'Expected an exact stable version.'
    version=$RELEASE_VERSION
    tag="v$version"
    fetch_main
    [[ "$(git rev-parse HEAD)" == "$EXPECTED_SHA" ]] || fail 'Checkout does not match the tested commit.'
    if [[ "${RETRY:-false}" == true ]]; then
      [[ "$(git rev-parse --verify "refs/tags/$tag^{commit}")" == "$EXPECTED_SHA" ]] || fail 'The release tag changed after testing.'
      git merge-base --is-ancestor "$EXPECTED_SHA" origin/main || fail 'The release commit is no longer on main.'
      [[ "$("$RELEASE_CLI" version)" == "$version" ]] || fail 'Release version does not match the tag.'
    else
      [[ "$(git rev-parse origin/main)" == "$EXPECTED_SHA" ]] || fail 'Main advanced during testing; dispatch again.'
      git switch -C main "$EXPECTED_SHA"
      "$RELEASE_CLI" version "$version" --allow-same-version
      # A concurrent push to main rejects this entire update, including the tag.
      git push --atomic origin HEAD:refs/heads/main "refs/tags/$tag:refs/tags/$tag"
    fi
    sha=$(git rev-parse HEAD)
    ;;
  *) fail 'Usage: release.sh resolve|prepare' ;;
esac

{
  echo "version=$version"
  echo "tag=$tag"
  echo "sha=$sha"
} >> "$GITHUB_OUTPUT"
