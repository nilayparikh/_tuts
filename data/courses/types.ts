/**
 * Shared types for the multi-course data architecture.
 *
 * Each course lives in its own file under data/courses/<slug>.ts
 * and is registered in data/courses/index.ts.
 */

import type { CoursePart, PartType } from "@localm/tutorial-framework";

// Re-export PartType for convenience
export type { PartType };

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

// ─── Rich overview content (optional per-course) ──────────────────────────

export interface CourseOverview {
  /** Custom hero subheading (overrides course.description in hero) */
  heroSubheading?: string;
  /** "What You'll Learn" concept cards */
  learnItems?: Array<{ icon: string; title: string; description: string }>;
  /** About section paragraphs (may contain basic HTML tags) */
  aboutParagraphs?: string[];
  /** Accordion detail items ("In detail, you'll…") */
  detailItems?: Array<{ title: string; description: string }>;
  /** Prerequisites DescriptionBox */
  prerequisites?: {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
  };
  /** Audience / "Who Should Join?" cards */
  audienceCards?: Array<{ icon: string; title: string; description: string }>;
}

// ─── Instructor ───────────────────────────────────────────────────────────

export interface CourseInstructor {
  /** Instructor full name */
  name: string;
  /** Avatar / photo path */
  imageSrc: string;
  /** Role / title */
  role: string;
}

// ─── Course definition ────────────────────────────────────────────────────

export interface CourseDefinition {
  /** URL-safe slug — becomes the route prefix, e.g. "a2a" → /a2a/ */
  slug: string;
  /** Display title */
  title: string;
  /** Short description for cards and SEO */
  description: string;
  /** Human-readable total duration */
  totalDuration: string;
  /** SEO / filter tags */
  tags: string[];
  /** GitHub repository URL */
  githubUrl?: string;
  /** Emoji or icon for course cards */
  icon?: string;
  /** Difficulty level */
  difficulty?: "beginner" | "moderate" | "expert";
  /** Course instructor */
  instructor?: CourseInstructor;
  /** Ordered parts (lessons) */
  parts: CoursePartMeta[];
  /** Rich overview content for the course page */
  overview?: CourseOverview;
}

// ─── Site-level topic definition ──────────────────────────────────────────

export interface SiteTopicConfig {
  /** Site topic name, e.g. "Agentic AI" */
  topicName: string;
  /** Short tagline for the home page hero */
  tagline: string;
  /** Extended description */
  description: string;
  /** SEO tags */
  tags: string[];
  /** All courses on this site, in display order */
  courses: CourseDefinition[];
}
