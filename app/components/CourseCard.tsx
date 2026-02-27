"use client";

import React from "react";
import type { CourseInstructor } from "@/data/courses";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface CourseCardProps {
  slug: string;
  icon: string;
  title: string;
  description: string;
  totalDuration: string;
  lessonCount: number;
  tags: string[];
  difficulty?: "beginner" | "moderate" | "expert";
  instructor?: CourseInstructor;
}

// ─── Difficulty config ─────────────────────────────────────────────────────

const DIFFICULTY_META: Record<
  string,
  { label: string; color: string; bg: string }
> = {
  beginner: {
    label: "Beginner",
    color: "var(--tf-color-success)",
    bg: "var(--tf-color-success-container-high)",
  },
  moderate: {
    label: "Moderate",
    color: "var(--tf-color-warning)",
    bg: "var(--tf-color-warning-container-high)",
  },
  expert: {
    label: "Expert",
    color: "var(--tf-color-danger)",
    bg: "var(--tf-color-danger-container-high)",
  },
};

// ─── Styles ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },
  card: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-4)",
    padding: "var(--tf-space-6)",
    borderRadius: "var(--tf-radius-lg)",
    background: "var(--tf-bg-surface)",
    border: "1px solid var(--tf-border-default)",
    cursor: "pointer",
    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
    height: "100%",
  },

  /* Top row: icon + title + difficulty badge */
  topRow: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-3)",
  },
  iconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "var(--tf-radius-md)",
    background: "var(--tf-bg-elevated)",
    fontSize: "1.25rem",
    flexShrink: 0,
  },
  titleWrap: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    margin: 0,
    fontSize: "var(--tf-text-lg)",
    fontFamily: "var(--tf-font-display)",
    fontWeight: 700,
    color: "var(--tf-text-primary)",
    lineHeight: "var(--tf-leading-tight)",
  },
  difficultyBadge: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.125rem 0.5rem",
    borderRadius: "var(--tf-radius-full)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-mono)",
    fontWeight: 600,
    letterSpacing: "var(--tf-tracking-wide)",
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
  },

  /* Description */
  description: {
    margin: 0,
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
    color: "var(--tf-text-secondary)",
    lineHeight: "var(--tf-leading-relaxed)",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  },

  /* Meta row: lessons + duration */
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-3)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-mono)",
    color: "var(--tf-text-muted)",
    letterSpacing: "var(--tf-tracking-wide)",
  },
  metaDot: {
    width: "3px",
    height: "3px",
    borderRadius: "var(--tf-radius-full)",
    background: "var(--tf-text-muted)",
    opacity: 0.5,
    flexShrink: 0,
  },

  /* Tags */
  tagRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    flexWrap: "wrap" as const,
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.125rem 0.5rem",
    borderRadius: "var(--tf-radius-full)",
    background: "var(--tf-bg-elevated)",
    border: "1px solid var(--tf-border-default)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-body)",
    fontWeight: 500,
    color: "var(--tf-text-muted)",
    whiteSpace: "nowrap" as const,
  },
  tagOverflow: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.125rem 0.375rem",
    borderRadius: "var(--tf-radius-full)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-mono)",
    fontWeight: 600,
    color: "var(--tf-text-muted)",
  },

  /* Bottom: instructor */
  bottomRow: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-2)",
    marginTop: "auto",
    paddingTop: "var(--tf-space-2)",
    borderTop: "1px solid var(--tf-border-default)",
  },
  avatar: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "var(--tf-radius-full)",
    objectFit: "cover" as const,
    flexShrink: 0,
    border: "1px solid var(--tf-border-default)",
  },
  instructorName: {
    margin: 0,
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-body)",
    fontWeight: 500,
    color: "var(--tf-text-muted)",
  },
};

// ─── Component ─────────────────────────────────────────────────────────────

const MAX_VISIBLE_TAGS = 4;

export function CourseCard({
  slug,
  icon,
  title,
  description,
  totalDuration,
  lessonCount,
  tags,
  difficulty,
  instructor,
}: CourseCardProps) {
  const diff = difficulty ? DIFFICULTY_META[difficulty] : null;
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
  const overflowCount = tags.length - MAX_VISIBLE_TAGS;

  return (
    <a href={`/${slug}/`} style={s.link} className="course-card-link">
      <div style={s.card} className="course-card">
        {/* ── Top: icon + title + difficulty ── */}
        <div style={s.topRow}>
          <span style={s.iconWrap}>{icon}</span>
          <div style={s.titleWrap}>
            <h3 style={s.title}>{title}</h3>
          </div>
          {diff && (
            <span
              style={{
                ...s.difficultyBadge,
                color: diff.color,
                background: diff.bg,
              }}
            >
              {diff.label}
            </span>
          )}
        </div>

        {/* ── Description ── */}
        <p style={s.description}>{description}</p>

        {/* ── Meta: count + duration ── */}
        <div style={s.metaRow}>
          <span>{lessonCount} lessons</span>
          <span style={s.metaDot} />
          <span>{totalDuration}</span>
        </div>

        {/* ── Tags ── */}
        {visibleTags.length > 0 && (
          <div style={s.tagRow}>
            {visibleTags.map((tag) => (
              <span key={tag} style={s.tag}>
                {tag}
              </span>
            ))}
            {overflowCount > 0 && (
              <span style={s.tagOverflow}>+{overflowCount}</span>
            )}
          </div>
        )}

        {/* ── Instructor ── */}
        {instructor && (
          <div style={s.bottomRow}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={instructor.imageSrc}
              alt={instructor.name}
              width={24}
              height={24}
              style={s.avatar}
            />
            <span style={s.instructorName}>{instructor.name}</span>
          </div>
        )}
      </div>
    </a>
  );
}
