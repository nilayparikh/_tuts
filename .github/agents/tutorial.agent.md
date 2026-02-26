---
name: _tuts_agent
description: Agent for creating and editing pages in the _tuts Next.js course site. Uses @localm/tutorial-framework exclusively — no custom components allowed.
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
├── _common/                # Git submodule → nilayparikh/_tuts_common
│   ├── frontend/
│   │   └── tutorial-framework/  # @localm/tutorial-framework (source)
│   │       └── src/index.ts     # Public API — all exports
│   ├── .github/            # Shared agent configs, instructions, skills
│   └── docs/               # Framework documentation
│       └── tutorial-framework.md  # Full component + token reference
├── app/
│   ├── layout.tsx          # Root layout — TutorialGlobalStyles + fonts
│   ├── globals.css         # Token overrides only
│   ├── page.tsx            # Course overview / home page
│   ├── [part]/
│   │   └── page.tsx        # Course lesson pages (dynamic route)
│   ├── components/         # Site-specific UI (CourseStatsBar, LessonTopBar)
│   └── tutorials/          # (Optional) standalone tutorial pages
│       └── <slug>/
│           └── page.tsx
├── config/
│   └── site.ts             # SITE_CONFIG — header + footer props
├── data/
│   └── course.ts           # Course definition — parts[], slugs, metadata
├── docs/                   # Site-specific documentation
│   ├── _common-submodule.md  # How _common works + when to edit it
│   ├── design-principles.md  # Architecture + guardrails
│   └── deployment.md         # GitHub Pages deployment
└── public/                 # Static assets
```

## The `_common` Submodule

The `_common/` directory is a git submodule pointing to `nilayparikh/_tuts_common`.

### Key Rules

1. **Never edit `_common` for site-specific issues** — changes affect ALL tutorial sites.
2. **Edit `_common` only for** new/updated components, tokens, or shared agent configs.
3. **After editing `_common`**: push `_tuts_common`, then run `./scripts/sync-common.ps1` in `_tuts/`.
4. **Use the `working-with-common` skill** for full decision guide and operations reference.

## Component Catalogue

All imports from `@localm/tutorial-framework`. Full prop API in `_common/docs/tutorial-framework.md`.

| Group    | Components                                                                                                                                    |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Layout   | `TutorialLayout`, `TutorialHeader`, `TutorialFooter`, `SidebarLayout`, `ThemeSelector`                                                        |
| Course   | `CoursePlayerLayout`, `CourseSidebar`, `LessonHeader`, `LessonList`, `QuizBlock`, `QABlock`, `ArticleBlock`, `PodcastEmbed`, `SlideshowEmbed` |
| Content  | `HeroSection`, `SectionHeading`, `SectionDivider`, `ConceptCard`, `ConceptGrid`, `StepCard`, `StepList`                                       |
| Content  | `CodeBlock`, `CodePreview`, `KeyPoint`, `TutorialNav`, `Paragraph`, `DescriptionBox`, `StepByStepGuide`, `VideoTranscript`, `LabSettings`     |
| Callouts | `CalloutBox`, `InfoBox`, `NoteBox`, `TipBox`, `SuccessBox`, `WarningBox`, `DangerBox` (typed aliases of `CalloutBox`)                         |
| Diagrams | `MermaidDiagram`                                                                                                                              |
| Polls    | `PollBlock`                                                                                                                                   |
| Embeds   | `YouTubeEmbed` (`showShare`), `GitHubGistEmbed`, `TwitterEmbed`, `LinkedInEmbed`                                                              |
| Sharing  | `ShareButtons`                                                                                                                                |
| Theme    | `TutorialGlobalStyles` (root layout only), `ThemeProvider`                                                                                    |

## Page Patterns

### Course Lesson Page (`app/[part]/page.tsx`)

This site primarily uses `CoursePlayerLayout` with data-driven lessons from `data/course.ts`:

```tsx
import { CoursePlayerLayout, LessonHeader, YouTubeEmbed, ShareButtons, TutorialNav } from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { COURSE, COURSE_SLUGS, findPart, getAdjacentParts } from "@/data/course";

export function generateStaticParams() {
  return COURSE_SLUGS.map((slug) => ({ part: slug }));
}

