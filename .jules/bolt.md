## 2024-05-19 - Missing Italics with next/font/google
**Learning:** When migrating from a standard Google Fonts `<link>` tag to `next/font/google`, the default configuration only fetches the `normal` style. If the original link requested italics (e.g., `ital,wght@0,300..800;1,300..800`), not specifying `style: ["normal", "italic"]` will cause italic fonts to be missing or synthesized by the browser.
**Action:** Always inspect the original Google Fonts URL for `ital` parameters and explicitly set the `style` array in the Next.js font configuration to match.
## 2026-10-03 - Next.js Icon Fonts Optimization
**Learning:** `next/font/google` doesn't export "Material Symbols Outlined" and external Google Font links create render-blocking resources + unnecessary preconnects. Using local TTF files for icons is too large (~1MB).
**Action:** Always use `.woff2` files (much smaller, ~300KB) and load them via `next/font/local` when dealing with icon fonts in Next.js to eliminate render-blocking CSS while keeping bundle sizes reasonable. Ensure necessary CSS properties (`-webkit-font-feature-settings: 'liga'`, etc.) are manually added to the global CSS when removing the remote stylesheet.
## 2024-05-19 - IntersectionObserver Scaling O(n) Issue
**Learning:** When creating a separate `IntersectionObserver` per element (e.g., in a ScrollReveal component mapping over an array of items), you incur O(n) memory and instantiation overhead, which can cause jank on long lists.
**Action:** Share module-level `IntersectionObserver` instances cached by `threshold`, and use a `WeakMap<Element, Callback>` to handle individual element callbacks efficiently.
