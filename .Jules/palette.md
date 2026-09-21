## 2024-05-24 - Initial Observations
**Learning:** The portfolio app has good basic semantic HTML and some ARIA labels, but completely lacks custom focus states for keyboard navigation. Relying on default browser outlines can lead to poor contrast against dark themes.
**Action:** Implement global `:focus-visible` styles using the existing design system tokens (e.g., `--accent`) to ensure keyboard users have clear, high-contrast visual indicators.
