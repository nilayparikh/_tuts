"use client";

import React, { useState, useMemo } from "react";
import type { CourseDefinition } from "@/data/courses";
import { CourseFilterBar } from "./CourseFilterBar";
import { CourseCard } from "./CourseCard";

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
};

// ─── Component ─────────────────────────────────────────────────────────────

export function CourseGrid({ courses }: CourseGridProps) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);

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
    // Fixed order
    return ["beginner", "moderate", "expert"].filter((d) => diffSet.has(d));
  }, [courses]);

  // Filter courses
  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (activeDifficulty && c.difficulty !== activeDifficulty) return false;
      if (
        activeTags.length > 0 &&
        !activeTags.some((t) => c.tags.includes(t))
      )
        return false;
      return true;
    });
  }, [courses, activeTags, activeDifficulty]);

  // Only show filter bar if there are enough courses/tags to make it useful
  const showFilters = courses.length > 1 || allTags.length > 0;

  return (
    <div style={s.root}>
      {showFilters && (
        <CourseFilterBar
          allTags={allTags}
          allDifficulties={allDifficulties}
          activeTags={activeTags}
          activeDifficulty={activeDifficulty}
          onTagsChange={setActiveTags}
          onDifficultyChange={setActiveDifficulty}
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
        {filtered.length > 0 ? (
          filtered.map((course) => (
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
    </div>
  );
}
