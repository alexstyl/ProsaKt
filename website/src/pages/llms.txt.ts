import type { APIContext } from 'astro';
import { getDocs, markdownUrl } from '../lib/docs-markdown';

export async function GET({ site }: APIContext) {
  const docs = await getDocs();
  const index = [
    '# Prosa.kt', '',
    '> Declarative Kotlin code generation, written in pure Kotlin.', '',
    '## Documentation', '',
    ...docs.map(({ id, data }) => `- [${data.title}](${markdownUrl(id, site!)}): ${data.description}`), '',
    '## API reference', '',
    `- [API index](${new URL('/api/index.md', site)}): Generated public Kotlin API, with links to individual Markdown pages.`,
    `- [Complete API reference](${new URL('/api/full.md', site)}): All public API signatures and KDoc in one Markdown file.`, '',
    '## Complete documentation', '',
    `- [All documentation](${new URL('/llms-full.txt', site)}): All guides in one Markdown file.`, '',
  ].join('\n');
  return new Response(index, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
