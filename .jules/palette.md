## 2024-10-15 - Global Focus Visible Outline Issue
**Learning:** When styling global focus states (`*:focus-visible`), overriding `border-radius` globally causes visual regressions by altering the shape of specifically rounded elements (like circular avatars or pill-shaped buttons) when focused.
**Action:** Use `outline` and `outline-offset` properties instead for `*:focus-visible` to maintain accessibility without altering component shapes.

## 2024-10-15 - ARIA Current Link States
**Learning:** Using purely visual indicators (like custom classes) for active navigation links fails to communicate the state to screen readers.
**Action:** Always conditionally apply `aria-current="page"` alongside visual active state classes on navigation links to ensure proper semantic meaning.