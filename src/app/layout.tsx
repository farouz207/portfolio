import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const metadata: Metadata = {
  title: PORTFOLIO_DATA.meta.siteTitle,
  description: PORTFOLIO_DATA.meta.siteDescription,
  keywords: [
    "Farouz",
    "Digital Creator",
    "Portfolio Éditorial",
    "Développeur",
    "Intelligence Artificielle",
    "Conception de produits numériques",
    "Entrepreneuriat",
    "Cotonou",
    "Bénin",
    "UCAO-UUC",
    "BLOOM",
    "FLOWRISH",
    "PARADOXE",
  ],
  authors: [{ name: PORTFOLIO_DATA.identity.name }],
  creator: PORTFOLIO_DATA.identity.name,
  openGraph: {
    title: PORTFOLIO_DATA.meta.siteTitle,
    description: PORTFOLIO_DATA.meta.siteDescription,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: PORTFOLIO_DATA.meta.siteTitle,
    description: PORTFOLIO_DATA.meta.siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400..600;1,400..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-ivory antialiased selection:bg-ivory selection:text-obsidian relative min-h-screen">
        {/* Subtle fixed editorial print grain overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 editorial-grain opacity-90"
        />
        {children}
      </body>
    </html>
  );
}

