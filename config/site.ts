/**
 * SITE_CONFIG — shared header and footer props for this tutorial site.
 *
 * © 2026 LocalM™. All rights reserved.
 *
 * This template renders a SINGLE course. Navigation reflects that:
 * "Home" → course overview, "GitHub" → course repo.
 */

import type {
  TutorialHeaderProps,
  TutorialFooterProps,
  NavItem,
  FooterLink,
} from "@localm/tutorial-framework";

/* ─── Brand constants ──────────────────────────────────────────────────── */

export const BRAND = {
  name: "LocalM\u2122 Tuts",
  nameFull: "LocalM\u2122 Tutorials",
  copyright: `\u00A9 ${new Date().getFullYear()} LocalM\u2122. All rights reserved.`,
  logoUrl: "/brand/icon-circle-64.png",
  profileUrl: "/brand/profile-pic-512.png",
  socials: {
    twitter: "https://x.com/nilayparikh",
    twitterHandle: "@nilayparikh",
    linkedin: "https://linkedin.com/in/nilayparikh",
    linkedinNewsletter:
      "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7404590598986375168",
    youtube: "https://youtube.com/@localm",
    github: "https://github.com/nilayparikh",
  },
} as const;

/* ─── Navigation ───────────────────────────────────────────────────────── */

const NAV_ITEMS: NavItem[] = [{ label: "Course", href: "/" }];

const FOOTER_LINKS: FooterLink[] = [
  { label: "Course Overview", href: "/" },
  { label: "Terms", href: "/terms/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "YouTube", href: BRAND.socials.youtube, external: true },
];

/* ─── Header & Footer ──────────────────────────────────────────────────── */

export const SITE_HEADER: TutorialHeaderProps = {
  siteName: BRAND.name,
  logoUrl: BRAND.logoUrl,
  navItems: NAV_ITEMS,
  githubUrl: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
  youtubeUrl: BRAND.socials.youtube,
  twitterUrl: BRAND.socials.twitter,
  linkedinUrl: BRAND.socials.linkedin,
};

export const SITE_FOOTER: TutorialFooterProps = {
  siteName: BRAND.name,
  links: FOOTER_LINKS,
  githubUrl: BRAND.socials.github,
  youtubeUrl: BRAND.socials.youtube,
  twitterUrl: BRAND.socials.twitter,
  twitterHandle: BRAND.socials.twitterHandle,
  linkedinUrl: BRAND.socials.linkedin,
  linkedinNewsletterUrl: BRAND.socials.linkedinNewsletter,
};

/** Convenience bundle — pass spread to TutorialLayout */
export const SITE_CONFIG = {
  header: SITE_HEADER,
  footer: SITE_FOOTER,
} as const;
