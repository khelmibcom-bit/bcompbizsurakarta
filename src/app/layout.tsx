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
    "Bcompbiz — Studio software development Indonesia. Bangun aplikasi AI, web & mobile dengan teknologi Next.js, React, TypeScript. Konsultasi gratis: 0812-2791-6969.",
  keywords: ["software development", "web development", "AI", "mobile app", "bcompbiz", "indonesia", "surakarta", "solo", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Bcompbiz" }],
  openGraph: {
    title: "Bcompbiz | Software Development Studio",
    description: "Studio pengembangan perangkat lunak premium dari Indonesia. Membangun solusi digital inovatif berbasis AI.",
    url: "https://khelmi.biz.id",
    siteName: "Bcompbiz",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bcompbiz Software Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bcompbiz | Software Development Studio",
    description: "Studio pengembangan perangkat lunak premium dari Indonesia.",
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
  alternates: { canonical: "https://khelmi.biz.id" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bcompbiz",
    alternateName: "Bcompbiz Surakarta",
    url: "https://khelmi.biz.id",
    telephone: "+6281227916969",
    email: "cs@bcomp-online.id",
    foundingDate: "2000",
    description: "Studio pengembangan perangkat lunak premium dari Indonesia. Spesialis AI, web app, dan mobile development.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cluster Grand Permata Blok Ruby No 70",
      addressLocality: "Karanganyar",
      addressRegion: "Surakarta",
      addressCountry: "ID",
      postalCode: "57716",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.5755,
      longitude: 110.8243,
    },
    sameAs: ["https://bcomp-online.id"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Family Health AI",
          url: "https://health.khelmi.biz.id",
          applicationCategory: "HealthApplication",
          description: "Platform kesehatan preventif berbasis AI.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Ahli Investasi",
          url: "https://trade.khelmi.biz.id",
          applicationCategory: "FinanceApplication",
          description: "Dashboard investasi real-time dengan multi-AI.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://khelmi.biz.id",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Bcompbiz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bcompbiz adalah perusahaan teknologi dari Surakarta yang mengembangkan solusi digital berbasis AI seperti Family Health AI dan Ahli Investasi.",
        },
      },
      {
        "@type": "Question",
        name: "Teknologi apa yang digunakan Bcompbiz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, dan berbagai AI engine (Gemini, Claude, OpenAI, Grok).",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara menghubungi Bcompbiz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WhatsApp di 0812-2791-6969 atau email cs@bcomp-online.id.",
        },
      },
    ],
  },
];

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
