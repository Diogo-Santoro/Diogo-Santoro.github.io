export function sanitizeUrl(url: string): string {
  if (!url) return "#";
  // 🛡️ Sentinel: Prevent dangerous URIs (XSS protection)
  return /^\s*(javascript|data|vbscript|file):/i.test(url) ? "#" : url;
}

export function isExternalUrl(url: string): boolean {
  if (!url) return false;
  // 🛡️ Sentinel: robust external check to prevent reverse tabnabbing bypasses
  return /^(https?:)?\/\//i.test(url);
}
