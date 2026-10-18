/**
 * Sanitizes a URL to prevent XSS attacks via dangerous URI schemes.
 * If the URL uses a dangerous scheme (e.g., javascript:, data:), it returns "#".
 */
export function sanitizeUrl(url: string): string {
  if (!url) return "#";
  return /^\s*(javascript|data|vbscript|file):/i.test(url) ? "#" : url;
}

/**
 * Checks if a URL is external (starts with http, https, or is protocol-relative).
 * This robust regex prevents reverse tabnabbing bypasses via protocol-relative URLs
 * or uppercase protocols.
 */
export function isExternalUrl(url: string): boolean {
  if (!url) return false;
  return /^(https?:)?\/\//i.test(url);
}
