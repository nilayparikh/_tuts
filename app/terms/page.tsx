import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  Paragraph,
  InfoBox,
  NoteBox,
  WarningBox,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using LocalM\u2122 Tuts — our educational tutorial platform.",
  openGraph: {
    title: "Terms & Conditions | LocalM\u2122 Tuts",
    description: "Terms and conditions for using LocalM\u2122 Tuts.",
    type: "article",
  },
};

// ─── Styles ───────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--tf-space-4)",
  },
  heading: {
    fontFamily: "var(--tf-font-display)",
    fontWeight: 700,
    fontSize: "var(--tf-text-lg)",
    color: "var(--tf-text-primary)",
    margin: 0,
  },
  subheading: {
    fontFamily: "var(--tf-font-display)",
    fontWeight: 600,
    fontSize: "var(--tf-text-md)",
    color: "var(--tf-text-primary)",
    margin: 0,
  },
  legalText: {
    fontFamily: "var(--tf-font-body)",
    fontSize: "var(--tf-text-sm)",
    color: "var(--tf-text-secondary)",
    lineHeight: 1.7,
    margin: 0,
  },
  list: {
    fontFamily: "var(--tf-font-body)",
    fontSize: "var(--tf-text-sm)",
    color: "var(--tf-text-secondary)",
    lineHeight: 1.7,
    paddingLeft: "1.5rem",
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--tf-space-2)",
  },
  effectiveDate: {
    fontFamily: "var(--tf-font-mono)",
    fontSize: "var(--tf-text-xs)",
    color: "var(--tf-text-muted)",
    padding: "var(--tf-space-2) var(--tf-space-4)",
    borderLeft: "3px solid var(--tf-border-default)",
    background: "var(--tf-bg-surface)",
    borderRadius: "var(--tf-radius-sm)",
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function TermsPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/terms/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      <HeroSection
        eyebrow="Legal"
        headline="Terms & Conditions"
        subheading="Please read these terms carefully before using our platform."
        tags={["Legal", "Terms", "Conditions"]}
      />

      <div style={s.effectiveDate}>
        Effective Date: February 26, 2026 &middot; Last Updated: February 26,
        2026
      </div>

      {/* ── Plain-Language Summary ─────────────────────────────────────── */}
      <SectionDivider label="Summary (Plain Language)" />

      <InfoBox title="Quick Summary">
        This is a simplified overview. The full legal terms below govern your
        use of the site.
      </InfoBox>

      <div style={s.section}>
        <Paragraph>
          <strong>What this site is:</strong> LocalM™ Tuts is an educational
          platform that provides video tutorials, articles, and interactive
          lessons about software engineering and AI.
        </Paragraph>
        <Paragraph>
          <strong>What you can do:</strong> View tutorials, follow along with
          code examples, and learn at your own pace — all for personal and
          educational use.
        </Paragraph>
        <Paragraph>
          <strong>What you cannot do:</strong> Redistribute, resell, or
          republish our content. Do not scrape, mirror, or use automated tools
          to copy our material.
        </Paragraph>
        <Paragraph>
          <strong>Your privacy:</strong> We use Google Analytics to understand
          how visitors use the site. See our{" "}
          <a
            href="/privacy/"
            style={{ color: "var(--tf-color-primary-light)" }}
          >
            Privacy Policy
          </a>{" "}
          for details.
        </Paragraph>
      </div>

      {/* ── Full Terms ─────────────────────────────────────────────────── */}
      <SectionDivider label="Full Terms & Conditions" />

      {/* 1. Acceptance */}
      <div style={s.section}>
        <h2 style={s.heading}>1. Acceptance of Terms</h2>
        <p style={s.legalText}>
          By accessing or using the LocalM™ Tuts website (&ldquo;the
          Site&rdquo;), operated by LocalM™ (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;), you agree to be bound by these Terms &amp;
          Conditions (&ldquo;Terms&rdquo;). If you do not agree, you must not
          use the Site.
        </p>
      </div>

      {/* 2. Intellectual Property */}
      <div style={s.section}>
        <h2 style={s.heading}>2. Intellectual Property &amp; Copyright</h2>
        <p style={s.legalText}>
          All content on this Site — including but not limited to text,
          graphics, logos, icons, images, video tutorials, audio content, code
          samples, and the underlying source code of the Site — is the exclusive
          property of LocalM™ and is protected by international copyright and
          intellectual property laws.
        </p>
        <WarningBox title="Copyright Notice">
          {BRAND.copyright}. Unauthorized reproduction, distribution, or
          modification of any content is strictly prohibited and may result in
          legal action.
        </WarningBox>
        <ul style={s.list}>
          <li>
            You may view, download, and print pages for personal,
            non-commercial, educational use only.
          </li>
          <li>
            You must retain all copyright and proprietary notices on any copies.
          </li>
          <li>
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, or otherwise exploit any content without prior
            written consent.
          </li>
          <li>
            Code samples provided in tutorials are for educational purposes. You
            may use them in your own projects but may not redistribute them as
            standalone educational content.
          </li>
        </ul>
      </div>

      {/* 3. Use of the Site */}
      <div style={s.section}>
        <h2 style={s.heading}>3. Permitted &amp; Prohibited Use</h2>
        <h3 style={s.subheading}>3.1 Permitted Use</h3>
        <ul style={s.list}>
          <li>Accessing and viewing educational content for personal study.</li>
          <li>Using code examples from tutorials in your own projects.</li>
          <li>
            Sharing links to the Site on social media or in educational contexts
            (with proper attribution).
          </li>
        </ul>
        <h3 style={s.subheading}>3.2 Prohibited Use</h3>
        <ul style={s.list}>
          <li>
            Scraping, crawling, or using automated tools to extract content.
          </li>
          <li>
            Mirroring, republishing, or creating derivative educational content
            from our tutorials.
          </li>
          <li>
            Using the Site for any unlawful purpose or in a manner that could
            damage or impair it.
          </li>
          <li>
            Attempting to gain unauthorized access to any part of the Site or
            its infrastructure.
          </li>
          <li>
            Removing or altering any copyright, trademark, or proprietary
            notices.
          </li>
        </ul>
      </div>

      {/* 4. Disclaimer of Warranties */}
      <div style={s.section}>
        <h2 style={s.heading}>4. Disclaimer of Warranties</h2>
        <p style={s.legalText}>
          The Site and its content are provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; without warranties of any kind, either
          express or implied. We do not warrant that the content is accurate,
          complete, current, or error-free. Tutorial code is provided for
          educational purposes and should not be used in production systems
          without appropriate review and testing.
        </p>
      </div>

      {/* 5. Limitation of Liability */}
      <div style={s.section}>
        <h2 style={s.heading}>5. Limitation of Liability</h2>
        <p style={s.legalText}>
          To the fullest extent permitted by law, LocalM™ shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of or inability to use the Site, even if
          we have been advised of the possibility of such damages.
        </p>
      </div>

      {/* 6. Third-Party Links */}
      <div style={s.section}>
        <h2 style={s.heading}>6. Third-Party Links &amp; Services</h2>
        <p style={s.legalText}>
          The Site may contain links to third-party websites, GitHub
          repositories, or external services. We are not responsible for the
          content, privacy practices, or terms of any third-party sites. Your
          use of third-party services is at your own risk and subject to their
          respective terms.
        </p>
      </div>

      {/* 7. Analytics */}
      <div style={s.section}>
        <h2 style={s.heading}>7. Analytics &amp; Cookies</h2>
        <p style={s.legalText}>
          We use Google Analytics to collect anonymized usage data to improve
          the Site. By using the Site, you consent to the processing of data by
          Google Analytics in the manner described in our{" "}
          <a
            href="/privacy/"
            style={{ color: "var(--tf-color-primary-light)" }}
          >
            Privacy Policy
          </a>
          . We do not use advertising cookies.
        </p>
      </div>

      {/* 8. Modifications */}
      <div style={s.section}>
        <h2 style={s.heading}>8. Changes to These Terms</h2>
        <p style={s.legalText}>
          We reserve the right to modify these Terms at any time. Changes will
          be posted on this page with an updated effective date. Your continued
          use of the Site after changes are posted constitutes acceptance of the
          revised Terms.
        </p>
      </div>

      {/* 9. Governing Law */}
      <div style={s.section}>
        <h2 style={s.heading}>9. Governing Law</h2>
        <p style={s.legalText}>
          These Terms shall be governed by and construed in accordance with
          applicable laws. Any disputes arising from these Terms shall be
          resolved through appropriate legal channels.
        </p>
      </div>

      {/* 10. Contact */}
      <div style={s.section}>
        <h2 style={s.heading}>10. Contact</h2>
        <p style={s.legalText}>
          For questions about these Terms, please reach out via our social
          channels listed on the Site, or open an issue on our GitHub
          repository.
        </p>
      </div>

      <NoteBox title="Last Updated">
        These Terms &amp; Conditions were last updated on February 26, 2026.
      </NoteBox>
    </TutorialLayout>
  );
}
