import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionHeading,
  SectionDivider,
  ConceptCard,
  ConceptGrid,
  StepCard,
  StepList,
  CodeBlock,
  KeyPoint,
  YouTubeEmbed,
  ShareButtons,
  TutorialNav,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "A2A Agent-to-Agent Protocol",
  description:
    "Learn to build multi-agent systems with the Google A2A protocol. Covers agent cards, task delegation, and real-time streaming with Python and TypeScript.",
  openGraph: {
    title: "A2A Agent-to-Agent Protocol | LocalM Tutorials",
    description:
      "Build multi-agent AI systems from scratch using the A2A spec.",
    type: "article",
    publishedTime: "2025-02-25",
  },
};

const AGENT_CARD_CODE = `# agent_card.py
from a2a.server import A2AServer, AgentCard, Capability, Skill

card = AgentCard(
    name="Weather Agent",
    description="Provides current weather conditions for any city.",
    url="https://weather-agent.example.com",
    version="1.0.0",
    capabilities=Capability(streaming=True),
    skills=[
        Skill(
            id="get-weather",
            name="Get Weather",
            description="Returns current conditions for a given city.",
            inputModes=["text/plain"],
            outputModes=["text/plain", "application/json"],
        )
    ],
)`;

const TASK_HANDLER_CODE = `# handlers.py
from a2a.server import TaskContext, TaskResult, TaskStatus

async def handle_weather_task(ctx: TaskContext) -> TaskResult:
    city = ctx.message.parts[0].text
    
    # Your business logic here
    weather = await fetch_weather(city)
    
    return TaskResult(
        status=TaskStatus.completed,
        message={
            "role": "agent",
            "parts": [{"type": "text", "text": f"Weather in {city}: {weather}"}],
        },
    )`;

const CLIENT_CODE = `// client.ts
import { A2AClient } from '@google/a2a-sdk';

const client = new A2AClient('https://weather-agent.example.com');

// Discover agent capabilities
const card = await client.getAgentCard();
console.log('Skills:', card.skills.map(s => s.name));

// Send a task
const task = await client.sendTask({
  message: {
    role: 'user',
    parts: [{ type: 'text', text: 'What is the weather in London?' }],
  },
});

console.log(task.result.message.parts[0].text);
// → Weather in London: 12°C, partly cloudy`;

const STREAMING_CODE = `// streaming.ts
import { A2AClient } from '@google/a2a-sdk';

const client = new A2AClient('https://weather-agent.example.com');

// Stream partial responses as the agent thinks
for await (const update of client.streamTask({
  message: { role: 'user', parts: [{ type: 'text', text: 'Analyse London weather trends' }] },
})) {
  if (update.status === 'working') {
    process.stdout.write(update.artifact?.parts[0]?.text ?? '');
  }
}`;

