## 2024-10-01 - Active Navigation Links
**Learning:** Adding visual active state classes to navigation links isn't enough for screen reader users. They need `aria-current="page"` to understand their current context within the site navigation.
**Action:** Conditionally apply `aria-current="page"` alongside visual active state classes on navigation links.