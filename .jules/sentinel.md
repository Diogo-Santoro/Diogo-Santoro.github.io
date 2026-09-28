## 2026-09-28 - CSP in Next.js Static Export
**Vulnerability:** Missing Content Security Policy (CSP) security headers.
**Learning:** Next.js static exports (`output: 'export'`) do not support `headers()` in `next.config.ts` or `middleware.ts`. Thus, CSP must be implemented via `<meta>` tag in `layout.tsx`.
**Prevention:** Always check `next.config.ts` for `output: 'export'` before attempting to use Next.js server-side features like headers or middleware for security enhancements.
