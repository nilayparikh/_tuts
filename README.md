# A2A: The Agent2Agent Protocol — Tutorial Site

A single-course tutorial website built with the [LocalM Tutorial Template](https://github.com/nilayparikh). Covers building multi-agent AI systems using Google's A2A protocol.

**Live site**: [nilayparikh.github.io/\_tuts/](https://nilayparikh.github.io/_tuts/)

## Quick Start

```powershell
./scripts/run.ps1
```

Or manually:

```bash
npm install
npm run dev          # → http://localhost:3000
```

## What This Template Provides

- **Course overview page** (`/`) — hero, stats, full lesson list
- **Lesson pages** (`/[part]/`) — sidebar navigation + content by type
- **8 part types** — video, video-code, reading, quiz, article, podcast, slideshow, lab
- **Static export** — deploys to GitHub Pages with zero server
- **Dark theme** — design-token-based, fully customizable

## Structure

```
app/
├── layout.tsx           # Root layout
├── page.tsx             # Course overview
├── globals.css          # Theme overrides
└── [part]/page.tsx      # Lesson pages

config/site.ts           # Site name, nav, social links
data/course.ts           # Course definition (all lessons)
packages/tutorial-framework/  # Vendored component library
scripts/
├── run.ps1              # Dev launcher
└── sync-common.ps1      # Sync framework from common/
docs/                    # Template documentation
```

## Create Your Own Tutorial

1. Fork this repo (or "Use this template")
2. Edit `data/course.ts` with your lessons
3. Edit `config/site.ts` with your branding
4. `npm run build` → deploy `out/` to GitHub Pages

See [`docs/README.md`](docs/README.md) for the full guide.

## Deployment

```bash
npm run build      # → out/ directory
npx serve out      # Preview locally
```

For GitHub Actions CI/CD, see [`docs/deployment.md`](docs/deployment.md).

## Tech Stack

| Layer      | Technology                       |
| ---------- | -------------------------------- |
| Framework  | Next.js 15 (App Router)          |
| Components | `@localm/tutorial-framework`     |
| Language   | TypeScript (strict)              |
| Output     | Static HTML (`output: 'export'`) |
| Hosting    | GitHub Pages                     |

## License

MIT
