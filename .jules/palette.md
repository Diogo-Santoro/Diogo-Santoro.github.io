## 2024-10-18 - Copy Button Context and Live Regions
**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.
## 2024-10-23 - Hide decorative typographic characters

**Learning:** Decorative typographic characters like chevrons (`>>`), vertical bars (`|`), bullets (`•`), and arrows (`→`, `←`, `↗`) are often read aloud by screen readers (e.g., "greater than greater than", "vertical line"), causing unnecessary auditory clutter and disrupting the flow of content for visually impaired users.
**Action:** Always wrap such standalone decorative text nodes in a `<span aria-hidden="true">` element to ensure they remain visually present for sighted users while being cleanly ignored by assistive technologies.
