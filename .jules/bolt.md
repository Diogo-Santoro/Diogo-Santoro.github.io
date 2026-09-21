## 2025-01-20 - [Next.js Font Optimization]
**Learning:** Legacy `@import url(...)` for Google Fonts inside global CSS blocks render and creates layout shifts. Next.js `next/font/google` replaces it elegantly by providing auto-hosted fonts mapped directly to CSS custom properties.
**Action:** Use `next/font/google` directly in `layout.tsx` to inject optimized font variables into the root HTML element, rather than importing Google Fonts in CSS.
