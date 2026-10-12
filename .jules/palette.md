## 2024-10-02 - Active Navigation Link State Accessibility
**Learning:** Adding the visual `--active` class to mobile navigation links (which was already on desktop) is good, but without `aria-current="page"`, screen readers cannot interpret which link is active. Both desktop and mobile navigation links needed this attribute.
**Action:** Always conditionally apply `aria-current="page"` alongside visual active state classes to ensure parity between sighted users and screen reader users.

## 2024-10-04 - Global Keyboard Focus Styles and Border Radius
**Learning:** Overriding `border-radius` in global `*:focus-visible` styles can cause visual regressions on elements that already have specific shapes (like circular avatars or pill buttons). It's best to rely on `outline` and `outline-offset` without modifying the `border-radius`.
**Action:** When adding focus styles globally using `*:focus-visible`, always use `outline` and `outline-offset`, and explicitly avoid setting `border-radius`.

## 2024-10-04 - Skip to Content Links
**Learning:** For screen reader and keyboard-only users, traversing through global navigation links on every page load is extremely tedious and detrimental to UX.
**Action:** Always include a visually-hidden, focusable "Skip to content" link at the very top of the document body that anchors to the `<main>` element, to allow these users to bypass navigation quickly.

## 2026-10-06 - Dynamic Filtering Accessibility
**Learning:** Using `role="tablist"` for simple filter buttons without implementing full tab key navigation (arrow keys, etc.) causes accessibility violations. Additionally, dynamically changing content below the filters is not automatically announced to screen readers.
**Action:** Use `role="group"` and `aria-pressed` for toggle-like filter buttons, and always pair dynamic content changes with a visually hidden `aria-live="polite"` region to announce the new state to screen readers.

## 2024-10-06 - Mobile Menu Escape Key Dismissal
**Learning:** For keyboard and screen reader accessibility, users need a way to easily dismiss a modal or mobile menu without having to shift-tab backward multiple times to find the toggle button.
**Action:** Whenever implementing a custom mobile menu overlay or modal that traps focus or obscures content, always add an `Escape` keydown event listener to close it.

## 2024-10-12 - Decorative Ligature Icons Accessibility
**Learning:** In Next.js (or any React environment), using Google's Material Symbols via a `className` like `material-symbols-outlined` with literal strings (e.g., "arrow_right") causes screen readers to read the literal string content if not properly hidden. This creates confusion for visually impaired users who hear arbitrary text strings.
**Action:** Always apply `aria-hidden="true"` to purely decorative ligature-based icons (like `<span className="material-symbols-outlined">icon_name</span>`) to prevent screen readers from reading the internal text ligature.
