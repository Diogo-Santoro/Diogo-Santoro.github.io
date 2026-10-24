/**
 * 🛡️ Sentinel: Security utilities for defense-in-depth URL handling.
 */

/**
 * Sanitizes URLs to prevent XSS via dangerous URI schemes.
 * Blocks javascript:, data:, vbscript:, and file: protocols.
 */
export function sanitizeUrl(href: string): string {
  // Strip control characters and whitespace which can be used to bypass simple regex checks
  const stripped = href.replace(/[\u0000-\u001F\u007F-\u009F\s]+/g, "");
  return /^(javascript|data|vbscript|file):/i.test(stripped) ? "#" : href;
}

/**
 * Determines if a URL is external, robustly handling protocol-relative URLs
 * and case sensitivity to ensure rel="noopener noreferrer" is applied correctly.
 */
export function isExternalUrl(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}
