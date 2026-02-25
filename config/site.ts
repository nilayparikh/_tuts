/**
 * SITE_CONFIG — shared header and footer props used on every tutorial page.
 *
 * Edit this file to update the global site name, navigation, and social links.
 * All tutorial pages import SITE_CONFIG from here — one change propagates everywhere.
 */

import type {
  TutorialHeaderProps,
  TutorialFooterProps,
  NavItem,
  FooterLink,
} from "@localm/tutorial-framework";

const NAV_ITEMS: NavItem[] = [
  { label: "Tutorials", href: "/tutorials/" },
  { label: "Concepts", href: "/concepts/" },
  { label: "About", href: "/about/" },
];

const FOOTER_LINKS: FooterLink[] = [
  { label: "Tutorials", href: "/tutorials/" },
  { label: "Concepts", href: "/concepts/" },
  { label: "GitHub", href: "https://github.com/nilayparikh", external: true },
  { label: "YouTube", href: "https://youtube.com/@localm", external: true },
];

export const SITE_HEADER: TutorialHeaderProps = {
  siteName: "LocalM Tutorials",
  navItems: NAV_ITEMS,
  githubUrl: "https://github.com/nilayparikh",
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
