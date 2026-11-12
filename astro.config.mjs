import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ainnotate.net',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // The server's CSP allows style-src 'self' only, so no stylesheet may be inlined.
    inlineStylesheets: 'never',
  },
});
