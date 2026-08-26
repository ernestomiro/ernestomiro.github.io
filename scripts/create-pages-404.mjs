import { copyFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const browserOutput = resolve('dist', 'portfolio', 'browser');
const prerenderedNotFound = join(browserOutput, '404', 'index.html');
const pagesFallback = join(browserOutput, '404.html');

if (!existsSync(prerenderedNotFound)) {
  throw new Error(`Prerendered not-found document is missing: ${prerenderedNotFound}`);
}

copyFileSync(prerenderedNotFound, pagesFallback);
console.log(`GitHub Pages fallback created: ${pagesFallback}`);
