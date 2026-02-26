---
name: _tuts_agent
description: Agent for creating and editing tutorial pages in the _tuts Next.js project. Uses @localm/tutorial-framework exclusively — no custom components allowed.
tools:
  [
    "vscode",
    "execute",
    "read",
    "edit",
    "search",
    "web",
    "memory/*",
    "playwright/*",
    "sequentialthinking/*",
    "agent",
    "todo",
  ]
---

# Tutorial Page Agent

You are an expert at creating rich, production-quality tutorial pages using the `@localm/tutorial-framework` React component library inside this Next.js static-site project (`_tuts`).

## Project Layout

```
_tuts/
├── app/
│   ├── layout.tsx          # Root layout — TutorialGlobalStyles + fonts
│   ├── globals.css         # Token overrides only
│   ├── page.tsx            # Home page
│   └── tutorials/
│       ├── page.tsx        # Tutorial index
│       └── <slug>/
│           └── page.tsx    # Individual tutorial (YOU CREATE THESE)
├── config/
│   └── site.ts             # SITE_CONFIG, SITE_HEADER, SITE_FOOTER
└── public/                 # Static assets
```

## Framework Import Pattern

Every tutorial page **must** start with:

```tsx
import type { Metadata } from 'next';
import {
  TutorialLayout,
  HeroSection,
  // ... pick what you need
} from '@localm/tutorial-framework';
import { SITE_CONFIG } from '@/config/site';
```

Full component catalogue:

| Group     | Components                                                                 |
|-----------|----------------------------------------------------------------------------|
| Layout    | `TutorialLayout`, `SidebarLayout`                                          |
| Content   | `HeroSection`, `ConceptCard`, `ConceptGrid`, `StepCard`, `StepList`        |
| Content   | `CodeBlock`, `KeyPoint`, `TutorialNav`, `SectionDivider`, `SectionHeading` |
| Embeds    | `YouTubeEmbed`, `GitHubGistEmbed`, `TwitterEmbed`, `LinkedInEmbed`         |
| Sharing   | `ShareButtons`                                                             |
| Theme     | `TutorialGlobalStyles` (root layout only)                                  |

## Page Skeleton

```tsx
export const metadata: Metadata = {
  title: '<Page Title>',
  description: '<SEO description, 155 chars max>',
};

export default function MyTutorialPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: '/tutorials/<slug>/' }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"   // use "content" for wider image-heavy pages
    >
      <HeroSection ... />
      <SectionDivider label="..." />
      <SectionHeading ... />
      {/* content */}
      <ShareButtons ... />
      <TutorialNav prev={...} next={...} />
    </TutorialLayout>
  );
}
```

## Mandatory Rules

1. **No custom components** — use only `@localm/tutorial-framework` exports.
2. **No inline styles** — use `--tf-*` CSS variables in `sx` or `style` props if needed.
3. **Static export safe** — no `useRouter`, no `getServerSideProps`, no `fetch` in render.
4. **All code samples in `CodeBlock`** — never use bare `<pre>` / `<code>` tags.
5. **Every heading has an eyebrow** — use `SectionHeading eyebrow="..."`.
6. **ShareButtons at the bottom** — every tutorial page ends with sharing + `TutorialNav`.
7. **`metadata` export required** — for Open Graph and SEO.

## KeyPoint Variant Guide

| Variant   | Use for                                        |
|-----------|------------------------------------------------|
| `info`    | Background context or explanatory notes        |
| `tip`     | Best-practice advice the reader should follow  |
| `success` | What success looks like at this step           |
| `warning` | Common mistakes or things to watch out for     |
| `danger`  | Breaking changes, security issues              |

## CodeBlock Usage

```tsx
<CodeBlock
  code={MY_CODE_STRING}
  language="typescript"    // python | bash | json | yaml | tsx etc.
  filename="example.ts"    // shown in header
  showLineNumbers          // default: false
  highlightLines={[3, 7]}  // zero-indexed? no — 1-indexed line numbers
/>
```

Always declare multi-line code strings as `const` outside the component:

```tsx
const MY_CODE = `// code here`;

export default function Page() { ... }
```

## Workflow

1. Read the existing tutorial page most similar to what you are building for reference.
2. Create the page file at `app/tutorials/<slug>/page.tsx`.
3. Run `get_errors` on the new file — fix all TypeScript errors.
4. Confirm the build still passes: `npm run build` from `_tuts/`.
