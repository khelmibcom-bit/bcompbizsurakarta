import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
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
  metadataBase: new URL("https://dev.khelmi.biz.id"),
  title: "Bcompbiz | Software Development Studio",
  description:
    "Studio pengembangan perangkat lunak premium dari Indonesia. Membangun solusi digital inovatif berbasis AI untuk masa depan.",
  keywords: ["software development", "web development", "AI", "mobile app", "bcompbiz", "indonesia"],
  authors: [{ name: "Bcompbiz" }],
  openGraph: {
    title: "Bcompbiz | Software Development Studio",
    description: "Studio pengembangan perangkat lunak premium dari Indonesia.",
    url: "https://dev.khelmi.biz.id",
    siteName: "Bcompbiz",
    locale: "id_ID",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://dev.khelmi.biz.id" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bcompbiz",
  url: "https://dev.khelmi.biz.id",
  telephone: "+6281227916969",
  email: "info@bcompbizsurakarta.com",
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cluster Grand Permata Blok Ruby No 70",
    addressLocality: "Karanganyar",
    addressRegion: "Surakarta",
    addressCountry: "ID",
  },
  sameAs: ["https://bcompbizsurakarta.com"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${outfit.variable} ${jetbrains.variable}`}>
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
