import type { Metadata } from "next";
import {
  TutorialGlobalStyles,
  ThemeProvider,
} from "@localm/tutorial-framework";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    template: "%s | LocalM\u2122 Tuts",
    default: "LocalM\u2122 Tuts \u2014 Learn by Building",
  },
  description:
    "Hands-on video tutorials covering AI agents, developer tools, and modern software engineering.",
  keywords: ["tutorials", "AI", "agents", "developer", "coding", "localm"],
  openGraph: {
    siteName: "LocalM\u2122 Tuts",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brand/og-image-template-1200x630.png",
        width: 1200,
        height: 630,
        alt: "LocalM\u2122 Tuts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/og-image-template-1200x630.png"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/brand/icon-mark-gradient-32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/brand/icon-mark-gradient-64.png",
        type: "image/png",
        sizes: "64x64",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/brand/icon-mark-gradient-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts: Outfit + Share Tech Mono (brand), Inter + JetBrains Mono (content/code) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Outfit:wght@100..900&family=Share+Tech+Mono&display=swap"
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
