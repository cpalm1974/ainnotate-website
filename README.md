# AInnotate website

Static product website for AInnotate, the context-aware AI sidebar for Windows by Algion GmbH.
German only for now. No JavaScript, no cookies, no third-party resources.

## Development

Node.js 22.20 or newer is required.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run check
npm run build
```

The deployable site is written to `dist/`.

## Content rules

- Do not name customers, customer systems or real ticket, order or system IDs. The hero scene in
  `src/components/SidebarScene.astro` is drawn with neutral demo data on purpose; do not replace it
  with screenshots from real systems.
- Only advertise released features. Customer-specific, demo and personal plugins are not listed.
- Third-party product names describe compatibility only (see the trademark note in the legal notice).

## Deployment

Pushes to `main` are built and deployed to `https://ainnotate.net` by
`.github/workflows/deploy.yml`. The production environment requires one GitHub Actions secret:

- `AINNOTATE_DEPLOY_SSH_KEY`: private Ed25519 key for the restricted
  `ainnotate-deploy@ssh.ainnotate.net` account.

The server is the static-site host ssh2 (`ssh.ainnotate.net`, also serving algion.net). The
checked-in host key pins its identity. The forced command `ops/ainnotate-site-deploy` accepts a
static-site archive only, publishes it as a new release and switches the `current` symlink
atomically. The five most recent releases are retained. The Caddy site block is
`ops/Caddyfile.ainnotate`.

See [COMPLIANCE.md](COMPLIANCE.md) before deploying.
