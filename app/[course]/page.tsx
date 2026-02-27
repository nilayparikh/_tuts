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
import { ALL_COURSE_SLUGS, findCourse } from "@/data/courses";
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

  const ov = course.overview;

  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: `/${slug}/` }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
      mainStyle={{ gap: "var(--tf-space-4)" }}
    >
      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="tf-breadcrumb">
        <ol>
          <li>
            <a href="/">Courses</a>
          </li>
          <li aria-hidden="true" className="tf-breadcrumb-sep">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </li>
          <li aria-current="page">{course.title}</li>
        </ol>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <HeroSection
        eyebrow={`Short Course · ${course.parts.length} Lessons · ${course.totalDuration}`}
        headline={formatHeadline(course.title)}
        subheading={ov?.heroSubheading ?? course.description}
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

      {/* ── Difficulty ────────────────────────────────────────────────────── */}
      <DifficultyBar difficulty={course.difficulty ?? "beginner"} />

      {/* ── What You'll Learn ─────────────────────────────────────────────── */}
      {ov?.learnItems && ov.learnItems.length > 0 && (
        <>
          <SectionDivider label="What You'll Learn" />
          <StepList>
            {ov.learnItems.map((item) => (
              <ConceptCard
                key={item.title}
                compact
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </StepList>
        </>
      )}

      {/* ── About This Course ─────────────────────────────────────────────── */}
      <SectionDivider label="About This Course" />

      {ov?.aboutParagraphs && ov.aboutParagraphs.length > 0 ? (
        ov.aboutParagraphs.map((html, i) => (
          <p
            key={i}
            style={{
              margin: 0,
              fontFamily: "var(--tf-font-body)",
              fontSize: "var(--tf-text-md)",
              fontWeight: "var(--tf-font-normal)",
              color: "var(--tf-text-secondary)",
              lineHeight: "var(--tf-leading-relaxed)",
              letterSpacing: "var(--tf-tracking-normal)",
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))
      ) : (
        <Paragraph>{course.description}</Paragraph>
      )}

      {ov?.detailItems && ov.detailItems.length > 0 && (
        <AccordionList
          items={ov.detailItems.map((item) => ({
            title: item.title,
            content: item.description,
          }))}
          defaultOpenFirst
        />
      )}

      {/* ── Who Should Join? ──────────────────────────────────────────────── */}
      {(ov?.prerequisites ||
        (ov?.audienceCards && ov.audienceCards.length > 0)) && (
        <>
          <SectionDivider label="Who Should Join?" />

          {ov?.prerequisites && (
            <DescriptionBox
              title={ov.prerequisites.title}
              subtitle={ov.prerequisites.subtitle}
              tags={ov.prerequisites.tags}
            >
              {ov.prerequisites.description}
            </DescriptionBox>
          )}

          {ov?.audienceCards && ov.audienceCards.length > 0 && (
            <ConceptGrid columns={2}>
              {ov.audienceCards.map((card) => (
                <ConceptCard
                  key={card.title}
                  compact
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </ConceptGrid>
          )}
        </>
      )}

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

// ─── Helpers ──────────────────────────────────────────────────────────────

/** Format "A2A: The Agent2Agent Protocol" → "**A2A**: The Agent2Agent Protocol" */
function formatHeadline(title: string): string {
  if (title.includes(":")) {
    const [before, ...rest] = title.split(":");
    return `**${before}**: ${rest.join(":").trim()}`;
  }
  return title;
}

// ─── Difficulty bar ───────────────────────────────────────────────────────

const DIFFICULTY_LEVELS = ["beginner", "moderate", "expert"] as const;
type Difficulty = (typeof DIFFICULTY_LEVELS)[number];

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  beginner: "var(--tf-color-success)",
  moderate: "var(--tf-color-warning)",
  expert: "var(--tf-color-danger)",
};

function DifficultyBar({ difficulty }: { difficulty: Difficulty }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--tf-space-4)",
        padding: "var(--tf-space-3) var(--tf-space-5)",
        borderRadius: "var(--tf-radius-lg)",
        border: "1px solid var(--tf-border-subtle)",
        background: "var(--tf-bg-surface)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--tf-font-mono)",
          fontSize: "var(--tf-text-xs)",
          fontWeight: 600,
          color: "var(--tf-text-muted)",
          letterSpacing: "var(--tf-tracking-wide)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        Difficulty
      </span>
      <div style={{ display: "flex", gap: "var(--tf-space-3)", alignItems: "center" }}>
        {DIFFICULTY_LEVELS.map((level) => {
          const isActive = level === difficulty;
          return (
            <span
              key={level}
              style={{
                fontFamily: "var(--tf-font-mono)",
                fontSize: "var(--tf-text-xs)",
                fontWeight: isActive ? 700 : 500,
                letterSpacing: "var(--tf-tracking-wide)",
                textTransform: "uppercase",
                color: isActive
                  ? DIFFICULTY_COLORS[level]
                  : "var(--tf-text-muted)",
                opacity: isActive ? 1 : 0.35,
                transition: "opacity 0.2s ease",
              }}
            >
              {level}
            </span>
          );
        })}
      </div>
    </div>
  );
}
