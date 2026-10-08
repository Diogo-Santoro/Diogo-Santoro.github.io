## 2023-10-24 - Unrobust External URL Detection
**Vulnerability:** External link logic (`href.startsWith("http")`) missed protocol-relative URLs (`//evil.com`) and uppercase protocols (`HTTPS://`), failing to apply `rel="noopener noreferrer"`.
**Learning:** Checking for external URLs must handle protocol-relative links and case sensitivity to ensure `rel` attributes are properly applied for defense against reverse tabnabbing.
**Prevention:** Always use a regex like `/^(https?:)?\/\//i.test(href)` or parse the URL when dynamically applying security attributes to external links.

## 2025-02-28 - Unrobust External URL Detection in Contact Page
**Vulnerability:** External link logic (`href.startsWith("mailto")`) missed protocol-relative URLs (`//evil.com`) and other arbitrary schemas, failing to apply `rel="noopener noreferrer"`.
**Learning:** Checking for external URLs must handle protocol-relative links and case sensitivity to ensure `rel` attributes are properly applied for defense against reverse tabnabbing. `startsWith` should not be used as it does not enforce schemas properly.
**Prevention:** Always use a robust regex like `/^(https?:)?\/\//i.test(href)` or parse the URL when dynamically applying security attributes to external links.
