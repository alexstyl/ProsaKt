function updateExternalLinks() {
  for (const link of document.querySelectorAll<HTMLAnchorElement>('a[href]')) {
    const url = new URL(link.href);
    if (['http:', 'https:'].includes(url.protocol) && url.origin !== location.origin) {
      link.target = '_blank';
      link.relList.add('noopener', 'noreferrer');
    }
  }
}

updateExternalLinks();
document.addEventListener('astro:page-load', updateExternalLinks);
