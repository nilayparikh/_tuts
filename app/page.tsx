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
  LessonList,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import { COURSE } from "@/data/course";

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
      maxWidth="narrow"
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

      {/* ── Course stats ──────────────────────────────────────────────────── */}
      <ConceptGrid columns={4}>
        <ConceptCard
          title={`${COURSE.parts.length} Lessons`}
          description="From introduction to advanced security concepts."
          icon="📚"
          variant="primary"
          tag="Content"
        />
        <ConceptCard
          title={COURSE.totalDuration}
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

      {/* ── Lesson List ───────────────────────────────────────────────────── */}
      <SectionDivider label="What You'll Learn" />

      <SectionHeading
        eyebrow="Course Curriculum"
        title={`${COURSE.parts.length} lessons, zero fluff`}
        subtitle="Each lesson is focused and builds on the previous one — from first principles to production-ready multi-agent systems."
      />

      <LessonList parts={COURSE.parts} basePath="" />

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
        title={`${COURSE.title} — Full Course`}
        description={COURSE.description}
        hashtags={["A2A", "AIAgents", "MultiAgent", "python"]}
        platforms={["twitter", "linkedin", "email"]}
      />
    </TutorialLayout>
  );
}
