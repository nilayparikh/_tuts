import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  SectionHeading,
  LessonList,
  DescriptionBox,
  Paragraph,
  StepList,
  ConceptCard,
  ConceptGrid,
  AccordionList,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";
import { InstructorDetailCard } from "@/app/components/InstructorDetailCard";
import {
  ALL_COURSE_SLUGS,
  findCourse,
} from "@/data/courses";
import type { CourseDefinition } from "@/data/courses";

// ─── Static params ────────────────────────────────────────────────────────

export function generateStaticParams(): Array<{ course: string }> {
  return ALL_COURSE_SLUGS.map((slug) => ({ course: slug }));
}

export const dynamicParams = false;

// ─── Dynamic metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course: slug } = await params;
  const course = findCourse(slug);
  if (!course) return {};

  return {
    title: `${course.title} | LocalM\u2122 Tuts`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "article",
      publishedTime: "2025-02-25",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function CourseOverviewPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course: slug } = await params;
  const course = findCourse(slug);
  if (!course) notFound();

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: `/${slug}/` }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Short Course · ${course.parts.length} Lessons · ${course.totalDuration}`}
        headline={formatHeadline(course.title)}
        subheading={course.description}
        primaryAction={{
          label: "Start learning →",
          href: `/${slug}/${course.parts[0].slug}/`,
        }}
        secondaryAction={
          course.githubUrl
            ? { label: "View on GitHub", href: course.githubUrl }
            : undefined
        }
        tags={course.tags}
      />

      {/* ── About This Course ─────────────────────────────────────────────── */}
      <SectionDivider label="About This Course" />

      <Paragraph>{course.description}</Paragraph>

      {/* ── Course Outline ────────────────────────────────────────────────── */}
      <SectionDivider label="Course Outline" />

      <SectionHeading
        title={`${course.parts.length} lessons · ${course.totalDuration}`}
        subtitle="Each lesson builds on the previous one — follow them in order for the best experience."
      />

      <LessonList parts={course.parts} basePath={`/${slug}`} />

      {/* ── Instructor ────────────────────────────────────────────────────── */}
      <SectionDivider label="Instructor" />

      <InstructorDetailCard
        name="Nilay Parikh"
        imageSrc="/brand/nilay_parikh.jpeg"
        role="Founder · LocalM · ErgoSum"
        bio={<>Technologist with 20+ years of engineering experience and an ML/AI practitioner since 2010. Founder of <a href="https://ergosum.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--tf-color-primary)', fontWeight: 600 }}>ErgoSum</a> (quantitative &amp; equity research) and <a href="https://localm.ai" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--tf-color-primary)', fontWeight: 600 }}>LocalM</a> (AI-assisted SDLC). Currently focused on AI Platform Engineering, Agentic AI, and Context Engineering.</>}
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

// ─── Helpers ──────────────────────────────────────────────────────────────

/** Format "A2A: The Agent2Agent Protocol" → "**A2A**: The Agent2Agent Protocol" */
function formatHeadline(title: string): string {
  if (title.includes(":")) {
    const [before, ...rest] = title.split(":");
    return `**${before}**: ${rest.join(":").trim()}`;
  }
  return title;
}
