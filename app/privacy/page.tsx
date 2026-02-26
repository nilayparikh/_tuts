import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  Paragraph,
  InfoBox,
  NoteBox,
  TipBox,
  WarningBox,
} from "@localm/tutorial-framework";
import { SITE_CONFIG, BRAND } from "@/config/site";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for LocalM\u2122 Tuts — how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | LocalM\u2122 Tuts",
    description: "Privacy policy for LocalM\u2122 Tuts.",
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
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "var(--tf-text-sm)",
    fontFamily: "var(--tf-font-body)",
  },
  th: {
    textAlign: "left" as const,
    padding: "var(--tf-space-3) var(--tf-space-4)",
    borderBottom: "2px solid var(--tf-border-default)",
    color: "var(--tf-text-primary)",
    fontWeight: 600,
    fontSize: "var(--tf-text-xs)",
    textTransform: "uppercase" as const,
    letterSpacing: "var(--tf-tracking-wide)",
  },
  td: {
    padding: "var(--tf-space-3) var(--tf-space-4)",
    borderBottom: "1px solid var(--tf-border-subtle)",
    color: "var(--tf-text-secondary)",
    verticalAlign: "top" as const,
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/privacy/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      <HeroSection
        eyebrow="Legal"
        headline="Privacy Policy"
        subheading="How we collect, use, and protect your information."
        tags={["Privacy", "GDPR", "Data Protection"]}
      />

      <div style={s.effectiveDate}>
        Effective Date: February 26, 2026 &middot; Last Updated: February 26,
        2026
      </div>

      {/* ── Plain-Language Summary ─────────────────────────────────────── */}
      <SectionDivider label="Summary (Plain Language)" />

      <InfoBox title="Privacy at a Glance">
        Here is a quick overview. The full policy follows below.
      </InfoBox>

      <div style={s.section}>
        <Paragraph>
          <strong>What we collect:</strong> Basic analytics data (pages visited,
          time on page, device type, approximate location by country) via Google
          Analytics. We do not collect names, emails, or personal identifiers.
        </Paragraph>
        <Paragraph>
          <strong>Why:</strong> To understand which tutorials are popular, how
          visitors navigate the site, and to improve content quality.
        </Paragraph>
        <Paragraph>
          <strong>Cookies:</strong> Google Analytics sets cookies to distinguish
          users. No advertising or tracking cookies are used.
        </Paragraph>
        <Paragraph>
          <strong>Your rights:</strong> Under GDPR and similar laws, you can opt
          out of analytics tracking, request data deletion, or ask us what data
          we hold. Details in the GDPR section below.
        </Paragraph>
        <Paragraph>
          <strong>Third parties:</strong> We share no data with third parties
          beyond what Google Analytics processes on our behalf.
        </Paragraph>
      </div>

      {/* ── Full Policy ────────────────────────────────────────────────── */}
      <SectionDivider label="Full Privacy Policy" />

      {/* 1. Introduction */}
      <div style={s.section}>
        <h2 style={s.heading}>1. Introduction</h2>
        <p style={s.legalText}>
          This Privacy Policy explains how LocalM™ (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and safeguards
          information when you visit the LocalM™ Tuts website (&ldquo;the
          Site&rdquo;). We are committed to protecting your privacy and
          processing data in compliance with the General Data Protection
          Regulation (GDPR), the UK Data Protection Act, the California Consumer
          Privacy Act (CCPA), and other applicable data protection laws.
        </p>
      </div>

      {/* 2. Data Controller */}
      <div style={s.section}>
        <h2 style={s.heading}>2. Data Controller</h2>
        <p style={s.legalText}>
          The data controller for this Site is LocalM™. For any privacy-related
          inquiries, contact us via the social channels listed on the Site or
          through our GitHub repository.
        </p>
      </div>

      {/* 3. What We Collect */}
      <div style={s.section}>
        <h2 style={s.heading}>3. Information We Collect</h2>

        <h3 style={s.subheading}>3.1 Information Collected Automatically</h3>
        <p style={s.legalText}>
          When you visit the Site, Google Analytics (GA4) automatically
          collects:
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Data Type</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Legal Basis (GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>Pages visited, time on page</td>
              <td style={s.td}>Understand content engagement</td>
              <td style={s.td}>Legitimate interest</td>
            </tr>
            <tr>
              <td style={s.td}>Device type, browser, OS</td>
              <td style={s.td}>Ensure compatibility</td>
              <td style={s.td}>Legitimate interest</td>
            </tr>
            <tr>
              <td style={s.td}>Approximate location (country level)</td>
              <td style={s.td}>Understand audience geography</td>
              <td style={s.td}>Legitimate interest</td>
            </tr>
            <tr>
              <td style={s.td}>Referral source (how you found us)</td>
              <td style={s.td}>Measure marketing effectiveness</td>
              <td style={s.td}>Legitimate interest</td>
            </tr>
            <tr>
              <td style={s.td}>Anonymized IP address</td>
              <td style={s.td}>GA4 IP anonymization (default)</td>
              <td style={s.td}>Legitimate interest</td>
            </tr>
          </tbody>
        </table>

        <h3 style={s.subheading}>3.2 Information We Do Not Collect</h3>
        <ul style={s.list}>
          <li>Names, email addresses, or contact information.</li>
          <li>Payment or financial information.</li>
          <li>Social media account details.</li>
          <li>
            Any user-generated content or account data (the Site has no
            accounts).
          </li>
        </ul>
      </div>

      {/* 4. Google Analytics */}
      <div style={s.section}>
        <h2 style={s.heading}>4. Google Analytics</h2>
        <p style={s.legalText}>
          We use Google Analytics 4 (GA4), a web analytics service provided by
          Google LLC (&ldquo;Google&rdquo;). GA4 uses cookies and similar
          technologies to collect and analyze information about how visitors use
          the Site.
        </p>
        <ul style={s.list}>
          <li>
            <strong>Provider:</strong> Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA.
          </li>
          <li>
            <strong>Data Processing:</strong> Google may process data on servers
            outside the EEA. Google participates in the EU-U.S. Data Privacy
            Framework.
          </li>
          <li>
            <strong>IP Anonymization:</strong> GA4 anonymizes IP addresses by
            default. We do not collect or store full IP addresses.
          </li>
          <li>
            <strong>Data Retention:</strong> Analytics data is retained for 14
            months, after which it is automatically deleted.
          </li>
          <li>
            <strong>No Advertising Features:</strong> We have not enabled Google
            Ads, remarketing, or demographic reporting features.
          </li>
        </ul>
        <TipBox title="Opt Out of Google Analytics">
          You can opt out by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)" }}
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          , or by disabling cookies in your browser settings.
        </TipBox>
      </div>

      {/* 5. Cookies */}
      <div style={s.section}>
        <h2 style={s.heading}>5. Cookies</h2>
        <p style={s.legalText}>
          Cookies are small text files stored on your device. The Site uses the
          following types of cookies:
        </p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Cookie</th>
              <th style={s.th}>Provider</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}>_ga</td>
              <td style={s.td}>Google Analytics</td>
              <td style={s.td}>Distinguish unique users</td>
              <td style={s.td}>2 years</td>
            </tr>
            <tr>
              <td style={s.td}>_ga_*</td>
              <td style={s.td}>Google Analytics</td>
              <td style={s.td}>Persist session state</td>
              <td style={s.td}>2 years</td>
            </tr>
          </tbody>
        </table>
        <p style={s.legalText}>
          We do not use advertising cookies, social media tracking cookies, or
          any third-party cookies beyond Google Analytics.
        </p>
      </div>

      {/* 6. GDPR */}
      <SectionDivider label="GDPR Compliance" />

      <div style={s.section}>
        <h2 style={s.heading}>6. Your Rights Under GDPR</h2>
        <p style={s.legalText}>
          If you are located in the European Economic Area (EEA), the United
          Kingdom, or Switzerland, you have the following rights under the
          General Data Protection Regulation:
        </p>

        <h3 style={s.subheading}>6.1 Right of Access (Article 15)</h3>
        <p style={s.legalText}>
          You have the right to request a copy of the personal data we hold
          about you. Since we only collect anonymized analytics data, individual
          data access requests will typically return no personally identifiable
          information.
        </p>

        <h3 style={s.subheading}>6.2 Right to Rectification (Article 16)</h3>
        <p style={s.legalText}>
          You may request correction of inaccurate personal data. As we do not
          collect personal identifiers, this right has limited applicability to
          our processing activities.
        </p>

        <h3 style={s.subheading}>6.3 Right to Erasure (Article 17)</h3>
        <p style={s.legalText}>
          You have the right to request deletion of your personal data. You can
          exercise this right by clearing your browser cookies and opting out of
          Google Analytics. We can also request deletion of your data from
          Google Analytics on your behalf.
        </p>

        <h3 style={s.subheading}>
          6.4 Right to Restrict Processing (Article 18)
        </h3>
        <p style={s.legalText}>
          You may request that we restrict processing of your data. This can be
          achieved by opting out of analytics as described in Section 4.
        </p>

        <h3 style={s.subheading}>6.5 Right to Data Portability (Article 20)</h3>
        <p style={s.legalText}>
          You have the right to receive your personal data in a structured,
          commonly used, and machine-readable format. Given the anonymized
          nature of our data collection, this right is of limited applicability.
        </p>

        <h3 style={s.subheading}>6.6 Right to Object (Article 21)</h3>
        <p style={s.legalText}>
          You have the right to object to the processing of your personal data
          based on legitimate interest. To exercise this right, opt out of
          Google Analytics using the browser add-on or cookie settings.
        </p>

        <h3 style={s.subheading}>6.7 Right to Lodge a Complaint</h3>
        <p style={s.legalText}>
          You have the right to lodge a complaint with your local data
          protection supervisory authority if you believe our processing of your
          personal data infringes the GDPR.
        </p>

        <WarningBox title="Exercising Your Rights">
          To exercise any of these rights, please contact us via the channels
          listed in the Contact section. We will respond within 30 days as
          required by GDPR.
        </WarningBox>
      </div>

      {/* 7. Legal Basis */}
      <div style={s.section}>
        <h2 style={s.heading}>7. Legal Basis for Processing</h2>
        <p style={s.legalText}>
          Under GDPR Article 6, our legal basis for processing analytics data is{" "}
          <strong>legitimate interest</strong> (Article 6(1)(f)) — specifically,
          our interest in understanding how visitors use the Site to improve
          content and user experience. We have conducted a Legitimate Interest
          Assessment and determined that this processing does not override your
          rights and freedoms, given:
        </p>
        <ul style={s.list}>
          <li>All data is anonymized and aggregated.</li>
          <li>No personal identifiers are collected.</li>
          <li>You can easily opt out at any time.</li>
          <li>The processing is limited to analytics purposes only.</li>
        </ul>
      </div>

      {/* 8. International Transfers */}
      <div style={s.section}>
        <h2 style={s.heading}>8. International Data Transfers</h2>
        <p style={s.legalText}>
          Google Analytics may process data outside the EEA. Google relies on
          Standard Contractual Clauses (SCCs) and the EU-U.S. Data Privacy
          Framework as legal mechanisms for international data transfers. For
          more information, see{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)" }}
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* 9. Data Security */}
      <div style={s.section}>
        <h2 style={s.heading}>9. Data Security</h2>
        <p style={s.legalText}>
          The Site is served as static HTML over HTTPS. We do not operate
          databases, user accounts, or backend servers that store personal data.
          Analytics data is secured by Google&apos;s infrastructure in
          accordance with their security certifications (ISO 27001, SOC 2).
        </p>
      </div>

      {/* 10. Children */}
      <div style={s.section}>
        <h2 style={s.heading}>10. Children&apos;s Privacy</h2>
        <p style={s.legalText}>
          The Site is not directed at children under 16 years of age. We do not
          knowingly collect personal data from children. If you believe a child
          has provided us with personal data, please contact us and we will
          promptly delete it.
        </p>
      </div>

      {/* 11. Third-Party Links */}
      <div style={s.section}>
        <h2 style={s.heading}>11. Third-Party Links</h2>
        <p style={s.legalText}>
          The Site contains links to external websites (GitHub, YouTube, social
          media platforms). We are not responsible for the privacy practices of
          these third-party sites. We encourage you to review their privacy
          policies.
        </p>
      </div>

      {/* 12. Changes */}
      <div style={s.section}>
        <h2 style={s.heading}>12. Changes to This Policy</h2>
        <p style={s.legalText}>
          We may update this Privacy Policy to reflect changes in our practices
          or for legal, operational, or regulatory reasons. The updated policy
          will be posted on this page with a revised effective date. Material
          changes will be noted at the top of the policy.
        </p>
      </div>

      {/* 13. Contact */}
      <div style={s.section}>
        <h2 style={s.heading}>13. Contact</h2>
        <p style={s.legalText}>
          For privacy-related questions or to exercise your data rights, please
          reach out via our social channels listed on the Site or open an issue
          on our GitHub repository.
        </p>
      </div>

      <NoteBox title="Last Updated">
        This Privacy Policy was last updated on February 26, 2026.
      </NoteBox>
    </TutorialLayout>
  );
}
