---
agent: _tuts_agent
description: Add a new lesson or part to the course
---

# Add Lesson

## Lesson details

${input:title:Lesson title — e.g. "Building Your First Agent"}
${input:type:Part type — article | video | quiz | qa | podcast | slideshow}
${input:description:Short description of what this lesson covers}

---

## Workflow

1. **Read `data/course.ts`** to understand the course structure and find the correct insertion point.
2. **Add a new entry** to the `parts` array in `data/course.ts` with:
   - `slug` — kebab-case, unique
   - `title` — from input above
   - `type` — from input above
   - `duration` — estimated (e.g. `"5 min read"`, `"12:34"`)
   - `description` — from input above
   - Type-specific fields (e.g. `videoId` for video, `gistId` for article)
3. **Create `app/[part]/page.tsx`** if needed — this is the dynamic route that renders all parts, it likely already exists. If you're adding a new _type_ of content not yet handled, update the rendering logic there.
4. **Verify** the new lesson is reachable and the build passes.

## Required fields by part type

| Type        | Required fields                                     |
| ----------- | --------------------------------------------------- |
| `video`     | `slug`, `title`, `type`, `duration`, `videoId`      |
| `article`   | `slug`, `title`, `type`, `duration`, `description`  |
| `quiz`      | `slug`, `title`, `type`, `questions[]`              |
| `qa`        | `slug`, `title`, `type`, `questions[]`              |
| `podcast`   | `slug`, `title`, `type`, `duration`, `podcastUrl`   |
| `slideshow` | `slug`, `title`, `type`, `duration`, `slideshowUrl` |

> Match the actual `CoursePart` type definition in `data/course.ts` — check it before adding.

## Guardrails

- **Never duplicate slugs** — check existing parts first.
- **Ordering matters** — insert at the correct position for the learning flow.
- **Use `CoursePlayerLayout`** for the wrapping layout (not `TutorialLayout`).
- **Static export safe** — no `useRouter`, no `getServerSideProps`, no `fetch` in render.
- **Run `get_errors`** on modified files, then `npm run build` to verify.
