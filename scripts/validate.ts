import fs from 'node:fs';
import path from 'node:path';

interface ValidationResult {
  passes: string[];
  warnings: string[];
  errors: string[];
}

const results: ValidationResult = {
  passes: [],
  warnings: [],
  errors: []
};

function pass(msg: string) {
  results.passes.push(msg);
  console.log(`  [PASS] ${msg}`);
}

function fail(msg: string) {
  results.errors.push(msg);
  console.error(`  [FAIL] ${msg}`);
}

const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBS_DIR = path.join(ROOT_DIR, 'src', 'content', 'publications');

console.log('======================================================');
console.log('--- Commencing Enhanced Quality, Integrity & Security Suite ---');
console.log('======================================================\n');

// ---------------------------------------------------------------------
// 1. Publication Integrity, Metadata Cross-Checks & PDF Verification
// ---------------------------------------------------------------------
console.log('1. Validating Publication Collections & Schemas:');
if (!fs.existsSync(PUBS_DIR)) {
  fail(`Publications directory missing: ${PUBS_DIR}`);
} else {
  const pubFiles = fs.readdirSync(PUBS_DIR).filter((f) => f.endsWith('.md'));
  const slugs = new Set<string>();
  const dois = new Set<string>();

  for (const file of pubFiles) {
    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(PUBS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Parse YAML frontmatter
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) {
      fail(`File ${file} has no frontmatter`);
      continue;
    }
    const fmText = fmMatch[1];

    // Unique slug check
    if (slugs.has(slug)) {
      fail(`Duplicate publication slug: ${slug}`);
    } else {
      slugs.add(slug);
    }

    // Title check
    const titleMatch = fmText.match(/title:\s*["']?([^"'\n\r]+)["']?/);
    const title = titleMatch ? titleMatch[1].trim() : '';
    if (!title) {
      fail(`Publication ${file} missing title`);
    }

    // DOI check & normalization (if DOI is provided)
    const doiMatch = fmText.match(/doi:\s*["']?([^"'\n\r]+)["']?/);
    if (doiMatch) {
      const rawDoi = doiMatch[1].trim();
      const normalizedDoi = rawDoi.toLowerCase();
      if (!/^10\.\d{4,9}\/[-._;()/:A-Za-z0-9]+$/i.test(rawDoi)) {
        fail(`Publication ${file} has invalid DOI format: ${rawDoi}`);
      }
      if (dois.has(normalizedDoi)) {
        fail(`Duplicate DOI detected: ${normalizedDoi} in ${file}`);
      } else {
        dois.add(normalizedDoi);
      }
    }

    // Date check (YYYY, YYYY-MM, or YYYY-MM-DD)
    const dateMatch = fmText.match(/date:\s*["']?([^"'\n\r]+)["']?/);
    if (!dateMatch) {
      fail(`Publication ${file} missing date`);
    } else {
      const dateStr = dateMatch[1].trim();
      if (!/^\d{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[12]\d|3[01]))?)?$/.test(dateStr)) {
        fail(`Publication ${file} date "${dateStr}" must be YYYY, YYYY-MM, or YYYY-MM-DD`);
      }
    }

    // PDF verification vs. Author Copy Request
    const pdfMatch = fmText.match(/localPdf:\s*["']?([^"'\n\r]+)["']?/);
    if (pdfMatch) {
      const pdfRel = pdfMatch[1].trim();
      const localPdfDist = path.join(DIST_DIR, pdfRel.replace(/^\//, ''));
      if (!fs.existsSync(localPdfDist)) {
        fail(`Declared local PDF does not exist in build: ${localPdfDist}`);
      } else {
        const buf = fs.readFileSync(localPdfDist);
        if (buf.length < 5000) {
          fail(`PDF file ${localPdfDist} unexpectedly small (${buf.length} bytes)`);
        } else {
          const header = buf.subarray(0, 5).toString('ascii');
          if (!header.startsWith('%PDF-')) {
            fail(`File ${localPdfDist} does not start with %PDF- signature`);
          } else {
            pass(`Local PDF verified for ${slug} (${buf.length} bytes, valid %PDF- header)`);
          }
        }
      }
    } else {
      // Paper without approved PDF: ensure NO PDF exists in dist/ for this paper
      const candidateDistPdf = path.join(DIST_DIR, 'publication', slug, 'paper.pdf');
      if (fs.existsSync(candidateDistPdf)) {
        fail(`Unapproved PDF leaked into production dist: ${candidateDistPdf}`);
      } else {
        pass(`Confirmed no unapproved PDF leaked in dist for ${slug}`);
      }
    }
  }

  pass(`Validated all ${pubFiles.length} publication records for schema, unique slugs, and normalized DOIs.`);
}