export default function A2ATutorialPage() {
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
        eyebrow="Tutorial Series · Episode 1"
        headline="**A2A** Agent-to-Agent Protocol"
        subheading="Build multi-agent AI systems that discover each other, delegate tasks, and stream responses — using Google's open A2A specification."
        primaryAction={{ label: "Jump to code →", href: "#implementation" }}
        secondaryAction={{
          label: "Source code",
          href: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
        }}
        tags={[
          "A2A",
          "AI Agents",
          "Python",
          "TypeScript",
          "Streaming",
          "Open Source",
        ]}
      />

      {/* ── Video ─────────────────────────────────────────────────────────── */}
      <YouTubeEmbed
        videoId="placeholder-video-id"
        title="A2A Agent-to-Agent Protocol — Full Tutorial"
        caption="Watch the complete tutorial — 45 minutes from zero to multi-agent system"
        lazyLoad
      />

      {/* ── Concepts ──────────────────────────────────────────────────────── */}
      <SectionDivider label="Core Concepts" />

      <SectionHeading
        eyebrow="Before We Code"
        title="What is the A2A Protocol?"
        subtitle="A2A (Agent-to-Agent) is an open protocol by Google that lets AI agents discover each other and delegate work across organisational boundaries."
      />

      <ConceptGrid columns={2}>
        <ConceptCard
          title="Agent Card"
          description="A JSON document describing what an agent can do — its name, endpoint URL, available skills, and supported streaming capabilities."
          icon="🃏"
          variant="primary"
          tag="Discovery"
        />
        <ConceptCard
          title="Task"
          description="A unit of work passed from one agent to another. Contains a message with user intent; the receiving agent executes and returns a result."
          icon="📋"
          variant="accent"
          tag="Execution"
        />
        <ConceptCard
          title="Skill"
          description="A named capability exposed by an agent. Skills define input/output modes and descriptions that help orchestrators pick the right agent."
          icon="🔧"
          variant="success"
          tag="Capability"
        />
        <ConceptCard
          title="Streaming (SSE)"
          description="Agents can emit partial results in real time via Server-Sent Events. Ideal for long-running tasks like document analysis."
          icon="⚡"
          variant="default"
          tag="Transport"
        />
      </ConceptGrid>

      <KeyPoint variant="info" title="Why A2A?">
        Unlike tool-calling within a single model, A2A lets agents run on
        completely separate servers, written in any language, and still
        collaborate — as long as they speak the A2A spec.
      </KeyPoint>

      {/* ── Implementation ────────────────────────────────────────────────── */}
      <SectionDivider label="Implementation" />

      <SectionHeading
        eyebrow="Step by Step"
        title="Build your first A2A agent"
        subtitle="We'll build a Weather Agent in Python, then call it from a TypeScript client."
      />

      <StepList>
        <StepCard
          step={1}
          title="Install the A2A SDK"
          description="Add the SDK to your Python project. A TypeScript SDK is also available."
          code="pip install a2a-sdk fastapi uvicorn"
          codeLanguage="bash"
          note="Python 3.11+ required. Use a virtual environment."
        />

        <StepCard
          step={2}
          title="Define your Agent Card"
          description="The agent card is the source of truth — it tells the world what your agent can do and where to find it."
        />
      </StepList>

      <CodeBlock
        code={AGENT_CARD_CODE}
        language="python"
        filename="agent_card.py"
        showLineNumbers
        highlightLines={[3, 4, 5, 6, 7]}
      />

      <StepList>
        <StepCard
          step={3}
          title="Implement the task handler"
          description="Write the function that receives incoming tasks and returns results. This is your agent's brain."
        />
      </StepList>

      <CodeBlock
        code={TASK_HANDLER_CODE}
        language="python"
        filename="handlers.py"
        showLineNumbers
      />

      <KeyPoint variant="tip" title="Async all the way">
        A2A handlers are async by default. Use <code>await</code> for all I/O —
        HTTP calls, DB queries, model inference — to keep your agent responsive
        under load.
      </KeyPoint>

      <StepList>
        <StepCard
          step={4}
          title="Cal the agent from a TypeScript client"
          description="The A2A TypeScript SDK auto-discovers skills from the agent card and provides a type-safe task API."
        />
      </StepList>

      <CodeBlock
        code={CLIENT_CODE}
        language="typescript"
        filename="client.ts"
        showLineNumbers
      />

      <StepList>
        <StepCard
          step={5}
          title="Enable streaming"
          description="For long-running tasks, stream partial results using the async iterator API."
          completed
        />
      </StepList>

      <CodeBlock
        code={STREAMING_CODE}
        language="typescript"
        filename="streaming.ts"
        showLineNumbers
      />

      {/* ── Architecture diagram ──────────────────────────────────────────── */}
      <SectionDivider label="Architecture" />

      <SectionHeading eyebrow="Diagram" title="How the pieces fit together" />

      <ConceptGrid columns={3}>
        <ConceptCard
          title="1. Discover"
          description="Client fetches /.well-known/agent.json to get the Agent Card."
          icon="🔍"
          variant="primary"
          tag="Step 1"
        />
        <ConceptCard
          title="2. Delegate"
          description="Client POSTs a task to /tasks/send with the user message."
          icon="📤"
          variant="accent"
          tag="Step 2"
        />
        <ConceptCard
          title="3. Respond"
          description="Agent executes and returns result — or streams updates via SSE."
          icon="📥"
          variant="success"
          tag="Step 3"
        />
      </ConceptGrid>

      <KeyPoint variant="warning" title="Security reminder">
        A2A agents are network-accessible. Always add authentication (API keys
        or OAuth 2.0) before deploying to production. The spec supports{" "}
        <a
          href="https://google.github.io/A2A/specification"
          target="_blank"
          rel="noopener noreferrer"
        >
          securitySchemes
        </a>{" "}
        in the agent card.
      </KeyPoint>

      {/* ── Share + nav ───────────────────────────────────────────────────── */}
      <SectionDivider variant="gradient" />

      <ShareButtons
        title="A2A Agent-to-Agent Protocol Tutorial"
        description="Build multi-agent AI systems from scratch with the Google A2A protocol."
        hashtags={["A2A", "AIAgents", "tutorial", "python"]}
        platforms={["twitter", "linkedin", "email"]}
      />

      <TutorialNav
        prev={{
          label: "All Tutorials",
          href: "/tutorials/",
          description: "Browse the full library",
        }}
        next={{
          label: "Agent Cards Deep Dive",
          href: "/tutorials/a2a-agent-protocol/agent-cards/",
          description: "Capabilities, skills, and discovery",
        }}
      />
    </TutorialLayout>
  );
}
