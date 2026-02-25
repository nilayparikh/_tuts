import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionHeading,
  SectionDivider,
  ConceptCard,
  ConceptGrid,
  StepCard,
  StepList,
  CodeBlock,
  KeyPoint,
  YouTubeEmbed,
  GitHubGistEmbed,
  TwitterEmbed,
  LinkedInEmbed,
  ShareButtons,
  TutorialNav,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Component Showcase",
  description:
    "Live showcase of every component in @localm/tutorial-framework — layout, content, embeds, and sharing. Use this as a reference when building tutorial pages.",
  openGraph: {
    title: "Component Showcase | LocalM Tutorials",
    description:
      "Every component in @localm/tutorial-framework demonstrated with code.",
    type: "article",
  },
};

// ── Code snippets used in examples ────────────────────────────────────────

const IMPORT_EXAMPLE = `import {
  TutorialLayout,
  HeroSection,
  SectionHeading,
  ConceptCard,
  ConceptGrid,
  StepCard,
  StepList,
  CodeBlock,
  KeyPoint,
  YouTubeEmbed,
  GitHubGistEmbed,
  TwitterEmbed,
  LinkedInEmbed,
  ShareButtons,
  TutorialNav,
  SectionDivider,
  TutorialGlobalStyles,
} from '@localm/tutorial-framework';`;

const HERO_EXAMPLE = `<HeroSection
  eyebrow="Tutorial Series"
  headline="Build **AI Agents** that talk to each other"
  subheading="Learn the A2A protocol from scratch."
  primaryAction={{ label: 'Start →', href: '/tutorials/a2a/' }}
  secondaryAction={{ label: 'Watch on YouTube', href: 'https://youtube.com' }}
  tags={['A2A', 'AI', 'Python', 'TypeScript']}
/>`;

const CONCEPT_CARD_EXAMPLE = `<ConceptGrid columns={3}>
  <ConceptCard
    title="Agent Card"
    description="Describes an agent's capabilities and how to reach it."
    icon="🃏"
    variant="primary"
    tag="Core Concept"
    href="/tutorials/a2a/agent-card/"
  />
  <ConceptCard title="Task" description="A unit of work delegated to an agent." icon="📋" variant="accent" />
  <ConceptCard title="Streaming" description="Real-time partial responses via SSE." icon="⚡" />
</ConceptGrid>`;

const STEP_CARD_EXAMPLE = `<StepList>
  <StepCard
    step={1}
    title="Install dependencies"
    description="Add the A2A SDK to your project."
    code="npm install @google/a2a-sdk"
    codeLanguage="bash"
    note="Requires Node.js 20+"
  />
  <StepCard
    step={2}
    title="Create your agent card"
    description="Define capabilities and the endpoint URL."
    completed
  />
</StepList>`;

const CODE_BLOCK_EXAMPLE = `// agent_card.py
from a2a.server import A2AServer, AgentCard, Skill

card = AgentCard(
    name="Weather Agent",
    description="Get current weather for any city.",
    url="https://my-agent.example.com",
    skills=[
        Skill(
            id="get-weather",
            name="Get Weather",
            description="Returns current conditions.",
        )
    ],
)

app = A2AServer(card=card)`;

const KEY_POINT_EXAMPLE = `<KeyPoint variant="tip" title="Pro Tip">
  Use <code>lazyLoad</code> on YouTubeEmbed to defer loading until the user clicks.
  This dramatically improves Lighthouse performance scores.
</KeyPoint>

<KeyPoint variant="warning">
  Never use <code>getServerSideProps</code> — the site must be fully static.
</KeyPoint>`;

