# Md Abdul Mutalib — Academic Research Portfolio

[![Deploy Astro site to Pages](https://github.com/mutalibcs/mutalibcs.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/mutalibcs/mutalibcs.github.io/actions/workflows/pages.yml)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.23.4-brightgreen)](https://nodejs.org)
[![Astro Version](https://img.shields.io/badge/Astro-7.4-BC52EE.svg)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, accessible, and automated academic research portfolio built with **Astro**, **TypeScript**, **Markdown**, and modern semantic **CSS**. Designed specifically for academic evaluators, prospective PhD supervisors, and researchers to assess publications, review methodological briefs, access Highwire-indexed scholarly metadata, and copy/download citations in seconds.

---

## ⚡ Quick Start & Tested Commands

```bash
# 1. Install locked dependencies
npm ci

# 2. Start local development server (with HMR)
npm run dev

# 3. Typecheck Astro components and TypeScript data
npm run check

# 4. Compile production static output to dist/
npm run build

# 5. Run the comprehensive quality and security validation suite
npm run validate

# 6. Preview the production build locally
npm run preview
# Preview server available at http://localhost:4321
```

---

## 🗂️ Project Architecture

```text
.github/workflows/
  pages.yml                       # GitHub Actions CI/CD for validation and Pages deployment
src/
  assets/                         # High-resolution optimized portrait and visuals
  components/
    Header.astro                  # Accessible sticky header with dark/light mode toggle
    Footer.astro                  # Semantic footer with academic profile links and copyright
    PublicationEntry.astro        # Scholarly bibliographic entry card with badges and actions
    CitationTools.astro           # BibTeX and plain citation copy/download toolbar with fallback
    SeoHead.astro                 # SEO, OpenGraph, Twitter Cards, and JSON-LD structured data
    ScholarMeta.astro             # Highwire Press meta tags for Google Scholar crawling
  content/
    publications/                 # One Markdown record per genuine paper
  content.config.ts               # Astro content layer schema with strict typing
  data/
    profile.ts                    # Single point of edit for name, affiliation, email, and links
    cv.ts                         # Verified education, research, experience, and proficiencies
    faq.ts                        # Methodological Q&A
  layouts/
    BaseLayout.astro              # Base HTML skeleton with no-flash theme script
    PublicationLayout.astro       # Specialized layout with Highwire tags & ScholarlyArticle JSON-LD
  pages/
    index.astro                   # Homepage featuring structured narrative & lead study highlight
    publications/index.astro      # Full publication archive with real-time search and topic filters
    publication/[slug]/index.astro# Dedicated crawlable abstract and research brief page
    publication/[slug]/cite.bib.ts# Dynamic BibTeX file endpoint (/publication/<slug>/cite.bib)
    cv/index.astro                # Curriculum Vitae generated from content collections
    contacts/index.astro          # Institutional contact details and campus map
    404.astro                     # Custom 404 error page (no canonical, noindex)
  styles/
    global.css                    # Academic publication styling with CSS custom properties
  utils/
    paths.ts                      # Centralized path & URL helpers supporting root and subpath
public/
  publication/<slug>/paper.pdf    # Approved full-text open-access PDFs
  icons/                          # Favicons, apple touch icons, and web manifest
  robots.txt                      # Search engine crawler instructions and sitemap link
  downloads/                      # Downloadable academic CV PDF
scripts/
  generate_redirects.ts           # Unified generator for legacy Jekyll URL compatibility stubs
  validate.ts                     # Pre-deployment validation test suite (27 checks)
  measure_offsets.ts              # Headless Chrome layout measurement tool
docs/
  ADD_PUBLICATION_WORKFLOW.md     # AI-assisted publication ingestion instructions
  EDITING_GUIDE.md                # Comprehensive maintenance instructions
```

---

## ✍️ Content Maintenance & Editing Guide

All website data is kept strictly decoupled from presentation:

| Item to Change | File to Edit | Notes |
| :--- | :--- | :--- |
| **Affiliation, Name, Bio, Links** | `src/data/profile.ts` | Single edit propagates across Header, Footer, Hero, SEO, and JSON-LD |
| **Lead Paper Selection** | `src/content/publications/<slug>.md` | Set `isLead: true` on the target publication |
| **Portrait Photo** | `src/assets/profile.png` & `public/profile.png` | Standard PNG / WebP portrait |
| **Academic CV Sections** | `src/data/cv.ts` | Edit education, research, work experience, or skills |
| **New Publication** | `src/content/publications/<slug>.md` | One Markdown file automatically updates Homepage, Archive, CV, BibTeX, and Scholar tags |
| **Publication PDF** | `public/publication/<slug>/paper.pdf` | Add approved PDF and reference it in the Markdown `localPdf` field |

For complete documentation, see [EDITING_GUIDE.md](docs/EDITING_GUIDE.md).

---

## 🚀 Deployment Instructions (GitHub Pages)

### 1. Repository Settings
1. Navigate to your repository on GitHub: `https://github.com/mutalibcs/mutalibcs.github.io`.
2. Go to **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. The deployment workflow in `.github/workflows/pages.yml` will automatically trigger on pushes to `master`.

### 2. Pushing Your First Commit
```bash
git add .
git commit -m "feat: release verified academic research portfolio"
git push origin master
```

### 3. Inspecting the Live Site
- Check the **Actions** tab on GitHub to monitor the `Deploy Astro site to Pages` workflow.
- Once completed, visit `https://mutalibcs.github.io/` to verify your live portfolio.

### 4. Submitting Sitemap to Google Search Console
1. Open [Google Search Console](https://search.google.com/search-console).
2. Select your property: `https://mutalibcs.github.io/`.
3. In the sidebar, click **Sitemaps**.
4. Enter `sitemap-index.xml` in the field and click **Submit**.

---

## 🔒 Security & Privacy Notice
All legacy configuration files, credentials, IELTS documents, and recommendation letters have been backed up securely to a private local directory outside the repository and removed from the working tree. All build artifacts in `dist/` are automatically audited by `npm run validate` to guarantee that no sensitive files or development references leak into production.
