---
agent: _tuts_agent
description: Create a new tutorial page in the _tuts Next.js project
---

# Create Tutorial Page

Create a complete tutorial page at `app/tutorials/${input:slug}/page.tsx`.

## Input

- **Topic**: ${input:topic}
- **Slug**: ${input:slug}
- **Series**: ${input:series} (optional — leave blank if standalone)
- **Description**: ${input:description}
- **Prev page**: ${input:prev} (optional — label|href)
- **Next page**: ${input:next} (optional — label|href)

## Instructions

Following the rules in `.github/instructions/tutorial.instructions.md` and the component catalogue documented in `.github/agents/tutorial.agent.md`, create a complete tutorial page that:

1. **Exports `metadata`** with title, description, and Open Graph fields.
2. **Wraps content in `<TutorialLayout>`** with `SITE_CONFIG.header` and `SITE_CONFIG.footer`.
3. **Opens with `<HeroSection>`** — use `**double asterisks**` around the key word in the headline for gradient highlight.
4. **Teaches the concept end-to-end** in logical steps:
   - Start with a "Core Concepts" section using `ConceptGrid` + `ConceptCard`
   - Walk through implementation with `StepList` + `StepCard` + `CodeBlock`
   - Add `KeyPoint` callouts at the natural decision points
5. **Declares all multi-line code** as `const CODE_STRING = \`...\`` outside the component.
6. **Ends with** `<ShareButtons>` then `<TutorialNav prev={...} next={...}>`.

## Reference Implementation

Read `app/tutorials/a2a-agent-protocol/page.tsx` for a concrete gold-standard example.

## Quality Gate

After creating the file, run `get_errors` on it. Fix all TypeScript errors before completing.
