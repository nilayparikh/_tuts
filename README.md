# A2A: The Agent2Agent Protocol — Tutorial Site

A single-course tutorial website built with the [LocalM Tutorial Template](https://github.com/nilayparikh). Covers building multi-agent AI systems using Google's A2A protocol.

**Live site**: [nilayparikh.github.io/\_tuts/](https://nilayparikh.github.io/_tuts/)

## Quick Start

```powershell
git clone --recurse-submodules https://github.com/nilayparikh/_tuts.git
cd _tuts
./scripts/run.ps1
```

Or manually:

```bash
git clone --recurse-submodules https://github.com/nilayparikh/_tuts.git
cd _tuts
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
_common/                     # Git submodule → nilayparikh/_tuts_common
├── frontend/
│   └── tutorial-framework/  # @localm/tutorial-framework (40+ components)
├── .github/                 # Shared agent configs, instructions, skills
└── docs/                    # Framework documentation

app/
├── layout.tsx               # Root layout
├── page.tsx                 # Course overview
├── globals.css              # Theme overrides
└── [part]/page.tsx          # Lesson pages

config/site.ts               # Site name, nav, social links
data/course.ts               # Course definition (all lessons)
scripts/
├── run.ps1                  # Dev launcher
└── sync-common.ps1          # Sync _common submodule
docs/                        # Template documentation
.github/
├── agents/                  # Copilot agent definitions
├── instructions/            # AI coding rules (auto-applied)
├── prompts/                 # Reusable prompt templates
├── skills/                  # Copilot agent skills
└── workflows/               # GitHub Actions (deploy)
```

## The `_common` Submodule

The shared component library (`@localm/tutorial-framework`) and AI agent configurations live in [`nilayparikh/_tuts_common`](https://github.com/nilayparikh/_tuts_common), included as a git submodule at `_common/`.

- **Always clone with submodules**: `git clone --recurse-submodules <url>`
- **Sync updates**: `./scripts/sync-common.ps1`
- **Full guide**: [`docs/_common-submodule.md`](docs/_common-submodule.md)

## Create Your Own Tutorial

1. Fork this repo (or "Use this template"), then `git submodule update --init --recursive`
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
