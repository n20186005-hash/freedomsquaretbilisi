import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const blocked = [['example','com'].join('.'), ['local','host'].join(''), ['chrome-extension', '://'].join('')];
const textExt = new Set(['.astro','.ts','.js','.mjs','.json','.jsonc','.css','.md','.txt','.yaml','.yml','.svg']);
const violations = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['node_modules','dist','.astro','.wrangler'].includes(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else {
      const dot = entry.name.lastIndexOf('.');
      const ext = dot >= 0 ? entry.name.slice(dot) : '';
      if (!textExt.has(ext)) continue;
      const text = await readFile(full, 'utf8');
      for (const token of blocked) if (text.includes(token)) violations.push(`${relative(root, full)} contains ${token}`);
    }
  }
}

await walk(root);
if (existsSync(join(root, 'pnpm-workspace.yaml'))) violations.push('Single-package project unexpectedly contains pnpm-workspace.yaml');
const astroConfig = await readFile(join(root, 'astro.config.ts'), 'utf8');
if (!astroConfig.includes("const SITE = '';")) violations.push('SITE must default to an empty string');
if (!astroConfig.includes('integrations: SITE ? [sitemap()] : []')) violations.push('Sitemap must be conditional on SITE');

if (violations.length) {
  console.error(violations.join('\n'));
  process.exit(1);
}
console.log('Source-level guard checks passed.');
