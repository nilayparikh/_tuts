/**
 * Course Registry — all courses on this tutorial site.
 *
 * Structure:
 *   /                       → Topic home (lists all courses)
 *   /[course]/              → Course overview page
 *   /[course]/[part]/       → Lesson page
 *
 * To add a new course:
 *   1.  Create data/courses/<slug>.ts exporting a CourseDefinition.
 *   2.  Import it here and add to ALL_COURSES.
 *   3.  Create any course-specific content in app/[course]/[part]/page.tsx
 *       (the generic renderer handles all standard types automatically).
 */

export type {
  CourseDefinition,
  CourseInstructor,
  CoursePartMeta,
  CourseOverview,
  PartQA,
  PartQuizQuestion,
  SiteTopicConfig,
} from "./types";

import type {
  CourseDefinition,
  CoursePartMeta,
  SiteTopicConfig,
} from "./types";

// ─── Import individual courses ────────────────────────────────────────────

import { A2A_COURSE } from "./a2a";

// ─── All courses (display order) ──────────────────────────────────────────

export const ALL_COURSES: CourseDefinition[] = [A2A_COURSE];

// ─── Site-level topic configuration ───────────────────────────────────────

export const SITE_TOPIC: SiteTopicConfig = {
  topicName: "Agentic AI",
  tagline:
    "Hands-on courses on building, orchestrating, and deploying AI agent systems",
  description:
    "Deep-dive tutorials on Agentic AI — from inter-agent protocols and multi-agent orchestration to production deployment. Learn by building real systems with A2A, MCP, LangGraph, Google ADK, BeeAI, and more.",
  tags: [
    "Agentic AI",
    "AI Agents",
    "A2A",
    "MCP",
    "LangGraph",
    "Multi-Agent Systems",
  ],
  courses: ALL_COURSES,
};

// ─── Course lookup helpers ────────────────────────────────────────────────

/** All course slugs (for generateStaticParams) */
export const ALL_COURSE_SLUGS: string[] = ALL_COURSES.map((c) => c.slug);

/** Find a course by its slug */
export function findCourse(courseSlug: string): CourseDefinition | undefined {
  return ALL_COURSES.find((c) => c.slug === courseSlug);
}

/** Find a part within a specific course */
export function findCoursePart(
  courseSlug: string,
  partSlug: string,
): CoursePartMeta | undefined {
  const course = findCourse(courseSlug);
  return course?.parts.find((p) => p.slug === partSlug);
}

/** Get adjacent parts for navigation within a course */
export function getAdjacentParts(
  courseSlug: string,
  partSlug: string,
): { prev: CoursePartMeta | null; next: CoursePartMeta | null } {
  const course = findCourse(courseSlug);
  if (!course) return { prev: null, next: null };
  const idx = course.parts.findIndex((p) => p.slug === partSlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? course.parts[idx - 1] : null,
    next: idx < course.parts.length - 1 ? course.parts[idx + 1] : null,
  };
}

/** Generate all {course, part} param combos for generateStaticParams */
export function allCoursePartParams(): Array<{
  course: string;
  part: string;
}> {
  return ALL_COURSES.flatMap((c) =>
    c.parts.map((p) => ({ course: c.slug, part: p.slug })),
  );
}
