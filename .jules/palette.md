## 2024-10-15 - Keyboard Accessibility of Hidden Elements
**Learning:** In Next.js/React applications, visually hiding elements with `opacity: 0` and `pointer-events: none` (like mobile menus) still leaves them in the accessibility tree and tab order, creating a confusing experience for screen reader and keyboard users.
**Action:** Use the `inert` attribute (e.g., `inert={!isOpen ? true : undefined}`) on visually hidden interactive containers (like off-canvas menus) to completely remove them from keyboard focus and screen readers until they are opened.
