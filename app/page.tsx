import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  ShareButtons,
  LessonList,
  InfoBox,
  TipBox,
  SuccessBox,
  NoteBox,
  CalloutBox,
  Paragraph,
  MermaidDiagram,
  StepByStepGuide,
  PollBlock,
  ConceptCard,
  ConceptGrid,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { COURSE } from "@/data/course";
import { CourseStatsBar } from "./components/CourseStatsBar";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${COURSE.title} | LocalM Tutorials`,
  description: COURSE.description,
  openGraph: {
    title: COURSE.title,
    description: COURSE.description,
    type: "article",
    publishedTime: "2025-02-25",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function CourseOverviewPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="content"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Full Course · ${COURSE.parts.length} Lessons · ${COURSE.totalDuration}`}
        headline={`**${COURSE.title.split(":")[0]}**: ${COURSE.title.split(":").slice(1).join(":").trim()}`}
        subheading={COURSE.description}
        primaryAction={{
          label: "Start first lesson →",
          href: `/${COURSE.parts[0].slug}/`,
        }}
        secondaryAction={{
          label: "Source code",
          href: COURSE.githubUrl ?? "#",
        }}
        tags={COURSE.tags}
      />

      {/* ── What You'll Build ─────────────────────────────────────────────── */}
      <SectionDivider label="What You'll Build" />
      <Paragraph lead center>
        By the end of this course you will be able to build production-grade
        multi-agent systems using the A2A protocol, from architecture to
        deployment.
      </Paragraph>

      <ConceptGrid columns={3}>
        <ConceptCard
          title="Agent Cards"
          description="Design self-describing JSON-LD agent metadata that enables discovery and capability negotiation."
          variant="primary"
        />
        <ConceptCard
          title="Task Lifecycle"
          description="Implement the full send → stream → complete lifecycle with proper error handling."
          variant="accent"
        />
        <ConceptCard
          title="Multi-Agent Orchestration"
          description="Wire multiple agents together with push notifications and real-time SSE streaming."
          variant="success"
        />
      </ConceptGrid>

      {/* ── Architecture Diagram ──────────────────────────────────────────── */}
      <SectionDivider label="Architecture Overview" />
      <MermaidDiagram
        chart={`graph TB
    subgraph Client
      UI[Web UI / CLI]
    end
    subgraph A2A_Protocol[A2A Protocol Layer]
      AC[Agent Card Discovery]
      TM[Task Manager]
      SSE[SSE Streaming]
    end
    subgraph Agents
      A1[Research Agent]
      A2[Code Agent]
      A3[Review Agent]
    end
    subgraph Tools
      MCP[MCP Tools]
      API[External APIs]
      DB[Vector Store]
    end

    UI -->|JSON-RPC| AC
    UI -->|sendTask| TM
    TM -->|delegateTask| A1
    TM -->|delegateTask| A2
    TM -->|delegateTask| A3
    TM -->|events| SSE
    SSE -->|stream| UI
    A1 --> MCP
    A2 --> API
    A3 --> DB

    style UI fill:#6366f1,stroke:#818cf8,color:#fff
    style AC fill:#14b8a6,stroke:#5eead4,color:#fff
    style TM fill:#14b8a6,stroke:#5eead4,color:#fff
    style SSE fill:#14b8a6,stroke:#5eead4,color:#fff
    style A1 fill:#1f222a,stroke:#8892a8,color:#e2e6f0
    style A2 fill:#1f222a,stroke:#8892a8,color:#e2e6f0
    style A3 fill:#1f222a,stroke:#8892a8,color:#e2e6f0
    style MCP fill:#f59e0b,stroke:#fbbf24,color:#000
    style API fill:#f59e0b,stroke:#fbbf24,color:#000
    style DB fill:#f59e0b,stroke:#fbbf24,color:#000`}
        caption="Figure 1: Multi-agent A2A architecture with MCP tool integration"
        alt="Architecture diagram showing A2A protocol connecting client to multiple agents via JSON-RPC"
      />

      {/* ── Course Curriculum ─────────────────────────────────────────────── */}
      <SectionDivider label="Course Curriculum" />

      <SectionHeading
        title={`${COURSE.parts.length} lessons, zero fluff`}
        subtitle="Each lesson is focused and builds on the previous one — from first principles to production-ready multi-agent systems."
      />

      <LessonList parts={COURSE.parts} basePath="" />

      {/* ── Prerequisites ─────────────────────────────────────────────────── */}
      <SectionDivider label="Prerequisites" />

      <InfoBox title="What you need before starting">
        Basic Python (3.11+), familiarity with REST APIs, and a Google Cloud
        account with Vertex AI enabled. No prior agent framework experience
        required.
      </InfoBox>

      {/* ── Getting Started Guide ─────────────────────────────────────────── */}
      <SectionDivider label="Quick Start" />

      <StepByStepGuide
        title="Environment Setup"
        steps={[
          {
            title: "Install Python 3.11+",
            description:
              "Make sure you have a recent Python version installed. We recommend using pyenv or the official installer.",
            code: "python --version  # Should output 3.11+",
            codeLanguage: "bash",
          },
          {
            title: "Clone the course repository",
            description:
              "Get all the starter code and lesson materials from our GitHub repository.",
            code: "git clone https://github.com/nicobailey-localm/a2a-agent2agent-protocol.git\ncd a2a-agent2agent-protocol",
            codeLanguage: "bash",
          },
          {
            title: "Set up your virtual environment",
            description:
              "Create and activate an isolated Python environment for the course.",
            code: "python -m venv .venv\nsource .venv/bin/activate  # macOS/Linux\n# .venv\\Scripts\\activate    # Windows",
            codeLanguage: "bash",
            note: "Always activate the virtual environment before working on course exercises.",
          },
          {
            title: "Install dependencies",
            description: "Install all required packages at once.",
            code: "pip install -r requirements.txt",
            codeLanguage: "bash",
          },
        ]}
      />

      {/* ── Community Poll ────────────────────────────────────────────────── */}
      <SectionDivider label="Community" />
      <PollBlock
        question="What is your primary motivation for learning the A2A protocol?"
        options={[
          { id: "multi-agent", text: "Build multi-agent AI systems" },
          {
            id: "interop",
            text: "Agent interoperability across frameworks",
          },
          { id: "production", text: "Production-grade agent deployment" },
          { id: "research", text: "Understand agent communication theory" },
          { id: "curiosity", text: "Just curious about the protocol" },
        ]}
        simulatedVotes={{
          "multi-agent": 65,
          interop: 48,
          production: 37,
          research: 22,
          curiosity: 18,
        }}
      />

      {/* ── Callout Box Showcase ──────────────────────────────────────────── */}
      <SectionDivider label="Tips & Notices" />

      <TipBox title="Learning Strategy">
        Watch each video lesson at 1x speed first, then code along in the second
        pass. This two-pass method is proven to improve retention by 40%.
      </TipBox>

      <SuccessBox title="Certification Available">
        Complete all lessons and pass the final quiz to earn your A2A Protocol
        Developer certificate.
      </SuccessBox>

      <NoteBox title="Self-Paced">
        This course is completely self-paced. Each lesson builds on the previous
        one, but you can revisit any lesson at any time.
      </NoteBox>

      {/* ── Course Stats ──────────────────────────────────────────────────── */}
      <SectionDivider />
      <CourseStatsBar course={COURSE} />

      {/* ── Share ─────────────────────────────────────────────────────────── */}
      <SectionDivider variant="gradient" />

      <ShareButtons
        title={`${COURSE.title} — Full Course`}
        description={COURSE.description}
        hashtags={["A2A", "AIAgents", "MultiAgent", "python"]}
        platforms={["twitter", "linkedin", "email"]}
      />
    </TutorialLayout>
  );
}
