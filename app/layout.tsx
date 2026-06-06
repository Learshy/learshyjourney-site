import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://learshy.github.io/learshyjourney-site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "learshyjourney - Crypto, AI, and Modern Tools",
    template: "%s | learshyjourney"
  },
  description:
    "A modern Telegram channel for crypto updates, AI tools, automation workflows, and curated digital resources.",
  applicationName: "learshyjourney",
  keywords: [
    "learshyjourney",
    "Learshy",
    "Telegram channel",
    "crypto updates",
    "AI tools",
    "automation",
    "productivity tools",
    "digital resources"
  ],
  authors: [{ name: "Learshy", url: "https://t.me/LearshyZx" }],
  creator: "Learshy",
  publisher: "Learshy",
  openGraph: {
    title: "learshyjourney - Crypto, AI, and Modern Tools",
    description:
      "Daily updates about crypto, AI tools, automation, and modern digital resources.",
    url: siteUrl,
    siteName: "learshyjourney",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "learshyjourney preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "learshyjourney",
    description:
      "Crypto, AI tools, automation workflows, and modern digital resources.",
    images: ["/og.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
