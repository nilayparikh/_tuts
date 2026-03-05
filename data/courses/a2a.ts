/**
 * Course: A2A — The Agent2Agent Protocol
 *
 * Slug: "a2a"  →  /a2a/, /a2a/introduction/, /a2a/why-a2a/, …
 *
 * 16 lessons + quiz. 6 framework integrations. 3 model providers.
 * GitHub Models Phi-4 (L05-07), Azure AI Foundry Kimi-K2-Thinking (L08-13),
 * GitHub Models openai/gpt-4o-mini (L14 capstone).
 */

import type { CourseDefinition } from "./types";

export const A2A_COURSE: CourseDefinition = {
  slug: "a2a",
  title: "A2A: The Agent2Agent Protocol",
  description:
    "Build multi-agent AI systems using the A2A protocol. Covers 6 frameworks (Microsoft Agent Framework, Google ADK, LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK) with local-first models.",
  totalDuration: "~130 mins",
  tags: [
    "A2A",
    "Agent2Agent",
    "AI Agents",
    "Multi-Agent Systems",
    "Python",
    "Microsoft Agent Framework",
    "Google ADK",
    "LangGraph",
    "CrewAI",
    "OpenAI Agents SDK",
    "Claude Agent SDK",
    "MCP",
  ],
  icon: "🔌",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  githubUrl: "https://github.com/nilayparikh/tuts-agentic-ai-examples",
  parts: [
    // ── 1. Introduction ──────────────────────────────────────────────────
    {
      slug: "introduction",
      title: "Introduction",
      type: "video",
      duration: "5 mins",
      videoId: "MuhXVA9kvLc",
      description:
        "Get oriented to agentic AI systems, the N² integration problem, and why A2A exists.",
      objectives: [
        "Understand what agentic AI systems are and why they need protocols",
        "Grasp the N² integration problem that A2A solves",
        "Preview the six frameworks and three model providers used in this course",
        "Differentiate A2A (agent-to-agent) from MCP (agent-to-tool)",
      ],
      infoBoxes: [
        {
          title: "No Prerequisites",
          content:
            "This is the first lesson in the course. No prior setup is needed — just watch and learn. In Lesson 04 (Setup & Resources), you will configure your development environment.",
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "Welcome to the A2A — Agent-to-Agent Protocol course. In this series, you are going to build production-grade multi-agent AI systems from scratch — using six different frameworks and three model providers.",
        },
        {
          time: 14,
          speaker: "Instructor",
          text: "Agentic AI is one of the most exciting frontiers in artificial intelligence. But here is the challenge — most agents today operate in isolation.",
        },
        {
          time: 24,
          speaker: "Instructor",
          text: "They can call tools using MCP, they can access data, but they cannot talk to other agents in a standardised way. If you have three agents built with three different frameworks, connecting them means writing custom integration code for every pair.",
        },
        {
          time: 40,
          speaker: "Instructor",
          text: "That is the N-squared integration problem. Three agents need three integrations. Five agents need ten. Ten agents — forty-five. It scales terribly.",
        },
        {
          time: 52,
          speaker: "Instructor",
          text: "A2A — the Agent-to-Agent protocol — solves this. It is an open standard, now under the Linux Foundation, that gives agents a common language to discover each other, delegate tasks, and stream results back.",
        },
        {
          time: 66,
          speaker: "Instructor",
          text: "Now, you might be thinking — how is this different from MCP? MCP, the Model Context Protocol, connects a single model to its tools and data sources. Think of it as vertical integration.",
        },
        {
          time: 78,
          speaker: "Instructor",
          text: "A2A is horizontal integration. It connects autonomous agents to each other — agents that may be running different models, different frameworks, even managed by different teams.",
        },
        {
          time: 90,
          speaker: "Instructor",
          text: "They are complementary. An agent can use MCP internally to access tools, and A2A externally to talk to other agents. We will build exactly this pattern in Lesson 10 with LangGraph.",
        },
        {
          time: 104,
          speaker: "Instructor",
          text: "Here is what you will build in this course. You will create agents with six different frameworks: the pure A2A SDK, Microsoft Agent Framework, Google ADK, LangGraph with MCP, CrewAI, OpenAI Agents SDK, and Claude Agent SDK.",
        },
        {
          time: 122,
          speaker: "Instructor",
          text: "This course uses three model tracks: GitHub Models with Phi-4 for Lessons 05-07, Azure AI Foundry with Kimi-K2-Thinking for Lessons 08-13, and GitHub Models with openai/gpt-4o-mini for the Lesson 14 capstone pipeline. Foundry Local with Qwen2.5 Coder is also supported for local-first experimentation. Every model is either free-tier or runs locally — no expensive cloud APIs required.",
        },
        {
          time: 140,
          speaker: "Instructor",
          text: "Over sixteen lessons, you will go from zero to a complete multi-agent system. Lessons one through three cover the protocol fundamentals. Lessons four through seven build your first A2A agent, server, and client from scratch.",
        },
        {
          time: 156,
          speaker: "Instructor",
          text: "Lessons eight through thirteen integrate each of the six frameworks. Lesson fourteen is the capstone — a production-grade loan approval pipeline with six orchestrated agents, human-in-the-loop escalation, and a React dashboard.",
        },
        {
          time: 170,
          speaker: "Instructor",
          text: "And lessons fifteen and sixteen cover advanced topics — security, extensions, observability — and wrap up with next steps.",
        },
        {
          time: 180,
          speaker: "Instructor",
          text: "By the end of this course, you will have a deep understanding of the A2A protocol and hands-on experience building real, production-ready multi-agent systems. Let us get started.",
        },
      ],
      qa: [
        {
          question: "What is the N² problem in multi-agent systems?",
          answer:
            "Without a shared protocol, connecting N agents requires up to N×(N-1)/2 custom integrations. A2A reduces this to one standard interface per agent.",
        },
        {
          question: "How is A2A different from MCP?",
          answer:
            "MCP connects a single model to tools and data sources (vertical). A2A connects autonomous agents to each other (horizontal). They are complementary — an agent uses MCP for its tools and A2A to talk to other agents.",
        },
        {
          question: "Do I need cloud accounts for this course?",
          answer:
            "No. GitHub Models offers free Phi-4 access with a GitHub account. Azure AI Foundry has free tiers for Kimi-K2. Foundry Local runs Qwen2.5 Coder entirely on your machine with no API key.",
        },
        {
          question: "What programming language does this course use?",
          answer:
            "Python 3.11+. All six framework integrations and the A2A SDK are Python-based. The A2A protocol itself is language-agnostic.",
        },
      ],
      tags: ["introduction", "overview", "a2a"],
    },

    // ── 2. Why Agent2Agent? ──────────────────────────────────────────────
    {
      slug: "why-a2a",
      title: "Why Agent2Agent Protocol?",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-why-a2a",
      description:
        "Explore the motivation behind A2A — how it solves the interoperability problem and complements MCP.",
      objectives: [
        "Quantify the N² integration scale problem",
        "Compare REST API integration vs. A2A protocol approach",
        "Understand A2A's five design values",
        "Map the A2A agent stack layers",
      ],
      infoBoxes: [
        {
          title: "Before You Start",
          content:
            "This is a conceptual lesson — no coding required. If you want context on what A2A is, revisit Lesson 01 (Introduction) first.",
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "So why do we need A2A? Let us start by looking at the landscape of agent communication today and understand the problem A2A was created to solve.",
        },
        {
          time: 10,
          speaker: "Instructor",
          text: "Right now, we have tool calling — where a model invokes functions directly. And we have MCP, the Model Context Protocol, which connects models to structured data sources and tools.",
        },
        {
          time: 22,
          speaker: "Instructor",
          text: "But neither of these solves agent-to-agent communication. Tool calling is synchronous and one-directional. MCP is about connecting to data and tools, not to other autonomous agents.",
        },
        {
          time: 34,
          speaker: "Instructor",
          text: "Now imagine you have three teams in your organization. Team A builds with Microsoft Agent Framework, Team B uses Google ADK, and Team C runs LangGraph. How do their agents talk to each other?",
        },
        {
          time: 48,
          speaker: "Instructor",
          text: "Without A2A, every pair needs a custom integration — custom message formats, custom streaming, custom authentication. Three agents? Three integrations. Five agents — ten integrations. Ten agents — forty five. That is the N-squared problem.",
        },
        {
          time: 64,
          speaker: "Instructor",
          text: "A2A replaces all of that with one standard contract. Each agent implements the protocol once, and every other A2A agent can immediately communicate with it.",
        },
        {
          time: 76,
          speaker: "Instructor",
          text: "Let me walk through what A2A standardizes that raw REST APIs do not. First — message formats. A2A defines Messages with typed Parts: text, files, and structured data.",
        },
        {
          time: 88,
          speaker: "Instructor",
          text: "Second — streaming. A2A uses Server-Sent Events built into the protocol, so you get real-time task updates without building your own streaming infrastructure.",
        },
        {
          time: 98,
          speaker: "Instructor",
          text: "Third — discovery. Every A2A agent publishes an Agent Card at a well-known URL. This JSON document describes the agent's skills, capabilities, and authentication requirements. Other agents read this card to know what the agent can do.",
        },
        {
          time: 112,
          speaker: "Instructor",
          text: "Fourth — task lifecycle. A2A defines a state machine: submitted, working, input required, completed, failed, canceled. Every agent follows the same lifecycle contract.",
        },
        {
          time: 124,
          speaker: "Instructor",
          text: "And fifth — authentication. A2A supports OAuth 2.0, OIDC, API keys, and mutual TLS out of the box. You declare your auth requirements in the Agent Card and clients honor them.",
        },
        {
          time: 136,
          speaker: "Instructor",
          text: "The protocol is built on five core design values. Agentic — agents are autonomous peers, not passive tools. Composable — any agent can call any other. Opaque — callers do not need to know the agent's internals.",
        },
        {
          time: 150,
          speaker: "Instructor",
          text: "Enterprise-ready — with built-in streaming, authentication, push notifications, and extensions. And open — Apache 2.0 license, Linux Foundation governance, completely vendor-neutral.",
        },
        {
          time: 162,
          speaker: "Instructor",
          text: "Where does A2A fit in the stack? Think of it this way. At the bottom you have models — Phi-4, Kimi K2, Qwen 2.5. Above that, frameworks — ADK, LangGraph, CrewAI. Then protocols — A2A connects agents horizontally, MCP connects them vertically to tools.",
        },
        {
          time: 178,
          speaker: "Instructor",
          text: "On top of protocols sit orchestrators — like the Microsoft Agent Framework — that route tasks between agents. And at the very top, your user-facing applications.",
        },
        {
          time: 190,
          speaker: "Instructor",
          text: "One important thing — A2A does NOT run your agents, choose your models, or replace MCP. It is purely a communication protocol. Think of it like HTTP for agents. You do not need to know the implementation — just the contract.",
        },
        {
          time: 206,
          speaker: "Instructor",
          text: "In the next lesson, we dive deep into A2A's architecture — Agent Cards, Messages, Task lifecycle, SSE streaming, and the JSON-RPC methods that make it all work.",
        },
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
        {
          question: "Is A2A tied to Google or any specific cloud provider?",
          answer:
            "No. A2A was initiated by Google but is now governed by the Linux Foundation under an Apache 2.0 license. It is completely vendor-neutral. In this course we use GitHub Models, Azure AI Foundry, and Foundry Local — no Google Cloud required.",
        },
        {
          question: "Can I use A2A with frameworks not covered in this course?",
          answer:
            "Absolutely. A2A is framework-agnostic. Any language or framework that can serve HTTP and handle JSON-RPC 2.0 can implement an A2A server. The spec also supports gRPC and HTTP+JSON/REST protocol bindings.",
        },
      ],
      tags: ["overview", "motivation", "interoperability"],
    },

    // ── 3. Architecture ──────────────────────────────────────────────────
    {
      slug: "a2a-architecture",
      title: "A2A Architecture",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-architecture",
      description:
        "Deep dive into A2A's architecture — Agent Cards, Messages, Task lifecycle, streaming, and JSON-RPC methods.",
      objectives: [
        "Describe A2A's three-layer architecture (Data Model, Operations, Protocol Bindings)",
        "Interpret the Agent Card structure and discovery mechanism",
        "Trace a Task through its full state machine (eight states including INPUT_REQUIRED, AUTH_REQUIRED, and REJECTED)",
        "Explain how SSE streaming delivers real-time task updates",
      ],
      infoBoxes: [
        {
          title: "Before You Start",
          content:
            "This is a conceptual lesson — no setup required. Review Lesson 02 (Why A2A?) for context on the design values and where A2A fits in the agent stack.",
        },
      ],
      diagrams: [
        {
          chart:
            "stateDiagram-v2\n    [*] --> SUBMITTED : SendMessage\n    SUBMITTED --> WORKING : Agent starts processing\n    SUBMITTED --> REJECTED : Agent declines task\n    WORKING --> COMPLETED : Final result produced\n    WORKING --> FAILED : Unrecoverable error\n    WORKING --> CANCELED : CancelTask\n    WORKING --> INPUT_REQUIRED : Agent needs user input\n    WORKING --> AUTH_REQUIRED : Client auth needed\n    INPUT_REQUIRED --> WORKING : Client sends input\n    AUTH_REQUIRED --> WORKING : Client authenticates\n    COMPLETED --> [*]\n    FAILED --> [*]\n    CANCELED --> [*]\n    REJECTED --> [*]",
          caption:
            "A2A Task State Machine (RC v1.0) — eight states govern every task's lifecycle",
          alt: "State diagram: SUBMITTED → WORKING or REJECTED. WORKING branches to COMPLETED, FAILED, CANCELED, INPUT_REQUIRED, or AUTH_REQUIRED. INPUT_REQUIRED and AUTH_REQUIRED loop back to WORKING. Terminal states: COMPLETED, FAILED, CANCELED, REJECTED.",
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "Welcome to the architecture deep-dive. In this lesson we will break down every layer of the A2A protocol — from the data model up to the protocol bindings that run on the wire.",
        },
        {
          time: 12,
          speaker: "Instructor",
          text: "A2A is organized in three layers. At the bottom, the Data Model — defined in protocol buffers as the canonical source. Above that, abstract Operations like SendMessage and GetTask. On top, Protocol Bindings — the concrete wire formats.",
        },
        {
          time: 26,
          speaker: "Instructor",
          text: "The spec currently defines three protocol bindings: JSON-RPC 2.0 over HTTP, gRPC, and HTTP plus JSON REST. In this course, every server you build uses JSON-RPC, which is the most common binding in the ecosystem.",
        },
        {
          time: 40,
          speaker: "Instructor",
          text: "Let us start with the cornerstone of discovery — the Agent Card. Every A2A server publishes a JSON document at the well-known path — slash dot-well-known slash agent-card-dot-json.",
        },
        {
          time: 52,
          speaker: "Instructor",
          text: "The Agent Card has three main sections. First, identity — name, description, version, URL. Second, supported interfaces — an array of AgentInterface objects, each carrying a URL, protocol binding, and protocol version.",
        },
        {
          time: 66,
          speaker: "Instructor",
          text: "Third, capabilities — booleans and arrays describing what the agent can do: streaming support, push notifications, extensions. And skills — each with an ID, name, description, tags, example prompts, input modes, and output modes.",
        },
        {
          time: 80,
          speaker: "Instructor",
          text: "Here is an example. Our QA agent built in Lesson 05 will publish an Agent Card with one skill: answer questions. Input mode text, output mode text. It supports streaming via SSE.",
        },
        {
          time: 94,
          speaker: "Instructor",
          text: "Now — Messages and Parts. When a client sends work to an agent, it sends a Message. Every message has a role — USER or AGENT — and an array of Parts. A Part is a oneOf type: text, raw bytes, a URL reference, or structured data.",
        },
        {
          time: 110,
          speaker: "Instructor",
          text: "Each Part can carry metadata — a filename, a media type, extra key-value pairs. This means you can send plain text, upload a CSV file, reference a cloud storage URL, or pass a JSON schema — all in the same message.",
        },
        {
          time: 124,
          speaker: "Instructor",
          text: "The Task is the central coordination object. When you call SendMessage, the server creates a Task with a unique ID. That task moves through states — submitted, working, completed, failed, canceled.",
        },
        {
          time: 138,
          speaker: "Instructor",
          text: "The RC v1.0 spec adds two new states: input required — where the agent pauses to ask the user for more information — and auth required, where the agent needs additional authentication from the client.",
        },
        {
          time: 152,
          speaker: "Instructor",
          text: "Let us look at the state machine on screen — this diagram shows all the transitions. Notice that input-required and auth-required loop back to working. The terminal states are completed, failed, and canceled.",
        },
        {
          time: 166,
          speaker: "Instructor",
          text: "When a Task completes, it produces Artifacts. An Artifact has an ID, a name, and an array of Parts. For streaming, the append and lastChunk flags let the server send artifacts incrementally.",
        },
        {
          time: 180,
          speaker: "Instructor",
          text: "Speaking of streaming — when you call SendStreamingMessage instead of SendMessage, the server opens a Server-Sent Events connection and pushes TaskStatusUpdateEvent and TaskArtifactUpdateEvent objects.",
        },
        {
          time: 194,
          speaker: "Instructor",
          text: "Each event carries the full task ID plus the updated status or artifact. When the status has final set to true, the stream closes. This is how you get real-time token streaming from any A2A agent.",
        },
        {
          time: 208,
          speaker: "Instructor",
          text: "Here are the core JSON-RPC methods. SendMessage and SendStreamingMessage for task creation. GetTask and ListTasks for querying. CancelTask for cancellation. SubscribeToTask for push notifications.",
        },
        {
          time: 222,
          speaker: "Instructor",
          text: "And then the push notification methods — SetTaskPushNotification, GetTaskPushNotification, RemoveTaskPushNotification — plus GetExtendedAgentCard for runtime capability discovery.",
        },
        {
          time: 236,
          speaker: "Instructor",
          text: "One important detail — all JSON-RPC methods use PascalCase. SendMessage, not tasks-slash-send. The server handles these on a single HTTP endpoint, typically at the root path.",
        },
        {
          time: 250,
          speaker: "Instructor",
          text: "Let me show you the full interaction sequence. A client first fetches the Agent Card via GET. Then calls SendMessage with a JSON-RPC request. The server returns the task in its initial state, processes it, and returns updates.",
        },
        {
          time: 264,
          speaker: "Instructor",
          text: "For streaming, the same sequence uses SendStreamingMessage. The server responds with an SSE stream — each event is a JSON line with the task update. The last event has final set to true.",
        },
        {
          time: 278,
          speaker: "Instructor",
          text: "Extensions are how A2A stays forward-compatible. Any new capability — custom auth flows, multi-turn workflows, domain-specific metadata — can ship as an extension without changing the core spec.",
        },
        {
          time: 290,
          speaker: "Instructor",
          text: "That covers the full A2A architecture. In the next lesson we will set up the course repositories, install the A2A Python SDK, and configure your local model providers — ready to start building.",
        },
      ],
      qa: [
        {
          question: "What is an Agent Card and where is it published?",
          answer:
            "An Agent Card is a JSON document describing the agent's identity, skills, capabilities, supported interfaces, and authentication requirements. It is published at /.well-known/agent-card.json. Clients fetch this card to discover what the agent can do before sending any tasks.",
        },
        {
          question: "How does streaming work in A2A?",
          answer:
            "Streaming uses Server-Sent Events (SSE). The client calls SendStreamingMessage and the server opens an SSE connection. The server pushes TaskStatusUpdateEvent and TaskArtifactUpdateEvent objects as JSON lines. Artifacts can stream incrementally via the append and lastChunk flags. The stream closes when the final status event has 'final: true'.",
        },
        {
          question: "What are the three protocol bindings in the RC v1.0 spec?",
          answer:
            "JSON-RPC 2.0 over HTTP (the most common, used in this course), gRPC (for high-performance inter-service communication), and HTTP+JSON/REST (a REST-style binding). Each agent declares which bindings it supports in its Agent Card via the supportedInterfaces array.",
        },
        {
          question:
            "What is the difference between INPUT_REQUIRED and AUTH_REQUIRED states?",
          answer:
            "INPUT_REQUIRED means the agent needs additional information from the user to continue — it pauses and waits for the client to send more context. AUTH_REQUIRED means the agent needs the client to authenticate with additional credentials. Both states loop back to WORKING once the client responds.",
        },
      ],
      tags: ["architecture", "spec", "agent-card", "sse", "json-rpc"],
    },

    // ── 4. Setup & Resources ─────────────────────────────────────────────
    {
      slug: "setup-resources",
      title: "Setup & Resources",
      type: "reading",
      duration: "5 mins",
      description:
        "Set up your local development environment — the course repository, Python virtual environment, and all three model providers used across the lessons.",
      objectives: [
        "Clone the examples repository and create a Python 3.11+ virtual environment",
        "Install the A2A Python SDK with HTTP server support",
        "Get free Phi-4 access via a GitHub Personal Access Token",
        "Activate Kimi-K2 and Kimi-K2-Thinking on Azure AI Foundry",
        "Install Foundry Local and run Qwen2.5 Coder on your machine",
        "Verify all three providers with the included smoke test script",
      ],
      readingUrl: "https://github.com/nilayparikh/tuts-agentic-ai-examples",
      stepGuides: [
        {
          title: "Step 1 — Repository & Python Environment",
          steps: [
            {
              title: "Clone the course repository",
              description: "Clone the examples repo to your local machine.",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a",
              codeLanguage: "bash",
            },
            {
              title: "Create a Python 3.11+ virtual environment",
              description:
                "Create an isolated environment for the course dependencies.",
              code: "python -m venv .venv\n# Windows:\n.venv\\Scripts\\activate\n# macOS / Linux:\nsource .venv/bin/activate",
              codeLanguage: "bash",
            },
            {
              title: "Install base dependencies",
              description: "Install the A2A SDK and all lesson requirements.",
              code: 'pip install -r requirements.txt\n# Or install the A2A SDK directly:\npip install "a2a-sdk[http-server]==0.3.24"',
              codeLanguage: "bash",
            },
          ],
        },
        {
          title: "Step 2 — GitHub Models (Phi-4)",
          steps: [
            {
              title: "Get a GitHub Personal Access Token",
              description:
                "Visit github.com/settings/tokens and create a PAT. No special scopes are needed — just a basic token.",
            },
            {
              title: "Set the GITHUB_TOKEN environment variable",
              description: "Add this to your shell profile or .env file.",
              code: "# .env file (or export in your shell)\nGITHUB_TOKEN=ghp_your_token_here",
              codeLanguage: "bash",
            },
            {
              title: "Verify GitHub Models access",
              description:
                "The endpoint is OpenAI-compatible — uses the openai Python SDK.",
              code: 'import os, openai\nclient = openai.OpenAI(\n    base_url="https://models.inference.ai.azure.com",\n    api_key=os.environ["GITHUB_TOKEN"],\n)\nresp = client.chat.completions.create(\n    model="Phi-4",\n    messages=[{"role": "user", "content": "Hello"}],\n    max_tokens=10,\n)\nprint(resp.choices[0].message.content)',
              codeLanguage: "python",
            },
          ],
        },
        {
          title: "Step 3 — Azure AI Foundry (Kimi-K2 / Kimi-K2-Thinking)",
          steps: [
            {
              title: "Create an Azure AI Foundry project",
              description:
                "Sign in at ai.azure.com, create a project, and deploy the Kimi-K2 and Kimi-K2-Thinking models. Both have a free tier.",
            },
            {
              title: "Set Azure AI Foundry environment variables",
              description:
                "Copy the endpoint URL and API key from the Azure AI Foundry portal.",
              code: "# .env file\nAZURE_AI_FOUNDRY_ENDPOINT=https://your-endpoint.inference.ai.azure.com\nAZURE_AI_FOUNDRY_KEY=your_key_here",
              codeLanguage: "bash",
            },
          ],
        },
        {
          title: "Step 4 — Foundry Local (Qwen2.5 Coder)",
          steps: [
            {
              title: "Install Foundry Local",
              description:
                "Foundry Local runs models on your machine using ONNX Runtime. No API key required.",
              code: "# Windows\nwinget install Microsoft.FoundryLocal\n\n# macOS\nbrew install microsoft/foundrylocal/foundrylocal\n\n# Install the Python SDK\npip install foundry-local-sdk",
              codeLanguage: "bash",
            },
            {
              title: "Start the Qwen2.5 Coder model",
              description:
                "The endpoint uses a dynamic port — always use manager.endpoint, never hardcode a port.",
              code: 'from foundry_local import FoundryLocalManager\nimport openai\n\nmanager = FoundryLocalManager("qwen2.5-coder")\nclient = openai.OpenAI(\n    base_url=manager.endpoint,   # dynamic port\n    api_key=manager.api_key,\n)\nresp = client.chat.completions.create(\n    model=manager.get_model_info("qwen2.5-coder").id,\n    messages=[{"role": "user", "content": "Hello"}],\n    max_tokens=10,\n)\nprint(resp.choices[0].message.content)',
              codeLanguage: "python",
            },
          ],
        },
        {
          title: "Step 5 — Smoke Test",
          steps: [
            {
              title: "Run the smoke test script",
              description:
                "Verify all three providers respond correctly before starting the coding lessons.",
              code: "python smoke_test.py\n# Expected output:\n# ✅ GitHub Phi-4: Hello!\n# ✅ Azure Kimi-K2: Hello!\n# ✅ Foundry Local Qwen2.5: Hello!",
              codeLanguage: "bash",
            },
          ],
        },
      ],
      tags: ["setup", "resources", "environment", "python"],
    },

    // ── 5. First A2A Agent ───────────────────────────────────────────────
    {
      slug: "first-a2a-agent",
      title: "Building Your First A2A Agent",
      type: "video-code",
      duration: "6 mins",
      videoId: "placeholder-first-agent",
      description:
        "Build a standalone QA agent powered by GitHub Phi-4 using an async class pattern with domain knowledge injection.",
      objectives: [
        "Create a standalone QA agent powered by GitHub Phi-4",
        "Configure the OpenAI-compatible API for GitHub Models",
        "Load domain knowledge and inject it into the system prompt",
        "Structure agent code as an async class for A2A wrapping",
        "Test the agent standalone before adding protocol layers",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/05-first-a2a-agent",
      notebookUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/blob/main/a2a/lessons/05-first-a2a-agent/src/qa_agent.ipynb",
      colabUrl:
        "https://colab.research.google.com/github/nilayparikh/tuts-agentic-ai-examples/blob/main/a2a/lessons/05-first-a2a-agent/src/qa_agent.ipynb",
      infoBoxes: [
        {
          title: "GitHub Models — Free Phi-4 Access",
          content:
            "This lesson uses GitHub Models to access Phi-4. You need a GitHub account and a Personal Access Token (PAT). Go to github.com/settings/tokens, create a PAT with no special scopes, and set GITHUB_TOKEN in your environment. The endpoint is https://models.inference.ai.azure.com with model name Phi-4.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    Q["User Question"] --> Agent["QAAgent"]\n    KB["Knowledge Base<br/>(Policy Document)"] --> Agent\n    Agent --> LLM["GitHub Phi-4<br/>via OpenAI API"]\n    LLM --> A["Answer"]',
          caption:
            "The QA Agent pattern: user question + domain knowledge → LLM → answer",
          alt: "Diagram showing the QA Agent receiving a user question and knowledge base, calling GitHub Phi-4, and returning an answer",
        },
      ],
      codePreview: {
        title: "QA Agent Implementation",
        segments: [
          {
            code: 'import os\nfrom openai import AsyncOpenAI\n\n# GitHub Models provides an OpenAI-compatible endpoint\nclient = AsyncOpenAI(\n    base_url="https://models.inference.ai.azure.com",\n    api_key=os.environ["GITHUB_TOKEN"],\n)',
            language: "python",
            filename: "model_client.py",
            explanation:
              "Configure the OpenAI client to point at GitHub Models. Any model on GitHub Models works with the same pattern — just change the model name.",
          },
          {
            code: 'class QAAgent:\n    def __init__(self, knowledge_path: str):\n        self.client = AsyncOpenAI(\n            base_url="https://models.inference.ai.azure.com",\n            api_key=os.environ["GITHUB_TOKEN"],\n        )\n        self.knowledge = load_knowledge(knowledge_path)\n        self.system_prompt = SYSTEM_PROMPT.format(\n            policy_text=self.knowledge\n        )\n\n    async def query(self, question: str) -> str:\n        response = await self.client.chat.completions.create(\n            model="Phi-4",\n            messages=[\n                {"role": "system", "content": self.system_prompt},\n                {"role": "user", "content": question},\n            ],\n            temperature=0.2,\n        )\n        return response.choices[0].message.content',
            language: "python",
            filename: "qa_agent.py",
            explanation:
              "The QAAgent class encapsulates the model client, knowledge, and system prompt. The async query method is the interface that Lesson 6 wraps with AgentExecutor.",
          },
          {
            code: 'import asyncio\n\nasync def main():\n    agent = QAAgent("data/insurance_policy.txt")\n    answer = await agent.query(\n        "What is the deductible for the Standard plan?"\n    )\n    print(answer)\n\nasyncio.run(main())',
            language: "python",
            filename: "test_agent.py",
            explanation:
              "Always test the agent standalone before wrapping it in A2A. This verifies model connectivity, prompt engineering, and response quality.",
          },
        ],
      },
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In this lesson, you are going to build the core of every A2A agent — a standalone agent class. We will create a QA agent powered by GitHub Phi-4 that answers questions about insurance policies.",
        },
        {
          time: 12,
          speaker: "Instructor",
          text: "The pattern is simple. You have a user question, domain knowledge, and a language model. The agent combines the question with the knowledge, sends it to the model, and returns an answer.",
        },
        {
          time: 24,
          speaker: "Instructor",
          text: "We are using GitHub Models because it is the easiest way to get started. You just need a GitHub account and a personal access token. No cloud platform, no billing setup, no API key management beyond that one token.",
        },
        {
          time: 38,
          speaker: "Instructor",
          text: "GitHub Models provides an OpenAI-compatible API. That means we use the standard openai Python package, but we point it at models dot inference dot ai dot azure dot com instead of the OpenAI endpoint.",
        },
        {
          time: 52,
          speaker: "Instructor",
          text: "Let me show you. We create an AsyncOpenAI client with the GitHub Models base URL and our GitHub token. That is it — two lines of configuration.",
        },
        {
          time: 62,
          speaker: "Instructor",
          text: "Next, the knowledge base. Our agent needs domain knowledge to answer questions accurately. We load an insurance policy document and inject it directly into the system prompt. This is RAG-lite — no vector store needed for a bounded domain.",
        },
        {
          time: 78,
          speaker: "Instructor",
          text: "Now the QAAgent class. It takes a knowledge path, creates the model client, loads the knowledge, and builds the system prompt. The key method is query — it is async, takes a question string, calls the model, and returns the answer.",
        },
        {
          time: 94,
          speaker: "Instructor",
          text: "Two important design decisions here. First, the interface is async. A2A servers are async, so we start async from day one. Second, we use a class, not a function. The class encapsulates the client, knowledge, and prompt — making it easy to wrap with AgentExecutor in the next lesson.",
        },
        {
          time: 112,
          speaker: "Instructor",
          text: "We set temperature to zero point two because this is factual question-answering. We want deterministic, grounded responses — not creative ones.",
        },
        {
          time: 122,
          speaker: "Instructor",
          text: "Before we add any A2A protocol layers, we test the agent standalone. This is a critical habit. Run the agent directly, verify it connects to the model, verify the knowledge injection works, verify the response quality.",
        },
        {
          time: 138,
          speaker: "Instructor",
          text: "Open the notebook, set your GitHub token, and run each cell. You should see the agent correctly answering questions about the insurance policy. If it works standalone, it will work inside A2A.",
        },
        {
          time: 150,
          speaker: "Instructor",
          text: "Why Phi-4 specifically? It is a fourteen billion parameter model from Microsoft — small enough for fast inference, but strong at instruction following and system prompt adherence. Perfect for our QA use case.",
        },
        {
          time: 164,
          speaker: "Instructor",
          text: "This QAAgent is the foundation. In Lesson 6, we wrap it as an A2A server with Agent Card and AgentExecutor. In Lesson 7, we build a client that discovers and calls it. Same agent core — different protocol layers on top.",
        },
        {
          time: 180,
          speaker: "Instructor",
          text: "Go ahead and build the agent. Run the notebook. Change the question, tweak the temperature, try a different knowledge document. Get comfortable with the pattern because every agent in this course follows it.",
        },
      ],
      qa: [
        {
          question: "Why use an async class instead of a simple function?",
          answer:
            "A2A servers are asynchronous (built on ASGI/Starlette). Starting with an async class means zero refactoring when you wrap it with AgentExecutor in Lesson 6.",
        },
        {
          question: "Can I use a different model instead of Phi-4?",
          answer:
            "Yes. Since we use the OpenAI-compatible API, any model on GitHub Models works — just change the model name in the create() call.",
        },
        {
          question: "Why not use a vector store for the knowledge base?",
          answer:
            "For a bounded domain like a single policy document, injecting the full text into the system prompt is simpler and equally effective.",
        },
        {
          question: "What does temperature 0.2 do?",
          answer:
            "Temperature controls randomness. Lower values (0.0–0.3) produce more deterministic, focused responses — ideal for factual Q&A.",
        },
      ],
      tags: ["phi-4", "github-models", "python", "qa-agent"],
    },

    // ── 6. A2A Server ────────────────────────────────────────────────────
    {
      slug: "a2a-server",
      title: "Wrapping Agents as A2A Servers",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-a2a-server",
      description:
        "Transform the standalone QAAgent into a fully A2A-compliant server using AgentExecutor, Agent Card, and A2AStarletteApplication.",
      objectives: [
        "Implement the AgentExecutor interface from the A2A Python SDK",
        "Define an Agent Card with skills, capabilities, and metadata",
        "Use the EventQueue to bridge agent logic and A2A protocol events",
        "Run and test the server with A2AStarletteApplication and uvicorn",
        "Verify the Agent Card endpoint and send a test task with curl",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/06-a2a-server",
      notebookUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/blob/main/a2a/lessons/06-a2a-server/src/a2a_server.ipynb",
      colabUrl:
        "https://colab.research.google.com/github/nilayparikh/tuts-agentic-ai-examples/blob/main/a2a/lessons/06-a2a-server/src/a2a_server.ipynb",
      infoBoxes: [
        {
          title: "Install the A2A Python SDK",
          content:
            'This lesson requires the A2A Python SDK with the HTTP server extra:\n\npip install "a2a-sdk[http-server]==0.3.24"\n\nThis installs the core SDK plus Starlette and uvicorn for serving.',
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph Server["A2A Server (localhost:10001)"]\n        Card["Agent Card<br/>/.well-known/agent-card.json"]\n        Handler["DefaultRequestHandler"]\n        Exec["QAAgentExecutor<br/>(wraps QAAgent)"]\n        Store["InMemoryTaskStore"]\n        App["A2AStarletteApplication"]\n    end\n\n    Client["A2A Client"] -->|"GET /.well-known/agent-card.json"| Card\n    Client -->|"POST /"| App\n    App --> Handler\n    Handler --> Exec\n    Handler --> Store\n    Exec --> QA["QAAgent<br/>(GitHub Phi-4)"]',
          caption:
            "A2A Server architecture — the client discovers via Agent Card and sends tasks via JSON-RPC",
          alt: "Diagram showing A2A Server components: Agent Card, DefaultRequestHandler, QAAgentExecutor wrapping QAAgent, InMemoryTaskStore",
        },
        {
          chart:
            "sequenceDiagram\n    participant Client\n    participant App as A2AStarletteApplication\n    participant Exec as QAAgentExecutor\n    participant Agent as QAAgent\n    participant Queue as EventQueue\n\n    Client->>App: POST / (SendMessage)\n    App->>Exec: execute(context, event_queue)\n    Exec->>Exec: context.get_user_input()\n    Exec->>Agent: query(question)\n    Agent->>Agent: call GitHub Phi-4\n    Agent-->>Exec: answer text\n    Exec->>Queue: enqueue_event(new_agent_text_message)\n    Queue-->>App: event\n    App-->>Client: JSON-RPC response (Task)",
          caption:
            "Request flow — from client POST through executor to agent and back via EventQueue",
          alt: "Sequence diagram showing the full request lifecycle through A2A server components",
        },
      ],
      codePreview: {
        title: "A2A Server Components",
        segments: [
          {
            code: 'from a2a.server.agent_execution import AgentExecutor, RequestContext\nfrom a2a.server.events import EventQueue\nfrom a2a.utils import new_agent_text_message\n\nclass QAAgentExecutor(AgentExecutor):\n    def __init__(self):\n        self.agent = QAAgent("data/insurance_policy.txt")\n\n    async def execute(\n        self,\n        context: RequestContext,\n        event_queue: EventQueue,\n    ) -> None:\n        question = context.get_user_input()\n        answer = await self.agent.query(question)\n        await event_queue.enqueue_event(\n            new_agent_text_message(answer)\n        )\n\n    async def cancel(\n        self,\n        context: RequestContext,\n        event_queue: EventQueue,\n    ) -> None:\n        raise Exception("cancel not supported")',
            language: "python",
            filename: "agent_executor.py",
            explanation:
              "QAAgentExecutor wraps the QAAgent with the A2A SDK's AgentExecutor interface. context.get_user_input() extracts the text from the incoming message.",
          },
          {
            code: 'from a2a.types import AgentCapabilities, AgentCard, AgentSkill\n\nagent_card = AgentCard(\n    name="QAAgent",\n    description="Answers questions about insurance policies using Phi-4",\n    url="http://localhost:10001/",\n    version="1.0.0",\n    capabilities=AgentCapabilities(streaming=True),\n    default_input_modes=["text"],\n    default_output_modes=["text"],\n    skills=[\n        AgentSkill(\n            id="policy-qa",\n            name="Policy Question Answering",\n            description="Answer questions about insurance policy documents",\n            tags=["qa", "insurance"],\n            examples=["What is the deductible for the Standard plan?"],\n        )\n    ],\n)',
            language: "python",
            filename: "agent_card.py",
            explanation:
              "The Agent Card is the JSON document served at /.well-known/agent-card.json. It tells clients what the agent can do.",
          },
          {
            code: 'from a2a.server.apps import A2AStarletteApplication\nfrom a2a.server.request_handlers import DefaultRequestHandler\nfrom a2a.server.tasks import InMemoryTaskStore\nimport uvicorn\n\nrequest_handler = DefaultRequestHandler(\n    agent_executor=QAAgentExecutor(),\n    task_store=InMemoryTaskStore(),\n)\n\nserver = A2AStarletteApplication(\n    agent_card=agent_card,\n    http_handler=request_handler,\n)\n\nif __name__ == "__main__":\n    uvicorn.run(server.build(), host="0.0.0.0", port=10001)',
            language: "python",
            filename: "server.py",
            explanation:
              "Three components wired together: DefaultRequestHandler routes requests to the executor. A2AStarletteApplication builds an ASGI app. uvicorn serves it.",
          },
        ],
      },
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In the last lesson you built a standalone QA agent. Now we are going to turn it into a fully A2A-compliant server. Any A2A client — regardless of framework — will be able to discover and call this agent.",
        },
        {
          time: 14,
          speaker: "Instructor",
          text: "There are three pieces to an A2A server. First, the Agent Card — a JSON document that describes what your agent can do. Second, the AgentExecutor — the bridge between the A2A protocol and your agent logic. Third, the application server — A2AStarletteApplication built on top of Starlette.",
        },
        {
          time: 32,
          speaker: "Instructor",
          text: "Let us start with the AgentExecutor. The A2A SDK defines an abstract class with two methods: execute and cancel. Your job is to implement execute — read the user message, call your agent, and emit the response.",
        },
        {
          time: 46,
          speaker: "Instructor",
          text: "In execute, the context object gives you everything about the request. Call context dot get user input to extract the text from the incoming message. Then call your QAAgent, get the answer, and emit it with new agent text message.",
        },
        {
          time: 60,
          speaker: "Instructor",
          text: "The function new agent text message is a helper from the SDK that creates a properly formatted response event. One line — enqueue event with the result. The EventQueue handles all the protocol details.",
        },
        {
          time: 74,
          speaker: "Instructor",
          text: "Now the Agent Card. This is served at the well-known URL slash dot well dash known slash agent dot json. It tells clients your agent's name, description, version, capabilities, and skills.",
        },
        {
          time: 88,
          speaker: "Instructor",
          text: "Skills are key. Each skill has an ID, name, description, tags, and examples. Clients use skills to decide which agent to route a task to. Think of it as a capability manifest.",
        },
        {
          time: 100,
          speaker: "Instructor",
          text: "We set streaming to true in capabilities because we will add streaming support in the client lesson. Default input and output modes are text.",
        },
        {
          time: 112,
          speaker: "Instructor",
          text: "Finally, wiring it all together. DefaultRequestHandler takes the executor and a task store. A2AStarletteApplication takes the agent card and the handler. Then uvicorn serves the built ASGI app.",
        },
        {
          time: 126,
          speaker: "Instructor",
          text: "The port convention in this course — QAAgent runs on ten thousand and one. Each framework agent in later lessons gets its own port up to ten thousand and eight.",
        },
        {
          time: 138,
          speaker: "Instructor",
          text: "Let us test it. Start the server with python server dot py. Then curl the well-known endpoint — you should see the Agent Card JSON with skills and capabilities.",
        },
        {
          time: 150,
          speaker: "Instructor",
          text: "Send a test task with a curl POST. The JSON-RPC format uses method message slash send with a message containing role user and a text part. You will get back a Task object with the agent's answer.",
        },
        {
          time: 164,
          speaker: "Instructor",
          text: "That is a fully working A2A server. Agent Card for discovery, AgentExecutor for logic, Starlette for serving. In the next lesson, we build the client side — proper agent discovery and both blocking and streaming calls.",
        },
        {
          time: 178,
          speaker: "Instructor",
          text: "Open the notebook, follow along, and get the server running. Keep it running — you will need it for Lesson 7.",
        },
      ],
      qa: [
        {
          question:
            "What is the difference between AgentExecutor and the QAAgent?",
          answer:
            "QAAgent contains your business logic. AgentExecutor is the A2A protocol adapter — it receives requests, extracts the user message, calls your agent, and formats the response as A2A events.",
        },
        {
          question: "Why use InMemoryTaskStore instead of a database?",
          answer:
            "InMemoryTaskStore is sufficient for development. For production, the A2A SDK supports PostgreSQL, MySQL, and SQLite via the sql extras.",
        },
        {
          question: "What does the Agent Card's skills field do?",
          answer:
            "Skills tell clients what the agent can do. An orchestrator inspects skills to decide which agent should handle a task.",
        },
        {
          question: "Can I have multiple skills on one agent?",
          answer:
            "Yes. An agent can declare multiple skills. The client or orchestrator decides which to invoke based on the task.",
        },
      ],
      tags: ["a2a-server", "starlette", "uvicorn", "agent-card"],
    },

    // ── 7. A2A Client ────────────────────────────────────────────────────
    {
      slug: "a2a-client",
      title: "A2A Client Fundamentals",
      type: "video-code",
      duration: "6 mins",
      videoId: "placeholder-a2a-client",
      description:
        "Build a complete A2A client that discovers agents via Agent Cards and communicates using both blocking and streaming modes.",
      objectives: [
        "Use the A2A Python SDK's client classes for discovery and communication",
        "Fetch and parse Agent Cards with A2ACardResolver",
        "Send blocking requests with A2AClient and parse Task responses",
        "Send streaming requests and process real-time SSE events",
        "Handle errors and edge cases in A2A client code",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/07-a2a-client",
      notebookUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/blob/main/a2a/lessons/07-a2a-client/src/a2a_client.ipynb",
      colabUrl:
        "https://colab.research.google.com/github/nilayparikh/tuts-agentic-ai-examples/blob/main/a2a/lessons/07-a2a-client/src/a2a_client.ipynb",
      infoBoxes: [
        {
          title: "Start the A2A Server First",
          content:
            "This lesson requires the A2A server from Lesson 6 to be running on localhost:10001. Start it before running the client notebook:\n\ncd ../06-a2a-server/src && python server.py",
        },
      ],
      diagrams: [
        {
          chart:
            "sequenceDiagram\n    participant Client\n    participant Server\n\n    Note over Client,Server: 1. Discovery\n    Client->>Server: GET /.well-known/agent-card.json\n    Server-->>Client: AgentCard (skills, capabilities)\n\n    Note over Client,Server: 2. Blocking Request\n    Client->>Server: POST / (SendMessage)\n    Server-->>Client: Task (status: completed, artifacts)\n\n    Note over Client,Server: 3. Streaming Request\n    Client->>Server: POST / (SendStreamingMessage)\n    Server-->>Client: SSE: status update (working)\n    Server-->>Client: SSE: artifact (text chunk)\n    Server-->>Client: SSE: status update (completed)",
          caption:
            "A2A client workflow — discover the agent, then send blocking or streaming requests",
          alt: "Sequence diagram showing three phases: discovery via Agent Card, blocking request-response, and streaming with SSE events",
          minHeight: "22rem",
        },
        {
          chart:
            "stateDiagram-v2\n    [*] --> Submitted: Client sends message\n    Submitted --> Working: Agent starts processing\n    Submitted --> Rejected: Server refuses task\n    Working --> Completed: Agent finished\n    Working --> InputRequired: Agent needs more info\n    Working --> AuthRequired: Client auth needed\n    Working --> Failed: Error occurred\n    Working --> Canceled: Client cancels\n    InputRequired --> Working: Client sends follow-up\n    AuthRequired --> Working: Client authenticates",
          caption:
            "Task state machine — eight states from submission through processing to terminal state",
          alt: "State diagram showing all eight task states: Submitted, Working, Completed, InputRequired, AuthRequired, Failed, Rejected, Canceled",
        },
      ],
      codePreview: {
        title: "A2A Client Code Walkthrough",
        segments: [
          {
            code: 'import httpx\nfrom a2a.client import A2ACardResolver\n\nasync with httpx.AsyncClient() as httpx_client:\n    resolver = A2ACardResolver(\n        httpx_client=httpx_client,\n        base_url="http://localhost:10001",\n    )\n    agent_card = await resolver.get_agent_card()\n\n    print(f"Agent: {agent_card.name}")\n    print(f"Skills: {[s.name for s in agent_card.skills]}")\n    print(f"Streaming: {agent_card.capabilities.streaming}")',
            language: "python",
            filename: "discovery.py",
            explanation:
              "A2ACardResolver fetches /.well-known/agent-card.json and parses it into a typed AgentCard. Use the card to inspect agent capabilities before sending requests.",
          },
          {
            code: 'from uuid import uuid4\nfrom a2a.client import A2AClient\nfrom a2a.types import MessageSendParams, SendMessageRequest\n\nclient = A2AClient(\n    httpx_client=httpx_client,\n    agent_card=agent_card,\n)\n\npayload = {\n    "message": {\n        "role": "user",\n        "parts": [{"kind": "text", "text": "What is the deductible?"}],\n        "messageId": uuid4().hex,\n    }\n}\n\nrequest = SendMessageRequest(\n    id=str(uuid4()),\n    params=MessageSendParams(**payload),\n)\n\nresponse = await client.send_message(request)\nprint(response.model_dump(mode="json", exclude_none=True))',
            language: "python",
            filename: "blocking_call.py",
            explanation:
              "Blocking call — sends a message and waits for the complete response. The response contains a Task with status and artifacts.",
          },
          {
            code: 'from a2a.types import SendStreamingMessageRequest\n\nstreaming_request = SendStreamingMessageRequest(\n    id=str(uuid4()),\n    params=MessageSendParams(**payload),\n)\n\nasync for event in client.send_message_streaming(streaming_request):\n    data = event.model_dump(mode="json", exclude_none=True)\n    print(data)',
            language: "python",
            filename: "streaming_call.py",
            explanation:
              "Streaming call — sends a message and receives real-time SSE events. Each event is a status update or artifact chunk.",
          },
          {
            code: 'import httpx\n\ntry:\n    response = await client.send_message(request)\n    result = response.model_dump(mode="json", exclude_none=True)\n\n    if "error" in result:\n        print(f"JSON-RPC Error: {result[\'error\']}")\n    else:\n        task = result.get("result", {})\n        state = task.get("status", {}).get("state", "unknown")\n        if state == "failed":\n            print(f"Task failed: {task[\'status\'].get(\'message\')}")\n        else:\n            print(f"Status: {state}")\nexcept httpx.ConnectError:\n    print("Agent not reachable — is the server running?")',
            language: "python",
            filename: "error_handling.py",
            explanation:
              "Always handle connection errors (server down), JSON-RPC errors (bad request), and task failures (agent error).",
          },
        ],
      },
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In Lesson 5 you built the agent. In Lesson 6 you wrapped it as a server. Now you build the client — the code that discovers and calls A2A agents programmatically.",
        },
        {
          time: 12,
          speaker: "Instructor",
          text: "Every A2A interaction starts with discovery. The client fetches the Agent Card to learn what the server can do before sending any task. It is like reading the menu before ordering.",
        },
        {
          time: 24,
          speaker: "Instructor",
          text: "The A2A SDK gives you two classes. A2ACardResolver fetches and parses the Agent Card. A2AClient sends messages and handles responses. Both use httpx under the hood.",
        },
        {
          time: 38,
          speaker: "Instructor",
          text: "Let us start. Create an httpx AsyncClient, pass it to A2ACardResolver with the base URL, and call get agent card. You get back a typed AgentCard object with skills, capabilities, and metadata.",
        },
        {
          time: 52,
          speaker: "Instructor",
          text: "Now create the A2AClient with the same httpx client and the agent card. Build a SendMessageRequest with a message containing role user and a text part. Two important details — parts use kind colon text, not type, and you need a messageId.",
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "Call send message and you get back the response. Use model dump to serialize it as JSON. Inside you will find a Task object with status and artifacts — the agent's answer.",
        },
        {
          time: 82,
          speaker: "Instructor",
          text: "That was blocking — send and wait. For streaming, use SendStreamingMessageRequest and send message streaming. This returns an async iterator of events. Each event is either a status update or an artifact chunk.",
        },
        {
          time: 96,
          speaker: "Instructor",
          text: "When should you stream? For long-running tasks, interactive UIs, or when you want progressive feedback. For quick queries, blocking is simpler. Check the Agent Card's streaming capability first.",
        },
        {
          time: 108,
          speaker: "Instructor",
          text: "Error handling. Before anything, wrap in try-except for connection errors — the server might not be running. Then check for JSON-RPC errors in the response. Then check the task state — it could be failed.",
        },
        {
          time: 122,
          speaker: "Instructor",
          text: "Understanding tasks versus messages. A task has a unique ID and represents an ongoing unit of work. Messages are individual turns within a task. Reuse the same task ID for multi-turn conversations.",
        },
        {
          time: 136,
          speaker: "Instructor",
          text: "This client works against any A2A server. The protocol is the standard. In the next six lessons, you will build agents with different frameworks — Microsoft Agent Framework, Google ADK, LangGraph, and more. This same client code calls all of them.",
        },
        {
          time: 152,
          speaker: "Instructor",
          text: "Open the notebook, make sure your server from Lesson 6 is running, and walk through discovery, blocking, streaming, and error handling.",
        },
      ],
      qa: [
        {
          question:
            "What is the difference between blocking and streaming modes?",
          answer:
            "Blocking (SendMessage) waits for the complete response before returning. Streaming (SendStreamingMessage) returns an async iterator of SSE events — you get status updates and artifact chunks in real time.",
        },
        {
          question:
            "Why does the message use 'kind' instead of 'type' for parts?",
          answer:
            "The A2A SDK uses 'kind' as the discriminator field for message parts to avoid conflicts with Python's built-in 'type' and follows the Pydantic discriminated union pattern.",
        },
        {
          question:
            "Can this client call agents built with different frameworks?",
          answer:
            "Yes. The A2A protocol is the standard. This client sends JSON-RPC over HTTP — it works against any server that serves an Agent Card and accepts A2A messages.",
        },
        {
          question: "What happens if I reuse a task ID?",
          answer:
            "Reusing a task ID continues the same conversation. The server appends the new message to the existing task history, enabling multi-turn interactions.",
        },
      ],
      tags: ["a2a-client", "discovery", "streaming", "json-rpc"],
    },

    // ── 8. Microsoft Agent Framework ─────────────────────────────────────
    {
      slug: "microsoft-agent-framework",
      title: "A2A with Microsoft Agent Framework",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-msft-af",
      description:
        "Build an OrchestratorAgent with Microsoft Agent Framework that uses Kimi-K2-Thinking to validate loan applications via hard rules and multi-step LLM reasoning, then expose it as an A2A server for cross-framework interoperability.",
      objectives: [
        "Install and configure Microsoft Agent Framework with Azure AI Foundry",
        "Create an Agent with tool-decorated functions using @tool decorator",
        "Use AzureOpenAIChatClient with API-key credentials (no az login required)",
        "Call Kimi-K2-Thinking to reason over structured evidence for edge-case validation",
        "Wrap the orchestrator as an A2A server for cross-framework interop",
        "Connect to the A2A server with a standard A2A client — proving framework-agnostic interop",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/08-microsoft-agent-framework",
      infoBoxes: [
        {
          title: "Install Microsoft Agent Framework",
          content:
            'This lesson requires the Microsoft Agent Framework with the Azure AI integration:\n\npip install "agent-framework" "agent-framework-azure-ai" --pre\npip install "azure-ai-projects" "azure-core" "azure-identity"\n\nSet credentials in _examples/.env: AZURE_AI_PROJECT_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking',
        },
      ],
      noteBoxes: [
        {
          title: "Thinking Models vs Standard Models",
          content:
            "Kimi-K2-Thinking is a reasoning model that breaks problems into explicit chains of thought before answering. For loan validation, the edge case (Carol Martinez — FHA, first-time buyer, resolved medical collection) contains four interacting exception rules that a standard model might resolve incorrectly without step-by-step reasoning.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    App["LoanApplication"] --> Hard["run_hard_checks()\\n@tool"]\n    App --> Soft["run_soft_checks()\\n@tool"]\n    Hard --> LLM["Kimi-K2-Thinking\\nreasons over evidence"]\n    Soft --> LLM\n    LLM -->|"tool call if needed"| Policy["lookup_policy_notes()\\n@tool (→ QAAgent A2A)"]\n    Policy --> LLM\n    LLM --> Report["ValidationReport\\nAPPROVED / NEEDS_REVIEW / DECLINED"]',
          caption:
            "OrchestratorAgent pipeline — deterministic tools feed evidence to Kimi-K2-Thinking which synthesises the final verdict",
          alt: "Pipeline diagram showing LoanApplication flowing through hard checks, soft checks, and Kimi-K2-Thinking reasoning to a ValidationReport",
        },
        {
          chart:
            'graph LR\n    subgraph MSF["Microsoft Agent Framework (port 10008)"]\n        Orch["OrchestratorAgent<br/>Kimi-K2-Thinking"]\n        Srv["A2A Server<br/>LoanValidatorExecutor"]\n    end\n    subgraph SDK["A2A SDK (port 10001)"]\n        QA["QAAgent<br/>GitHub Phi-4"]\n    end\n    Client["Any A2A Client"] -->|"SendMessage"| Srv\n    Srv --> Orch\n    Orch -->|"lookup_policy_notes<br/>(A2A client call)"| QA\n    QA -->|"policy answer"| Orch\n    Orch --> Report["ValidationReport"]',
          caption:
            "Cross-framework interoperability — the OrchestratorAgent exposes itself as an A2A server and can call the QAAgent via the standard protocol",
          alt: "Diagram showing Microsoft Agent Framework server on port 10008 calling QAAgent on port 10001 via A2A protocol",
        },
      ],
      codePreview: {
        title: "Microsoft Agent Framework Components",
        segments: [
          {
            code: 'from typing import Annotated\nfrom pydantic import Field\nfrom agent_framework import tool\n\n@tool\ndef run_hard_checks(\n    application_json: Annotated[\n        str,\n        Field(description="JSON string of LoanApplication.to_dict() output."),\n    ],\n) -> str:\n    """Execute hard-fail business rules against a loan application."""\n    app = json.loads(application_json)\n    rules = _RULES[app.get("loan_type", "conventional")]\n    results: list[dict] = []\n    cs, min_cs = app["credit_score"], rules["min_credit_score"]\n    results.append(RuleResult(\n        rule_name="credit_score",\n        passed=cs >= min_cs,\n        severity="hard_fail",\n        actual=cs,\n        threshold=min_cs,\n    ).to_dict())\n    return json.dumps(results, indent=2)',
            language: "python",
            filename: "validation_rules.py",
            explanation:
              "The @tool decorator reads type annotations and docstrings to build a JSON schema. No boilerplate — just annotated Python functions.",
          },
          {
            code: 'import os\nfrom azure.ai.projects import AIProjectClient\nfrom azure.core.credentials import AzureKeyCredential\nfrom agent_framework import Agent\nfrom agent_framework.azure import AzureOpenAIResponsesClient\n\nclass OrchestratorAgent:\n    def __init__(self) -> None:\n        project_client = AIProjectClient(\n            endpoint=os.environ["AZURE_AI_PROJECT_ENDPOINT"],\n            credential=AzureKeyCredential(os.environ["AZURE_AI_API_KEY"]),\n        )\n        self._agent: Agent = AzureOpenAIResponsesClient(\n            project_client=project_client.get_openai_client(),\n            deployment_name="Kimi-K2-Thinking",\n        ).as_agent(\n            name="LoanValidatorOrchestrator",\n            instructions=_SYSTEM_INSTRUCTIONS,\n            tools=[run_hard_checks, run_soft_checks, lookup_policy_notes],\n        )',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "AzureKeyCredential with API key — no az login required. as_agent() creates the Agent with tools wired automatically.",
          },
          {
            code: 'from a2a.server.agent_execution import AgentExecutor, RequestContext\nfrom a2a.server.apps import A2AStarletteApplication\nfrom a2a.server.events import EventQueue\nfrom a2a.types import AgentCard, AgentSkill, AgentCapabilities\n\nclass LoanValidatorExecutor(AgentExecutor):\n    def __init__(self) -> None:\n        self._agent = OrchestratorAgent()\n\n    async def execute(self, context: RequestContext, event_queue: EventQueue) -> None:\n        updater = TaskUpdater(event_queue, context.task_id, context.context_id)\n        await updater.submit()\n        await updater.start_work()\n        report = self._agent.validate(app)\n        await updater.add_message(new_agent_text_response(str(report)))\n        await updater.complete()\n\ncard = AgentCard(\n    name="LoanValidatorOrchestrator",\n    url="http://localhost:10008/",\n    version="1.0.0",\n    capabilities=AgentCapabilities(streaming=False),\n    skills=[AgentSkill(id="validate_loan", name="Validate Loan Application")],\n)',
            language: "python",
            filename: "server.py",
            explanation:
              "Same A2A server pattern as Lesson 06. The LoanValidatorExecutor wraps the OrchestratorAgent with the AgentExecutor interface.",
          },
          {
            code: 'import asyncio, httpx\nfrom a2a.client import A2ACardResolver, A2AClient\nfrom a2a.types import MessageSendParams, SendMessageRequest\nfrom uuid import uuid4\n\nSERVER_URL = "http://localhost:10008"\n\nasync def validate_applicant(applicant_id: str) -> str:\n    async with httpx.AsyncClient(timeout=120.0) as hc:\n        resolver = A2ACardResolver(httpx_client=hc, base_url=SERVER_URL)\n        card = await resolver.get_agent_card()\n        client = A2AClient(httpx_client=hc, agent_card=card)\n        req = SendMessageRequest(\n            id=str(uuid4()),\n            params=MessageSendParams(**{\n                "message": {\n                    "role": "user",\n                    "parts": [{"kind": "text", "text": f"Validate {applicant_id}"}],\n                    "messageId": uuid4().hex,\n                }\n            })\n        )\n        resp = await client.send_message(req)\n        return str(resp)',
            language: "python",
            filename: "client.py",
            explanation:
              "The same A2A client from Lesson 07 — but pointing at port 10008. The client has no idea it is talking to Microsoft Agent Framework.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Lesson 08 Example",
          steps: [
            {
              title: "Clone and navigate",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a",
            },
            {
              title: "Create virtual environment",
              code: "python -m venv .venv\n.venv/Scripts/activate   # Windows\nsource .venv/bin/activate  # macOS/Linux",
            },
            {
              title: "Install Microsoft Agent Framework",
              code: 'pip install "agent-framework" "agent-framework-azure-ai" --pre\npip install "azure-ai-projects" "azure-core" "azure-identity"',
            },
            {
              title: "Set credentials in .env",
              code: "AZURE_AI_PROJECT_ENDPOINT=https://<name>.services.ai.azure.com/api/projects/<proj>\nAZURE_AI_API_KEY=<your-key>\nAZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking",
            },
            {
              title: "Run the interactive scenario",
              code: "python scripts/lesson_08.py",
            },
            {
              title: "Start the A2A server",
              code: "cd lessons/08-microsoft-agent-framework/src\npython server.py",
            },
            {
              title: "Run the A2A client (new terminal)",
              code: "cd lessons/08-microsoft-agent-framework/src\npython client.py",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In lessons 05 through 07 we built and consumed an A2A server using the A2A SDK directly. Now we step up to our first orchestration framework — Microsoft Agent Framework.",
        },
        {
          time: 20,
          speaker: "Instructor",
          text: "Microsoft Agent Framework is a Python and .NET library for building agents that use tool calling, middleware, and multiple LLM providers. It ships a first-class A2A integration and supports Azure AI Foundry out of the box.",
        },
        {
          time: 45,
          speaker: "Instructor",
          text: "The example we are building is a loan application pre-screening validator. This is a genuinely hard validation problem because it has clear deterministic rules layered with exception handling that requires reasoning.",
        },
        {
          time: 70,
          speaker: "Instructor",
          text: "Let us start with the data model. A LoanApplication holds the applicant's credit score, income, loan amount, property value, employment history, and derogatory marks.",
        },
        {
          time: 95,
          speaker: "Instructor",
          text: "Next we write three tool functions. The @tool decorator from agent_framework handles function signature parsing, Pydantic validation, and tool schema generation automatically.",
        },
        {
          time: 120,
          speaker: "Instructor",
          text: "run_hard_checks enforces the non-negotiable rules: minimum credit score, DTI limit, maximum LTV, employment history, and derogatory mark count. Pure Python — no LLM involved.",
        },
        {
          time: 150,
          speaker: "Instructor",
          text: "run_soft_checks flags advisory items: credit score band, income adequacy, down-payment size, and first-time buyer programme eligibility.",
        },
        {
          time: 175,
          speaker: "Instructor",
          text: "The third tool, lookup_policy_notes, calls QAAgent on port 10001 via A2A. If QAAgent is not running it falls back to a local policy memo. This demonstrates cross-framework A2A calls.",
        },
        {
          time: 205,
          speaker: "Instructor",
          text: "Now the OrchestratorAgent. We create an AIProjectClient with AzureKeyCredential — no az login required. Then build an AzureOpenAIResponsesClient targeting Kimi-K2-Thinking and call as_agent with our three tools.",
        },
        {
          time: 240,
          speaker: "Instructor",
          text: "The validate method is the core pipeline. Step one: run hard and soft checks directly. Step two: build a structured prompt. Step three: call the agent. Step four: parse the JSON verdict.",
        },
        {
          time: 275,
          speaker: "Instructor",
          text: "Watch what happens with applicant three — Carol Martinez. FHA loan, credit score 612 clears the 580 threshold. LTV 96.5 percent — that is the FHA maximum for her credit band.",
        },
        {
          time: 300,
          speaker: "Instructor",
          text: "Her DTI is 41 percent under the 43 percent limit. Her one derogatory mark is a medical collection that is fully discharged — FHA excludes resolved medical collections.",
        },
        {
          time: 320,
          speaker: "Instructor",
          text: "All four exceptions apply. A standard rule engine would reject her. Kimi-K2-Thinking reasons through the exceptions and returns NEEDS_REVIEW with three specific conditions.",
        },
        {
          time: 345,
          speaker: "Instructor",
          text: "Not approved — there are conditions to verify. Not declined — all hard rules pass under FHA. The verdict is defensible and fully documented.",
        },
        {
          time: 365,
          speaker: "Instructor",
          text: "Now we wrap it in a LoanValidatorExecutor and start an A2A server on port 10008. Our client uses the same A2ACardResolver and A2AClient from Lesson 07 — but this time pointing at port 10008.",
        },
        {
          time: 395,
          speaker: "Instructor",
          text: "The response comes back through the A2A protocol — a full ValidationReport. The client has no idea it is talking to Microsoft Agent Framework or Kimi-K2-Thinking.",
        },
        {
          time: 420,
          speaker: "Instructor",
          text: "And the server's lookup_policy_notes tool calls QAAgent on port 10001 via A2A. An A2A client calling one server which calls another — true agent-to-agent communication.",
        },
        {
          time: 455,
          speaker: "Instructor",
          text: "That is cross-framework interoperability in action. The framework you choose is invisible to consumers of the A2A interface. In lesson 09 we switch to Google's Agent Development Kit.",
        },
      ],
      qa: [
        {
          question:
            "Why run the hard checks in Python rather than letting the LLM evaluate the rules?",
          answer:
            "Deterministic rules should be deterministic. Running them in pure Python guarantees identical results on every call, is auditable, orders of magnitude faster, and costs nothing in tokens. The LLM reasons about the interaction between rule results.",
        },
        {
          question: "What does the @tool decorator actually do?",
          answer:
            "It reads the function's type annotations and docstring to build a JSON schema for the model. When the model calls the tool, the framework validates arguments, invokes the function, and returns the result as a tool message.",
        },
        {
          question: "Why AzureKeyCredential instead of DefaultAzureCredential?",
          answer:
            "DefaultAzureCredential requires az login or managed identity. AzureKeyCredential uses a plain API key from the .env file, which works anywhere. For production, prefer managed identity.",
        },
        {
          question: "What happens if the QAAgent on port 10001 is not running?",
          answer:
            "The lookup_policy_notes tool catches the connection error and falls back to a local policy memo dictionary. All three applicants can be validated without starting the Lesson 06 server.",
        },
        {
          question:
            "What causes an application to receive NEEDS_REVIEW instead of APPROVED?",
          answer:
            "NEEDS_REVIEW is emitted when all hard-rule checks pass but one or more soft-rule conditions cannot be automatically confirmed — typically requiring a human underwriter to verify physical documents or external programme approvals.",
        },
        {
          question: "How is cross-framework interoperability achieved?",
          answer:
            "The OrchestratorAgent is wrapped in A2AStarletteApplication. From the outside it responds to the same JSON-RPC messages and advertises via an Agent Card. Any A2A client can call it without Microsoft AF code.",
        },
      ],
      tags: [
        "microsoft-agent-framework",
        "kimi-k2-thinking",
        "azure-ai-foundry",
        "orchestration",
        "tool-calling",
      ],
    },

    // ── 9. Google ADK ────────────────────────────────────────────────────
    {
      slug: "google-adk",
      title: "A2A with Google ADK",
      type: "video",
      duration: "7 mins",
      videoId: "placeholder-google-adk",
      description:
        "Build a loan-validation agent with Google ADK and expose it as an A2A server using the to_a2a() one-liner — the simplest A2A integration of any framework. Uses LiteLlm to run Azure-hosted Kimi-K2 without any Google Cloud dependency.",
      objectives: [
        "Build an LlmAgent using Google Agent Development Kit with custom FunctionTool wrappers",
        "Configure LiteLlm to run Azure-hosted Kimi-K2 (no Vertex AI or Google Cloud required)",
        "Expose the agent as an A2A server with the to_a2a() one-liner",
        "Compare manual A2A wiring (Lesson 08) vs to_a2a() auto-configuration",
        "Connect via a standard A2A client — discover, query, extract response",
        "Understand ADK multi-agent patterns: SequentialAgent, ParallelAgent, RemoteA2aAgent",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/09-google-adk",
      infoBoxes: [
        {
          title: "Install Google ADK with A2A Support",
          content:
            'This lesson requires Google ADK with A2A extras plus LiteLlm for Azure model access:\n\npip install "google-adk[a2a]" litellm\n\nSet credentials in _examples/.env: AZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2',
        },
      ],
      noteBoxes: [
        {
          title: "No Vertex AI Required",
          content:
            "Google ADK defaults to Gemini models via Vertex AI, but the LiteLlm model adapter lets you use any LLM provider. In this lesson we configure Azure-hosted Kimi-K2 — zero Google Cloud dependencies.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    Common["_common/src/<br/>loan_data + validation_rules"] --> T1["run_hard_checks()<br/>FunctionTool"]\n    Common --> T2["run_soft_checks()<br/>FunctionTool"]\n    T1 --> Agent["LoanValidatorADK<br/>LlmAgent + LiteLlm<br/>(Azure Kimi-K2)"]\n    T2 --> Agent\n    Agent -->|"to_a2a()"| Server["A2A Server<br/>port 10002"]\n    Server --> Card["Agent Card<br/>/.well-known/agent-card.json"]\n    Server --> RPC["JSON-RPC<br/>POST /"]\n    Client["A2A Client"] -->|"discover"| Card\n    Client -->|"SendMessage"| RPC',
          caption:
            "LoanValidator ADK architecture — FunctionTool wrappers run validation, to_a2a() exposes the full A2A server",
          alt: "Diagram showing shared validation data feeding tools into LlmAgent, exposed via to_a2a()",
        },
        {
          chart:
            'graph LR\n    subgraph Manual["Lesson 08 — Manual Wiring"]\n        M1["AgentExecutor"] --> M2["DefaultRequestHandler"]\n        M2 --> M3["A2AStarletteApplication"]\n        M3 --> M4["AgentCard (manual)"]\n        M3 --> M5["InMemoryTaskStore"]\n    end\n    subgraph Auto["Lesson 09 — to_a2a()"]\n        A1["LlmAgent"] -->|"one line"| A2["to_a2a(agent, port=N)"]\n        A2 --> A3["Auto AgentCard"]\n        A2 --> A4["Auto TaskStore"]\n        A2 --> A5["Auto Runner"]\n    end',
          caption:
            "Manual A2A wiring (Lesson 08) requires ~50 lines of boilerplate; to_a2a() (Lesson 09) auto-generates everything",
          alt: "Side-by-side comparison showing 5 manual components vs single to_a2a() call",
        },
      ],
      codePreview: {
        title: "Google ADK Components",
        segments: [
          {
            code: 'from google.adk.agents import LlmAgent\nfrom google.adk.models.lite_llm import LiteLlm\nfrom google.adk.tools import FunctionTool\n\ndef run_hard_checks(application_json: str) -> str:\n    """Run deterministic validation rules on a loan application."""\n    app = json.loads(application_json)\n    findings = []\n    if app["credit_score"] < RULES["min_credit_score"]:\n        findings.append(\n            f"Credit score {app[\'credit_score\']} below minimum {RULES[\'min_credit_score\']}"\n        )\n    return json.dumps({"passed": len(findings) == 0, "findings": findings})\n\nagent = LlmAgent(\n    name="LoanValidatorADK",\n    description="Pre-screens residential mortgage loan applications...",\n    model=LiteLlm(model="azure/Kimi-K2"),\n    instruction=SYSTEM_INSTRUCTION,\n    tools=[\n        FunctionTool(func=run_hard_checks),\n        FunctionTool(func=run_soft_checks),\n    ],\n)',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "LlmAgent with LiteLlm adapter — uses Azure-hosted Kimi-K2 without any Google Cloud dependency. FunctionTool auto-discovers schemas from type hints.",
          },
          {
            code: 'from google.adk.a2a.utils.agent_to_a2a import to_a2a\nfrom orchestrator import agent\nimport uvicorn\n\n# One call turns any ADK agent into a full A2A server\napp = to_a2a(\n    agent,\n    host="localhost",\n    port=10002,\n)\n\nif __name__ == "__main__":\n    uvicorn.run(app, host="0.0.0.0", port=10002)',
            language: "python",
            filename: "server.py",
            explanation:
              "The hero line: to_a2a() auto-generates Agent Card, JSON-RPC handler, task store, and runner — all from the agent definition.",
          },
          {
            code: 'from a2a.client import A2ACardResolver, A2AClient\nfrom a2a.types import MessageSendParams, SendMessageRequest\nimport httpx\n\nasync def query_agent(query, base_url):\n    async with httpx.AsyncClient(timeout=120) as hc:\n        resolver = A2ACardResolver(httpx_client=hc, base_url=base_url)\n        card = await resolver.get_agent_card()\n        client = A2AClient(httpx_client=hc, agent_card=card)\n        request = SendMessageRequest(\n            id="req-001",\n            params=MessageSendParams(**{"message": {\n                "role": "user",\n                "parts": [{"kind": "text", "text": query}],\n                "messageId": "msg-001",\n            }})\n        )\n        response = await client.send_message(request)',
            language: "python",
            filename: "client.py",
            explanation:
              "Same A2A client from Lesson 07 — it does not know this is Google ADK underneath. The protocol abstracts the framework.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Lesson 09 Example",
          steps: [
            {
              title: "Clone the examples repository",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a/lessons/09-google-adk",
            },
            {
              title: "Set up the virtual environment",
              code: "cd ../../\npython -m venv .venv\n.venv/Scripts/Activate.ps1    # Windows\npip install -r requirements.txt",
            },
            {
              title: "Configure environment variables",
              code: "# Copy and edit _examples/.env\nAZURE_OPENAI_ENDPOINT=https://<resource>.openai.azure.com\nAZURE_AI_API_KEY=<your-key>\nAZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2",
            },
            {
              title: "Start the A2A server",
              code: "cd lessons/09-google-adk/src\npython server.py",
            },
            {
              title: "Run the A2A client (separate terminal)",
              code: "cd lessons/09-google-adk/src\npython client.py",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In this lesson we build a loan-validation agent with Google's Agent Development Kit and expose it as an A2A server.",
        },
        {
          time: 12,
          speaker: "Instructor",
          text: "The key highlight is ADK's to_a2a() function — a single line that turns any ADK agent into a standards-compliant A2A server, complete with Agent Card, JSON-RPC endpoint, task store, and session management.",
        },
        {
          time: 30,
          speaker: "Instructor",
          text: "We import loan_data and validation_rules from _common — the same data and rules used in Lesson 08. Three test applicants: Alice Chen, Bob Kwan, and Carol Martinez.",
        },
        {
          time: 48,
          speaker: "Instructor",
          text: "Two FunctionTool wrappers provide the validation logic. run_hard_checks applies credit score floors, DTI limits, derogatory marks. run_soft_checks flags advisory factors.",
        },
        {
          time: 65,
          speaker: "Instructor",
          text: "We use Google ADK's LlmAgent class. The model is Kimi-K2 running on Azure via the LiteLlm adapter — zero Google Cloud dependency.",
        },
        {
          time: 80,
          speaker: "Instructor",
          text: "We wrap check functions as FunctionTools. ADK discovers parameter names and docstrings automatically — no manual schema.",
        },
        {
          time: 95,
          speaker: "Instructor",
          text: "The system instruction tells the agent to run hard checks first, then soft checks, and synthesise a structured ValidationReport with an approval verdict.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "Now for the server. In Lesson 08 we wrote about 50 lines. Here, app equals to_a2a() passing our agent, host and port. That is it.",
        },
        {
          time: 135,
          speaker: "Instructor",
          text: "to_a2a auto-generates the Agent Card from the agent's name, description, and tools. It creates a Runner, session service, task store — everything.",
        },
        {
          time: 155,
          speaker: "Instructor",
          text: "Let us see this in action. Starting the server — LoanValidatorADK on port 10002. Hitting the Agent Card endpoint shows the auto-generated card.",
        },
        {
          time: 175,
          speaker: "Instructor",
          text: "Same A2A client from Lesson 07. We discover the agent, send Alice Chen's application. Response: hard checks pass, verdict APPROVED.",
        },
        {
          time: 195,
          speaker: "Instructor",
          text: "Bob Kwan — credit score 545, DTI 0.58. Hard checks fail immediately. Verdict DECLINED.",
        },
        {
          time: 215,
          speaker: "Instructor",
          text: "ADK also has RemoteA2aAgent — a proxy that wraps any A2A server as a sub-agent. SequentialAgent, ParallelAgent, and LoopAgent compose local and remote agents.",
        },
        {
          time: 235,
          speaker: "Instructor",
          text: "Compare: QAAgent on 10001 with raw SDK, LoanValidatorADK on 10002 with ADK, LoanValidatorOrchestrator on 10008 with Microsoft AF. Three frameworks, one protocol.",
        },
        {
          time: 255,
          speaker: "Instructor",
          text: "Google ADK's LlmAgent and to_a2a() is the simplest path from agent to A2A server. FunctionTool auto-discovers schemas. LiteLlm makes any model work.",
        },
        {
          time: 275,
          speaker: "Instructor",
          text: "In the next lesson, we integrate LangGraph with A2A.",
        },
      ],
      qa: [
        {
          question: "Why use LiteLlm instead of using Gemini directly?",
          answer:
            "LiteLlm is a model-agnostic adapter that lets ADK agents work with any LLM provider (Azure, OpenAI, Anthropic) without Vertex AI or Google Cloud dependencies.",
        },
        {
          question: "What does to_a2a() generate automatically?",
          answer:
            "to_a2a() creates: Agent Card with metadata, Runner with session/artifact services, task store, A2aAgentExecutor, and a Starlette application with all routes wired.",
        },
        {
          question:
            "How does FunctionTool differ from Microsoft AF's @tool decorator?",
          answer:
            "Both wrap Python functions as agent-callable tools. ADK's FunctionTool reads type annotations at construction time. Microsoft AF's @tool uses Pydantic Field metadata. Functionally equivalent.",
        },
        {
          question: "Can ADK agents call other A2A servers?",
          answer:
            "Yes, via RemoteA2aAgent. You compose these into SequentialAgent or ParallelAgent pipelines, mixing local and remote agents seamlessly.",
        },
        {
          question: "Where does the loan validation data come from?",
          answer:
            "Shared data from _common/src/ — loan_data.py provides three synthetic applicant profiles. validation_rules.py defines the deterministic thresholds. This data is reused across all framework lessons (08-13).",
        },
      ],
      tags: [
        "google-adk",
        "litellm",
        "kimi-k2",
        "to-a2a",
        "function-tool",
        "loan-validation",
      ],
    },

    // ── 10. LangGraph ──────────────────────────────────────────────────
    {
      slug: "langgraph",
      title: "A2A with LangGraph",
      type: "video",
      duration: "10 mins",
      videoId: "placeholder-langgraph",
      description:
        "Build a loan-validation agent with LangGraph's create_react_agent and AzureChatOpenAI, then expose it as an A2A server using manual AgentExecutor wiring. Demonstrates the ReAct loop for automatic multi-step tool calling with Kimi-K2 via Azure AI Foundry.",
      objectives: [
        "Build a ReAct agent using LangGraph's create_react_agent with @langchain_tool decorators",
        "Connect to Azure-hosted Kimi-K2 via AzureChatOpenAI",
        "Wire the LangGraph agent to A2A using manual AgentExecutor + A2AStarletteApplication",
        "Compare the ReAct loop (automatic multi-step) vs linear execution (Lesson 08)",
        "Demonstrate framework interoperability — same A2A client works for all servers",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/10-langgraph",
      infoBoxes: [
        {
          title: "Install LangGraph + LangChain Packages",
          content:
            "This lesson requires LangGraph and LangChain's Azure OpenAI integration:\n\npip install langgraph langchain-openai langchain-core\n\nSet credentials in _examples/.env: AZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2",
        },
      ],
      noteBoxes: [
        {
          title: "Automatic Multi-Step Tool Calling",
          content:
            "LangGraph's create_react_agent implements the ReAct (Reasoning + Acting) pattern. Unlike Lesson 08 where tool calls are sequenced manually, the ReAct agent autonomously decides which tools to call and in what order.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    Common["_common/src/<br/>loan_data + validation_rules"] --> T1["run_hard_checks()<br/>@langchain_tool"]\n    Common --> T2["run_soft_checks()<br/>@langchain_tool"]\n    Common --> T3["lookup_policy_notes()<br/>@langchain_tool"]\n    T1 --> Agent["OrchestratorAgent<br/>create_react_agent<br/>AzureChatOpenAI → Kimi-K2"]\n    T2 --> Agent\n    T3 --> Agent\n    Agent --> Exec["LoanValidatorExecutor<br/>(AgentExecutor)"]\n    Exec --> Server["A2AStarletteApplication<br/>port 10003"]\n    Server --> Card["Agent Card"]\n    Server --> RPC["JSON-RPC"]',
          caption:
            "LoanValidator architecture — @langchain_tool wrappers feed into a ReAct agent, manually wired to A2A",
          alt: "Diagram showing three LangChain tools feeding into create_react_agent, wired to A2A server via AgentExecutor",
        },
        {
          chart:
            'graph LR\n    Think["Think<br/>(Kimi-K2)"] --> Act["Act<br/>(Tool Call)"]\n    Act --> Observe["Observe<br/>(Tool Result)"]\n    Observe --> Think\n    Observe --> Answer["Final Answer"]',
          caption:
            "ReAct loop — the agent thinks, acts, observes, and repeats until it has enough information",
          alt: "Circular flow diagram showing Think, Act, Observe stages with a branch to Final Answer",
        },
      ],
      codePreview: {
        title: "LangGraph A2A Components",
        segments: [
          {
            code: 'from langchain_core.tools import tool as langchain_tool\nfrom lessons._common.src.loan_data import APPLICANTS\nfrom lessons._common.src.validation_rules import RULES\n\n@langchain_tool\ndef lc_run_hard_checks(application_json: str) -> str:\n    """Execute hard-fail business rules against a loan application."""\n    return run_hard_checks(application_json)\n\n@langchain_tool\ndef lc_run_soft_checks(application_json: str) -> str:\n    """Run advisory (non-blocking) checks on a loan application."""\n    return run_soft_checks(application_json)\n\n@langchain_tool\ndef lc_lookup_policy_notes(applicant_name: str) -> str:\n    """Return any policy notes or special considerations."""\n    return lookup_policy_notes(applicant_name)',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "@langchain_tool decorator turns plain Python functions into agent-callable tools. Three tools for hard checks, soft checks, and policy lookup.",
          },
          {
            code: 'from langchain_openai import AzureChatOpenAI\nfrom langgraph.prebuilt import create_react_agent\n\nclass OrchestratorAgent:\n    def __init__(self):\n        self._llm = AzureChatOpenAI(\n            azure_endpoint=endpoint, api_key=api_key,\n            azure_deployment=deployment)\n        self._graph = create_react_agent(\n            self._llm,\n            tools=[lc_run_hard_checks, lc_run_soft_checks,\n                   lc_lookup_policy_notes])\n\n    async def validate(self, application):\n        result = await self._graph.ainvoke(\n            {"messages": [("system", _SYSTEM_INSTRUCTIONS),\n                          ("human", prompt)]})\n        raw_text = result["messages"][-1].content',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "create_react_agent compiles a ReAct graph. The agent autonomously decides which tools to call based on observations.",
          },
          {
            code: "from a2a.server.apps import A2AStarletteApplication\nfrom a2a.server.request_handlers import DefaultRequestHandler\nfrom a2a.server.tasks import InMemoryTaskStore\n\nclass LoanValidatorExecutor(AgentExecutor):\n    async def execute(self, context, event_queue):\n        query = context.get_user_message()\n        agent = OrchestratorAgent()\n        result = await agent.validate(query)\n        await event_queue.enqueue_event(agent_text_event(result))\n\nhandler = DefaultRequestHandler(\n    agent_executor=LoanValidatorExecutor(),\n    task_store=InMemoryTaskStore())\n\napp = A2AStarletteApplication(\n    agent_card=agent_card, http_handler=handler)",
            language: "python",
            filename: "server.py",
            explanation:
              "Same manual A2A wiring pattern as Lesson 08 — AgentExecutor + DefaultRequestHandler + A2AStarletteApplication on port 10003.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Lesson 10 Example",
          steps: [
            {
              title: "Clone the examples repository",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a/lessons/10-langgraph",
            },
            {
              title: "Set up the virtual environment",
              code: "cd ../../\npython -m venv .venv\n.venv/Scripts/Activate.ps1\npip install -r requirements.txt",
            },
            {
              title: "Configure environment variables",
              code: "# _examples/.env\nAZURE_OPENAI_ENDPOINT=https://<resource>.openai.azure.com\nAZURE_AI_API_KEY=<your-key>\nAZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2",
            },
            {
              title: "Start the A2A server",
              code: "cd lessons/10-langgraph/src\npython server.py",
            },
            {
              title: "Run the A2A client",
              code: "cd lessons/10-langgraph/src\npython client.py",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "In this lesson we build a loan-validation agent with LangGraph and expose it as an A2A server. LangGraph brings ReAct — automatic multi-step tool calling — to the same loan validation problem.",
        },
        {
          time: 15,
          speaker: "Instructor",
          text: "The key difference from Lesson 08: instead of sequencing tool calls manually, LangGraph's create_react_agent decides autonomously which tools to call and in what order.",
        },
        {
          time: 30,
          speaker: "Instructor",
          text: "Same shared data as before. Three applicants: Alice, Bob, and Carol. Same hard checks, same soft checks, same expected verdicts.",
        },
        {
          time: 45,
          speaker: "Instructor",
          text: "We wrap the validation functions with @langchain_tool. Three tools: run_hard_checks, run_soft_checks, and lookup_policy_notes.",
        },
        {
          time: 60,
          speaker: "Instructor",
          text: "The model is Kimi-K2 running on Azure AI Foundry via AzureChatOpenAI. Same credentials as Lesson 08 — just a different LangChain adapter.",
        },
        {
          time: 75,
          speaker: "Instructor",
          text: "Now the OrchestratorAgent. We call create_react_agent, passing the LLM and three tools. That gives us a compiled graph implementing the full ReAct loop.",
        },
        {
          time: 95,
          speaker: "Instructor",
          text: "ReAct stands for Reasoning plus Acting. The agent thinks about what to do, calls a tool, observes the result, and repeats. It might skip tools that are not needed.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "The A2A server uses the same manual wiring as Lesson 08. LoanValidatorExecutor implements AgentExecutor. DefaultRequestHandler routes requests. A2AStarletteApplication serves on port 10003.",
        },
        {
          time: 135,
          speaker: "Instructor",
          text: "Let us test it. Starting the server. Sending Alice Chen — ReAct agent calls hard checks first, sees passes, calls soft checks, produces verdict APPROVED.",
        },
        {
          time: 155,
          speaker: "Instructor",
          text: "Bob Kwan. Hard checks fail on credit score and DTI. The agent sees the failures and skips soft checks — the ReAct advantage.",
        },
        {
          time: 175,
          speaker: "Instructor",
          text: "Carol Martinez. Hard checks pass with flags, soft checks note the resolved medical collection. Agent calls lookup_policy_notes. Verdict: NEEDS_REVIEW.",
        },
        {
          time: 195,
          speaker: "Instructor",
          text: "The same A2A client from Lesson 07 works here too. The protocol abstracts the framework completely.",
        },
        {
          time: 210,
          speaker: "Instructor",
          text: "Comparing the three agents: QAAgent on 10001 with raw SDK. LoanValidatorOrchestrator on 10008 with Microsoft AF. LoanValidatorLangGraph on 10003 with LangGraph. One protocol, identical client code.",
        },
        {
          time: 240,
          speaker: "Instructor",
          text: "LangGraph's create_react_agent automates tool selection. @langchain_tool wraps plain Python functions. AzureChatOpenAI connects to Kimi-K2.",
        },
        {
          time: 260,
          speaker: "Instructor",
          text: "The A2A wiring is the same manual pattern as Lesson 08. In the next lesson, we switch to CrewAI and its role-based delegation model.",
        },
      ],
      qa: [
        {
          question:
            "Why combine LangGraph with A2A instead of just using LangGraph alone?",
          answer:
            "LangGraph excels at stateful, multi-step reasoning with checkpointing. Adding A2A lets other agents invoke your LangGraph workflow as a black-box agent with progress updates via streaming.",
        },
        {
          question:
            "How does create_react_agent differ from manual tool sequencing in Lesson 08?",
          answer:
            "In Lesson 08, the system instruction sequences tools in a fixed order. With create_react_agent, the agent autonomously decides which tools to call based on observations — it might skip tools that are not needed.",
        },
        {
          question: "Why use manual A2A wiring instead of a bridge package?",
          answer:
            "The manual pattern (AgentExecutor + DefaultRequestHandler + A2AStarletteApplication) works with any Python agent. It gives you full control over how agent output maps to A2A responses.",
        },
        {
          question: "What is the ReAct pattern?",
          answer:
            "ReAct (Reasoning + Acting) is an agent loop: think, act (call tool), observe (read result), repeat until the agent has enough information to answer. LangGraph implements this with checkpointing and streaming.",
        },
      ],
      tags: [
        "langgraph",
        "react-agent",
        "kimi-k2",
        "azurechatopenai",
        "langchain-tools",
        "loan-validation",
      ],
    },

    // ── 11. CrewAI ───────────────────────────────────────────────────────
    {
      slug: "crewai",
      title: "A2A with CrewAI",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-crewai",
      description:
        "Build a loan validation crew using CrewAI's role-based agent model — a Compliance Analyst runs checks while a Senior Underwriter synthesises the verdict. The entire crew is wrapped as a single A2A endpoint powered by Kimi-K2-Thinking.",
      objectives: [
        "Define CrewAI agents with roles, goals, and tool classes (BaseTool subclasses)",
        "Create tasks with expected output specifications and agent assignments",
        "Compose a Crew with sequential process execution",
        "Build a CrewAIExecutor to wrap the Crew as an A2A server",
        "Compare CrewAI's role-based approach to other frameworks in the course",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/11-crewai",
      infoBoxes: [
        {
          title: "Install CrewAI",
          content:
            "This lesson requires CrewAI with LiteLLM support for Azure models:\n\npip install crewai crewai-tools litellm\n\nSet credentials in _examples/.env: AZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking",
        },
      ],
      noteBoxes: [
        {
          title: "CrewAI Model Routing via LiteLLM",
          content:
            "CrewAI uses LiteLLM under the hood for model routing. To use Azure-hosted Kimi-K2-Thinking, set your environment variables and use the model string azure/<deployment-name>. CrewAI handles the rest.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    Input["User Request"] --> Analyst["Compliance Analyst<br/>(CrewAgent + tools)"]\n    Analyst -->|"checks done"| Underwriter["Senior Underwriter<br/>(CrewAgent + policy lookup)"]\n    Underwriter --> Verdict["Final Verdict"]\n    subgraph Crew["Sequential Crew"]\n        Analyst\n        Underwriter\n    end',
          caption:
            "CrewAI sequential process — Compliance Analyst runs checks, then Senior Underwriter synthesises the verdict",
          alt: "Flow diagram showing user request passing through two agents in a sequential crew",
        },
        {
          chart:
            'graph TB\n    Client["A2A Client"] -->|A2A protocol| LV["LoanValidatorCrewAI<br/>CrewAI + Kimi-K2-Thinking<br/>:10004"]\n    subgraph Crew["Sequential Crew"]\n        A1["Compliance Analyst<br/>(HardCheckTool + SoftCheckTool)"]\n        A2["Senior Underwriter<br/>(PolicyLookupTool)"]\n        A1 -->|checks done| A2\n    end\n    LV --> A1\n    A2 --> Verdict["Final Verdict"]',
          caption:
            "LoanValidatorCrewAI on port 10004 — an A2A endpoint that hides a sequential two-agent crew internally",
          alt: "Architecture diagram showing an A2A client calling the CrewAI server, which routes through Compliance Analyst then Senior Underwriter",
        },
      ],
      codePreview: {
        title: "CrewAI Components",
        segments: [
          {
            code: 'from crewai import Agent as CrewAgent, Crew, Process, Task as CrewTask\nfrom crewai.tools import BaseTool as CrewBaseTool\n\nclass HardCheckTool(CrewBaseTool):\n    name: str = "run_hard_checks"\n    description: str = "Execute hard-fail business rules against a loan application."\n    def _run(self, application_json: str) -> str:\n        return run_hard_checks(application_json)\n\nclass OrchestratorAgent:\n    def __init__(self):\n        self._compliance_analyst = CrewAgent(\n            role="Compliance Analyst",\n            goal="Run all checks against the loan application",\n            tools=[HardCheckTool(), SoftCheckTool()],\n            llm=f"azure/{deployment}")\n        self._underwriter = CrewAgent(\n            role="Senior Underwriter",\n            goal="Synthesise check results into a verdict",\n            tools=[PolicyLookupTool()],\n            llm=f"azure/{deployment}")',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "CrewAI agents with roles, goals, and BaseTool subclasses. Each agent is specialised for its part of the pipeline.",
          },
          {
            code: '    async def validate(self, application):\n        analysis_task = CrewTask(\n            description=f"Analyse this loan application: {app_json}",\n            expected_output="Hard-check and soft-check results",\n            agent=self._compliance_analyst)\n        verdict_task = CrewTask(\n            description="Synthesise the analysis into a final verdict",\n            expected_output="JSON verdict with decision and justification",\n            agent=self._underwriter)\n\n        crew = Crew(\n            agents=[self._compliance_analyst, self._underwriter],\n            tasks=[analysis_task, verdict_task],\n            process=Process.sequential)\n        result = crew.kickoff()',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "Sequential Crew — Analyst runs first, then Underwriter. Tasks describe what each agent should do in natural language.",
          },
          {
            code: "from a2a.server.agent_execution import AgentExecutor, RequestContext\nfrom a2a.server.events import EventQueue\n\nclass CrewAIExecutor(AgentExecutor):\n    def __init__(self):\n        self.orchestrator = OrchestratorAgent()\n\n    async def execute(self, context: RequestContext,\n                      event_queue: EventQueue):\n        user_text = context.get_user_input()\n        result = await self.orchestrator.validate(user_text)\n        event_queue.enqueue(TaskArtifactUpdateEvent(\n            artifact=Artifact(parts=[TextPart(text=str(result))])))\n        event_queue.enqueue(TaskStatusUpdateEvent(\n            status=TaskStatus(state=TaskState.COMPLETED), final=True))",
            language: "python",
            filename: "server.py",
            explanation:
              "Same AgentExecutor pattern — wrap the crew as a single A2A endpoint. External clients have no visibility into the internal multi-agent structure.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Lesson 11 Example",
          steps: [
            {
              title: "Clone the examples repository",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a/lessons/11-crewai",
            },
            {
              title: "Set up the virtual environment",
              code: "cd ../../\npython -m venv .venv\n.venv/Scripts/Activate.ps1\npip install -r requirements.txt",
            },
            {
              title: "Configure environment variables",
              code: "# _examples/.env\nAZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking",
            },
            {
              title: "Start the A2A server",
              code: "cd lessons/11-crewai/src\npython server.py",
            },
            {
              title: "Run the A2A client",
              code: "cd lessons/11-crewai/src\npython client.py",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "CrewAI takes a different approach to multi-agent systems. Instead of graphs or tool chains, you define agents with roles, goals, and backstories — then assemble them into crews.",
        },
        {
          time: 15,
          speaker: "Instructor",
          text: "In this lesson we build a loan validation crew with two agents: a Compliance Analyst who runs checks, and a Senior Underwriter who synthesises the verdict.",
        },
        {
          time: 32,
          speaker: "Instructor",
          text: "The key insight — external A2A clients see one agent. The crew is opaque. The orchestrator sends an application to port 10004 and gets a verdict back.",
        },
        {
          time: 50,
          speaker: "Instructor",
          text: "CrewAI tools are classes that extend BaseTool. HardCheckTool defines a name, description, and a _run method. Same pattern for SoftCheckTool and PolicyLookupTool.",
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "The Compliance Analyst agent has a role, a goal, and the check tools. The Senior Underwriter has a different role and the policy lookup tool. Each agent is specialised.",
        },
        {
          time: 88,
          speaker: "Instructor",
          text: "Both use Kimi-K2-Thinking via Azure. CrewAI routes to Azure through LiteLLM using the azure slash deployment-name format.",
        },
        {
          time: 105,
          speaker: "Instructor",
          text: "Tasks describe what each agent should do. Expected output keeps agents focused. The Crew uses Process.sequential — Analyst runs first, then Underwriter.",
        },
        {
          time: 125,
          speaker: "Instructor",
          text: "The A2A wrapping — same pattern as every framework lesson. CrewAIExecutor extends AgentExecutor, runs crew.kickoff() and emits events.",
        },
        {
          time: 145,
          speaker: "Instructor",
          text: "Let us start the server. LoanValidatorCrewAI on port 10004. Watch the logs — you see the Compliance Analyst running checks, then control passes to the Senior Underwriter.",
        },
        {
          time: 165,
          speaker: "Instructor",
          text: "The Underwriter reads check results, looks up policies, produces a structured verdict. All inside one A2A call.",
        },
        {
          time: 180,
          speaker: "Instructor",
          text: "Comparing CrewAI to other frameworks. ADK has to_a2a(). LangGraph gives graph-level control. CrewAI gives role-based delegation.",
        },
        {
          time: 200,
          speaker: "Instructor",
          text: "But the A2A wrapping is always manual — AgentExecutor pattern. Only Google ADK's to_a2a avoids this boilerplate.",
        },
        {
          time: 220,
          speaker: "Instructor",
          text: "Each framework has its sweet spot. CrewAI excels when you can describe agent responsibilities in natural language and want built-in delegation.",
        },
        {
          time: 240,
          speaker: "Instructor",
          text: "In the next lesson, we switch to the OpenAI Agents SDK — the most minimal framework in the course.",
        },
      ],
      qa: [
        {
          question:
            "Why use CrewAI's BaseTool classes instead of simple functions?",
          answer:
            "CrewAI tools are Pydantic models with name, description, and _run() method. This gives you type validation, consistent error handling, and automatic schema generation for the LLM.",
        },
        {
          question:
            "What's the difference between sequential and hierarchical process?",
          answer:
            "Sequential runs tasks in order — each agent gets the previous agent's output. Hierarchical introduces a manager agent that dynamically routes tasks. Sequential is predictable; hierarchical is more flexible.",
        },
        {
          question: "Why is opaque execution a good match for A2A?",
          answer:
            "A2A's design principle is that callers do not need to know an agent's internals. CrewAI's multi-agent crew is the perfect example — the client sees one endpoint, whether there is one agent or ten inside.",
        },
        {
          question: "Can you mix models within a CrewAI crew?",
          answer:
            "Yes. Each CrewAgent can use a different model via its llm parameter. You could use a reasoning model for the Underwriter and a faster model for the Analyst.",
        },
      ],
      tags: [
        "crewai",
        "role-based",
        "kimi-k2-thinking",
        "crew",
        "sequential-process",
        "loan-validation",
      ],
    },

    // ── 12. OpenAI Agents SDK ────────────────────────────────────────────
    {
      slug: "openai-agents-sdk",
      title: "A2A with OpenAI Agents SDK",
      type: "video",
      duration: "7 mins",
      videoId: "placeholder-openai-agents",
      description:
        "Build a loan validation agent using the OpenAI Agents SDK with @function_tool decorators, Agent class, and Runner.run() execution. Configured for Azure-hosted models via set_default_openai_client — proving the SDK is not locked to OpenAI.",
      objectives: [
        "Define tools with @function_tool decorator in the Agents SDK",
        "Create an Agent with tools, instructions, and ModelSettings",
        "Execute agent tasks with Runner.run() and extract final_output",
        "Configure the SDK for Azure-hosted models via set_default_openai_client",
        "Wrap the Agents SDK agent as an A2A server with the standard AgentExecutor pattern",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/12-openai-agents-sdk",
      infoBoxes: [
        {
          title: "Install OpenAI Agents SDK",
          content:
            "This lesson requires the OpenAI Agents SDK:\n\npip install openai-agents openai\n\nSet credentials in _examples/.env: AZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME",
        },
      ],
      noteBoxes: [
        {
          title: "The SDK Works with Any OpenAI-Compatible API",
          content:
            "Despite the name, the OpenAI Agents SDK works with any OpenAI-compatible endpoint. Use set_default_openai_client() to redirect all API calls to Azure (or any other provider). The SDK handles tool calling, streaming, and retry logic identically.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    Client["set_default_openai_client<br/>(AsyncAzureOpenAI)"] --> Agent\n    subgraph SDK["OpenAI Agents SDK"]\n        Agent["Agent<br/>name + instructions + tools"]\n        T1["@function_tool<br/>oai_run_hard_checks"]\n        T2["@function_tool<br/>oai_run_soft_checks"]\n        T3["@function_tool<br/>oai_lookup_policy_notes"]\n        Agent --> T1 & T2 & T3\n        Runner["Runner.run(agent, input)"] --> Agent\n    end\n    Runner --> Output["result.final_output"]',
          caption:
            "OpenAI Agents SDK architecture — Agent holds tools, Runner executes the loop, set_default_openai_client redirects to Azure",
          alt: "Diagram showing AsyncAzureOpenAI client feeding into Agent with three function_tool decorators, executed by Runner.run",
        },
      ],
      codePreview: {
        title: "OpenAI Agents SDK Components",
        segments: [
          {
            code: 'from agents import Agent, Runner, function_tool, ModelSettings\nfrom agents import set_default_openai_client\nfrom openai import AsyncAzureOpenAI\n\nset_default_openai_client(AsyncAzureOpenAI(\n    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],\n    api_key=os.environ["AZURE_AI_API_KEY"],\n    api_version="2025-04-01-preview"))\n\n@function_tool\ndef oai_run_hard_checks(application_json: str) -> str:\n    """Execute hard-fail business rules against a loan application."""\n    return run_hard_checks(application_json)\n\n@function_tool\ndef oai_run_soft_checks(application_json: str) -> str:\n    """Execute advisory business rules."""\n    return run_soft_checks(application_json)',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "set_default_openai_client redirects all API calls to Azure. @function_tool generates JSON schemas from type hints and docstrings.",
          },
          {
            code: 'class OrchestratorAgent:\n    def __init__(self):\n        self._agent = Agent(\n            name="LoanValidator",\n            instructions=_SYSTEM_INSTRUCTIONS,\n            tools=[oai_run_hard_checks,\n                   oai_run_soft_checks,\n                   oai_lookup_policy_notes],\n            model=deployment,\n            model_settings=ModelSettings(temperature=0.2))\n\n    async def validate(self, application):\n        prompt = _build_prompt(application, hard, soft)\n        result = await Runner.run(self._agent, input=prompt)\n        raw_text = result.final_output',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "Agent + Runner.run — the entire execution API. Runner handles the tool-calling loop internally. result.final_output is the model's last text response.",
          },
          {
            code: "class OpenAIAgentExecutor(AgentExecutor):\n    def __init__(self):\n        self.orchestrator = OrchestratorAgent()\n\n    async def execute(self, context: RequestContext,\n                      event_queue: EventQueue):\n        user_text = context.get_user_input()\n        event_queue.enqueue(TaskStatusUpdateEvent(\n            status=TaskStatus(state=TaskState.WORKING), final=False))\n        result = await self.orchestrator.validate(user_text)\n        event_queue.enqueue(TaskArtifactUpdateEvent(\n            artifact=Artifact(\n                parts=[TextPart(text=result.final_output)])))\n        event_queue.enqueue(TaskStatusUpdateEvent(\n            status=TaskStatus(state=TaskState.COMPLETED), final=True))",
            language: "python",
            filename: "server.py",
            explanation:
              "Same AgentExecutor pattern as every lesson. The A2A server on port 10005 wraps the Agents SDK agent.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Lesson 12 Example",
          steps: [
            {
              title: "Clone the examples",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a/lessons/12-openai-agents-sdk",
            },
            {
              title: "Set up virtual environment",
              code: "cd ../../\npython -m venv .venv\n.venv/Scripts/Activate.ps1\npip install -r requirements.txt",
            },
            {
              title: "Configure credentials",
              code: "# _examples/.env\nAZURE_OPENAI_ENDPOINT=https://<resource>.openai.azure.com\nAZURE_AI_API_KEY=<your-key>",
            },
            {
              title: "Start the A2A server",
              code: "cd lessons/12-openai-agents-sdk/src\npython server.py",
            },
            {
              title: "Run the A2A client",
              code: "cd lessons/12-openai-agents-sdk/src\npython client.py",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "The OpenAI Agents SDK is the most minimal framework in this course. Three concepts — Agent, tools, and Runner. That is the entire API.",
        },
        {
          time: 15,
          speaker: "Instructor",
          text: "We build a loan validation agent — same domain as CrewAI and LangGraph, so you can directly compare. The difference is how little code you write.",
        },
        {
          time: 30,
          speaker: "Instructor",
          text: "First, model configuration. set_default_openai_client lets you redirect everything to Azure. Pass an AsyncAzureOpenAI client and you are done.",
        },
        {
          time: 48,
          speaker: "Instructor",
          text: "Tools use the @function_tool decorator. Write a regular Python function with type hints — the SDK generates the JSON schema automatically.",
        },
        {
          time: 66,
          speaker: "Instructor",
          text: "Three tools: oai_run_hard_checks, oai_run_soft_checks, and oai_lookup_policy_notes. Each wraps our shared business logic.",
        },
        {
          time: 85,
          speaker: "Instructor",
          text: "The Agent class takes a name, instructions, tools, model, and ModelSettings. Temperature 0.2 keeps outputs deterministic.",
        },
        {
          time: 102,
          speaker: "Instructor",
          text: "Execution is one line — Runner.run takes the agent and input. It handles the tool-calling loop internally. result.final_output is the answer.",
        },
        {
          time: 120,
          speaker: "Instructor",
          text: "The A2A wrapping follows the same pattern. OpenAIAgentExecutor extends AgentExecutor, emits events on the queue.",
        },
        {
          time: 135,
          speaker: "Instructor",
          text: "The SDK also offers handoffs — one agent transferring a conversation to another agent within the SDK. Handoffs are intra-SDK routing; A2A handles cross-framework routing.",
        },
        {
          time: 155,
          speaker: "Instructor",
          text: "Let us test. LoanValidator on port 10005. Submitting an application. Agent calls hard checks, soft checks, policy lookup. Three tool calls, one verdict.",
        },
        {
          time: 175,
          speaker: "Instructor",
          text: "Comparing frameworks — the Agents SDK matches ADK's brevity. @function_tool, Agent, Runner.run — three steps.",
        },
        {
          time: 195,
          speaker: "Instructor",
          text: "CrewAI has four steps. LangGraph three. Microsoft AF needs the most wiring but gives the most control. Choose based on your team's needs.",
        },
        {
          time: 215,
          speaker: "Instructor",
          text: "Next up — Claude Agent SDK patterns. No framework at all — we build the agentic loop manually. It shows what all these frameworks do under the hood.",
        },
      ],
      qa: [
        {
          question:
            "Can the OpenAI Agents SDK really work with non-OpenAI models?",
          answer:
            "Yes. set_default_openai_client() accepts any OpenAI-compatible client — AsyncAzureOpenAI, local Ollama, or any provider implementing the chat completions API.",
        },
        {
          question:
            "What is the difference between handoffs and A2A delegation?",
          answer:
            "Handoffs route between agents within the same SDK process. A2A delegates to agents in separate processes, potentially running different frameworks. Handoffs are intra-SDK; A2A is inter-framework.",
        },
        {
          question: "Why is Runner.run() enough — don't you need a loop?",
          answer:
            "Runner.run() IS the loop. It sends to the model, checks for tool_calls, executes them, appends results, and repeats until done. result.final_output gives you the last text response.",
        },
        {
          question:
            "How does @function_tool differ from other tool decorators?",
          answer:
            "All tool decorators generate JSON schemas from type hints and docstrings. The difference is cosmetic — OpenAI generates OpenAI-format schemas; LangChain generates its own. The end result for the LLM is equivalent.",
        },
      ],
      tags: [
        "openai",
        "agents-sdk",
        "function-tool",
        "runner",
        "azure",
        "loan-validation",
      ],
    },

    // ── 13. Claude Agent SDK ─────────────────────────────────────────────
    {
      slug: "claude-agent-sdk",
      title: "A2A with Claude Agent SDK",
      type: "video",
      duration: "7 mins",
      videoId: "placeholder-claude-agent",
      description:
        "Build an agent using no framework at all — a manual agentic loop with JSON-schema tool definitions, an explicit dispatch table, and conversation memory. Shows what every framework does under the hood. Powered by Kimi-K2-Thinking via Azure AI Foundry.",
      objectives: [
        "Define tools as JSON schemas with explicit parameter specifications",
        "Build a dispatch table mapping tool names to handler functions",
        "Implement the manual agentic loop: send → check tool_calls → execute → repeat",
        "Manage conversation memory with explicit message accumulation",
        "Wrap the manual agent as an A2A server with per-task state",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/13-claude-agent-sdk",
      infoBoxes: [
        {
          title: "Install Dependencies",
          content:
            "This lesson uses the OpenAI SDK for API calls (Kimi-K2-Thinking is OpenAI-compatible). No agent framework needed:\n\npip install openai\n\nSet AZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking in _examples/.env",
        },
      ],
      noteBoxes: [
        {
          title: "Framework Patterns Transfer Across Models",
          content:
            "The lesson applies Anthropic's agent-building patterns: structured JSON-schema tool definitions, explicit tool dispatch, and manual conversation memory management. The actual model is Kimi-K2-Thinking — agent patterns are model-agnostic.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TD\n    Start["User Prompt"] --> Send["Send to LLM<br/>(messages + tools)"]\n    Send --> Check{"finish_reason?"}\n    Check -->|"tool_calls"| Exec["Execute tools via<br/>_TOOL_DISPATCH"]\n    Exec --> Append["Append tool results<br/>to messages"]\n    Append --> Send\n    Check -->|"stop"| Output["Return final text"]',
          caption:
            "Manual agentic loop — iterate until the model stops calling tools (max 6 iterations)",
          alt: "Flowchart showing the agentic loop: send to LLM, check finish reason, execute tools, repeat",
        },
        {
          chart:
            "sequenceDiagram\n    participant User\n    participant Agent as OrchestratorAgent\n    participant LLM as Kimi-K2-Thinking\n    participant Tools as _TOOL_DISPATCH\n    User->>Agent: validate(application)\n    Agent->>LLM: [system, user] + tools\n    LLM-->>Agent: tool_calls: run_hard_checks\n    Agent->>Tools: dispatch(run_hard_checks)\n    Tools-->>Agent: result JSON\n    Agent->>LLM: [system, user, assistant, tool_result]\n    LLM-->>Agent: tool_calls: run_soft_checks\n    Agent->>Tools: dispatch(run_soft_checks)\n    Tools-->>Agent: result JSON\n    Agent->>LLM: [all messages]\n    LLM-->>Agent: Final verdict (stop)",
          caption:
            "Conversation memory grows with each iteration — the model sees the full tool-call history",
          alt: "Sequence diagram showing three rounds of LLM calls with growing conversation history",
          minHeight: "22rem",
        },
      ],
      codePreview: {
        title: "Manual Agentic Loop Components",
        segments: [
          {
            code: '_TOOLS: list[dict] = [\n    {"type": "function", "function": {\n        "name": "run_hard_checks",\n        "description": "Execute hard-fail business rules.",\n        "parameters": {"type": "object", "properties": {\n            "application_json": {"type": "string",\n                "description": "JSON-encoded loan application"}},\n            "required": ["application_json"]}}},\n]\n\n_TOOL_DISPATCH = {\n    "run_hard_checks": lambda a: run_hard_checks(a["application_json"]),\n    "run_soft_checks": lambda a: run_soft_checks(a["application_json"]),\n    "lookup_policy_notes": lambda a: lookup_policy_notes(a["question"]),\n}',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "Raw JSON schemas instead of decorators. The dispatch table maps tool names to handler functions — the simplest possible tool system.",
          },
          {
            code: 'class OrchestratorAgent:\n    async def validate(self, application):\n        messages = [\n            {"role": "system", "content": _SYSTEM_INSTRUCTIONS},\n            {"role": "user", "content": prompt},\n        ]\n        for _ in range(6):  # max iterations\n            response = await self._client.chat.completions.create(\n                model=self._model, messages=messages,\n                tools=_TOOLS, temperature=0.2)\n            choice = response.choices[0]\n            if choice.finish_reason == "tool_calls":\n                messages.append(choice.message.model_dump())\n                for tc in choice.message.tool_calls:\n                    result = _TOOL_DISPATCH[tc.function.name](\n                        json.loads(tc.function.arguments))\n                    messages.append({"role": "tool",\n                        "tool_call_id": tc.id, "content": result})\n                continue\n            raw_text = choice.message.content\n            break',
            language: "python",
            filename: "orchestrator.py",
            explanation:
              "The core loop. Send messages + tools to the LLM. If it returns tool_calls, execute them, append results, and continue. If stop, extract the final text.",
          },
          {
            code: "class ClaudeAgentExecutor(AgentExecutor):\n    def __init__(self):\n        self.agents: dict[str, OrchestratorAgent] = {}\n\n    async def execute(self, context: RequestContext,\n                      event_queue: EventQueue):\n        task_id = context.task_id\n        if task_id not in self.agents:\n            self.agents[task_id] = OrchestratorAgent()\n        agent = self.agents[task_id]\n        user_text = context.get_user_input()\n        result = await agent.validate(user_text)\n        event_queue.enqueue(TaskArtifactUpdateEvent(\n            artifact=Artifact(parts=[TextPart(text=result)])))\n        event_queue.enqueue(TaskStatusUpdateEvent(\n            status=TaskStatus(state=TaskState.COMPLETED), final=True))",
            language: "python",
            filename: "server.py",
            explanation:
              "Per-task agent instances — keyed by task_id so multi-turn conversations reuse the same conversation history. Port 10006.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Lesson 13 Example",
          steps: [
            {
              title: "Clone the examples",
              code: "git clone https://github.com/nilayparikh/tuts-agentic-ai-examples.git\ncd tuts-agentic-ai-examples/a2a/lessons/13-claude-agent-sdk",
            },
            {
              title: "Set up virtual environment",
              code: "cd ../../\npython -m venv .venv\n.venv/Scripts/Activate.ps1\npip install -r requirements.txt",
            },
            {
              title: "Configure credentials",
              code: "# _examples/.env\nAZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY, AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking",
            },
            {
              title: "Start the A2A server",
              code: "cd lessons/13-claude-agent-sdk/src\npython server.py",
            },
            {
              title: "Run the A2A client",
              code: "cd lessons/13-claude-agent-sdk/src\npython client.py",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "This lesson strips away every framework. No CrewAI, no LangGraph, no OpenAI Agents SDK. We build the agentic loop from scratch using just the OpenAI chat completions API.",
        },
        {
          time: 15,
          speaker: "Instructor",
          text: "Why? Because understanding what frameworks do under the hood makes you better at using them. Every framework in this course runs a version of this same loop.",
        },
        {
          time: 30,
          speaker: "Instructor",
          text: "We call it Claude-style because Anthropic's patterns emphasise explicit tool schemas, manual dispatch, and conversation-level state. But the model is Kimi-K2-Thinking — patterns transfer.",
        },
        {
          time: 48,
          speaker: "Instructor",
          text: "Instead of @function_tool or BaseTool, we write raw JSON schemas. Each tool has a name, description, and parameters object.",
        },
        {
          time: 68,
          speaker: "Instructor",
          text: "The dispatch table is a dictionary — tool name maps to a lambda. When the model returns tool_calls, we look up the name and execute.",
        },
        {
          time: 85,
          speaker: "Instructor",
          text: "The agentic loop is a for loop with a max iteration count. Each iteration sends the full message history to the model.",
        },
        {
          time: 102,
          speaker: "Instructor",
          text: "If finish_reason is tool_calls, we execute each tool, append results, and continue. If stop, we have our answer.",
        },
        {
          time: 120,
          speaker: "Instructor",
          text: "Conversation memory grows with each iteration. The model sees the full history including its own tool requests and results.",
        },
        {
          time: 138,
          speaker: "Instructor",
          text: "This is exactly what Runner.run does in the OpenAI SDK. And create_react_agent in LangGraph. And crew.kickoff in CrewAI. The loop is universal.",
        },
        {
          time: 155,
          speaker: "Instructor",
          text: "The A2A server has per-task state — a dictionary of agent instances keyed by task ID for multi-turn conversations.",
        },
        {
          time: 172,
          speaker: "Instructor",
          text: "Let us test. LoanValidatorClaudeStyle on port 10006. First iteration calls run_hard_checks, second run_soft_checks, third lookup_policy_notes. Fourth: final verdict.",
        },
        {
          time: 192,
          speaker: "Instructor",
          text: "The difference is control. With the manual loop you can add custom retry logic, token budgets, early exits, or logging between iterations.",
        },
        {
          time: 210,
          speaker: "Instructor",
          text: "The takeaway — all frameworks share the same core loop: send to model, check for tool calls, execute, repeat. Choose a framework for ergonomics.",
        },
        {
          time: 228,
          speaker: "Instructor",
          text: "Next — the capstone. Lesson 14 combines all six frameworks, four models, and five specialised agents into a production-grade loan approval system.",
        },
      ],
      qa: [
        {
          question:
            "Why call it 'Claude Agent SDK' if the model is Kimi-K2-Thinking?",
          answer:
            "The lesson applies Anthropic's agent-building patterns — explicit JSON-schema tools, manual dispatch, conversation-level state. Using Kimi-K2-Thinking proves agent patterns are model-agnostic.",
        },
        {
          question: "What is the safety limit (max iterations) for?",
          answer:
            "The for _ in range(6) loop prevents infinite loops. Most tasks resolve in 2-4 iterations. Production systems may use token budgets or time limits instead.",
        },
        {
          question: "Why maintain per-task agent instances in the executor?",
          answer:
            "Each OrchestratorAgent holds its own conversation history. Keying by task_id means multi-turn A2A conversations reuse the same history. New tasks get fresh instances.",
        },
        {
          question:
            "Is there a performance difference between the manual loop and frameworks?",
          answer:
            "Negligible. LLM inference dominates execution time. The manual loop adds microseconds of Python overhead vs seconds of model inference. Framework overhead is invisible relative to API latency.",
        },
      ],
      tags: [
        "claude-sdk",
        "manual-loop",
        "tool-dispatch",
        "conversation-memory",
        "kimi-k2-thinking",
        "json-schema",
      ],
    },

    // ── 14. Multi-Agent Deep Dive (Capstone) ─────────────────────────────
    {
      slug: "multi-agent-deep-dive",
      title: "Multi-Agent System Deep Dive — Loan Approval",
      type: "video",
      duration: "20 mins",
      videoId: "placeholder-capstone",
      description:
        "Capstone: build a production-grade multi-agent loan approval system with AI-driven decisioning (80%), human-in-the-loop escalation (20%), a React dashboard for approvals, and OpenTelemetry observability.",
      objectives: [
        "Architect a multi-agent loan approval pipeline with specialized agents",
        "Implement human-in-the-loop escalation for edge-case applications",
        "Build a React frontend for reviewing and approving escalated loans",
        "Instrument the entire pipeline with OpenTelemetry distributed tracing",
        "Create a real-time React dashboard showing agent telemetry and decision flow",
        "Run the complete system end-to-end with 80% auto-approve / 20% human review",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/a2a/lessons/14-multi-agent-deep-dive",
      infoBoxes: [
        {
          title: "Multi-Agent Loan Approval Pipeline",
          content:
            "This capstone builds a complete loan approval system using five specialized A2A agents:\n\n1. **IntakeAgent** — Validates and normalizes raw applications\n2. **RiskScorerAgent** — Computes a 0–100 risk score using LLM reasoning + deterministic rules\n3. **ComplianceAgent** — Checks FHA/VA/conventional regulatory requirements\n4. **DecisionAgent** — Routes based on risk: auto-approve (≤ 40), auto-decline (≥ 80), escalate (40–80)\n5. **EscalationAgent** — Queues borderline cases for human review via a REST API\n\nA MasterOrchestrator discovers all agents via A2A Agent Cards and routes each application through the pipeline. A React frontend handles human approvals. OpenTelemetry traces every step.",
        },
      ],
      noteBoxes: [
        {
          title: "Why 80% AI / 20% Human?",
          content:
            "In production lending, the majority of applications have clear signals — excellent credit with low DTI, or severely deficient profiles. These are safely handled by AI. The remaining ~20% sit in a gray zone where compensating factors, regulatory exceptions, or unusual circumstances require human judgment. This architecture ensures AI handles volume while humans focus on nuanced decisions.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n  Client["Loan Application"] --> Orchestrator["MasterOrchestrator<br/>(port 10100)"]\n  Orchestrator --> Intake["IntakeAgent<br/>(port 10101)"]\n  Intake --> RiskScorer["RiskScorerAgent<br/>(port 10102)"]\n  RiskScorer --> Compliance["ComplianceAgent<br/>(port 10103)"]\n  Compliance --> Decision["DecisionAgent<br/>(port 10104)"]\n  Decision -->|"score ≤ 40"| AutoApprove["Auto-Approved"]\n  Decision -->|"score ≥ 80"| AutoDecline["Auto-Declined"]\n  Decision -->|"40 < score < 80"| Escalation["EscalationAgent<br/>(port 10105)"]\n  Escalation --> HumanQueue["Human Review Queue"]\n  HumanQueue --> ReactApp["React Approval App"]\n  ReactApp -->|"Approve / Decline"| Decision\n  \n  subgraph Telemetry\n    OTel["OpenTelemetry Collector"] --> Dashboard["React Dashboard"]\n  end\n  \n  Orchestrator -.->|traces| OTel\n  Intake -.->|traces| OTel\n  RiskScorer -.->|traces| OTel\n  Compliance -.->|traces| OTel\n  Decision -.->|traces| OTel\n  Escalation -.->|traces| OTel',
          caption:
            "Multi-agent loan approval pipeline with human-in-the-loop escalation and OpenTelemetry observability",
          alt: "Architecture diagram showing six A2A agents in a loan approval pipeline with auto-approve, auto-decline, and human escalation paths, plus OpenTelemetry trace collection.",
          minHeight: "28rem",
        },
        {
          chart:
            'flowchart LR\n  A["Application Received"] --> B["Intake Validation"]\n  B -->|"Invalid"| C["Rejected"]\n  B -->|"Valid"| D["Risk Scoring<br/>(LLM + Rules)"]\n  D --> E["Compliance Check"]\n  E -->|"Non-compliant"| C\n  E -->|"Compliant"| F{"Risk Score?"}\n  F -->|"le 40 approx 50 pct"| G["Auto-Approved"]\n  F -->|"40-80 approx 20 pct"| H["Human Review"]\n  F -->|"ge 80 approx 30 pct"| I["Auto-Declined"]\n  H -->|"Human Approves"| G\n  H -->|"Human Declines"| I\n  H -->|"Request Info"| J["Back to Applicant"]',
          caption:
            "Decision flow showing the 80/20 split between AI auto-decisioning and human review",
          alt: "Flowchart from application intake through risk scoring, compliance, and three decision paths.",
        },
        {
          chart:
            "gantt\n  title OpenTelemetry Trace — Loan APP-2024-003\n  dateFormat X\n  axisFormat %s\n  \n  section Orchestrator\n  process_application        :0, 8500\n  \n  section IntakeAgent\n  validate_application       :200, 1200\n  \n  section RiskScorerAgent\n  compute_risk_score         :1300, 3800\n  llm_reasoning              :1500, 3500\n  rule_evaluation            :3600, 3800\n  \n  section ComplianceAgent\n  check_compliance           :3900, 5400\n  fha_rules                  :4000, 4800\n  regulatory_flags           :4900, 5400\n  \n  section DecisionAgent\n  make_decision              :5500, 6200\n  \n  section EscalationAgent\n  queue_for_review           :6300, 6800\n  \n  section Human Review\n  awaiting_reviewer          :6900, 8200\n  reviewer_decision          :8200, 8500",
          caption:
            "OpenTelemetry trace waterfall for a loan application escalated to human review",
          alt: "Gantt chart showing the timeline of spans across all pipeline agents.",
          minHeight: "22rem",
        },
      ],
      codePreview: {
        title: "Capstone Agent Architecture",
        segments: [
          {
            code: 'class MasterOrchestrator:\n    """Discover agents via A2A and route loan applications through the pipeline."""\n\n    AGENT_PORTS = {\n        "intake": 10101,\n        "risk_scorer": 10102,\n        "compliance": 10103,\n        "decision": 10104,\n        "escalation": 10105,\n    }\n\n    async def process_application(self, application: dict) -> dict:\n        with tracer.start_as_current_span("process_application") as span:\n            span.set_attribute("applicant_id", application["applicant_id"])\n\n            # Step 1: Intake validation\n            intake_result = await self._call_agent("intake", application)\n            if not intake_result["valid"]:\n                return {"decision": "REJECTED", "reason": "Invalid application"}\n\n            # Step 2: Risk scoring\n            risk_result = await self._call_agent("risk_scorer", intake_result)\n            span.set_attribute("risk_score", risk_result["score"])\n\n            # Step 3: Compliance check\n            compliance_result = await self._call_agent("compliance", {\n                **intake_result, **risk_result\n            })\n\n            # Step 4: Decision (auto or escalate)\n            decision_result = await self._call_agent("decision", {\n                **intake_result, **risk_result, **compliance_result\n            })\n\n            # Step 5: Escalation if needed\n            if decision_result["action"] == "ESCALATE":\n                await self._call_agent("escalation", decision_result)\n\n            return decision_result',
            language: "python",
            filename: "agents/src/orchestrator.py",
            explanation:
              "The MasterOrchestrator discovers all five agents via A2ACardResolver and routes each loan application through the pipeline sequentially. OpenTelemetry spans wrap every step.",
          },
          {
            code: 'class RiskScorerAgent:\n    """Compute a 0-100 risk score using LLM reasoning + deterministic rules."""\n\n    async def score(self, application: dict) -> dict:\n        with tracer.start_as_current_span("compute_risk_score") as span:\n            # Deterministic rule scoring (40% weight)\n            rule_score = self._run_rule_checks(application)\n\n            # LLM reasoning scoring (60% weight)\n            llm_score = await self._llm_assess(application)\n\n            # Weighted composite\n            final_score = int(rule_score * 0.4 + llm_score * 0.6)\n\n            span.set_attribute("rule_score", rule_score)\n            span.set_attribute("llm_score", llm_score)\n            span.set_attribute("final_score", final_score)\n\n            return {\n                "score": final_score,\n                "rule_score": rule_score,\n                "llm_score": llm_score,\n                "category": self._categorize(final_score),\n            }',
            language: "python",
            filename: "agents/src/risk_scorer.py",
            explanation:
              "The RiskScorerAgent combines deterministic rules (40% weight) with LLM reasoning (60% weight) to produce a composite risk score. The score determines auto-approve (≤40), escalate (40–80), or auto-decline (≥80).",
          },
          {
            code: "export function ApprovalQueue() {\n  const [pending, setPending] = useState<EscalatedApplication[]>([]);\n\n  useEffect(() => {\n    const interval = setInterval(async () => {\n      const res = await fetch('/api/escalations/pending');\n      setPending(await res.json());\n    }, 3000);\n    return () => clearInterval(interval);\n  }, []);\n\n  const handleDecision = async (id: string, decision: Decision) => {\n    await fetch(`/api/escalations/${id}/decide`, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ decision, reviewer: currentUser }),\n    });\n    setPending(prev => prev.filter(app => app.id !== id));\n  };\n\n  return (\n    <div className=\"approval-queue\">\n      <h2>Pending Human Review ({pending.length})</h2>\n      {pending.map(app => (\n        <ApplicationCard\n          key={app.id}\n          application={app}\n          onApprove={() => handleDecision(app.id, 'APPROVED')}\n          onDecline={() => handleDecision(app.id, 'DECLINED')}\n          onRequestInfo={() => handleDecision(app.id, 'INFO_REQUESTED')}\n        />\n      ))}\n    </div>\n  );\n}",
            language: "tsx",
            filename: "ui/src/components/ApprovalQueue.tsx",
            explanation:
              "The React ApprovalQueue component polls for pending escalated applications. Reviewers see full application context, risk scores, and compliance flags, then approve, decline, or request more information.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Run the Capstone Loan Approval System",
          steps: [
            {
              title: "Clone and install Python dependencies",
              code: "cd _examples/a2a/lessons/14-multi-agent-deep-dive\ncd agents\npip install -r requirements.txt",
            },
            {
              title: "Install React UI dependencies",
              code: "cd ../ui\nnpm install",
            },
            {
              title: "Configure environment variables",
              code: "# In agents/ directory — copy and edit .env\ncp .env.example .env\n# Set GITHUB_TOKEN, AZURE_OPENAI_ENDPOINT, AZURE_AI_API_KEY,\n# AZURE_AI_MODEL_DEPLOYMENT_NAME=Kimi-K2-Thinking,\n# OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318",
            },
            {
              title: "Start OpenTelemetry collector (optional)",
              code: "docker run -d --name jaeger \\\n  -p 16686:16686 -p 4317:4317 -p 4318:4318 \\\n  jaegertracing/jaeger:latest",
              note: "Skip if you only want console trace output.",
            },
            {
              title: "Start all agents",
              code: "cd agents/src\npython start_all.py\n# Ports: 10100 (orchestrator), 10101-10105 (pipeline agents)",
            },
            {
              title: "Start the React frontend",
              code: "cd ui\nnpm run dev\n# Approval Queue: http://localhost:3000/approvals\n# Telemetry Dashboard: http://localhost:3000/dashboard",
            },
            {
              title: "Submit test applications",
              code: "cd agents/src\npython submit_test_batch.py\n# Expected: 3 auto-approved, 2 auto-declined, 3 escalated",
            },
            {
              title: "Review escalated applications",
              description:
                "Open http://localhost:3000/approvals to see the 3 pending applications. Review the agent reasoning, risk factors, and compliance notes. Click Approve, Decline, or Request More Info.",
            },
          ],
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Instructor",
          text: "Welcome to the capstone lesson. Everything you have built so far — the agents, the servers, the clients — now comes together into a real-world system. We are building a multi-agent loan approval pipeline.",
        },
        {
          time: 12,
          speaker: "Instructor",
          text: "Here is the scenario. A financial institution receives hundreds of loan applications per day. Most are straightforward — great credit, low debt ratio, easy approve. Some are clearly unqualified. But about twenty percent sit in a gray zone where AI alone should not make the call.",
        },
        {
          time: 28,
          speaker: "Instructor",
          text: "Our system uses five specialized A2A agents. The IntakeAgent validates incoming applications. The RiskScorerAgent combines LLM reasoning with deterministic rules to produce a zero-to-one-hundred risk score. The ComplianceAgent checks FHA, VA, and conventional loan regulations.",
        },
        {
          time: 45,
          speaker: "Instructor",
          text: "Then the DecisionAgent looks at the composite score. Score forty or below? Auto-approved — the AI is confident. Eighty or above? Auto-declined. But that middle band, forty to eighty, gets routed to the EscalationAgent.",
        },
        {
          time: 58,
          speaker: "Instructor",
          text: "The EscalationAgent queues the application for human review. And here is where it gets interesting — we have built a React frontend that shows the reviewer everything: the application data, the risk score breakdown, the compliance flags, and the AI's reasoning.",
        },
        {
          time: 72,
          speaker: "Instructor",
          text: "The reviewer can approve, decline, or request more information. Their decision flows back through the A2A pipeline. This is human-in-the-loop done right — AI handles the volume, humans handle the nuance.",
        },
        {
          time: 86,
          speaker: "Instructor",
          text: "Now, observability. Every single agent interaction is instrumented with OpenTelemetry. The orchestrator injects W3C trace context, each agent creates child spans with attributes — risk scores, decisions, latencies. All traces flow to our React telemetry dashboard.",
        },
        {
          time: 102,
          speaker: "Instructor",
          text: "Let me show you the architecture. The MasterOrchestrator discovers all five agents via A2ACardResolver — same pattern from Lesson seven. Each agent has its own port: intake on ten-one-oh-one, risk scorer on ten-one-oh-two, and so on.",
        },
        {
          time: 118,
          speaker: "Instructor",
          text: "Let us look at the project structure. Under agents slash src, you have each agent as its own Python module, plus the orchestrator, telemetry setup, and a startup script. Under ui slash src, you have the React approval app and the telemetry dashboard.",
        },
        {
          time: 135,
          speaker: "Instructor",
          text: "Let us fire it up. I will run the startup script that launches all six A2A servers, then start the React frontend. Now I will submit our eight test applicants.",
        },
        {
          time: 148,
          speaker: "Instructor",
          text: "Watch the console — Alice Chen, score twenty-two, auto-approved. Bob Kwan, score ninety-one, auto-declined. Carol Martinez, score fifty-eight, escalated to human review. This is the eighty-twenty split in action.",
        },
        {
          time: 165,
          speaker: "Instructor",
          text: "Now switching to the React approval app. I can see three pending applications. Let me click on Carol Martinez. Here is her full profile, the risk score breakdown — forty percent from rules, sixty percent from LLM — the compliance notes flagging her medical collection under FHA exceptions.",
        },
        {
          time: 185,
          speaker: "Instructor",
          text: "I will approve Carol's application with the condition that medical collections are verified as discharged. Click approve — and the decision flows back through the pipeline.",
        },
        {
          time: 198,
          speaker: "Instructor",
          text: "Now the telemetry dashboard. I can see the trace waterfall for Carol's application — the spans across all five agents, the latencies, and the human review wait time. This is production-grade observability.",
        },
      ],
      qa: [
        {
          question: "How does the system decide which loans need human review?",
          answer:
            "The RiskScorerAgent scores each application on a 0–100 risk scale. Applications scoring ≤ 40 are auto-approved, ≥ 80 are auto-declined, and the 40–80 range (≈20% of cases) is routed to the human-in-the-loop queue via the EscalationAgent.",
        },
        {
          question: "What telemetry is captured?",
          answer:
            "OpenTelemetry traces span the full pipeline — from intake through risk scoring, compliance checks, and final decision. Each agent creates child spans with attributes like agent_name, decision, confidence_score. Traces are exported to a Jaeger-compatible OTLP endpoint and visualized in the React dashboard.",
        },
        {
          question: "How does the React frontend handle approvals?",
          answer:
            "The React app polls a REST API for pending escalations, displays the full application context plus agent reasoning, and lets reviewers approve/decline/request-more-info. The decision is pushed back through the A2A pipeline to complete the task.",
        },
        {
          question:
            "What happens if the human reviewer requests more information?",
          answer:
            "The EscalationAgent marks the application as 'INFO_REQUESTED' and the system can notify the applicant. Once additional information is provided, the application re-enters the pipeline from the IntakeAgent stage with the supplementary data.",
        },
        {
          question: "Can the 80/20 thresholds be configured?",
          answer:
            "Yes. The DecisionAgent reads thresholds from environment variables (AUTO_APPROVE_THRESHOLD and AUTO_DECLINE_THRESHOLD). You can tune these per institution or regulatory requirement.",
        },
        {
          question: "How does OpenTelemetry work across A2A agents?",
          answer:
            "The orchestrator injects W3C trace context headers into A2A task requests. Each agent extracts the context, creates child spans, and propagates it forward. This produces a unified distributed trace across all agents regardless of framework.",
        },
      ],
      tags: [
        "capstone",
        "orchestration",
        "multi-agent",
        "human-in-the-loop",
        "react",
        "opentelemetry",
        "loan-approval",
      ],
    },

    // ── 15. Advanced Concepts ────────────────────────────────────────────
    {
      slug: "advanced-concepts",
      title: "Advanced A2A Concepts — Extensions, Security & Observability",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-advanced",
      description:
        "Explore production-ready A2A patterns: protocol extensions, security hardening (TLS, OAuth 2.0, mTLS), and observability with OpenTelemetry.",
      objectives: [
        "Understand four types of A2A protocol extensions",
        "Apply security patterns: TLS, OAuth 2.0, mTLS",
        "Instrument A2A systems with OpenTelemetry distributed tracing",
        "Evaluate GDPR/HIPAA compliance requirements for agent systems",
      ],
      infoBoxes: [
        {
          title: "Taking A2A to Production",
          content:
            "Moving from development to production requires attention to four pillars: **protocol extensions** for custom capabilities, **transport security** for encryption and authentication, **observability** for operational visibility, and **compliance** for regulatory requirements. This lesson covers all four, giving you a checklist to evaluate production readiness for any A2A deployment.",
        },
      ],
      noteBoxes: [
        {
          title: "Extensions Don't Break Compatibility",
          content:
            "A2A extensions are opt-in. A client that doesn't understand an extension simply ignores it (unless required: true). This means you can add priority levels, SLA tracking, audit trails, or custom states without breaking existing agents — a key design decision for backward compatibility.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n  Define["Define Extension<br/>(URI + schema)"] --> Declare["Declare in<br/>Agent Card"]\n  Declare --> Negotiate["Client Checks<br/>Compatibility"]\n  Negotiate -->|supported| Use["Use Extension<br/>in Messages"]\n  Negotiate -->|not supported| Skip["Skip / Fallback"]',
          caption:
            "Extension lifecycle: define, declare, negotiate, use (or skip gracefully)",
          alt: "Flow diagram showing the four-step A2A extension lifecycle.",
        },
        {
          chart:
            "sequenceDiagram\n  participant Client as A2A Client\n  participant Auth as OAuth Server\n  participant Agent as A2A Server\n  Client->>Auth: Request access token (client_credentials)\n  Auth-->>Client: Access token (JWT)\n  Client->>Agent: SendMessage + Bearer token\n  Agent->>Auth: Validate token\n  Auth-->>Agent: Token valid, scopes: [agent:call]\n  Agent-->>Client: Task result",
          caption:
            "OAuth 2.0 client-credentials flow for machine-to-machine A2A authentication",
          alt: "Sequence diagram showing an A2A client obtaining an OAuth token and authenticating a task request.",
          minHeight: "18rem",
        },
        {
          chart:
            'graph LR\n  subgraph "Trace: abc123"\n    Orch["LoanApprovalOrchestrator<br/>span: route"] --> Intake["IntakeAgent<br/>span: execute"]\n    Orch --> Risk["RiskScorerAgent<br/>span: execute"]\n    Orch --> Comp["ComplianceAgent<br/>span: execute"]\n  end\n  OTel["OTLP Collector"] --> Jaeger["Jaeger UI"]\n  Orch -.->|export| OTel\n  Intake -.->|export| OTel\n  Risk -.->|export| OTel\n  Comp -.->|export| OTel',
          caption:
            "Trace propagation across pipeline agents with centralized collection and visualization",
          alt: "Diagram showing trace context flowing from the orchestrator to three agents, exported to OTLP collector.",
        },
      ],
      codePreview: {
        title: "Production Patterns",
        segments: [
          {
            code: 'from opentelemetry import trace\nfrom opentelemetry.sdk.trace import TracerProvider\n\ntracer = trace.get_tracer("a2a-orchestrator")\n\nasync def route_with_tracing(query: str):\n    with tracer.start_as_current_span("orchestrator.route") as span:\n        span.set_attribute("query.length", len(query))\n\n        routing = await route(query)\n        span.set_attribute("routing.strategy", routing["strategy"])\n\n        for agent_name in routing["agents"]:\n            with tracer.start_as_current_span(f"agent.{agent_name}") as agent_span:\n                result = await call_agent(agent_name, query)\n                agent_span.set_attribute("result.length", len(result))',
            language: "python",
            filename: "orchestrator_tracing.py",
            explanation:
              "Wrapping agent calls with OpenTelemetry spans. Each downstream agent creates a child span, and the traceparent header propagates context across HTTP boundaries.",
          },
          {
            code: 'import re\n\nasync def redact_pii(text: str) -> str:\n    """Remove personally identifiable information\n    before passing data between agents."""\n    patterns = {\n        "email": r\'\\b[\\w.-]+@[\\w.-]+\\.\\w+\\b\',\n        "phone": r\'\\b\\d{3}[-.\\s]?\\d{3}[-.\\s]?\\d{4}\\b\',\n        "ssn": r\'\\b\\d{3}-\\d{2}-\\d{4}\\b\',\n    }\n    for name, pattern in patterns.items():\n        text = re.sub(pattern, f\'[REDACTED-{name.upper()}]\', text)\n    return text',
            language: "python",
            filename: "pii_redaction.py",
            explanation:
              "PII redaction middleware for cross-agent data flow. Apply this before sending task messages to downstream agents to meet GDPR / HIPAA data minimization requirements.",
          },
        ],
      },
      transcript: [
        {
          time: 0,
          speaker: "Nilay",
          text: "Welcome to lesson 15. We've built a complete multi-agent system — now let's talk about what it takes to put A2A into production.",
        },
        {
          time: 8,
          speaker: "Nilay",
          text: "We'll cover four pillars: protocol extensions, transport security, observability, and compliance. These are the things that separate a demo from a production deployment.",
        },
        {
          time: 20,
          speaker: "Nilay",
          text: "Let's start with extensions. A2A is designed to be extended. You can add new capabilities without breaking existing agents.",
        },
        {
          time: 28,
          speaker: "Nilay",
          text: "There are four types. Data-only extensions add metadata — like priority levels or SLA tags — to messages and tasks.",
        },
        {
          time: 38,
          speaker: "Nilay",
          text: "Profile extensions define standard capability bundles. Think healthcare compliance profile combining multiple data and method extensions together.",
        },
        {
          time: 48,
          speaker: "Nilay",
          text: "Method extensions add new JSON-RPC methods. For example, tasks-slash-batch for bulk operations.",
        },
        {
          time: 56,
          speaker: "Nilay",
          text: "And state-machine extensions add new task states beyond the built-in ones — like reviewing or approved, which we used in our loan system.",
        },
        {
          time: 66,
          speaker: "Nilay",
          text: "Extensions are declared in the Agent Card. The required field tells clients whether they must support it. Clients that don't recognize an optional extension simply ignore it.",
        },
        {
          time: 80,
          speaker: "Nilay",
          text: "Now, security. Every production deployment must use TLS 1.2 or higher. Self-signed certs are fine for development, but production needs proper certificate validation.",
        },
        {
          time: 94,
          speaker: "Nilay",
          text: "For authentication, A2A supports Bearer tokens, OAuth 2.0, OpenID Connect, and mutual TLS. The security scheme is declared in the Agent Card — just like OpenAPI.",
        },
        {
          time: 108,
          speaker: "Nilay",
          text: "The most common pattern is OAuth 2.0 with client credentials. The calling agent gets a JWT from the auth server, then includes it as a Bearer token in A2A requests.",
        },
        {
          time: 122,
          speaker: "Nilay",
          text: "For high-security environments — think financial services — mutual TLS adds bidirectional certificate verification. Both client and server present certificates.",
        },
        {
          time: 136,
          speaker: "Nilay",
          text: "Beyond authentication, you need authorization. Skill-based auth controls which skills a client can invoke. Data-level auth filters what data an agent returns. Rate limiting and cost quotas round out the picture.",
        },
        {
          time: 154,
          speaker: "Nilay",
          text: "Observability is critical when you have multiple agents in a pipeline. OpenTelemetry gives you distributed tracing across agent boundaries.",
        },
        {
          time: 166,
          speaker: "Nilay",
          text: "Here's the key: the traceparent header propagates through A2A requests. Each agent creates child spans linked to the parent, giving you an end-to-end waterfall view.",
        },
        {
          time: 182,
          speaker: "Nilay",
          text: "We saw this in our capstone — every agent from intake through risk scoring to the final decision had its own span. The React dashboard visualized these traces in real time.",
        },
        {
          time: 196,
          speaker: "Nilay",
          text: "Key metrics to monitor: task counts by agent and status, task duration histograms, agent health gauges, routing accuracy, and token usage per model.",
        },
        {
          time: 210,
          speaker: "Nilay",
          text: "Structured logging ties it all together. Use correlation IDs — typically the trace ID — to link log entries across agents for a single request.",
        },
        {
          time: 224,
          speaker: "Nilay",
          text: "Finally, compliance. If your agents handle personal data, you need to think about GDPR, HIPAA, SOC 2, and CCPA.",
        },
        {
          time: 236,
          speaker: "Nilay",
          text: "The practical solution: PII redaction middleware that strips sensitive data before passing it between agents. Plus NER models for better coverage in production.",
        },
        {
          time: 252,
          speaker: "Nilay",
          text: "Task TTL policies ensure data isn't retained longer than needed. And audit trails — which OpenTelemetry helps with — prove to auditors that data handling followed policy.",
        },
        {
          time: 268,
          speaker: "Nilay",
          text: "Here's your enterprise readiness checklist: TLS on all endpoints, OAuth or mTLS auth, skill-based authorization, OpenTelemetry tracing, structured logging, Prometheus metrics, PII redaction, data retention policies, health monitoring, and incident runbooks.",
        },
        {
          time: 290,
          speaker: "Nilay",
          text: "Check off these ten items and your A2A deployment is production-ready. In the next and final lesson, we'll recap everything and talk about where to go from here.",
        },
      ],
      qa: [
        {
          question: "How do you add authentication to an A2A agent?",
          answer:
            "Add a securitySchemes block to your Agent Card (OpenAPI-style). Clients read this and attach credentials — Bearer tokens, API keys, or OAuth flows — to task requests. The server validates them before processing.",
        },
        {
          question: "What are the four types of A2A extensions?",
          answer:
            "Data-only extensions add metadata to messages (e.g., priority). Profile extensions define standard capability bundles (e.g., healthcare compliance). Method extensions add new JSON-RPC methods (e.g., tasks/batch). State-machine extensions add new task states (e.g., reviewing, approved).",
        },
        {
          question: "How does trace propagation work across A2A agents?",
          answer:
            "The traceparent HTTP header carries trace context (trace ID + span ID) with every A2A request. Downstream agents extract this header, create child spans linked to the parent, and export them to a shared OTLP collector — producing a single end-to-end trace across all agents.",
        },
        {
          question: "What compliance regulations affect multi-agent systems?",
          answer:
            "GDPR requires data minimization and right-to-erasure (implement task TTLs and PII redaction). HIPAA requires PHI protection and audit trails (encryption at rest + access logging). SOC 2 requires security controls and availability. CCPA requires consumer data rights (data inventory + opt-out).",
        },
      ],
      tags: [
        "security",
        "oauth",
        "extensions",
        "observability",
        "opentelemetry",
      ],
    },

    // ── 16. Conclusion ───────────────────────────────────────────────────
    {
      slug: "conclusion",
      title: "Conclusion & Next Steps",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-conclusion",
      description:
        "Recap the complete A2A journey: protocols, six frameworks, multi-agent orchestration, and paths forward.",
      objectives: [
        "Recall the full A2A technology stack and capabilities built",
        "Identify 12 key patterns practiced across the course",
        "Plan next steps for production deployment and community engagement",
      ],
      infoBoxes: [
        {
          title: "What You Built",
          content:
            "Over 16 lessons, you went from zero A2A knowledge to a production-ready multi-agent system. You implemented agents using six different frameworks (Microsoft AF, Google ADK, LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK), connected them through three model providers (Phi-4 via GitHub Models, Kimi-K2-Thinking via Azure AI Foundry, gpt-4o-mini via GitHub Models), and built a capstone loan-approval pipeline with human-in-the-loop review, a React dashboard, and OpenTelemetry observability. All free-tier — no expensive cloud ML bills.",
        },
      ],
      noteBoxes: [
        {
          title: "A2A Is Still Evolving",
          content:
            "A2A is at RC v1.0 stage. Key areas of active development include dynamic agent registries, push notifications for async completion, batch operations for bulk task submission, expanded multi-modal support, and enterprise compliance profiles. The patterns you learned here will transfer directly as the spec evolves — the core primitives (Agent Card, SendMessage, SSE streaming) are stable.",
        },
      ],
      transcript: [
        {
          time: 0,
          speaker: "Nilay",
          text: "Welcome to the final lesson. Let's take a moment to step back and look at everything we've built.",
        },
        {
          time: 7,
          speaker: "Nilay",
          text: "You started with zero A2A knowledge. Now you have a multi-agent system running six different frameworks, three model providers, and a single protocol — all communicating through one standard.",
        },
        {
          time: 20,
          speaker: "Nilay",
          text: "Let me recap the technology stack. For protocols: A2A for agent-to-agent communication, MCP for agent-to-tool communication, JSON-RPC 2.0 for message format, and SSE for streaming.",
        },
        {
          time: 34,
          speaker: "Nilay",
          text: "For frameworks: A2A Python SDK as the foundation, Microsoft Agent Framework for orchestration, Google ADK with its to-a2a shortcut, LangGraph for ReAct agents with graph control, CrewAI for role-based delegation, OpenAI Agents SDK for lightweight tool use, and Claude Agent SDK for structured memory.",
        },
        {
          time: 56,
          speaker: "Nilay",
          text: "For models: Phi-4 through GitHub Models for Lessons 05-07 and notebooks, Kimi-K2-Thinking through Azure AI Foundry for Lessons 08-13, and openai/gpt-4o-mini through GitHub Models for the Lesson 14 capstone pipeline. All free-tier.",
        },
        {
          time: 72,
          speaker: "Nilay",
          text: "Throughout the course, you practiced twelve patterns. Agent Card discovery in every lesson. AgentExecutor wrapping. The ADK to-a2a shortcut. Manual A2A server wiring with Starlette. Intent routing and chain execution. Parallel execution. Error recovery.",
        },
        {
          time: 94,
          speaker: "Nilay",
          text: "ReAct agent patterns in the LangGraph lesson. Multi-turn conversations with the Claude-style agent. Role-based delegation with CrewAI. And the extension mechanism we covered in Lesson 15.",
        },
        {
          time: 110,
          speaker: "Nilay",
          text: "Six key takeaways. First: A2A is a protocol, not a framework. It defines how agents talk, not what they do. That is what makes it universal.",
        },
        {
          time: 124,
          speaker: "Nilay",
          text: "Second: Agent Cards are the foundation. Every interaction starts with discovery. Without a well-defined Agent Card, your agent does not exist in the A2A world.",
        },
        {
          time: 136,
          speaker: "Nilay",
          text: "Third: MCP plus A2A equals the complete stack. Vertical integration with tools, horizontal integration with agents. Two protocols, complete coverage.",
        },
        {
          time: 148,
          speaker: "Nilay",
          text: "Fourth: model choice is local. Each agent picks its own model independently. The orchestrator does not know what models the downstream agents use.",
        },
        {
          time: 162,
          speaker: "Nilay",
          text: "Fifth: framework choice is also local. Microsoft AF orchestrates ADK, LangGraph, CrewAI, and OpenAI agents without knowing their framework internals. Opaque execution at work.",
        },
        {
          time: 176,
          speaker: "Nilay",
          text: "Sixth: free-tier is viable. We built this entire system using free GitHub Models and Azure AI Foundry free tier. No expensive cloud ML platform dependency.",
        },
        {
          time: 190,
          speaker: "Nilay",
          text: "So what is next? Three paths forward. Path one: continue learning. Add a new framework agent, implement cross-agent multi-turn, or build a real-time agent visualization UI.",
        },
        {
          time: 206,
          speaker: "Nilay",
          text: "Path two: go to production. Add OAuth 2.0 authentication, OpenTelemetry tracing, containerize your agents with Docker, and implement persistent task storage.",
        },
        {
          time: 222,
          speaker: "Nilay",
          text: "Path three: join the community. Contribute to the A2A Python SDK on GitHub, submit extension proposals, or share your Agent Cards on the A2A registry.",
        },
        {
          time: 238,
          speaker: "Nilay",
          text: "A2A reduces the multi-agent integration problem from N-squared to N. This course proved it by connecting agents across six frameworks through a single protocol.",
        },
        {
          time: 252,
          speaker: "Nilay",
          text: "The future of agentic AI is interoperable, and A2A is the protocol making it happen. Thank you for taking this course — now go build something amazing with what you have learned.",
        },
      ],
      qa: [
        {
          question:
            "What is the key architectural insight from the A2A protocol?",
          answer:
            "A2A is a communication contract, not a framework. It defines how agents talk (discovery, task lifecycle, streaming) without constraining what they do internally. This is why agents built with six different frameworks can interoperate seamlessly through a single protocol.",
        },
        {
          question: "How do A2A and MCP complement each other?",
          answer:
            "MCP handles vertical integration — connecting an agent to its tools and data sources. A2A handles horizontal integration — connecting agents to each other. Together they form a complete agent communication stack: MCP for agent-to-tool, A2A for agent-to-agent.",
        },
        {
          question: "Why is 'model choice is local' important?",
          answer:
            "Each agent independently selects its model — the orchestrator doesn't know or care what models downstream agents use. This opaque execution means teams can optimize model selection per-agent without affecting the rest of the system.",
        },
        {
          question: "What are the 12 patterns practiced in this course?",
          answer:
            "Agent Card discovery, AgentExecutor wrapping, to_a2a() shortcut, manual A2A server wiring, intent routing, chain execution, parallel execution, error recovery/fallback, ReAct agent patterns, multi-turn conversations, role-based delegation, and the extension mechanism.",
        },
        {
          question: "What should I do first for production deployment?",
          answer:
            "Start with the enterprise readiness checklist from Lesson 15: TLS on all endpoints, OAuth 2.0 or mTLS authentication, OpenTelemetry tracing, and PII redaction. These four items cover the most critical security and observability gaps.",
        },
      ],
      tags: ["conclusion", "recap", "next-steps"],
    },

    // ── 17. Quiz & Assessment ────────────────────────────────────────────
    {
      slug: "quiz",
      title: "Quiz & Assessment",
      type: "quiz",
      duration: "10 mins",
      description:
        "Test your A2A knowledge with 18 quiz questions covering protocol design, framework integration, multi-agent orchestration, security, and production deployment.",
      objectives: [
        "Validate understanding of A2A protocol concepts through 18 knowledge checks",
        "Practice answering questions about multi-agent systems",
        "Reason about protocol design trade-offs and architectural decisions",
        "Apply A2A patterns to real-world system design and production scenarios",
      ],
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
            "The Agent Card is a JSON discovery document served at /.well-known/agent-card.json. It describes the agent's name, URL, version, skills, and supported capabilities so other agents can discover and interact with it.",
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
            "A2A uses Server-Sent Events (SSE) via the SendStreamingMessage operation for streaming partial results. SSE is unidirectional (server → client), lightweight, and works over standard HTTP.",
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
            "MCP is designed to connect a single AI model to tools and data sources. A2A is designed for agent-to-agent communication, letting autonomous agents (possibly built on different frameworks or models) discover each other and delegate tasks.",
        },
        {
          id: "q4",
          question:
            "Which Google ADK method auto-generates a complete A2A server from an agent?",
          options: [
            { id: "a", text: "agent.serve()" },
            { id: "b", text: "agent.to_a2a()" },
            { id: "c", text: "agent.export_a2a()" },
            { id: "d", text: "agent.start_server()" },
          ],
          correctOptionId: "b",
          explanation:
            "The to_a2a() method on an ADK agent auto-generates a complete A2A server — Agent Card, task handler, and HTTP endpoints — from the agent's existing configuration.",
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
            { id: "d", text: "The task requires additional user input" },
          ],
          correctOptionId: "b",
          explanation:
            "A 'working' status means the agent has started processing the task and may emit streaming updates (partial artifacts). This is an intermediate state between 'submitted' and terminal states like 'completed' or 'failed'.",
        },
        {
          id: "q6",
          question: "What is the role of AgentExecutor in the A2A Python SDK?",
          options: [
            {
              id: "a",
              text: "It defines the Agent Card JSON structure",
            },
            {
              id: "b",
              text: "It is the interface that wraps any agent's logic for the A2A server to call",
            },
            {
              id: "c",
              text: "It manages the HTTP routing for the server",
            },
            {
              id: "d",
              text: "It handles OAuth authentication",
            },
          ],
          correctOptionId: "b",
          explanation:
            "AgentExecutor is the interface between the A2A server infrastructure and your agent's business logic. You implement its execute() method, which receives a RequestContext and uses EventQueue to yield status updates and artifacts.",
        },
        {
          id: "q7",
          question:
            "Which model provider in this course runs entirely locally without an API key?",
          options: [
            { id: "a", text: "GitHub Models" },
            { id: "b", text: "Azure AI Foundry" },
            { id: "c", text: "Foundry Local" },
            { id: "d", text: "OpenAI API" },
          ],
          correctOptionId: "c",
          explanation:
            "Foundry Local runs Qwen2.5 Coder entirely on your local machine. No API key, no cloud dependency, no cost — ideal for development and offline use.",
        },
        {
          id: "q8",
          question:
            "How does the MasterOrchestrator in the capstone lesson discover available agents?",
          options: [
            {
              id: "a",
              text: "It reads a hardcoded configuration file",
            },
            {
              id: "b",
              text: "It uses A2ACardResolver to fetch Agent Cards from each agent's port",
            },
            {
              id: "c",
              text: "Agents register themselves via a central registry",
            },
            {
              id: "d",
              text: "It scans the local network for open ports",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The MasterOrchestrator uses A2ACardResolver to fetch Agent Cards from each agent's port. Each card describes the agent's skills, letting the orchestrator route tasks based on intent matching.",
        },
        {
          id: "q9",
          question:
            "Which operation does an A2A client call to initiate a new task?",
          options: [
            { id: "a", text: "CreateTask" },
            { id: "b", text: "SendMessage" },
            { id: "c", text: "SubmitTask" },
            { id: "d", text: "StartTask" },
          ],
          correctOptionId: "b",
          explanation:
            "SendMessage is the core A2A operation for sending a message to an agent, which initiates a new task or continues an existing one. For streaming responses, use SendStreamingMessage instead.",
        },
        {
          id: "q10",
          question:
            "How many states does the A2A task lifecycle define, and which are terminal?",
          options: [
            {
              id: "a",
              text: "5 states; completed and failed are terminal",
            },
            {
              id: "b",
              text: "8 states; completed, failed, canceled, and rejected are terminal",
            },
            {
              id: "c",
              text: "6 states; completed, failed, and canceled are terminal",
            },
            {
              id: "d",
              text: "4 states; completed and failed are terminal",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The A2A task state machine defines eight states: submitted, working, input-required, auth-required, completed, failed, canceled, and rejected. The four terminal states are completed, failed, canceled, and rejected — once a task reaches any of these, it cannot transition further.",
        },
        {
          id: "q11",
          question:
            "How does the Microsoft Agent Framework orchestrator determine which downstream agent should handle a request?",
          options: [
            { id: "a", text: "Round-robin load balancing" },
            { id: "b", text: "Random selection from available agents" },
            {
              id: "c",
              text: "Intent matching against Agent Card skills using the LLM",
            },
            {
              id: "d",
              text: "Hardcoded routing table in a configuration file",
            },
          ],
          correctOptionId: "c",
          explanation:
            "The Microsoft AF orchestrator reads Agent Cards to build a skills registry, then uses the LLM (Kimi-K2-Thinking) to match the user's intent against available agent skills. This allows dynamic routing — add a new agent and the orchestrator discovers it automatically.",
        },
        {
          id: "q12",
          question:
            "Which package provides the bridge between LangGraph agents and A2A servers?",
          options: [
            { id: "a", text: "langgraph-a2a-bridge" },
            { id: "b", text: "langgraph-a2a-server" },
            { id: "c", text: "a2a-langgraph" },
            { id: "d", text: "langgraph-sdk" },
          ],
          correctOptionId: "b",
          explanation:
            "The langgraph-a2a-server package wraps any LangGraph graph as a fully compliant A2A server with minimal boilerplate. It handles Agent Card generation, JSON-RPC routing, and SSE streaming.",
        },
        {
          id: "q13",
          question:
            "What is the purpose of the contextId field in A2A messages?",
          options: [
            {
              id: "a",
              text: "It stores the agent's internal memory state",
            },
            {
              id: "b",
              text: "It groups related messages into a logical conversation thread",
            },
            {
              id: "c",
              text: "It identifies which JSON-RPC method to call",
            },
            {
              id: "d",
              text: "It references the Agent Card version number",
            },
          ],
          correctOptionId: "b",
          explanation:
            "The contextId groups related messages into a conversation thread. Multiple tasks can share the same contextId, letting agents maintain context across a multi-turn interaction. Think of it as a session ID for an ongoing dialogue between client and agent.",
        },
        {
          id: "q14",
          question:
            "What are the three mechanisms A2A provides for a client to receive task updates?",
          options: [
            { id: "a", text: "Polling, webhooks, and gRPC streams" },
            {
              id: "b",
              text: "Polling (GetTask), streaming (SSE via SendStreamingMessage), and push notifications",
            },
            {
              id: "c",
              text: "Long polling, WebSocket, and message queues",
            },
            { id: "d", text: "Callbacks, event bus, and shared database" },
          ],
          correctOptionId: "b",
          explanation:
            "A2A offers three update delivery mechanisms: (1) Polling — call GetTask to check current status; (2) Streaming — use SendStreamingMessage to receive real-time SSE events; (3) Push notifications — register a webhook via SetPushNotificationConfig and the server POSTs updates to your endpoint.",
        },
        {
          id: "q15",
          question:
            "What is the purpose of the A2A-Version header in every A2A request?",
          options: [
            { id: "a", text: "It specifies the JSON-RPC version" },
            {
              id: "b",
              text: "It declares which protocol version the client supports so the server can adapt its behavior",
            },
            { id: "c", text: "It sets the HTTP content type" },
            { id: "d", text: "It identifies the client's Agent Card version" },
          ],
          correctOptionId: "b",
          explanation:
            "The A2A-Version header (e.g., 'A2A-Version: 1.0') is required on every request to the A2A endpoint. It tells the server which protocol version the client understands, enabling version negotiation and backward compatibility.",
        },
        {
          id: "q16",
          question: "How are extensions declared and negotiated in A2A?",
          options: [
            {
              id: "a",
              text: "Extensions are hardcoded in the protocol and cannot be customized",
            },
            {
              id: "b",
              text: "Agents declare supported extensions (with URI identifiers) in their Agent Card; clients opt in via the A2A-Extensions header",
            },
            {
              id: "c",
              text: "Extensions are negotiated via a separate WebSocket handshake",
            },
            {
              id: "d",
              text: "The server auto-enables all extensions for every client",
            },
          ],
          correctOptionId: "b",
          explanation:
            "A2A extensions use URI-based identifiers. Agents advertise their supported extensions (each with a URI, description, and required flag) in the Agent Card's extensions array. Clients opt in to specific extensions by including their URIs in the A2A-Extensions request header.",
        },
        {
          id: "q17",
          question:
            "Which authentication mechanism provides bidirectional certificate verification for high-security A2A deployments?",
          options: [
            { id: "a", text: "OAuth 2.0 with PKCE" },
            { id: "b", text: "API key authentication" },
            { id: "c", text: "Mutual TLS (mTLS)" },
            { id: "d", text: "SAML 2.0 federation" },
          ],
          correctOptionId: "c",
          explanation:
            "Mutual TLS (mTLS) requires both the client and server to present X.509 certificates, providing bidirectional identity verification. This is the strongest auth mechanism for machine-to-machine A2A communication in zero-trust environments like financial services.",
        },
        {
          id: "q18",
          question:
            "Why is the N² → N reduction the key architectural insight of A2A?",
          options: [
            {
              id: "a",
              text: "It reduces the number of agents needed",
            },
            {
              id: "b",
              text: "It replaces N×(N-1)/2 custom integrations with N standard protocol implementations",
            },
            {
              id: "c",
              text: "It reduces network latency by a factor of N",
            },
            {
              id: "d",
              text: "It means only one agent needs to understand the protocol",
            },
          ],
          correctOptionId: "b",
          explanation:
            "Without a common protocol, connecting N agents requires N×(N-1)/2 custom integrations — each pair needs its own adapter. With A2A, each agent implements one standard protocol, reducing the integration count to N. This is the same insight behind TCP/IP for networks and HTTP for web services.",
        },
      ],
      tags: ["quiz", "assessment", "interview-prep", "review", "career"],
    },
  ],

  // ─── Rich overview content ──────────────────────────────────────────────

  overview: {
    heroSubheading:
      "An open protocol for building multi-agent AI systems — where agents discover, delegate, and collaborate across six frameworks and three model providers.",

    learnItems: [
      {
        icon: "",
        title: "The A2A protocol, end to end",
        description:
          "How agents advertise themselves via Agent Cards, the eight-state Task lifecycle, JSON-RPC 2.0 transport, Server-Sent Events for streaming, and the authentication model — the full spec, explained through working code.",
      },
      {
        icon: "",
        title: "Six frameworks, one protocol",
        description:
          "Build the same loan validation problem six ways: Microsoft Agent Framework, Google ADK, LangGraph with MCP, CrewAI, OpenAI Agents SDK, and a bare-metal agent loop. Each produces a standards-compliant A2A server — interchangeable at the protocol layer.",
      },
      {
        icon: "",
        title: "A production-grade capstone",
        description:
          "A multi-agent loan approval pipeline with six orchestrated agents, AI-driven decisioning, human-in-the-loop escalation, a React approval dashboard, and OpenTelemetry distributed tracing across the full pipeline.",
      },
      {
        icon: "",
        title: "Local-first throughout",
        description:
          "GitHub Models Phi-4 (free with a GitHub account), Azure AI Foundry Kimi-K2 and Kimi-K2-Thinking (free tier), and Foundry Local Qwen2.5 Coder (runs on-device). Every lesson runs without surprise API costs.",
      },
    ],

    aboutParagraphs: [
      "Most agents today work in isolation. They call tools through MCP, fetch data, execute tasks. But give three agents — built with different frameworks by different teams — a shared problem, and you are back to writing custom glue for every pair. The integration count grows with N. A2A removes that ceiling: each agent implements the protocol once, and any two agents that speak A2A can discover and work with each other without any bespoke adapter code.",
      "The protocol is precise about what it standardises. An <strong>Agent Card</strong> at <code>/.well-known/agent-card.json</code> declares the agent's name, capabilities, skills, and authentication scheme. Tasks move through eight defined states — submitted, working, input-required, auth-required, completed, canceled, failed, and rejected. Messages carry typed Parts (text, data, files). Streaming responses arrive over <strong>Server-Sent Events</strong>. Authentication (OAuth 2.0, mTLS, or API key) is declared in the card, not negotiated per-call. Everything runs over JSON-RPC 2.0.",
      "In this course you build the full picture. A QA agent from scratch using the A2A Python SDK. Then the same loan validation problem solved six ways — Microsoft Agent Framework, Google ADK, LangGraph backed by MCP tool servers, CrewAI, the OpenAI Agents SDK, and a bare-metal loop that shows what every framework automates. Each runs as a separate process on a fixed port. The capstone connects all six: a loan pipeline where AI handles 80% of decisions automatically, humans review the rest through a React dashboard, and every step is traced with OpenTelemetry.",
    ],

    detailItems: [
      {
        title: "Understand why A2A exists",
        description:
          "Explore the client-server architecture of A2A: what an Agent Card is, how tasks flow through the lifecycle (submitted → working → completed), and why standardizing inter-agent communication matters.",
      },
      {
        title: "Build and expose your first A2A agent",
        description:
          "Build a QA agent, wrap it in an A2A server using the Python SDK, and create an A2A client from scratch — covering Agent Cards, task lifecycle (submitted → working → completed), and Server-Sent Events streaming.",
      },
      {
        title: "Integrate six agentic frameworks",
        description:
          "Build agents with Microsoft Agent Framework, Google ADK, LangGraph + MCP, CrewAI, OpenAI Agents SDK, and Claude Agent SDK — each wrapped as an A2A server.",
      },
      {
        title: "Combine LangGraph with MCP tools",
        description:
          "Create a CodeAgent using LangGraph, connect it to FastMCP tool servers for structured tool access, and run it entirely locally with Foundry Local Qwen2.5 Coder.",
      },
      {
        title: "Orchestrate with Microsoft Agent Framework",
        description:
          "Build an OrchestratorAgent using Microsoft Agent Framework with Kimi-K2-Thinking that routes tasks to specialist A2A agents based on intent classification.",
      },
      {
        title: "Build the capstone multi-agent system",
        description:
          "Build the capstone loan approval pipeline — six orchestrated agents with AI-driven decisioning, human-in-the-loop escalation, a React approval dashboard, and OpenTelemetry observability.",
      },
      {
        title: "Production patterns",
        description:
          "Explore A2A extensions, TLS/OAuth 2.0/mTLS security hardening, OpenTelemetry distributed tracing, and GDPR/HIPAA compliance considerations for enterprise deployment.",
      },
    ],

    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["Python", "AI Agents", "Multi-Agent Systems", "Git"],
      description:
        "AI developers building multi-agent systems or working with agentic workflows. Familiarity with Python 3.11+ and a basic understanding of AI agents is recommended. No cloud accounts required — all model providers offer free tiers or local inference.",
    },

    audienceCards: [
      {
        icon: "🛠",
        title: "AI / ML Engineers",
        description:
          "You build AI-powered products and want a standard protocol to connect multiple agents — across frameworks, teams, and organizational boundaries.",
      },
      {
        icon: "⚙️",
        title: "Backend & Platform Engineers",
        description:
          "You design distributed systems and want to add agent-to-agent communication as a first-class capability in your architecture.",
      },
      {
        icon: "💻",
        title: "Full-Stack Developers",
        description:
          "You are exploring agentic AI and want a structured, code-first introduction to multi-agent orchestration with real, runnable examples.",
      },
      {
        icon: "📊",
        title: "Technical Leaders",
        description:
          "You evaluate emerging technologies and need to understand A2A's design, ecosystem backing, and what production readiness looks like.",
      },
    ],
  },
};
