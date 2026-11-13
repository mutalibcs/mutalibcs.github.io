import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mutalibcs.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path.includes('404') || path.includes('google')) return false;
        if (path.includes('2026-01-01') || path.includes('2025-05-16') || path.includes('2026-04-01')) return false;
        if (
          path.includes('/about') ||
          path.includes('/home') ||
          path.includes('/profile') ||
          path.includes('/resume') ||
          path.includes('/contact.') ||
          path.includes('/contact/') ||
          path.includes('/cv.html') ||
          path.includes('/publications.html') ||
          path.includes('/education') ||
          path.includes('/year-archive')
        ) {
          return false;
        }
        return true;
      }
    })
  ]
});
