---
agent: _tuts_agent
description: General-purpose assistant for the _tuts project
---

# \_tuts Assistant

${input:task:What would you like to do?}

---

## Context Loading

Before acting, gather the context you need:

| Task type             | Read first                                           |
| --------------------- | ---------------------------------------------------- |
| Create/edit a page    | `_common/docs/tutorial-framework.md` (component API) |
| Edit `_common`        | `.github/skills/working-with-common/SKILL.md`        |
| Deployment question   | `docs/deployment.md`                                 |
| Architecture question | `docs/design-principles.md`                          |
| Submodule operations  | `docs/_common-submodule.md`                          |
| Course structure      | `data/course.ts` + `config/site.ts`                  |

## Standing Rules

1. Use only `@localm/tutorial-framework` components — no custom HTML in pages.
2. Use `--tf-*` CSS tokens — no hardcoded values.
3. Static export safe — no client-side runtime data fetching.
4. Run `get_errors` after every file change.
5. Verify build with `npm run build` when done.
