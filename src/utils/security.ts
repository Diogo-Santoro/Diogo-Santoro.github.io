/**
 * 🛡️ Sentinel: Security utilities for defense-in-depth URL handling.
 */

/**
 * Sanitizes URLs to prevent XSS via dangerous URI schemes.
 * Blocks javascript:, data:, vbscript:, and file: protocols.
 */
export function sanitizeUrl(href: string): string {
  return /^\s*(javascript|data|vbscript|file):/i.test(href) ? "#" : href;
}

/**
 * Determines if a URL is external, robustly handling protocol-relative URLs
 * and case sensitivity to ensure rel="noopener noreferrer" is applied correctly.
 */
export function isExternalUrl(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}
