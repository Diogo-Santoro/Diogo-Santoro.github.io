## 2024-05-18 - Replacing Google Fonts @import with next/font/google
**Learning:** Next.js applications shouldn't use `@import` to load fonts in global CSS because it causes an extra network request which blocks rendering, and relies on external CDNs at runtime. Instead, `next/font/google` downloads the font at build time and serves it locally, improving the First Contentful Paint (FCP) and Layout Shift (CLS) metrics.
**Action:** Always prefer `next/font/google` over `@import` for Google Fonts in Next.js apps.
