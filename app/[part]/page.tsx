import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CoursePlayerLayout,
  LessonHeader,
  QABlock,
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
  CalloutBox,
  InfoBox,
  NoteBox,
  TipBox,
  SuccessBox,
  WarningBox,
  DangerBox,
  DescriptionBox,
  StepByStepGuide,
  MermaidDiagram,
  PollBlock,
  Paragraph,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";
import {
  COURSE,
  COURSE_SLUGS,
  findPart,
  getAdjacentParts,
} from "@/data/course";
import type { CoursePartMeta } from "@/data/course";

// ─── Static params (for output: 'export') ────────────────────────────────

export function generateStaticParams(): Array<{ part: string }> {
  return COURSE_SLUGS.map((slug) => ({ part: slug }));
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
    title: `${part.title} | ${COURSE.title}`,
    description: part.description ?? COURSE.description,
    openGraph: {
      title: `${part.title} · ${COURSE.title}`,
      description: part.description ?? COURSE.description,
      type: "article",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default async function LessonPage({
  params,
}: {
  params: Promise<{ part: string }>;
}) {
  const { part: slug } = await params;
  const part = findPart(slug);
  if (!part) notFound();

  const { prev, next } = getAdjacentParts(slug);

  return (
    <CoursePlayerLayout
      header={{
        ...SITE_CONFIG.header,
        currentPath: `/${slug}/`,
      }}
      footer={SITE_CONFIG.footer}
      sidebar={{
        courseTitle: COURSE.title,
        parts: COURSE.parts,
        currentSlug: slug,
        basePath: "",
        totalDuration: COURSE.totalDuration,
      }}
      sidebarWidth={288}
    >
      {/* ── Lesson header ──────────────────────────────────────────────── */}
      <LessonHeader
        type={part.type}
        duration={part.duration}
        title={part.title}
        description={part.description}
      />

      {/* ── Main content by type ───────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--tf-space-8)",
          maxWidth: "var(--tf-narrow-width)",
        }}
      >
        <PartContent part={part} />

        {/* ── Navigation ─────────────────────────────────────────────── */}
        <SectionDivider />
        <TutorialNav
          prev={
            prev
              ? {
                  label: prev.title,
                  href: `/${prev.slug}/`,
                  description: prev.duration,
                }
              : {
                  label: "Course Overview",
                  href: "/",
                  description: "All lessons",
                }
          }
          next={
            next
              ? {
                  label: next.title,
                  href: `/${next.slug}/`,
                  description: next.duration,
                }
              : undefined
          }
        />
      </div>
    </CoursePlayerLayout>
  );
}

// ─── Per-type content renderers ───────────────────────────────────────────

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
    <>
      {/* Video embed */}
      {part.videoId && (
        <YouTubeEmbed
          videoId={part.videoId}
          title={part.title}
          lazyLoad
          caption={`${part.title} · ${part.duration}`}
        />
      )}

      {/* ── Description Box (below video) ──────────────────────────────── */}
      <DescriptionBox
        title={part.title}
        subtitle={part.description}
        tags={part.tags}
        meta={part.duration}
      >
        {part.objectives && part.objectives.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--tf-space-3)",
            }}
          >
            <Paragraph lead>
              In this lesson you will learn the following concepts and gain
              hands-on experience building real components.
            </Paragraph>
            <ul
              style={{
                margin: 0,
                paddingLeft: "var(--tf-space-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--tf-space-2)",
              }}
            >
              {part.objectives.map((obj, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "var(--tf-text-sm)",
                    color: "var(--tf-text-secondary)",
                    lineHeight: "var(--tf-leading-relaxed)",
                  }}
                >
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}
      </DescriptionBox>

      {/* ── Callout Boxes Demo ──────────────────────────────────────────── */}
      <InfoBox title="Prerequisites">
        Make sure you have Python 3.11+ installed and a Google Cloud account
        with Vertex AI enabled before starting this lesson.
      </InfoBox>

      {part.type === "video-code" && (
        <NoteBox title="Follow along">
          This lesson includes code examples. Open your terminal and follow each
          step as shown in the video.
        </NoteBox>
      )}

      {/* ── Step-by-step guide ─────────────────────────────────────────── */}
      {part.codeUrl && (
        <StepByStepGuide
          title="Setup Instructions"
          steps={[
            {
              title: "Clone the repository",
              description:
                "Clone the course repository to your local machine to follow along with the code examples.",
              code: `git clone ${part.codeUrl}\ncd $(basename ${part.codeUrl})`,
              codeLanguage: "bash",
            },
            {
              title: "Create a virtual environment",
              description:
                "Create an isolated Python environment for the project dependencies.",
              code: "python -m venv .venv\nsource .venv/bin/activate  # or .venv\\Scripts\\activate on Windows",
              codeLanguage: "bash",
            },
            {
              title: "Install dependencies",
              description:
                "Install all required packages from the requirements file.",
              code: "pip install -r requirements.txt",
              codeLanguage: "bash",
              note: "This may take a few minutes depending on your internet connection.",
            },
            {
              title: "Run the agent",
              description:
                "Start the A2A server and verify it is responding to requests.",
              code: "python main.py",
              codeLanguage: "bash",
            },
          ]}
        />
      )}

      {/* ── Diagram example ────────────────────────────────────────────── */}
      {part.slug === "a2a-architecture" && (
        <MermaidDiagram
          chart={`graph LR
    A[Client] -->|sendTask| B[A2A Server]
    B -->|Agent Card| A
    B -->|SSE Stream| A
    B --> C[Agent Logic]
    C --> D[Tools / MCP]
    C --> E[LLM Provider]
    style A fill:#6366f1,stroke:#818cf8,color:#fff
    style B fill:#14b8a6,stroke:#5eead4,color:#fff
    style C fill:#1f222a,stroke:#8892a8,color:#e2e6f0
    style D fill:#f59e0b,stroke:#fbbf24,color:#000
    style E fill:#f59e0b,stroke:#fbbf24,color:#000`}
          caption="Figure: A2A Protocol communication flow — Client ↔ Server ↔ Agent Logic"
          alt="A2A Protocol architecture diagram showing client, server, agent logic, tools, and LLM provider"
        />
      )}

      {/* ── Poll ────────────────────────────────────────────────────────── */}
      {part.slug === "why-a2a" && (
        <PollBlock
          question="Which agent framework are you most interested in using with A2A?"
          options={[
            { id: "adk", text: "Google ADK" },
            { id: "langgraph", text: "LangGraph" },
            { id: "beeai", text: "BeeAI Framework" },
            { id: "msft", text: "Microsoft Agent Framework" },
            { id: "custom", text: "Custom implementation" },
          ]}
          simulatedVotes={{
            adk: 42,
            langgraph: 38,
            beeai: 15,
            msft: 22,
            custom: 8,
          }}
        />
      )}

      {/* ── Success callout for code lessons ───────────────────────────── */}
      {part.codeUrl && (
        <SuccessBox title="Source Code">
          The complete source code for this lesson is available on GitHub.{" "}
          <a
            href={part.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-success)", fontWeight: 600 }}
          >
            View on GitHub →
          </a>
        </SuccessBox>
      )}

      {/* ── Q&A ─────────────────────────────────────────────────────────── */}
      {part.qa && part.qa.length > 0 && (
        <section>
          <SectionDivider label="Q & A" />
          <QABlock items={part.qa} />
        </section>
      )}

      {/* ── Warning callout example ────────────────────────────────────── */}
      {part.slug === "advanced-concepts" && (
        <WarningBox title="Security Notice">
          When adding OAuth 2.0 to your Agent Card, never commit client secrets
          to your repository. Use environment variables or a secret manager.
        </WarningBox>
      )}

      {/* ── Danger callout example ─────────────────────────────────────── */}
      {part.slug === "agent-stack" && (
        <DangerBox title="Production Deployment">
          Ensure your A2A agents are behind a reverse proxy with rate limiting
          before exposing them to the internet. Unprotected agents can be
          abused.
        </DangerBox>
      )}
    </>
  );
}

