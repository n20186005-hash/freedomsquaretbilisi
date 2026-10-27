/**
 * წყაროს დონის დაცვის შემოწმება (build-ამდე).
 * ამოწმებს, რომ არ არსებობს აკრძალული დროებითი მნიშვნელობები და რომ დომენის
 * ერთადერთი წყარო (`src/config.ts`) და sitemap-ის ინტეგრაცია სწორადაა.
 * Markdown დოკუმენტაცია გამოტოვებულია, რადგან ის შეიძლება აღწერდეს ამ სიტყვებს.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const blocked = [
  ['example', 'com'].join('.'),
  ['local', 'host'].join(''),
  ['chrome-extension', '://'].join(''),
  ['ca-pub', '-'].join(''),
  ['adsby', 'google'].join(''),
];
const textExt = new Set(['.astro', '.ts', '.js', '.mjs', '.json', '.jsonc', '.css', '.txt', '.yaml', '.yml', '.svg', '.webmanifest']);
const violations = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.astro', '.wrangler', '.git'].includes(entry.name)) continue;
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

const config = await readFile(join(root, 'src', 'config.ts'), 'utf8');
if (!config.includes("export const DOMAIN = 'freedomsquaretbilisi.com';")) {
  violations.push('src/config.ts must define DOMAIN = freedomsquaretbilisi.com');
}
if (!config.includes('MRV2+8J')) violations.push('src/config.ts must contain Plus Code MRV2+8J');
if (!config.includes('https://maps.app.goo.gl/rqxiNyCApkLgwuFy7')) {
  violations.push('src/config.ts must contain the official Google Maps share URL');
}

const astroConfig = await readFile(join(root, 'astro.config.ts'), 'utf8');
if (!astroConfig.includes('SITE_URL')) violations.push('astro.config.ts must reuse SITE_URL from src/config.ts');
if (!/sitemap\s*\(/.test(astroConfig)) violations.push('astro.config.ts must enable the sitemap integration');

if (existsSync(join(root, 'package-lock.json'))) {
  violations.push('package-lock.json should not exist — this project uses pnpm');
}

if (violations.length) {
  console.error(violations.join('\n'));
  process.exit(1);
}
console.log('Source-level guard checks passed.');
