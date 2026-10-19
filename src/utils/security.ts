/**
 * Security utilities for the application.
 */

/**
 * Sanitizes a URL by ensuring it does not use dangerous protocols like javascript:, data:, vbscript:, or file:.
 * Returns "#" if the URL is dangerous.
 *
 * @param url The URL to sanitize.
 * @returns The sanitized URL.
 */
export function sanitizeUrl(url: string | undefined): string {
  if (!url) return "";
  // 🛡️ Sentinel: Prevent dangerous URIs (XSS protection)
  return /^\s*(javascript|data|vbscript|file):/i.test(url) ? "#" : url;
}

/**
 * Checks if a given URL is external (starts with http:// or https:// or //).
 *
 * @param url The URL to check.
 * @returns True if the URL is external, false otherwise.
 */
export function isExternalUrl(url: string | undefined): boolean {
  if (!url) return false;
  // 🛡️ Sentinel: Robust external check for rel="noopener noreferrer"
  return /^(https?:)?\/\//i.test(url);
}
