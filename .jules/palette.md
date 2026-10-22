## 2024-10-18 - Copy Button Context and Live Regions
**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.

## 2024-10-23 - Hide Decorative Typographic Characters from Screen Readers
**Learning:** Decorative typographical characters commonly used as separators, arrows, or bullets (e.g., `•`, `|`, `>>`, `→`, `←`, `·`) are read aloud by screen readers, creating unnecessary noise and degrading the accessibility experience.
**Action:** Always wrap such decorative typographical characters in a `<span>` element with the `aria-hidden="true"` attribute to ensure they remain visually present but are completely ignored by screen reading software.
