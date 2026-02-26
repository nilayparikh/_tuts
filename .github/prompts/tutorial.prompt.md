---
agent: _tuts_agent
description: Create a new standalone tutorial page in the _tuts project
---

# Create Tutorial Page

Create a complete tutorial page at `app/tutorials/${input:slug}/page.tsx`.

## Input

- **Topic**: ${input:topic}
- **Slug**: ${input:slug}
- **Description**: ${input:description}
- **Prev page**: ${input:prev} (optional — label|href)
- **Next page**: ${input:next} (optional — label|href)

## Instructions

1. **Exports `metadata`** with title (≤ 60 chars), description (≤ 155 chars), and Open Graph fields.
2. **Wraps content in `<TutorialLayout>`** with `SITE_CONFIG.header` and `SITE_CONFIG.footer`.
3. **Opens with `<HeroSection>`** — use `**double asterisks**` around the key word in the headline for gradient highlight.
4. **Teaches the concept end-to-end** in logical steps:
   - Start with a "Core Concepts" section using `ConceptGrid` + `ConceptCard`
   - Walk through implementation with `StepList` + `StepCard` + `CodeBlock`
   - Add `KeyPoint` callouts at natural decision points
5. **Declares all multi-line code** as `const CODE = \`...\`` outside the component.
6. **Ends with** `<ShareButtons>` then `<TutorialNav prev={...} next={...}>`.

## Reference

- Read `_common/docs/tutorial-framework.md` for the full component API and token reference.
- Read `_common/frontend/tutorial-framework/src/index.ts` to verify available exports.

## Quality Gate

After creating the file, run `get_errors` on it. Fix all TypeScript errors before completing.
