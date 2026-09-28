## 2024-03-29 - Missing `aria-current` on Active Navigation Links
**Learning:** Next.js `Link` components with custom active classes do not automatically communicate active state to screen readers. Relying solely on visual CSS classes leaves accessibility gaps.
**Action:** Always conditionally append `aria-current="page"` alongside visual active classes when building custom navigation components.
