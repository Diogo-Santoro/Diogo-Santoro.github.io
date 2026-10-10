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
## 2026-10-10 - Prevent screen readers from reading decorative icons
**Learning:** Material Symbols (Google Fonts icons) use text ligatures (e.g., 'code', 'arrow_right') that are literally read aloud by screen readers if they lack `aria-hidden="true"`, which degrades the experience for visually impaired users.
**Action:** When using ligature-based icon fonts, always ensure `aria-hidden="true"` is applied if the icon is purely decorative and accompanied by descriptive text.
