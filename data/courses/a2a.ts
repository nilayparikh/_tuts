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
      videoId: "SMKyOgzPfTA",
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
          time: 4,
          speaker: "Instructor",
          text: "Welcome to LocalM Tuts. I am Nilay Parikh. This is the Lesson 1 of 16. In the A2A Protocol course. You will build production grade multi-agent AI system from scratch using 6 different agent framework and 3 model providers.",
        },
        {
          time: 19,
          speaker: "Instructor",
          text: "All free-tier or local. We have created a companion tutorial website. At tuts.localm.dev/a2a. We recommend following along there for interactive experience. If you are not starting from the playlist, you can.",
        },
        {
          time: 35,
          speaker: "Instructor",
          text: "You can find the playlist link in the description below if you are primarily here for code and hands on implementation. The practical session begin in lesson 5 where you start building your first A2A agent server client from scratch. Lesson 8 through 13 cover the 6 different agent frameworks and lesson 14 is more more sort of a capstone where we everything comes together.",
        },
        {
          time: 64,
          speaker: "Instructor",
          text: "In a real-life production pipeline that we strongly recommend walking through this foundation session first. They give you context to understand why the course structure is the way it is. So let's get started.",
        },
        {
          time: 80,
          speaker: "Instructor",
          text: "Agentic AI is one of the most exciting frontiers in artificial intelligence, but the challenge is that most agents today operate in isolation. They can call tools using MCP, they can access data, but they cannot talk to each other in a standardized way.",
        },
        {
          time: 99,
          speaker: "Instructor",
          text: "If you have 3 agents between the 3 different frameworks, connecting them means writing custom integration code for every pair. That is the N-Squared integration problem.",
        },
        {
          time: 111,
          speaker: "Instructor",
          text: "3 agents need 3 integration, Five agents need 10, and 10 agents need 45. Its scales exponentially. Each integration required a custom message format, custom streaming infrastructure, custom authentication. The engineering cost grew exponentially. While the business value grows linearly.",
        },
        {
          time: 135,
          speaker: "Instructor",
          text: "A2A — the Agent-to-Agent protocol — solves this. It is an open standard now under the Linux Foundation and that gives agent a common language to discover each other. Delegate the task stream. The result backed. It is built on proven web infrastructure. HTTP, JSON-RPC 2.0, And Server-Sent Events. Nothing exotic but solid. Now you might be thinking how it is different from MCP? MCP, the Model Context Protocol, connects a single model to its tools and data sources. Think of it as a vertical integration. For example, when we provide a problem or context in Visual Studio Code, GitHub Copilot, the model picks up the problem and then the model uses MCP to access local data sources, create files, or ask for additional information.",
        },
        {
          time: 194,
          speaker: "Instructor",
          text: "But that happens in a one session with the one model solving a one set of problem. That is vertical integration. A2A is horizontal integration. It connects autonomous agent to each other. Agent may be running in different models, different frameworks, even managed by different team and solving different problems. They are complementary. So let's not consider one is replacement for other. An An agent can use MCP internally to access tools, A2A externally to talk to other agents and we build these exact pattern in lesson 10 and onwards.",
        },
        {
          time: 232,
          speaker: "Instructor",
          text: "Here is what you will build in this course. You will create agents with 6 different frameworks: A2A SDK, Microsoft Agent Framework, Google, ADK, LangGraph, CrewAI, OpenAI Agents SDK, and Claude Agent SDK. Each agent will be powered by one of these 4 models discussed earlier. GitHub Models Phi- 4, Azure AI Foundry, Kimi K2 Thinking, Foundry Local Qwen 2.5, whichever you have access to. They are either free or runs locally free. I mean to say in the free tier you have access to free tier if you have not registered to those. Service provided, so no expensive cloud APIs are actually required. Over the 16 lessons, you will go from zero to a complete multi-agent system.",
        },
        {
          time: 284,
          speaker: "Instructor",
          text: "Lessons 1 through 3 cover the protocol fundamentals which I recommend. Please continue with this and lesson 4 to 7 — build the first A2A agent, server, client from scratch. Lessons 8 through 13 exploring those frameworks which discussed earlier. Lesson 14 is a capstone. As I said before This is a near-production real life loan approval pipeline.",
        },
        {
          time: 314,
          speaker: "Instructor",
          text: "With 6 different orchestrated agents, Human in loop escalation and react dashboard. And the lesson 15 and 16 covers the advanced topic. They do not deep dive, but they cover security, extension, observability and wrap up there for the next steps. By the end of this course, you will have a deep understanding of the A2A protocol and hands-on experience Building real life production ready multi agent system. So let's get started.",
        },
        {
          time: 344,
          speaker: "Instructor",
          text: "Thank you for watching this lesson on LocalM Tuts. In the next lesson, we will explore why A2A exists and the interoperability problem, the five design values, and where A2A fits in the agent stack. You can find the next video in the A2A Protocol course playlist, link on the website, visible below. See you there.",
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
      videoId: "lOq1PLh-FZk",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 2 of 16 — Why Agent2Agent Protocol? In this previous lesson we introduced A2A — protocol, the N square integration problem and the course road map.",
        },
        {
          time: 21,
          speaker: "Instructor",
          text: "If you are watching, this is a stand alone video. Find the complete course list link below following along with our tutorial site. Link is visible. If you are mainly here for code practical implementation, which starts in Lesson 5 — ",
        },
        {
          time: 37,
          speaker: "Instructor",
          text: "building your first A2A agent and between the less than 8 and 13 the walk through of 6 framework. But we recommend this foundation lessons first. They explain the design decision and you will encounter in every coding session. Right now we have tool calling where the model invokes functions directly, and we have MCP — the Model Context Protocol — which connects the model to structured data sources and tools. But neither of this solve agent to agent communication. Tool calling is synchronous and one directional. MCP is about connecting to data and tools, not to other autonomous agents. Let me walk through what A2A standardizes.",
        },
        {
          time: 84,
          speaker: "Instructor",
          text: "The raw REST API to not first the message format A2A defines Messages with typed Parts such as text, files, structured data, etc.",
        },
        {
          time: 97,
          speaker: "Instructor",
          text: "Second — streaming. A2A uses SSE, Server-Sent Events, built into the protocol. So you get a real time task update without building your own streaming infrastructure. Third — discovery.",
        },
        {
          time: 112,
          speaker: "Instructor",
          text: "Every A2A agent publishes the Agent Card at the well-known URL. This JSON document describes the agent's skills, capabilities, authentication requirement, another region this part to know what the agent can do. Fourth — the lifecycle.",
        },
        {
          time: 132,
          speaker: "Instructor",
          text: "A2A defines the state machine submitted, working input required, completed, failed, canceled. Every agent knows the same lifecycle contract. The 5th authentication — A2A supports OAuth 2.0, OIDC, API keys and mutual TLS out of the box You can declare the authentication requirement in your Agent Card and the client will honour it.",
        },
        {
          time: 162,
          speaker: "Instructor",
          text: "A2A is built on 5 core design values. Agentic — agents are autonomous peers, not passive tools. Composable. Any agent can call any other agent opaque. Callers do not need to know the agent's internals. Enterprise-ready with built-in streaming, authentication, push notifications, extensions, etc., and open — ",
        },
        {
          time: 186,
          speaker: "Instructor",
          text: "Apache 2.0 license, the Linux Foundation governance, and of course its completely vendor neutral. Where does A2A fit in this stack?",
        },
        {
          time: 198,
          speaker: "Instructor",
          text: "Think of it this way — at the bottom you have models such as like in our example Phi-4, Kimi K2 Thinking. Qwen. Above that we have frameworks such as ADK, LangGraph, CrewAI, Microsoft Agent Framework, OpenAI Agents SDK, Claude Agent SDK, then protocol. A2A connects Agents horizontally and MCP connects Agents 2 tools vertically.",
        },
        {
          time: 227,
          speaker: "Instructor",
          text: "On the top of the protocol set the orchestration. Any framework can orchestrate multi agent workflows and activity top your user facing applications. A2A was Originally proposed by Google in April 2025. As an open open protocol for agent interoperability, it quickly gain industry support and was transferred to the Linux Foundation for the neutral governance. The current specification in RC 1.0 with this 3 protocol bindings: JSON-RPC 2 point O, HTTP/gRPC, and HTTP+ JSON+REST. In this course, we use JSON-RPC binding. It's the most common in the ecosystem.",
        },
        {
          time: 274,
          speaker: "Instructor",
          text: "One important thing — A2A does not run your agents. It does not choose your model or replace MCP. It's a purely a communication protocol. Think think of it like an HTTP for agent. You do not need to know the implementation, just the contract.",
        },
        {
          time: 291,
          speaker: "Instructor",
          text: "Thanks for watching this lesson on LocalM Tuts. In the next lesson, we will deep dive into A2A's architecture, agent card messages, task state machines, SSE streaming, JSON-RPC methods. You can find the next video in the A2A Protocol course playlist.",
        },
        {
          time: 310,
          speaker: "Instructor",
          text: "See you there.",
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
      videoId: "exHERepcIsU",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 3 of 16 a A2A architecture deep dive. Last time we explored why A2A exists and the five design values where it fits in the agent stack.",
        },
        {
          time: 18,
          speaker: "Instructor",
          text: "If you are watching this as a standalone video and find the complete course in the playlist below. If you are eager to jump straight to the code, hands on lessons start in lesson 5, but this architecture session is especially important. Agent Card, the task state machine, SSE streaming are the concept you will implement directly in the coding lessons. Understanding them here will save your time. When you're writing the code. A2A is organized in 3 layers at the bottom. The data model defined in protocol buffers is a canonical source about that abstract operations such as like SendMessage GetTask on top protocol binding. The concrete wire formats this back currently defined 3 protocol bindings. JSON-RPC 2.0 O HTTP, gRPC and HTTP.",
        },
        {
          time: 76,
          speaker: "Instructor",
          text: "In this course, every server you will build use JSON-RPC, which is the most common binding in the ecosystem. So let us start with cornerstone of discovery, the agent card. Every A2A server published the JSON document at the well known path, which is slash dot well known slash agent-card.",
        },
        {
          time: 100,
          speaker: "Instructor",
          text: "JSON. The agent card has 3 main sections, first identity. Such as name, description, version, URL. The second supported interfaces. An array of interface object such as carrying URL protocol, binding protocol version. The 3rd capabilities boolean and arrays describing what an agent can do. Streaming support, push notification, and extensions and the skill with ID, name, description, tag, example prompts, input modes and output modes.",
        },
        {
          time: 141,
          speaker: "Instructor",
          text: "Now messages and parts. When a client sends work to an agent. It sends message. Every message has a role either its a user or agent.",
        },
        {
          time: 154,
          speaker: "Instructor",
          text: "And an array of parts a part is one of the types: Text raw bytes, URL reference structured data. Each part can carry metadata. filename media type. Extra key value pairs. This means you can send plain text, upload a CSV, reference a cloud Storage URL, or pass the JSON schema all in the same message.",
        },
        {
          time: 182,
          speaker: "Instructor",
          text: "The task is the central coordination object. When you call send message the server creates the task with unique ID, the task moves through the state submitted, working, completed, failed, cancelled, also, the A2A 1.0 spec adds 2 new state. Input required whether agent pauses to ask user For more information and the auth required whether agent need additional authentication from the client. Let us look at this state machine on the screen. The Mermaid diagram shows all the transitions. Notice if you notice the input-required and auth-required loop back to working.",
        },
        {
          time: 225,
          speaker: "Instructor",
          text: "The terminal states are completed, failed or cancelled. When they pass completed, it produces an artifact. An artifact generally has an ID. and an array of part for streaming. The append and lastChunk flags let the server set an artifact incrementally.",
        },
        {
          time: 246,
          speaker: "Instructor",
          text: "Speaking of streaming, when you call SendStreamingMessage instead of a send message, the server opens an SSE Server-Sent Events. The connection and push is the task status. Update event and task artifact update.",
        },
        {
          time: 263,
          speaker: "Instructor",
          text: "Each event carries the full task ID, updated status or artifact. When the status is a final set to true, the stream closes. This is how you get real time token streaming from any A A2A. Here are the core JSON-RPC methods: SendMessage and send streaming message for task creation, GetTask, ListTasks for query, CancelTask for cancellation SubscribeToTask for push notification. And then the push notification methods such as SetTaskPushNotification, get task push notification plus some other runtime capability discoveries. One important detail that all JSON and RPC methods use PascalCase SendMessage. Not the tasks/send.",
        },
        {
          time: 318,
          speaker: "Instructor",
          text: "The server handles the single HTTP endpoint, typically at the root path.",
        },
        {
          time: 325,
          speaker: "Instructor",
          text: "Let me show you the full interaction sequence, a client first fetches the agent card via GET, then SendMessage with the JSON RPC request. The server returns task in initial state, process it and returns the update. For streaming the same sequence use. SendStreamingMessage message the server responds with SSE stream each event in JSON line with task update.",
        },
        {
          time: 355,
          speaker: "Instructor",
          text: "The last event has final set to true. Extensions are how A2A stays forward-compatible any new. Capability, custom auth flows, multi turn workflows, domain specific metadata can ship as an extension without changing the core spec. Extensions are declared in agent card capabilities section. The client checks for supported extensions before using them. This pattern keeps the core protocol stable while allowing the ecosystem innovation. Thanks for watching this lesson on the LocalM Tuts. I am Nilay Parikh.",
        },
        {
          time: 394,
          speaker: "Instructor",
          text: "In the next session we will set up the development environment Python A2A SDK, GitHub Models, Azure AI Foundry and the course repository. You can find in the next video in the A2A protocol course playlist.",
        },
        {
          time: 410,
          speaker: "Instructor",
          text: "See you there.",
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
      type: "video",
      duration: "5 mins",
      videoId: "ok1F6PuKMLk",
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
      transcript: [
        {
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I'm Nilay Parikh. This is lesson 4 of 16. In the last session we cover A2A's architecture. Agent cards, Messages, Task Life cycle, SSE streaming, JSON-RPC methods. If you are watching this as a standalone video, please find the complete course playlist in the description below. This course uses 3 model providers to demonstrate A2A is model agnostic data model. provides Phi-4 with a free GitHub personal access token and a decent daily rate quota. Azure AI foundry host Kimi-K2 and Kimi-K2-Thinking. And many more models. And they do have a free tier, so if you haven't used them you can certainly give a try with them. And the Foundry local where we are running Qwen, the smallest Qwen version and it will be. It will be running entirely on the local machine, so no cloud needed.",
        },
        {
          time: 65,
          speaker: "Instructor",
          text: "You can use all of them. You can use, you can choose one of it, or you can bring your own model to test this examples. All 3 models expose OpenAI-compatible API endpoints. So you can use the same OpenAI Python SDK for all of them on the base URL and API key will change. Let us configure. Each provider first GitHub Models.",
        },
        {
          time: 92,
          speaker: "Instructor",
          text: "You can sign into the GitHub marketplace model page, find Phi-4 catalog, generate personal access token and make sure you provide the models:read scope. Then set your GitHub token in the environment variable. Its defined is available as a.env.example. You can rename it in the examples, and then replace it. The API endpoint is also going to be most likely same but just double check. Its a models.inference.ai.azure.com Yes that is a GitHub Models API endpoint. It speaks the standard OpenAI chat completion. Next, the Azure Foundry. You can sign it at ai.azure.com or you can actually create a foundry instance from Azure portal as well and deploy the choice of your model, copy the endpoint URL and the API key and set the 2 variables mentioned. At this same endpoint hosts the other models as well. So all you need is to just change the model name.",
        },
        {
          time: 160,
          speaker: "Instructor",
          text: "Finally, Foundry Local which also runs the AI model entirely on your local machine using the ONNX runtime. No API key, no cloud account needed. Install the Winget on Windows or brew on Mac, macOS, just install the Python SDK.",
        },
        {
          time: 176,
          speaker: "Instructor",
          text: "The Foundry Local manager handles everything. You can also configure them. Using the Visual Studio Code, important of Foundry Local is is a dynamic port assignment at the startup. So always use the manager endpoint, never hardcode a port, but for example that is going.",
        },
        {
          time: 196,
          speaker: "Instructor",
          text: "Here is a complete.env file example which you can replace the variable with and the smoke test validation. And once you set all your tokens, you can run the smoke test and it will let you know which model passes and which does not and that's the way you are ready to run the examples. Interactively into the next session from next session we will start the hands-on sessions. Thank you for watching this lesson on the LocalM Tuts In the next session, we will start building your first A2A agent from scratch using Phi-4 and you will find the next video in the A2A protocol course playlist. See you there.",
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
      videoId: "xD606KkVkoA",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 5 of 16 Building your first A2A agent. Last time we set up a development environment, Python the A2A SDK, GitHub Models, and the course repository. If you are watching this as a standalone video, please find the course playlist link in the description below.",
        },
        {
          time: 28,
          speaker: "Instructor",
          text: "Before we dive in, here is what you will find. All the code for the lesson, including the GitHub repository and the interactive tutorial link is available. In the description below. You can find them in the course submodule, clone the repo, open the lesson folder, follow the README, and you should be good to go.",
        },
        {
          time: 48,
          speaker: "Instructor",
          text: "We will build a QA Agent class. An asynchronous Python class wrapper that wraps the OpenAI-compatible API. It loads insurance policy document as context, constructs the system prompt, and answers the question using the Phi- 4 model via the GitHub Models API.",
        },
        {
          time: 66,
          speaker: "Instructor",
          text: "Key concepts. First OpenAI-compatible API pattern with the same SDK, different base URLs, second system prompt with knowledge injection and the third async-first design that we will wrap as an A2A server in the next session.",
        },
        {
          time: 85,
          speaker: "Instructor",
          text: "Let's see this in action. Open your terminal, navigate to the lesson folder and run the QA agent standalone. We will ask it the question about the insurance policy and let's see the response. Follow along. Pause the video if you need to catch up.",
        },
        {
          time: 103,
          speaker: "Instructor",
          text: "If you haven't got VS Code ready, you can also use our website to have an interactive Jupyter session. Other than running, you can probably access the example, the outputs, everything along with many other important content.",
        },
        {
          time: 123,
          speaker: "Instructor",
          text: "The link for this website of the course is in the description, please feel free to find. There is also a link for that example on GitHub that is the same link available and you can find the example that we are talking about. It's very well documented and you can access it straightforward. Now.",
        },
        {
          time: 144,
          speaker: "Instructor",
          text: "I have loaded that example into Visual Studio Code and let us see what we have done here. As described earlier we are creating a very simple configuration, which model it needs to use in a second block and then in step 2 we are configuring the client based on what selection we have made. The quick model test whether it works or not, so let's run up to this point.",
        },
        {
          time: 172,
          speaker: "Instructor",
          text: "Ah.",
        },
        {
          time: 176,
          speaker: "Instructor",
          text: "Execute all above steps and let's see. Voila.",
        },
        {
          time: 183,
          speaker: "Instructor",
          text: "Yes, so we got all of the above steps running now. Just a quick test.",
        },
        {
          time: 196,
          speaker: "Instructor",
          text: "Bear in mind the policy text will run this thing to configure. It's been back correctly. 2 + 2 equal to 4. run. Now we are building the QA agent. Let's load the domain knowledge. Now. Bear in mind the policy dot text will be replaced by the content of insurance policy. So this is just a simple insurance policy we have created and it will be replaced here as a system prompt for knowledge injection. So let's quickly run this thing to configure it's been RAM. Now we are building the QA agent.",
        },
        {
          time: 224,
          speaker: "Instructor",
          text: "This is this is the most important aspect where we are coming. It's a simple simple Python class you can actually create in any supported language the same way. It will configure model endpoint, API keys, everything the knowledge the system prompts. And most importantly, it is exposing one method called query. So whenever it's been whenever our client was sending a query, it will run this particular piece of code and find an answer. So lets lets see lets run this class. From the test the Q agent so I am just trying to find. Yeah, all good. So very fast question.",
        },
        {
          time: 265,
          speaker: "Instructor",
          text: "What is the deductible for the standard plan question printing?",
        },
        {
          time: 273,
          speaker: "Instructor",
          text: "So far it's just a simple chat completion with some sort of retrieval augmentation.",
        },
        {
          time: 289,
          speaker: "Instructor",
          text: "There we go. The answer is correct. As expected, the standard plan deductible, emergency deductible and prescription drug deductible. We sometime call it excess as well. So this question too, are the cosmetic procedure covered?",
        },
        {
          time: 313,
          speaker: "Instructor",
          text: "So we got the answer.",
        },
        {
          time: 317,
          speaker: "Instructor",
          text: "Cosmetic procedures unless medically necessary. So it's an expected line and we try our third out of scope question, which is not in the document: what is the capital of France, but you want to make sure that it just does not get the answer from model. But instead it return back saying that I do not have that information in the document. This is a very important thing and I think while this is running many of the agents fall back on the universal knowledge or the pre-trained knowledge of a model and ideally when they are building a model for retrieval, augmentation or specific use cases, we should avoid falling back or we should build resiliency enough that information is retrieved based on information that we have provided or retrieved. The answer appears and if the question is not within that scope, then it should come back with a clear denial.",
        },
        {
          time: 386,
          speaker: "Instructor",
          text: "Instead of augmenting it based on a training material.",
        },
        {
          time: 392,
          speaker: "Instructor",
          text: "So here, what is the capital of France, I am sorry, that information is not in the policy document. So this is very good so far.",
        },
        {
          time: 403,
          speaker: "Instructor",
          text: "Step 7 Building the claim agent multi turn. The A2A protocol also supports the multi turn interaction where the agent can request additional inputs from the client mid-task such as input required state and this is what we are going to demonstrate as a simple stand- alone agent. So let us run it. OK, the class has been initialized, now let's test the multi-turn.",
        },
        {
          time: 434,
          speaker: "Instructor",
          text: "So we got input required. If you recall the earlier sessions we have described the terminal States and also the. Umm, the follow-up states where input required does go back to processing state, one of the processing states, and then if the If the information is provided correctly then it can find back itself into termination state. So here we are going to provide that information.",
        },
        {
          time: 467,
          speaker: "Instructor",
          text: "And by the way, if you have seen it, we will maintain the session ID and that's how the correlation is actually handled. So session ID was created here and session ID was passed here. That's how the agent will ensure the memory is maintained. Memories are very important aspect in building agents. We are currently focusing on A2A protocol. But building agents itself, it's an art and we will come back with some nice tutorials on what are the areas we need to look, look at, look for. When we are building agents as well and what are the best practices?So when it has completed, it has built the claim receipt and a the whole information has returned with the perfect status completed. So it has reached the status into terminal phase. The multi turn documentation, what we have done, you can hear see it a sequence diagram. It's the same thing what we did. And what we demonstrated now we are building a policy summary agent. So let's run it. We got a policy summary agent and now we are just trying to summarise a policy. So its the same knowledge base that we have provided, but based on that you will just simply use for summarization of the policy.",
        },
        {
          time: 557,
          speaker: "Instructor",
          text: "So if you see in this summarization, what we have done is providing a knowledge path which is here. Provided the model information and everything and then we instructed the model that provides the summary in certain structure. This is very important when we are building agents as well because agents has data parts and data parts sometime may not be strongly structured. So how to?How to encourage each joins and models which are which are probabilistic to produce some deterministic structure and more and more we master the the art of prompting and correct weightage we can actually get. Near to deterministic structural outcome. So we have we got it now you can see it has delivered in a very good way covered services and exclusion. It's a wonderful way of summarization. These agents are very useful for voice, especially if they are connected with the voice agents as well. Because when automated marketing calls or when user query calls comes, this provide a wonderful way of augmenting large amount of data into summarised documents and then we can actually deal further with that particular kind of kind of request, especially its coming from voice agents.",
        },
        {
          time: 644,
          speaker: "Instructor",
          text: "Multi skilled routing. Ethan read it, its its again a sort of a another another type of agent that we have written and it demonstrate various capabilities around skills. So it it got it got a skill routing now and we gonna we have created 3 skills.",
        },
        {
          time: 663,
          speaker: "Instructor",
          text: "Policy question and answer, claim filing and policy summary. So let us basically rangle skills. This skills has the similar similar design or architecture like what we call it cloud skills or any other GitHub copilot skills.",
        },
        {
          time: 684,
          speaker: "Instructor",
          text: "So there is nothing much difference in terms of principle what skills are, but it's just a different way of implementing the skill, most likely programmatically way we will be implementing the skills using. Girls using program itself.",
        },
        {
          time: 703,
          speaker: "Instructor",
          text: "You can see here Multi user base with the name of multi skill agent and we are running. So when we run this test, what should resolve who is then see that Bennett somebody is asking premium, it's moving to the policy QA skill. I meet to file a claim, its moving to the claim filing skill. Give me a summary of a policy, its going to the policy summary skill.",
        },
        {
          time: 729,
          speaker: "Instructor",
          text: "And this skills can actually be also rooted to different agents down the line as well. So it provides a very, very, very insightful and comprehensive asymmetrical horizontal integration with multiple agents. And this is now we are moving you to the much more. Real life use cases. In real life, agents are not just one class.",
        },
        {
          time: 756,
          speaker: "Instructor",
          text: "In real life agents are computation of hundreds of different colours, communicating to each other, building building, working on different knowledge bases, providing bias or unbiased output and then. On assembling the final result back to the original request. So in real world, agents are never going to be a linear or symmetrical.",
        },
        {
          time: 780,
          speaker: "Instructor",
          text: "So, well, we did the policy outline. And we did the claim filing using a skill you can see here. We did the claim firing using the skew.",
        },
        {
          time: 796,
          speaker: "Instructor",
          text: "Then now we are waiting for the final response.",
        },
        {
          time: 802,
          speaker: "Instructor",
          text: "I know it might sound overwhelming when you are running this first time.",
        },
        {
          time: 809,
          speaker: "Instructor",
          text: "I would I would recommend you to give a good run, give a good reading. One, one time, twice, thrice may be little bit more. Writing agents is a abstract thinking and. For anyone who has. Who has not developed that area of a skill?",
        },
        {
          time: 832,
          speaker: "Instructor",
          text: "Its sometime fine little bit confusing and there is nothing to be wrong about because not everyone learn abstract thinking in a in a in a very early stage of career. So if you are at the earlier stage of career and if you find this little bit overwhelming instead of.",
        },
        {
          time: 849,
          speaker: "Instructor",
          text: "Instead of giving it up, I would recommend go through couple of times, build the packets of thinking in abstract way and then with agents will make much more sense that how this whole things is working slowly. Because if you see here we haven't got any deterministic code logic. But still the outcome is near to deterministic and that is the idea of agents. We don't want to code the business logic but we want to direct agent to build the business logic as part of their abstract declaration, as part of their abstract definitions and then. Generate the near deterministic or absolutely deterministic outcome and this is what we see here. And this is all happening using WiFi 4 which is very entry level model. So you can see that writing the good agent is actually a how important it is to write agent in the right way?And using agent in a right way even. Even the entry level model can perform really brilliant work. Not everything need to go to the Super smart models. Of course. If we use super smart model we can solve many complex problem. But not all the problems deserve those super smart models either. And there very costly as well so.",
        },
        {
          time: 930,
          speaker: "Instructor",
          text: "Now we are going to go for small experiment how much the monthly premium and also thing and it will load the skills and it will show us the result.",
        },
        {
          time: 947,
          speaker: "Instructor",
          text: "There you go. Policy, QA takes completed. Everything just looks good. So we have covered practically everything that A to a does offer as an agent. Multi turn artifacts, data part, multiple skills, task, life cycle and text part.",
        },
        {
          time: 963,
          speaker: "Instructor",
          text: "These are agent. We have just build an agent. Now in the next subsequent sessions we will explode them, how to embed them as a server and then using the client start consuming them. But I hope you like this End of this lesson you have working Q agent that answer insurance question using the FIFO. It's tested in its time stand alone in a notebook. In the next session we will wrap as a discoverable A to A session. Thanks for watching this lesson on LocalM Tuts. In next lesson we will wrap this agent. In a fully discoverable A2A server with an aged card and HTTP endpoint, you find the next video in the A2A protocol.",
        },
        {
          time: 1009,
          speaker: "Instructor",
          text: "Course playlist which is available. The link is available in the description NICU there in the next session.",
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
      videoId: "mXEXEy53UTk",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 6 of 16, Wrapping Agents as an A2A Server. In the last lesson we built our first A2A agent, a QA Agent powered by GitHub Phi-4. If you are watching this as a standalone video, please find the complete course playlist in below description and follow along with the URL for a course home along with the URL for a course home page. It is also available in the description below. Here is where you find all the code for the lesson. The examples and the link for the GitHub repository is in our description as well as the interactive lesson and the link also available in our description. Clone the repo, open the lesson folder and just simply follow along. Three pieces: an Agent Card JSON at the well-known path.",
        },
        {
          time: 63,
          speaker: "Instructor",
          text: "An AgentExecutor that bridges our agent to the A2A protocol and a Starlette server that speaks JSON-RPC and serves the SSE streams.",
        },
        {
          time: 77,
          speaker: "Instructor",
          text: "The key concept is the central abstraction. Every framework in this course implements it differently, but the interface always remains the same. Receive a request context, produce events on a queue.",
        },
        {
          time: 94,
          speaker: "Instructor",
          text: "Let's see this in action. We will start the A2A server and then we will we will send the JSON-RPC request and watch and verify the agent card. After that we will send the JSON-RPC request and watch the agent respond. Follow along, pause the video if you need to catch up.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "Hello, welcome to the practical session. We have also created a simple notebook for interactive session and if you haven't got access to VS Code and if you are on the phone or anywhere else, you can certainly use our website which has an interactive notebook. Available with lot of other information and more material. It will help you to build a good learning experience with some decent question and answers that would help you if you are preparing for your interviews.",
        },
        {
          time: 148,
          speaker: "Instructor",
          text: "But let us see this live in our notebook session.",
        },
        {
          time: 155,
          speaker: "Instructor",
          text: "So let us restart the kernel so everything is good enough. And. In the lesson 6 Wrapping agents as an A2A server, all we are gonna do is implement AgentExecutor and wrap up the component that we built in the fifth lesson, which was an agent. It will handle the multi turn conversation conversations, return artifacts, support task cancellation. If we provide a rich Agent Card image, the streaming events and wire up the default request handler and the Starlette application for server exposure, it will cover most of the A2A protocol features, so this is quite interesting from learning perspective. It's a simple implementation of a single agent, but it covers most of the concept that you would like to learn through the A to A implementation. The first couple of first cells will install all the dependencies if you need and then configuration to the models so let's quickly run them. We already got those dependencies sorted so it should be OK.",
        },
        {
          time: 233,
          speaker: "Instructor",
          text: "There you go, we just finished it. We got it there now defining the agent class, which I think we already got there in in a previous configuration. So all we need to do is let's quickly come back to it. So it got same classes, multi- agent, and everything that we did in the previous implementation, so let's run the 3rd.",
        },
        {
          time: 258,
          speaker: "Instructor",
          text: "And that's it. Implementation of Enhanced Agent Executor. I would strongly recommend reading this sequence flow. It will help you to understand what exactly this particular example is doing in detail. I will leave it to you for a detailed reading.",
        },
        {
          time: 278,
          speaker: "Instructor",
          text: "On. On your available time, but let's now start implementing the Agent executor. AgentExecutor is a wrapper on top of the agent and it is using the A2A component. A2A classes and methods to implement the interface into our agent. So let's run it. So as you can see it using artifacts, data parts, message events, and request context so it's well documented. So it should be OK for anyone to read and understand, but if it is not, please feel free to drop comments and I will try my best to come back. Now we are defining the rich Agent Card. The Agent Card is nothing but just a metadata and an important aspect of this Agent Card is, remember the served card will be exposed by exposed to agents and agents will assess whether they would like to use the skills or capabilities available based on this agent card. So, so its better to always give a good attention that what kind of a density and what kind of a sparsity we want to provide intent. So when LMS are deciding which agent we need to wrap buyer up, which agent we need to connect to, it provide intent. So when LLMs are deciding which agent we need to wire up, chain the path, but to actually let agent discover the capability across the agent in AI and make it organically discoverable. That's the ultimate idea.",
        },
        {
          time: 370,
          speaker: "Instructor",
          text: "And that that is a very powerful concept increment. So always make sure that. You spend good time with this agent card because Dad is going to be a very basic building block in terms of how your ecosystem or how your overall architecture of Atki is coming up.",
        },
        {
          time: 389,
          speaker: "Instructor",
          text: "Now let's bring up the server is a pretty straightforward which is put the agent executed inside at a provide the memory task too.",
        },
        {
          time: 399,
          speaker: "Instructor",
          text: "They are not gonna go in detail especially the memory that is very much agent concept. But in some other tutorial I will making future when I will cover agent in detail, I will discuss the agent take memory in depth in land. Its a very important its very important concept and. One of the one of the lower area where I see very liked likelihood of missing the nuances. So see let's solve this, mark this area and if you know already, you can always.",
        },
        {
          time: 434,
          speaker: "Instructor",
          text: "Progression up your knowledge, but please feel free to subscribe and when we got that course up and running you will get a notification. Running the server. So we got all things up and running. Now we just couldn't do is can I run this server is up and running now the server is this thing on.",
        },
        {
          time: 454,
          speaker: "Instructor",
          text: "One O1. Bought and what we do is we will, uh, so these are the already something I have already called and this is what the outcome going to look like. But will free it will cover practically every important aspect of it with protocol other than security and other aspect which I said we are gonna touch up, we're gonna touch touch base them just for awareness in this particular tutorial set of tutorial. But in the in the advanced tutorial, we will deep dive into many other. Enterprise related aspects as well, but that tutorial will come in future as well as so again please make sure you subscribe so you get it modification and in the next particular lesson we will use this server to connect with our east to a client and we will see how it works.",
        },
        {
          time: 509,
          speaker: "Instructor",
          text: "Yoku agent is now live at 2:00 server. Any A2A client from any framework can discover it at the well known URL and send the task. Next we will build the client. Thanks for watching this lesson on LocalM Tuts. In the next lesson, we build the client side.",
        },
        {
          time: 528,
          speaker: "Instructor",
          text: "Discovering agents, sending tasks, and handling both blocking and streaming responses the A2A Protocol course playlist. The link is in the description. See you there in is the description and see you there in the next.",
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
      videoId: "aTqo4ssrz4U",
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
          time: 6,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 7 of the 16 A2A Client Fundamentals. Last time we wrapped up our agent as a fully discoverable A2A server with Agent Card and HTTP endpoints. If you are watching this as a standalone video, please find the link of the full playlist in the description section below.",
        },
        {
          time: 28,
          speaker: "Instructor",
          text: "Here is what you gonna find the code for this lesson, the GitHub repository and interactive course page in the description section. Clone the repo, open the lesson folder and follow along.",
        },
        {
          time: 41,
          speaker: "Instructor",
          text: "The client has 3 important steps. Resolve the Agent Card to discover the capabilities. Send the blocking request to get the full response and send the streaming request for the real-time SSE updates. Blocking is a simple one request, one response. Streaming gives you real-time progress, status updates as the agent works and the artifacts as they are generated. Both use the same JSON-RPC protocol. Let's see this in action. First, make sure the A2A server from lesson 6 is running on port 10001 and then we will run the client script. It discovers the Agent Card, sends the blocking request, receives the response, and then does the same with streaming. Watch SSE event flow in real time.",
        },
        {
          time: 93,
          speaker: "Instructor",
          text: "We will have the server running from our last example server and it is listening on 10001 so now let's see how it works on a client side.",
        },
        {
          time: 105,
          speaker: "Instructor",
          text: "We also have an interactive page if you are not with access to a computer. You can obviously use this on mobile phone. It's screen-friendly and it got a lot of other information to read with the question and answers. Very helpful in the interviews if you are preparing for any. Artificial intelligence engineer roles.",
        },
        {
          time: 129,
          speaker: "Instructor",
          text: "Let's let's get started with our client.",
        },
        {
          time: 136,
          speaker: "Instructor",
          text: "So this is a simple, notebook.",
        },
        {
          time: 142,
          speaker: "Instructor",
          text: "With covering most of the important client fundamentals and in this notebook we will inspect the multiple skills, send the blocking request, handle the multi turn conversation, stream the response with an A2A client, send_message and streaming artifacts with TextPart, DataPart, cap- abilities. We will also try to cancel the task. See what happened, exchange structured data and handle the errors gracefully. You can see what features we are exercising here. There is a there is a decent read in this notebook. I would strongly recommend you to take the time, give it a read for couple of times. It might be difficult concept if you are not familiar with abstract programming.",
        },
        {
          time: 191,
          speaker: "Instructor",
          text: "So let's start installing the dependencies if we need to. All dependencies there, just running a simple class which.",
        },
        {
          time: 203,
          speaker: "Instructor",
          text: "Prides U did I run this?",
        },
        {
          time: 209,
          speaker: "Instructor",
          text: "Umm. At the window, check base URL and then discover the agent. Discover the agent. And remember, from our last skills, policy QA, custom claims filing, and policy summary, it's all coming from server. So we haven't implemented an agent class here nor we have a nor we have implemented an agent server. We are purely connecting.",
        },
        {
          time: 238,
          speaker: "Instructor",
          text: "To localhost 10001 and you can see based on agent card we are resolving all of these and we are getting skills and all the information that we need an R alms to decide what skills it need and LLMs to decide what skills they need see if you are ready with helper.",
        },
        {
          time: 258,
          speaker: "Instructor",
          text: "Very good client is ready. Now we just going to build a very simple request. So these are just the builder build-up methods. Let's define them here. I think there methods, let's define them and then we will start with the blocking call. It's a simple policy query.",
        },
        {
          time: 281,
          speaker: "Instructor",
          text: "So in this particular example it is running via the server. So if I open the server here you can see the are connecting. So we connected the agent card first and now we are connecting to the HTTP request which is the JSON- RPC request coming from this client.",
        },
        {
          time: 301,
          speaker: "Instructor",
          text: "Well done. So we I think completed the bill request. We just completed the block task completed answer. So what we have asked what is the annual deductible? So we got all the same answers from the client. So if you have seen the lesson 5, this was the same answer coming and now we are getting the same agent. Executed using the server and this is the This is the beauty. We can actually compare all the answer, question and answer from agent and client. They will always match and now we are going to do the test multiple question and answer.",
        },
        {
          time: 338,
          speaker: "Instructor",
          text: "Very good, its moving quickly.",
        },
        {
          time: 347,
          speaker: "Instructor",
          text: "Wonderful we got all the answers and their absolutely correct now multi term conversation. It's the same monthly term conversation that we have demonstrated in the right way agent, but now you would be calling using the A2A protocol. We have the server method?",
        },
        {
          time: 368,
          speaker: "Instructor",
          text: "So let's. Turn the partial claim and we will send missing information so it should come back with the state input required. And then we will provide the missing details. So it has come back and said task input required state. Please provide the rate of service amount in description. So I am going to provide them here. Service on this and description and by the way I am not passing the structure data I am passing.",
        },
        {
          time: 399,
          speaker: "Instructor",
          text: "Semantical data and it will translate into structured data and process.",
        },
        {
          time: 407,
          speaker: "Instructor",
          text: "This is why. Self discoverable agent with a true agent capability of acidity. And This is why it particularly solved the Earth square problem because if let's say if you are building a insurance company claim portal or a claim submission portal. Its one of the nightmare to handle the number of the fields that required number of the process is that required and all of these can actually become very simple if the correct abstract process has been followed and we actually build the agent Akai and that reduce the north square problem. Into the end problem and O square is exponential cost against the linear business value compared to O which is the linear cost against the linear business value and that's why when the business scale the O always give far more competitive edge over the O square.",
        },
        {
          time: 470,
          speaker: "Instructor",
          text: "So well we completed the task, the claim process has been completed and also of staff that require expected is coming back and it explain what multi multi full summary should look like structure data policy. So we are going to pass simple information and say give me summary of my policy and this is the same example.",
        },
        {
          time: 491,
          speaker: "Instructor",
          text: "We also run during the 82 agent.",
        },
        {
          time: 499,
          speaker: "Instructor",
          text: "There you go, it's perfect.",
        },
        {
          time: 503,
          speaker: "Instructor",
          text: "Streaming response same way. Please read the.",
        },
        {
          time: 509,
          speaker: "Instructor",
          text: "The sequence diagram its very interesting and important understand how the SSE stream works. JSON-RPC is not deal, they are not dealing with SSE when it comes to back end up simple micro service architecture or service oriented architecture. But SSEs are very important when it comes to agent Agri and something need to be mastered for sure. So what I'm going to do is I'm gonna stream my question and answer. And see look it is going to it is actually working in progress and soon as my question and answer is been delivered back from agent to to this particular client it will print it. So its continuously running instead of blocking the all it is progressing.",
        },
        {
          time: 556,
          speaker: "Instructor",
          text: "As it receive the artifacts and the process and updates.",
        },
        {
          time: 565,
          speaker: "Instructor",
          text: "There we hope we could. Both of them very good. Now we are doing the stream policy summary. It's going to work like same so I'm gonna skip it. But this is how the response going to look like the Tau scanlation. So we will fire the task at the end will cancel it.",
        },
        {
          time: 584,
          speaker: "Instructor",
          text: "There we go, we find the task. First of all, we got the response, then we cancel it. So if you see here we build a payload, we create a request, I want to file medical claims and and then immediately we send the cancellation request cancellation as well. So here cancel payload and then.",
        },
        {
          time: 606,
          speaker: "Instructor",
          text: "And we got this whole ideas. Then tax everything. They will discuss return task polling. So it will constantly give us what is happening with the task.",
        },
        {
          time: 620,
          speaker: "Instructor",
          text: "There is nothing there and error handling. So here we expect. The error.",
        },
        {
          time: 630,
          speaker: "Instructor",
          text: "Which is. Not the error that is.",
        },
        {
          time: 636,
          speaker: "Instructor",
          text: "UM, not the error, technical error, but as I said that there will be out of the scope questions like what medical, medical, what medication are excluded that that that information doesn't available, is not available in the context. So we anticipate that policy document is not explicitly. Specific the requirement so this is what it call safe queries and guard drilling and let's see how it works. So air handling.",
        },
        {
          time: 670,
          speaker: "Instructor",
          text: "And obviously we do handle errors such as like, connection etcetera. So policy does not specifically, however, it does not.",
        },
        {
          time: 680,
          speaker: "Instructor",
          text: "Perfect.",
        },
        {
          time: 683,
          speaker: "Instructor",
          text: "That the non existence task. So here you can see they are trying to get some of the task that doesn't exist. We haven't created and we are getting the response graceful fail test, the invalid method. This method doesn't exist and we get a very reasonable massage and the experiment.",
        },
        {
          time: 705,
          speaker: "Instructor",
          text: "So we are going to file the spawns. Here we go. You are filling the response and response has been filed and now we want to close the client. So lets close the client and there we go.",
        },
        {
          time: 718,
          speaker: "Instructor",
          text: "And we covered everything that we anticipated. So let's see how server works. So you can see here we made lot of good request to server and we practically achieve everything that we need and including the request failure.",
        },
        {
          time: 732,
          speaker: "Instructor",
          text: "That we force the method of form. So that's a very. Detail understanding of Janvi capabilities, what an A2A client can do. So this time we went from client to server and then we invoke the agent via the executor. So abstract executor and.",
        },
        {
          time: 755,
          speaker: "Instructor",
          text: "And that proves how a 2 evening actually deliver end to end agent infrastructure and how it communicate across the multiple layer.",
        },
        {
          time: 771,
          speaker: "Instructor",
          text: "Now you have the complete server client loop, agent caught discovery, blocking requests, streaming request error handling. The client pattern is reusable in every integration session.",
        },
        {
          time: 786,
          speaker: "Instructor",
          text: "Thanks for watching this lesson on local LocalM Tuts. In the next session we will integrate Microsoft Agent Framework. So from next lessons we will start exploring different frameworks available to us and how they integrate with their A2A agents. Building an orchestrator. That root the task to remote A2A agents and you can find the next video in the A2A protocol course playlist link available in the description ICU there.",
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
      videoId: "oGwg0VwGyY8",
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
          time: 9,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts, I am Nilay Parikh. This is lesson 8 of 16, A2A with Microsoft Agent Framework. In the last lesson we built the client side: discovering agents, sending tasks, handling both blocking and streaming responses. If you are watching this as a standalone video. Find the complete course playlist linked below in the description and follow along at tuts.localm.dev/a2a.",
        },
        {
          time: 38,
          speaker: "Instructor",
          text: "Here is where you find all the code for the lesson. The GitHub repository link is in description as well as the interactive tutorial page. Link in description, clone the repo, open the lesson folder and follow along. Three files: orchestrator with the tool decorated functions, server that exposes A2A, and client to test it. The orchestrator uses A2A agent proxy objects to call the remote agents discovered via the Agent Cards. The A2A agent proxy is a key pattern. It wraps any remote A2A agent as a local callable. The orchestrator doesn't know what framework or provider.",
        },
        {
          time: 85,
          speaker: "Instructor",
          text: "The remote agent uses, it just sees the Agent Card and sends the task. Let's see this in action. Install the dependencies, configure Azure credentials. Then start the server and client in separate terminals. Watch the orchestrator discover agents via their Agent Cards and route the tasks using LLM-based tool calling. Pause the video and try it yourself. Just a one quick note, you don't need Azure credentials or Azure AI Foundry to run this example. Microsoft Agent Framework is agnostic, you can use it with other OpenAI-compatible URLs as well, and you can discover many different methods and many different compatibility with their documentations. So please follow if something different you want to you would like to try with example, but we will keep it simple with our Azure Foundry AI.",
        },
        {
          time: 151,
          speaker: "Instructor",
          text: "Welcome to lesson 8 Practical example A2A wrapping with the Orchestrator agent. In this we will validate the loan validator as we pass our various loan application and see what happens. The architecture is pretty simple from lesson 8 to lesson 13. They all tried to solve the same problem but using different stacks and they all try to adhere to the A2A protocol. So let's see the first Microsoft Agent framework. We have 3 components, the client which you connect, the orchestrator which you orchestrate, the agent and the server.",
        },
        {
          time: 190,
          speaker: "Instructor",
          text: "Which will host the A2A connection and then the 2 common files which are shared across all the SDK examples: the loan data. Instead of creating a database I just created a simple Python file with the loan and the validation rule. So they have their own validation rules where they can accept or reject just to make sure we have result quality. Now once this example is run, it can also log the complete audit template, what it did, what happened, what the reasoning behind the rejection or acceptance and what it did. And if I go in alone data, then this is what we generally expect. We expect a couple to review, a couple to decline, and couple to approve.",
        },
        {
          time: 236,
          speaker: "Instructor",
          text: "So now let's run everything. To run it, you go in the Microsoft Agent framework path, simply set up. I assume you have already set up your Python virtual environment or the environment that you are running and then simply python server.py.",
        },
        {
          time: 255,
          speaker: "Instructor",
          text: "So I think we are in the wrong folder, cd src.",
        },
        {
          time: 262,
          speaker: "Instructor",
          text: "Run python server.py there in the client as well as src, and I will just see if the server is open and running. Yep, server is up and running on 10008 and I will just run client.py.",
        },
        {
          time: 279,
          speaker: "Instructor",
          text: "It will try to process the data. So we can see here it is processing data.",
        },
        {
          time: 288,
          speaker: "Instructor",
          text: "And actually it is going to Azure.",
        },
        {
          time: 293,
          speaker: "Instructor",
          text: "By now, so let me see if I can get Azure.",
        },
        {
          time: 307,
          speaker: "Instructor",
          text: "While it is running. Let's see. And if you don't have access to this particular Visual Studio Code or or examples at the time you are watching this, you can actually use our interactive page where there is lot of information to read, understand and it explained in very detail. And if you are especially preparing for interviews and there are really interesting questions that you can go through and actually validate while running this thing. And also we have we have very very detailed run steps. So hopefully it should not be difficult for anyone to make this example run. But lets see whether the model does work.",
        },
        {
          time: 348,
          speaker: "Instructor",
          text: "And yes, we see this. We suddenly see after its. This is the time I'm running. And we now have certain tokens going through, so it is connecting. Into Kimi-K2-Thinking. There you go, you are done. So it did, saying like it rejected Bob Kwan. As when declined it given a very good reasoning as well. why it has declined and this is again I am trying to mention that agents are not supposed to be deterministically rejecting or accepting Agent must do semantic and agent. Analysis and provide a proper reasoning and flag. So these slacks and risk flags. Reasoning is not generated deterministically; it is generated by the thinking model. And there is another conversation some other day we will do why thinking model and why thinking model do better than non thinking model. And for this particular application the thinking model is very useful and will talk in some other particular tutorial where we will discuss partly specifically this point that. Regular reasoning model versus reasoning thinking model and how to implement and benefit from thinking. So well.",
        },
        {
          time: 432,
          speaker: "Instructor",
          text: "It did everything and none of these comes via. The hard deterministic coding, it all comes via the agent itself and the detail. verify log is here. As we can see it has stopped here as well, so that's good. So why have we actually did the Microsoft Agent Framework? It is. It's a simple, but really useful. And you can see VI using Agent framework here and it's really, really interesting.",
        },
        {
          time: 465,
          speaker: "Instructor",
          text: "Thanks for watching this lesson on LocalM Tuts. In the next lesson Google ADK shows how simple A2A integration can be. Just one function call with to_a2a(). to a. You can find the next video in the A2A Protocol course playlist link in the description. See you there.",
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
      videoId: "6pIgKOY16IE",
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
          time: 4,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts, I am Nilay Parikh. This is lesson 9 of 16, A2A with Google ADK. Last time we build an orchestrator with Microsoft Agent Framework that routed tasks to remote A2A agents. If you are watching this as a standalone video, find the complete course playlist linked below in the description. Here is what you find. All the code for the lesson, the links of GitHub repository and the interactive page is in the description. Clone the repo, open the lesson folder and follow the loan validation agent using KAMI key 2 Thinking via the LiteLlm adapter.",
        },
        {
          time: 47,
          speaker: "Instructor",
          text: "The magic is what method is called to_a2a(). It auto-generates the Agent Card, creates the executor and starts the server. One line replaces everything from lesson 6. Compare this to lesson 6 where you wrote the Agent Card, JSON, AgentExecutor class, and server startup manually. ADK does all 3 in a single function call. It also supports multi-agent patterns, sequential parallel and the loop agent natively. Let's see this in action.",
        },
        {
          time: 83,
          speaker: "Instructor",
          text: "Install dependency, configure the credentials, start the server on port 10002. Run that line and watch how to_a2a() does everything: Agent Card, executor, server, just in one line. Pause the video and try it yourself.",
        },
        {
          time: 103,
          speaker: "Instructor",
          text: "Lesson 9. Practical implementation for Google ADK. As we saw, is just a one method. Does all the magic. to_a2a() is a one liner that converts any ADK agent into the standard A2A server and this is what we are doing. We are just literally calling to_a2a(), to A and the same pattern as we discussed in the Microsoft Agent Framework orchestrator which does the orchestration, and we are using Google ADK components. And the same logic, same approach, but with the Google ADK.",
        },
        {
          time: 140,
          speaker: "Instructor",
          text: "And the client. The client always uses A2A because I am. the key aspect that I want to prove is A2A interoperability works irrespective of server implementation. So the server and orchestrator implementation use the SDK, but the client implementation uses A2A.",
        },
        {
          time: 159,
          speaker: "Instructor",
          text: "a. Of course you can do the client implementation using Google SDK as well. But it demonstrates like how interoperability is available with A2A as well. So lets see the same loan data, the same validation rule and we are in the same.",
        },
        {
          time: 178,
          speaker: "Instructor",
          text: "Yes, src. So let's just go ahead and run the app. server, and let's see what happens.",
        },
        {
          time: 189,
          speaker: "Instructor",
          text: "python client.py, and let's see if the server is up and running by now.",
        },
        {
          time: 196,
          speaker: "Instructor",
          text: "Coming back home.",
        },
        {
          time: 199,
          speaker: "Instructor",
          text: "There we go, it's up and running. Now some of the experimental warnings, I haven't suppressed it and now let's run the client.",
        },
        {
          time: 209,
          speaker: "Instructor",
          text: "Again, I said some of the experimental conditions, some of the experimental flags I haven't turned off.",
        },
        {
          time: 219,
          speaker: "Instructor",
          text: "But it is validating perfectly.",
        },
        {
          time: 225,
          speaker: "Instructor",
          text: "See.",
        },
        {
          time: 229,
          speaker: "Instructor",
          text: "It worked well. These warnings come from experimental features and I should have done slightly better, but yeah, it's not an error. It's not fake.",
        },
        {
          time: 244,
          speaker: "Instructor",
          text: "And if we go back on lesson 9, it does generate the same approvals and rejections. See Just stopping everything here.",
        },
        {
          time: 259,
          speaker: "Instructor",
          text: "And job done, it has dropped properly. Perfect. So now, let's wrap it up with a very simple cover.",
        },
        {
          time: 270,
          speaker: "Instructor",
          text: "The orchestrator does the magic about how to orchestrate in different sessions agent, and it also uses LiteLlm. By the way, Google ADK may be hard to port on Azure or anything. It generally very good with the vertex AI or Google cloud dependency. But if you are using Azure any other?",
        },
        {
          time: 292,
          speaker: "Instructor",
          text: "LLM endpoints then you might need a LiteLlm adapter, which is not a bad idea. It is a good thing it is available in Google ADK itself, and it helps you to port to any other model. And the client is simple: A2A client, and the server: simple Azure use, simple Google ADK to_a2a().",
        },
        {
          time: 313,
          speaker: "Instructor",
          text: "A. That's it.",
        },
        {
          time: 325,
          speaker: "Instructor",
          text: "You have built the simplest A2A integration in the course: a fully compliant server in about 15 lines. The orchestrator from lesson 8 can already call this agent without any changes. Thanks for watching this lesson on LocalM Tuts. In the next lesson we will combine A2A along with LangGraph, building a ReAct agent that uses MCP tools, A2A for agent communication. You can find the next video link in the A2A Protocol playlist.",
        },
        {
          time: 361,
          speaker: "Instructor",
          text: "In description, see you there.",
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
      videoId: "Nt9eENHhGX8",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 10 of 16, A2A with LangGraph. In the last lesson Google ADK showed how simple A2A integration can be with just one function call. If you are watching this as a standalone video, you can find the playlist link in the description below.",
        },
        {
          time: 25,
          speaker: "Instructor",
          text: "Also, the links for the example GitHub repository and interactive page are available in the description. Clone the repo, open the lesson folder and follow along alone. Validator validation agent using LangGraph's ReAct pattern.",
        },
        {
          time: 41,
          speaker: "Instructor",
          text: "The @langchain_tool decorator wraps the same validation functions. create_react_agent pairs them with AzureChat OpenAI, and the agent is exposed as a standard A2A server. LangGraph's create_react_agent is the key primitive. It wraps @langchain_tool functions in the Think Act Observe loop. The Azure ChatOpenAI integration connects to Kimi K2 thinking and the same model used across all the framework lessons. Let's see this in action. Install the dependencies, set your credentials and start the server on 10003 and watch the LangGraph ReAct agent think, act, and observe in a loop.",
        },
        {
          time: 93,
          speaker: "Instructor",
          text: "Pause the video and try it yourself. Welcome to lesson 10, A2A wrapping with a LangGraph Orchestrator Agent. It implements the same loan validator using the same common loan data and validation rules, same approach: server, orchestrator, client. The server implements a simple A2A server because LangGraph does not have A2A server capability built in, so we use an orchestrator with LangGraph, LangGraph, and Lang Chain and implement the same approach that is very common across the LangGraph and then the server wraps the orchestrator and exposes on port 10003 with the Agent Card and JSON-RPC and the client does the same read from the loan data application and process a couple of loans.",
        },
        {
          time: 148,
          speaker: "Instructor",
          text: "I have managed to get the server up and running here before I started recording and we have a very good interactive. We have very very interactive page for LangGraph and feel free if you are not having immediate access to Visual Studio Code or this.",
        },
        {
          time: 170,
          speaker: "Instructor",
          text: "These modules effectively walk through its some of their very good LangGraph base question and answer for interviews, interview preparation and step by step guide to run this particular code or and also you can read the code here from its very basic code that just explain you. Important areas and what to be highlighted. So let's run the client and let's see how it works.",
        },
        {
          time: 197,
          speaker: "Instructor",
          text: "python client.py, and it is on the black screen.",
        },
        {
          time: 202,
          speaker: "Instructor",
          text: "So very fast it should show us this kind of report.",
        },
        {
          time: 216,
          speaker: "Instructor",
          text: "So if we stay here, this is approved for Alice Chen. This is a profile change from the previous lesson. But really carefully see the compensating factors are same but differently worded.",
        },
        {
          time: 231,
          speaker: "Instructor",
          text: "and this is more important because every time it runs it is not hardcoding it. And again and again I am trying to emphasize this. The agentic task does not mean that we should deterministically hard coded. We should code in a way that abstraction is managed by us. But execution is managed by LLM and the reasoning is managed by LLM itself. That's a key point for agentic AI. If we start hardcoding, if we start short-circuiting the agent AI, virtually we will end up with With a distributed architecture and distributed software, we will not have.",
        },
        {
          time: 273,
          speaker: "Instructor",
          text: "any criteria, we cannot call that agentic AI. And this is the beauty of it. Like a human, it just types what the compensating factors are. And like two people processing the loan app, we anticipate their wording would be slightly different, but they will come to the same conclusion. So this is the whole idea of it. And I think we are done. Excellent.",
        },
        {
          time: 299,
          speaker: "Instructor",
          text: "6 picked up and finished. OK, all the thirds and let's turn it off. Excellent.",
        },
        {
          time: 311,
          speaker: "Instructor",
          text: "You have built a LangGraph ReAct agent that wraps the same loan validation tools using the Lang Chain tool decorators and AzureChat OpenAI.",
        },
        {
          time: 325,
          speaker: "Instructor",
          text: "Thanks for watching this lesson on the LocalM Tuts. In the next lesson we will build a CrewAI crew with a role-based agent and wrap the entire crew as a single A2A endpoint. You can find the next video link in the description below.",
        },
        {
          time: 345,
          speaker: "Instructor",
          text: "See you there.",
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
      videoId: "JSa8Vd9kpFM",
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
          time: 4,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 11 of 16, A2A with CrewAI. Last time we combined A2A with LangGraph ReAct agent, and it used MCP for tools, A2A for agent communication. If you want to watch this as a standalone video, find the complete course playlist below in the description and follow along.",
        },
        {
          time: 32,
          speaker: "Instructor",
          text: "There is also links for examples and interactive page in description which might come useful. Loan validation crew with 2 agents, a Compliance Analyst that runs the hard and soft checks, and a Senior Underwriter that synthesizes the results as a verdict. The CrewAI orchestrates them sequentially, and the A2A client sees the one agent. CrewAI's opaque execution is a perfect match for A2A.",
        },
        {
          time: 61,
          speaker: "Instructor",
          text: "The protocol says callers don't need to know the agent's internals. With CrewAI, the internals are an entire crew running, but the A2A agent just sees it as one endpoint.",
        },
        {
          time: 76,
          speaker: "Instructor",
          text: "Let's see this in action. Install the dependencies, configure the credentials, and start the crew server on port 10,004 and watch how it works sequentially.",
        },
        {
          time: 90,
          speaker: "Instructor",
          text: "You can also pause the video and try it yourself.",
        },
        {
          time: 97,
          speaker: "Instructor",
          text: "Lesson 11 practical session. A2A server wrapping with CrewAI. Orchestrator agent, same architecture: server Orchestrator client in the orchestrator here we are using CrewAI.",
        },
        {
          time: 112,
          speaker: "Instructor",
          text: "Server is implemented by A2A because CrewAI does not by default offer an A2A interface, so we are using the A2A orchestrator.",
        },
        {
          time: 124,
          speaker: "Instructor",
          text: "It is CrewAI, and then we have client as pure A2A implementation, and we are using the common loan data and the validation rule. I got the server up and running. I just run the server and let's see how does the client.",
        },
        {
          time: 142,
          speaker: "Instructor",
          text: "process the loan data. Sorry.",
        },
        {
          time: 148,
          speaker: "Instructor",
          text: "See here, it is using skill pre-screening.",
        },
        {
          time: 156,
          speaker: "Instructor",
          text: "Dismiss. B Overwhelming for short sessions. But it is important, no one needs to know all the frameworks. But I'm just showing as a 2 as capability as we know. Many teams in past we have worked with microservices or the service oriented architecture with polyglot systems. Agents are all about polyglot architecture. Various teams in different horizontal and vertical can create agents differently based on their needs, based on what what frameworks would suit them best. And this is why A2A is important. It is irrespective of the framework. It can. It can provide end to end horizontal integration. So it is good to understand how various SDKs can be connected via A2A.",
        },
        {
          time: 213,
          speaker: "Instructor",
          text: "And have a broad aspect of it. Ah, and again, as I said in the past lessons and comments, that if you are new to abstract thinking, abstract programming, especially in agent work, you might find it overwhelming. I would strongly recommend going again and again through the tutorial. Read the interactive page. There is very good theory, simplified code, you will understand what it is doing. And overall it will help you to build a very good long-term understanding of A2A. I don't expect that.",
        },
        {
          time: 255,
          speaker: "Instructor",
          text: "The understanding of A2A would be very quick and straightforward unless you have experience in service-oriented architecture, microservices, and complex system designing. Then yes, it might feel straightforward to you. But don't be disheartened if it takes a couple of attempts, there is nothing wrong in it.",
        },
        {
          time: 276,
          speaker: "Instructor",
          text: "It should take, because meaningful understanding is always better than just having a sense of false and pretend understanding, that yes we know, but sometimes it is very hard.",
        },
        {
          time: 290,
          speaker: "Instructor",
          text: "But even see here, now it has processed, and look at the detail it is providing. It's a nuance of various SDKs that it is generating very well.",
        },
        {
          time: 305,
          speaker: "Instructor",
          text: "Underwriting condition, risk flags and all sort of things. For example, if you see what what if we compare it with what this LangGraph did? LangGraph did not create this compensating factor, underwriting conditions so well. Where here you see, CrewAI did very well, and that's because the crew works with a very different architecture inside and that helps us to understand that it's not always about.",
        },
        {
          time: 337,
          speaker: "Instructor",
          text: "What models we use? It's not always about what.",
        },
        {
          time: 343,
          speaker: "Instructor",
          text: "What architecture we use, but the frameworks also do matter a lot, especially if you are just trying to get the if you are just trying to get the out of the box capabilities.",
        },
        {
          time: 356,
          speaker: "Instructor",
          text: "And therefore I said for various applications you will find that different agent frameworks work better. And there is nothing wrong instead of. fixing yourself on one architecture of agent framework. We should fix ourselves with A2A, which is interoperable, and then let the best agent framework work for the use case it is designed for. And that's a better way to deal with change than using one. And basically trying to restrict ourselves in that sense is we restrict our choices. Restricting choices in AI is actually mostly going to backfire in most of the cases.",
        },
        {
          time: 400,
          speaker: "Instructor",
          text: "We should not spend, we should not build. Every problem with different solution architecture, but I think we should be OK to handle couple of different variations and SDKs based on the use case and use case, use case and individual married cases. But as I said, CrewAI does very differently than LangChain or LangGraph works differently in other scenarios and the same way if we use Microsoft Agent framework, the Microsoft Agent Framework works slightly differently. It does not provide underwriter conditions or that comprehensive risk flag as CrewAI.",
        },
        {
          time: 439,
          speaker: "Instructor",
          text: "AI. So its its a very mature framework. And it shows the way it handles. Also, different frameworks handle tokens differently, so you might find the one particular framework can have excessive use of token, providing very in depth understanding and explanation, while the other framework may be using far less tokens.",
        },
        {
          time: 460,
          speaker: "Instructor",
          text: "So this is where the real.",
        },
        {
          time: 464,
          speaker: "Instructor",
          text: "Vo. Assessment, scientific data driven assessment will come and when I will, when I will build. Or when I will record the agent.",
        },
        {
          time: 477,
          speaker: "Instructor",
          text: "not A2A, but 100% on agent frameworks, I will discuss how I make decisions on which agent should shoot what kind of requirement and that might be very interesting conversation forward. But I think this is done or it is doing the last one. You can see it taking a little bit more time, that means it is generating more token. So let's see if how the token works. So if you open the tokens it has spiked up a little bit, so.",
        },
        {
          time: 504,
          speaker: "Instructor",
          text: "has spiked up literate so.",
        },
        {
          time: 509,
          speaker: "Instructor",
          text: "Unfortunately they can't validate on individual request by request basis. I have not got that. Just let me refresh it to refresh this page and see how it works.",
        },
        {
          time: 524,
          speaker: "Instructor",
          text: "So you can see like it's going.",
        },
        {
          time: 531,
          speaker: "Instructor",
          text: "Probably need to, uh, find a better matrix for it, but yes, they do differ.",
        },
        {
          time: 541,
          speaker: "Instructor",
          text: "Okay, I'm gonna just stop there. Assuming everything around up, you can see the risk flag and everything working bundle fully well. Umm, and it did deny Bob. So let's see, Bob should be denied. Ah, yes, he should be declined, absolutely.",
        },
        {
          time: 560,
          speaker: "Instructor",
          text: "So that's brilliant and look at the detailed reasoning it has provided and risk flags.",
        },
        {
          time: 570,
          speaker: "Instructor",
          text: "Fine, so. I leave it here by generally it should be light they so this is the wrong. I think this is the last one which failed.",
        },
        {
          time: 582,
          speaker: "Instructor",
          text: "Yeah, but it should be like this Weekly a I. Weight detail one. Alright then I will see you in the next session.",
        },
        {
          time: 594,
          speaker: "Instructor",
          text: "You have wrapped a multi-agent crew as a single A2A endpoint. The orchestrator from Lesson 8 can call this crew directly like it calls any other agent. It proves that A2A makes framework choice invisible. Thanks for watching this lesson. In the next lesson we will try with OpenAI Agents SDK. And A2A wrapping. You find The next video link in the description below and I'll see you there.",
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
      videoId: "I0C8xFZpJdQ",
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
          time: 6,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 12 of 16, A2A with OpenAI Agents SDK. If you're watching this as a standalone video, you can find the full playlist in the description below. Also you have example GitHub repository link and interactive page link in description.",
        },
        {
          time: 27,
          speaker: "Instructor",
          text: "Open the lesson folder and follow along. Loan validation agent with 3 tool functions. The OpenAI Agents SDK class is minimal: model, instructions, and tools. Runner handles the execution loop and we wrap the standard Agent Executor. The OpenAI SDK is the most minimal framework. Agent, tools, Runner, that's it. Handoffs let you route between multiple agents inside the SDK, but externally A2A handles cross-framework routing. Let's see this in action. Install dependencies, set your credentials, and start the server on 10005. Watch the OpenAI runner loop through the calls automatically. Pause the video and try it yourself.",
        },
        {
          time: 76,
          speaker: "Instructor",
          text: "Lesson 12. A2A server wrapping with OpenAI Agents SDK. Same architecture as previous ones. Using loan data validation rules.",
        },
        {
          time: 90,
          speaker: "Instructor",
          text: "Running a server on 10005 which I managed to get it up and couple of environment variables.",
        },
        {
          time: 99,
          speaker: "Instructor",
          text: "Server using A2A. And orchestrator using OpenAI Agents SDK. And it validates, and the client using A2A.",
        },
        {
          time: 112,
          speaker: "Instructor",
          text: "So lets.",
        },
        {
          time: 122,
          speaker: "Instructor",
          text: "By so, it's using the loan application pre-screening as we send and keeping it simple. It's generating most like only hopefully this particular.",
        },
        {
          time: 139,
          speaker: "Instructor",
          text: "Output. If you do not have immediate access to visit through your code or models, you can always use our interactive web page where we have highlighted important code pieces and also some of the good question and answer. It will help you if you are preparing for any interviews.",
        },
        {
          time: 161,
          speaker: "Instructor",
          text: "And the step by step",
        },
        {
          time: 165,
          speaker: "Instructor",
          text: "setup and running. Let's try this as well. See it works pretty well. It works, compensating factor reasoning, It provided pretty decent outcome.",
        },
        {
          time: 179,
          speaker: "Instructor",
          text: "Bob is declined, which he should be.",
        },
        {
          time: 184,
          speaker: "Instructor",
          text: "Penter someone has keep it here, let it run and.",
        },
        {
          time: 192,
          speaker: "Instructor",
          text: "frameworks down, one to go. Your loan validation agent works very well with a Kimi-K2-Thinking via Azure. It speaks through A2A. The orchestrator can call alongside ADK, LangGraph, and CrewAI agents. Thanks for watching this lesson on LocalM Tuts. Next we will complete the framework tour with the Claude Agent SDK: conversation memory, structured tools, etc. You find the next video in the A2A Protocol course playlist available in this description. See you there.",
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
      videoId: "e5E-iN2lFvg",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 13 of 16, A2A with Claude Agent SDK. Last time we built the task agent with OpenAI Agents SDK: tool use, A2A wrapping. If you are watching this as a standalone video. Find the complete course playlist linked below in the description. Also you can find example links via the GitHub repository and interactive page links in the description below. Clone the repo, open the lesson folder and just follow. Loan validation agent, built from scratch. No framework. Structured JSON-schema tool definitions, explicit tool-call dispatch, and a manual agentic loop using the AsyncAzureOpenAI with K2 Thinking. Multi-turn is a big unlock.",
        },
        {
          time: 52,
          speaker: "Instructor",
          text: "Most A2A interactions so far have been single shot send query get response with the conversation memory. The agent remembers what we said before, enabling the follow-up questions and interactive workflows. Let's see this in action.",
        },
        {
          time: 67,
          speaker: "Instructor",
          text: "Install the dependencies, configure the credentials, then start the server on port 10,006. Watch the manual tool call loop iterate. You will see each tool call result in the console. Try sending a follow up question. Test the multi-turn memory. Pause the video and try it yourself.",
        },
        {
          time: 90,
          speaker: "Instructor",
          text: "Lesson 13 practical implementation using Claude-style agent patterns. So by the way, I got a one typer there. Claude agent. Okay, it is wrong. I don't know how I missed that. It's basically a Claude-style agent pattern implementation.",
        },
        {
          time: 105,
          speaker: "Instructor",
          text: "So what I did in this example is what I learned from Claude, what I read from Claude, covered Claude Code, their blogs, papers, how they are writing their own agents. And I really like the approach they are doing it. So what I did is I actually copied their approach into this example. Of course it is not as detailed as they do, but it will give you some idea. And I want to explore that how compliant it is with A2A.",
        },
        {
          time: 136,
          speaker: "Instructor",
          text: "So I did this JSON-schema tool definition the way Claude does. The more importantly what I did is the system instruction because there are couple of. System prompt widely, then I was aware of what those big prompts look like, so I haven't copied it, but I basically used the style and then manual tool called loop with conversation memory. This is the one of the most powerful features that Claude, why Claude Code makes Claude broad.",
        },
        {
          time: 167,
          speaker: "Instructor",
          text: "Conversation memory. This is very important and unlike other framework with which they explicitly manage, I am actually manages everything manually here. And this is what this particular example make a difference. You can definitely take this example and try to run it. I have just implemented one or 2 features means there are hundreds of features like that what they got. So I think let's not compare that. I have created their own work with something very similar and same. A2A to connect, and server to host gateway.",
        },
        {
          time: 203,
          speaker: "Instructor",
          text: "So lets see lets run the server first, python server, and we are running it.",
        },
        {
          time: 212,
          speaker: "Instructor",
          text: "Um, and then we just wrapped.",
        },
        {
          time: 216,
          speaker: "Instructor",
          text: "python client. Let's see, server up and running. Yep, it's running, and then let's run the Python client.",
        },
        {
          time: 228,
          speaker: "Instructor",
          text: "I think they got it there.",
        },
        {
          time: 231,
          speaker: "Instructor",
          text: "Yeah.",
        },
        {
          time: 234,
          speaker: "Instructor",
          text: "Sorry, Exit 13, isn't it? Yeah. Claude-style, that's it. Just generated that 5 and we got. the whole loop running.",
        },
        {
          time: 248,
          speaker: "Instructor",
          text: "Solution sorted so.",
        },
        {
          time: 252,
          speaker: "Instructor",
          text: "That's all probably. See you in the next part of the video.",
        },
        {
          time: 262,
          speaker: "Instructor",
          text: "And all 6 frameworks are complete. You have agents running A2A with the same Microsoft Agent Framework, ADK, LangGraph, CrewAI, OpenAI, and Claude patterns. All discoverable, interoperable and Next up the most important the capstone example, which is a very real life example of a loan approval pipeline using 5 different agents orchestrating and having the human in loop. Thanks for watching this lesson on LocalM Tuts. Next is the lesson of the production grade loan approval system with 5 specialized agents and a human in loop 6th with a React dashboard with full observability. You can find the next video in the A2A Protocol course playlist in the description. I see you there.",
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
      videoId: "ONhelxVH1SQ",
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
          time: 7,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 14 of 16, the multi-agent deep dive, our capstone lesson. In the last lesson we completed the framework tour with the Claude Agent SDK implementation. Now we bring everything together. If you are watching this as a standalone video, please find a link in the description below. You will find also example and interactive page link in description as well. This is the largest example in the course. Five agents and an orchestrator with a React dashboard. Clone the repo, open the lesson folder and follow along.",
        },
        {
          time: 46,
          speaker: "Instructor",
          text: "5 specialized agents in a pipeline. Intake validates application fields, Risk Scorer calculates composite risk score using deterministic rules, LLM reasoning, Compliance checks regulatory checks, Decision makes the call. 80% automated, 20% escalated to human.",
        },
        {
          time: 65,
          speaker: "Instructor",
          text: "The Escalation agent handles the human review queue, and all agents share the model provider abstraction. The orchestrator discovers five agents via their Agent Cards, routes the application through the pipeline, and handles the 80/20 split. The React UI shows the real-time approval status, and the telemetry dashboard tracks every span.",
        },
        {
          time: 93,
          speaker: "Instructor",
          text: "This uses every pattern from the course: Agent Card discovery, Agent Executor, to_a2a shortcut, bridge packages, LLM-based routing, chain execution, error recovery, MCP, A2A together. See the full pipeline in action. We will start all 5 agents on their assigned ports. Launch the orchestrator.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "Watch it discover each agent, route the application through the pipeline, see the entire 80/20 decision split in the real time and this is the practical session. Pause the video if you need to catch up.",
        },
        {
          time: 133,
          speaker: "Instructor",
          text: "Lesson 14 practical implementation. It's one of the most comprehensive example of all. You can see here you got a compliance agent, compliance server, decision agent, decision server, escalation agent, escalation server, intake agent, intake server, model provider, orchestrator, server orchestrator, risk scorer server, Risk Scorer agent, and this is the script where you can run all of them at one go, and this is the script that submits them for testing, and one of the scripts for telemetry to capture the OTLP.",
        },
        {
          time: 172,
          speaker: "Instructor",
          text: "I have managed to get everything up and running in terms of servers, so I got all the servers now loading. It will log everything in here whenever we start it, so we can always go back and check what is happening. It is running on 10100, 10101, to 10105, and the orchestrator works on 10100, while the REST API is on 8080, and I also got the dashboard pending.",
        },
        {
          time: 203,
          speaker: "Instructor",
          text: "the dashboard up and running on port 3000 and let me get that dashboard here. So you can see here dashboard. There is nothing in that place right now and let us see how we do when we submit the batch.",
        },
        {
          time: 222,
          speaker: "Instructor",
          text: "So I am just submitting the batch pipeline and let us see how.",
        },
        {
          time: 229,
          speaker: "Instructor",
          text: "the agents work.",
        },
        {
          time: 233,
          speaker: "Instructor",
          text: "And by the way, if you haven't got access to Visual Studio Code, then obviously go to our interactive page. It explains very well, and as you can see in the real time we are getting this.",
        },
        {
          time: 249,
          speaker: "Instructor",
          text: "dashboard up and running, so you can see the telemetry. What is happening. Decline process. Oh, there we go, we got one escalation. You want to approve or reject? And there is a. Well done a couple of them are being processed, and it is a very detailed documentation.",
        },
        {
          time: 267,
          speaker: "Instructor",
          text: "You should I would give you a long read on this and it will help you understand what it does. It is one of the real-life agent architectures, but still I would say.",
        },
        {
          time: 281,
          speaker: "Instructor",
          text: "The true production real life agent of architecture would be even more complex than this, but it should give you rough idea what we are looking for when we call a production and its its a very good example to walk through. Its got a lot of Q&A, and you got a lot of important code highlighted here.",
        },
        {
          time: 305,
          speaker: "Instructor",
          text: "As it is pending, and there we go, we got everything sorted. So as you can see here if I go on my umm on the on the page. And I say, you know what I want to do.",
        },
        {
          time: 320,
          speaker: "Instructor",
          text: "Umm. Okay, so 25% rejection, 4 applications successful, 2 applications failed. You can see here what is happening with the trace waterfall. Escalation queue, there are 2 being escalated, and I say OK, I find this useful and by the way this. All data is generated by semantic models. This is not generated by any structured or deterministic architecture. So this is the beauty of it. It translates into an architecture, into a UI for the, for the structure, not just for UI, but it actually generates everything via LLM. So let let me say I am happy with this call.",
        },
        {
          time: 372,
          speaker: "Instructor",
          text: "And I just get it approved, it been set up and it will move forward. And I say, uh. next.",
        },
        {
          time: 383,
          speaker: "Instructor",
          text: "Detailed, and I'm going today to request the info to be sent, and if I go into dashboard then you can see the info requested and then you can review approved. So this is human-in-the-loop. You can also make a human in loop in a way that once the human add something even further AI. Umm process can happen and then again it can put back into the human loop unless he is comfortable.",
        },
        {
          time: 409,
          speaker: "Instructor",
          text: "So it's a very interesting pattern when it comes to human in loop and how to integrate that along with this architecture. So umm so let's see how the logs work. So if you see the compliance log, then it has done everything that needed. Trace IDs everything it has logged.",
        },
        {
          time: 430,
          speaker: "Instructor",
          text: "And based on this, we make the responsible AI and responsible agent AI. Why? Because we can actually go back and validate that what and how the decision been made by AI. It is very essential whenever we are using AI, we should have the very good traceability to understand that. If AI made any mistake then why? And if AI was successful consistently then why? So we can preserve the consistency and we can start.",
        },
        {
          time: 459,
          speaker: "Instructor",
          text: "Removing the the kind of area where AI is struggling. So yeah, it's it's a very detailed way of what is happening and you can see that all the servers logged there.",
        },
        {
          time: 474,
          speaker: "Instructor",
          text: "stuff, um, and yeah, that's, that's all for now, but I hope you like this example. I would if, if I am studying A2A, I would give this particular practical session the highest amount of effort. And highest amount of",
        },
        {
          time: 497,
          speaker: "Instructor",
          text: "Focus and time and go through this code very detail in in detail. This will help you to build many production grade design patterns. Because there are lot of design patterns I have put in it, it may be practically impossible for me to go through each and every, but it's one of the models that you can take forward, and build something on top of it.",
        },
        {
          time: 523,
          speaker: "Instructor",
          text: "Yeah. So if you got any questions, if you got any, any request for me, just drop commands. So reach out to me and I will try my best to come back to you.",
        },
        {
          time: 536,
          speaker: "Instructor",
          text: "This is a production-grade multi-agent system: 6 frameworks, 4 models, 2 protocols, one standard. We proved A2A makes framework and model choice local decision, not the system wide constraint.",
        },
        {
          time: 549,
          speaker: "Instructor",
          text: "Thanks for watching this lesson on LocalM Tuts. In the next lesson we will cover the advanced production patterns: protocol extensions, security, handling with OAuth, mTLS, OpenTelemetry, observability, and enterprise compliance.",
        },
        {
          time: 562,
          speaker: "Instructor",
          text: "However we are not going to deep-dive with any of these topics, but we will touch base on them and understand what is expected of each of this area.",
        },
        {
          time: 576,
          speaker: "Instructor",
          text: "But whenever we are writing in, whenever we are writing the new course in future with the advance use cases in mind, all of this will be discussed and understood in detail. You can find the next video link in the A2A Protocol course playlist in the description and I see you there.",
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
      videoId: "XEGpZop5vWw",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 15 of 16, Advanced A2A Concepts. In the last lesson we built a production-grade loan approval pipeline with 5 specialized agents, human-in-the-loop review, and a React dashboard. If you are watching this as a standalone video. Find the complete course playlist linked below in the description. If you are looking for practical implementation of code, check Lessons 5 to 7 for A2A building blocks, Lessons 8 to 13 for 6 framework integrations, Lesson 14 for the complete end-to-end multi-agent orchestration pipeline. This lesson covers the production pattern, security, observability, compliance, that turn those implementations into deployable systems. However, we are not going to deep dive and hands on on every aspect of advanced topic.",
        },
        {
          time: 61,
          speaker: "Instructor",
          text: "We will keep another tutorial separate for this hands-on and advanced deep dive. And in future we will let you know once that tutorial is ready. So please make sure you subscribe so whenever it's ready you get the notification.",
        },
        {
          time: 79,
          speaker: "Instructor",
          text: "Moving from development to production requires attention to 4 pillars: protocol extension for custom capabilities, Transport security for encryption and authentication, observability for operational visibility.",
        },
        {
          time: 93,
          speaker: "Instructor",
          text: "And compliance with the regulatory requirements. There are 4 types of extension: data-only extension which adds extra data like priority levels and SLA tags. Profile extension defines standard capability bundles such as like Healthcare, compliance, profile. Method extension adds new JSON- RPC methods like task batch, and the state-machine extension adds new states such as digital states, to reviewing or approving.",
        },
        {
          time: 124,
          speaker: "Instructor",
          text: "The extension lifecycle is straightforward. Define the extension with URI and schema, declare it in the Agent Card, and the client checks compatibility during discovery, and then uses the extension in the method or skips it gracefully if it is unsupported. Every production deployment must use TLS 1.2 or higher. For authentication, A2A supports Bearer tokens, OAuth 2.0, OpenID Connect, and mutual TLS. The security scheme is declared in the agent card just like open API. The most common pattern is OAuth 2.0.",
        },
        {
          time: 158,
          speaker: "Instructor",
          text: "With client credentials for machine-to- machine communication. Observability is critical when you have multiple agents in a pipeline. Open telemetry gives you distributed traces across the boundaries. The key is: traceparent header propagates through A2A requests.",
        },
        {
          time: 174,
          speaker: "Instructor",
          text: "Each agent creates a child span linked to the parent and giving end to end waterfall in Jaeger. Here is what propagation looks like in practice. The orchestrator creates the root span. Each downstream agent, QA, Research, Code, creates a child span.",
        },
        {
          time: 194,
          speaker: "Instructor",
          text: "All the spans are exported to OTLP collector.",
        },
        {
          time: 200,
          speaker: "Instructor",
          text: "Which feeds into Jagger UI for visualization. One trace, multiple agents, complete visibility. Here is your Enterprise Readiness checklist 10 items. Convert a development cycle into production: TLS on all endpoints, OAuth or mTLS, skill-based authorization, open telemetry tracing, structured logging, Prometheus metrics, PII redaction, data retention policies, health monitoring, incident runbooks. Check off these 10 on your A2A deployment if it is production ready. Thanks for watching this lesson on LocalM Tuts. In the final lesson you will recap the full A2A roadmap and next steps for production lifecycle, continuous learning, community engagement and find the next video in the A2A Protocol course playlist. See you there.",
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
      videoId: "7pyXSqUdgig",
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
          time: 5,
          speaker: "Instructor",
          text: "Welcome back to LocalM Tuts. I am Nilay Parikh. This is the final lesson, Lesson 16 of 16, Conclusion and Next Steps. In the last lesson we covered advanced production patterns, protocol extensions, security hardening, OpenTelemetry, observability. If you are watching this as a standalone video, please find the complete course playlist in the description along with the interactive URL for the homepage of this course.",
        },
        {
          time: 31,
          speaker: "Instructor",
          text: "If you join us primarily for code, all practical examples are visible in the course repository link below. Lessons 5 to 7 cover the core A2A concepts, Lessons 8 to 13 have runnable code for every framework, and Lesson 14 is the full capstone pipeline. This is a final recap for the journey maps out the next step. You started with.",
        },
        {
          time: 56,
          speaker: "Instructor",
          text: "little or zero knowledge of A2A. Now you have built some loan validation domain across the 6 frameworks, proving A2A makes framework choice invisible. Then you combined the 5 specialized agents into a production pipeline for the important real life use case. Let me recap the technology stack.",
        },
        {
          time: 75,
          speaker: "Instructor",
          text: "Two protocols: A2A for agent-to-agent and MCP for agent-to-tool. 6 frameworks: A2A SDK, Microsoft AF, Google ADK, LangGraph, CrewAI, OpenAI, and Claude. 3 model families, all free-tier or local, no expensive cloud ML bills. Throughout the course you have practiced 12 patterns: Agent Card discovery in every lesson, Agent Executor wrapping, A2A shortcuts, bridge patterns, intent routing, chain execution in the orchestrator, parallel execution, error recovery, MCP, A2A, multi turn role based delegation.",
        },
        {
          time: 115,
          speaker: "Instructor",
          text: "And extension mechanism. Six takeaways. First, A2A is a protocol, not a framework. It defines how agents talk, not what they do. Second, Agent Cards are the foundation. Every interaction start with discovery. Third, MCP plus A2A equals the complete stack. Fourth, model choice is local. Each agent picks its own 5th framework choice is also local. Opaque execution at work. 6th local first is viable.",
        },
        {
          time: 148,
          speaker: "Instructor",
          text: "No cloud ML dependency if we do not wish to. Three paths forward: path one, continue learning, add a new framework agent, implement cross- agent multi-turn, or build real- time visualization UI. You can also go to production, add OAuth, Open telemetry, containerise your agent and path three, join the community, contributing to A to A and.",
        },
        {
          time: 176,
          speaker: "Instructor",
          text: "And share the knowledge.",
        },
        {
          time: 180,
          speaker: "Instructor",
          text: "A2A will reduce the multi-agent integration problem from N squared to N. This course proved it by connecting agents across the 6 frameworks through a single protocol.",
        },
        {
          time: 193,
          speaker: "Instructor",
          text: "The future of agentic AI is interoperable. A2A is the protocol making it happen. Thank you for taking this course. Now go and build something amazing.",
        },
        {
          time: 209,
          speaker: "Instructor",
          text: "And make sure you subscribe to local LocalM Tuts so you do not miss out on any new exciting project podcast tutorials. Until next time, keep building.",
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
