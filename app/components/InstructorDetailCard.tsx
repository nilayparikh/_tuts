"use client";

import React from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface InstructorDetailCardProps {
  /** Instructor full name */
  name: string;
  /** Photo src (not logo) */
  imageSrc: string;
  /** Short bio — string or JSX with links */
  bio: React.ReactNode;
  /** Role / title under the name */
  role?: string;
  /** Social links */
  socials?: {
    twitter?: string;
    twitterHandle?: string;
    linkedin?: string;
    youtube?: string;
    github?: string;
  };
}

// ─── Inline SVG icons ──────────────────────────────────────────────────────

const XIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

const GitHubIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// ─── Styles ────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--tf-space-6)",
    padding: "var(--tf-space-6)",
    borderRadius: "var(--tf-radius-lg)",
    background: "var(--tf-bg-surface)",
    border: "1px solid var(--tf-border-default)",
  },
  photo: {
    width: "5.5rem",
    height: "5.5rem",
    borderRadius: "var(--tf-radius-lg)",
    objectFit: "cover" as const,
    flexShrink: 0,
    border: "2px solid var(--tf-border-default)",
  },
  body: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-3)",
    flex: 1,
    minWidth: 0,
  },
  nameRow: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-1)",
  },
  name: {
    margin: 0,
    fontSize: "var(--tf-text-xl)",
    fontFamily: "var(--tf-font-display)",
    fontWeight: 700,
    color: "var(--tf-text-primary)",
    lineHeight: "var(--tf-leading-tight)",
  },
  role: {
    margin: 0,
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-display)",
    fontWeight: 500,
    color: "var(--tf-color-primary)",
    lineHeight: "var(--tf-leading-normal)",
  },
  bio: {
    margin: 0,
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
    color: "var(--tf-text-secondary)",
    lineHeight: "var(--tf-leading-relaxed)",
  },
  socials: {
    display: "flex",
    alignItems: "center",
    gap: "var(--tf-space-2)",
    flexWrap: "wrap" as const,
    paddingTop: "var(--tf-space-1)",
  },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    borderRadius: "var(--tf-radius-md)",
    background: "var(--tf-bg-elevated)",
    border: "1px solid var(--tf-border-default)",
    color: "var(--tf-text-secondary)",
    textDecoration: "none",
    transition:
      "color var(--tf-transition-fast), border-color var(--tf-transition-fast), background var(--tf-transition-fast)",
    cursor: "pointer",
  },
};

// ─── Component ─────────────────────────────────────────────────────────────

export function InstructorDetailCard({
  name,
  imageSrc,
  bio,
  role,
  socials,
}: InstructorDetailCardProps) {
  const socialEntries: Array<{
    href: string;
    label: string;
    icon: React.ReactNode;
  }> = [];

  if (socials?.twitter) {
    socialEntries.push({
      href: socials.twitter,
      label: `Follow ${socials.twitterHandle ?? name} on X`,
      icon: XIcon,
    });
  }
  if (socials?.linkedin) {
    socialEntries.push({
      href: socials.linkedin,
      label: `${name} on LinkedIn`,
      icon: LinkedInIcon,
    });
  }
  if (socials?.youtube) {
    socialEntries.push({
      href: socials.youtube,
      label: `${name} on YouTube`,
      icon: YouTubeIcon,
    });
  }
  if (socials?.github) {
    socialEntries.push({
      href: socials.github,
      label: `${name} on GitHub`,
      icon: GitHubIcon,
    });
  }

  return (
    <div style={s.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageSrc} alt={name} width={88} height={88} style={s.photo} />

      <div style={s.body}>
        <div style={s.nameRow}>
          <h3 style={s.name}>{name}</h3>
          {role && <p style={s.role}>{role}</p>}
        </div>

        <div style={s.bio}>{bio}</div>

        {socialEntries.length > 0 && (
          <div style={s.socials}>
            {socialEntries.map((entry) => (
              <a
                key={entry.href}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                style={s.socialLink}
                aria-label={entry.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--tf-text-primary)";
                  e.currentTarget.style.borderColor = "var(--tf-border-strong)";
                  e.currentTarget.style.background = "var(--tf-bg-surface)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--tf-text-secondary)";
                  e.currentTarget.style.borderColor =
                    "var(--tf-border-default)";
                  e.currentTarget.style.background = "var(--tf-bg-elevated)";
                }}
              >
                {entry.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
