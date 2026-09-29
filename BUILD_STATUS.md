# Build / validation status

Validated in this environment — date 2026-09-29 (multilingual: ka/en/ru).

## Commands executed

```text
pnpm install                    → 310 packages, lockfile generated (pnpm-lock.yaml)
pnpm check                      → Result (9+ files): 0 errors, 0 warnings, 0 hints
pnpm build                      → dist/index.html + dist/en/index.html + dist/ru/index.html + sitemap-index.xml + sitemap-0.xml
node scripts/check-dist.mjs     → All 54 checks passed (ka + en + ru pages, JSON-LD/PWA/GA4)
node scripts/verify-source.mjs  → Source-level guard checks passed
```

## What `scripts/check-dist.mjs` verifies against `dist/index.html`

1. TDK/canonical/OG/Twitter — entity + city in `<title>`, absolute canonical,
   absolute local `og:image` with `og:image:alt`, `og:url`, `summary_large_image`.
2. JSON-LD — both blocks parse; `@graph` contains `Organization`, `WebSite`,
   `WebPage` (with `dateModified`), `TouristAttraction`
   (`@id .../#attraction`, `image[]`, `isAccessibleForFree`, exact `geo`,
   `hasMap`, `aggregateRating` 4.7/17536, `addressCountry: GE`, `alternateName`)
   and `BreadcrumbList`; `FAQPage` question count is within 5–8 and equals the
   number of visible `<details>` elements.
3b. Multilingual — `dist/en/index.html` (`lang="en"`, `og:locale en_US`) and
   `dist/ru/index.html` (`lang="ru"`, `og:locale ru_RU`) both exist and emit
   the full `hreflang` alternate set (`ka`/`en`/`ru`/`x-default`); entity name
   rendered per locale (Freedom Square / Площадь Свободы).
3. Headings — exactly one `<h1>`, containing the city.
4. Map/authority — iframe keeps the official place ID and
   `referrerpolicy="strict-origin-when-cross-origin"`; `georgia.travel` and
   `tbilisi.gov.ge` outbound links present; every `target="_blank"` link has
   `rel` containing `noopener`.
5. Images — every `<img>` has a non-empty `alt`; hero image is local.
6. PWA/GA4/policy — manifest link, service worker registration, `G-HXM22WWPKP`
   behind the consent gate, image copyright notice, `#sources` section.
7. Leftovers — no `example.com`, `localhost`, `ca-pub-`, `adsbygoogle` or
   `placeholder` tokens.

## Notes

- `astro check` reports 0 hints because both JSON-LD scripts use `is:inline`.
- The Cloudflare **Workers Static Assets** worker name is `freedomsquaretbilisi`
  (`wrangler.jsonc`), matching the production domain.
- Remaining manual step: Georgian copy is written by the maintainer, but a final
  native-speaker proofread before launch is still recommended.
