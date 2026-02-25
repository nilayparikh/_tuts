# Deploying to GitHub Pages

This template generates a fully static site (`output: 'export'`) that can be deployed to GitHub Pages via GitHub Actions.

## The `common` Package Problem

This template includes `@localm/tutorial-framework` as a **vendored copy** at `packages/tutorial-framework/`. This means:

- **No external dependency** — the template is 100% self-contained
- **GitHub Actions just works** — no need to checkout a second repo
- **Forks work immediately** — anyone who forks gets everything they need

### Alternative Approaches

If you prefer not to vendor the framework, here are other options:

| Approach                          | Pros                           | Cons                                                         |
| --------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| **Vendored copy** (current)       | Self-contained, zero config CI | Must sync manually                                           |
| **Git submodule**                 | Always latest, single source   | Forks must init submodules, CI needs `submodules: recursive` |
| **npm/GitHub Packages**           | Standard npm workflow, semver  | Must publish on every change, needs auth token in CI         |
| **GitHub Actions multi-checkout** | Live common repo, no vendoring | Only works in your org, forks break                          |

### Recommended: Vendored Copy (current setup)

The vendored approach is best for template repos because:

1. `gh repo create --template` copies everything
2. `npm install` works with zero config
3. GitHub Actions needs no special auth or checkout steps
4. Forks in other orgs work identically

## GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

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
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload artifact
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
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Configuration for Sub-Path Deployment

If deploying to `https://user.github.io/repo-name/` (not a custom domain), uncomment these lines in `next.config.ts`:

```typescript
basePath: '/repo-name',
assetPrefix: '/repo-name',
```

For a custom domain or user/org page (`user.github.io`), leave them commented out.

## Alternative: Git Submodule Setup

If you choose the submodule approach instead of vendoring:

```bash
# Remove vendored copy
rm -rf packages/tutorial-framework

# Add submodule
git submodule add https://github.com/your-org/common.git packages/common

# Symlink (or update package.json path)
# package.json: "@localm/tutorial-framework": "file:./packages/common/frontend/tutorial-framework"
```

Update GitHub Actions:

```yaml
- name: Checkout
  uses: actions/checkout@v4
  with:
    submodules: recursive
```

## Alternative: GitHub Packages (npm)

Publish the framework to GitHub Packages:

```bash
# In common/frontend/tutorial-framework/
npm publish --registry=https://npm.pkg.github.com
```

Then in the template:

```json
"@localm/tutorial-framework": "^1.0.0"
```

Add `.npmrc`:

```
@localm:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Update GitHub Actions:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22
    registry-url: https://npm.pkg.github.com
    cache: npm

- name: Install dependencies
  run: npm ci
  env:
    NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
