## 2024-05-01 - Next.js Font Loading Optimization
**Learning:** Using `@import` for Google Fonts in global CSS blocks rendering and is inefficient.
**Action:** Always use Next.js `next/font/google` in `layout.tsx` to prevent render blocking.
