## 2024-05-17 - Targeted Content-Security-Policy (CSP) in Next.js Static Export
**Vulnerability:** Missing Content-Security-Policy (CSP) allows potential XSS, base-uri hijacking, and malicious object loading (like Flash or Java applets).
**Learning:** Next.js static exports (with `output: 'export'`) do not support server-side headers via `next.config.ts`. Full CSPs using `<meta>` tags are tricky because they often require `'unsafe-inline'` which undermines the policy. However, targeted and high-value directives like `upgrade-insecure-requests`, `base-uri 'self'`, and `object-src 'none'` can be safely applied via a `<meta>` tag without breaking standard functionality. Applying `upgrade-insecure-requests` during local development can break local network testing on IP addresses.
**Prevention:** For Next.js static export projects, include a `<meta>` tag with targeted CSP directives in `layout.tsx`. Wrap `upgrade-insecure-requests` in a conditional check (`process.env.NODE_ENV !== 'development'`) to ensure smooth local development while maximizing security in production.
## 2026-10-03 - Critical RCE Vulnerability in next/og
**Vulnerability:** Remote Code Execution in next/og ImageResponse (CVE-2024-46982)
**Learning:** The project relies on Next.js, and outdated versions (16.2.0 - 16.3.5) suffer from a critical RCE. Updating dependencies is crucial to protect the application.
**Prevention:** Regularly audit and update dependencies (using `npm audit`) and enforce strict version constraints or automated dependency updates.
## 2026-10-04 - Enhancing Next.js Static Export Security Headers
**Vulnerability:** Missing strict referrer policy and unrestricted form action in CSP.
**Learning:** In Next.js static exports (`output: 'export'`), traditional HTTP headers (e.g. from `next.config.ts`) cannot be used. However, the `metadata` API in `layout.tsx` natively supports setting the `referrer` policy. Additionally, appending `form-action 'none'` to the CSP `<meta>` tag is a highly effective, safe enhancement for sites without forms.
**Prevention:** Leverage Next.js `metadata` for supported security options like `referrer`, and harden `<meta>` CSP directives where applicable.
