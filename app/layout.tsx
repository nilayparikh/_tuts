import type { Metadata } from "next";
import { TutorialGlobalStyles } from "@localm/tutorial-framework";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | LocalM Tutorials",
    default: "LocalM Tutorials — Learn by Building",
  },
  description:
    "Hands-on video tutorials covering AI agents, developer tools, and modern software engineering.",
  keywords: ["tutorials", "AI", "agents", "developer", "coding", "localm"],
  openGraph: {
    siteName: "LocalM Tutorials",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Geist + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Inject --tf-* CSS variables and base resets */}
        <TutorialGlobalStyles />
        {children}
      </body>
    </html>
  );
}
