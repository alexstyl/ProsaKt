import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';

/** Convert Dokka content, excluding navigation and other interactive chrome. */
export function apiMarkdown(html: string, pagePath: string) {
  const { document } = parseHTML(html);
  const content = document.querySelector('#content');
  if (!content) return null;

  const title = content.querySelector('.breadcrumbs')?.textContent?.trim()
    || content.querySelector('h1')?.textContent?.trim() || 'Prosa.kt';
  content.querySelectorAll('.breadcrumbs, .anchor-wrapper, button, script, style').forEach(node => node.remove());
  const heading = content.querySelector('h1');
  if (heading) heading.textContent = title;

  const converter = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
  converter.addRule('signatures', {
    filter: node => node.classList.contains('symbol'),
    replacement: (_content, node) => {
      const source = node.textContent?.trim() ?? '';
      const fence = '`'.repeat(Math.max(3, ...Array.from(source.matchAll(/`+/g), match => match[0].length + 1)));
      return `\n\n${fence}kotlin\n${source}\n${fence}\n\n`;
    },
  });
  converter.addRule('links', {
    filter: node => node.nodeName === 'A' && node.hasAttribute('href'),
    replacement: (text, node) => {
      const url = new URL(node.getAttribute('href')!, `https://api.invalid/api/${pagePath}`);
      if (url.origin === 'https://api.invalid') {
        return `[${text}](${url.pathname.replace(/\.html$/, '.md')})`;
      }
      return `[${text}](${url.href})`;
    },
  });
  return { title, markdown: converter.turndown(content.innerHTML).trim() + '\n' };
}
