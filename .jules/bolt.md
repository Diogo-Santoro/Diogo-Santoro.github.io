## 2024-06-25 - Next.js Font Optimization
**Learning:** The project was using a render-blocking `@import` for Google Fonts in global CSS, which hurts LCP (Largest Contentful Paint) and causes layout shifts.
**Action:** Always leverage Next.js `next/font/google` in `layout.tsx` for zero-layout-shift and optimal self-hosted font delivery. Ensure hardcoded fallback variables in CSS are removed so Next.js can manage the fallback chain.
