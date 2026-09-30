## 2024-10-01 - Active Navigation Link States
**Learning:** This app requires applying `aria-current="page"` and specific CSS classes dynamically to ensure active navigation links are accessible and visually distinct, especially in mobile views where they were previously lacking active state styling.
**Action:** When working on navigation menus, ensure that `aria-current="page"` is applied to the active link to assist screen readers, and add corresponding visual active state styles using existing `.link--active` conventions.
