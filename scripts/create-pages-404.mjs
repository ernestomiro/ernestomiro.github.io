import {
  copyFileSync,
  existsSync,
  readdirSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const browserOutput = resolve('dist', 'portfolio', 'browser');
const prerenderedNotFound = join(browserOutput, '404', 'index.html');
const pagesFallback = join(browserOutput, '404.html');
const sitemap = join(browserOutput, 'sitemap.xml');
const siteUrl = 'https://ernestomiro.github.io';

if (!existsSync(prerenderedNotFound)) {
  throw new Error(`Prerendered not-found document is missing: ${prerenderedNotFound}`);
}

copyFileSync(prerenderedNotFound, pagesFallback);
console.log(`GitHub Pages fallback created: ${pagesFallback}`);

function findPrerenderedPages(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return findPrerenderedPages(entryPath);
    }

    return entry.isFile() && entry.name === 'index.html' ? [entryPath] : [];
  });
}

const publicUrls = findPrerenderedPages(browserOutput)
  .map((page) => relative(browserOutput, dirname(page)))
  .filter((route) => route !== '404')
  .map((route) => {
    const pathname = route ? `/${route.split(sep).join('/')}` : '/';

    return new URL(pathname, siteUrl).toString();
  })
  .sort();

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...publicUrls.flatMap((url) => ['  <url>', `    <loc>${url}</loc>`, '  </url>']),
  '</urlset>',
  '',
].join('\n');

writeFileSync(sitemap, sitemapXml, 'utf8');
console.log(`Sitemap created with ${publicUrls.length} routes: ${sitemap}`);
