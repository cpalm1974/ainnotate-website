# Deployment and compliance checklist

This file is operational guidance and is not published with the website.

## Before going live

- Switch the Cloudflare records for `ainnotate.net` and `www.ainnotate.net` to DNS only. The
  privacy notice states that no Cloudflare proxy is used.
- Confirm that `kontakt@algion.net` and `privacy@algion.net` handle AInnotate requests.
- Have the legal notice and privacy notice reviewed before launch and after material changes.
- Decide what `https://www.ainnotate.net/download/` serves. Installed clients check
  `/download/AInnotate.appinstaller` for updates. Never publish customer-specific packages
  (for example under `/download/<customer>/`) on the public site.
- Keep access-log deletion at seven days (`roll_keep_for 168h` in `ops/Caddyfile.ainnotate`).
- Do not load fonts, scripts, styles, analytics, maps, videos or other resources from third-party
  origins without reviewing the privacy notice first.

## Open content questions

- The application itself has no privacy statement yet. The website's privacy notice explicitly
  excludes processing inside the app.
- Jira integration is documented as alpha in the product repository; confirm before launch that
  it may be advertised.
- Confirm the minimum Windows version (the MSIX manifest requires 10.0.19041, Windows 10 2004).
