## 2024-10-18 - Copy Button Context and Live Regions
**Learning:** Icon-only or visually ambiguous buttons (like a copy button displaying just an email address) need hidden descriptive text for screen readers (e.g., "Copy email to clipboard: "). Also, dynamically changing confirmation text inside the button needs `aria-live="polite"` so screen readers proactively announce the success state.
**Action:** When creating copy-to-clipboard functionality, always include an `sr-only` prefix for the action, add a `title` tooltip for mouse users, and use `aria-live="polite"` to read out the success message without interrupting the user.
## 2024-10-18 - Decorative Typography Visibility
**Learning:** Decorative typographic characters like arrows (`→`, `←`, `↗`), chevrons (`>>`), and separators (`|`) are often read aloud by screen readers when included as native text nodes (e.g., "rightwards arrow", "greater than greater than"), which adds unnecessary noise and confusion for visually impaired users.
**Action:** Always wrap these decorative typographic characters in a `<span>` with `aria-hidden="true"` to ensure they are ignored by screen readers while remaining visually present.
## 2024-05-14 - Improve screen reader navigation context
**Learning:** Visual external link indicators (like ↗) often have `aria-hidden="true"` applied to them, leaving screen reader users unaware that clicking the link will open a new tab and pull them out of their current browsing context.
**Action:** When creating external links with `target="_blank"`, ensure to add `<span className="sr-only"> (opens in a new tab)</span>` inside the link so that screen reader users are informed of the context switch.

## 2024-05-14 - Improve mobile menu accessibility
**Learning:** Mobile menu toggle buttons often lack structural context linking them to the expanding navigation menu they control.
**Action:** Ensure that mobile menu toggle buttons have an `aria-controls="[id]"` attribute that points to the ID of the navigation menu they expand.
