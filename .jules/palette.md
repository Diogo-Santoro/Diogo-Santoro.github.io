## $(date +%Y-%m-%d) - Add actionable empty state to project gallery
**Learning:** Empty states in dynamic filtering components (like the project gallery) are often overlooked. Displaying just a plain text message can leave the user feeling stuck or confused.
**Action:** Always provide a structured empty state containing an appropriate icon, a clear explanatory message, and most importantly, an actionable call-to-action (CTA) button (e.g., "Clear filter") to help the user recover quickly.
## $(date +%Y-%m-%d) - Screen reader noise from decorative punctuation
**Learning:** Screen readers will often announce decorative punctuation characters like bullet points ("•") or arrows ("→"), which interrupts the flow of content and creates an annoying auditory experience for visually impaired users.
**Action:** Always wrap standalone decorative typographic characters in a `<span>` with `aria-hidden="true"` to ensure they are ignored by screen readers while remaining visually present.
