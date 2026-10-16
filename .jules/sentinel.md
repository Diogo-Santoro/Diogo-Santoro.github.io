## 2023-10-24 - Unrobust External URL Detection
**Vulnerability:** External link logic (`href.startsWith("http")`) missed protocol-relative URLs (`//evil.com`) and uppercase protocols (`HTTPS://`), failing to apply `rel="noopener noreferrer"`.
**Learning:** Checking for external URLs must handle protocol-relative links and case sensitivity to ensure `rel` attributes are properly applied for defense against reverse tabnabbing.
**Prevention:** Always use a regex like `/^(https?:)?\/\//i.test(href)` or parse the URL when dynamically applying security attributes to external links.
## 2023-10-25 - Prevent javascript: URI XSS and Information Disclosure
**Vulnerability:** Components accepting `href` props without sanitizing `javascript:` URIs can lead to XSS. Also, default Next.js setups expose `X-Powered-By: Next.js` headers.
**Learning:** React does not inherently protect against `javascript:` URIs in anchor tags. Explicit sanitization is required. `poweredByHeader: false` is a quick win for reducing framework footprint.
**Prevention:** Always validate and sanitize user-provided or dynamically injected URLs to strip `javascript:` protocols, and explicitly disable `poweredByHeader` in Next.js config.
## 2023-10-25 - [Frontend XSS Defense-in-Depth]
**Vulnerability:** Static data rendered in `href` attributes was vulnerable to potential XSS (javascript: URIs) if the data source was ever compromised or became dynamic.
**Learning:** Native `<a>` tags in React do not automatically sanitize `href` values like `next/link` might or like custom button components do.
**Prevention:** Always implement regex sanitization (`/^\s*javascript:/i.test(href) ? '#' : href`) for `href` inputs in UI components for complete defense-in-depth, even when consuming currently static sources.