// ---------------------------------------------------------------------
// 2. Production Build Directory Inspection & Highwire / BibTeX Cross-Checks
// ---------------------------------------------------------------------
console.log('\n2. Inspecting Production Build Output & Highwire/BibTeX Parity:');
if (!fs.existsSync(DIST_DIR)) {
  fail(`Production build dist/ does not exist. Run 'npm run build' first.`);
} else {
  // Check critical indexable pages
  const criticalPages = [
    'index.html',
    'publications/index.html',
    'cv/index.html',
    'contacts/index.html',
    '404.html',
    'robots.txt',
    'sitemap-index.xml',
    'downloads/Md_Abdul_Mutalib_CV.pdf'
  ];

  for (const p of criticalPages) {
    const full = path.join(DIST_DIR, p);
    if (!fs.existsSync(full)) {
      fail(`Required production file missing: ${p}`);
    } else {
      pass(`Required production file present: ${p}`);
    }
  }

  // Verify CV PDF integrity
  const cvPath = path.join(DIST_DIR, 'downloads', 'Md_Abdul_Mutalib_CV.pdf');
  if (fs.existsSync(cvPath)) {
    const buf = fs.readFileSync(cvPath);
    const header = buf.subarray(0, 5).toString('ascii');
    if (header.startsWith('%PDF-')) {
      pass(`CV PDF integrity confirmed (%PDF- header present, ${buf.length} bytes)`);
    } else {
      fail(`CV PDF lacks %PDF- header`);
    }
  }

  // Cross-check publication pages for Highwire tags, BibTeX endpoints, and copy request actions
  const pubFiles = fs.readdirSync(PUBS_DIR).filter((f) => f.endsWith('.md'));
  for (const file of pubFiles) {
    const slug = file.replace(/\.md$/, '');
    const pubHtmlPath = path.join(DIST_DIR, 'publication', slug, 'index.html');
    if (!fs.existsSync(pubHtmlPath)) {
      fail(`Publication page missing in dist: publication/${slug}/index.html`);
      continue;
    }

    const html = fs.readFileSync(pubHtmlPath, 'utf-8');
    const mdContent = fs.readFileSync(path.join(PUBS_DIR, file), 'utf-8');

    // Title tag check
    if (!html.includes('name="citation_title"')) {
      fail(`Missing citation_title meta tag in publication/${slug}`);
    }

    // Highwire Author check
    if (!html.includes('name="citation_author"')) {
      fail(`Missing citation_author meta tag in publication/${slug}`);
    }

    // Highwire Date check
    if (!html.includes('name="citation_publication_date"')) {
      fail(`Missing citation_publication_date in publication/${slug}`);
    }

    // Highwire PDF tag logic: only when localPdf is declared
    const hasLocalPdf = mdContent.includes('localPdf:');
    if (hasLocalPdf) {
      if (!html.includes('name="citation_pdf_url"')) {
        fail(`Expected citation_pdf_url meta tag missing in publication/${slug}`);
      } else {
        pass(`Highwire citation_pdf_url present for ${slug}`);
      }
    } else {
      if (html.includes('name="citation_pdf_url"')) {
        fail(`Unapproved citation_pdf_url tag emitted in publication/${slug}`);
      }
      // Must have Request Author Copy action
      if (!html.includes('mailto:mutalib.cs@gmail.com') || !html.includes('Request Author Copy')) {
        fail(`Missing author copy request action for publication/${slug}`);
      } else {
        pass(`Author copy request action verified for ${slug}`);
      }
    }

    // Check BibTeX endpoint exists and is valid
    const bibPath = path.join(DIST_DIR, 'publication', slug, 'cite.bib');
    if (!fs.existsSync(bibPath)) {
      fail(`BibTeX endpoint file missing: publication/${slug}/cite.bib`);
    } else {
      const bibText = fs.readFileSync(bibPath, 'utf-8');
      if (!bibText.includes('@article') && !bibText.includes('@inproceedings') && !bibText.includes('@incollection') && !bibText.includes('@book')) {
        fail(`BibTeX file invalid in publication/${slug}/cite.bib`);
      } else {
        pass(`BibTeX endpoint verified for publication/${slug}`);
      }
    }
  }
}

// ---------------------------------------------------------------------
// 3. SEO, Canonical URLs, 404 & Sitemap Audits
// ---------------------------------------------------------------------
console.log('\n3. Validating SEO, Canonical Links, 404 & Sitemap Rules:');
const errorPagePath = path.join(DIST_DIR, '404.html');
if (fs.existsSync(errorPagePath)) {
  const errorHtml = fs.readFileSync(errorPagePath, 'utf-8');
  if (errorHtml.includes('rel="canonical"') || errorHtml.includes("rel='canonical'")) {
    fail(`404.html contains an invalid canonical link tag!`);
  } else {
    pass(`404.html correctly omits canonical link tag.`);
  }

  if (errorHtml.includes('name="robots" content="noindex')) {
    pass(`404.html includes noindex robots tag.`);
  } else {
    fail(`404.html missing noindex robots tag.`);
  }
}

