import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CoursePlayerLayout,
  PartTypeBadge,
  QuizBlock,
  ArticleBlock,
  PodcastEmbed,
  SlideshowEmbed,
  YouTubeEmbed,
  KeyPoint,
  SectionDivider,
  CodeBlock,
  TutorialNav,
  ConceptCard,
  ConceptGrid,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import {
  A2A_COURSE,
  A2A_PART_SLUGS,
  findPart,
  getAdjacentParts,
} from "@/data/courses/a2a-agent-protocol";

// ─── Static params (for output: 'export') ────────────────────────────────

export function generateStaticParams(): Array<{ part: string }> {
  return A2A_PART_SLUGS.map((slug) => ({ part: slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ part: string }>;
}): Promise<Metadata> {
  const { part: slug } = await params;
  const part = findPart(slug);
  if (!part) return {};

  return {
    title: `${part.title} | ${A2A_COURSE.title} | LocalM Tutorials`,
    description: part.description ?? A2A_COURSE.description,
    openGraph: {
      title: `${part.title} · ${A2A_COURSE.title}`,
      description: part.description ?? A2A_COURSE.description,
      type: "article",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function CoursePartPage({
  params,
}: {
  params: Promise<{ part: string }>;
}) {
  const { part: slug } = await params;
  const part = findPart(slug);
  if (!part) notFound();

  const { prev, next } = getAdjacentParts(slug);

  const sidebarProps = {
    courseTitle: A2A_COURSE.title,
    parts: A2A_COURSE.parts,
    currentSlug: slug,
    basePath: "/tutorials/a2a-agent-protocol",
    totalDuration: A2A_COURSE.totalDuration,
  };

  return (
    <CoursePlayerLayout
      header={{
        ...SITE_CONFIG.header,
        currentPath: `/tutorials/a2a-agent-protocol/${slug}/`,
      }}
      footer={SITE_CONFIG.footer}
      sidebar={sidebarProps}
      showFooter={false}
    >
      {/* ── Part header ─────────────────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--tf-space-3)",
          marginBottom: "var(--tf-space-8)",
        }}
      >
        <PartTypeBadge type={part.type} duration={part.duration} />

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--tf-font-display)",
            fontWeight: 800,
            fontSize: "var(--tf-text-3xl)",
            color: "var(--tf-text-primary)",
            lineHeight: "var(--tf-leading-snug)",
            letterSpacing: "var(--tf-tracking-tight)",
          }}
        >
          {part.title}
        </h1>

        {part.description && (
          <p
            style={{
              margin: 0,
              fontSize: "var(--tf-text-lg)",
              color: "var(--tf-text-secondary)",
              lineHeight: "var(--tf-leading-relaxed)",
              maxWidth: "60ch",
            }}
          >
            {part.description}
          </p>
        )}
      </div>

      {/* ── Content by type ─────────────────────────────────────────────── */}
      <PartContent part={part} />

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <SectionDivider />
      <TutorialNav
        prev={
          prev
            ? {
                label: prev.title,
                href: `/tutorials/a2a-agent-protocol/${prev.slug}/`,
                description: prev.duration,
              }
            : {
                label: "Course Overview",
                href: "/tutorials/a2a-agent-protocol/",
                description: "All lessons",
              }
        }
        next={
          next
            ? {
                label: next.title,
                href: `/tutorials/a2a-agent-protocol/${next.slug}/`,
                description: next.duration,
              }
            : undefined
        }
      />
    </CoursePlayerLayout>
  );
}

// ─── Per-type content renderers ───────────────────────────────────────────

import type { CoursePartMeta } from "@/data/courses/a2a-agent-protocol";

function PartContent({ part }: { part: CoursePartMeta }) {
  switch (part.type) {
    case "video":
    case "video-code":
      return <VideoContent part={part} />;
    case "reading":
      return <ReadingContent part={part} />;
    case "quiz":
      return <QuizContent part={part} />;
    case "article":
      return <ArticleContent part={part} />;
    case "podcast":
      return <PodcastContent part={part} />;
    case "slideshow":
      return <SlideshowContent part={part} />;
    default:
      return <GenericContent part={part} />;
  }
}

// ─── Video / video-code ───────────────────────────────────────────────────

function VideoContent({ part }: { part: CoursePartMeta }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--tf-space-8)",
      }}
    >
      {/* Embed */}
      {part.videoId && (
        <YouTubeEmbed
          videoId={part.videoId}
          title={part.title}
          lazyLoad
          caption={`${part.title} · ${part.duration}`}
        />
      )}

      {/* Objectives */}
      {part.objectives && part.objectives.length > 0 && (
        <section>
          <SectionDivider label="What you'll learn" />
          <ConceptGrid columns={3}>
            {part.objectives.map((obj, i) => (
              <ConceptCard
                key={i}
                title={`${i + 1}.`}
                description={obj}
                variant={
                  (
                    [
                      "primary",
                      "accent",
                      "success",
                      "default",
                      "warning",
                      "danger",
                    ] as const
                  )[i % 6]
                }
              />
            ))}
          </ConceptGrid>
        </section>
      )}

      {/* Code link */}
      {part.codeUrl && (
        <KeyPoint variant="tip" title="Code for this lesson">
          Follow along with the complete source code on GitHub:{" "}
          <a
            href={part.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)", fontWeight: 600 }}
          >
            View on GitHub →
          </a>
        </KeyPoint>
      )}

      {/* Q&A */}
      {part.qa && part.qa.length > 0 && (
        <section>
          <SectionDivider label="Q &amp; A" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--tf-space-4)",
            }}
          >
            {part.qa.map((item, i) => (
              <QAItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// ─── Q&A item (accordion-style) ──────────────────────────────────────────

function QAItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <div
      style={{
        padding: "var(--tf-space-5)",
        borderRadius: "var(--tf-radius-xl)",
        border: "1px solid var(--tf-border-default)",
        background: "var(--tf-bg-surface)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--tf-space-3)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--tf-space-3)",
        }}
      >
        <span
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.65rem",
            fontWeight: 700,
            fontFamily: "var(--tf-font-mono)",
            color: "var(--tf-color-primary-light)",
            marginTop: 2,
          }}
        >
          Q
        </span>
        <p
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "var(--tf-text-md)",
            color: "var(--tf-text-primary)",
            lineHeight: "var(--tf-leading-snug)",
          }}
        >
          {question}
        </p>
      </div>

      <div
        style={{
          paddingLeft: "calc(24px + var(--tf-space-3))",
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--tf-space-3)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "var(--tf-text-sm)",
            color: "var(--tf-text-secondary)",
            lineHeight: "var(--tf-leading-relaxed)",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Reading ──────────────────────────────────────────────────────────────

function ReadingContent({ part }: { part: CoursePartMeta }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--tf-space-8)",
      }}
    >
      {/* Objectives as setup steps */}
      {part.objectives && part.objectives.length > 0 && (
        <section>
          <SectionDivider label="In this reading" />
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "var(--tf-space-3)",
            }}
          >
            {part.objectives.map((obj, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--tf-space-3)",
                  padding: "var(--tf-space-3) var(--tf-space-4)",
                  borderRadius: "var(--tf-radius-lg)",
                  background: "var(--tf-bg-surface)",
                  border: "1px solid var(--tf-border-subtle)",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    color: "var(--tf-color-success)",
                    marginTop: 2,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: "var(--tf-text-sm)",
                    color: "var(--tf-text-secondary)",
                    lineHeight: "var(--tf-leading-relaxed)",
                  }}
                >
                  {obj}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* External resource link */}
      {part.readingUrl && (
        <KeyPoint variant="info" title="External resource">
          This lesson links to an external resource.{" "}
          <a
            href={part.readingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)", fontWeight: 600 }}
          >
            Open resource →
          </a>
        </KeyPoint>
      )}

      {/* Code URL if also has code */}
      {part.codeUrl && (
        <CodeBlock
          code={`git clone ${part.codeUrl}\ncd $(basename ${part.codeUrl})\npip install -r requirements.txt`}
          language="bash"
          filename="Terminal"
        />
      )}
    </div>
  );
}

