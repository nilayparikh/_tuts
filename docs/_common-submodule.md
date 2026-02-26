# Working with `_common` (Git Submodule)

The `_common/` directory is a **git submodule** pointing to [`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common). It contains the shared component library (`@localm/tutorial-framework`), AI agent configurations, documentation, and Copilot skills used across all LocalM tutorial sites.

---

## What `_common` Provides

| Path in `_common/`             | What it is                                          |
| ------------------------------ | --------------------------------------------------- |
| `frontend/tutorial-framework/` | `@localm/tutorial-framework` — 40+ React components |
| `.github/agents/`              | Copilot Chat agent definitions                      |
| `.github/instructions/`        | AI coding rules (auto-applied to tutorial files)    |
| `.github/prompts/`             | Reusable prompt templates                           |
| `.github/skills/`              | 14 pre-installed Copilot skills                     |
| `docs/`                        | Framework documentation + reference                 |
| `docs/tutorial-framework.md`   | Full component API + design token reference         |

---

## How the Submodule Works

### Configuration

The submodule is declared in `.gitmodules` at the repo root:

```gitmodules
[submodule "_common"]
    path = _common
    url = https://github.com/nilayparikh/_tuts_common.git
```

The framework is consumed via a `file:` reference in `package.json`:

```json
"@localm/tutorial-framework": "file:./_common/frontend/tutorial-framework"
```

### Source-Linked Development

Next.js is configured to transpile the framework directly from TypeScript source:

- **`transpilePackages`** in `next.config.ts` tells Next.js to compile the package
- **Turbopack alias** maps `@localm/tutorial-framework` → `_common/frontend/tutorial-framework/src/index.ts`
- **Webpack alias** provides the same mapping for production builds

This means **no pre-build step is needed during development** — changes to components in `_common/` are reflected instantly in the dev server.

### CI/CD

The GitHub Actions deploy workflow checks out the submodule automatically:

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    submodules: recursive # ← fetches _common
```

---

## Cloning

Always clone with submodules:

```bash
# New clone
git clone --recurse-submodules https://github.com/your-org/your-tutorial.git

# Existing clone (forgot --recurse-submodules)
git submodule update --init --recursive
```

---

## Syncing \_common Updates

When the `_tuts_common` repo receives new components, tokens, or docs:

```powershell
# From the _tuts/ directory
./scripts/sync-common.ps1
```

This runs `git submodule update --remote --merge _common` under the hood.

After syncing, review and commit:

```bash
# See what changed
git diff --submodule

# Commit the new submodule pointer
git add _common
git commit -m "chore: update _common submodule"
```

---

## When to Edit `_common` vs `_tuts`

This is the most important decision to get right. The rule is simple:

> **If the change benefits ALL tutorial sites → edit `_common`.**
> **If the change is specific to THIS tutorial site → edit `_tuts`.**

### Edit `_common` for:

- New or updated UI components (`frontend/tutorial-framework/src/components/`)
- New design tokens (`frontend/tutorial-framework/src/theme/`)
- Shared AI agent instructions or prompts (`.github/`)
- Framework documentation (`docs/`)
- New Copilot skills that apply to all tutorial sites

### Edit `_tuts` for:

- Page content (`app/`, `data/course.ts`)
- Site config (`config/site.ts`)
- Site-specific token overrides (`app/globals.css`)
- Site-specific AI agent/prompt files (`.github/agents/`, `.github/prompts/`)
- Site-specific skills (`.github/skills/` in `_tuts`)
- Deployment config (`.github/workflows/deploy.yml`)

### Workflow for `_common` Changes

1. Navigate into `_common/` and make your changes
2. Commit and push from within `_common/` (it's its own git repo)
3. Back in `_tuts/`, run `./scripts/sync-common.ps1` to update the submodule pointer
4. Commit the updated pointer: `git add _common && git commit -m "chore: update _common"`
5. Push `_tuts`

Or, if working on `_tuts_common` separately:

1. Clone `_tuts_common`, make changes, push
2. In `_tuts/`, run `./scripts/sync-common.ps1`
3. Commit and push `_tuts`

---

## Quick Reference

| Task                             | Command                                         |
| -------------------------------- | ----------------------------------------------- |
| Clone with submodules            | `git clone --recurse-submodules <url>`          |
| Init submodules (existing clone) | `git submodule update --init --recursive`       |
| Pull latest `_common`            | `./scripts/sync-common.ps1`                     |
| Check submodule status           | `git submodule status`                          |
| See submodule changes            | `git diff --submodule`                          |
| Commit submodule update          | `git add _common && git commit -m "chore: ..."` |
| Dev server (auto-transpiles)     | `npm run dev` or `./scripts/run.ps1`            |
| Production build                 | `npm run build`                                 |

---

## Troubleshooting

### `_common/` is empty after clone

You forgot `--recurse-submodules`:

```bash
git submodule update --init --recursive
```

### Framework import errors in dev

Check that `_common/frontend/tutorial-framework/src/index.ts` exists. If `_common/` is empty, init submodules (above).

### Build fails in CI

Ensure the GitHub Actions checkout step includes `submodules: recursive`:

```yaml
- uses: actions/checkout@v4
  with:
    submodules: recursive
```
