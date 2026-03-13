import type { CourseDefinition, PartQuizQuestion } from "./types";

const lines = (...value: string[]) => value.join("\n");

const optionIds = ["a", "b", "c", "d", "e", "f"] as const;

function makeQuizQuestion(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): PartQuizQuestion {
  return {
    id,
    question,
    options: options.map((text, index) => ({
      id: optionIds[index] ?? String(index),
      text,
    })),
    correctOptionId: optionIds[correctIndex] ?? String(correctIndex),
    explanation,
  };
}

export const CTX_SDLC_COURSE: CourseDefinition = {
  slug: "ctx-sdlc",
  title: "Context Engineering for GitHub Copilot",
  description:
    "Master .github and /docs so GitHub Copilot behaves like a project-aware engineering partner across planning, coding, review, and delivery.",
  totalDuration: "~95 mins",
  tags: [
    "Context Engineering",
    "GitHub Copilot",
    ".github",
    "Custom Instructions",
    "MCP",
    "AI-Assisted SDLC",
  ],
  githubUrl:
    "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/ctx-sdlc",
  icon: "🧭",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  parts: [
    {
      slug: "why-context-engineering",
      title: "Why Context Engineering Matters",
      type: "video",
      duration: "7 mins",
      videoId: "placeholder-why-context-engineering",
      description:
        "Understand why AI-assisted engineering fails without durable project context and why context engineering is the most impactful skill for AI-assisted development.",
      objectives: [
        "Explain why AI-assisted engineering fails when project context is missing",
        "Distinguish prompt engineering from durable repository-level context engineering",
        "Describe why context should be treated as engineering infrastructure rather than ad hoc chat setup",
        "Position context engineering as the foundation for planning, implementation, review, and maintenance workflows",
      ],
      infoBoxes: [
        {
          title: "No Prerequisites",
          content:
            "This is the first lesson. No setup or prior knowledge is needed beyond basic familiarity with a code editor. Follow the course in order because each lesson adds a new context layer on top of the previous one.",
        },
      ],
      noteBoxes: [
        {
          title: "Context Engineering Is Not Prompt Engineering",
          content:
            "Prompt engineering optimizes one interaction. Context engineering optimizes every interaction across the lifetime of a repository by storing reusable instructions, prompts, agents, and documentation in version control.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Poor Context"] --> B["Generic suggestions\\nWrong frameworks\\nInconsistent style"]\n    C["Rich Context"] --> D["Project-aware code\\nCorrect patterns\\nTeam conventions"]\n    E[".github/ + /docs/"] --> C',
          caption:
            "AI output quality is a direct function of the context you provide.",
          alt: "Poor context leads to generic suggestions while rich context from .github and docs leads to project-aware code.",
        },
        {
          chart:
            'graph TD\n    A["Level 1: Autocomplete\\nPredict next tokens"] --> B["Level 2: Chat\\nAnswer code questions"]\n    B --> C["Level 3: Agent\\nAutonomous task execution"]\n    C --> D["Level 4: Orchestrated Agents\\nMulti-agent workflows"]',
          caption:
            "As AI assistance grows more autonomous, the context requirements increase dramatically.",
          alt: "Four levels of AI assistance from autocomplete to orchestrated agents.",
        },
      ],
      poll: {
        question: "How do you use GitHub Copilot today?",
        options: [
          { id: "autocomplete", text: "Autocomplete only" },
          {
            id: "chat",
            text: "Chat for questions, but I re-explain context every session",
          },
          {
            id: "instructions",
            text: "I have some custom instructions set up",
          },
          {
            id: "agents",
            text: "Agents, prompts, and skills — full .github/ setup",
          },
          { id: "none", text: "I have not started using Copilot yet" },
        ],
        simulatedVotes: {
          autocomplete: 22,
          chat: 38,
          instructions: 24,
          agents: 9,
          none: 7,
        },
      },
      qa: [
        {
          question: "What is the main failure mode this course addresses?",
          answer:
            "AI systems are strong generalists but weak at project-specific judgment unless you teach them how your repository works. Wrong frameworks, wrong conventions, and wrong validation steps are usually context failures, not model failures.",
        },
        {
          question: "Why does this matter more for agents than autocomplete?",
          answer:
            "Autocomplete only needs the current file. Agents need architecture, tooling, validation commands, and role boundaries to act safely and correctly across a whole repository.",
        },
        {
          question:
            "What is the durable alternative to repeating context in chat?",
          answer:
            "Encode the shared knowledge once in .github and /docs so every developer, every session, and every agent run gets the same context automatically.",
        },
      ],
      tags: [
        "introduction",
        "context-engineering",
        "motivation",
        "ai-assisted-development",
      ],
    },
    {
      slug: "curate-project-context",
      title: "Curate Project Context with .github and /docs/",
      type: "video",
      duration: "10 mins",
      videoId: "placeholder-curate-project-context",
      description:
        "Build the shared context layer that powers every AI interaction in your project by combining .github behavioral guidance with /docs knowledge context.",
      objectives: [
        "Explain why .github and /docs should be treated as one shared context layer",
        "Distinguish behavioral guidance from knowledge context",
        "Identify the repository artifacts that provide high-leverage project context to AI systems",
        "Design a starter context layout that helps both human contributors and AI assistants",
      ],
      infoBoxes: [
        {
          title: "Two Halves of the Same System",
          content:
            ".github tells the assistant how to behave: standards, workflows, tools, and roles. /docs tells the assistant what it needs to know: architecture, ADRs, API contracts, and operational constraints. If you only provide one half, the assistant still has to guess too much.",
        },
      ],
      noteBoxes: [
        {
          title: "What Not To Put In Instructions",
          content:
            "Do not restate linter rules, copy large READMEs, or duplicate code definitions into instruction files. Link to source material instead. The goal is a maintainable context layer, not a bloated one.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph ".github/"\n        A["copilot-instructions.md"] --> |"Always on"| Z["AI Context"]\n        B["instructions/"] --> |"Glob-filtered"| Z\n        C["prompts/"] --> |"User-invoked"| Z\n        D["agents/"] --> |"Agent-selected"| Z\n        E["skills/"] --> |"On-demand"| Z\n        F["hooks/"] --> |"Event-driven"| Z\n    end',
          caption:
            "Each .github subfolder feeds context through a different activation mechanism.",
          alt: "Six .github configuration surfaces connect to shared AI context.",
        },
        {
          chart:
            'graph LR\n    subgraph "HOW to behave"\n        A[".github/\\nInstructions\\nAgents\\nPrompts"]\n    end\n    subgraph "WHAT to know"\n        B["/docs/\\nArchitecture\\nADRs\\nConventions"]\n    end\n    A --> |"References"| B\n    B --> |"Feeds"| A\n    A --> C["AI Context"]\n    B --> C',
          caption:
            ".github provides behavioral rules while /docs provides knowledge context.",
          alt: ".github behavioral guidance and /docs knowledge context feed into AI context.",
        },
      ],
      poll: {
        question:
          "What does your repo's .github folder currently contain for Copilot?",
        options: [
          {
            id: "nothing",
            text: "Nothing AI-related — just workflows and templates",
          },
          { id: "basic", text: "A basic copilot-instructions.md file" },
          {
            id: "layered",
            text: "Multiple instruction files with applyTo scoping",
          },
          {
            id: "full",
            text: "Instructions plus prompts plus agents or skills",
          },
          { id: "unsure", text: "I am not sure what is in there" },
        ],
        simulatedVotes: {
          nothing: 32,
          basic: 28,
          layered: 18,
          full: 8,
          unsure: 14,
        },
      },
      codePreview: {
        title: "Starter Context Layout",
        description:
          "A small but effective repository context layer for a loan-workbench project.",
        segments: [
          {
            code: lines(
              ".github/",
              "  copilot-instructions.md",
              "  instructions/",
              "    frontend.instructions.md",
              "    backend.instructions.md",
              "docs/",
              "  architecture.md",
              "  adr/",
              "    001-state-management.md",
            ),
            language: "text",
            filename: "loan-workbench tree",
            explanation:
              "Keep behavior in .github and knowledge in docs so the assistant gets both the how and the why.",
          },
          {
            code: lines(
              "# .github/copilot-instructions.md",
              "",
              "- Product: Loan Workbench for underwriting teams.",
              "- Frontend: React 19 + TypeScript + Tailwind.",
              "- Backend: FastAPI + Pydantic + SQLAlchemy async.",
              "- Testing: Vitest for UI, pytest for API.",
              "- Never invent workflow states; use docs/architecture.md and ADRs.",
            ),
            language: "markdown",
            filename: ".github/copilot-instructions.md",
            explanation:
              "Start with a short repository-wide file that gives Copilot identity, stack, and non-obvious global rules.",
          },
        ],
      },
      qa: [
        {
          question: "Why do docs matter if the code already exists?",
          answer:
            "Code shows what exists. Docs explain why it exists, what was rejected, and what operational constraints matter. That missing why is often what the AI needs to avoid wrong suggestions.",
        },
        {
          question: "What is the highest-value document type for AI context?",
          answer:
            "Architecture Decision Records are especially valuable because they teach the assistant both the chosen pattern and the rejected alternatives.",
        },
        {
          question: "What should live in .github versus docs?",
          answer:
            "Put behavior and automation in .github. Put architecture, decisions, conventions, and operational knowledge in docs. They solve different but complementary problems.",
        },
      ],
      tags: [
        ".github",
        "docs-folder",
        "project-context",
        "repository-structure",
        "ADR",
      ],
    },
    {
      slug: "instruction-architecture",
      title: "Design Instruction Architecture",
      type: "video",
      duration: "9 mins",
      videoId: "placeholder-instruction-architecture",
      description:
        "Design a layered instruction architecture with repository-wide defaults, path-specific scoping, and the three-axis context model that keeps AI guidance precise and maintainable.",
      objectives: [
        "Describe the difference between repository-wide, path-specific, and agent-scoped instruction patterns",
        "Explain how instruction layering reduces irrelevant context and conflicting guidance",
        "Use applyTo scoping to encode framework- or domain-specific rules",
        "Apply the three-axis context model to organize customization files",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/ctx-sdlc/lessons/03-instruction-architecture",
      infoBoxes: [
        {
          title: "Two Ways Instructions Activate",
          content:
            "Instructions load either because the current file matches the applyTo glob pattern, or because the description semantically matches the current task. Good descriptions capture intent and trigger phrases, not just file types.",
        },
      ],
      noteBoxes: [
        {
          title: "Keep Instructions Focused",
          content:
            "Put non-obvious conventions in instructions. Do not duplicate rules already enforced by ESLint, Prettier, type checkers, or test runners. Split by concern using multiple files, not one giant dump.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph "Horizontal — Always Available"\n        A["Agents"]\n        B["Skills"]\n    end\n    subgraph "Vertical — Filtered by Scope"\n        C["Instructions"]\n        D["Org → Repo → Path → Personal"]\n    end\n    subgraph "Diagonal — Task-Specific"\n        E["Prompts"]\n    end\n    A --> F["Runtime Context"]\n    B --> F\n    C --> F\n    E --> F',
          caption:
            "The three-axis model explains how different context sources activate and combine.",
          alt: "Horizontal agents and skills, vertical instructions, and diagonal prompts compose into runtime context.",
        },
        {
          chart:
            'graph TD\n    A["Personal Settings"] --> B["Path-Specific\\n*.instructions.md"]\n    B --> C["Repository-Wide\\ncopilot-instructions.md"]\n    C --> D["Organization Defaults"]',
          caption:
            "More specific scopes override broader defaults when instructions conflict.",
          alt: "Instruction precedence pyramid from organization defaults up to personal settings.",
        },
      ],
      poll: {
        question: "How are your Copilot instructions organized today?",
        options: [
          { id: "none", text: "No instruction files yet" },
          {
            id: "single",
            text: "One copilot-instructions.md with everything in it",
          },
          { id: "few", text: "A few files, loosely organized" },
          {
            id: "layered",
            text: "Layered with applyTo scoping per framework or domain",
          },
        ],
        simulatedVotes: {
          none: 24,
          single: 35,
          few: 23,
          layered: 18,
        },
      },
      codePreview: {
        title: "Layered Instruction Files",
        description:
          "Repository-wide defaults plus focused path-specific rules for the same loan-workbench repo.",
        segments: [
          {
            code: lines(
              "---",
              'applyTo: "**"',
              "---",
              "",
              "# Loan Workbench Repository Rules",
              "",
              "- Use React for apps/web and FastAPI for services/api.",
              "- Never invent underwriting workflow states.",
              "- Always reference docs/adr before changing domain behavior.",
            ),
            language: "markdown",
            filename: ".github/copilot-instructions.md",
            explanation:
              "Keep the repository-wide layer short and universally applicable.",
          },
          {
            code: lines(
              "---",
              'name: "Loan UI Standards"',
              'description: "Rules for React loan workflow screens, accessibility, and form state"',
              'applyTo: "apps/web/**/*.tsx"',
              "---",
              "",
              "- Use named exports for components.",
              "- Forms use React Hook Form with Zod validation.",
              "- Loan status badges must use the shared status map.",
            ),
            language: "markdown",
            filename: ".github/instructions/frontend.instructions.md",
            explanation:
              "Path-scoped instructions keep UI-specific guidance out of backend tasks.",
          },
        ],
      },
      qa: [
        {
          question: "Why is one huge instruction file a problem?",
          answer:
            "It loads irrelevant guidance for unrelated tasks, wastes context budget, and becomes difficult to maintain as frameworks and domains evolve.",
        },
        {
          question: "What does the description field really do?",
          answer:
            "It is not just documentation. It is a semantic routing hint that helps the runtime decide when a file is relevant even outside strict path matching.",
        },
        {
          question: "Where do agent-specific rules belong?",
          answer:
            "Inside the relevant .agent.md file, because those rules belong to a role on the horizontal axis rather than to a file path on the vertical axis.",
        },
      ],
      tags: [
        "instructions",
        "applyTo",
        "layering",
        "three-axis-model",
        "glob-patterns",
        "context-pyramid",
      ],
    },
    {
      slug: "planning-workflows",
      title: "Planning Workflows with Prompts and Plan Agents",
      type: "video",
      duration: "10 mins",
      videoId: "placeholder-planning-workflows",
      description:
        "Separate planning from implementation using prompt files for repeatable workflows and read-only planning agents that decompose tasks, surface ambiguity, and produce actionable implementation plans.",
      objectives: [
        "Explain why AI-assisted planning should be separated from implementation work",
        "Use prompt files to standardize recurring planning activities",
        "Describe how read-only planning agents improve decomposition and clarification",
        "Design a planning workflow that turns vague requests into actionable implementation tasks",
      ],
      codeUrl:
        "https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/ctx-sdlc/lessons/04-planning-workflows",
      infoBoxes: [
        {
          title: "Plan Before You Code",
          content:
            "Many teams jump straight from a feature request to code generation. That feels fast, but it usually produces weak results because the AI is asked to interpret requirements, choose architecture, and write code all at once.",
        },
      ],
      noteBoxes: [
        {
          title: "Planning Agents Should Be Read-Only",
          content:
            "Planning agents should inspect the repository, read documentation, and produce a plan — not create or modify files. That separation keeps discovery distinct from implementation and prevents premature changes.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Curate Context\\n.github/ + /docs/"] --> B["Plan\\nPrompts + Read-Only Agents"]\n    B --> C["Build\\nImplementation Agents"]\n    C --> D["Validate\\nReview + Guardrails"]\n    D --> |"Feedback"| A',
          caption:
            "Context engineering follows a curate → plan → build → validate cycle.",
          alt: "Four-phase workflow from curated context to planning, building, and validation.",
        },
        {
          chart:
            'graph TD\n    A["Vague Request"] --> B["Planning Agent"]\n    B --> C{"Requirements complete?"}\n    C --> |"No"| D["Surface open questions"]\n    D --> E["Developer clarifies"]\n    E --> B\n    C --> |"Yes"| F["Structured plan"]',
          caption:
            "Good planning workflows force ambiguous requests to become explicit before coding starts.",
          alt: "Clarification loop for planning ambiguous feature requests.",
        },
      ],
      poll: {
        question:
          "How do you typically approach a new feature with AI assistance?",
        options: [
          {
            id: "direct",
            text: "Jump straight to code from the feature request",
          },
          {
            id: "manual",
            text: "Write a plan manually, then ask AI to implement it",
          },
          {
            id: "prompt",
            text: "Use a prompt or template to generate a plan first",
          },
          {
            id: "agent",
            text: "Use a dedicated read-only planning agent",
          },
        ],
        simulatedVotes: {
          direct: 41,
          manual: 26,
          prompt: 20,
          agent: 13,
        },
      },
      codePreview: {
        title: "Planning Prompt and Agent",
        description:
          "A feature-planning slash command and a read-only planner agent for the loan-workbench project.",
        segments: [
          {
            code: lines(
              "---",
              'name: "plan-feature"',
              'description: "Break down a loan-workbench feature into implementation tasks"',
              'agent: "planner"',
              "tools:",
              "  - read_file",
              "  - grep_search",
              "  - semantic_search",
              "---",
              "",
              "Feature request: ${input:feature}",
              "",
              "Produce:",
              "1. Summary",
              "2. Open questions",
              "3. Tasks with acceptance criteria",
              "4. Validation steps",
            ),
            language: "markdown",
            filename: ".github/prompts/plan-feature.prompt.md",
            explanation:
              "Prompt files turn repeatable planning motions into one slash command.",
          },
          {
            code: lines(
              "---",
              'name: "planner"',
              'description: "Read-only planning agent for repository analysis and task decomposition"',
              "tools:",
              "  - read_file",
              "  - grep_search",
              "  - semantic_search",
              "agents: []",
              "---",
              "",
              "- Never create or edit files.",
              "- Surface open questions before proposing tasks.",
              "- Reference ADRs and architecture docs in every plan.",
            ),
            language: "markdown",
            filename: ".github/agents/planner.agent.md",
            explanation:
              "The planner agent is intentionally limited to read-only work and structured output.",
          },
        ],
      },
      qa: [
        {
          question: "Why not let the implementer do the planning too?",
          answer:
            "Because planning and implementation require different behaviors. A planner should explore, question, and decompose. An implementer should execute against an agreed plan.",
        },
        {
          question: "What is the value of clarification loops?",
          answer:
            "They force vague requests to become explicit before code changes begin, which reduces rework and avoids hidden assumptions in the implementation phase.",
        },
        {
          question: "What should every good planning output include?",
          answer:
            "A summary, open questions, concrete tasks, dependencies, risks, and validation steps. Planning is only useful if it becomes actionable.",
        },
      ],
      tags: [
        "prompt-files",
        "planning-agent",
        "slash-commands",
        "variables",
        "clarification-loops",
        "read-only",
      ],
    },
    {
      slug: "implementation-workflows",
      title: "Implementation Workflows with Agents and Skills",
      type: "video",
      duration: "11 mins",
      videoId: "placeholder-implementation-workflows",
      description:
        "Design implementation workflows using custom agents for role separation, skills for reusable patterns, and TDD handoffs for disciplined execution — all governed by least-privilege tool boundaries.",
      objectives: [
        "Explain how custom agents and skills support role-specialized implementation work",
        "Apply least-privilege principles to implementation and review workflows",
        "Describe how TDD handoffs improve reliability in AI-assisted coding",
        "Design an implementation workflow that separates planning, coding, and review concerns",
      ],
      infoBoxes: [
        {
          title: "Role Separation Beats Monolithic Agents",
          content:
            "Implementation is not one undifferentiated act. Planning, coding, testing, and review need different tools, different context windows, and different behavioral constraints. Splitting these roles improves output at every stage.",
        },
      ],
      noteBoxes: [
        {
          title: "Least-Privilege Boundaries",
          content:
            "A review agent should never have write access. An implementation agent should not carry deployment tools by default. Restricting capabilities reduces accidental behavior and limits blast radius.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    P["Planner Agent\\nread-only"] --> I["Implementer Agent\\nwrite scoped"]\n    I --> R["Reviewer Agent\\nread-only + diagnostics"]\n    R --> |"feedback"| I\n    R --> |"approved"| D["Done"]',
          caption:
            "Three-agent implementation trio: planner decomposes, implementer codes, reviewer validates.",
          alt: "Planner agent passes a structured plan to implementer, which passes changes to reviewer with a feedback loop.",
        },
        {
          chart:
            "sequenceDiagram\n    participant Dev as Developer\n    participant T as Test Agent\n    participant I as Implement Agent\n    participant R as Review Agent\n    Dev->>T: Describe expected behavior\n    T->>I: Handoff: make test pass\n    I->>R: Handoff: validate changes\n    R-->>I: Fix issues if needed\n    R->>Dev: All green",
          caption:
            "TDD handoff keeps test creation, implementation, and review separated.",
          alt: "Test agent, implementer, and reviewer form a TDD handoff sequence.",
        },
      ],
      poll: {
        question:
          "How many distinct agents or roles do you currently use in your coding workflow?",
        options: [
          { id: "one", text: "Just one — default chat or inline agent" },
          { id: "two", text: "Two — a planner and an implementer" },
          {
            id: "three",
            text: "Three or more — planner, implementer, reviewer, and more",
          },
          { id: "none", text: "I do not use AI agents for implementation" },
        ],
        simulatedVotes: {
          one: 48,
          two: 22,
          three: 12,
          none: 18,
        },
      },
      codePreview: {
        title: "Role-Separated Agent Definitions",
        description:
          "Three complementary agents plus a small TDD skill package.",
        segments: [
          {
            code: lines(
              "---",
              'name: "implementer"',
              'description: "Write code for approved loan-workbench tasks"',
              "tools:",
              "  - read_file",
              "  - create_file",
              "  - replace_string_in_file",
              "  - run_in_terminal",
              "agents:",
              "  - reviewer",
              "---",
              "",
              "- Follow the plan exactly.",
              "- Prefer existing utilities before writing new ones.",
              "- Hand off to reviewer after implementation.",
            ),
            language: "markdown",
            filename: ".github/agents/implementer.agent.md",
            explanation:
              "The implementer gets write access, but only the tools needed for implementation and local validation.",
          },
          {
            code: lines(
              "---",
              'name: "test-driven-development"',
              'description: "Use when implementing any feature or bugfix before writing implementation code"',
              "---",
              "",
              "1. Write a failing test.",
              "2. Run the test and confirm the failure.",
              "3. Write the minimum code to pass.",
              "4. Re-run tests.",
              "5. Refactor if needed.",
            ),
            language: "markdown",
            filename: ".github/skills/test-driven-development/SKILL.md",
            explanation:
              "Skills package reusable workflows and supporting resources without forcing them into every session.",
          },
        ],
      },
      qa: [
        {
          question: "Why are skills useful if I already have agents?",
          answer:
            "Agents define roles. Skills define reusable capabilities or workflows that those roles can invoke when needed. They solve different problems.",
        },
        {
          question:
            "What is the practical benefit of a reviewer agent with no write tools?",
          answer:
            "It must report findings instead of silently changing code, which makes review explicit, auditable, and easier for the developer to reason about.",
        },
        {
          question: "What does TDD handoff improve?",
          answer:
            "It preserves discipline. A test-focused role writes the failing test first, and the implementer focuses on the smallest change that satisfies it.",
        },
      ],
      tags: [
        "custom-agents",
        "agent-skills",
        "tdd-handoffs",
        "role-separation",
        "least-privilege",
        "implementation",
      ],
    },
    {
      slug: "tools-and-guardrails",
      title: "MCP, Hooks, and Guardrails",
      type: "video",
      duration: "10 mins",
      videoId: "placeholder-tools-and-guardrails",
      description:
        "Extend agent capabilities with MCP servers for external tool access, then enforce safety with hooks and validation scripts that run at key lifecycle points — keeping your AI workflows powerful and trustworthy.",
      objectives: [
        "Distinguish between capability extensions and enforcement mechanisms in AI-assisted workflows",
        "Explain when to use MCP servers versus hooks for a given requirement",
        "Describe how validation and guardrails reduce operational risk in AI-assisted work",
        "Design a tooling layer that expands capability without sacrificing safety",
      ],
      infoBoxes: [
        {
          title: "Capability Without Guardrails Is Not Enough",
          content:
            "MCP servers let your agents browse the web, query databases, call APIs, and interact with external services. That is powerful — but every new capability needs a corresponding guardrail.",
        },
      ],
      noteBoxes: [
        {
          title: "Hook Safety: Never Call the Model from a Hook",
          content:
            "Hooks must stay fast and deterministic. Do not call AI models from hooks. Use them for validation, formatting, and hard checks only.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph Capability["Expand: MCP Servers"]\n        A["GitHub MCP"]\n        B["Playwright MCP"]\n        C["Postgres MCP"]\n    end\n    subgraph Guardrails["Enforce: Hooks + Validation"]\n        D["onSave Hook"]\n        E["onEdit Guard"]\n        F["onTerminal Guard"]\n    end\n    Capability --> Guardrails\n    Guardrails --> S["Safe, Capable Workflow"]',
          caption:
            "MCP expands what agents can do. Hooks and validation enforce what they must not do.",
          alt: "Capability layer from MCP servers feeds a guardrail layer of hooks and validation.",
        },
        {
          chart:
            "sequenceDiagram\n    participant Agent\n    participant VSCode as VS Code\n    participant Hook\n    Agent->>VSCode: Edit file\n    VSCode->>Hook: onEdit\n    Hook-->>VSCode: Allow or block\n    Agent->>VSCode: Save file\n    VSCode->>Hook: onSave\n    Hook-->>VSCode: Format and lint\n    Agent->>VSCode: Terminal command\n    VSCode->>Hook: onTerminal\n    Hook-->>VSCode: Allow or require approval",
          caption:
            "Hooks fire at key lifecycle points to validate, transform, or block actions.",
          alt: "Edit, save, and terminal lifecycle hooks intercept actions before or after they occur.",
        },
      ],
      poll: {
        question:
          "Which external tool integration would be most valuable for your workflow?",
        options: [
          { id: "browser", text: "Browser automation" },
          { id: "database", text: "Database access" },
          { id: "api", text: "API integration" },
          { id: "none", text: "I have not added MCP servers yet" },
        ],
        simulatedVotes: {
          browser: 24,
          database: 18,
          api: 36,
          none: 22,
        },
      },
      codePreview: {
        title: "Capability and Guardrail Files",
        description:
          "A small MCP config plus a blocking hook for protected paths.",
        segments: [
          {
            code: lines(
              "{",
              '  "servers": {',
              '    "github": {',
              '      "command": "npx",',
              '      "args": ["-y", "@modelcontextprotocol/server-github"],',
              '      "env": { "GITHUB_TOKEN": "${input:githubToken}" }',
              "    }",
              "  }",
              "}",
            ),
            language: "json",
            filename: ".vscode/mcp.json",
            explanation:
              "MCP configuration should use input variables or environment references, never hardcoded secrets.",
          },
          {
            code: lines(
              "#!/usr/bin/env python3",
              '"""Block edits to protected workflow and secrets files."""',
              "import json",
              "import sys",
              "",
              "PROTECTED = ('.github/workflows/', '.env', 'infra/')",
              "payload = json.loads(sys.stdin.read())",
              "path = payload.get('parameters', {}).get('filePath', '')",
              "if any(path.startswith(prefix) for prefix in PROTECTED):",
              "    print(json.dumps({'decision': 'deny'}))",
              "    sys.exit(1)",
              "sys.exit(0)",
            ),
            language: "python",
            filename: ".github/hooks/block-protected-files.py",
            explanation:
              "When failure would be expensive, use a deterministic hook rather than a polite natural-language instruction.",
          },
        ],
      },
      qa: [
        {
          question: "When should I use MCP instead of a hook?",
          answer:
            "Use MCP when the assistant needs a new capability such as browser automation, API access, or database inspection. Use hooks when you need deterministic enforcement or automation around actions the assistant already performs.",
        },
        {
          question:
            "Why are hooks better for protected paths than instructions?",
          answer:
            "Because hooks can block the action outright. Instructions are guidance. Hooks are enforcement.",
        },
        {
          question: "What is the practical rollout strategy here?",
          answer:
            "Add external capabilities incrementally, and add guardrails where failure would be costly. Do not collect tools without a workflow.",
        },
      ],
      tags: [
        "mcp-servers",
        "hooks",
        "guardrails",
        "lifecycle-automation",
        "validation",
        "safety",
      ],
    },
    {
      slug: "surface-strategy",
      title: "Surface Strategy and Portability",
      type: "reading",
      duration: "8 mins",
      description:
        "Not every Copilot surface supports the same context artifacts. Learn to invest in portable foundations first, then layer surface-specific capabilities where they deliver clear value.",
      objectives: [
        "Compare how context artifacts behave across VS Code, Copilot CLI, coding agent, and review surfaces",
        "Explain why portability matters when choosing where to invest in customization work",
        "Use surface strategy to decide which artifacts should be foundational and which should be optional layers",
        "Treat surface support as a design constraint rather than an afterthought",
      ],
      readingUrl:
        "https://code.visualstudio.com/docs/copilot/customization/overview",
      infoBoxes: [
        {
          title: "Build Portable Foundations First",
          content:
            "The most common mistake is optimizing for the richest surface and forgetting the rest. Repository instructions and documentation should form the portable foundation that every surface can benefit from.",
        },
      ],
      noteBoxes: [
        {
          title: "Surface Support Changes Frequently",
          content:
            "Treat support matrices as design guidance, not timeless truth. Always verify the current documentation before making long-lived architecture decisions.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph Foundation["Portable Foundation — All Surfaces"]\n        A["Repository Instructions"]\n        B["Documentation"]\n    end\n    subgraph Mid["Broad Support — Most Surfaces"]\n        C["Custom Instructions"]\n        D["MCP Servers"]\n    end\n    subgraph Specialized["Surface-Specific"]\n        E["Agents"]\n        F["Skills"]\n        G["Hooks"]\n        H["Prompts"]\n    end\n    Foundation --> Mid --> Specialized',
          caption:
            "Invest in portable foundations first, then layer specialized features on top.",
          alt: "Portability pyramid from repository instructions and docs up to surface-specific features.",
        },
      ],
      poll: {
        question: "Which Copilot surface do you use most often?",
        options: [
          { id: "vscode", text: "VS Code chat or inline" },
          { id: "cli", text: "Copilot CLI" },
          { id: "coding-agent", text: "Coding agent" },
          { id: "review", text: "Code review" },
        ],
        simulatedVotes: {
          vscode: 66,
          cli: 12,
          "coding-agent": 12,
          review: 10,
        },
      },
      qa: [
        {
          question: "What should I build first if portability matters?",
          answer:
            "Repository instructions and docs. They are the broadest, most reusable context layer across surfaces.",
        },
        {
          question: "Should I avoid VS Code-specific features entirely?",
          answer:
            "No. They add real value. The principle is to build portable foundations first, then layer deeper IDE-specific workflows where they are justified.",
        },
      ],
      tags: [
        "surface-strategy",
        "portability",
        "copilot-cli",
        "coding-agent",
        "code-review",
        "cross-surface",
      ],
    },
    {
      slug: "operating-model",
      title: "Operating the Context System",
      type: "reading",
      duration: "8 mins",
      description:
        "Context engineering is not a one-time setup. Learn the operating model for maintaining, measuring, and cleaning up your context artifacts so AI assistance stays aligned as your codebase evolves.",
      objectives: [
        "Explain why context engineering requires ongoing maintenance rather than one-time setup",
        "Describe the role of memory, measurement, and review in keeping AI behavior aligned",
        "Identify common anti-patterns that degrade context quality over time",
        "Build an operating model for reviewing, updating, and validating context artifacts",
      ],
      readingUrl:
        "https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot",
      infoBoxes: [
        {
          title: "Context Is a Living System",
          content:
            "If .github and /docs do not evolve with the codebase, they stop being context and start becoming misinformation. The operating model matters as much as the initial setup.",
        },
      ],
      noteBoxes: [
        {
          title: "Memory Complements But Does Not Replace Instructions",
          content:
            "Copilot memory is reactive and probabilistic. Critical architectural decisions and mandatory conventions still belong in explicit, version-controlled files.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Use Context"] --> B["Measure Failures"]\n    B --> C["Review Artifacts"]\n    C --> D["Update or Remove"]\n    D --> E["Validate"]\n    E --> A',
          caption:
            "The operating model is a continuous cycle: use, measure, review, update, and validate.",
          alt: "Context maintenance cycle from use through validation back to use.",
        },
      ],
      poll: {
        question:
          "How often do you review or update your AI context configuration?",
        options: [
          { id: "never", text: "Never — I set it up once" },
          { id: "broken", text: "Only when something breaks" },
          { id: "monthly", text: "Monthly or with architecture changes" },
          { id: "quarterly", text: "Quarterly with a formal audit" },
        ],
        simulatedVotes: {
          never: 32,
          broken: 28,
          monthly: 24,
          quarterly: 16,
        },
      },
      qa: [
        {
          question: "What is the most common long-term failure mode?",
          answer:
            "Stale context. The repo changes, but the instruction and documentation layer does not. That teaches the assistant outdated or contradictory behavior.",
        },
        {
          question: "What signals tell me the context system is thin or stale?",
          answer:
            "Repeated AI mistakes, repeated clarification questions, inconsistent behavior across developers, and instructions that reference files or patterns that no longer exist.",
        },
      ],
      tags: [
        "operating-model",
        "maintenance",
        "memory",
        "measurement",
        "anti-patterns",
        "context-hygiene",
      ],
    },
    {
      slug: "ai-assisted-sdlc-capstone",
      title: "End-to-End AI-Assisted SDLC Workflow",
      type: "video",
      duration: "12 mins",
      videoId: "placeholder-ai-assisted-sdlc-capstone",
      description:
        "Synthesize the entire course into one end-to-end AI-assisted engineering workflow. Map shared context, planning, implementation, tooling, and maintenance into a curate → plan → build → validate delivery loop.",
      objectives: [
        "Synthesize all course layers into a single curate → plan → build → validate delivery loop",
        "Map each customization surface to its corresponding SDLC phase",
        "Design a minimum viable context stack for a real team starting from scratch",
        "Apply the progressive complexity principle to sequence a team adoption plan",
      ],
      infoBoxes: [
        {
          title: "From Surfaces to System",
          content:
            "The goal of the capstone is not to use every surface. It is to use the right surfaces at the right stage of delivery: curate context, plan against it, build with it, and validate the result.",
        },
      ],
      noteBoxes: [
        {
          title: "Start Small, Prove Value",
          content:
            "Most teams get most of the value from instructions plus docs. Add prompts, agents, MCP, hooks, and skills only when they solve an actual friction point.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Curate\\n.github/ + /docs/"] --> B["Plan\\nRead-only planner"]\n    B --> C["Build\\nImplementation agent"]\n    C --> D["Validate\\nHooks + review"]\n    D --> E["Deploy"]\n    E --> A',
          caption:
            "The delivery loop: curate context, plan deliberately, build with scoped roles, validate with guardrails, then feed improvements back into the context layer.",
          alt: "Curate, plan, build, validate, and deploy form a continuous delivery loop.",
        },
      ],
      poll: {
        question:
          "Which stage of the minimum viable context stack has your team reached?",
        options: [
          { id: "none", text: "No context setup yet" },
          { id: "stage1", text: "Repository instructions only" },
          { id: "stage2", text: "Instructions plus docs" },
          { id: "stage3", text: "Prompts or planning workflow" },
          { id: "stage4", text: "Agents, skills, and guardrails" },
        ],
        simulatedVotes: {
          none: 18,
          stage1: 32,
          stage2: 26,
          stage3: 14,
          stage4: 10,
        },
      },
      codePreview: {
        title: "Minimum Viable Context Stack",
        description: "A compact stack for a real team starting from scratch.",
        segments: [
          {
            code: lines(
              "# Day 1",
              ".github/copilot-instructions.md",
              "docs/architecture.md",
              "",
              "# Week 1",
              ".github/instructions/frontend.instructions.md",
              ".github/instructions/backend.instructions.md",
              "docs/adr/001-state-management.md",
              "",
              "# Month 1",
              ".github/prompts/plan-feature.prompt.md",
              ".github/agents/planner.agent.md",
              ".github/agents/implementer.agent.md",
            ),
            language: "text",
            filename: "minimum-viable-context-stack",
            explanation:
              "Earn each layer of complexity. Do not start with the most sophisticated setup if the foundation is still weak.",
          },
        ],
      },
      qa: [
        {
          question:
            "Do I need all seven customization surfaces to be effective?",
          answer:
            "No. Most teams get substantial value from instructions and docs first. The rest are optional layers that should earn their complexity by solving real workflow problems.",
        },
        {
          question:
            "What is the capstone lesson trying to teach beyond feature inventory?",
          answer:
            "It teaches a delivery system. Context engineering is valuable because it improves the whole flow from planning through validation, not because it gives you a collection of isolated configuration files.",
        },
      ],
      tags: [
        "capstone",
        "sdlc",
        "delivery-loop",
        "minimum-viable-stack",
        "progressive-complexity",
        "workflow",
      ],
    },
    {
      slug: "questions",
      title: "Course Quiz",
      type: "quiz",
      duration: "10 mins",
      description:
        "Test your context engineering knowledge with scenario-based and concept-check questions covering the full curate → plan → build → validate workflow and the seven customization surfaces.",
      objectives: [
        "Validate understanding of context engineering principles and the delivery loop",
        "Test knowledge of the seven customization surfaces and when to use each",
        "Assess judgment on progressive complexity, least-privilege, and maintenance",
        "Apply course concepts to realistic scenarios",
      ],
      infoBoxes: [
        {
          title: "Assessment Overview",
          content:
            "This quiz mixes concept checks with scenario-based questions. When two answers seem plausible, ask which one best follows progressive complexity, least privilege, and long-term maintainability.",
        },
      ],
      noteBoxes: [
        {
          title: "Target Score",
          content:
            "Aim for 80 percent or higher. If you miss multiple questions in one area, revisit the corresponding lesson before moving on.",
        },
      ],
      quizQuestions: [
        makeQuizQuestion(
          "q1",
          "What is the core thesis of context engineering in this course?",
          [
            "AI should replace manual code review",
            "AI output quality tracks input context quality",
            "Every repo needs all seven customization surfaces",
            "The best model solves repository context automatically",
          ],
          1,
          "The course is built on the idea that AI output quality correlates directly with input context quality.",
        ),
        makeQuizQuestion(
          "q2",
          "What is the best first step for a repository with no Copilot customization yet?",
          [
            "Create five agents",
            "Add MCP servers for every external system",
            "Create a short copilot-instructions.md file",
            "Install plugins before writing any files",
          ],
          2,
          "Start with a small repository-wide instruction file. It is the highest-leverage, lowest-complexity step.",
        ),
        makeQuizQuestion(
          "q3",
          "How do path-specific instructions normally activate?",
          [
            "Only through manual invocation",
            "By applyTo glob matching and semantic description matching",
            "Only when the coding agent asks for them",
            "Only when a prompt file links to them",
          ],
          1,
          "Path-specific instructions load through applyTo matching and can also be discovered through semantic description matching.",
        ),
        makeQuizQuestion(
          "q4",
          "What is the strongest reason to separate planning from implementation?",
          [
            "Planning agents are cheaper",
            "It keeps discovery and clarification distinct from code changes",
            "It avoids writing docs",
            "Implementation agents cannot read files",
          ],
          1,
          "Planning is a different kind of work. Separating it reduces premature code changes and forces ambiguity into the open.",
        ),
        makeQuizQuestion(
          "q5",
          "Which role should usually be read-only?",
          ["Implementation agent", "Review agent", "MCP server", "Prompt file"],
          1,
          "Review roles should usually report findings, not silently modify the implementation.",
        ),
        makeQuizQuestion(
          "q6",
          "What is the practical value of agent skills?",
          [
            "They replace instructions entirely",
            "They package reusable workflows and resources that load on demand",
            "They are only for UI theming",
            "They make applyTo glob patterns unnecessary",
          ],
          1,
          "Skills package capabilities and supporting resources without forcing them into every session.",
        ),
        makeQuizQuestion(
          "q7",
          "When should you choose a hook instead of an instruction?",
          [
            "When you need deterministic enforcement",
            "When you want longer prose explanations",
            "When you need semantic discovery",
            "When you want the model to infer the rule",
          ],
          0,
          "Use hooks when failure would be expensive and you need deterministic enforcement rather than polite guidance.",
        ),
        makeQuizQuestion(
          "q8",
          "What is the portability-first design rule?",
          [
            "Build VS Code-specific features first",
            "Avoid prompts entirely",
            "Build portable foundations first, then layer specialized features",
            "Only use the coding agent surface",
          ],
          2,
          "Repository instructions and docs should form the portable foundation. Specialized features can layer on top.",
        ),
        makeQuizQuestion(
          "q9",
          "What makes context engineering an operating model rather than a setup task?",
          [
            "It requires expensive cloud tooling",
            "It needs ongoing review, updates, and cleanup as the codebase evolves",
            "It only works for enterprise teams",
            "It depends on personal memory rather than shared files",
          ],
          1,
          "Context files become harmful if they drift. Maintenance, measurement, and cleanup are part of the discipline.",
        ),
        makeQuizQuestion(
          "q10",
          "What is the progressive complexity principle?",
          [
            "Always adopt the most powerful setup immediately",
            "Add complexity only when each new layer earns its place",
            "Keep all rules in one file until the repo is large",
            "Prefer more tools over clearer workflows",
          ],
          1,
          "Start simple and add layers only when a real workflow limitation justifies them.",
        ),
        makeQuizQuestion(
          "q11",
          "Which pair forms the shared project context foundation?",
          [
            ".github and /docs",
            "MCP and hooks",
            "Prompts and plugins",
            "Subagents and memory",
          ],
          0,
          "Behavior in .github plus knowledge in /docs form the reusable foundation for later workflows.",
        ),
        makeQuizQuestion(
          "q12",
          "Which statement best describes the capstone delivery loop?",
          [
            "Plan, code, and deploy in one monolithic step",
            "Curate context, plan, build, validate, then feed improvements back",
            "Write prompts first and docs later if needed",
            "Rely on memory instead of version-controlled files",
          ],
          1,
          "The course culminates in a curate → plan → build → validate loop with feedback returning to the context layer.",
        ),
      ],
      tags: ["quiz", "assessment", "review", "knowledge-check"],
    },
  ],
  overview: {
    heroSubheading:
      "Master the seven customization surfaces — instructions, prompts, agents, skills, MCP, hooks, and plugins — that transform GitHub Copilot from a generic assistant into a domain expert for your project.",
    learnItems: [
      {
        icon: "",
        title: "The .github folder, end to end",
        description:
          "How custom instructions activate via glob patterns, how prompt files create reusable slash commands, how agents define specialized personas — the complete directory anatomy, explained through a real-world project.",
      },
      {
        icon: "",
        title: "Seven surfaces, one context architecture",
        description:
          "Build each customization layer individually — instructions, prompts, agents, skills, MCP servers, hooks, and plugins — then combine them into a composable three-axis context system that activates automatically.",
      },
      {
        icon: "",
        title: "Full SDLC integration",
        description:
          "Apply context engineering across the entire software development lifecycle: plan with prompts, code with instructions, review with agents, and automate with hooks — from first commit to production CI or CD.",
      },
      {
        icon: "",
        title: "VS Code and CLI throughout",
        description:
          "Every demo runs in VS Code with GitHub Copilot Chat and the Copilot CLI. No cloud accounts or paid APIs required — you build a real .github setup that works on your local machine from lesson one.",
      },
    ],
    aboutParagraphs: [
      "GitHub Copilot is a powerful code generation tool. But out of the box, it does not know your project's naming conventions, preferred libraries, architecture decisions, or testing patterns. Every new chat session starts from zero — an amnesiac genius that writes excellent code in the wrong framework. Context engineering fixes that by building structured, version-controlled configuration files that teach the AI how your project works.",
      "The customization system has seven distinct surfaces. <strong>Custom instructions</strong> activate automatically based on file paths. <strong>Prompt files</strong> create reusable slash commands for recurring tasks. <strong>Custom agents</strong> define specialized personas with restricted tool access. <strong>Skills</strong> package domain knowledge for cross-tool portability. <strong>MCP servers</strong> connect external tools. <strong>Hooks</strong> automate pre- and post-chat actions. <strong>Plugins</strong> extend agent capabilities from the marketplace. Each surface has a defined file format, trigger mechanism, and scope — and they compose together through a three-axis model.",
      "In this course you build the complete picture. Starting with a blank .github folder, each lesson adds one layer of context capability — from always-on instructions through lifecycle hooks. By the end, you have a production-grade .github and /docs tree that makes Copilot behave like a project-aware expert. Every demo uses VS Code and the Copilot CLI.",
    ],
    detailItems: [
      {
        title: "Understand why context engineering matters",
        description:
          "Learn why AI output quality correlates directly with input context quality, how context engineering differs from prompt engineering, and why the shift to agentic AI demands a systematic approach.",
      },
      {
        title: "Master the .github directory structure",
        description:
          "Explore the complete .github folder anatomy — six subfolders, each controlling a different aspect of AI behavior. Learn the instruction layering pattern, precedence rules, and VS Code settings that customize file discovery.",
      },
      {
        title: "Build all seven customization surfaces",
        description:
          "Create custom instructions with glob-scoped activation, prompt files with dynamic variables, agent personas with tool restrictions, SKILL.md capability packages, MCP server connections, and lifecycle hooks.",
      },
      {
        title: "Apply the three-axis context model",
        description:
          "Understand horizontal (agents and skills), vertical (instructions), and diagonal (prompts) context axes. Learn how they compose automatically and design layered architectures for multi-framework projects.",
      },
      {
        title: "Integrate context into your SDLC",
        description:
          "Apply context engineering to planning, coding, review, testing, and CI or CD. Build role-based workflows that move from curated context to validated changes.",
      },
      {
        title: "Avoid common anti-patterns",
        description:
          "Recognize and fix instruction bloat, monolithic rule files, duplicated linter guidance, over-privileged agents, and stale context that fights the AI instead of guiding it.",
      },
    ],
    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["VS Code", "GitHub Copilot", "Git", "TypeScript"],
      description:
        "Developers who use GitHub Copilot and want to move beyond one-off prompting to systematic, project-wide AI customization. Familiarity with VS Code and basic Git is recommended. No specific programming language expertise is required.",
    },
    audienceCards: [
      {
        icon: "💻",
        title: "Individual Developers",
        description:
          "You use Copilot daily and want it to generate code that matches your project conventions without constant manual correction.",
      },
      {
        icon: "🏗️",
        title: "Tech Leads and Architects",
        description:
          "You want to encode architecture decisions, coding standards, and security policies into AI configuration that applies automatically for the whole team.",
      },
      {
        icon: "⚙️",
        title: "DevOps and Platform Engineers",
        description:
          "You manage CI or CD pipelines and developer tooling, and want to integrate AI context into existing automation and governance workflows.",
      },
      {
        icon: "🤖",
        title: "Teams Adopting Agentic AI",
        description:
          "Your team is moving from autocomplete to agents, and needs a structured approach to agent configuration, skills, and multi-agent orchestration.",
      },
    ],
  },
};