// ─── Reading ──────────────────────────────────────────────────────────────

function ReadingContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      {/* Objectives */}
      {part.objectives && part.objectives.length > 0 && (
        <section>
          <SectionDivider label="In this reading" />
          <ConceptGrid columns={2}>
            {part.objectives.map((obj, i) => (
              <ConceptCard
                key={i}
                title={`Step ${i + 1}`}
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

      {/* External resource */}
      {part.readingUrl && (
        <InfoBox title="External resource">
          This lesson links to an external resource.{" "}
          <a
            href={part.readingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)", fontWeight: 600 }}
          >
            Open resource →
          </a>
        </InfoBox>
      )}

      {/* Step-by-step setup */}
      {part.codeUrl && (
        <StepByStepGuide
          title="Getting Started"
          steps={[
            {
              title: "Clone the repository",
              description: "Get the source code for this lesson.",
              code: `git clone ${part.codeUrl}`,
              codeLanguage: "bash",
            },
            {
              title: "Navigate to the project",
              description: "Open the folder in your terminal.",
              code: `cd $(basename ${part.codeUrl})`,
              codeLanguage: "bash",
            },
            {
              title: "Install dependencies",
              description: "Install all required packages.",
              code: "pip install -r requirements.txt",
              codeLanguage: "bash",
            },
          ]}
        />
      )}
    </>
  );
}

// ─── Quiz ─────────────────────────────────────────────────────────────────

function QuizContent({ part }: { part: CoursePartMeta }) {
  if (!part.quizQuestions || part.quizQuestions.length === 0) {
    return (
      <CalloutBox variant="warning" title="Quiz Coming Soon">
        Questions for this quiz are being prepared. Check back soon!
      </CalloutBox>
    );
  }

  return (
    <>
      <NoteBox title="Instructions">
        Choose the best answer for each question. You need 80% to pass. Take
        your time — there is no timer.
      </NoteBox>

      <QuizBlock
        title={part.title}
        instructions="Choose the best answer for each question. You need 80% to pass."
        questions={part.quizQuestions}
      />
    </>
  );
}

// ─── Article ──────────────────────────────────────────────────────────────

function ArticleContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      <ArticleBlock
        title={part.title}
        subtitle={part.description}
        readingTime={part.duration}
      >
        {part.objectives && part.objectives.length > 0 && (
          <>
            <Paragraph lead>In this article, you will learn:</Paragraph>
            <ul
              style={{
                margin: 0,
                paddingLeft: "var(--tf-space-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--tf-space-2)",
              }}
            >
              {part.objectives.map((obj, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "var(--tf-text-sm)",
                    color: "var(--tf-text-secondary)",
                    lineHeight: "var(--tf-leading-relaxed)",
                  }}
                >
                  {obj}
                </li>
              ))}
            </ul>
          </>
        )}
        {part.readingUrl && (
          <Paragraph>
            Read the full article:{" "}
            <a href={part.readingUrl} target="_blank" rel="noopener noreferrer">
              {part.readingUrl}
            </a>
          </Paragraph>
        )}
      </ArticleBlock>

      <TipBox title="Pro Tip">
        Bookmark this article for reference — you will need these concepts in
        later lessons.
      </TipBox>
    </>
  );
}

// ─── Podcast ──────────────────────────────────────────────────────────────

function PodcastContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      <PodcastEmbed
        title={part.title}
        description={part.description}
        duration={part.duration}
        showName={COURSE.title}
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

      {part.qa && part.qa.length > 0 && (
        <section>
          <SectionDivider label="Q & A" />
          <QABlock items={part.qa} />
        </section>
      )}
    </>
  );
}

// ─── Slideshow ────────────────────────────────────────────────────────────

function SlideshowContent({ part }: { part: CoursePartMeta }) {
  return (
    <>
      <SlideshowEmbed
        title={part.title}
        embedUrl="about:blank"
        provider="google-slides"
        description={part.description}
      />
      <InfoBox title="Slides embedded">
        Slides will appear above once the embed URL is configured.
      </InfoBox>
    </>
  );
}

// ─── Generic fallback ─────────────────────────────────────────────────────

function GenericContent({ part }: { part: CoursePartMeta }) {
  return (
    <CalloutBox variant="info" title="Content coming soon">
      This lesson ({part.type}) is being prepared.
    </CalloutBox>
  );
}
