package cli

import (
	"flag"
	"fmt"
	"io"
	"os/exec"
	"strings"
)

func versionCommand(dir string, args []string, out, stderr io.Writer) error {
	fs := flag.NewFlagSet("version", flag.ContinueOnError)
	fs.SetOutput(stderr)
	noGit := fs.Bool("no-git-tag-version", false, "Skip Git commit and tag")
	allowSame := fs.Bool("allow-same-version", false, "Allow the current version")
	prefix := fs.String("tag-version-prefix", "v", "Git tag prefix")
	message := fs.String("message", "%s", "Commit/tag message")
	fs.StringVar(message, "m", "%s", "Commit/tag message")
	// flag stops at the first positional argument; npm permits flags on either side.
	var positional, options []string
	for i := 0; i < len(args); i++ {
		arg := args[i]
		if !strings.HasPrefix(arg, "-") {
			positional = append(positional, arg)
			continue
		}
		options = append(options, arg)
		key := strings.TrimLeft(arg, "-")
		if !strings.Contains(key, "=") && (key == "tag-version-prefix" || key == "message" || key == "m") {
			i++
			if i >= len(args) {
				return fmt.Errorf("%s requires a value", arg)
			}
			options = append(options, args[i])
		}
	}
	if err := fs.Parse(options); err != nil {
		return err
	}
	if len(positional) > 1 {
		return fmt.Errorf("version takes only one version or increment")
	}
	p, err := readPackage(dir)
	if err != nil {
		return err
	}
	if len(positional) == 0 {
		fmt.Fprintln(out, p.version.Value)
		return nil
	}
	change := positional[0]
	if change == "from-git" {
		change, err = git(dir, "describe", "--tags", "--abbrev=0")
		if err != nil {
			return err
		}
		change = strings.TrimPrefix(change, *prefix)
	}
	next, err := nextVersion(p.version.Value, change)
	if err != nil {
		return err
	}
	if next == p.version.Value && !*allowSame {
		return fmt.Errorf("version is already %s; use --allow-same-version to keep it", next)
	}
	useGit := false
	if !*noGit {
		probe := exec.Command("git", "rev-parse", "--is-inside-work-tree")
		probe.Dir = dir
		output, probeErr := probe.CombinedOutput()
		if probeErr == nil {
			useGit = strings.TrimSpace(string(output)) == "true"
		} else {
			// A source archive may have no repository. Other Git failures must not silently skip tagging.
			if !strings.Contains(string(output), "not a git repository") {
				return fmt.Errorf("checking Git: %w", probeErr)
			}
		}
	}
	tag := *prefix + next
	if useGit {
		status, err := git(dir, "status", "--porcelain")
		if err != nil {
			return err
		}
		if status != "" {
			return fmt.Errorf("Git working tree is not clean; commit changes first or use --no-git-tag-version")
		}
		if _, err := git(dir, "check-ref-format", "refs/tags/"+tag); err != nil {
			return err
		}
		tags, err := git(dir, "tag", "--list", "--", tag)
		if err != nil {
			return err
		}
		if tags != "" {
			return fmt.Errorf("Git tag %s already exists", tag)
		}
		for _, key := range []string{"GIT_AUTHOR_IDENT", "GIT_COMMITTER_IDENT"} {
			if _, err := git(dir, "var", key); err != nil {
				return err
			}
		}
	}
	if err := p.writeVersion(next); err != nil {
		return err
	}
	if useGit {
		if _, err := git(dir, "add", "--", "package.yml"); err != nil {
			return fmt.Errorf("package.yml updated, but staging failed: %w", err)
		}
		text := strings.ReplaceAll(*message, "%s", next)
		args := []string{"commit", "--only", "-m", text}
		if *allowSame {
			args = append(args, "--allow-empty")
		}
		args = append(args, "--", "package.yml")
		if _, err := git(dir, args...); err != nil {
			return fmt.Errorf("package.yml updated but commit failed; inspect git status before retrying: %w", err)
		}
		if _, err := git(dir, "tag", "-a", "-m", text, "--", tag); err != nil {
			return fmt.Errorf("version commit created, but tag %s failed: %w", tag, err)
		}
	}
	fmt.Fprintln(out, next)
	return nil
}
