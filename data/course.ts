/**
 * Course Data — A2A: The Agent2Agent Protocol
 *
 * This is the SINGLE course definition for this tutorial site.
 * The entire site renders this one course: overview + per-part pages.
 *
 * To create a new tutorial site, clone this template repo and replace
 * this file with your own course data.
 */

import type { CoursePart, PartType } from "@localm/tutorial-framework";

// ─── Extended part metadata ────────────────────────────────────────────────

export interface PartQA {
  question: string;
  answer: string;
}

export interface PartQuizQuestion {
  id: string;
  question: string;
  options: Array<{ id: string; text: string }>;
  correctOptionId: string;
  explanation?: string;
}

export interface CoursePartMeta extends CoursePart {
  /** YouTube video ID (type "video" | "video-code") */
  videoId?: string;
  /** Part description for the lesson hero */
  description?: string;
  /** Learning objectives */
  objectives?: string[];
  /** Q&A pairs shown after video */
  qa?: PartQA[];
  /** Quiz questions (type "quiz") */
  quizQuestions?: PartQuizQuestion[];
  /** GitHub code URL */
  codeUrl?: string;
  /** Reading / resource URL */
  readingUrl?: string;
  /** Tags for SEO */
  tags?: string[];
}

// ─── Course definition ────────────────────────────────────────────────────

export interface CourseDefinition {
  slug: string;
  title: string;
  description: string;
  totalDuration: string;
  tags: string[];
  githubUrl?: string;
  parts: CoursePartMeta[];
}

// ─── THE course ───────────────────────────────────────────────────────────

