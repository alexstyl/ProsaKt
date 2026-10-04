import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : process.env.SITE_URL || 'https://prosakt.com';
const socialImage = new URL('/og.png', site).href;

export default defineConfig({
  site,
  integrations: [starlight({
    title: 'Prosa.kt',
    description: 'Declarative Kotlin code generation, written in pure Kotlin.',
    favicon: '/favicon-pilcrow.svg',
    components: {
      SiteTitle: './src/components/docs-site-title.astro',
      SocialIcons: './src/components/docs-social-icons.astro',
      Head: './src/components/docs-head.astro',
      PageTitle: './src/components/docs-page-title.astro',
    },
    customCss: ['./src/styles/docs.css'],
    head: [
      { tag: 'meta', attrs: { property: 'og:image', content: socialImage } },
      { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
      { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
      { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Prosa.kt pilcrow on a yellow background' } },
      { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      { tag: 'meta', attrs: { name: 'twitter:image', content: socialImage } },
      ...(process.env.NODE_ENV === 'production' ? [{
        tag: 'script',
        attrs: { async: true, src: 'https://scripts.simpleanalyticscdn.com/latest.js' },
      }] : []),
    ],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/alexstyl/ProsaKt' }],
    expressiveCode: {
      themes: ['github-dark', 'github-light'],
      useStarlightUiThemeColors: false,
      styleOverrides: {
        codeFontFamily: 'var(--__sl-font-mono, ui-monospace, monospace)',
        codeFontSize: 'var(--sl-text-code, 0.875rem)',
        codeLineHeight: 'var(--sl-line-height, 1.7)',
        uiFontFamily: 'var(--__sl-font, system-ui, sans-serif)',
      },
    },
    sidebar: [
      { label: 'Getting started', items: [
        { label: 'Installation', slug: 'docs/installation' },
        { label: 'Your first Kotlin file', slug: 'docs/first-file' },
        { label: 'API Reference', link: new URL('/api/index.html', site).href, attrs: { target: '_blank', rel: 'noopener noreferrer' } },
        { label: 'llms.txt', link: '/llms.txt', attrs: { target: '_blank', rel: 'noopener noreferrer' } },
      ] },
      { label: 'API guides', items: [
        { label: 'Classes', slug: 'docs/classes' },
        { label: 'Interfaces', slug: 'docs/interfaces' },
        { label: 'Objects', slug: 'docs/objects' },
        { label: 'Functions', slug: 'docs/functions' },
        { label: 'Values and Variables', slug: 'docs/properties' },
        { label: 'Types', slug: 'docs/types' },
        { label: 'Annotations', slug: 'docs/annotations' },
        { label: 'Visibility & modifiers', slug: 'docs/visibility' },
        { label: 'Imports', slug: 'docs/imports' },
      ] },
    ],
  })],
});
