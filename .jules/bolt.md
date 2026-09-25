## 2026-09-25 - Next.js Font Loading Optimization
**Learning:** Google Fonts loaded via `@import` in CSS block rendering and result in lower First Contentful Paint (FCP) and Speed Index.
**Action:** Use `next/font/google` in `layout.tsx` to self-host fonts, generating optimized CSS variables and improving FCP. Ensure that hardcoded CSS custom properties for fonts in `globals.css` are removed so they don't override the ones injected by `next/font`.
