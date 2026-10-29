## 2023-10-24 - Unrobust External URL Detection
**Vulnerability:** External link logic (`href.startsWith("http")`) missed protocol-relative URLs (`//evil.com`) and uppercase protocols (`HTTPS://`), failing to apply `rel="noopener noreferrer"`.
**Learning:** Checking for external URLs must handle protocol-relative links and case sensitivity to ensure `rel` attributes are properly applied for defense against reverse tabnabbing.
**Prevention:** Always use a regex like `/^(https?:)?\/\//i.test(href)` or parse the URL when dynamically applying security attributes to external links.
## 2023-10-25 - Prevent javascript: URI XSS and Information Disclosure
**Vulnerability:** Components accepting `href` props without sanitizing `javascript:` URIs can lead to XSS. Also, default Next.js setups expose `X-Powered-By: Next.js` headers.
**Learning:** React does not inherently protect against `javascript:` URIs in anchor tags. Explicit sanitization is required. `poweredByHeader: false` is a quick win for reducing framework footprint.
**Prevention:** Always validate and sanitize user-provided or dynamically injected URLs to strip `javascript:` protocols, and explicitly disable `poweredByHeader` in Next.js config.
## 2023-10-25 - [Frontend XSS Defense-in-Depth]
**Vulnerability:** Static data rendered in `href` attributes was vulnerable to potential XSS (javascript: URIs) if the data source was ever compromised or became dynamic.
**Learning:** Native `<a>` tags in React do not automatically sanitize `href` values like `next/link` might or like custom button components do.
**Prevention:** Always implement regex sanitization (`/^\s*javascript:/i.test(href) ? '#' : href`) for `href` inputs in UI components for complete defense-in-depth, even when consuming currently static sources.
## 2023-10-25 - [Frontend XSS Defense-in-Depth]
**Vulnerability:** Empty anchors resulting from XSS sanitization (`#`) were being forcefully opened in new tabs due to hardcoded `target="_blank"` attributes, exposing a minor UX issue and potential for abuse.
**Learning:** Hardcoded `target="_blank"` attributes should not be applied to links whose `href` is dynamically sanitized, because the resulting fallback URL (e.g., `#`) is not external.
**Prevention:** When sanitizing dynamic links against XSS (e.g., fallback to '#'), conditionally apply `target="_blank"` and `rel="noopener noreferrer"` only if the sanitized URL is genuinely external.
## 2025-02-28 - Incomplete URI Sanitization
**Vulnerability:** URL sanitization regex only blocked `javascript:` URIs, leaving the application vulnerable to XSS and unexpected behaviors via `data:`, `vbscript:`, and `file:` URIs.
**Learning:** `data:` URIs (e.g., `data:text/html,<script>alert(1)</script>`) and `vbscript:` URIs can also execute arbitrary code or load malicious content when used in `href` attributes. `file:` URIs could lead to local file inclusion or unexpected access in certain environments. A comprehensive defense-in-depth approach requires blocking all potentially dangerous URI schemes, not just `javascript:`.
**Prevention:** Always use a robust regex like `/^\s*(javascript|data|vbscript|file):/i.test(href)` when sanitizing URLs for anchor tags.
## 2025-02-28 - Incomplete URI Sanitization
**Vulnerability:** URL sanitization regex only blocked `javascript:` URIs, leaving the application vulnerable to XSS and unexpected behaviors via `data:`, `vbscript:`, and `file:` URIs.
**Learning:** `data:` URIs (e.g., `data:text/html,<script>alert(1)</script>`) and `vbscript:` URIs can also execute arbitrary code or load malicious content when used in `href` attributes. `file:` URIs could lead to local file inclusion or unexpected access in certain environments. A comprehensive defense-in-depth approach requires blocking all potentially dangerous URI schemes, not just `javascript:`.
**Prevention:** Always use a robust regex like `/^\s*(javascript|data|vbscript|file):/i.test(href)` when sanitizing URLs for anchor tags.
## 2025-02-28 - Incomplete URI Sanitization
**Vulnerability:** URL sanitization regex only blocked `javascript:` URIs, leaving the application vulnerable to XSS and unexpected behaviors via `data:`, `vbscript:`, and `file:` URIs.
**Learning:** `data:` URIs (e.g., `data:text/html,<script>alert(1)</script>`) and `vbscript:` URIs can also execute arbitrary code or load malicious content when used in `href` attributes. `file:` URIs could lead to local file inclusion or unexpected access in certain environments. A comprehensive defense-in-depth approach requires blocking all potentially dangerous URI schemes, not just `javascript:`.
**Prevention:** Always use a robust regex like `/^\s*(javascript|data|vbscript|file):/i.test(href)` when sanitizing URLs for anchor tags.
## 2024-10-24 - URL Sanitization XSS Bypass
**Vulnerability:** URL sanitization function could be bypassed by inserting control characters or whitespace into the protocol (e.g. `java\nscript:`).
**Learning:** Browsers are permissive when parsing URLs and will often ignore whitespace and control characters when determining the protocol for execution. Simple regex matching on the raw string is insufficient.
**Prevention:** Always strip control characters and whitespace (`[\u0000-\u001F\u007F-\u009F\s]`) before checking the protocol for dangerous schemes.
## 2025-02-28 - Unrobust External URL Detection (Backslash Normalization Bypass)
**Vulnerability:** External link logic (`/^(https?:)?\/\//i.test(href)`) missed backslash normalization (`\\` or `/\` or `\/`), allowing protocol-relative URLs with backslashes (e.g., `https:\\evil.com` or `\\evil.com`) to bypass the check and fail to apply `rel="noopener noreferrer"`.
**Learning:** Browsers normalize backslashes to forward slashes in URLs. When determining if a URL is external to dynamically apply security attributes (like `rel="noopener noreferrer"`), checking only for forward slashes is insufficient. Attackers can use backslashes to bypass these checks while the browser still navigates to the external domain, opening the application up to reverse tabnabbing.
**Prevention:** Always use a regex that matches both forward and backward slashes (e.g., `/^(https?:)?[\\/]{2}/i.test(href)`) when dynamically applying security attributes to external links.
