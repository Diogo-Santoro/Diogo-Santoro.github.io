## 2024-10-18 - Copy Button Context and Live Regions

**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.

## 2024-10-21 - Decorative Typographic Characters Accessibility

**Learning:** Decorative typographic characters (such as arrows `→`, `←`, `↗`, separators `|`, or bullets `•`) are often read aloud by screen readers (e.g., "right arrow"), which can confuse or annoy users when they are intended purely for visual flair alongside descriptive link or button text.
**Action:** Always wrap decorative typographic characters in a `<span aria-hidden="true">` to ensure they are ignored by screen readers while remaining visually present.
