import type { APIContext } from 'astro';
import { docMarkdown, getDocs } from '../lib/docs-markdown';

export async function GET(context: APIContext) {
  const pages = await Promise.all((await getDocs()).map((entry) => docMarkdown(entry, context)));
  return new Response(['# Prosa.kt', ...pages].join('\n\n---\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
