import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionHeading,
  ConceptCard,
  ConceptGrid,
  SectionDivider,
  KeyPoint,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "All Tutorials",
  description:
    "Browse all LocalM tutorials — AI agents, web dev, DevOps, and more. Every tutorial has a companion video on YouTube.",
  openGraph: {
    title: "All Tutorials | LocalM Tutorials",
    description: "Browse all LocalM tutorials with companion YouTube videos.",
    type: "website",
  },
};

const TUTORIALS = [
  {
    category: "AI Agents",
    items: [
      {
        title: "A2A Agent-to-Agent Protocol",
        description: "Multi-agent orchestration with Google's A2A spec.",
        icon: "🤖",
        href: "/tutorials/a2a-agent-protocol/",
        variant: "primary" as const,
        tag: "Series · 8 videos",
      },
      {
        title: "MCP Model Context Protocol",
        description: "Connect AI agents to tools and data sources.",
        icon: "🔌",
        href: "/tutorials/mcp-model-context-protocol/",
        variant: "accent" as const,
        tag: "Series · 6 videos",
      },
      {
        title: "GitHub Copilot Agents",
        description: "Build custom Copilot agents and skills.",
        icon: "👾",
        href: "/tutorials/copilot-agents/",
        tag: "Series · 4 videos",
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        title: "Next.js Static Export",
        description: "Build and deploy a static Next.js site to GitHub Pages.",
        icon: "⚡",
        href: "/tutorials/nextjs-static/",
        variant: "success" as const,
        tag: "Quickstart",
      },
      {
        title: "Component Showcase",
        description:
          "Every component in @localm/tutorial-framework demonstrated.",
        icon: "🎨",
        href: "/tutorials/component-showcase/",
        tag: "Reference",
      },
      {
        title: "React Performance Patterns",
        description: "memoization, code splitting, and Suspense.",
        icon: "⚛️",
        href: "/tutorials/react-performance/",
        tag: "Deep Dive",
      },
    ],
  },
  {
    category: "Backend & DevOps",
    items: [
      {
        title: "Python FastAPI",
        description: "REST APIs with FastAPI, async SQLAlchemy, Pydantic.",
        icon: "🐍",
        href: "/tutorials/fastapi-quickstart/",
        tag: "Quickstart",
      },
      {
        title: "GitHub Actions CI/CD",
        description: "Automate builds, tests, and deployments.",
        icon: "🚀",
        href: "/tutorials/github-actions/",
        tag: "Quickstart",
      },
      {
        title: "Docker for Developers",
        description: "Containerise your app and deploy with Compose.",
        icon: "🐳",
        href: "/tutorials/docker/",
        tag: "Quickstart",
      },
    ],
  },
];

export default function TutorialsPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/tutorials/" }}
      footer={SITE_CONFIG.footer}
    >
      <HeroSection
        eyebrow="All Tutorials"
        headline="Pick a topic and **start building**"
        subheading="Every tutorial has a companion YouTube video, complete source code on GitHub, and structured docs right here."
        tags={["AI", "Web Dev", "DevOps", "Python", "TypeScript"]}
      />

      <KeyPoint variant="tip" title="New here?">
        Start with the{" "}
        <a href="/tutorials/component-showcase/">Component Showcase</a> to see
        the tutorial framework in action, then pick a topic series.
      </KeyPoint>

      {TUTORIALS.map(({ category, items }) => (
        <section key={category} style={{ marginBottom: "var(--tf-space-12)" }}>
          <SectionDivider variant="default" />
          <SectionHeading eyebrow="Category" title={category} />
          <ConceptGrid columns={3}>
            {items.map((item) => (
              <ConceptCard key={item.href} {...item} />
            ))}
          </ConceptGrid>
        </section>
      ))}
    </TutorialLayout>
  );
}
