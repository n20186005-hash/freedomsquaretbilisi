import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config';

/**
 * დომენის ერთადერთი კონფიგურაციის წერტილი — იმპორტირდება `src/config.ts`-იდან.
 * canonical, Open Graph და JSON-LD `url` მომდინარეობს `Astro.site`-იდან.
 */
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