export const COURSE: CourseDefinition = {
  slug: "a2a-agent-protocol",
  title: "A2A: The Agent2Agent Protocol",
  description:
    "Learn to build multi-agent AI systems using Google's A2A protocol. Covers QA agents on Vertex AI, sequential chain agents, LangGraph, BeeAI, and deploying on Agent Stack.",
  totalDuration: "~70 mins",
  tags: ["A2A", "AI Agents", "Python", "LangGraph", "Google ADK", "BeeAI"],
  githubUrl: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
  parts: [
    // ── 1. Introduction ──────────────────────────────────────────────────
    {
      slug: "introduction",
      title: "Introduction",
      type: "video",
      duration: "4 mins",
      videoId: "placeholder-intro",
      description:
        "Get oriented to agentic systems and the need for inter-agent communication protocols.",
      objectives: [
        "Understand what agentic AI systems are",
        "Learn why agent-to-agent communication matters",
        "Preview what you will build in this course",
      ],
      tags: ["introduction", "overview"],
    },

    // ── 2. Why Agent2Agent? ──────────────────────────────────────────────
    {
      slug: "why-a2a",
      title: "Why Agent2Agent Protocol?",
      type: "video",
      duration: "4 mins",
      videoId: "placeholder-why-a2a",
      description:
        "Explore the motivation behind A2A — how it differs from MCP, tool-calling, and why interoperability matters.",
      objectives: [
        "Compare A2A to tool-calling and MCP",
        "Understand the interoperability problem A2A solves",
        "See real-world use cases",
      ],
      qa: [
        {
          question: "How does A2A differ from MCP (Model Context Protocol)?",
          answer:
            "MCP connects a single model to tools and data sources. A2A connects two or more autonomous agents — each potentially running different models — allowing them to discover each other and delegate tasks across organizational boundaries.",
        },
        {
          question: "Why can't agents just call each other's APIs directly?",
          answer:
            "They can, but without a common protocol you need custom integration for every pair of agents. A2A provides a standard discovery mechanism (Agent Card), task format, and streaming contract so any A2A-compliant agent can talk to any other.",
        },
      ],
      tags: ["overview", "motivation"],
    },

    // ── 3. Architecture ──────────────────────────────────────────────────
    {
      slug: "a2a-architecture",
      title: "A2A Architecture",
      type: "video",
      duration: "6 mins",
      videoId: "placeholder-architecture",
      description:
        "Dive into Agent Cards, Tasks, Skills, and the SSE streaming protocol that forms the A2A specification.",
      objectives: [
        "Understand the Agent Card discovery mechanism",
        "Learn the Task lifecycle (submitted → working → completed)",
        "Understand Server-Sent Events streaming in A2A",
        "Map the A2A spec to real HTTP endpoints",
      ],
      qa: [
        {
          question: "What is an Agent Card?",
          answer:
            "A JSON document served at /.well-known/agent.json describing the agent's name, URL, capabilities, and skills. It is the discovery document that lets other agents (or clients) understand what the agent can do.",
        },
        {
          question: "What is a Skill?",
          answer:
            "A named capability exposed by an agent. Skills define the ID, name, description, and supported input/output modes (e.g., text/plain, application/json). An agent card can expose multiple skills.",
        },
        {
          question: "How does streaming work in A2A?",
          answer:
            "The agent emits Server-Sent Events (SSE) over the /tasks/sendSubscribe endpoint. Each event carries a status update or partial artifact. The client iterates over the event stream until it receives a terminal status (completed, failed, cancelled).",
        },
      ],
      tags: ["architecture", "spec", "agent-card", "sse"],
    },

    // ── 4. Course Repos ──────────────────────────────────────────────────
    {
      slug: "course-repos",
      title: "Course Repos & Resources",
      type: "reading",
      duration: "1 min",
      description:
        "All repositories, notebooks, and reference links for this course.",
      readingUrl: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
      objectives: [
        "Bookmark the course GitHub repository",
        "Clone the starter code",
        "Set up your Python virtual environment",
      ],
      tags: ["resources", "setup"],
    },

    // ── 5. QA Agent on Vertex AI ─────────────────────────────────────────
    {
      slug: "qa-agent-vertex-ai",
      title: "Building a QA Agent with Claude on Vertex AI",
      type: "video-code",
      duration: "3 mins",
      videoId: "placeholder-qa-agent",
      description:
        "Build a Question-Answer agent powered by Claude (via Vertex AI) from scratch using Python.",
      objectives: [
        "Set up Claude on Vertex AI",
        "Build an async QA function",
        "Structure agent responses correctly",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/01-qa-agent",
      qa: [
        {
          question: "Why use Vertex AI instead of the Anthropic API directly?",
          answer:
            "Vertex AI provides enterprise-grade features like IAM authentication, audit logging, and usage quotas. It also allows you to switch models (Claude, Gemini, Llama) without changing your code's auth layer.",
        },
      ],
      tags: ["claude", "vertex-ai", "python", "qa"],
    },

    // ── 6. Wrapping as A2A Server ────────────────────────────────────────
    {
      slug: "wrapping-qa-a2a-server",
      title: "Wrapping the QA Agent into an A2A Server",
      type: "video-code",
      duration: "4 mins",
      videoId: "placeholder-wrapping",
      description:
        "Take the QA function and expose it as a fully compliant A2A server with an Agent Card and task handler.",
      objectives: [
        "Define an Agent Card for the QA agent",
        "Implement the A2A task handler",
        "Start the FastAPI-based A2A server",
        "Test with a simple HTTP client",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/02-a2a-server",
      tags: ["a2a-server", "fastapi", "python"],
    },

    // ── 7. A2A Client ────────────────────────────────────────────────────
    {
      slug: "a2a-client",
      title: "Calling an A2A Agent using an A2A Client",
      type: "video-code",
      duration: "3 mins",
      videoId: "placeholder-client",
      description:
        "Write a Python A2A client that discovers the QA agent's card and sends tasks.",
      objectives: [
        "Fetch and parse an Agent Card",
        "Send a task using the A2A client SDK",
        "Handle both sync and streaming responses",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/03-a2a-client",
      qa: [
        {
          question: "Can I use the TypeScript A2A SDK instead?",
          answer:
            "Yes. The TypeScript SDK (@google/a2a-sdk) provides the same getAgentCard() and sendTask() / streamTask() APIs. The protocol contract is language-agnostic.",
        },
      ],
      tags: ["client", "python", "sdk"],
    },

    // ── 8. Health Research Agent (ADK) ───────────────────────────────────
    {
      slug: "health-research-agent-adk",
      title: "Creating an A2A Health Research Agent using Google ADK",
      type: "video-code",
      duration: "2 mins",
      videoId: "placeholder-health-adk",
      description:
        "Use the Google Agent Development Kit (ADK) to build a health research agent and expose it via A2A.",
      objectives: [
        "Set up Google ADK",
        "Create a research agent with tool use",
        "Wrap the ADK agent as an A2A server",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/04-health-research-adk",
      tags: ["google-adk", "research-agent", "tools"],
    },

    // ── 9. Sequential Chain (ADK) ────────────────────────────────────────
    {
      slug: "sequential-chain-adk",
      title: "Creating an A2A Sequential Chain Agent with ADK",
      type: "video-code",
      duration: "2 mins",
      videoId: "placeholder-sequential",
      description:
        "Build a sequential chain of agents using ADK — one agent's output becomes the next agent's input.",
      objectives: [
        "Design a sequential agent chain",
        "Pass context between A2A calls",
        "Handle partial failures in a chain",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/05-sequential-chain",
      tags: ["sequential", "chain", "adk"],
    },

    // ── 10. Healthcare LangGraph + MCP ──────────────────────────────────
    {
      slug: "healthcare-langgraph-mcp",
      title:
        "Creating an A2A Healthcare Provider Agent using LangGraph and MCP",
      type: "video-code",
      duration: "6 mins",
      videoId: "placeholder-langgraph",
      description:
        "Combine LangGraph's stateful graph execution, MCP tool servers, and A2A to build a healthcare provider agent.",
      objectives: [
        "Build a LangGraph agent graph",
        "Connect MCP tool servers to the graph",
        "Expose the LangGraph agent via A2A",
        "Stream intermediate graph steps to the A2A client",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/06-healthcare-langgraph",
      qa: [
        {
          question: "Why combine LangGraph with A2A?",
          answer:
            "LangGraph excels at stateful, multi-step reasoning with checkpointing. Combining it with A2A lets other agents invoke your LangGraph workflow as a black-box A2A agent, getting progress updates via streaming without knowing the internal graph structure.",
        },
        {
          question: "What does MCP add here?",
          answer:
            "MCP tool servers provide structured, type-safe access to data sources (EHR systems, drug databases). The LangGraph agent calls MCP tools natively while A2A handles the external communication layer.",
        },
      ],
      tags: ["langgraph", "mcp", "healthcare", "advanced"],
    },

    // ── 11. Microsoft Agent Framework ───────────────────────────────────
    {
      slug: "microsoft-agent-framework",
      title: "Creating an A2A Client using Microsoft Agent Framework",
      type: "video-code",
      duration: "1 min",
      videoId: "placeholder-msft-af",
      description:
        "Use Microsoft's Agent Framework to build an A2A client that delegates tasks to A2A servers.",
      objectives: [
        "Install and configure Microsoft Agent Framework",
        "Build an A2A client in the Agent Framework",
        "Connect to existing A2A agents",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/07-msft-agent-framework",
      tags: ["microsoft", "agent-framework", "interop"],
    },

    // ── 12. BeeAI Multi-Agent ────────────────────────────────────────────
    {
      slug: "beeai-multi-agent",
      title: "Creating a Multi-Agent System using A2A with BeeAI Framework",
      type: "video-code",
      duration: "14 mins",
      videoId: "placeholder-beeai",
      description:
        "Build a full multi-agent system using IBM's BeeAI Framework — multiple specialized A2A agents coordinated by an orchestrator.",
      objectives: [
        "Set up BeeAI Framework",
        "Build specialized A2A agents (researcher, writer, reviewer)",
        "Create an orchestrator agent that delegates via A2A",
        "Handle parallel task execution across agents",
      ],
      codeUrl:
        "https://github.com/nilayparikh/a2a-agent2agent-protocol/tree/main/08-beeai-multiagent",
      qa: [
        {
          question: "What makes BeeAI different from LangGraph or ADK?",
          answer:
            "BeeAI (from IBM Research) focuses on transparent, auditable agent reasoning. It uses a ReAct-style loop with built-in memory and tool management, making it easier to trace why an agent made a decision.",
        },
        {
          question: "How does the orchestrator delegate to specialist agents?",
          answer:
            "The orchestrator is itself an A2A server and client. It receives a high-level task, decomposes it, then sends sub-tasks to specialist A2A agents. Results are aggregated and streamed back to the original caller.",
        },
      ],
      tags: ["beeai", "multi-agent", "orchestration", "ibm"],
    },

    // ── 13. Agent Stack ──────────────────────────────────────────────────
    {
      slug: "agent-stack",
      title: "Running A2A Agents on Agent Stack",
      type: "video",
      duration: "15 mins",
      videoId: "placeholder-agent-stack",
      description:
        "Deploy A2A agents to production using Agent Stack — a managed runtime for hosting, scaling, and monitoring A2A agents.",
      objectives: [
        "Understand Agent Stack architecture",
        "Deploy an A2A agent to Agent Stack",
        "Configure scaling and health checks",
        "Monitor agent activity via the dashboard",
      ],
      tags: ["deployment", "agent-stack", "production"],
    },

    // ── 14. Advanced Concepts ────────────────────────────────────────────
    {
      slug: "advanced-concepts",
      title: "Advanced A2A Concepts — Extensions and Security",
      type: "video",
      duration: "4 mins",
      videoId: "placeholder-advanced",
      description:
        "Explore A2A extensions, OAuth 2.0 security schemes, and multi-modal task support.",
      objectives: [
        "Add OAuth 2.0 securitySchemes to your Agent Card",
        "Use A2A extensions for custom capabilities",
        "Support image and file inputs/outputs",
      ],
      qa: [
        {
          question: "How do you add authentication to an A2A agent?",
          answer:
            "Add a securitySchemes block to your Agent Card (OpenAPI-style). Clients read this and attach credentials — Bearer tokens, API keys, or OAuth — to task requests. The server validates them before processing.",
        },
      ],
      tags: ["security", "oauth", "extensions", "advanced"],
    },

    // ── 15. Conclusion ───────────────────────────────────────────────────
    {
      slug: "conclusion",
      title: "Conclusion",
      type: "video",
      duration: "1 min",
      videoId: "placeholder-conclusion",
      description: "Wrap-up of what you've built and where to go next.",
      objectives: [
        "Recap the full A2A stack you've built",
        "Understand the A2A ecosystem roadmap",
        "Get directions for continued learning",
      ],
      tags: ["conclusion"],
    },

    // ── 16. Quiz ─────────────────────────────────────────────────────────
    {
      slug: "quiz",
      title: "Quiz",
      type: "quiz",
      duration: "10 mins",
      description:
        "Test your understanding of the A2A protocol and multi-agent systems.",
      quizQuestions: [
        {
          id: "q1",
          question:
            "What is the purpose of the Agent Card in the A2A protocol?",
          options: [
            { id: "a", text: "To store the agent's conversation history" },
            {
              id: "b",
              text: "To describe the agent's capabilities, endpoint, and skills for discovery",
            },
            { id: "c", text: "To encrypt communication between agents" },
            {
              id: "d",
              text: "To define the agent's internal memory structure",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The Agent Card is a JSON discovery document served at /.well-known/agent.json. It describes the agent's name, URL, version, skills, and supported capabilities so other agents can discover and interact with it.",
        },
        {
          id: "q2",
          question:
            "Which HTTP mechanism does A2A use for streaming partial results?",
          options: [
            { id: "a", text: "WebSockets" },
            { id: "b", text: "Long polling" },
            { id: "c", text: "Server-Sent Events (SSE)" },
            { id: "d", text: "gRPC streaming" },
          ],
          correctOptionId: "c",
          explanation:
            "A2A uses Server-Sent Events (SSE) over the /tasks/sendSubscribe endpoint for streaming partial results. SSE is unidirectional (server → client), lightweight, and works over standard HTTP.",
        },
        {
          id: "q3",
          question: "What distinguishes A2A from MCP (Model Context Protocol)?",
          options: [
            { id: "a", text: "A2A uses JSON while MCP uses XML" },
            {
              id: "b",
              text: "MCP connects agents to tools/data; A2A connects autonomous agents to each other",
            },
            { id: "c", text: "A2A only works with Google models" },
            { id: "d", text: "MCP requires streaming; A2A does not" },
          ],
          correctOptionId: "b",
          explanation:
            "MCP (Model Context Protocol) is designed to connect a single AI model to tools and data sources. A2A is designed for agent-to-agent communication, letting autonomous agents (possibly built on different frameworks or models) discover each other and delegate tasks.",
        },
        {
          id: "q4",
          question:
            "Which framework was used to build the Healthcare Provider Agent in this course?",
          options: [
            { id: "a", text: "Google ADK only" },
            { id: "b", text: "BeeAI Framework" },
            { id: "c", text: "LangGraph combined with MCP" },
            { id: "d", text: "Microsoft Agent Framework" },
          ],
          correctOptionId: "c",
          explanation:
            "The Healthcare Provider Agent was built using LangGraph for stateful graph execution combined with MCP tool servers for structured data access. The whole system was then exposed via A2A.",
        },
        {
          id: "q5",
          question:
            "In A2A task execution, what does a 'working' status indicate?",
          options: [
            {
              id: "a",
              text: "The task has been received but not yet started",
            },
            {
              id: "b",
              text: "The agent is actively processing and may emit partial artifacts",
            },
            { id: "c", text: "The task completed successfully" },
            { id: "d", text: "The task failed and requires retry" },
          ],
          correctOptionId: "b",
          explanation:
            "A 'working' status means the agent has started processing the task and may emit streaming updates (partial artifacts). This is an intermediate state between 'submitted' and terminal states like 'completed' or 'failed'.",
        },
      ],
    },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────

/** Find a part by slug */
export function findPart(slug: string): CoursePartMeta | undefined {
  return COURSE.parts.find((p) => p.slug === slug);
}

/** Get prev/next parts for navigation */
export function getAdjacentParts(slug: string): {
  prev: CoursePartMeta | null;
  next: CoursePartMeta | null;
} {
  const idx = COURSE.parts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? COURSE.parts[idx - 1] : null,
    next: idx < COURSE.parts.length - 1 ? COURSE.parts[idx + 1] : null,
  };
}

/** All part slugs (for generateStaticParams) */
export const COURSE_SLUGS = COURSE.parts.map((p) => p.slug);
