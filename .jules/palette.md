## 2024-10-02 - Active Navigation Link State Accessibility
**Learning:** Adding the visual `--active` class to mobile navigation links (which was already on desktop) is good, but without `aria-current="page"`, screen readers cannot interpret which link is active. Both desktop and mobile navigation links needed this attribute.
**Action:** Always conditionally apply `aria-current="page"` alongside visual active state classes to ensure parity between sighted users and screen reader users.

## 2024-10-04 - Global Keyboard Focus Styles and Border Radius
**Learning:** Overriding `border-radius` in global `*:focus-visible` styles can cause visual regressions on elements that already have specific shapes (like circular avatars or pill buttons). It's best to rely on `outline` and `outline-offset` without modifying the `border-radius`.
**Action:** When adding focus styles globally using `*:focus-visible`, always use `outline` and `outline-offset`, and explicitly avoid setting `border-radius`.