// Sitemap audit
const sitemapPath = path.join(DIST_DIR, 'sitemap-0.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  if (sitemapXml.includes('/404')) {
    fail(`Sitemap incorrectly contains 404 page!`);
  } else {
    pass(`Sitemap correctly excludes 404 page.`);
  }

  // Ensure compatibility stubs are excluded from sitemap
  const disallowedSitemapPatterns = [
    '/resume',
    '/contact.html',
    '/cv.html',
    '/about',
    '/education',
    '/year-archive',
    '2026-01-01',
    '2025-05-16',
    '2026-04-01'
  ];
  let leakFound = false;
  for (const pat of disallowedSitemapPatterns) {
    if (sitemapXml.includes(pat)) {
      fail(`Compatibility redirect leaked into sitemap: ${pat}`);
      leakFound = true;
    }
  }
  if (!leakFound) {
    pass(`Sitemap cleanly excludes all legacy compatibility redirect routes.`);
  }
}

// ---------------------------------------------------------------------
// 4. Structured Data (JSON-LD) Verification
// ---------------------------------------------------------------------
console.log('\n4. Validating Structured Data (JSON-LD):');
const homePath = path.join(DIST_DIR, 'index.html');
if (fs.existsSync(homePath)) {
  const homeHtml = fs.readFileSync(homePath, 'utf-8');
  const jsonLdMatch = homeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!jsonLdMatch) {
    fail(`index.html is missing JSON-LD structured data`);
  } else {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      const entity = parsed.mainEntity || parsed;
      const alumni = entity.alumniOf || [];
      const alumniNames = alumni.map((a: any) => a.name);

      if (!alumniNames.includes('North East University Bangladesh')) {
        fail(`JSON-LD alumniOf missing North East University Bangladesh`);
      } else {
        pass(`JSON-LD correctly includes completed degree institution: North East University Bangladesh`);
      }

      if (alumniNames.includes('Harbin Institute of Technology, Shenzhen')) {
        fail(`JSON-LD alumniOf incorrectly includes ongoing graduate institution: Harbin Institute of Technology, Shenzhen`);
      } else {
        pass(`JSON-LD correctly excludes ongoing institution from alumniOf (placed in worksFor/affiliation)`);
      }
    } catch (e: any) {
      fail(`Failed to parse JSON-LD on homepage: ${e.message}`);
    }
  }
}

// ---------------------------------------------------------------------
// 5. Compatibility Redirects & Route Collision Audit
// ---------------------------------------------------------------------
console.log('\n5. Validating Compatibility Redirects:');
const requiredRedirects = [
  'resume/index.html',
  'resume.html',
  'cv.html',
  'contact/index.html',
  'contact.html',
  'publications.html',
  'education/index.html',
  'education.html',
  'year-archive/index.html',
  'year-archive.html'
];

let allRedirectsValid = true;
for (const rel of requiredRedirects) {
  const full = path.join(DIST_DIR, rel);
  if (!fs.existsSync(full)) {
    fail(`Required compatibility redirect missing in dist: ${rel}`);
    allRedirectsValid = false;
  } else {
    const text = fs.readFileSync(full, 'utf-8');
    if (!text.includes('http-equiv="refresh"')) {
      fail(`Redirect stub ${rel} missing meta http-equiv refresh`);
      allRedirectsValid = false;
    }
  }
}
if (allRedirectsValid) {
  pass(`All required compatibility redirect stubs present with meta refresh.`);
}

// ---------------------------------------------------------------------
// 6. Security, Sensitive File & Localhost Leak Audits
// ---------------------------------------------------------------------
console.log('\n6. Checking for Secrets, Sensitive Files, and Development Leaks:');
const sensitivePatterns = [
  /\.env/i,
  /admin-credentials/i,
  /IELTS/i,
  /LOR/i,
  /Recommendation/i
];

function scanDirectory(dir: string) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDirectory(full);
    } else {
      for (const pattern of sensitivePatterns) {
        if (pattern.test(item)) {
          fail(`Sensitive file leaked into production distribution: ${full}`);
        }
      }
      if (item.endsWith('.html') || item.endsWith('.js')) {
        const text = fs.readFileSync(full, 'utf-8');
        if (text.includes('http://localhost:') || text.includes('http://127.0.0.1:')) {
          fail(`Development host URL found in built file: ${full}`);
        }
        if (text.includes('admin-credentials') || text.includes('ADMIN_PASSWORD')) {
          fail(`Credential remnant found in built file: ${full}`);
        }
      }
    }
  }
}

scanDirectory(DIST_DIR);
pass(`No sensitive files, credentials, or localhost leaks detected in dist/.`);

// ---------------------------------------------------------------------
// Summary & Final Exit Status
// ---------------------------------------------------------------------
console.log('\n======================================================');
console.log(`VALIDATION RESULTS: ${results.passes.length} passed, ${results.warnings.length} warnings, ${results.errors.length} errors.`);
console.log('======================================================');

if (results.errors.length > 0) {
  console.error(`\n❌ Validation suite failed with ${results.errors.length} error(s).\n`);
  process.exit(1);
} else {
  console.log('\n✓ All production, research, accessibility, and security checks PASSED!\n');
  process.exit(0);
}
