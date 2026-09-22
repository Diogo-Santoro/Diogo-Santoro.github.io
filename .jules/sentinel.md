## 2025-02-14 - Content Security Policy for Next.js Static Export
**Vulnerability:** Missing Content Security Policy (CSP) headers, allowing arbitrary resources to be loaded and potentially executing unauthorized scripts (XSS).
**Learning:** Next.js static exports (`output: 'export'`) do not support configuring headers via `next.config.ts`. A CSP must be added using a `<meta httpEquiv="Content-Security-Policy" ...>` tag in `src/app/layout.tsx`. Attempting to add `'unsafe-inline'` and `'unsafe-eval'` to `script-src` makes the CSP security theater.
**Prevention:** Apply CSP via a meta tag for statically exported Next.js apps, and ensure `script-src` is strictly defined to prevent XSS (avoiding `'unsafe-eval'`).
