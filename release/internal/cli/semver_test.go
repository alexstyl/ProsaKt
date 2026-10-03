package cli

import "testing"

func TestNextVersion(t *testing.T) {
	tests := []struct{ current, change, want string }{
		{"1.2.3", "patch", "1.2.4"},
		{"1.2.3", "minor", "1.3.0"},
		{"1.2.3", "major", "2.0.0"},
		{"0.1.0-SNAPSHOT", "patch", "0.1.0"},
		{"0.1.0-SNAPSHOT", "minor", "0.1.0"},
		{"1.0.0-rc.1", "major", "1.0.0"},
		{"1.2.0-rc.1", "minor", "1.2.0"},
		{"1.2.3-rc.1", "minor", "1.3.0"},
		{"1.0.1-rc.1", "major", "2.0.0"},
		{"1.2.3+build.9", "patch", "1.2.4"},
		{"1.2.3", "2.5.0", "2.5.0"},
		{"1.2.3", "1.3.0-SNAPSHOT", "1.3.0-SNAPSHOT"},
		{"1.2.3", "v2.5.0", "2.5.0"},
		{"1.2.3", "2.5.0-beta.0+build.1", "2.5.0-beta.0+build.1"},
	}
	for _, tt := range tests {
		t.Run(tt.current+"/"+tt.change, func(t *testing.T) {
			got, err := nextVersion(tt.current, tt.change)
			if err != nil || got != tt.want {
				t.Fatalf("got %q, %v; want %q", got, err, tt.want)
			}
		})
	}
}

func TestInvalidVersions(t *testing.T) {
	for _, value := range []string{"", "1.2", "01.2.3", "1.2.3-01", "1.2.3-", "1.2.3+", "9007199254740992.0.0"} {
		if _, err := nextVersion("1.2.3", value); err == nil {
			t.Errorf("accepted %q", value)
		}
	}
	if _, err := nextVersion("9007199254740991.0.0", "major"); err == nil {
		t.Fatal("accepted overflow")
	}
}
