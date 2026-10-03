package cli

import (
	"fmt"
	"strings"

	"github.com/Masterminds/semver/v3"
)

const maxSafeInteger = 9007199254740991

func parseVersion(value string) (*semver.Version, error) {
	v, err := semver.StrictNewVersion(value)
	if err != nil {
		return nil, fmt.Errorf("invalid semantic version %q", value)
	}
	if v.Major() > maxSafeInteger || v.Minor() > maxSafeInteger || v.Patch() > maxSafeInteger {
		return nil, fmt.Errorf("version component exceeds npm's maximum safe integer")
	}
	return v, nil
}

func nextVersion(current, change string) (string, error) {
	v, err := parseVersion(current)
	if err != nil {
		return "", err
	}
	major, minor, patch, pre := v.Major(), v.Minor(), v.Patch(), v.Prerelease()
	switch change {
	case "major":
		if minor != 0 || patch != 0 || pre == "" {
			major++
		}
		minor, patch = 0, 0
	case "minor":
		if patch != 0 || pre == "" {
			minor++
		}
		patch = 0
	case "patch":
		if pre == "" {
			patch++
		}
	default:
		exact, err := parseVersion(strings.TrimPrefix(change, "v"))
		if err != nil {
			return "", fmt.Errorf("expected a version or patch, minor, major: %w", err)
		}
		return exact.String(), nil
	}
	result := fmt.Sprintf("%d.%d.%d", major, minor, patch)
	if _, err := parseVersion(result); err != nil {
		return "", err
	}
	return result, nil
}
