## 2025-02-14 - Content-Security-Policy (CSP) in Next.js Static Exports
**Vulnerability:** Application lacked a Content-Security-Policy header.
**Learning:** In Next.js static exports (`output: 'export'`), full CSPs via `<meta>` tags are discouraged because Next.js relies heavily on inline scripts (`unsafe-inline`) for React hydration and chunk loading. Using `unsafe-inline` undermines strong CSPs.
**Prevention:** Instead of a full CSP, apply targeted, low-risk directives (`upgrade-insecure-requests; base-uri 'self'; object-src 'none';`) safely via a `<meta>` tag in `src/app/layout.tsx`. Also, when full CSP is ever considered, conditionally allow `'unsafe-eval'` in development to avoid breaking Next.js HMR.
