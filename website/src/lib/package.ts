import { parse } from 'yaml';
import source from '../../../package.yml?raw';

const metadata = parse(source) as Record<string, unknown>;
function requiredString(key: string): string {
  const value = metadata[key];
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`package.yml requires a non-empty ${key}`);
  }
  return value;
}

export const version = requiredString('version');
export const coordinates = `${requiredString('groupId')}:${requiredString('artifactId')}:${version}`;
export const dependency = `implementation("${coordinates}")`;
