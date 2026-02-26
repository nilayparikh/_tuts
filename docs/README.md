# LocalM Tutorial Template — Docs

This is a **template repository** for creating single-course tutorial websites. Fork it, replace the course data, deploy to GitHub Pages.

## Quick Start

```powershell
# Clone (with submodules!) and run
git clone --recurse-submodules https://github.com/your-org/your-tutorial.git
cd your-tutorial
./scripts/run.ps1
```

Or step-by-step:

```bash
git clone --recurse-submodules https://github.com/your-org/your-tutorial.git
cd your-tutorial
npm install
npm run dev          # → http://localhost:3000
```

> **Important**: Always clone with `--recurse-submodules`. The `_common/` directory is a git submodule containing the shared component library.

## Architecture

```
_tuts/                          # ← Your forked repo
├── _common/                    # Git submodule → nilayparikh/_tuts_common
│   ├── frontend/
│   │   └── tutorial-framework/ # @localm/tutorial-framework (source)
│   ├── .github/                # Shared agent configs, instructions, skills
│   └── docs/                   # Framework documentation
├── app/
│   ├── layout.tsx              # Root layout (global styles, fonts)
│   ├── page.tsx                # Course overview (lesson list)
│   ├── globals.css             # Token overrides
│   ├── components/             # Site-specific data wrappers
│   └── [part]/
│       └── page.tsx            # Individual lesson page (sidebar + content)
├── config/
│   └── site.ts                 # Header, footer, nav links, social URLs
├── data/
│   └── course.ts               # THE course definition (all lessons)
├── .github/
│   ├── agents/                 # Copilot agent definitions
│   ├── instructions/           # AI coding rules (auto-applied)
│   ├── prompts/                # Reusable prompt templates
│   ├── skills/                 # Copilot agent skills
│   └── workflows/              # GitHub Actions (deploy to Pages)
├── scripts/
│   ├── run.ps1                 # One-command dev launcher
│   └── sync-common.ps1         # Pull latest _common submodule
├── docs/                       # This directory
├── next.config.ts              # Static export + framework alias config
└── package.json
```

## The `_common` Submodule

The shared component library and AI agent configurations live in a separate repository ([`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common)) and are included as a git submodule at `_common/`.

See [\_common-submodule.md](_common-submodule.md) for the full guide on how `_common` works, when to edit it, and how to sync updates.

## How to Create Your Own Tutorial

### 1. Fork this template

Use the GitHub "Use this template" button or:

```bash
gh repo create my-tutorial --template nilayparikh/a2a-agent2agent-protocol-tutorial
cd my-tutorial
git submodule update --init --recursive
```

### 2. Replace course data

Edit `data/course.ts`:

```typescript
export const COURSE: CourseDefinition = {
  slug: "my-course",
  title: "My Course Title",
  description: "What learners will build.",
  totalDuration: "~45 mins",
  tags: ["Topic1", "Topic2"],
  githubUrl: "https://github.com/you/repo",
  parts: [
    {
      slug: "intro",
      title: "Introduction",
      type: "video",
      duration: "5 mins",
      videoId: "youtube-video-id",
      description: "Welcome to the course.",
      objectives: ["Understand X", "Learn Y"],
    },
    // ... more parts
  ],
};
```

### 3. Update site config

Edit `config/site.ts` — change site name, GitHub URL, social links.

### 4. Customize theme (optional)

Override tokens in `app/globals.css`:

```css
:root {
  --tf-color-primary: #7c3aed;
}
```

### 5. Build and deploy

```bash
npm run build        # Generates out/ with static HTML
```

## Documentation Index

| Document                                      | Content                                    |
| --------------------------------------------- | ------------------------------------------ |
| [README.md](README.md)                        | This file — overview + quick start         |
| [\_common-submodule.md](_common-submodule.md) | How the `_common` submodule works          |
| [design-principles.md](design-principles.md)  | Architecture, component rules, guardrails  |
| [deployment.md](deployment.md)                | GitHub Pages deployment guide              |
| [`_common/docs/`](../_common/docs/README.md)  | Framework library + AI agent documentation |

## Part Types

Each lesson in `data/course.ts` has a `type` that controls how it renders:

| Type         | Renders                              | Required Fields      |
| ------------ | ------------------------------------ | -------------------- |
| `video`      | YouTube embed + objectives + Q&A     | `videoId`            |
| `video-code` | Video + code link + objectives + Q&A | `videoId`, `codeUrl` |
| `reading`    | Resource list + reading link         | `readingUrl`         |
| `quiz`       | Interactive graded quiz              | `quizQuestions`      |
| `article`    | Long-form article block              | `objectives`         |
| `podcast`    | Audio player embed                   | —                    |
| `slideshow`  | Slide deck embed                     | —                    |

## GitHub Pages Deployment

See [deployment.md](deployment.md) for the full CI/CD setup.

## Updating the Framework

The component library lives in the `_common/` git submodule (→ `nilayparikh/_tuts_common`). To pull the latest changes:

```powershell
./scripts/sync-common.ps1
git add _common
git commit -m "chore: update _common submodule"
```

See [\_common-submodule.md](_common-submodule.md) for the full guide.

## Scripts

| Script                    | Purpose                                 |
| ------------------------- | --------------------------------------- |
| `scripts/run.ps1`         | Install deps + start dev server         |
| `scripts/sync-common.ps1` | Pull latest `_common` submodule changes |
