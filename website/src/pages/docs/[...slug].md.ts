import type { APIContext } from 'astro';
import { docMarkdown, getDocs } from '../../lib/docs-markdown';

export async function getStaticPaths() {
  return (await getDocs()).map((entry) => ({
    params: { slug: entry.id.replace(/^docs\//, '') },
    props: { entry },
  }));
}

export async function GET(context: APIContext) {
  return new Response(await docMarkdown(context.props.entry, context), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
