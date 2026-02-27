import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  Paragraph,
  ShareButtons,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import { SITE_TOPIC, ALL_COURSES } from "@/data/courses";
import { CourseGrid } from "./components/CourseGrid";
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
          label: "Browse courses",
          href: "#courses",
        }}
        tags={SITE_TOPIC.tags}
      />

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <SectionDivider label="About" />

      <Paragraph>{SITE_TOPIC.description}</Paragraph>

      {/* ── Courses (filterable) ──────────────────────────────────────────── */}
      <span
        id="courses"
        style={{ display: "block", height: 0, margin: 0, padding: 0 }}
      />
      <SectionHeading eyebrow="Catalog" title="Courses" />

      <CourseGrid courses={ALL_COURSES} />

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

      {/* ── Share ─────────────────────────────────────────────────────────── */}
      <ShareButtons
        title={`${SITE_TOPIC.topicName} Tutorials`}
        description={SITE_TOPIC.tagline}
        hashtags={["AgenticAI", "AI", "Tutorials", "LocalM"]}
      />
    </TutorialLayout>
  );
}
