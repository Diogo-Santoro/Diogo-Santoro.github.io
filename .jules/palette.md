## 2024-10-02 - Active Navigation Link State Accessibility
**Learning:** Adding the visual `--active` class to mobile navigation links (which was already on desktop) is good, but without `aria-current="page"`, screen readers cannot interpret which link is active. Both desktop and mobile navigation links needed this attribute.
**Action:** Always conditionally apply `aria-current="page"` alongside visual active state classes to ensure parity between sighted users and screen reader users.
