import type { Metadata } from "next";
import {
  TutorialGlobalStyles,
  ThemeProvider,
} from "@localm/tutorial-framework";
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
        {/* Google Fonts: Inter (Variable) + JetBrains Mono + Material Symbols */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Inject --tf-* CSS variables and base resets */}
        <TutorialGlobalStyles />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
