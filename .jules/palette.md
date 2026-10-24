## 2024-10-18 - Copy Button Context and Live Regions
**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.
## 2024-10-24 - Screen Reader Compatibility for Decorative Typographic Characters
**Learning:** Decorative typography (e.g., bullets `•`, arrows `→`, and separators `·`) are frequently read aloud by screen readers (e.g., "bullet", "rightwards arrow", "middle dot"), resulting in noisy and degraded UX for assistive technology users.
**Action:** Always wrap decorative characters like `•`, `·`, `→`, `←`, and `↗` in a `<span>` element with the `aria-hidden="true"` attribute to prevent them from being spoken.
