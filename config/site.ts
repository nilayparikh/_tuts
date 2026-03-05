/**
 * SITE_CONFIG — shared header and footer props for this tutorial site.
 *
 * © 2026 LocalM™. All rights reserved.
 *
 * Multi-course site. Navigation reflects that:
 * "Courses" → topic home listing all courses.
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
  logoUrl: "/brand/logo-horizontal-color-1960x440.png",
  logoIconUrlHeader: "/brand/icon-mark-gradient-64.png",
  logoIconUrlFooter: "/brand/icon-mark-gradient-32.png",
  profileUrl: "/brand/profile-pic-512.png",
  socials: {
    twitter: "https://x.com/nilayparikh",
    twitterHandle: "@nilayparikh",
    linkedin: "https://linkedin.com/in/niparikh",
    linkedinNewsletter:
      "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7404590598986375168",
    youtube: "https://www.youtube.com/@ergosumxlabs",
    github: "https://github.com/nilayparikh",
  },
} as const;

/* ─── Navigation ───────────────────────────────────────────────────────── */

const NAV_ITEMS: NavItem[] = [{ label: "Courses", href: "/" }];

const FOOTER_LINKS: FooterLink[] = [
  { label: "Courses", href: "/" },
  { label: "Terms", href: "/terms/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "YouTube", href: BRAND.socials.youtube, external: true },
];

/* ─── Header & Footer ──────────────────────────────────────────────────── */

export const SITE_HEADER: TutorialHeaderProps = {
  siteName: BRAND.name,
  logoIconUrl: BRAND.logoIconUrlHeader,
  navItems: NAV_ITEMS,
  githubUrl: BRAND.socials.github,
  youtubeUrl: BRAND.socials.youtube,
  twitterUrl: BRAND.socials.twitter,
  linkedinUrl: BRAND.socials.linkedin,
};

export const SITE_FOOTER: TutorialFooterProps = {
  siteName: "LocalM\u2122",
  logoIconUrl: BRAND.logoIconUrlFooter,
  links: FOOTER_LINKS,
  githubUrl: BRAND.socials.github,
  youtubeUrl: BRAND.socials.youtube,
  twitterUrl: BRAND.socials.twitter,
  linkedinUrl: BRAND.socials.linkedin,
  hideFollowBar: true,
};

/** Convenience bundle — pass spread to TutorialLayout */
export const SITE_CONFIG = {
  header: SITE_HEADER,
  footer: SITE_FOOTER,
} as const;
