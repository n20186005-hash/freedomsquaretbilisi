# Build / validation status

Source-level validation was completed in this environment, but the requested clean pnpm installation and Astro build could **not** be certified because the execution container has no outbound access to the npm registry.

Attempted package-manager bootstrap:

```text
corepack prepare pnpm@12.3.4 --activate
→ request to https://registry.npmjs.org/pnpm/-/pnpm-12.3.4.tgz failed
```

Because pnpm itself could not be downloaded, a genuine synchronized `pnpm-lock.yaml` could not be generated here. No fabricated lockfile is included.

Checks that were completed successfully:

- package/config JSON parsing
- source guard scan for prohibited placeholder/injected URL schemes
- confirmation that there is no `pnpm-workspace.yaml`
- confirmation that `SITE` defaults to empty and sitemap integration is conditional
- confirmation that map locale parameters are Georgian (`ka` / `ge`)
- local logo/favicon asset generation

Before production deployment, run in a network-enabled environment:

```bash
corepack enable
pnpm install
pnpm install --lockfile-only
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
node scripts/verify-source.mjs
```

With `SITE = ''`, no sitemap should be emitted. After configuring a real domain in `astro.config.ts`, rebuild and confirm the generated sitemap contains only that real origin and no invented `lastmod` values.
