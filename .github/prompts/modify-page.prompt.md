---
agent: _tuts_agent
description: Modify an existing page in the _tuts project
---

# Modify Page

## What to change

${input:task:Describe what to change — e.g. "add a KeyPoint warning about API rate limits after step 3", "replace the YouTube embed with a new video ID", "rewrite the hero description", etc.}

## Target file

${input:file:Path to the page file to modify, e.g. app/[part]/page.tsx or app/page.tsx}

---

## Rules

1. **Read the target file first** — understand the existing structure before editing.
2. **Read `_common/frontend/tutorial-framework/src/index.ts`** to verify available exports if adding new components.
3. **Preserve existing component patterns** — don't restructure unless asked.
4. **Maintain all required elements**: `metadata` export, `TutorialLayout`/`CoursePlayerLayout` wrapper, `ShareButtons` + `TutorialNav` at the bottom (for tutorial pages).
5. **Use only `@localm/tutorial-framework` components** — no custom HTML.
6. **Use `--tf-*` CSS tokens** — no hardcoded colours, spacing, or transitions.
7. **Declare multi-line code strings as `const`** outside the component function.
8. **Keep `metadata.title` ≤ 60 chars** and `metadata.description` ≤ 155 chars.

## Quality Gate

After editing, run `get_errors` on the modified file. Fix all TypeScript errors before completing.
