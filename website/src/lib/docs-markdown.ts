import { getCollection, render, type CollectionEntry } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { APIContext } from 'astro';
import mdxRenderer from '@astrojs/mdx/server.js';
import TurndownService from 'turndown';

export async function getDocs() {
  return (await getCollection('docs', ({ data }) => !data.draft)).sort((a, b) =>
    (a.data.sidebar.order ?? Infinity) - (b.data.sidebar.order ?? Infinity) || a.data.title.localeCompare(b.data.title)
  );
}

export function markdownUrl(id: string, site: URL) {
  return new URL(`/${id}.md`, site).href;
}

export async function docMarkdown(entry: CollectionEntry<'docs'>, context: APIContext) {
  const { Content } = await render(entry);
  const container = await AstroContainer.create();
  container.addServerRenderer({ name: 'astro:jsx', renderer: mdxRenderer });
  const html = await container.renderToString(Content, context);
  const converter = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-', preformattedCode: true });
  converter.remove(['style', 'script', 'button']);
  converter.addRule('codeBlocks', {
    filter: 'pre',
    replacement: (_content, node) => {
      const code = node.querySelector('code');
      const lines = node.querySelectorAll('.ec-line');
      const source = lines.length
        ? Array.from(lines, (line) => line.textContent?.replace(/\n$/, '') ?? '').join('\n')
        : code?.textContent ?? node.textContent ?? '';
      const language = node.getAttribute('data-language') ?? code?.className.match(/language-(\S+)/)?.[1] ?? '';
      const fence = '`'.repeat(Math.max(3, ...Array.from(source.matchAll(/`+/g), (match) => match[0].length + 1)));
      return `\n\n${fence}${language}\n${source.trimEnd()}\n${fence}\n\n`;
    },
  });
  converter.addRule('links', {
    filter: (node) => node.nodeName === 'A' && node.hasAttribute('href'),
    replacement: (content, node) => {
      const href = node.getAttribute('href')!;
      if (node.classList.contains('sl-anchor-link')) return '';
      const url = new URL(href, new URL(`/${entry.id}/`, context.site));
      if (url.origin === context.site!.origin && url.pathname.startsWith('/docs/') && !url.pathname.endsWith('.md')) {
        url.pathname = url.pathname.replace(/\/$/, '') + '.md';
      }
      return `[${content}](${url.href})`;
    },
  });
  return `# ${entry.data.title}\n\n> ${entry.data.description}\n\n${converter.turndown(html).trim()}\n`;
}
