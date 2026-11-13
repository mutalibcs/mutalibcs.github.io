# AI-Assisted Publication Ingestion Workflow

This reusable Antigravity instruction guides the agent or editor when handling the command:
> **"Add this publication from its DOI or BibTeX."**

---

## 1. Objective
Add a new verified peer-reviewed publication to `src/content/publications/<slug>.md` and, when an approved open-access PDF is provided, place it in `public/publication/<slug>/paper.pdf`.

---

## 2. Ingestion Steps

### Step 1: Detect Identifier & Retrieve Metadata
- **If DOI provided:**
  Query the CrossRef open API offline/online:
  ```bash
  curl -s -H "Accept: application/json" "https://api.crossref.org/works/<DOI>"
  ```
  Extract: exact article title, ordered author list, venue (journal or conference), volume, issue, page range, publication date, and registered DOI URL.
- **If BibTeX provided:**
  Parse entry fields (`title`, `author`, `journal`/`booktitle`, `year`, `volume`, `number`, `pages`, `doi`, `url`).
  Preserve author order exactly as written (do NOT alphabetize).
- **Check for Existing DOI:**
  Scan existing Markdown records in `src/content/publications/*.md` for the normalized DOI. If already present, halt immediately with an error stating the existing publication file.

### Step 2: Establish Publication Slug
- Generate a concise, stable, lowercase URL slug representing the topic/method (e.g., `brain-tumor-classification-mri-fusion` or `two-stage-noise-reduced-pneumonia-detection`).
- The slug is independent of the filename, but keeping the filename `<slug>.md` ensures clean maintainability.

### Step 3: Author-Written Abstract & Plain-English Research Brief
- **Abstract:** Extract the exact author-written abstract from the published paper or CrossRef entry.
- **Plain-English Brief:** Draft a clear 3–5 bullet point research summary ONLY from the actual abstract or paper inspected:
  - Clinical/Research Motivation
  - Core Methodological Innovation
  - Key Validated Findings / Benchmarks
  - Documented Limitations / Open Questions
- Never hallucinate performance metrics, author contributions, or uninspected findings.

### Step 4: Full-Text PDF Policy & Rights Verification
- Only place a PDF in `public/publication/<slug>/paper.pdf` if it is an approved author-accepted manuscript (AAM) or open-access publisher PDF.
- If the paper is behind a subscription paywall (e.g. IEEE Xplore, Elsevier), omit `localPdf` and direct visitors to the publisher DOI link.

### Step 5: Draft the Markdown Record
Write `src/content/publications/<slug>.md`:
```markdown
---
title: "Exact Published Title"
authors:
  - "First Author"
  - "Second Author"
  - "Md Abdul Mutalib"
type: "journal" # or "conference"
year: 2026
date: "2026-05-20"
venue: "Full Venue Name"
journal: "Journal Name" # if journal
# conference: "Conference Name" # if conference
volume: 12
issue: 3
pages: "100-115"
doi: "10.xxxx/yyyy"
publisherUrl: "https://doi.org/10.xxxx/yyyy"
repositoryUrl: "https://..." # optional
localPdf: "/publication/<slug>/paper.pdf" # optional, only if approved
pdfVersionLabel: "Accepted Manuscript (PDF)" # optional
featured: false
firstAuthor: false
topics:
  - "Topic 1"
  - "Topic 2"
summary: "One-sentence plain-English summary of the study."
legacyRedirects: []
---

## Author-Written Abstract

[Full author-written abstract]

---

## Plain-English Research Brief

### 1. Research Motivation
...
### 2. Methodological Architecture
...
### 3. Key Findings
...
```

### Step 6: Validate & Build
Run the site validation suite:
```bash
npm run check
npm run build
npm run validate
```
Ensure zero TypeScript errors, valid Highwire tags, and functioning BibTeX export.