export default async function LessonPage({ params }: Props) {
  const { part: slug } = await params;
  const meta = findPart(slug);
  const { prev, next } = getAdjacentParts(slug);
  return (
    <CoursePlayerLayout header={...} footer={...} sidebar={...}>
      <LessonHeader title={meta.title} ... />
      {/* Render content based on meta.type */}
      <ShareButtons ... />
      <TutorialNav prev={prev} next={next} />
    </CoursePlayerLayout>
  );
}
```

### Standalone Tutorial Page (`app/tutorials/<slug>/page.tsx`)

```tsx
import { TutorialLayout, HeroSection, ShareButtons, TutorialNav } from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: '<Page Title>',
  description: '<SEO description, 155 chars max>',
};

export default function MyTutorialPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: '/tutorials/<slug>/' }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
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

## Course Data (`data/course.ts`)

The course is defined as a single `CourseDefinition` with a `parts[]` array.
Each part has a `type` that determines rendering. Read the file to see the full `CoursePartMeta` interface.

| Part type    | Required fields                                   | Renders with                 |
| ------------ | ------------------------------------------------- | ---------------------------- |
| `video`      | `slug`, `title`, `duration`, `videoId`            | `YouTubeEmbed`               |
| `video-code` | `slug`, `title`, `duration`, `videoId`, `codeUrl` | `YouTubeEmbed` + `CodeBlock` |
| `article`    | `slug`, `title`, `duration`, `description`        | `ArticleBlock`               |
| `quiz`       | `slug`, `title`, `quizQuestions[]`                | `QuizBlock`                  |
| `qa`         | `slug`, `title`, `qa[]`                           | `QABlock`                    |
| `podcast`    | `slug`, `title`, `duration`, `podcastUrl`         | `PodcastEmbed`               |
| `slideshow`  | `slug`, `title`, `duration`, `slideshowUrl`       | `SlideshowEmbed`             |

## Mandatory Rules

1. **No custom components** — use only `@localm/tutorial-framework` exports.
2. **No inline styles** — use `--tf-*` CSS variables in `sx` or `style` props if needed.
3. **Static export safe** — no `useRouter`, no `getServerSideProps`, no `fetch` in render.
4. **All code samples in `CodeBlock`** — never use bare `<pre>` / `<code>` tags.
5. **Every heading has an eyebrow** — use `SectionHeading eyebrow="..."`.
6. **ShareButtons at the bottom** — every page ends with sharing + `TutorialNav`.
7. **`metadata` export required** — for Open Graph and SEO.
8. **Footer is slim** — single row layout, no tagline. Do not add multi-row footer content.
9. **No progress tracking** — no progress bars, completion checkmarks, or "X/Y completed" counters in the sidebar.
10. **Video sharing** — use `<YouTubeEmbed showShare shareHashtags={[...]} />` to enable share buttons under video embeds.
11. **Page sharing** — every page must have `<ShareButtons>` before `<TutorialNav>` at the bottom.
12. **No duplicate slugs** — every course part must have a unique `slug` in `data/course.ts`.
13. **`generateStaticParams`** — required for `[part]` pages; must return all valid slugs.

## KeyPoint Variant Guide

| Variant   | Use for                                       |
| --------- | --------------------------------------------- |
| `info`    | Background context or explanatory notes       |
| `tip`     | Best-practice advice the reader should follow |
| `success` | What success looks like at this step          |
| `warning` | Common mistakes or things to watch out for    |
| `danger`  | Breaking changes, security issues             |

## CodeBlock Usage

```tsx
<CodeBlock
  code={MY_CODE_STRING}
  language="typescript" // python | bash | json | yaml | tsx etc.
  filename="example.ts" // shown in header
  showLineNumbers // default: false
  highlightLines={[3, 7]} // 1-indexed line numbers
/>
```

Always declare multi-line code strings as `const` outside the component function.

## Workflow

1. Read the existing page most similar to what you are building.
2. Read `_common/docs/tutorial-framework.md` for full component API and token reference.
3. Read `_common/frontend/tutorial-framework/src/index.ts` to verify available exports.
4. For course lessons: read `data/course.ts` to understand course structure.
5. Create or edit the page file.
6. Run `get_errors` on the file — fix all TypeScript errors.
7. Confirm the build passes: `npm run build` from `_tuts/`.
