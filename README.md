# თავისუფლების მოედანი — Astro / Cloudflare Workers

ერთგვერდიანი, მხოლოდ ქართულენოვანი ტურისტული საიტი თბილისის თავისუფლების მოედნისთვის.

## Stack

- Astro 7.3.2
- Tailwind CSS 4.3.3 via `@tailwindcss/vite`
- TypeScript 6.0.3
- pnpm 12.3.4
- Node.js 24.21.0
- Cloudflare Workers Static Assets via Wrangler 4.129.1

## Domain / site configuration

There is exactly one domain configuration point: `SITE` in `astro.config.ts`.

- Keep `SITE = ''` before a domain is selected. The project is designed to build without a domain.
- When a real domain is chosen, set `SITE` to that HTTPS origin and rebuild.
- Canonical URL, Open Graph URL/image and JSON-LD `url` are derived from `Astro.site`.
- `@astrojs/sitemap` is enabled only when `SITE` is non-empty, so no placeholder URLs are ever generated.

## Commands

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

Cloudflare deploys the generated `dist/` folder as Workers Static Assets; no database, login, CMS or server-side API is used.

## Google Analytics

GA4 measurement ID is `G-HXM22WWPKP` and the page loads only the official Google tag script.

## Images

The two visitor-facing photos are real Wikimedia Commons photographs with attribution. See `IMAGE_CREDITS.md`. Logo, favicon and social card are local SVG/PNG assets.
