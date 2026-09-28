## 2024-11-20 - Next.js Font Fallback Chain
**Learning:** Hardcoded fallback fonts for CSS variables in global CSS can override Next.js's automatic font fallback chain when using `next/font/google`.
**Action:** Ensure hardcoded fallback fonts mapped to CSS variables are removed from global CSS when switching to `next/font/google`.