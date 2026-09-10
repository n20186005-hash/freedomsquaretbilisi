import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * ერთადერთი ადგილი დომენის/საიტის URL-ის დასაყენებლად.
 * დატოვეთ ცარიელი დომენის შერჩევამდე — build ამ შემთხვევაშიც მუშაობს.
 */
const SITE = '';

export default defineConfig({
  site: SITE || undefined,
  integrations: SITE ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
