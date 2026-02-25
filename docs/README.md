# LocalM Tutorial Template — Docs

This is a **template repository** for creating single-course tutorial websites. Fork it, replace the course data, deploy to GitHub Pages.

## Quick Start

```powershell
# Clone and run
git clone https://github.com/your-org/your-tutorial.git
cd your-tutorial
./scripts/run.ps1
```

Or step-by-step:

```bash
npm install
npm run dev          # → http://localhost:3000
```

## Architecture

```
_tuts/                          # ← Your forked repo
├── app/
│   ├── layout.tsx              # Root layout (global styles, fonts)
│   ├── page.tsx                # Course overview (lesson list)
│   ├── globals.css             # Token overrides
│   └── [part]/
│       └── page.tsx            # Individual lesson page (sidebar + content)
├── config/
│   └── site.ts                 # Header, footer, nav links, social URLs
├── data/
│   └── course.ts               # THE course definition (all lessons)
├── packages/
│   └── tutorial-framework/     # Vendored copy of @localm/tutorial-framework
├── scripts/
│   ├── run.ps1                 # One-command dev launcher
│   └── sync-common.ps1         # Pull latest common components
├── docs/                       # This directory
├── next.config.ts              # Static export config
└── package.json
```

## How to Create Your Own Tutorial

### 1. Fork this template

Use the GitHub "Use this template" button or:

```bash
gh repo create my-tutorial --template nilayparikh/a2a-agent2agent-protocol-tutorial
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

The component library lives at `packages/tutorial-framework/` (vendored copy). To pull updates from the upstream `common/` repo:

```powershell
./scripts/sync-common.ps1
```

This copies `common/frontend/tutorial-framework/src/` → `packages/tutorial-framework/src/`.

## Scripts

| Script                    | Purpose                         |
| ------------------------- | ------------------------------- |
| `scripts/run.ps1`         | Install deps + start dev server |
| `scripts/sync-common.ps1` | Sync framework from common/     |
