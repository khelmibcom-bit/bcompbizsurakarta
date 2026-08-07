import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khelmi.biz.id"),
  title: "Bcompbiz | Software Development Studio",
  description:
    "Studio pengembangan perangkat lunak premium dari Indonesia. Membangun solusi digital inovatif berbasis AI untuk masa depan.",
  keywords: ["software development", "web development", "AI", "mobile app", "bcompbiz", "indonesia"],
  authors: [{ name: "Bcompbiz" }],
  openGraph: {
    title: "Bcompbiz | Software Development Studio",
    description: "Studio pengembangan perangkat lunak premium dari Indonesia.",
    url: "https://khelmi.biz.id",
    siteName: "Bcompbiz",
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://khelmi.biz.id" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bcompbiz",
  url: "https://khelmi.biz.id",
  telephone: "+6281227916969",
  email: "cs@bcomp-online.id",
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cluster Grand Permata Blok Ruby No 70",
    addressLocality: "Karanganyar",
    addressRegion: "Surakarta",
    addressCountry: "ID",
  },
  sameAs: ["https://bcomp-online.id"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-bg text-text font-sans antialiased">
        <div className="noise-overlay" />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white">
          Langsung ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
