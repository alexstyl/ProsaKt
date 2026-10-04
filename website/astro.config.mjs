import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

export default defineConfig({
  site: process.env.SITE_URL || 'https://prosakt.com',
  integrations: [starlight({
    title: 'Prosa.kt',
    description: 'Declarative Kotlin code generation, written in pure Kotlin.',
    favicon: '/favicon.svg',
    head: process.env.NODE_ENV === 'production' ? [{
      tag: 'script',
      attrs: { async: true, src: 'https://scripts.simpleanalyticscdn.com/latest.js' },
    }] : [],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/alexstyl/ProsaKt' }],
    plugins: [starlightLlmsTxt()],
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
      { label: 'Start here', items: [
        { label: 'Installation', slug: 'docs/installation' },
        { label: 'Your first file', slug: 'docs/first-file' },
      ] },
      { label: 'API guides', items: [
        { label: 'Declarations', slug: 'docs/declarations' },
        { label: 'Types & imports', slug: 'docs/types' },
        { label: 'Expressions & calls', slug: 'docs/expressions' },
        { label: 'Control flow', slug: 'docs/control-flow' },
        { label: 'Files & formatting', slug: 'docs/files' },
      ] },
      { label: 'llms.txt', link: '/llms.txt' },
    ],
  })],
});
