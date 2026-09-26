## 2024-05-18 - Missing Content Security Policy in Next.js Static Export
**Vulnerability:** Missing Content-Security-Policy (CSP) headers, allowing arbitrary scripts and styles to be loaded.
**Learning:** Next.js static exports (`output: 'export'`) do not support traditional HTTP headers via `next.config.ts`. The CSP must be implemented using a `<meta httpEquiv="Content-Security-Policy" content="...">` tag in `src/app/layout.tsx`. Additionally, `unsafe-eval` should only be conditionally allowed in the `script-src` during development to avoid breaking Next.js HMR while remaining secure in production.
**Prevention:** Implement CSP via a `<meta>` tag in the root layout when using Next.js static export, ensuring `unsafe-eval` is conditionally omitted in production.
