import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  ConceptCard,
  ConceptGrid,
  Paragraph,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import { SITE_TOPIC, ALL_COURSES } from "@/data/courses";
import { InstructorDetailCard } from "./components/InstructorDetailCard";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `${SITE_TOPIC.topicName} | LocalM\u2122 Tuts`,
  description: SITE_TOPIC.description,
  openGraph: {
    title: `${SITE_TOPIC.topicName} Tutorials`,
    description: SITE_TOPIC.description,
    type: "website",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function TopicHomePage() {
  const totalLessons = ALL_COURSES.reduce((sum, c) => sum + c.parts.length, 0);

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`${ALL_COURSES.length} Course${ALL_COURSES.length > 1 ? "s" : ""} · ${totalLessons} Lessons`}
        headline={`**${SITE_TOPIC.topicName}** Tutorials`}
        subheading={SITE_TOPIC.tagline}
        primaryAction={{
          label: "Browse courses ↓",
          href: "#courses",
        }}
        tags={SITE_TOPIC.tags}
      />

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <SectionDivider label="About" />

      <Paragraph>{SITE_TOPIC.description}</Paragraph>

      {/* ── Courses ───────────────────────────────────────────────────────── */}
      <span
        id="courses"
        style={{ display: "block", height: 0, margin: 0, padding: 0 }}
      />
      <SectionDivider label="Courses" />

      <ConceptGrid columns={2}>
        {ALL_COURSES.map((course) => (
          <a
            key={course.slug}
            href={`/${course.slug}/`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ConceptCard
              icon={course.icon ?? "📚"}
              title={course.title}
              description={`${course.parts.length} lessons · ${course.totalDuration} · ${(course.difficulty ?? "beginner").charAt(0).toUpperCase() + (course.difficulty ?? "beginner").slice(1)} — ${course.description}`}
            />
          </a>
        ))}
      </ConceptGrid>

      {/* ── Instructor ────────────────────────────────────────────────────── */}
      <SectionDivider label="Instructor" />

      <InstructorDetailCard
        name="Nilay Parikh"
        imageSrc="/brand/nilay_parikh.jpeg"
        role="Founder · LocalM · ErgoSum"
        bio={
          <>
            Technologist with 20+ years of engineering experience and an ML/AI
            practitioner since 2010. Founder of{" "}
            <a
              href="https://ergosum.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--tf-color-primary)", fontWeight: 600 }}
            >
              ErgoSum
            </a>{" "}
            (quantitative &amp; equity research) and{" "}
            <a
              href="https://localm.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--tf-color-primary)", fontWeight: 600 }}
            >
              LocalM
            </a>{" "}
            (AI-assisted SDLC). Currently focused on AI Platform Engineering,
            Agentic AI, and Context Engineering.
          </>
        }
        socials={{
          twitter: BRAND.socials.twitter,
          twitterHandle: BRAND.socials.twitterHandle,
          linkedin: BRAND.socials.linkedin,
          youtube: BRAND.socials.youtube,
          github: BRAND.socials.github,
        }}
      />
    </TutorialLayout>
  );
}
