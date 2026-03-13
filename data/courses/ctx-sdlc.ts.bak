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
  totalDuration: "~120 mins",
  tags: [
    "Context Engineering",
    "GitHub Copilot",
    ".github",
    "Custom Instructions",
    "MCP",
    "AI-Assisted SDLC",
  ],
  icon: "🧭",
  difficulty: "beginner",
  instructor: {
    name: "Nilay Parikh",
    imageSrc: "/brand/nilay_parikh.jpeg",
    role: "Founder · LocalM · ErgoSum",
  },
  parts: [
    {
      slug: "welcome",
      title: "Welcome",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-welcome",
      description:
        "Understand why context engineering is the most impactful skill for AI-assisted development and what you will build in this course.",
      objectives: [
        "Explain why AI output quality correlates directly with input context quality",
        "Distinguish context engineering from prompt engineering",
        "Identify the gap between generic AI and project-aware AI",
        "Preview the seven customization surfaces covered in this course",
      ],
      infoBoxes: [
        {
          title: "No Prerequisites",
          content:
            "This is the first lesson. No setup is needed. Follow the course in order because every lesson adds a new customization layer on top of the previous one.",
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
      ],
      poll: {
        question: "How do you use GitHub Copilot today?",
        options: [
          { id: "autocomplete", text: "Autocomplete only" },
          {
            id: "chat",
            text: "Chat for one-off questions, but I re-explain context each time",
          },
          {
            id: "instructions",
            text: "I have some custom instructions set up",
          },
          {
            id: "full-stack",
            text: "Full setup: instructions, agents, prompts, and more",
          },
        ],
      },
      qa: [
        {
          question: "What is context engineering?",
          answer:
            "Context engineering is the systematic practice of building, maintaining, and versioning the artifacts that give AI assistants project-specific knowledge through .github and /docs.",
        },
        {
          question:
            "How is context engineering different from prompt engineering?",
          answer:
            "Prompt engineering optimizes one interaction. Context engineering optimizes every interaction across the lifetime of the repository by storing reusable instructions, prompts, agents, and documentation in version control.",
        },
        {
          question: "What are the seven customization surfaces?",
          answer:
            "Custom instructions, prompt files, custom agents, agent skills, MCP servers, hooks, agent plugins, plus supporting systems like memory and docs.",
        },
        {
          question: "Do I need anything beyond Copilot itself?",
          answer:
            "No additional cloud setup is required for this course. The demos focus on VS Code and Copilot CLI using local repository configuration.",
        },
      ],
      tags: ["introduction", "overview", "context-engineering"],
    },
    {
      slug: "github-folder-anatomy",
      title: ".github Folder Anatomy",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-github-folder-anatomy",
      description:
        "Explore the complete .github directory structure and the layering model that controls how AI interacts with your project.",
      objectives: [
        "Map the complete .github directory structure for AI-optimized projects",
        "Explain the purpose of instructions, prompts, agents, skills, and hooks folders",
        "Apply instruction layering to control which rules activate for which files",
        "Configure VS Code settings that customize file discovery locations",
      ],
      infoBoxes: [
        {
          title: "The .github Control Center",
          content:
            "For Copilot, .github becomes the configuration tree for repository-wide rules, task prompts, custom agents, skills, and lifecycle automation. This lesson maps that structure before you start authoring files.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph ".github/"\n        A["copilot-instructions.md"] --> |"Always on"| Z["AI Context"]\n        B["instructions/"] --> |"Glob-filtered"| Z\n        C["prompts/"] --> |"User-invoked"| Z\n        D["agents/"] --> |"Agent-selected"| Z\n        E["skills/"] --> |"On-demand"| Z\n        F["hooks/"] --> |"Event-driven"| Z\n    end',
          caption:
            "Each .github subfolder feeds context to Copilot through a different activation mechanism.",
          alt: "Six .github configuration surfaces connect to a shared AI context.",
        },
        {
          chart:
            'graph TD\n    A["Repository\\ncopilot-instructions.md"] --> B["Path-Specific\\ninstructions/*.instructions.md"]\n    B --> C["Personal\\nUser settings"]\n    C --> D["Final Context"]\n    style C fill:#4a9eff,color:#fff',
          caption:
            "Instruction precedence runs from repository-wide defaults up to personal overrides.",
          alt: "Repository rules feed into path-specific rules and finally personal overrides.",
        },
      ],
      qa: [
        {
          question: "What are the main Copilot folders inside .github?",
          answer:
            "Use .github for copilot-instructions.md, path-scoped instructions, prompts, agents, skills, and hooks. GitHub Actions workflows still live there too, but they are separate from Copilot customization.",
        },
        {
          question: "What is instruction layering?",
          answer:
            "It means combining broad repository rules with narrower framework or folder-specific rules so only relevant guidance loads for each file.",
        },
        {
          question: "What wins when instructions conflict?",
          answer:
            "More specific scopes win. Personal settings override path-specific instructions, and path-specific instructions override repository-wide defaults.",
        },
        {
          question: "Can I move these folders?",
          answer:
            "Yes. VS Code supports extra discovery paths for instructions, prompts, agents, skills, and hooks through settings, but the default .github structure is the easiest starting point.",
        },
      ],
      tags: [".github", "directory-structure", "layering", "vs-code-settings"],
    },
    {
      slug: "custom-instructions",
      title: "Custom Instructions",
      type: "video-code",
      duration: "8 mins",
      videoId: "placeholder-custom-instructions",
      description:
        "Create .instructions.md files with YAML frontmatter, glob scoping, and semantic descriptions that activate automatically.",
      objectives: [
        "Create effective .instructions.md files with proper YAML frontmatter",
        "Use glob patterns to scope instructions to specific file types and directories",
        "Explain the dual discovery mechanism: glob matching and semantic description matching",
        "Organize instructions using the layering pattern for multi-framework projects",
      ],
      infoBoxes: [
        {
          title: "Two Ways Instructions Activate",
          content:
            "Instructions load either because the current file matches applyTo or because the description semantically matches the current task. Good descriptions capture intent, not just file types.",
        },
      ],
      noteBoxes: [
        {
          title: "Keep Instructions Focused",
          content:
            "Put non-obvious conventions in instructions. Do not duplicate rules already enforced by ESLint, Prettier, type checkers, or test runners.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["instructions.md"] --> B{"applyTo glob\\nmatches open file?"}\n    A --> C{"description\\nmatches current task?"}\n    B --> |"Yes"| D["Included in context"]\n    C --> |"Yes"| D\n    B --> |"No"| E["Not included"]\n    C --> |"No"| E',
          caption:
            "Instruction files load through glob matching or semantic matching.",
          alt: "Instructions can enter context by file match or by description match.",
        },
      ],
      codePreview: {
        title: "Instruction File Examples",
        description:
          "Repository-wide and path-scoped instruction files that layer together.",
        segments: [
          {
            code: lines(
              "---",
              'applyTo: "**"',
              "---",
              "",
              "# Repository-Wide Rules",
              "",
              "- Use TypeScript with strict mode for frontend code.",
              "- Use Python 3.11+ with type hints for backend code.",
              "- Write tests for every public function.",
              "- Use conventional commits.",
              "- Never hardcode secrets.",
            ),
            language: "markdown",
            filename: ".github/copilot-instructions.md",
            explanation:
              "Repository-wide defaults that apply to every Copilot interaction.",
          },
          {
            code: lines(
              "---",
              'name: "React Component Standards"',
              'description: "Rules for building React components with TypeScript and hooks"',
              'applyTo: "src/components/**/*.tsx"',
              "---",
              "",
              "# React Component Rules",
              "",
              "- Use functional components with arrow function syntax.",
              "- Define props as a named interface.",
              "- Export components as named exports.",
              "- Co-locate tests next to the component.",
            ),
            language: "markdown",
            filename: ".github/instructions/react.instructions.md",
            explanation:
              "A path-scoped instruction file layered on top of repository-wide rules.",
          },
          {
            code: lines(
              "---",
              'name: "FastAPI Backend Standards"',
              'description: "Rules for Python FastAPI endpoints, Pydantic models, and async patterns"',
              'applyTo: "src/api/**/*.py"',
              "---",
              "",
              "# FastAPI Rules",
              "",
              "- Use async def for route handlers.",
              "- Define request and response models with Pydantic BaseModel.",
              "- Use dependency injection for database sessions.",
              "- Return explicit HTTP status codes.",
            ),
            language: "markdown",
            filename: ".github/instructions/fastapi.instructions.md",
            explanation:
              "Backend-specific rules that only activate for matching Python files.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Create Your First Instruction Files",
          steps: [
            {
              title: "Create the .github directory",
              description:
                "Add .github and .github/instructions at the repository root.",
            },
            {
              title: "Add copilot-instructions.md",
              description:
                "Start with 5 to 10 repository-wide rules covering naming, language choices, testing expectations, and safety constraints.",
            },
            {
              title: "Add a path-scoped instruction file",
              description:
                "Create a framework-specific .instructions.md file with name, description, and applyTo frontmatter.",
            },
            {
              title: "Test the layering",
              description:
                "Open a matching file and verify both repository-wide and path-specific rules apply together.",
            },
          ],
        },
      ],
      qa: [
        {
          question:
            "What is the difference between repository-wide and path-scoped instructions?",
          answer:
            "Repository-wide rules apply everywhere. Path-scoped instruction files only load when the open file or current task matches their scope and description.",
        },
        {
          question: "Why does the description field matter?",
          answer:
            "Descriptions let VS Code load instructions semantically even when applyTo does not match the open file. They should describe when the rules are useful.",
        },
        {
          question: "Should I repeat linter rules in instructions?",
          answer:
            "No. Keep instructions focused on architecture, conventions, workflows, and reasoning that static tooling cannot already enforce.",
        },
        {
          question:
            "How should I organize instructions in a multi-framework repo?",
          answer:
            "Keep a small repository-wide base file, then add focused path-specific instruction files for each framework or domain area.",
        },
      ],
      tags: ["instructions", "glob-patterns", "yaml", "copilot-instructions"],
    },
    {
      slug: "prompt-files",
      title: "Prompt Files",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-prompt-files",
      description:
        "Create reusable .prompt.md files with dynamic variables that become slash commands in Copilot Chat.",
      objectives: [
        "Create reusable prompt files with proper YAML frontmatter and variables",
        "Use input variables, selection variables, and file references to make prompts dynamic",
        "Explain how prompt files relate to custom agents and instructions",
        "Apply tool list priority rules when prompts reference agents",
      ],
      infoBoxes: [
        {
          title: "Three Variable Types in Prompt Files",
          content:
            "Prompt files can ask for user input, capture the current selection, and reference other files through markdown links. Combining those three patterns makes prompts reusable across many tasks.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TD\n    A["Prompt File\\n.prompt.md"] --> |"agent: property"| B["Custom Agent\\n.agent.md"]\n    A --> |"Markdown link"| C["Instruction File\\n.instructions.md"]\n    B --> |"tools property"| D["Tool Access"]\n    A --> |"Direct tools"| D\n    style A fill:#4a9eff,color:#fff',
          caption:
            "Prompts bridge agents, instructions, and tool access into a single task workflow.",
          alt: "A prompt file references agents, instruction files, and tools.",
        },
      ],
      codePreview: {
        title: "Prompt File Examples",
        description: "Reusable slash commands for scaffolding and test fixing.",
        segments: [
          {
            code: lines(
              "---",
              'name: "scaffold-component"',
              'description: "Scaffold a new React component with tests and stories"',
              'agent: "agent"',
              "tools:",
              "  - create_file",
              "  - replace_string_in_file",
              "---",
              "",
              "Create a new React component called `${input:componentName}` in `src/components/`.",
              "",
              "Follow the rules in [React Standards](../instructions/react.instructions.md).",
              "",
              "Generate:",
              "1. `${input:componentName}.tsx`",
              "2. `${input:componentName}.test.tsx`",
              "3. `${input:componentName}.stories.tsx`",
            ),
            language: "markdown",
            filename: ".github/prompts/scaffold-component.prompt.md",
            explanation:
              "A scaffolding prompt that asks for a component name and injects existing instruction files.",
          },
          {
            code: lines(
              "---",
              'name: "fix-tests"',
              'description: "Run failing tests and fix them"',
              'agent: "agent"',
              "tools:",
              "  - run_in_terminal",
              "  - read_file",
              "  - replace_string_in_file",
              "---",
              "",
              "Run the test suite:",
              "```",
              "npm test -- --reporter=verbose 2>&1 | head -100",
              "```",
              "",
              "For each failing test:",
              "1. Read the test and implementation files",
              "2. Decide whether the test or implementation is wrong",
              "3. Fix the correct file",
              "4. Re-run the failing test",
            ),
            language: "markdown",
            filename: ".github/prompts/fix-tests.prompt.md",
            explanation:
              "A test-fixing prompt with tightly scoped tool access.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Create Your First Prompt Files",
          steps: [
            {
              title: "Create the prompts directory",
              description: "Add .github/prompts to your repository.",
            },
            {
              title: "Add a scaffolding prompt",
              description:
                "Author a .prompt.md file with name, description, optional agent, and tools in frontmatter.",
            },
            {
              title: "Reference your instructions",
              description:
                "Use markdown links to inject relevant instruction files and docs into the prompt context.",
            },
            {
              title: "Invoke the slash command",
              description:
                "Run the prompt from Copilot Chat using slash command syntax and verify that inputs and file references work as expected.",
            },
          ],
        },
      ],
      qa: [
        {
          question: "How do I invoke a prompt file?",
          answer:
            "Type a slash followed by the prompt name in Copilot Chat. VS Code will show matching prompt commands in the picker.",
        },
        {
          question:
            "What is the difference between a prompt and an instruction?",
          answer:
            "Instructions are background rules that load automatically. Prompts are explicit, user-invoked tasks.",
        },
        {
          question: "Can prompt files reference instructions?",
          answer:
            "Yes. Markdown links let a prompt bring in instructions, docs, or other reusable text files as supporting context.",
        },
        {
          question: "Which tool list wins when a prompt uses an agent?",
          answer:
            "The prompt's tool list is the narrowest scope and takes priority over the agent's broader tool access.",
        },
      ],
      tags: [
        "prompt-files",
        "slash-commands",
        "variables",
        "reusable-workflows",
      ],
    },
    {
      slug: "custom-agents",
      title: "Custom Agents",
      type: "video-code",
      duration: "10 mins",
      videoId: "placeholder-custom-agents",
      description:
        "Build .agent.md personas with tool restrictions, model selection, and handoff workflows for specialized AI roles.",
      objectives: [
        "Define custom agents with YAML frontmatter specifying tools, model, and visibility",
        "Design agent handoff workflows for multi-step processes",
        "Control subagent access with the agents property",
        "Explain when to use agents versus prompt files versus instructions",
      ],
      infoBoxes: [
        {
          title: "Agents vs Prompts vs Instructions",
          content:
            "Instructions define how work should be done, prompts define what one task should do, and agents define who is doing the work across an entire session.",
        },
      ],
      noteBoxes: [
        {
          title: "AGENTS.md vs copilot-instructions.md",
          content:
            "Use AGENTS.md for portable, cross-tool base context. Use copilot-instructions.md and path-scoped instruction files for Copilot-specific layering and applyTo behavior.",
        },
      ],
      diagrams: [
        {
          chart:
            'sequenceDiagram\n    participant U as User\n    participant P as Planning Agent\n    participant I as Implementation Agent\n    participant R as Review Agent\n    U->>P: "Plan the auth module"\n    P-->>U: Architecture plan\n    U->>I: "Implement the plan"\n    I-->>U: Code changes\n    U->>R: "Review the implementation"\n    R-->>U: Security and style feedback',
          caption:
            "A common handoff pattern moves from planning to implementation to review.",
          alt: "User switches between planning, implementation, and review agents for a multi-step workflow.",
        },
      ],
      codePreview: {
        title: "Custom Agent Files",
        description:
          "Three agent roles with progressively broader capabilities.",
        segments: [
          {
            code: lines(
              "---",
              'name: "planning"',
              'description: "Read-only planning and research agent"',
              'iconDescription: "A magnifying glass over a blueprint"',
              "tools:",
              "  - semantic_search",
              "  - read_file",
              "  - grep_search",
              "  - file_search",
              "  - fetch_webpage",
              'model: "claude-sonnet-4"',
              "---",
              "",
              "# Planning Agent",
              "",
              "- Explore the codebase before proposing changes.",
              "- Produce a structured plan.",
              "- Never edit files.",
            ),
            language: "markdown",
            filename: ".github/agents/planning.agent.md",
            explanation:
              "A read-only planning agent that can research but cannot write.",
          },
          {
            code: lines(
              "---",
              'name: "implementation"',
              'description: "Full-access implementation agent for coding tasks"',
              "agents:",
              "  - planning",
              "  - review",
              "---",
              "",
              "# Implementation Agent",
              "",
              "- Follow repository rules.",
              "- Write tests for every public function.",
              "- Delegate research to @planning when blocked.",
            ),
            language: "markdown",
            filename: ".github/agents/implementation.agent.md",
            explanation:
              "A builder agent with full access and permission to invoke narrower subagents.",
          },
          {
            code: lines(
              "---",
              'name: "review"',
              'description: "Security-focused code review agent"',
              "tools:",
              "  - semantic_search",
              "  - read_file",
              "  - grep_search",
              "  - file_search",
              "  - get_errors",
              'model: "o4-mini"',
              "---",
              "",
              "# Review Agent",
              "",
              "- Check OWASP risks.",
              "- Verify input validation.",
              "- Look for secrets, auth issues, and error leaks.",
            ),
            language: "markdown",
            filename: ".github/agents/review.agent.md",
            explanation:
              "A review agent with read-only access plus diagnostics.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Create Your First Custom Agents",
          steps: [
            {
              title: "Create the agents directory",
              description: "Add .github/agents to the repository.",
            },
            {
              title: "Add a planning agent",
              description:
                "Start with a read-only research agent that can search, read, and summarize.",
            },
            {
              title: "Add an implementation agent",
              description:
                "Create a build agent with write access and an agents list that explicitly allows subagent delegation.",
            },
            {
              title: "Test agent switching",
              description:
                "Verify the planning agent cannot edit and the implementation agent can.",
            },
          ],
        },
      ],
      qa: [
        {
          question: "What is the difference between an agent and a prompt?",
          answer:
            "An agent is a persistent role for the duration of a session. A prompt is a one-shot command that runs a specific task.",
        },
        {
          question: "How do I restrict tool access for an agent?",
          answer:
            "Add a tools list in the YAML frontmatter. If tools are omitted entirely, the agent gets full access.",
        },
        {
          question: "What does the agents property do?",
          answer:
            "It defines which other custom agents this agent may invoke as subagents during a task.",
        },
        {
          question: "Where does AGENTS.md fit?",
          answer:
            "AGENTS.md holds portable, cross-tool context. It complements Copilot-specific instruction files instead of replacing them.",
        },
      ],
      tags: ["agents", "personas", "tool-restrictions", "handoff", "AGENTS.md"],
    },
    {
      slug: "agent-skills",
      title: "Agent Skills",
      type: "video-code",
      duration: "8 mins",
      videoId: "placeholder-agent-skills",
      description:
        "Package domain knowledge into portable SKILL.md capability folders that work across AI tools through the Agent Skills standard.",
      objectives: [
        "Create SKILL.md files with proper frontmatter for name, description, and invocation control",
        "Explain the three-level progressive disclosure model: discovery, instructions, resources",
        "Control skill visibility using user-invocable and disable-model-invocation flags",
        "Distinguish agent skills from custom instructions and explain when to use each",
      ],
      infoBoxes: [
        {
          title: "One Standard, Many Tools",
          content:
            "Agent Skills are the most portable customization format in this course. A well-designed skill can work in Copilot and any other tool that adopts the same standard.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TD\n    A["Level 1: Discovery\\nName + description"] --> B["Level 2: Instructions\\nSKILL.md body"]\n    B --> C["Level 3: Resources\\nTemplates, examples, docs"]\n    style A fill:#e8f4ff,color:#333\n    style B fill:#b3d9ff,color:#333\n    style C fill:#4a9eff,color:#fff',
          caption:
            "Skills use progressive disclosure so only the needed context loads at each stage.",
          alt: "A three-level model shows discovery, instructions, and resources loading progressively.",
        },
      ],
      codePreview: {
        title: "Skill Package Structure",
        description:
          "A folder-based skill with frontmatter, templates, and references.",
        segments: [
          {
            code: lines(
              ".github/skills/",
              "  test-driven-development/",
              "    SKILL.md",
              "    templates/",
              "      test-template.ts",
              "    examples/",
              "      calculator.test.ts",
              "    docs/",
              "      testing-strategy.md",
            ),
            language: "text",
            filename: "skill-folder-structure",
            explanation:
              "Each skill is a folder with SKILL.md as the entry point and supporting resources loaded on demand.",
          },
          {
            code: lines(
              "---",
              'name: "test-driven-development"',
              'description: "TDD workflow: write failing test first, implement to pass, refactor. Use when implementing any feature or bugfix, before writing implementation code."',
              "user-invocable: true",
              "disable-model-invocation: false",
              "---",
              "",
              "# Test-Driven Development Skill",
              "",
              "1. Write a failing test",
              "2. Run the test and confirm it fails",
              "3. Write the minimum code to pass",
              "4. Re-run the test",
              "5. Refactor",
            ),
            language: "markdown",
            filename: ".github/skills/test-driven-development/SKILL.md",
            explanation:
              "Frontmatter controls invocation while the body defines the workflow and links to resource files.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Create Your First Agent Skill",
          steps: [
            {
              title: "Create the skills directory",
              description: "Add .github/skills to the repository.",
            },
            {
              title: "Create a skill folder",
              description:
                "Use one folder per skill with a SKILL.md entry point and any supporting resources nested below it.",
            },
            {
              title: "Add supporting resources",
              description:
                "Link templates, examples, and docs from SKILL.md so they load only when needed.",
            },
            {
              title: "Test the skill",
              description:
                "Mention the workflow in chat and confirm that the skill activates semantically.",
            },
          ],
        },
      ],
      qa: [
        {
          question: "How are skills different from instructions?",
          answer:
            "Instructions hold always-on rules. Skills hold task-specific workflows and supporting resources that load on demand.",
        },
        {
          question: "What does progressive disclosure mean for skills?",
          answer:
            "The model sees the skill metadata first, then the SKILL.md body, then any linked resources only if it actually needs them.",
        },
        {
          question: "Do skills work outside VS Code?",
          answer:
            "Yes, that is the point of using a standard package format. Skills are designed for portability across compatible tools.",
        },
        {
          question: "What do the invocation flags do?",
          answer:
            "They control whether users can invoke the skill directly and whether the model may activate it automatically.",
        },
      ],
      tags: [
        "skills",
        "SKILL.md",
        "agentskills.io",
        "progressive-disclosure",
        "portability",
      ],
    },
    {
      slug: "mcp-servers",
      title: "MCP Servers",
      type: "video-code",
      duration: "8 mins",
      videoId: "placeholder-mcp-servers",
      description:
        "Configure MCP servers in .vscode/mcp.json to extend Copilot with external tools, resources, prompts, and interactive apps.",
      objectives: [
        "Configure MCP servers in .vscode/mcp.json for workspace and user-level use",
        "Explain MCP capabilities beyond tools: resources, prompts, and MCP apps",
        "Apply security best practices: trust model, sandboxing, and input variable use",
        "Reference MCP tools from custom agents and prompt files",
      ],
      infoBoxes: [
        {
          title: "MCP Security: Trust but Verify",
          content:
            "MCP servers can do real work in your environment. Review server code before approving it, and never commit secrets directly into mcp.json.",
        },
      ],
      noteBoxes: [
        {
          title: "Secrets in mcp.json",
          content:
            "Use input variables for tokens and API keys so VS Code prompts at runtime and stores the values securely outside version control.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    MCP["MCP Server"] --> T["Tools\\nCallable functions"]\n    MCP --> R["Resources\\nRead-only data"]\n    MCP --> P["Prompts\\nTemplated commands"]\n    MCP --> A["MCP Apps\\nInteractive UI"]\n    style T fill:#4a9eff,color:#fff\n    style R fill:#5bb974,color:#fff\n    style P fill:#f5a623,color:#fff\n    style A fill:#9b59b6,color:#fff',
          caption:
            "MCP servers can expose tools, resources, prompts, and interactive apps.",
          alt: "One MCP server fans out to four capability categories.",
        },
      ],
      codePreview: {
        title: "MCP Configuration Examples",
        description:
          "A repository-level mcp.json file and an agent that consumes MCP tools.",
        segments: [
          {
            code: lines(
              "{",
              '  "servers": {',
              '    "playwright": {',
              '      "type": "stdio",',
              '      "command": "npx",',
              '      "args": ["-y", "@playwright/mcp@latest"],',
              '      "description": "Browser automation for testing and web scraping"',
              "    },",
              '    "github": {',
              '      "type": "stdio",',
              '      "command": "npx",',
              '      "args": ["-y", "@modelcontextprotocol/server-github"],',
              '      "env": { "GITHUB_TOKEN": "${input:githubToken}" },',
              '      "description": "GitHub API access"',
              "    }",
              "  }",
              "}",
            ),
            language: "json",
            filename: ".vscode/mcp.json",
            explanation:
              "Workspace-level MCP server configuration using secure runtime input variables for secrets.",
          },
          {
            code: lines(
              "---",
              'name: "web-tester"',
              'description: "Test web applications using Playwright browser automation"',
              "tools:",
              "  - mcp_playwright_browser_navigate",
              "  - mcp_playwright_browser_snapshot",
              "  - mcp_playwright_browser_click",
              "  - read_file",
              "  - replace_string_in_file",
              "---",
              "",
              "# Web Testing Agent",
              "",
              "Follow the test plan in [testing docs](../../docs/testing-strategy.md).",
            ),
            language: "markdown",
            filename: ".github/agents/web-tester.agent.md",
            explanation:
              "An agent that combines MCP browser tools with a small set of native file tools.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Connect Your First MCP Server",
          steps: [
            {
              title: "Create .vscode/mcp.json",
              description: "Add a servers object at the workspace level.",
            },
            {
              title: "Add a Playwright server",
              description:
                "Register a stdio-based server launched through npx so the tool starts on demand.",
            },
            {
              title: "Approve the server",
              description:
                "Trigger a tool call once so VS Code can ask for user approval and establish trust.",
            },
            {
              title: "Reference the tools from an agent",
              description:
                "Grant explicit MCP tool names in the agent's tools list instead of broad access.",
            },
          ],
        },
      ],
      qa: [
        {
          question: "Where does MCP configuration live?",
          answer:
            "Repository-level MCP configuration goes in .vscode/mcp.json so the team can share a consistent setup.",
        },
        {
          question: "What can MCP servers expose besides tools?",
          answer:
            "They can also expose read-only resources, prompts, and interactive MCP apps.",
        },
        {
          question: "How should I handle secrets?",
          answer:
            "Use input variables or secure environment references. Do not hardcode credentials inside the committed configuration file.",
        },
        {
          question: "Can an agent be limited to specific MCP tools?",
          answer:
            "Yes. Add only the exact MCP tool names that the agent should be allowed to call.",
        },
      ],
      tags: ["mcp", "mcp-servers", "tools", "mcp.json", "security"],
    },
    {
      slug: "hooks",
      title: "Hooks",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-hooks",
      description:
        "Configure lifecycle hooks that execute deterministic code before and after AI actions, creating guardrails the model cannot bypass.",
      objectives: [
        "Configure hook JSON files for lifecycle events in .github/hooks",
        "Write PreToolUse hooks that enforce security policies by blocking tool calls",
        "Use PostToolUse hooks to automate formatting and validation",
        "Explain hook input and output schemas, exit codes, and permission decisions",
      ],
      infoBoxes: [
        {
          title: "Hooks vs Instructions",
          content:
            "Instructions are probabilistic guidance. Hooks are deterministic enforcement. Use instructions to steer behavior and hooks to block or modify unsafe actions.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["SessionStart"] --> B["UserPromptSubmit"]\n    B --> C["PreToolUse"]\n    C --> D["Tool Execution"]\n    D --> E["PostToolUse"]\n    E --> F["PreCompact"]\n    F --> G["SubagentStart/Stop"]\n    G --> H["Stop"]\n    style C fill:#ff6b6b,color:#fff\n    style E fill:#5bb974,color:#fff',
          caption:
            "Lifecycle hooks let you enforce behavior before a tool call and automate cleanup after it.",
          alt: "A session lifecycle highlights PreToolUse and PostToolUse as the main enforcement points.",
        },
      ],
      codePreview: {
        title: "Lifecycle Hook Files",
        description:
          "A hook config plus a Python guard script that blocks edits to protected paths.",
        segments: [
          {
            code: lines(
              "{",
              '  "hooks": {',
              '    "pre-tool-use": [',
              "      {",
              '        "event": "PreToolUse",',
              '        "command": "python .github/hooks/block-protected-files.py",',
              '        "description": "Block edits to protected source files"',
              "      }",
              "    ],",
              '    "post-tool-use": [',
              "      {",
              '        "event": "PostToolUse",',
              '        "command": "npx prettier --write ${filePath}",',
              '        "description": "Auto-format files after AI edits"',
              "      }",
              "    ]",
              "  }",
              "}",
            ),
            language: "json",
            filename: ".github/hooks/lifecycle.json",
            explanation:
              "Hook metadata that runs code before and after file-editing operations.",
          },
          {
            code: lines(
              "#!/usr/bin/env python3",
              '"""PreToolUse hook: block edits to protected source files."""',
              "import json",
              "import sys",
              "",
              "PROTECTED_PATHS = [",
              '    "src/core/",',
              '    "src/auth/",',
              '    ".env",',
              '    "package-lock.json",',
              "]",
              "",
              "def main() -> None:",
              "    hook_input = json.loads(sys.stdin.read())",
              '    tool_name = hook_input.get("toolName", "")',
              '    file_path = hook_input.get("parameters", {}).get("filePath", "")',
              "",
              '    if tool_name not in ("create_file", "replace_string_in_file"):',
              "        sys.exit(0)",
              "",
              "    for protected in PROTECTED_PATHS:",
              "        if file_path.startswith(protected):",
              '            print(json.dumps({"decision": "deny", "message": f"Blocked: {file_path} is protected"}))',
              "            sys.exit(1)",
              "",
              "    sys.exit(0)",
              "",
              'if __name__ == "__main__":',
              "    main()",
            ),
            language: "python",
            filename: ".github/hooks/block-protected-files.py",
            explanation:
              "A deterministic guard that denies edits to protected paths before the tool executes.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Create Your First Lifecycle Hooks",
          steps: [
            {
              title: "Create the hooks directory",
              description: "Add .github/hooks to the repository.",
            },
            {
              title: "Add a hook configuration",
              description:
                "Define which event triggers each command and give the hook a short description.",
            },
            {
              title: "Write a PreToolUse guard",
              description:
                "Read the incoming tool call JSON from stdin, decide whether to allow it, and return the correct exit code.",
            },
            {
              title: "Test the hook",
              description:
                "Try editing a protected file and confirm that the runtime blocks the action.",
            },
          ],
        },
      ],
      qa: [
        {
          question:
            "What is the key safety difference between hooks and instructions?",
          answer:
            "Instructions ask the model to behave a certain way. Hooks run code that can allow, deny, or modify tool calls regardless of model intent.",
        },
        {
          question: "What do the exit codes mean?",
          answer:
            "Use exit code 0 to allow, 1 to deny, and 2 when the hook rewrites tool call parameters before execution.",
        },
        {
          question: "Which events are most useful first?",
          answer:
            "PreToolUse for safety checks and PostToolUse for formatting, linting, or validation are the highest-leverage starting points.",
        },
        {
          question: "Can hooks inspect MCP tools too?",
          answer:
            "Yes. Hook events trigger around tool usage generally, so they can guard MCP-backed operations as well.",
        },
      ],
      tags: ["hooks", "lifecycle", "PreToolUse", "PostToolUse", "guardrails"],
    },
    {
      slug: "subagents-orchestration",
      title: "Subagents and Orchestration",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-subagents-orchestration",
      description:
        "Understand how subagents work in isolated context windows and design coordinator-worker orchestration patterns for complex tasks.",
      objectives: [
        "Explain how subagent execution works: isolated context, synchronous return, and parallel spawning",
        "Design coordinator-worker orchestration patterns for complex tasks",
        "Control subagent access using the agents property and visibility settings",
        "Apply multi-perspective review and TDD patterns with custom agents",
      ],
      infoBoxes: [
        {
          title: "Why Context Isolation Matters",
          content:
            "Subagents can research or explore dead ends without polluting the coordinator's main context window. Only their summaries flow back.",
        },
      ],
      diagrams: [
        {
          chart:
            'sequenceDiagram\n    participant U as User\n    participant M as Main Agent\n    participant S1 as Subagent A\n    participant S2 as Subagent B\n    U->>M: "Build the auth module"\n    M->>S1: "Research auth patterns"\n    M->>S2: "Analyze API structure"\n    Note over S1,S2: Run in parallel, isolated contexts\n    S1-->>M: Summary of auth patterns\n    S2-->>M: Summary of API structure\n    M->>U: Combined implementation plan',
          caption:
            "Subagents execute in parallel and return only summarized results to the coordinator.",
          alt: "A main agent spawns two parallel subagents that return summaries.",
        },
        {
          chart:
            'graph TD\n    C["Coordinator Agent"] --> |"Research"| R["Research Subagent\\n(read-only)"]\n    C --> |"Implement"| I["Implementation Subagent\\n(full access)"]\n    C --> |"Test"| T["Testing Subagent\\n(terminal + read)"]\n    C --> |"Review"| V["Review Subagent\\n(read-only)"]\n    R --> |"Summary"| C\n    I --> |"Summary"| C\n    T --> |"Summary"| C\n    V --> |"Summary"| C\n    style C fill:#4a9eff,color:#fff',
          caption:
            "Coordinator-worker is the canonical orchestration pattern for complex coding tasks.",
          alt: "A coordinator delegates research, implementation, testing, and review to specialized subagents.",
        },
      ],
      poll: {
        question: "Have you used multi-agent patterns before?",
        options: [
          { id: "never", text: "Never, this is my first exposure" },
          { id: "heard", text: "I've heard of it but never built one" },
          { id: "vscode", text: "Yes, with VS Code Copilot" },
          {
            id: "other-tools",
            text: "Yes, with other tools such as Claude, CrewAI, or similar",
          },
        ],
      },
      qa: [
        {
          question: "What does context isolation buy you?",
          answer:
            "It keeps the main agent's context clean while allowing subagents to do deep research or experimentation in parallel.",
        },
        {
          question: "Can subagents run in parallel?",
          answer:
            "Yes. A coordinator can spawn multiple subagents at once and then merge their summaries.",
        },
        {
          question: "What is coordinator-worker?",
          answer:
            "It is a pattern where one coordinating agent decomposes the task and delegates phases to specialized subagents with appropriate permissions.",
        },
        {
          question: "How do I control subagent access?",
          answer:
            "Use the agents property in an agent's frontmatter to explicitly list which custom agents it may invoke.",
        },
      ],
      tags: ["subagents", "orchestration", "multi-agent", "coordinator-worker"],
    },
    {
      slug: "memory-and-plugins",
      title: "Memory and Plugins",
      type: "video",
      duration: "6 mins",
      videoId: "placeholder-memory-and-plugins",
      description:
        "Explore Copilot's automated memory system and agent plugins, two features that extend context without manual configuration files.",
      objectives: [
        "Explain how Copilot's agentic memory works: citations, validation, and 28-day TTL",
        "Describe the relationship between memory and custom instructions",
        "Configure agent plugins from the marketplace and install them",
        "Evaluate when to use plugins versus local customization files",
      ],
      infoBoxes: [
        {
          title: "Agentic Memory",
          content:
            "Memory captures observed repository patterns with citations, validates them against the current codebase before reuse, and expires automatically if they go stale.",
        },
      ],
      noteBoxes: [
        {
          title: "Memory vs Instructions",
          content:
            "Instructions are proactive and explicit. Memory is reactive and learned from observed patterns. Use each for what it does best.",
        },
        {
          title: "Tell Agents to Remember",
          content:
            "Custom agents can be instructed to store useful project patterns in memory deliberately instead of waiting for passive observation alone.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Copilot observes\\na pattern"] --> B["Stores memory\\nwith citations"]\n    B --> C{"Validate:\\ncited code exists?"}\n    C --> |"Yes"| D["Apply memory\\nreset TTL"]\n    C --> |"No"| E["Discard memory"]\n    D --> F{"Used in 28 days?"}\n    F --> |"Yes"| D\n    F --> |"No"| G["Auto-delete"]',
          caption: "Memory only survives if it stays valid and gets reused.",
          alt: "Observed patterns become validated memories or are discarded if citations no longer match.",
        },
      ],
      qa: [
        {
          question: "What is agentic memory?",
          answer:
            "It is Copilot's ability to learn recurring repository patterns, store them with citations, validate them before use, and discard them when they become stale.",
        },
        {
          question: "How is memory validated?",
          answer:
            "Copilot checks that the cited code still exists and still represents the pattern before using the memory again.",
        },
        {
          question: "When should I prefer instructions over memory?",
          answer:
            "Use instructions for non-negotiable rules such as security, architecture, or explicit team conventions. Let memory capture patterns that are safe to infer from repository history.",
        },
        {
          question: "Are plugins portable across surfaces?",
          answer:
            "No. Plugins are much more surface-specific than local configuration files, so prefer .github customization when portability matters.",
        },
      ],
      tags: ["memory", "plugins", "agentic-memory", "marketplace", "automated"],
    },
    {
      slug: "docs-folder",
      title: "/docs/ Folder",
      type: "video-code",
      duration: "7 mins",
      videoId: "placeholder-docs-folder",
      description:
        "Build a /docs folder optimized for AI consumption, including ADRs and project knowledge that complements .github behavior rules.",
      objectives: [
        "Structure a /docs folder that AI can consume effectively",
        "Write Architecture Decision Records that prevent AI from suggesting rejected patterns",
        "Reference documentation from instructions, prompts, and agent definitions",
        "Explain the synergy between .github behavior rules and /docs knowledge",
      ],
      infoBoxes: [
        {
          title: ".github for Behavior, /docs for Knowledge",
          content:
            ".github tells the AI how to behave. /docs tells the AI what it needs to know about architecture, rejected decisions, and operational context.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    subgraph "Behavior (.github/)"\n        A["Instructions\\nHow to write code"]\n        B["Agents\\nWho does what"]\n        C["Hooks\\nWhat is enforced"]\n    end\n    subgraph "Knowledge (/docs/)"\n        D["architecture.md\\nSystem design"]\n        E["adr/\\nDecision records"]\n        F["api/\\nEndpoint specs"]\n    end\n    A --> |"References"| D\n    B --> |"References"| E\n    style A fill:#4a9eff,color:#fff\n    style D fill:#5bb974,color:#fff',
          caption:
            "Behavior files point to knowledge files so Copilot gets both the how and the why.",
          alt: "A behavior layer in .github references a knowledge layer in /docs.",
        },
      ],
      codePreview: {
        title: "Docs Folder Patterns",
        description:
          "An AI-friendly documentation structure, a sample ADR, and an instruction file that links to docs.",
        segments: [
          {
            code: lines(
              "# docs/",
              "  README.md",
              "  architecture.md",
              "  adr/",
              "    001-database-choice.md",
              "    002-auth-strategy.md",
              "  api/",
              "    endpoints.md",
              "    error-codes.md",
              "  guides/",
              "    deployment.md",
              "  standards/",
              "    naming-conventions.md",
              "    error-handling.md",
            ),
            language: "text",
            filename: "docs-folder-structure",
            explanation:
              "A documentation layout that keeps architecture, operational guides, ADRs, and standards separate but easy to link.",
          },
          {
            code: lines(
              "# ADR-001: Database Choice",
              "",
              "## Status",
              "Accepted",
              "",
              "## Context",
              "We need a primary database for the application.",
              "",
              "## Decision",
              "PostgreSQL with TypeORM.",
              "",
              "## Consequences",
              "- All models use TypeORM decorators.",
              "- Migrations are managed via TypeORM CLI.",
              "",
              "## Rejected Alternatives",
              "- MongoDB: not needed for this workload.",
              "- SQLite: not suitable for concurrent production use.",
            ),
            language: "markdown",
            filename: "docs/adr/001-database-choice.md",
            explanation:
              "ADRs are especially valuable because they teach the AI what was rejected as well as what was chosen.",
          },
          {
            code: lines(
              "---",
              'name: "Backend Standards"',
              'description: "Rules for Python FastAPI backend code"',
              'applyTo: "src/api/**/*.py"',
              "---",
              "",
              "# Backend Rules",
              "",
              "- Use async def for all route handlers.",
              "- Follow architecture decisions in [ADR docs](../../docs/adr/).",
              "- See [API endpoint spec](../../docs/api/endpoints.md).",
              "- See [error handling guide](../../docs/standards/error-handling.md).",
            ),
            language: "markdown",
            filename: ".github/instructions/backend.instructions.md",
            explanation:
              "Instruction files can link directly into docs so the model follows rules and understands architectural intent.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Build Your /docs Folder for AI",
          steps: [
            {
              title: "Create the docs structure",
              description:
                "Start with README, architecture, adr, api, guides, and standards sections.",
            },
            {
              title: "Write README as an index",
              description:
                "Make docs/README.md the navigational entry point for both humans and AI tools.",
            },
            {
              title: "Add your first ADR",
              description:
                "Capture one important architecture decision with accepted and rejected alternatives.",
            },
            {
              title: "Reference docs from instructions",
              description:
                "Link relevant docs from .github files so behavior guidance can pull in supporting knowledge.",
            },
          ],
        },
      ],
      qa: [
        {
          question: "Why do I need /docs if I already have .github?",
          answer:
            ".github covers behavior. /docs covers architecture, decisions, and context that are not obvious from the code alone.",
        },
        {
          question: "Why are ADRs especially useful for AI?",
          answer:
            "Because they record both the chosen approach and rejected alternatives, which prevents the model from suggesting patterns the team has already ruled out.",
        },
        {
          question: "How do I connect docs to Copilot instructions?",
          answer:
            "Use markdown links from instructions, prompts, or agents so the model can read deeper context only when needed.",
        },
        {
          question: "Should everything live in docs instead of .github?",
          answer:
            "No. Keep behavior rules in .github and knowledge artifacts in docs. They solve different problems and work best together.",
        },
      ],
      tags: [
        "docs",
        "documentation",
        "ADR",
        "architecture-decision-records",
        "knowledge-context",
      ],
    },
    {
      slug: "context-layering",
      title: "Context Layering",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-context-layering",
      description:
        "Master the three-axis context model and learn to design context architectures that compose automatically.",
      objectives: [
        "Apply the three-axis context model to organize customization files",
        "Design a context pyramid with appropriate rules at each layer",
        "Use progressive disclosure to manage context budget efficiently",
        "Explain how horizontal, vertical, and diagonal axes compose together",
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph "Axis 1: Horizontal"\n        A["Agents"]\n        B["Skills"]\n        C["MCP"]\n    end\n    subgraph "Axis 2: Vertical"\n        D["Org instructions"]\n        E["Repo instructions"]\n        F["Path-specific instructions"]\n        G["Personal instructions"]\n    end\n    subgraph "Axis 3: Diagonal"\n        H["Prompts"]\n        I["Bridge agents + skills + instructions"]\n    end',
          caption:
            "The three-axis model explains how different context sources activate and combine.",
          alt: "Horizontal, vertical, and diagonal context axes shown as separate but complementary groups.",
        },
        {
          chart:
            'graph TD\n    A["Repository\\ncopilot-instructions.md"] --> B["Path-Specific\\ninstructions/*.instructions.md"]\n    B --> C["Task-Specific\\nprompts + agents"]\n    C --> D["Automated\\nmemory + plugins"]\n    style A fill:#e8f4ff,color:#333\n    style D fill:#4a9eff,color:#fff',
          caption:
            "The context pyramid moves from broad repository defaults to narrow task-specific overrides.",
          alt: "Repository rules feed into path-specific rules and then task-specific context layers.",
        },
      ],
      qa: [
        {
          question: "What are the three axes?",
          answer:
            "Horizontal includes agents, skills, and MCP. Vertical includes layered instructions. Diagonal includes task-specific prompts that bridge the other two.",
        },
        {
          question: "What is the context pyramid?",
          answer:
            "It is the idea that broad repository rules sit at the base, narrower path-specific rules sit above them, and task-specific prompts or agent workflows sit at the top.",
        },
        {
          question: "What is the flat dump anti-pattern?",
          answer:
            "It means putting everything in one huge repository instruction file instead of splitting context by scope and concern.",
        },
        {
          question: "How do I manage context budget?",
          answer:
            "Keep files focused, rely on scope-specific activation, and use progressive disclosure so extra resources load only when needed.",
        },
      ],
      tags: [
        "three-axis",
        "horizontal",
        "vertical",
        "diagonal",
        "context-budget",
      ],
    },
    {
      slug: "copilot-across-surfaces",
      title: "Copilot Across Surfaces",
      type: "video",
      duration: "7 mins",
      videoId: "placeholder-copilot-across-surfaces",
      description:
        "Map which context-engineering features work on each Copilot surface and design your .github folder for maximum portability.",
      objectives: [
        "Map which customization features work on each surface",
        "Explain how the coding agent reads custom instructions autonomously",
        "Configure excludeAgent to control surface-specific rules",
        "Design a .github folder that maximizes portability across surfaces",
      ],
      infoBoxes: [
        {
          title: "Portability Matrix",
          content:
            "Custom instructions are the most portable feature and work across VS Code, CLI, coding agent, code review, and JetBrains. MCP also travels widely. Agents, skills, hooks, memory, and plugins are much more VS Code specific.",
        },
      ],
      noteBoxes: [
        {
          title: "Course Scope",
          content:
            "Hands-on demos in this course target VS Code first and Copilot CLI second. Other surfaces are discussed for portability awareness rather than as primary demo environments.",
        },
        {
          title: "Design for Portability",
          content:
            "Build around instructions and MCP first. Layer VS Code-only features on top so the same repository remains useful across multiple Copilot surfaces.",
        },
      ],
      qa: [
        {
          question: "Which customization feature works everywhere?",
          answer:
            "Custom instruction files are the most portable and should be the foundation of any cross-surface setup.",
        },
        {
          question: "Which features are effectively VS Code-only?",
          answer:
            "Custom agents, skills, hooks, subagents, memory, and plugins are much more tied to VS Code than instructions or MCP.",
        },
        {
          question: "What does excludeAgent do?",
          answer:
            "It prevents a given instruction file from loading on specific surfaces, such as the coding agent, when those rules would not make sense there.",
        },
        {
          question: "What is the main portability principle?",
          answer:
            "Start with the features that travel the farthest, then layer deeper IDE-specific features only where they add clear value.",
        },
      ],
      tags: [
        "surfaces",
        "vs-code",
        "cli",
        "coding-agent",
        "portability",
        "excludeAgent",
      ],
    },
    {
      slug: "ai-assisted-sdlc",
      title: "AI-Assisted SDLC",
      type: "video-code",
      duration: "10 mins",
      videoId: "placeholder-ai-assisted-sdlc",
      description:
        "Map context engineering to every phase of the software development lifecycle and see a full AI-assisted workflow in action.",
      objectives: [
        "Map AI assistance to every phase of the SDLC",
        "Explain why context quality drives AI output quality",
        "Design a phased AI-assisted workflow using context engineering",
        "Articulate the shift from autocomplete to orchestrated agents",
      ],
      infoBoxes: [
        {
          title: "Context Engineering Across the SDLC",
          content:
            "Use prompts for planning and design, agents plus skills for coding, TDD workflows for testing, review agents for feedback, hooks for deployment guardrails, and memory plus docs for long-term maintenance.",
        },
      ],
      noteBoxes: [
        {
          title: "Four Levels of AI Assistance",
          content:
            "The progression is autocomplete, chat, agentic tooling, and finally orchestrated multi-agent workflows. Each level demands more context and rewards it with better output.",
        },
        {
          title: "Context Quality Is the Multiplier",
          content:
            "The same model can produce generic or production-ready results depending on how much structured project context you provide.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph LR\n    A["Plan\\nPrompt Files"] --> B["Design\\nPrompts + Instructions"]\n    B --> C["Code\\nAgents + Skills"]\n    C --> D["Test\\nTDD Agent"]\n    D --> E["Review\\nReview Agent"]\n    E --> F["Deploy\\nHooks + Coding Agent"]\n    F --> G["Monitor\\nMCP Servers"]\n    G --> H["Maintain\\nMemory + Docs"]\n    H -->|"feedback"| A',
          caption:
            "Different context features become primary at different stages of the SDLC.",
          alt: "An SDLC loop maps prompts, agents, hooks, MCP, memory, and docs to each development phase.",
        },
      ],
      codePreview: {
        title: "Planning and TDD Workflow Files",
        description:
          "A planning prompt and a TDD-focused custom agent that work together across the delivery lifecycle.",
        segments: [
          {
            code: lines(
              "---",
              "description: Break down a feature into implementation tasks",
              'agent: "agent"',
              "tools:",
              "  - github",
              "---",
              "",
              "Break down the following feature request into implementation tasks.",
              "",
              "For each task:",
              "1. Write a clear description with acceptance criteria",
              "2. Identify which files need changes",
              "3. Note testing requirements",
              "4. Flag any dependencies",
              "",
              "Feature: ${input:featureDescription}",
            ),
            language: "markdown",
            filename: ".github/prompts/plan-feature.prompt.md",
            explanation:
              "A planning prompt that turns a feature request into implementation tasks.",
          },
          {
            code: lines(
              "---",
              "name: TDD Agent",
              "description: Test-driven development workflow agent",
              "tools:",
              "  - run_in_terminal",
              "  - read_file",
              "  - replace_string_in_file",
              "  - create_file",
              "---",
              "",
              "You follow strict test-driven development.",
              "",
              "1. Read the requirement",
              "2. Write a failing test first",
              "3. Run the test and confirm it fails",
              "4. Write the minimum code to pass",
              "5. Re-run the test",
              "6. Refactor if needed",
            ),
            language: "markdown",
            filename: ".github/agents/tdd-agent.agent.md",
            explanation:
              "A dedicated TDD agent encodes a specific workflow instead of relying on ad hoc prompting.",
          },
        ],
      },
      stepGuides: [
        {
          title: "Feature Lifecycle Walkthrough",
          steps: [
            {
              title: "Plan with a prompt",
              description:
                "Run a planning prompt that breaks a feature into tasks, acceptance criteria, and dependencies.",
            },
            {
              title: "Code with your framework agent",
              description:
                "Use an implementation agent backed by instructions and skills to execute the first task.",
            },
            {
              title: "Test with the TDD agent",
              description:
                "Switch to a TDD-focused agent that writes the failing test first, then drives the implementation loop.",
            },
            {
              title: "Review with a review prompt or agent",
              description:
                "Run security, performance, and convention checks using your review-oriented context files.",
            },
            {
              title: "Deploy with hooks",
              description:
                "Use lifecycle hooks to enforce formatting, tests, and validation before code ships.",
            },
            {
              title: "Maintain with memory",
              description:
                "Capture the resulting patterns so future work on adjacent features starts from a richer baseline.",
            },
          ],
        },
      ],
      qa: [
        {
          question: "How does context engineering map to the SDLC?",
          answer:
            "Each phase gets a different dominant context surface: prompts for planning, agents and skills for coding, TDD flows for testing, review agents for review, hooks for deployment, and memory plus docs for maintenance.",
        },
        {
          question: "What are the four levels of AI assistance?",
          answer:
            "Autocomplete, chat, agentic tooling, and orchestrated workflows. Each stage needs more context and produces more capable output.",
        },
        {
          question: "Why is a TDD agent effective?",
          answer:
            "Because it encodes an explicit workflow that consistently writes tests first instead of depending on the model to remember that discipline ad hoc.",
        },
        {
          question: "What is the central lesson of this module?",
          answer:
            "Context quality is the highest-leverage input in AI-assisted delivery. Better structure produces better results from the same models.",
        },
      ],
      tags: [
        "sdlc",
        "planning",
        "coding",
        "testing",
        "review",
        "deployment",
        "orchestration",
      ],
    },
    {
      slug: "advanced-patterns",
      title: "Advanced Patterns",
      type: "video",
      duration: "8 mins",
      videoId: "placeholder-advanced-patterns",
      description:
        "Learn the advanced patterns that separate good context engineering from great, including description strategy, agent design, anti-patterns, and maintenance discipline.",
      objectives: [
        "Apply the description field strategy for intent-based instruction matching",
        "Design agents using progressive complexity and read-only versus read-write separation",
        "Identify and remediate the core context engineering anti-patterns",
        "Implement a maintenance checklist for keeping context synchronized with code",
      ],
      infoBoxes: [
        {
          title: "Common Anti-Patterns",
          content:
            "Watch for instruction bloat, monolithic rule files, duplicating linters, over-privileged agents, stale context, overly restrictive guidance, and flat unlayered rule dumps.",
        },
      ],
      noteBoxes: [
        {
          title: "Description Field Strategy",
          content:
            "Write descriptions like trigger phrases for user intent, not like passive labels. The description is part of discovery and matching, not just documentation.",
        },
        {
          title: "Maintenance Neglect Is a Real Risk",
          content:
            "Stale context becomes harmful because it teaches the model outdated patterns. Treat .github files like code and review them regularly.",
        },
        {
          title: "Three Agent Design Principles",
          content:
            "Start simple, separate read-only and write-capable agents, and match model power to the complexity of the task.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TD\n    A["General Agent\\nSimple prompts"] -->|"growing needs"| B["Specialized Agent\\nDomain-specific"]\n    B -->|"distinct workflows"| C["Read-Only Explorer\\nresearch + search"]\n    B -->|"distinct workflows"| D["Read-Write Builder\\ncode + test"]\n    C -->|"fast model"| E["Speed-Optimized"]\n    D -->|"powerful model"| F["Quality-Optimized"]',
          caption:
            "Agent architectures should specialize gradually and preserve least privilege.",
          alt: "A general agent branches into read-only and read-write specializations mapped to different model strengths.",
        },
      ],
      qa: [
        {
          question: "What is the description field strategy?",
          answer:
            "Write description fields as search-style intent phrases that help the runtime decide when a file is relevant.",
        },
        {
          question: "What are the main agent design principles?",
          answer:
            "Start with one general agent, separate read-only from write-capable roles, and choose models based on the complexity and speed needs of each role.",
        },
        {
          question: "How do you fix instruction bloat?",
          answer:
            "Split large files by concern and scope so only relevant guidance loads for each task.",
        },
        {
          question: "How often should context files be reviewed?",
          answer:
            "Quarterly is a good default. Audit rules, tool permissions, and references against the actual state of the codebase.",
        },
      ],
      tags: [
        "best-practices",
        "anti-patterns",
        "description-field",
        "agent-design",
        "maintenance",
      ],
    },
    {
      slug: "conclusion",
      title: "Conclusion",
      type: "video",
      duration: "5 mins",
      videoId: "placeholder-conclusion",
      description:
        "Wrap up the course with a seven-surface recap, a practical implementation checklist, and resources for staying current as the tooling evolves.",
      objectives: [
        "Summarize the seven customization surfaces and when to use each",
        "Recall the three-axis context model and feature mapping",
        "Build a prioritized implementation checklist for any project",
        "Identify resources for staying current as features evolve",
      ],
      infoBoxes: [
        {
          title: "Seven Surfaces, One Mental Model",
          content:
            "Use custom instructions for rules, prompt files for repeatable tasks, agents for roles, skills for on-demand knowledge, MCP for external tools, hooks for enforcement, and subagents for delegated work.",
        },
        {
          title: "Day-One Implementation Checklist",
          content:
            "Start with copilot-instructions.md, then add path-scoped instructions, one custom agent, one prompt file, one MCP server, a skill, and finally hooks. Build incrementally instead of all at once.",
        },
      ],
      noteBoxes: [
        {
          title: "Stay Current",
          content:
            "Follow the VS Code Copilot docs, GitHub changelog, and the Agent Skills ecosystem to keep your context architecture aligned with the latest capabilities.",
        },
      ],
      diagrams: [
        {
          chart:
            'graph TB\n    subgraph "Horizontal"\n        A["Agents"]\n        B["Skills"]\n        C["MCP"]\n        D["Subagents"]\n    end\n    subgraph "Vertical"\n        E["Instructions"]\n        F["Hooks"]\n    end\n    subgraph "Diagonal"\n        G["Prompts"]\n    end\n    subgraph "Supporting Features"\n        H["Memory"]\n        I["Plugins"]\n        J["Docs"]\n    end',
          caption:
            "The full context engineering ecosystem combines three core axes with a few supporting systems.",
          alt: "Horizontal, vertical, and diagonal customization layers appear alongside memory, plugins, and docs.",
        },
      ],
      qa: [
        {
          question: "What are the seven customization surfaces?",
          answer:
            "Instructions, prompts, custom agents, skills, MCP servers, hooks, and subagents form the core customization set taught in the course.",
        },
        {
          question: "What is the recommended implementation order?",
          answer:
            "Start small with repository instructions, then path-scoped instructions, then add higher-power features such as agents, prompts, MCP, skills, and hooks.",
        },
        {
          question: "How should I organize the features mentally?",
          answer:
            "Use the three-axis model: horizontal for capabilities, vertical for scope-filtered rules, and diagonal for task workflows.",
        },
        {
          question: "How do I keep the system healthy?",
          answer:
            "Review context files like application code, remove dead rules, tighten permissions, and keep docs aligned with actual architecture changes.",
        },
      ],
      tags: ["recap", "reference", "implementation-checklist", "resources"],
    },
    {
      slug: "questions",
      title: "Course Quiz",
      type: "quiz",
      duration: "10 mins",
      description:
        "Test your knowledge of GitHub Copilot customization surfaces, the three-axis model, file formats, portability, and best practices.",
      objectives: [
        "Validate understanding of the customization surfaces",
        "Demonstrate knowledge of the three-axis context model",
        "Identify correct file formats and activation mechanisms",
        "Apply best practices and anti-pattern awareness",
      ],
      infoBoxes: [
        {
          title: "Assessment Overview",
          content:
            "This quiz covers instructions, prompts, agents, skills, MCP, hooks, memory, portability, and implementation order.",
        },
      ],
      quizQuestions: [
        makeQuizQuestion(
          "q1",
          "What is the primary file that provides repository-wide context to GitHub Copilot?",
          [
            ".github/copilot-instructions.md",
            ".github/README.md",
            ".vscode/settings.json",
            "package.json",
          ],
          0,
          "copilot-instructions.md is the repository-wide instruction file that applies across Copilot interactions.",
        ),
        makeQuizQuestion(
          "q2",
          "Which YAML front-matter property scopes an instruction file to specific file paths?",
          ["scope", "applyTo", "glob", "matchPath"],
          1,
          "applyTo accepts glob patterns and controls when a path-scoped instruction file should load.",
        ),
        makeQuizQuestion(
          "q3",
          "What are the two discovery mechanisms for instruction files?",
          [
            "Manual import and auto-import",
            "Glob matching and semantic matching",
            "File search and text search",
            "Static loading and dynamic loading",
          ],
          1,
          "Instructions can load because a file matches applyTo or because the description semantically matches the task.",
        ),
        makeQuizQuestion(
          "q4",
          "What syntax is used for input variables in prompt files?",
          [
            "${input:variableName}",
            "{{variableName}}",
            "{variableName}",
            "$(variableName)",
          ],
          0,
          "Prompt files use ${input:name} to collect runtime values from the user.",
        ),
        makeQuizQuestion(
          "q5",
          "Which front-matter property in a prompt file delegates execution to an agent with tool access?",
          ["type: agent", 'agent: "agent"', "tools: enabled", "mode: run"],
          1,
          "The agent property routes a prompt through agent mode or a named custom agent.",
        ),
        makeQuizQuestion(
          "q6",
          "Where are custom agent definition files stored?",
          [
            ".vscode/agents/",
            ".github/agents/",
            "src/agents/",
            "Any location with .agent.md extension",
          ],
          1,
          "The standard repository location is .github/agents for .agent.md files.",
        ),
        makeQuizQuestion(
          "q7",
          "What principle should guide tool assignment in custom agents?",
          [
            "Maximum capability",
            "Least privilege",
            "Tool mirroring",
            "User preference per session",
          ],
          1,
          "Each agent should get only the tools required for its role.",
        ),
        makeQuizQuestion(
          "q8",
          "What is the key file in an agent skill package?",
          ["README.md", "SKILL.md", "skill.json", "index.md"],
          1,
          "SKILL.md is the entry point that defines metadata and instructions for a skill package.",
        ),
        makeQuizQuestion(
          "q9",
          "How do agent skills manage context budget?",
          [
            "By loading everything at startup",
            "By compressing content before sending",
            "Through progressive disclosure",
            "By limiting files to 1KB",
          ],
          2,
          "Skills expose metadata first and only load detailed resources when a relevant task actually invokes them.",
        ),
        makeQuizQuestion(
          "q10",
          "Which file configures MCP servers for a repository?",
          [
            ".github/mcp-servers.json",
            ".vscode/mcp.json",
            ".github/mcp.json",
            "mcp-config.json",
          ],
          1,
          ".vscode/mcp.json is the repository-level MCP configuration file used in VS Code workspaces.",
        ),
        makeQuizQuestion(
          "q11",
          "What should you never put in an MCP server configuration file?",
          [
            "Server command paths",
            "Tool descriptions",
            "Plain-text secrets or API keys",
            "Environment variable names",
          ],
          2,
          "Secrets must be injected securely at runtime rather than committed to source control.",
        ),
        makeQuizQuestion(
          "q12",
          "How does a hook script communicate its decision back to Copilot?",
          [
            "By writing to a configuration file",
            "Through exit codes and hook output",
            "By modifying VS Code settings",
            "Through a WebSocket connection",
          ],
          1,
          "Hooks allow, deny, or modify tool calls through their process exit code and optional structured output.",
        ),
        makeQuizQuestion(
          "q13",
          "Which hook event is the primary security gate for blocking dangerous tool calls?",
          ["SessionStart", "PreToolUse", "PostToolUse", "UserPromptSubmit"],
          1,
          "PreToolUse fires before the tool executes, making it the main enforcement point.",
        ),
        makeQuizQuestion(
          "q14",
          "How do subagents differ from the main agent?",
          [
            "They run in the same shared context",
            "They are stateless and isolated per invocation",
            "They always have more tools",
            "They can only read files",
          ],
          1,
          "Each subagent invocation starts fresh in its own context window and returns only a summary.",
        ),
        makeQuizQuestion(
          "q15",
          "How does Copilot memory validate stored observations?",
          [
            "It hashes the repository",
            "It validates that cited code still exists and matches",
            "It asks the user every time",
            "It compares memories to instruction files",
          ],
          1,
          "Memory is citation-backed and must still match the current codebase before reuse.",
        ),
        makeQuizQuestion(
          "q16",
          "Which customization feature works on every Copilot surface?",
          ["Custom agents", "Hooks", "Custom instructions", "Agent skills"],
          2,
          "Instruction files are the most portable customization mechanism in the current ecosystem.",
        ),
        makeQuizQuestion(
          "q17",
          "What does the horizontal axis in the three-axis model represent?",
          [
            "Features filtered by file path",
            "Features always available when selected, such as agents, skills, and MCP",
            "User-invoked workflows",
            "Organization-wide governance rules only",
          ],
          1,
          "Horizontal context refers to capabilities and personas that are selected or available independent of file path.",
        ),
        makeQuizQuestion(
          "q18",
          "Which anti-pattern repeats rules that ESLint or Prettier already enforce?",
          [
            "Instruction bloat",
            "Stale context",
            "Linter duplication",
            "Fighting the AI",
          ],
          2,
          "Instructions should focus on intent, architecture, and conventions that static tooling cannot already encode.",
        ),
        makeQuizQuestion(
          "q19",
          "What is the recommended first step when adding context engineering to a project?",
          [
            "Create a custom agent",
            "Set up MCP servers",
            "Add .github/copilot-instructions.md with project conventions",
            "Configure hooks for pre-commit validation",
          ],
          2,
          "Start with repository-wide instructions because they are quick to author and provide immediate leverage everywhere.",
        ),
        makeQuizQuestion(
          "q20",
          "What is the purpose of the excludeAgent property in instruction YAML front matter?",
          [
            "Hide the instruction from custom agents",
            "Exclude specific Copilot surfaces from reading the instruction",
            "Remove the instruction from version control",
            "Disable the instruction temporarily",
          ],
          1,
          "excludeAgent lets you keep surface-specific rules from loading where they would be misleading, such as inside the coding agent.",
        ),
      ],
      tags: ["quiz", "assessment", "review"],
    },
  ],
  overview: {
    heroSubheading:
      "Master the seven customization surfaces that turn GitHub Copilot from a generic assistant into a project-aware engineering partner.",
    learnItems: [
      {
        icon: "",
        title: "The .github folder, end to end",
        description:
          "Understand the full layout for instructions, prompts, agents, skills, hooks, and supporting configuration so every customization surface has a clear home.",
      },
      {
        icon: "",
        title: "Seven surfaces, one architecture",
        description:
          "Build instructions, prompts, agents, skills, MCP, hooks, and portability patterns into a coherent three-axis context system.",
      },
      {
        icon: "",
        title: "Full SDLC integration",
        description:
          "Use context engineering across planning, coding, testing, review, deployment, and maintenance instead of treating Copilot as a one-off chat tool.",
      },
      {
        icon: "",
        title: "VS Code and CLI throughout",
        description:
          "Every demo centers on VS Code and Copilot CLI, with portability guidance for other surfaces where it matters.",
      },
    ],
    aboutParagraphs: [
      "GitHub Copilot can generate strong code, but it starts as a generalist. It does not automatically know your architecture decisions, naming conventions, testing strategy, security posture, or deployment workflow. Context engineering fixes that by storing project knowledge and behavioral guidance in version-controlled artifacts.",
      "This course covers the major customization surfaces available today: custom instructions, prompt files, custom agents, agent skills, MCP servers, hooks, and cross-surface portability. It also shows how memory and documentation complement those files so the assistant keeps learning from the repository instead of starting from zero every session.",
      "By the end of the course, you will know how to design a layered .github plus /docs architecture that supports planning, coding, review, and delivery with the same repository-aware mental model.",
    ],
    detailItems: [
      {
        title: "Understand why context engineering matters",
        description:
          "Learn why context quality drives AI output quality and why agentic workflows require much more structure than autocomplete or ad hoc chat.",
      },
      {
        title: "Master the .github directory structure",
        description:
          "See how instructions, prompts, agents, skills, and hooks fit together, how they activate, and how they should be layered in a real repository.",
      },
      {
        title: "Build the seven customization surfaces",
        description:
          "Each lesson adds a new surface or supporting concept so the course builds toward a complete context architecture instead of isolated tricks.",
      },
      {
        title: "Apply the three-axis model",
        description:
          "Organize context horizontally, vertically, and diagonally so each rule, workflow, and capability loads in the right place.",
      },
      {
        title: "Integrate context into the SDLC",
        description:
          "Use prompts for planning, agents and skills for implementation, hooks for enforcement, and memory plus docs for long-term maintainability.",
      },
      {
        title: "Avoid anti-patterns early",
        description:
          "Learn how to prevent rule bloat, stale context, over-privileged agents, and other mistakes that make AI assistance worse instead of better.",
      },
    ],
    prerequisites: {
      title: "Prerequisites",
      subtitle: "What you need before starting",
      tags: ["VS Code", "GitHub Copilot", "Git", "TypeScript"],
      description:
        "This course targets developers already using GitHub Copilot who want to move from one-off prompting to systematic, project-wide AI customization. Familiarity with VS Code and basic Git is recommended.",
    },
    audienceCards: [
      {
        icon: "💻",
        title: "Individual Developers",
        description:
          "You use Copilot daily and want it to follow your project conventions without constant re-explaining.",
      },
      {
        icon: "🏗️",
        title: "Tech Leads and Architects",
        description:
          "You want to encode architecture decisions, standards, and guardrails so the whole team gets consistent AI assistance.",
      },
      {
        icon: "⚙️",
        title: "Platform and DevOps Engineers",
        description:
          "You manage tooling and delivery workflows and need a way to integrate AI behavior into existing governance and automation.",
      },
      {
        icon: "🤖",
        title: "Teams Adopting Agentic AI",
        description:
          "Your team is moving beyond autocomplete toward tools, agents, and orchestrated workflows, and needs a disciplined context model.",
      },
    ],
  },
};
