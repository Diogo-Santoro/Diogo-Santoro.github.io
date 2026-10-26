## 2024-10-18 - Copy Button Context and Live Regions
**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.
## 2024-10-24 - Screen Reader Noise from Decorative Characters
**Learning:** Screen readers often vocalize typographic characters intended purely for visual decoration (like `→` arrows, `|` or `·` separators, and `>>` chevrons) reading them literally (e.g., "right pointing arrow"). This creates unnecessary noise and degrades the accessibility experience.
**Action:** Always wrap purely decorative characters in a `<span>` with `aria-hidden="true"` to hide them from screen readers while preserving the visual design.
