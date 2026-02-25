import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  ConceptCard,
  ConceptGrid,
  KeyPoint,
  ShareButtons,
  PartTypeBadge,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { A2A_COURSE } from "@/data/courses/a2a-agent-protocol";

export const metadata: Metadata = {
  title: "A2A: The Agent2Agent Protocol | LocalM Tutorials",
  description:
    "Learn to build multi-agent AI systems with Google's A2A protocol. 16 lessons covering QA agents on Vertex AI, LangGraph, BeeAI, ADK, and production deployment.",
  openGraph: {
    title: "A2A: The Agent2Agent Protocol",
    description:
      "Build multi-agent AI systems from scratch using the open A2A spec.",
    type: "article",
    publishedTime: "2025-02-25",
  },
};

// ─── Type icons ────────────────────────────────────────────────────────────

const TYPE_ICON: Record<string, string> = {
  video: "▶",
  reading: "📖",
  "video-code": "💻",
  quiz: "📝",
  podcast: "🎙",
  slideshow: "📑",
  article: "📰",
  lab: "🧪",
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function A2ACourseOverviewPage() {
  const course = A2A_COURSE;

  return (
    <TutorialLayout
      header={{
        ...SITE_CONFIG.header,
        currentPath: "/tutorials/a2a-agent-protocol/",
      }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow="Full Course · 16 Lessons · ~70 mins"
        headline="**A2A**: The Agent2Agent Protocol"
        subheading="Build multi-agent AI systems that discover each other, delegate tasks, and stream results — using Google's open A2A specification. Covers six frameworks: Vertex AI, Google ADK, LangGraph, BeeAI, Microsoft Agent Framework, and Agent Stack."
        primaryAction={{
          label: "Start first lesson →",
          href: "/tutorials/a2a-agent-protocol/introduction/",
        }}
        secondaryAction={{
          label: "Source code",
          href: course.githubUrl ?? "#",
        }}
        tags={course.tags}
      />

      {/* ── Course stats ──────────────────────────────────────────────────── */}
      <ConceptGrid columns={4}>
        <ConceptCard
          title={`${course.parts.length} Lessons`}
          description="From introduction to advanced security concepts."
          icon="📚"
          variant="primary"
          tag="Content"
        />
        <ConceptCard
          title={course.totalDuration}
          description="Focused, no-fluff video lessons."
          icon="⏱"
          variant="accent"
          tag="Duration"
        />
        <ConceptCard
          title="6 Frameworks"
          description="Vertex AI, ADK, LangGraph, BeeAI, MSFT AF, Agent Stack."
          icon="🔧"
          variant="success"
          tag="Coverage"
        />
        <ConceptCard
          title="Open Source"
          description="All code is on GitHub with MIT license."
          icon="🔓"
          variant="default"
          tag="License"
        />
      </ConceptGrid>

      {/* ── What you'll learn ─────────────────────────────────────────────── */}
      <SectionDivider label="What You'll Learn" />

      <SectionHeading
        eyebrow="Course Curriculum"
        title="16 lessons, zero fluff"
        subtitle="Each lesson is focused and builds on the previous one — from first principles to production-ready multi-agent systems."
      />

      {/* Lesson list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--tf-space-2)",
          marginTop: "var(--tf-space-2)",
        }}
      >
        {course.parts.map((part, i) => (
          <a
            key={part.slug}
            href={`/tutorials/a2a-agent-protocol/${part.slug}/`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--tf-space-4)",
              padding: "var(--tf-space-4) var(--tf-space-5)",
              borderRadius: "var(--tf-radius-xl)",
              border: "1px solid var(--tf-border-subtle)",
              background: "var(--tf-bg-surface)",
              textDecoration: "none",
              color: "inherit",
              transition: "border-color 0.15s, background 0.15s",
            }}
          >
            {/* Step number */}
            <span
              style={{
                flexShrink: 0,
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid var(--tf-border-default)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--tf-font-mono)",
                fontSize: "var(--tf-text-xs)",
                fontWeight: 700,
                color: "var(--tf-text-muted)",
              }}
            >
              {i + 1}
            </span>

            {/* Type icon */}
            <span
              style={{
                flexShrink: 0,
                fontSize: 20,
                lineHeight: 1,
              }}
            >
              {TYPE_ICON[part.type] ?? "▶"}
            </span>

            {/* Title + description */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "var(--tf-text-sm)",
                  color: "var(--tf-text-primary)",
                }}
              >
                {part.title}
              </p>
              {part.description && (
                <p
                  style={{
                    margin: "2px 0 0",
                    fontSize: "var(--tf-text-xs)",
                    color: "var(--tf-text-muted)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {part.description}
                </p>
              )}
            </div>

            {/* Type badge + duration */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "var(--tf-space-2)",
              }}
            >
              <PartTypeBadge
                type={part.type}
                duration={part.duration}
                size="sm"
              />
            </div>

            {/* Arrow */}
            <span
              style={{
                flexShrink: 0,
                color: "var(--tf-text-muted)",
                fontSize: "var(--tf-text-sm)",
              }}
            >
              →
            </span>
          </a>
        ))}
      </div>

      {/* ── Prerequisites ─────────────────────────────────────────────────── */}
      <SectionDivider label="Prerequisites" />

      <KeyPoint variant="info" title="What you need before starting">
        Basic Python (3.11+), familiarity with REST APIs, and a Google Cloud
        account with Vertex AI enabled. No prior agent framework experience
        required.
      </KeyPoint>

      {/* ── Share ─────────────────────────────────────────────────────────── */}
      <SectionDivider variant="gradient" />

      <ShareButtons
        title="A2A: The Agent2Agent Protocol — Full Course"
        description="Learn to build multi-agent AI systems with Google's open A2A protocol."
        hashtags={["A2A", "AIAgents", "MultiAgent", "python"]}
        platforms={["twitter", "linkedin", "email"]}
      />
    </TutorialLayout>
  );
}
