import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ainnotate.net',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // The server's CSP allows style-src 'self' only, so no stylesheet may be inlined.
    inlineStylesheets: 'never',
    // /impressum is served from impressum.html (Caddy try_files), so the canonical URL
    // without a trailing slash answers directly instead of redirecting to /impressum/.
    format: 'file',
  },
});
