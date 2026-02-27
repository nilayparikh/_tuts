"use client";

import React, { useMemo } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface CourseFilterBarProps {
  /** All available tags across courses */
  allTags: string[];
  /** All available difficulty levels */
  allDifficulties: string[];
  /** Currently active tag filters */
  activeTags: string[];
  /** Currently active difficulty filter (single) */
  activeDifficulty: string | null;
  /** Callback when tags change */
  onTagsChange: (tags: string[]) => void;
  /** Callback when difficulty changes */
  onDifficultyChange: (difficulty: string | null) => void;
}

// ─── Difficulty config ─────────────────────────────────────────────────────

const DIFFICULTY_META: Record<string, { label: string; color: string }> = {
  beginner: { label: "Beginner", color: "var(--tf-color-success)" },
  moderate: { label: "Moderate", color: "var(--tf-color-warning)" },
  expert: { label: "Expert", color: "var(--tf-color-danger)" },
};

// ─── Styles ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-4)",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-2)",
    flexWrap: "wrap" as const,
  },
  label: {
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-mono)",
    fontWeight: 600,
    color: "var(--tf-text-muted)",
    textTransform: "uppercase" as const,
    letterSpacing: "var(--tf-tracking-wide)",
    marginRight: "var(--tf-space-1)",
    whiteSpace: "nowrap" as const,
    userSelect: "none" as const,
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    padding: "0.25rem 0.625rem",
    borderRadius: "var(--tf-radius-full)",
    border: "1px solid var(--tf-border-default)",
    background: "transparent",
    color: "var(--tf-text-secondary)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-body)",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 150ms cubic-bezier(0.2, 0, 0, 1)",
    userSelect: "none" as const,
    whiteSpace: "nowrap" as const,
  },
  chipActive: {
    background: "var(--tf-color-primary-container)",
    borderColor: "var(--tf-color-primary-border)",
    color: "var(--tf-color-primary)",
    fontWeight: 600,
  },
  clearBtn: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.5rem",
    borderRadius: "var(--tf-radius-full)",
    border: "1px solid transparent",
    background: "transparent",
    color: "var(--tf-text-muted)",
    fontSize: "var(--tf-text-xs)",
    fontFamily: "var(--tf-font-body)",
    cursor: "pointer",
    transition: "color 150ms ease",
    userSelect: "none" as const,
  },
};

// ─── Component ─────────────────────────────────────────────────────────────

export function CourseFilterBar({
  allTags,
  allDifficulties,
  activeTags,
  activeDifficulty,
  onTagsChange,
  onDifficultyChange,
}: CourseFilterBarProps) {
  const hasFilters = activeTags.length > 0 || activeDifficulty !== null;

  const clearAll = () => {
    onTagsChange([]);
    onDifficultyChange(null);
  };

  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      onTagsChange(activeTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...activeTags, tag]);
    }
  };

  const toggleDifficulty = (d: string) => {
    onDifficultyChange(activeDifficulty === d ? null : d);
  };

  // Sort tags by label length for a cleaner visual layout
  const sortedTags = useMemo(
    () => [...allTags].sort((a, b) => a.length - b.length),
    [allTags],
  );

  return (
    <div style={s.root}>
      {/* Difficulty row */}
      <div style={s.row}>
        <span style={s.label}>Level</span>
        {allDifficulties.map((d) => {
          const meta = DIFFICULTY_META[d];
          const active = activeDifficulty === d;
          return (
            <button
              key={d}
              type="button"
              onClick={() => toggleDifficulty(d)}
              style={{
                ...s.chip,
                ...(active
                  ? {
                      background: `color-mix(in srgb, ${meta?.color ?? "var(--tf-color-primary)"} 15%, transparent)`,
                      borderColor: meta?.color ?? "var(--tf-color-primary-border)",
                      color: meta?.color ?? "var(--tf-color-primary)",
                      fontWeight: 600,
                    }
                  : {}),
              }}
            >
              {meta?.label ?? d}
            </button>
          );
        })}
      </div>

      {/* Tags row */}
      <div style={s.row}>
        <span style={s.label}>Topics</span>
        {sortedTags.map((tag) => {
          const active = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              style={{
                ...s.chip,
                ...(active ? s.chipActive : {}),
              }}
            >
              {tag}
            </button>
          );
        })}

        {hasFilters && (
          <button
            type="button"
            onClick={clearAll}
            style={s.clearBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--tf-color-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--tf-text-muted)";
            }}
          >
            ✕ Clear
          </button>
        )}
      </div>
    </div>
  );
}
