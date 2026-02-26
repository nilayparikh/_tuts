---
name: working-with-common
description: Guide for working with the _common git submodule in LocalM tutorial sites. Use when editing shared components, syncing the submodule, deciding whether a change belongs in _common or _tuts, or understanding the framework source structure.
---

# Working with `_common` (Shared Submodule)

## Overview

The `_common/` directory is a git submodule pointing to [`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common). It contains the shared `@localm/tutorial-framework` component library, design tokens, AI agent configurations, and documentation.

## What `_common` Contains

| Directory                                  | Contents                                    |
| ------------------------------------------ | ------------------------------------------- |
| `frontend/tutorial-framework/src/`         | 40+ React components, design tokens, theme  |
| `frontend/tutorial-framework/src/index.ts` | Public API — all exports                    |
| `.github/`                                 | Shared agent, instructions, prompts, skills |
| `docs/tutorial-framework.md`               | **Full component API + token reference**    |
| `docs/README.md`                           | Structure + usage guide                     |

> For the full component API, token tables, and prop reference, read `_common/docs/tutorial-framework.md`.

## Decision Guide: Where Does This Change Go?

### Edit `_common` when:

- Adding or modifying a UI component (affects all sites)
- Adding or modifying a design token (`--tf-*`)
- Updating shared AI agent instructions or prompts
- Fixing a bug in the framework
- Adding a Copilot skill that benefits all sites

### Edit `_tuts` (site repo) when:

- Adding page content (`app/` directory)
- Changing site config (`config/site.ts`)
- Overriding tokens for this site only (`app/globals.css`)
- Adding site-specific agents, prompts, or skills
- Modifying deployment config

### Rule of thumb

> If it benefits ALL tutorial sites → `_common`. If it's specific to THIS site → `_tuts`.

## Common Operations

### Sync latest `_common` into `_tuts`

```powershell
./scripts/sync-common.ps1
git add _common
git commit -m "chore: update _common submodule"
```

### Edit a framework component

```bash
# Edit in _common — changes picked up instantly by Turbopack dev server
cd _common/frontend/tutorial-framework/src/components/<group>/
```

### Add a new component

1. Create in `_common/frontend/tutorial-framework/src/components/<group>/`
2. Export from group `index.ts` and from `src/index.ts`
3. Update `_common/docs/tutorial-framework.md`
4. Push `_tuts_common`, then `sync-common.ps1`

### Clone with `_common`

```bash
git clone --recurse-submodules https://github.com/nilayparikh/<repo>.git
# OR: git submodule update --init --recursive
```

## How the Framework is Consumed

```json
// package.json
"@localm/tutorial-framework": "file:./_common/frontend/tutorial-framework"
```

- `transpilePackages: ["@localm/tutorial-framework"]` in `next.config.ts`
- Turbopack + Webpack aliases point to `_common/.../src/index.ts`
- No pre-build step in development

## Troubleshooting

| Problem                          | Solution                                                        |
| -------------------------------- | --------------------------------------------------------------- |
| `_common/` is empty              | `git submodule update --init --recursive`                       |
| Import errors for framework      | Check `_common/frontend/tutorial-framework/src/index.ts` exists |
| CI build fails (empty `_common`) | Add `submodules: recursive` to checkout step                    |
| Component changes not reflecting | Restart dev server; check Turbopack alias in `next.config.ts`   |
| Type errors after sync           | Run `npm run type-check` to see full error list                 |