export default function ComponentShowcasePage() {
  return (
    <TutorialLayout
      header={{
        ...SITE_CONFIG.header,
        currentPath: "/tutorials/component-showcase/",
      }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow="@localm/tutorial-framework"
        headline="**Component** Showcase"
        subheading="Every component in the tutorial framework demonstrated with live examples and copy-paste code. Use this page as your reference while building tutorial pages."
        primaryAction={{
          label: "View source",
          href: "https://github.com/nilayparikh",
        }}
        tags={["React", "TypeScript", "CSS Variables", "Zero dependencies"]}
      />

      {/* ── Import ────────────────────────────────────────────────────────── */}
      <SectionDivider label="Getting Started" />

      <SectionHeading
        eyebrow="Setup"
        title="Import anything you need"
        subtitle="All components are available from a single package entry point."
      />

      <CodeBlock
        code={IMPORT_EXAMPLE}
        language="typescript"
        filename="any-tutorial-page.tsx"
        showLineNumbers
      />

      <KeyPoint variant="info" title="Zero external dependencies">
        The framework uses inline styles + CSS variables only — no Tailwind,
        MUI, or styled-components needed in your project.
      </KeyPoint>

      {/* ── HeroSection ───────────────────────────────────────────────────── */}
      <SectionDivider label="Layout & Hero" />

      <SectionHeading
        eyebrow="Component"
        title="HeroSection"
        subtitle="Full-width introduction section with gradient background, headline, CTA buttons, and tags."
      />

      <HeroSection
        eyebrow="Tutorial Series"
        headline="Build **AI Agents** that talk to each other"
        subheading="Learn the A2A protocol — agent cards, task delegation, and streaming responses."
        primaryAction={{ label: "Start →", href: "#" }}
        secondaryAction={{ label: "Watch on YouTube", href: "#" }}
        tags={["A2A", "AI", "Python", "TypeScript"]}
      />

      <CodeBlock code={HERO_EXAMPLE} language="tsx" filename="page.tsx" />

      {/* ── ConceptCard / ConceptGrid ─────────────────────────────────────── */}
      <SectionDivider label="Cards" />

      <SectionHeading
        eyebrow="Component"
        title="ConceptCard + ConceptGrid"
        subtitle="Feature and concept cards in a responsive grid. Supports 6 variants and optional href."
      />

      <ConceptGrid columns={3}>
        <ConceptCard
          title="default"
          description="Standard card with no colour tint."
          icon="⬜"
          tag="Variant"
        />
        <ConceptCard
          title="primary"
          description="Indigo tint — great for key concepts."
          icon="🟣"
          variant="primary"
          tag="Variant"
        />
        <ConceptCard
          title="accent"
          description="Amber tint — use for highlights."
          icon="🟡"
          variant="accent"
          tag="Variant"
        />
        <ConceptCard
          title="success"
          description="Emerald tint — completed / done."
          icon="🟢"
          variant="success"
          tag="Variant"
        />
        <ConceptCard
          title="warning"
          description="Amber/orange — caution callouts."
          icon="🟠"
          variant="warning"
          tag="Variant"
        />
        <ConceptCard
          title="danger"
          description="Red tint — errors or blockers."
          icon="🔴"
          variant="danger"
          tag="Variant"
        />
      </ConceptGrid>

      <CodeBlock code={CONCEPT_CARD_EXAMPLE} language="tsx" />

      {/* ── StepCard / StepList ──────────────────────────────────────────── */}
      <SectionDivider label="Steps" />

      <SectionHeading
        eyebrow="Component"
        title="StepCard + StepList"
        subtitle="Numbered step cards — supports inline code, notes, and a completed state."
      />

      <StepList>
        <StepCard
          step={1}
          title="Install the A2A SDK"
          description="Add the Google A2A SDK to your Python or Node.js project."
          code="npm install @google/a2a-sdk"
          codeLanguage="bash"
          note="Requires Node.js 20 or Python 3.11+"
        />
        <StepCard
          step={2}
          title="Define your agent card"
          description="Create an AgentCard that describes your agent's capabilities and endpoint."
          code="from a2a.server import AgentCard, Skill"
          codeLanguage="python"
          completed
        />
        <StepCard
          step={3}
          title="Implement task handling"
          description="Write the handler function that receives tasks and returns responses or streams."
        />
      </StepList>

      <CodeBlock code={STEP_CARD_EXAMPLE} language="tsx" />

      {/* ── CodeBlock ─────────────────────────────────────────────────────── */}
      <SectionDivider label="Code" />

      <SectionHeading
        eyebrow="Component"
        title="CodeBlock"
        subtitle="Syntax-highlighted code block with copy button, line numbers, and optional line highlighting."
      />

      <CodeBlock
        code={CODE_BLOCK_EXAMPLE}
        language="python"
        filename="agent_card.py"
        showLineNumbers
        highlightLines={[1, 3, 4, 5]}
      />

      {/* ── KeyPoint ─────────────────────────────────────────────────────── */}
      <SectionDivider label="Callouts" />

      <SectionHeading
        eyebrow="Component"
        title="KeyPoint"
        subtitle="Admonition callouts — five variants for different message types."
      />

      <KeyPoint variant="info" title="Info">
        {" "}
        General information or additional context.
      </KeyPoint>
      <KeyPoint variant="tip" title="Tip">
        {" "}
        A helpful shortcut, pattern, or trick.
      </KeyPoint>
      <KeyPoint variant="success" title="Success">
        {" "}
        Confirmation that something works correctly.
      </KeyPoint>
      <KeyPoint variant="warning" title="Warning">
        {" "}
        Caution — this might cause issues.
      </KeyPoint>
      <KeyPoint variant="danger" title="Danger">
        {" "}
        Critical — this will break things.
      </KeyPoint>

      <CodeBlock code={KEY_POINT_EXAMPLE} language="tsx" />

      {/* ── SectionDivider ────────────────────────────────────────────────── */}
      <SectionDivider label="Dividers" />

      <SectionHeading
        eyebrow="Component"
        title="SectionDivider"
        subtitle="Three visual divider variants and a SectionHeading helper."
      />

      <p
        style={{
          color: "var(--tf-text-secondary)",
          fontSize: "var(--tf-text-sm)",
          marginBottom: "var(--tf-space-3)",
        }}
      >
        default:
      </p>
      <SectionDivider />

      <p
        style={{
          color: "var(--tf-text-secondary)",
          fontSize: "var(--tf-text-sm)",
          marginBottom: "var(--tf-space-3)",
        }}
      >
        gradient:
      </p>
      <SectionDivider variant="gradient" />

      <p
        style={{
          color: "var(--tf-text-secondary)",
          fontSize: "var(--tf-text-sm)",
          marginBottom: "var(--tf-space-3)",
        }}
      >
        dots:
      </p>
      <SectionDivider variant="dots" />

      <p
        style={{
          color: "var(--tf-text-secondary)",
          fontSize: "var(--tf-text-sm)",
          marginBottom: "var(--tf-space-3)",
        }}
      >
        labelled:
      </p>
      <SectionDivider label="Section Label" />

      {/* ── YouTubeEmbed ─────────────────────────────────────────────────── */}
      <SectionDivider label="Embeds" />

      <SectionHeading
        eyebrow="Embed Component"
        title="YouTubeEmbed"
        subtitle="Privacy-enhanced, lazy-loaded YouTube embed. Click to play — no cookies until interaction."
      />

      <YouTubeEmbed
        videoId="dQw4w9WgXcQ"
        title="Tutorial video example"
        caption="Example: a tutorial walkthrough video embedded with YouTubeEmbed"
        lazyLoad
      />

      <CodeBlock
        code={`<YouTubeEmbed
  videoId="dQw4w9WgXcQ"   {/* ID or full URL */}
  title="Tutorial walkthrough"
  caption="Watch the full tutorial"
  lazyLoad                 {/* defer until click — improves performance */}
  startAt={120}            {/* optional: start at 2:00 */}
/>`}
        language="tsx"
      />

      {/* ── GitHubGistEmbed ──────────────────────────────────────────────── */}
      <SectionHeading
        eyebrow="Embed Component"
        title="GitHubGistEmbed"
        subtitle="Embeds a GitHub Gist in a sandboxed iframe with a 'View on GitHub' link."
      />

      <GitHubGistEmbed
        gistId="nilayparikh/placeholder-gist-id"
        caption="Example: an inline GitHub Gist embedded with GitHubGistEmbed"
      />

      <CodeBlock
        code={`<GitHubGistEmbed
  gistId="your-username/abc123def456"
  file="specific-file.py"   {/* optional: show only one file */}
  caption="Complete agent card implementation"
/>`}
        language="tsx"
      />

      {/* ── TwitterEmbed ─────────────────────────────────────────────────── */}
      <SectionHeading
        eyebrow="Embed Component"
        title="TwitterEmbed"
        subtitle="Embeds an X/Twitter post using the official Twitter widget with dark-theme support."
      />

      <TwitterEmbed
        tweetUrl="https://twitter.com/nilayparikh/status/1234567890123456789"
        theme="dark"
        caption="Example: an X/Twitter post embedded with TwitterEmbed"
      />

      <CodeBlock
        code={`<TwitterEmbed
  tweetUrl="https://x.com/username/status/1234567890123456789"
  theme="dark"
  caption="Announcement tweet"
/>`}
        language="tsx"
      />

      {/* ── LinkedInEmbed ─────────────────────────────────────────────────── */}
      <SectionHeading
        eyebrow="Embed Component"
        title="LinkedInEmbed"
        subtitle="Click-to-load LinkedIn post embed — defers iframe until user interaction."
      />

      <LinkedInEmbed
        postUrl="https://www.linkedin.com/embed/feed/update/urn:li:activity:7234567890123456789/"
        caption="Example: a LinkedIn post embedded with LinkedInEmbed"
        height={480}
      />

      <CodeBlock
        code={`<LinkedInEmbed
  postUrl="https://www.linkedin.com/posts/username_slug-activity-ID/"
  caption="LinkedIn post about the tutorial"
  height={520}
/>`}
        language="tsx"
      />

      {/* ── ShareButtons ─────────────────────────────────────────────────── */}
      <SectionDivider label="Sharing" />

      <SectionHeading
        eyebrow="Component"
        title="ShareButtons"
        subtitle="Social sharing row with X, LinkedIn, Email, and a copy-link button."
      />

      <ShareButtons
        title="Component Showcase | LocalM Tutorials"
        description="Every component in @localm/tutorial-framework demonstrated with code."
        hashtags={["tutorial", "react", "typescript"]}
        platforms={["twitter", "linkedin", "email"]}
      />

      <CodeBlock
        code={`<ShareButtons
  title="My Tutorial Page"
  description="Short description for share text."
  hashtags={['tutorial', 'react']}
  platforms={['twitter', 'linkedin', 'email']}  {/* omit 'github' unless you want a link */}
  showCopyLink                                   {/* default: true */}
/>`}
        language="tsx"
      />

      {/* ── TutorialNav ───────────────────────────────────────────────────── */}
      <SectionDivider label="Navigation" />

      <SectionHeading
        eyebrow="Component"
        title="TutorialNav"
        subtitle="Previous / Next navigation between tutorial pages — always at the bottom."
      />

      <TutorialNav
        prev={{
          label: "Introduction",
          href: "#",
          description: "What is the A2A Protocol?",
        }}
        next={{
          label: "Agent Cards",
          href: "#",
          description: "Define your agent's capabilities",
        }}
      />

      <CodeBlock
        code={`<TutorialNav
  prev={{ label: 'Introduction', href: '/tutorials/a2a/intro/',  description: 'What is A2A?' }}
  next={{ label: 'Agent Cards',  href: '/tutorials/a2a/cards/', description: 'Define capabilities' }}
/>`}
        language="tsx"
      />

      {/* ── Final share + nav ─────────────────────────────────────────────── */}
      <SectionDivider variant="gradient" />

      <KeyPoint variant="success" title="You've seen everything!">
        Copy any snippet from this page into your tutorial. Import from{" "}
        <code>@localm/tutorial-framework</code> — no extra config needed.
      </KeyPoint>

      <ShareButtons
        title="Component Showcase | LocalM Tutorials"
        description="Every @localm/tutorial-framework component with live demos and code."
        hashtags={["localm", "react", "tutorial"]}
      />

      <TutorialNav
        prev={{ label: "All Tutorials", href: "/tutorials/" }}
        next={{
          label: "A2A Protocol",
          href: "/tutorials/a2a-agent-protocol/",
          description: "First tutorial series",
        }}
      />
    </TutorialLayout>
  );
}