// ─── Quiz ─────────────────────────────────────────────────────────────────

function QuizContent({ part }: { part: CoursePartMeta }) {
  if (!part.quizQuestions || part.quizQuestions.length === 0) {
    return (
      <KeyPoint variant="warning" title="Quiz coming soon">
        Questions for this quiz are being prepared. Check back soon!
      </KeyPoint>
    );
  }

  return (
    <QuizBlock
      title={part.title}
      instructions="Choose the best answer for each question. You need 80% to pass."
      questions={part.quizQuestions}
    />
  );
}

// ─── Article ──────────────────────────────────────────────────────────────

function ArticleContent({ part }: { part: CoursePartMeta }) {
  return (
    <ArticleBlock
      title={part.title}
      subtitle={part.description}
      readingTime={part.duration}
    >
      {part.objectives && part.objectives.length > 0 && (
        <>
          <p>In this article, you will learn:</p>
          <ul>
            {part.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </>
      )}
      {part.readingUrl && (
        <p>
          Read the full article:{" "}
          <a href={part.readingUrl} target="_blank" rel="noopener noreferrer">
            {part.readingUrl}
          </a>
        </p>
      )}
    </ArticleBlock>
  );
}

// ─── Podcast ──────────────────────────────────────────────────────────────

function PodcastContent({ part }: { part: CoursePartMeta }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--tf-space-6)",
      }}
    >
      <PodcastEmbed
        title={part.title}
        description={part.description}
        duration={part.duration}
        showName={A2A_COURSE.title}
      />

      {part.objectives && part.objectives.length > 0 && (
        <section>
          <SectionDivider label="Episode highlights" />
          <ConceptGrid columns={2}>
            {part.objectives.map((obj, i) => (
              <ConceptCard
                key={i}
                title={`${i + 1}.`}
                description={obj}
                variant="default"
              />
            ))}
          </ConceptGrid>
        </section>
      )}
    </div>
  );
}

// ─── Slideshow ────────────────────────────────────────────────────────────

function SlideshowContent({ part }: { part: CoursePartMeta }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--tf-space-6)",
      }}
    >
      <SlideshowEmbed
        title={part.title}
        embedUrl="about:blank"
        provider="google-slides"
        description={part.description}
      />
      <KeyPoint variant="info" title="Slides embedded">
        Slides will appear above once the embed URL is configured.
      </KeyPoint>
    </div>
  );
}

// ─── Generic fallback ─────────────────────────────────────────────────────

function GenericContent({ part }: { part: CoursePartMeta }) {
  return (
    <KeyPoint variant="info" title="Content coming soon">
      This lesson ({part.type}) is being prepared.
    </KeyPoint>
  );
}
