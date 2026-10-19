## 2024-10-18 - Copy Button Context and Live Regions
**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.

## 2024-10-19 - Decorative Typography Accessibility
**Learning:** Screen readers often read aloud decorative typography characters used for visual styling, such as arrows (→, ←, ↗), bullets (•), pipes (|), or chevrons (>>), which clutters the auditory experience and can confuse users navigating via assistive technologies.
**Action:** Always wrap decorative typographic characters (separators, arrows, bullets) in a `<span>` with the `aria-hidden="true"` attribute to ensure they are ignored by screen readers while remaining visually present.
