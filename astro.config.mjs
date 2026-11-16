import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

const SITE_ORIGIN = 'https://mutalibcs.github.io';
const ROOT_DIR = process.cwd();
const PUBS_DIR = path.join(ROOT_DIR, 'src', 'content', 'publications');

// Dynamically discover all publication PDFs, BibTeX endpoints, and metadata
const customPages = [];
const pubMetadata = new Map();

if (fs.existsSync(PUBS_DIR)) {
  const pubFiles = fs.readdirSync(PUBS_DIR).filter((f) => f.endsWith('.md'));

  for (const file of pubFiles) {
    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(PUBS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract date
    const dateMatch = content.match(/date:\s*['"]?([0-9-]+)['"]?/);
    const pubDate = dateMatch ? new Date(dateMatch[1]) : new Date();

    // Extract localPdf
    const pdfMatch = content.match(/localPdf:\s*['"]?([^'"\r\n]+)['"]?/);
    if (pdfMatch) {
      const pdfPath = pdfMatch[1].trim();
      const pdfUrl = `${SITE_ORIGIN}${pdfPath.startsWith('/') ? '' : '/'}${pdfPath}`;
      customPages.push(pdfUrl);
    }

    // BibTeX citation endpoint
    const bibUrl = `${SITE_ORIGIN}/publication/${slug}/cite.bib`;
    customPages.push(bibUrl);

    pubMetadata.set(`/publication/${slug}/`, { date: pubDate });
  }
}

// Add verified CV PDF download
customPages.push(`${SITE_ORIGIN}/downloads/Md_Abdul_Mutalib_CV.pdf`);

export default defineConfig({
  site: SITE_ORIGIN,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [
    sitemap({
      customPages,
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
      },
      serialize: (item) => {
        const url = new URL(item.url);
        const pathname = url.pathname;

        // 1. Homepage
        if (pathname === '/' || pathname === '') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          item.lastmod = new Date();
          return item;
        }

        // 2. Publications Index
        if (pathname === '/publications/' || pathname === '/publications') {
          item.priority = 0.95;
          item.changefreq = 'weekly';
          item.lastmod = new Date();
          return item;
        }

        // 3. Curriculum Vitae Page
        if (pathname === '/cv/' || pathname === '/cv') {
          item.priority = 0.85;
          item.changefreq = 'monthly';
          return item;
        }

        // 4. Contact Page
        if (pathname === '/contacts/' || pathname === '/contacts') {
          item.priority = 0.70;
          item.changefreq = 'monthly';
          return item;
        }

        // 5. Individual Publication HTML Pages
        if (pathname.startsWith('/publication/') && !pathname.endsWith('.pdf') && !pathname.endsWith('.bib')) {
          item.priority = 0.90;
          item.changefreq = 'monthly';
          const meta = pubMetadata.get(pathname.endsWith('/') ? pathname : `${pathname}/`);
          if (meta?.date) {
            item.lastmod = meta.date;
          }
          return item;
        }

        // 6. Full-Text Research Paper PDFs & CV PDF
        if (pathname.endsWith('.pdf')) {
          item.priority = 0.85;
          item.changefreq = 'monthly';
          return item;
        }

        // 7. Citation BibTeX Files
        if (pathname.endsWith('.bib')) {
          item.priority = 0.50;
          item.changefreq = 'yearly';
          return item;
        }

        return item;
      }
    })
  ]
});
