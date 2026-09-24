## 2024-05-15 - Content Security Policy in Next.js Static Export
**Vulnerability:** Missing Content Security Policy (CSP) headers, allowing potential XSS and data exfiltration.
**Learning:** Next.js static exports (`output: 'export'`) do not support configuring HTTP headers in `next.config.js`. Implementing CSP via `<meta>` tags is required. Next.js hydration and global CSS require `'unsafe-inline'` for `script-src` and `style-src` if nonces aren't dynamically generated. Next.js HMR requires `'unsafe-eval'` but only in development.
**Prevention:** Implement strict CSP baselines using conditionally defined `<meta>` tags in `app/layout.tsx` for statically exported Next.js sites, carefully balancing strict security with Next.js's runtime requirements.
