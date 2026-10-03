package cli

import (
	"bytes"
	"fmt"
	"io"
	"os"
	"path/filepath"

	"gopkg.in/yaml.v3"
)

type packageFile struct {
	path     string
	document yaml.Node
	version  *yaml.Node
	mode     os.FileMode
}

func readPackage(dir string) (*packageFile, error) {
	path := filepath.Join(dir, "package.yml")
	data, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	p := &packageFile{path: path}
	decoder := yaml.NewDecoder(bytes.NewReader(data))
	if err := decoder.Decode(&p.document); err != nil {
		return nil, fmt.Errorf("package.yml: %w", err)
	}
	var extra yaml.Node
	if err := decoder.Decode(&extra); err != io.EOF {
		return nil, fmt.Errorf("package.yml must contain exactly one YAML document")
	}
	if len(p.document.Content) != 1 || p.document.Content[0].Kind != yaml.MappingNode {
		return nil, fmt.Errorf("package.yml must contain a mapping")
	}
	// Decode as well to reject duplicate keys, including in nested metadata.
	var values map[string]any
	if err := p.document.Decode(&values); err != nil {
		return nil, fmt.Errorf("package.yml: %w", err)
	}
	fields := p.document.Content[0].Content
	for i := 0; i < len(fields); i += 2 {
		if fields[i].Value == "version" {
			p.version = fields[i+1]
		}
	}
	if p.version == nil || p.version.Kind != yaml.ScalarNode || p.version.Tag != "!!str" || p.version.Anchor != "" {
		return nil, fmt.Errorf("package.yml requires a version string without an anchor or alias")
	}
	if _, err := parseVersion(p.version.Value); err != nil {
		return nil, fmt.Errorf("package.yml version: %w", err)
	}
	info, err := os.Stat(path)
	if err != nil {
		return nil, err
	}
	p.mode = info.Mode().Perm()
	return p, nil
}

func (p *packageFile) writeVersion(version string) error {
	p.version.Value = version
	var buf bytes.Buffer
	encoder := yaml.NewEncoder(&buf)
	encoder.SetIndent(2)
	if err := encoder.Encode(&p.document); err != nil {
		return err
	}
	if err := encoder.Close(); err != nil {
		return err
	}
	temp, err := os.CreateTemp(filepath.Dir(p.path), ".package-*.yml")
	if err != nil {
		return err
	}
	defer os.Remove(temp.Name())
	defer temp.Close()
	if err := temp.Chmod(p.mode); err != nil {
		return err
	}
	if _, err := temp.Write(buf.Bytes()); err != nil {
		return err
	}
	if err := temp.Close(); err != nil {
		return err
	}
	return os.Rename(temp.Name(), p.path)
}
