/**
 * dist/index.html-ის ავტომატური შემოწმება: SEO ერთეულის (entity) მიბმა,
 * სტრუქტურირებული მონაცემები, PWA, GA4 და სურათების alt ატრიბუტები.
 *
 * გაშვება: pnpm build && node scripts/check-dist.mjs
 */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const dist = join(root, 'dist');
const failures = [];
const passes = [];

function check(label, condition, detail = '') {
  if (condition) passes.push(label);
  else failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
}

const htmlPath = join(dist, 'index.html');
check('dist/index.html exists', existsSync(htmlPath));
if (!existsSync(htmlPath)) {
  console.error(failures.join('\n'));
  process.exit(1);
}

const html = await readFile(htmlPath, 'utf8');

// --- 1. TDK / canonical / OG ---
check('title contains entity + city', /<title>[^<]*თავისუფლების მოედანი[^<]*Freedom Square[^<]*<\/title>/.test(html));
check('meta description present', /<meta name="description" content="[^"]{80,}"/.test(html));
check('canonical absolute', /<link rel="canonical" href="https:\/\/freedomsquaretbilisi\.com\/"/.test(html));
check('og:image absolute local', /<meta property="og:image" content="https:\/\/freedomsquaretbilisi\.com\/images\/freedom-square-tbilisi-hero\.jpg"/.test(html));
check('og:image:alt present', /og:image:alt/.test(html));
check('og:url absolute', /<meta property="og:url" content="https:\/\/freedomsquaretbilisi\.com\/"/.test(html));
check('twitter:card summary_large_image', /twitter:card" content="summary_large_image"/.test(html));

// --- 2. JSON-LD ---
const ldBlocks = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
check('2 JSON-LD blocks', ldBlocks.length === 2, `found ${ldBlocks.length}`);
let graph = null;
let faqSchema = null;
try {
  graph = JSON.parse(ldBlocks[0]);
  faqSchema = JSON.parse(ldBlocks[1]);
  passes.push('JSON-LD blocks parse');
} catch (error) {
  failures.push(`JSON-LD parse error: ${error.message}`);
}
if (graph) {
  const nodes = graph['@graph'] || [];
  const attraction = nodes.find((node) => node['@type'] === 'TouristAttraction');
  check('TouristAttraction node present', Boolean(attraction));
  if (attraction) {
    check('attraction @id', attraction['@id'] === 'https://freedomsquaretbilisi.com/#attraction');
    check('attraction image array', Array.isArray(attraction.image) && attraction.image.length >= 1);
    check('attraction isAccessibleForFree', attraction.isAccessibleForFree === true);
    check('attraction geo', attraction.geo && attraction.geo.latitude === 41.6939923 && attraction.geo.longitude === 44.7982501);
    check('attraction hasMap', attraction.hasMap === 'https://maps.app.goo.gl/rqxiNyCApkLgwuFy7');
    check('attraction aggregateRating 4.7/17408', attraction.aggregateRating && attraction.aggregateRating.ratingValue === 4.7 && attraction.aggregateRating.ratingCount === 17408);
    check('attraction address GE', attraction.address && attraction.address.addressCountry === 'GE' && attraction.address.addressLocality === 'Tbilisi');
    check('attraction alternateName', Array.isArray(attraction.alternateName) && attraction.alternateName.includes('Liberty Square'));
  }
  check('Organization node present', nodes.some((node) => node['@type'] === 'Organization'));
  check('WebSite node present', nodes.some((node) => node['@type'] === 'WebSite'));
  check('WebPage with dateModified', nodes.some((node) => node['@type'] === 'WebPage' && node.dateModified));
  check('BreadcrumbList node present', nodes.some((node) => node['@type'] === 'BreadcrumbList'));
}
if (faqSchema) {
  const count = (faqSchema.mainEntity || []).length;
  const detailsCount = (html.match(/<details>/g) || []).length;
  check('FAQPage 5-8 questions', count >= 5 && count <= 8, `count ${count}`);
  check('FAQ schema matches visible details', count === detailsCount, `schema ${count} vs details ${detailsCount}`);
}

// --- 3. Headings ---
const h1s = [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)];
check('exactly one H1', h1s.length === 1, `found ${h1s.length}`);
check('H1 contains city', h1s.length === 1 && h1s[0][0].includes('თბილისი'));

// --- 4. Map / authoritative links ---
check('map iframe uses place id', /maps\/embed\?pb=[^"]*0x40440d57d314f4a7%3A0x692f47f1da1dd66a/.test(html));
check('iframe referrerpolicy strict-origin-when-cross-origin', /referrerpolicy="strict-origin-when-cross-origin"/.test(html));
check('govt tourism outbound link', /href="https:\/\/georgia\.travel\/"/.test(html));
check('govt city outbound link', /href="https:\/\/tbilisi\.gov\.ge\/"/.test(html));
check('external links have rel=noopener', !/<a [^>]*target="_blank"(?![^>]*rel="[^"]*noopener)[^>]*>/.test(html));

// --- 5. Images ---
const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
check('all images have non-empty alt', imgs.length > 0 && imgs.every((tag) => /alt="[^"]+"/.test(tag)), `${imgs.length} images`);
check('hero image is local', /<img src="\/images\/freedom-square-tbilisi-hero\.jpg"/.test(html));

// --- 6. PWA / GA4 / policy ---
check('manifest linked', /<link rel="manifest" href="\/site\.webmanifest"/.test(html));
check('service worker registered', /serviceWorker[^<]*register\('\/sw\.js'\)/.test(html));
check('GA4 id present', /G-HXM22WWPKP/.test(html));
check('GA4 gated behind consent', /freedomsquaretbilisi-consent/.test(html));
check('image copyright policy text', /ორიგინალ ავტორებს/.test(html));
check('sources section present', /id="sources"/.test(html));
check('last updated present', /id="sources"[\s\S]*2026/.test(html));

// --- 7. Forbidden leftovers (tokens are assembled at runtime to avoid self-matching) ---
const forbidden = [
  ['example', 'com'].join('.'),
  ['local', 'host'].join(''),
  ['ca-pub', '-'].join(''),
  ['adsby', 'google'].join(''),
  ['place', 'holder'].join(''),
];
for (const token of forbidden) {
  check(`no "${token}"`, !html.includes(token));
}

for (const pass of passes) console.log(`PASS  ${pass}`);
if (failures.length) {
  console.error('\nFAILURES:');
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}
console.log(`\nAll ${passes.length} checks passed.`);
