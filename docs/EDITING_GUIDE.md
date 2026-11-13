# Portfolio Maintenance & Editing Guide

This guide documents the editing workflows, schema requirements, privacy conventions, and deployment procedures for **Md Abdul Mutalib's Academic Research Portfolio**.

---

## 1. Day-to-Day Editing

### A. Adding a New Publication
Adding a publication requires creating a single Markdown file in `src/content/publications/<slug>.md`:

1. Choose a clean, kebab-case filename (e.g., `surgical-gaussian-splatting-segmentation.md`).
2. Add frontmatter conforming to the schema in `src/content.config.ts`:
   ```yaml
   ---
   title: "Semantic-Temporal 3D Gaussian Splatting for Surgical Scene Understanding"
   authors:
     - "Md Abdul Mutalib"
     - "Collaborator Name"
   type: "conference" # 'journal' | 'conference' | 'preprint' | 'book'
   year: 2026
   date: "2026-10" # Accepted formats: YYYY, YYYY-MM, or YYYY-MM-DD
   venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)"
   conference: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)"
   location: "Seattle, WA, USA"
   doi: "10.1109/CVPR.2026.123456"
   publisherUrl: "https://doi.org/10.1109/CVPR.2026.123456"
   featured: true
   firstAuthor: true
   isLead: false # Set to true to make this the featured lead study on the homepage
   topics:
     - "3D Vision"
     - "Gaussian Splatting"
     - "Surgical Vision"
   summary: "A novel semantic-temporal 3D Gaussian Splatting framework achieving real-time anatomical reconstruction and surgical instrument tracking."
   legacyRedirects: []
   ---

   ## Author-Written Abstract
   [Paste author abstract here]

   ---

   ## Plain-English Research Brief
   ### 1. Research Question & Clinical Need
   ...
   ```
3. Save the file. Running `npm run build` will automatically:
   - Create the permanent URL `/publication/<slug>/`.
   - Update the homepage featured list and publications archive (`/publications/`).
   - Add the paper to the online CV (`/cv/`).
   - Generate the dynamic BibTeX endpoint at `/publication/<slug>/cite.bib`.
   - Inject Highwire Press tags for Google Scholar indexing.

### B. Selecting or Rotating the Lead Research Paper
The homepage features one lead research study directly below the researcher introduction.
- To set a paper as the lead study, open its Markdown record in `src/content/publications/` and set:
  ```yaml
  isLead: true
  ```
- If no paper has `isLead: true`, the system automatically falls back to the most recent publication where `firstAuthor: true`.
- To rotate to a new lead paper, set `isLead: false` on the old paper and `isLead: true` on the new one.

### C. Updating Affiliation, Role, or Profiles
**File:** `src/data/profile.ts`
- Edit `affiliation`, `department`, `researchCenter`, or `role`.
- Updating this single file propagates across the Header, Footer, Hero section, SEO metadata, and JSON-LD structured data.

### D. Updating Curriculum Vitae Sections
**File:** `src/data/cv.ts`
- **Education:** Add or edit degrees in `cvData.education` (degrees, GPAs, scholarships).
- **Research Experience:** Update roles and highlights in `cvData.experience` under `category: 'research'`.
- **Awards & Honors:** Add new grants, fellowships, and honors in `cvData.awards`.
- **Conference Presentations:** Add talks and posters in `cvData.presentations`.
- **Technical Proficiencies:** Update programming languages and frameworks in `cvData.skills`.
- *Note:* The publications listed on the CV page are populated automatically from your Markdown records in `src/content/publications/`.

### E. Adding a Future Quarto Research Report or Notebook
The portfolio is designed to accommodate standalone Quarto notebooks or computational reports without requiring Quarto, Python, or R inside the Astro build:
1. Render your Quarto document locally to self-contained HTML (e.g. `quarto render report.qmd --to html --embed-resources`).
2. Place the generated HTML file and any supporting figures into `public/reports/<project-slug>/index.html`.
3. In your publication or project Markdown frontmatter, link to the report:
   ```yaml
   repositoryUrl: "https://mutalibcs.github.io/reports/my-project/"
   ```
4. The Astro site will serve the static report seamlessly at `/reports/my-project/`.

---

## 2. Date Precision & Formatting Conventions

The portfolio supports genuine academic date precision without inventing days or months:
- **Accepted formats:** `YYYY`, `YYYY-MM`, or `YYYY-MM-DD`.
- **Conference papers:** When presented over a conference date range (e.g., April 16–18, 2026), record the year and month: `2026-04`.
- **Monthly journal issues:** When published in a monthly volume without a specific day, record: `2025-05`.
- **Formatting across the platform:**
  - On the website: Formatted gracefully (e.g., "April 2026" or "May 2025").
  - In Highwire Press metadata: Converted to Google Scholar standard (`YYYY/MM` or `YYYY/MM/DD`).
  - In BibTeX: Retains `year = {2026}`.

