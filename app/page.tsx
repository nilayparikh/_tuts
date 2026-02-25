import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionHeading,
  ConceptCard,
  ConceptGrid,
  SectionDivider,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "LocalM Tutorials — Learn by Building",
  description:
    "Hands-on video tutorials covering AI agents, developer tools, and modern software engineering. Build real projects from scratch.",
  openGraph: {
    title: "LocalM Tutorials — Learn by Building",
    description:
      "Hands-on video tutorials covering AI, developer tools, and software engineering.",
    type: "website",
  },
};

const SERIES = [
  {
    title: "A2A: Agent-to-Agent Protocol",
    description:
      "Build multi-agent systems using the Google A2A protocol. Covers card discovery, task delegation, and streaming.",
    icon: "🤖",
    variant: "primary" as const,
    tag: "AI Agents",
    href: "/tutorials/a2a-agent-protocol/",
  },
  {
    title: "MCP: Model Context Protocol",
    description:
      "Connect your AI agents to real data sources with the Model Context Protocol. Servers, tools, and resources.",
    icon: "🔌",
    variant: "accent" as const,
    tag: "AI Protocol",
    href: "/tutorials/mcp-model-context-protocol/",
  },
  {
    title: "Next.js Static Sites",
    description:
      "Deploy fast, SEO-optimised sites with Next.js static export and GitHub Pages. No server required.",
    icon: "⚡",
    variant: "success" as const,
    tag: "Web Dev",
    href: "/tutorials/nextjs-static/",
  },
  {
    title: "Component Showcase",
    description:
      "A live showcase of every component in the @localm/tutorial-framework library with code examples.",
    icon: "🎨",
    variant: "default" as const,
    tag: "Framework",
    href: "/tutorials/component-showcase/",
  },
  {
    title: "Python FastAPI in 30 min",
    description:
      "Build a production-ready REST API with FastAPI, async SQLAlchemy, and type-safe Pydantic models.",
    icon: "🐍",
    variant: "default" as const,
    tag: "Backend",
    href: "/tutorials/fastapi-quickstart/",
  },
  {
    title: "GitHub Actions CI/CD",
    description:
      "Automate testing, building, and deployment with GitHub Actions. Includes matrix builds and environments.",
    icon: "🚀",
    variant: "default" as const,
    tag: "DevOps",
    href: "/tutorials/github-actions/",
  },
];

export default function HomePage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow="LocalM · Learn by Building"
        headline="Real **tutorials**. Real **code**."
        subheading="Hands-on video series covering AI agents, developer tools, and modern software engineering. Every concept is explained, every line of code is shown."
        primaryAction={{ label: "Browse tutorials", href: "/tutorials/" }}
        secondaryAction={{
          label: "Watch on YouTube",
          href: "https://youtube.com/@localm",
        }}
        tags={[
          "AI Agents",
          "A2A Protocol",
          "MCP",
          "Next.js",
          "Python",
          "GitHub Actions",
        ]}
      />

      <SectionDivider variant="gradient" />

      {/* ── Tutorial Series ───────────────────────────────────────────────── */}
      <SectionHeading
        eyebrow="Tutorial Series"
        title="What would you like to build?"
        subtitle="Each series is a complete video course with companion code and docs."
        align="center"
      />

      <ConceptGrid columns={3}>
        {SERIES.map((s) => (
          <ConceptCard key={s.href} {...s} />
        ))}
      </ConceptGrid>

      <SectionDivider variant="dots" />

      {/* ── Value props ───────────────────────────────────────────────────── */}
      <SectionHeading
        eyebrow="Why LocalM?"
        title="Everything open source, everything local"
        align="center"
      />

      <ConceptGrid columns={3}>
        <ConceptCard
          title="Free & Open Source"
          description="Every tutorial, every line of code — publicly available on GitHub. No paywalls."
          icon="🔓"
          tag="Open"
        />
        <ConceptCard
          title="Video + Docs"
          description="YouTube walkthroughs paired with searchable, structured companion docs."
          icon="🎥"
          tag="Format"
          variant="primary"
        />
        <ConceptCard
          title="Runs Locally"
          description="No cloud APIs needed. Pull the code, run it on your machine, own the output."
          icon="💻"
          tag="Local-first"
          variant="accent"
        />
      </ConceptGrid>
    </TutorialLayout>
  );
}
