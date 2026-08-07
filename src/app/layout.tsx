import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.khelmi.biz.id"),
  title: "Bcompbiz | Software Development Studio",
  description:
    "Studio pengembangan perangkat lunak dari Indonesia. Membangun solusi digital inovatif berbasis AI untuk masa depan. Spesialis web app, mobile, dan AI integration.",
  keywords: [
    "software development",
    "web development",
    "AI",
    "mobile app",
    "bcompbiz",
    "indonesia",
    "software studio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Bcompbiz" }],
  creator: "Bcompbiz",
  openGraph: {
    title: "Bcompbiz | Software Development Studio",
    description:
      "Studio pengembangan perangkat lunak dari Indonesia. Membangun solusi digital inovatif berbasis AI.",
    url: "https://dev.khelmi.biz.id",
    siteName: "Bcompbiz",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bcompbiz | Software Development Studio",
    description:
      "Studio pengembangan perangkat lunak dari Indonesia. Membangun solusi digital inovatif berbasis AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dev.khelmi.biz.id",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bcompbiz",
  url: "https://dev.khelmi.biz.id",
  description:
    "Studio pengembangan perangkat lunak dari Indonesia. Spesialis AI, web app, dan mobile development.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surakarta",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  sameAs: [],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Family Health AI",
        url: "https://health.khelmi.biz.id",
        applicationCategory: "HealthApplication",
        description:
          "Platform kesehatan preventif berbasis AI untuk memantau dan menganalisis kesehatan keluarga.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Ahli Investasi",
        url: "https://trade.khelmi.biz.id",
        applicationCategory: "FinanceApplication",
        description:
          "Dashboard investasi real-time dengan multi-AI untuk analisis kripto dan saham.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-dark-950 text-slate-200 antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neon-blue focus:text-white focus:rounded-lg"
        >
          Langsung ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
