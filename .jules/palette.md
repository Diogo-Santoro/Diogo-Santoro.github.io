## 2024-05-24 - Missing Focus and Active Screen Reader States
**Learning:** The application was missing global keyboard focus outlines (`*:focus-visible`) and active state attributes for screen readers (`aria-current="page"`) on navigation links. Without these, keyboard navigation is invisible, and screen readers lack crucial context about which navigation link corresponds to the current page.
**Action:** Always verify keyboard focus visibility initially, and explicitly assign `aria-current="page"` to active links when rendering navigation.
