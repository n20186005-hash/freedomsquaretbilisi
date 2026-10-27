# Freedom Square Tbilisi visitor guide

Independent nonprofit educational guide with the existing Georgian, English and Russian static pages. Maps information is attributed and dated; the guide is not an operator or municipal website.

Use the exact Node and pnpm versions in package.json. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm verify`, `pnpm build` and `node scripts/check-dist.mjs`. The existing deployment route uses Wrangler with the default worker-first asset guard.

The existing two-choice Google Analytics control verifies saved choices, applies runtime refusal immediately and keeps a tab-session veto if shared persistence fails. It controls GA, not the embedded Google Maps service or separate hosting analytics. Loaded scripts do not establish successful data delivery.

The current graphics are original labelled concepts; see IMAGE_CREDITS.md. The service worker caches only valid pages and reports unavailable offline pages without substituting the homepage.
