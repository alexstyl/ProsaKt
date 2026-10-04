import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { parseHTML } from 'linkedom';
import { apiMarkdown } from './api-markdown';

const source = fileURLToPath(new URL('../../build/dokka/html/', import.meta.url));
const destination = fileURLToPath(new URL('../public/api/', import.meta.url));
// Check Dokka completed before replacing a previously generated reference.
await readFile(join(source, 'index.html'));
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });

const pages: { title: string; path: string; markdown: string }[] = [];
const files = (await readdir(destination, { recursive: true })).filter(path => path.endsWith('.html')).sort();
for (const path of files) {
  const file = join(destination, path);
  const html = await readFile(file, 'utf8');
  const page = apiMarkdown(html, path);
  if (!page) continue;
  const markdownPath = path.replace(/\.html$/, '.md');
  await writeFile(join(destination, markdownPath), page.markdown);
  pages.push({ ...page, path: markdownPath });

  const { document } = parseHTML(html);
  document.querySelector('link[rel="icon"]')?.setAttribute('href', '/favicon-pilcrow.svg');
  for (const link of document.querySelectorAll('a[href]')) {
    if (/^https?:\/\//.test(link.getAttribute('href')!)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }
  const markdownLink = document.createElement('a');
  markdownLink.href = `/api/${markdownPath}`;
  markdownLink.textContent = 'View Markdown';
  document.querySelector('#content h1')?.after(markdownLink);
  const alternate = document.createElement('link');
  alternate.setAttribute('rel', 'alternate');
  alternate.setAttribute('type', 'text/markdown');
  alternate.setAttribute('href', `/api/${markdownPath}`);
  document.head.append(alternate);
  await writeFile(file, document.toString());
}
if (pages.length < 2) throw new Error('Dokka generated no public API pages.');

await writeFile(join(destination, 'index.md'), [
  '# Prosa.kt API reference', '',
  '> Public Kotlin API signatures and KDoc. Follow the links below to look up builder scopes, available methods, parameter types, and overloads.', '',
  '[Complete API reference](/api/full.md)', '',
  ...pages.filter(page => page.path !== 'index.md').map(page => `- [${page.title}](/api/${page.path})`), '',
].join('\n'));
await writeFile(join(destination, 'full.md'), [
  '# Prosa.kt — complete API reference', '',
  '> Complete public Kotlin API signatures and KDoc. Use this reference to check builder scopes, available methods, parameter types, and overloads when generating Prosa.kt code.', '',
  ...pages.map(page => `${page.markdown}\n---\n`),
].join('\n'));
console.log(`Generated HTML and Markdown API reference (${pages.length} pages) in public/api/.`);
