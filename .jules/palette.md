## $(date +%Y-%m-%d) - Add actionable empty state to project gallery
**Learning:** Empty states in dynamic filtering components (like the project gallery) are often overlooked. Displaying just a plain text message can leave the user feeling stuck or confused.
**Action:** Always provide a structured empty state containing an appropriate icon, a clear explanatory message, and most importantly, an actionable call-to-action (CTA) button (e.g., "Clear filter") to help the user recover quickly.
## 2024-05-18 - Respect prefers-reduced-motion for JS-driven animations
**Learning:** For continuous JS-driven animations (like mouse tracking on MagneticButton), CSS media queries `(prefers-reduced-motion: reduce)` are not sufficient to disable the interaction or layout thrashing.
**Action:** When evaluating `prefers-reduced-motion` in JS for high-frequency events, initialize the state once in a `useEffect` using `window.matchMedia` and store it in a `useRef` to return early from the event handlers, avoiding synchronous evaluations on every trigger.