---

## 3. Publication PDFs, Sharing Rights & Privacy Rules

### Approved Public PDFs vs. Request Author Copy
- **Rule:** A paper should have a public PDF in `public/` and `dist/` **only if** the author has verified open-access sharing rights (e.g. CC-BY open-access journal publication) or formal green open-access repository rights under publisher policy.
- **Attaching an approved PDF:**
  1. Save the PDF to `public/publication/<slug>/paper.pdf`.
  2. In `<slug>.md`, add:
     ```yaml
     localPdf: "/publication/<slug>/paper.pdf"
     pdfVersionLabel: "Publisher Open Access (PDF)"
     ```
  3. This enables browser-based PDF viewing, direct download, and emits `<meta name="citation_pdf_url">` for Google Scholar crawling.
- **When rights are unconfirmed (e.g., IEEE Copyrighted PDF):**
  1. Do NOT place the PDF in `public/` or `dist/`.
  2. Omit `localPdf` and `pdfVersionLabel` from the Markdown record.
  3. The website will automatically render an official **Publisher DOI** button and a working **✉️ Request Author Copy** action that opens an email pre-filled with the paper title and author request subject line.

### Excluding Sensitive Personal Documents
- Never place personal identification, IELTS certificates, recommendation letters (LORs), or API credentials (`.env`, `.admin-credentials.json`) in the repository or `public/` folder.
- Run `npm run validate` before every release to automatically scan for secret and sensitive filename leaks.

---

## 4. Production Origin & Base Path Configuration

The platform supports both root domain deployments and subpath/project-path deployments through a single centralized configuration:

- **Centralized Definition:**
  - `src/utils/paths.ts` centralizes `BASE_PATH` and `toUrl(path)`.
  - In `astro.config.mjs`, `base: process.env.BASE_PATH || '/'` and `site: 'https://mutalibcs.github.io'`.
- **Root Domain Deployment (Default for `mutalibcs/mutalibcs.github.io`):**
  - Run standard commands: `npm run build`.
  - Links and redirects resolve to root: `/`, `/publications/`, `/cv/`.
- **Project-Path Deployment (e.g. `mutalibcs.github.io/academicpages.github.io/`):**
  - Build with: `BASE_PATH=/academicpages.github.io/ npm run build`.
  - All internal links, assets, redirects, and canonicals will automatically adjust to include the subpath prefix.
- **Custom Domain Deployment:**
  - If binding a custom domain (e.g. `abdulmutalib.com`), update `site: 'https://abdulmutalib.com'` in `astro.config.mjs` and `SITE_ORIGIN` in `src/utils/paths.ts`.
  - Add your domain to `public/CNAME`.

---

## 5. CV PDF & Phone Number Privacy Option

### Updating the Public CV PDF
1. Export your updated CV as a PDF named `Md_Abdul_Mutalib_CV.pdf`.
2. Replace `public/downloads/Md_Abdul_Mutalib_CV.pdf`.
3. Verify that the file starts with `%PDF-` and runs cleanly through `npm run validate`.

### Phone Number Privacy Policy
- **Recommendation:** By default, phone numbers are **omitted** from the public website, HTML CV, and GitHub repository. Publicly posted phone numbers on academic personal sites are heavily scraped by aggressive marketing bots, recruitment agencies, and phishing rings.
- **Contact Channel:** Email (`mutalib.cs@gmail.com`) is provided prominently on every page as the primary, secure academic contact channel.
- **How to add a phone number if desired:**
  If you choose to publish a phone number for specific application periods:
  1. Add `phone: "+86 1XX XXXX XXXX"` to `src/data/profile.ts`.
  2. Add it to `src/data/cv.ts` under contact details.
  3. Re-run `npm run build` and `npm run validate`.

---

## 6. Deployment Runbook

### Prerequisites
- Node.js `>=22.23.4` (enforced via `.node-version`, `.nvmrc`, and `package.json`).
- Clean dependencies: `npm ci`.

### Local Preview & Quality Verification
```bash
# 1. Typecheck schemas and components
npm run check

# 2. Compile production build
npm run build

# 3. Execute quality, integrity, and security test suite
npm run validate

# 4. Preview the exact production output locally
npm run preview
# Preview server runs at: http://localhost:4321
```

### GitHub Repository Setup & Deployment
1. Go to your repository on GitHub: `https://github.com/mutalibcs/academicpages.github.io`.
2. Click **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Confirm your default branch is **master**.
5. Push your commit:
   ```bash
   git add .
   git commit -m "feat: release verified academic research portfolio"
   git push origin master
   ```
6. GitHub Actions will execute `.github/workflows/pages.yml`, run validation checks, compile `dist/`, and publish the site.
