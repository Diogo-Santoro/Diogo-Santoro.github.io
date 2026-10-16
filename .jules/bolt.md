## 2024-05-19 - Missing Italics with next/font/google
**Learning:** When migrating from a standard Google Fonts `<link>` tag to `next/font/google`, the default configuration only fetches the `normal` style. If the original link requested italics (e.g., `ital,wght@0,300..800;1,300..800`), not specifying `style: ["normal", "italic"]` will cause italic fonts to be missing or synthesized by the browser.
**Action:** Always inspect the original Google Fonts URL for `ital` parameters and explicitly set the `style` array in the Next.js font configuration to match.
## 2026-10-03 - Next.js Icon Fonts Optimization
**Learning:** `next/font/google` doesn't export "Material Symbols Outlined" and external Google Font links create render-blocking resources + unnecessary preconnects. Using local TTF files for icons is too large (~1MB).
**Action:** Always use `.woff2` files (much smaller, ~300KB) and load them via `next/font/local` when dealing with icon fonts in Next.js to eliminate render-blocking CSS while keeping bundle sizes reasonable. Ensure necessary CSS properties (`-webkit-font-feature-settings: 'liga'`, etc.) are manually added to the global CSS when removing the remote stylesheet.
## 2024-05-19 - IntersectionObserver Scaling O(n) Issue
**Learning:** When creating a separate `IntersectionObserver` per element (e.g., in a ScrollReveal component mapping over an array of items), you incur O(n) memory and instantiation overhead, which can cause jank on long lists.
**Action:** Share module-level `IntersectionObserver` instances cached by `threshold`, and use a `WeakMap<Element, Callback>` to handle individual element callbacks efficiently.
## 2024-05-19 - requestAnimationFrame throttling in React
**Learning:** Using `requestAnimationFrame` for scroll event throttling is a powerful performance optimization, but combining it with synchronous initial state setters inside `useEffect` triggers a `react-hooks/set-state-in-effect` linting error due to cascading renders.
**Action:** When implementing `requestAnimationFrame` throttling inside a `useEffect`, do not synchronously call the state setter to initialize state. Instead, invoke the throttled event handler function directly.
## 2024-10-11 - Layout Thrashing in Mouse Events
**Learning:** High-frequency events like `mousemove` coupled with synchronous layout calculations (`getBoundingClientRect()`) and DOM writes (`transform`) cause significant layout thrashing and jank.
**Action:** Always cache bounding box coordinates on lower-frequency events (like `mouseenter`) or use IntersectionObserver when dealing with continuous layout properties (like magnetic buttons or custom cursors).
## 2026-10-13 - Next.js 'use client' Directive Bloat
**Learning:** Applying `"use client"` at the top of generic Next.js page components (like `HomeHero.tsx`) forces the entire component tree to be bundled and sent to the client as JavaScript. This unnecessarily increases the JS payload size and reduces performance.
**Action:** Only use `"use client"` when a component strictly requires client-side features like `useState`, `useEffect`, or event listeners. Ensure server components are not wrapped unnecessarily.
## 2024-11-20 - requestAnimationFrame Debouncing for High-Frequency Inline Styles
**Learning:** High-frequency events (like `mousemove` on `MagneticButton`) modifying inline styles directly cause main thread jank due to synchronous style recalculations.
**Action:** Always wrap continuous DOM style mutations triggered by high-frequency events inside `requestAnimationFrame`. Cancel pending animation frames on subsequent events or component unmount to avoid visual tearing and memory leaks.
