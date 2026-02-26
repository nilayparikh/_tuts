# Deploying to GitHub Pages

This template generates a fully static site (`output: 'export'`) that can be deployed to GitHub Pages via GitHub Actions.

## The `_common` Submodule

This template includes `@localm/tutorial-framework` via a **git submodule** at `_common/`. This means:

- **Single source of truth** — framework code lives in one repo, shared across all tutorial sites
- **Source-linked development** — Next.js transpiles from TypeScript source, no pre-build in dev
- **GitHub Actions works with one flag** — `submodules: recursive` in the checkout step
- **Forks work** — `git clone --recurse-submodules` gives a fully working site

### Alternative Approaches

| Approach                          | Pros                           | Cons                                                         |
| --------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Git submodule** (current)       | Single source, live updates    | Forks must init submodules, CI needs `submodules: recursive` |
| **Vendored copy**                 | Self-contained, zero config CI | Must copy files manually on every change                     |
| **npm/GitHub Packages**           | Standard npm workflow, semver  | Must publish on every change, needs auth token in CI         |
| **GitHub Actions multi-checkout** | Live common repo, no vendoring | Only works in your org, forks break                          |

### Why Submodule (current setup)

The submodule approach is best for this monorepo because:

1. Changes to `_tuts_common` propagate to all tutorial sites via `sync-common.ps1`
2. `npm install` works with the `file:` reference — no npm registry needed
3. GitHub Actions needs only `submodules: recursive` — no auth tokens
4. Dev server transpiles from source — instant feedback when editing components

## GitHub Actions Workflow

The actual workflow is at `.github/workflows/deploy.yml`. Key points:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          submodules: recursive # ← fetches _common submodule

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
          cache-dependency-path: package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Build static export
        run: npm run build
        env:
          NODE_ENV: production

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Critical**: The `submodules: recursive` flag in the checkout step is required. Without it, `_common/` will be empty and the build will fail.

## Configuration for Sub-Path Deployment

If deploying to `https://user.github.io/repo-name/` (not a custom domain), uncomment these lines in `next.config.ts`:

```typescript
basePath: '/repo-name',
assetPrefix: '/repo-name',
```

For a custom domain or user/org page (`user.github.io`), leave them commented out.

## Alternative: npm Registry (GitHub Packages)

If you prefer a standard npm workflow over the submodule approach:

```bash
# In _common/frontend/tutorial-framework/
npm publish --registry=https://npm.pkg.github.com
```

Then in `package.json`:

```json
"@localm/tutorial-framework": "^1.0.0"
```

Add `.npmrc`:

```
@localm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Update GitHub Actions to pass the auth token:

```yaml
- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
