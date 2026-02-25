/**
 * SITE_CONFIG — shared header and footer props for this tutorial site.
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

const NAV_ITEMS: NavItem[] = [
  { label: "Course", href: "/" },
  { label: "About", href: "/about/" },
];

const FOOTER_LINKS: FooterLink[] = [
  { label: "Course Overview", href: "/" },
  {
    label: "GitHub",
    href: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
    external: true,
  },
  { label: "YouTube", href: "https://youtube.com/@localm", external: true },
];

export const SITE_HEADER: TutorialHeaderProps = {
  siteName: "LocalM Tutorials",
  navItems: NAV_ITEMS,
  githubUrl: "https://github.com/nilayparikh/a2a-agent2agent-protocol",
  youtubeUrl: "https://youtube.com/@localm",
};

export const SITE_FOOTER: TutorialFooterProps = {
  siteName: "LocalM Tutorials",
  tagline: "Hands-on video tutorials — learn by building real projects.",
  links: FOOTER_LINKS,
  githubUrl: "https://github.com/nilayparikh",
  youtubeUrl: "https://youtube.com/@localm",
  twitterUrl: "https://x.com/nilayparikh",
  linkedinUrl: "https://linkedin.com/in/nilayparikh",
};

/** Convenience bundle — pass spread to TutorialLayout */
export const SITE_CONFIG = {
  header: SITE_HEADER,
  footer: SITE_FOOTER,
} as const;
