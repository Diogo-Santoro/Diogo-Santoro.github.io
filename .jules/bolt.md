## 2024-05-19 - Missing Italics with next/font/google
**Learning:** When migrating from a standard Google Fonts `<link>` tag to `next/font/google`, the default configuration only fetches the `normal` style. If the original link requested italics (e.g., `ital,wght@0,300..800;1,300..800`), not specifying `style: ["normal", "italic"]` will cause italic fonts to be missing or synthesized by the browser.
**Action:** Always inspect the original Google Fonts URL for `ital` parameters and explicitly set the `style` array in the Next.js font configuration to match.
