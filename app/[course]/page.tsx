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
            /
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
      <DifficultyIndicator difficulty={course.difficulty ?? "beginner"} />

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

// ─── Difficulty indicator ──────────────────────────────────────────────────

const DIFFICULTY_LEVELS = ["beginner", "moderate", "expert"] as const;
type Difficulty = (typeof DIFFICULTY_LEVELS)[number];

const DIFFICULTY_META: Record<
  Difficulty,
  { color: string; bg: string; label: string }
> = {
  beginner: { color: "#66bb6a", bg: "rgba(102,187,106,0.12)", label: "Beginner" },
  moderate: { color: "#ffa726", bg: "rgba(255,167,38,0.12)", label: "Moderate" },
  expert: { color: "#ef5350", bg: "rgba(239,83,80,0.12)", label: "Expert" },
};

function DifficultyIndicator({ difficulty }: { difficulty: Difficulty }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: "var(--tf-radius-full)",
        border: "1px solid var(--tf-border-subtle)",
        background: "var(--tf-bg-elevated)",
        padding: "3px",
        gap: 0,
      }}
    >
      {DIFFICULTY_LEVELS.map((level) => {
        const isActive = level === difficulty;
        const meta = DIFFICULTY_META[level];
        return (
          <span
            key={level}
            style={{
              padding: "0.3rem 0.85rem",
              borderRadius: "var(--tf-radius-full)",
              fontFamily: "var(--tf-font-body)",
              fontSize: "var(--tf-text-xs)",
              fontWeight: isActive ? 600 : 400,
              letterSpacing: "0.03em",
              color: isActive ? meta.color : "var(--tf-text-muted)",
              background: isActive ? meta.bg : "transparent",
              opacity: isActive ? 1 : 0.4,
              transition: "all 0.2s ease",
              lineHeight: 1.4,
            }}
          >
            {meta.label}
          </span>
        );
      })}
    </div>
  );
}
