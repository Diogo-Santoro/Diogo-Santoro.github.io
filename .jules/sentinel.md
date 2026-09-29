## 2025-05-18 - Missing CSP in Next.js Static Export
**Vulnerability:** The application was missing basic security headers, leaving it somewhat exposed to base tag hijacking, mixed content, and object embeds.
**Learning:** For Next.js static exports (`output: 'export'`), server-side headers are not supported. While full `<meta>` tag CSPs are discouraged (as they often require `'unsafe-inline'` which defeats their purpose), targeted low-risk directives (`upgrade-insecure-requests; base-uri 'self'; object-src 'none';`) can be safely applied via a `<meta>` tag in `src/app/layout.tsx`.
**Prevention:** Apply low-risk CSP directives via meta tags when server-side headers are unavailable.
