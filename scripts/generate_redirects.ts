import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const PUBS_DIR = path.join(ROOT_DIR, 'src', 'content', 'publications');

const rawBase = process.env.BASE_PATH || '/';
const BASE_PATH = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

function toTargetUrl(relTarget: string): string {
  if (relTarget.startsWith('http')) return relTarget;
  const clean = relTarget.replace(/^\//, '');
  return `${BASE_PATH}${clean}`;
}

// 1. Static Core Route Compatibility Map
const staticRedirects: Record<string, string> = {
  'resume/index.html': '/cv/',
  'resume.html': '/cv/',
  'cv.html': '/cv/',
  'contact/index.html': '/contacts/',
  'contact.html': '/contacts/',
  'about/index.html': '/',
  'about.html': '/',
  'home/index.html': '/',
  'home.html': '/',
  'profile/index.html': '/',
  'profile.html': '/',
  'publications.html': '/publications/',
  'education/index.html': '/cv/#education',
  'education.html': '/cv/#education',
  'year-archive/index.html': '/publications/',
  'year-archive.html': '/publications/'
};

const fullRedirectMap: Record<string, string> = { ...staticRedirects };

// 2. Dynamically Ingest Legacy Redirects from Publication Markdown Records
if (fs.existsSync(PUBS_DIR)) {
  const pubFiles = fs.readdirSync(PUBS_DIR).filter((f) => f.endsWith('.md'));

  for (const file of pubFiles) {
    const slug = file.replace(/\.md$/, '');
    const canonicalTarget = `/publication/${slug}/`;
    const filePath = path.join(PUBS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract legacyRedirects block
    const match = content.match(/legacyRedirects:\s*\r?\n([\s\S]*?)(?=\r?\n[a-zA-Z0-9_-]+:|\r?\n---)/);
    if (match) {
      const lines = match[1].split('\n');
      for (const line of lines) {
        const itemMatch = line.match(/^\s*-\s*["']?([^"'\r\n]+)["']?/);
        if (itemMatch) {
          const rawPath = itemMatch[1].trim();
          const cleanPath = rawPath.replace(/^\//, '');

          // Disallow self-redirect loop
          if (rawPath === canonicalTarget || rawPath === canonicalTarget.replace(/\/$/, '')) {
            continue;
          }

          if (cleanPath.endsWith('/')) {
            fullRedirectMap[`${cleanPath}index.html`] = canonicalTarget;
            const noSlash = cleanPath.slice(0, -1);
            fullRedirectMap[`${noSlash}.html`] = canonicalTarget;
          } else if (cleanPath.endsWith('.html')) {
            fullRedirectMap[cleanPath] = canonicalTarget;
            const withoutExt = cleanPath.replace(/\.html$/, '');
            fullRedirectMap[`${withoutExt}/index.html`] = canonicalTarget;
          } else {
            fullRedirectMap[`${cleanPath}/index.html`] = canonicalTarget;
            fullRedirectMap[`${cleanPath}.html`] = canonicalTarget;
          }
        }
      }
    }
  }
}

// 3. Prevent Self-Redirects and Collisions
let generatedCount = 0;
for (const [stubRelPath, target] of Object.entries(fullRedirectMap)) {
  const finalTarget = toTargetUrl(target);
  const fullStubPath = path.join(PUBLIC_DIR, stubRelPath);

  // If this target is identical to the stub path itself, abort to avoid infinite loop
  const stubUrlPath = `/${stubRelPath.replace(/index\.html$/, '').replace(/\.html$/, '')}`;
  if (target === stubUrlPath || target.replace(/\/$/, '') === stubUrlPath) {
    continue;
  }

  fs.mkdirSync(path.dirname(fullStubPath), { recursive: true });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Redirecting to ${finalTarget}...</title>
  <link rel="canonical" href="${finalTarget}">
  <meta http-equiv="refresh" content="0; url=${finalTarget}">
  <meta name="robots" content="noindex, follow">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; padding: 3rem 1.5rem; text-align: center; background: #faf8f5; color: #192127;">
  <p style="font-size: 1.1rem; margin-bottom: 1rem;">This page has moved.</p>
  <p>Redirecting to <a href="${finalTarget}" style="color: #0f5953; font-weight: 600;">${finalTarget}</a>...</p>
</body>
</html>
`;

  fs.writeFileSync(fullStubPath, html, 'utf-8');
  generatedCount++;
}

console.log(`✓ Unified Redirect Generator: Created ${generatedCount} static compatibility redirect stubs (Base: ${BASE_PATH}).`);
