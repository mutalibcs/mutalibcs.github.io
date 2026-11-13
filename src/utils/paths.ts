/**
 * Centralized Path and URL Management
 * Supports both root domain deployment (/) and subpath deployment (/academicpages.github.io/)
 */

const rawBase = import.meta.env.BASE_URL ?? '/';
export const BASE_PATH = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
export const SITE_ORIGIN = 'https://mutalibcs.github.io';

/**
 * Transforms an internal relative or absolute path to correctly respect BASE_PATH.
 * Preserves external URLs (http/https), mailto:, and in-page hashes (#).
 * Prevents double-prefixing if the path already starts with BASE_PATH.
 */
export function toUrl(path: string = ''): string {
  if (!path) return BASE_PATH;
  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  if (BASE_PATH !== '/' && (path === BASE_PATH || path.startsWith(BASE_PATH))) {
    return path;
  }
  const clean = path.replace(/^\//, '');
  return `${BASE_PATH}${clean}`;
}

/**
 * Resolves an absolute canonical URL on the production domain.
 */
export function toAbsoluteUrl(path: string = ''): string {
  if (/^https?:\/\//i.test(path)) return path;
  const rel = toUrl(path);
  return new URL(rel, SITE_ORIGIN).toString();
}
