# თავისუფლების მოედანი (Freedom Square) — freedomsquaretbilisi.com

ერთგვერდიანი, მხოლოდ ქართულენოვანი (`<html lang="ka">`) სამოგზაურო გზამკვლევი
თბილისის თავისუფლების მოედნისთვის, SEO ერთეულის (entity) სრული მიბმით.

## Stack

- Astro 7.3.2 + `@astrojs/sitemap`
- Tailwind CSS 4.3.3 (`@tailwindcss/vite`)
- TypeScript 6.0.3
- pnpm 12.3.4 · Node.js 24.21.0
- Cloudflare Workers Static Assets (Wrangler 4.129.1)

## Domain / site configuration

დომენის ერთადერთი წყაროა `src/config.ts` (`DOMAIN`, `SITE_URL`), რომელსაც
იმპორტირებს `astro.config.ts` (`site` + `sitemap`).

- `SITE_URL = 'https://freedomsquaretbilisi.com'`
- canonical, Open Graph URL/image და JSON-LD `url` მომდინარეობს `Astro.site`-იდან.
- `@astrojs/sitemap` ქმნის `sitemap-index.xml` + `sitemap-0.xml`.
- `public/robots.txt` მიუთითებს sitemap-ზე.

## Entity data (NAP)

| ველი | მნიშვნელობა |
| --- | --- |
| ოფიციალური სახელი | თავისუფლების მოედანი |
| ინგლისური სახელი | Freedom Square (ასევე Liberty Square) |
| მისამართი | 2 Freedom Square, თბილისი, საქართველო |
| Plus Code | MRV2+8J |
| კოორდინატები | 41.6939923, 44.7982501 |
| Google შეფასება | 4.7 · 17 408 |
| სამუშაო საათები | 24 საათი (ღია საჯარო სივრცე) |
| Google Maps | https://maps.app.goo.gl/rqxiNyCApkLgwuFy7 |

## SEO სტრუქტურა

- `<head>`: TDK (title/description) + `robots` + canonical + hreflang + OG/Twitter
  (სურათის `alt`-ით) + `manifest` + `theme-color`.
- JSON-LD #1: `@graph` — `Organization`, `WebSite`, `WebPage` (`dateModified`),
  `TouristAttraction` (`@id` `#attraction`, `image`, `isAccessibleForFree`, `geo`,
  `hasMap`, `sameAs`, `openingHoursSpecification`, `aggregateRating`), `BreadcrumbList`.
- JSON-LD #2: `FAQPage` (8 კითხვა, სქემა ემთხვევა გვერდზე ხილულ `<details>`-ებს).
- H1: `თავისუფლების მოედანი (Freedom Square · თბილისი)`; H2-ები მიბმულია
  მიმოხილვაზე, ისტორიაზე, მდებარეობაზე, ახლომდებარე ობიექტებსა და წყაროებზე.
- ტექსტში: პირველი აბზაცის ეკვივალენტობა (თავისუფლების მოედანი = Freedom Square),
  ვიზუალური breadcrumb, ახლომდებარე ღირსშესანიშნაობების კლასტერი
  (+ `landmark-chips` ბლოკი `NEARBY_LANDMARKS` მონაცემებიდან).
- რუკა: ჩაშენებული Google Maps iframe (იგივე place-ID/კოორდინატები, ენა `ka/ge`)
  + `.gov.ge` / `.travel` ავტორიტეტული გარე ბმულები.
- წყაროების სექცია (`#sources`): 6 ოფიციალური/საჯარო წყარო + ბოლო განახლება +
  ფოტოების ავტორობა (E-E-A-T).
- Footer: NAP (`თავისუფლების მოედანი (Freedom Square)` + მისამართი + Plus Code),
  სურათების საავტორო უფლებების შეტყობინება და დისკლეიმერი.

## PWA

- `public/site.webmanifest` — `start_url: /`, `lang: ka`, standalone, maskable icon.
- `public/sw.js` — precache, navigation network-first, offline fallback `/`.
- Service worker რეგისტრირდება მხოლოდ HTTPS-ზე.

## Google Analytics 4

GA4 ID `G-HXM22WWPKP` იტვირთება **მხოლოდ თანხმობის შემდეგ** (footer-ის
„თანხმობა / უარი“ ღილაკები, `localStorage['freedomsquaretbilisi-consent']`,
`anonymize_ip: true`).

## Commands

```bash
pnpm install
pnpm check        # astro check — 0 errors / 0 warnings / 0 hints
pnpm build        # → dist/ (index.html + sitemap-index.xml + sitemap-0.xml)
node scripts/check-dist.mjs     # 46 შემოწმება dist/index.html-ზე
pnpm verify                     # source-level guard checks
pnpm deploy                     # pnpm build && wrangler deploy
```

Cloudflare-ზე `dist/` იტვირთება Workers Static Assets-ად (`wrangler.jsonc`,
`name: freedomsquaretbilisi`); მონაცემთა ბაზა, ავტორიზაცია ან სერვერული API არ გამოიყენება.

## Images

ორი რეალური ფოტო ლოკალურადაა `public/images/`-ში (`freedom-square-tbilisi-hero.jpg`,
`freedom-square-tbilisi-night.jpg`). წყაროები და ლიცენზიები — `IMAGE_CREDITS.md`.
