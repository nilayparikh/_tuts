"use client";

import React, { useState, useMemo } from "react";
import type { CourseDefinition } from "@/data/courses";
import { CourseFilterBar } from "./CourseFilterBar";
import { CourseCard } from "./CourseCard";

// ─── Constants ─────────────────────────────────────────────────────────────

/** Courses per page (2 columns × 10 rows) */
const PAGE_SIZE = 20;

// ─── Types ─────────────────────────────────────────────────────────────────

export interface CourseGridProps {
  courses: CourseDefinition[];
}

// ─── Styles ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-6)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "var(--tf-space-5)",
  },
  empty: {
    gridColumn: "1 / -1",
    textAlign: "center" as const,
    padding: "var(--tf-space-10) var(--tf-space-4)",
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
    color: "var(--tf-text-muted)",
  },
  count: {
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-mono)",
    color: "var(--tf-text-muted)",
    letterSpacing: "var(--tf-tracking-wide)",
  },
  pager: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--tf-space-2)",
    paddingTop: "var(--tf-space-2)",
  },
  pageBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "2rem",
    height: "2rem",
    padding: "0 0.5rem",
    borderRadius: "var(--tf-radius-md)",
    border: "1px solid var(--tf-border-default)",
    background: "transparent",
    color: "var(--tf-text-secondary)",
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-mono)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 150ms ease",
    userSelect: "none" as const,
  },
  pageBtnActive: {
    background: "var(--tf-color-primary-container)",
    borderColor: "var(--tf-color-primary-border)",
    color: "var(--tf-color-primary)",
    fontWeight: 700,
  },
  pageBtnDisabled: {
    opacity: 0.35,
    cursor: "default",
    pointerEvents: "none" as const,
  },
};

// ─── Component ─────────────────────────────────────────────────────────────

export function CourseGrid({ courses }: CourseGridProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  // Collect all unique tags and difficulties
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    courses.forEach((c) => c.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet);
  }, [courses]);

  const allDifficulties = useMemo(() => {
    const diffSet = new Set<string>();
    courses.forEach((c) => {
      if (c.difficulty) diffSet.add(c.difficulty);
    });
    return ["beginner", "moderate", "expert"].filter((d) => diffSet.has(d));
  }, [courses]);

  // Filter courses
  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (activeDifficulty && c.difficulty !== activeDifficulty) return false;
      if (activeTags.length > 0 && !activeTags.some((t) => c.tags.includes(t)))
        return false;
      return true;
    });
  }, [courses, activeTags, activeDifficulty]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);
  const paged = filtered.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);
  const showPager = filtered.length > PAGE_SIZE;

  // Reset to page 0 when filters change
  const handleTagsChange = (tags: string[]) => {
    setActiveTags(tags);
    setPage(0);
  };
  const handleDifficultyChange = (d: string | null) => {
    setActiveDifficulty(d);
    setPage(0);
  };

  const showFilters = courses.length > 1 || allTags.length > 0;

  return (
    <div style={s.root}>
      {showFilters && (
        <CourseFilterBar
          allTags={allTags}
          allDifficulties={allDifficulties}
          activeTags={activeTags}
          activeDifficulty={activeDifficulty}
          onTagsChange={handleTagsChange}
          onDifficultyChange={handleDifficultyChange}
        />
      )}

      {/* Result count when filtering */}
      {(activeTags.length > 0 || activeDifficulty) && (
        <span style={s.count}>
          {filtered.length} of {courses.length} course
          {courses.length !== 1 ? "s" : ""}
        </span>
      )}

      <div style={s.grid} className="course-grid">
        {paged.length > 0 ? (
          paged.map((course) => (
            <CourseCard
              key={course.slug}
              slug={course.slug}
              icon={course.icon ?? "📚"}
              title={course.title}
              description={course.description}
              totalDuration={course.totalDuration}
              lessonCount={course.parts.length}
              tags={course.tags}
              difficulty={course.difficulty}
              instructor={course.instructor}
            />
          ))
        ) : (
          <div style={s.empty}>
            No courses match the current filters. Try removing some filters.
          </div>
        )}
      </div>

      {/* Pagination */}
      {showPager && (
        <div style={s.pager}>
          <button
            type="button"
            style={{
              ...s.pageBtn,
              ...(safePage === 0 ? s.pageBtnDisabled : {}),
            }}
            onClick={() => setPage(Math.max(0, safePage - 1))}
            aria-label="Previous page"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              style={{
                ...s.pageBtn,
                ...(i === safePage ? s.pageBtnActive : {}),
              }}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              aria-current={i === safePage ? "page" : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            style={{
              ...s.pageBtn,
              ...(safePage >= totalPages - 1 ? s.pageBtnDisabled : {}),
            }}
            onClick={() => setPage(Math.min(totalPages - 1, safePage + 1))}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
