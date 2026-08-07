import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
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
  keywords: [
    "software development",
    "web development",
    "AI",
    "mobile app",
    "bcompbiz",
    "indonesia",
    "software studio",
  ],
  authors: [{ name: "Bcompbiz" }],
  creator: "Bcompbiz",
  openGraph: {
    title: "Bcompbiz | Software Development Studio",
    description:
      "Studio pengembangan perangkat lunak premium dari Indonesia.",
    url: "https://dev.khelmi.biz.id",
    siteName: "Bcompbiz",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bcompbiz | Software Development Studio",
    description:
      "Studio pengembangan perangkat lunak premium dari Indonesia.",
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
  alternateName: "Bcompbiz Surakarta",
  url: "https://dev.khelmi.biz.id",
  description:
    "Studio pengembangan perangkat lunak premium dari Indonesia. Spesialis AI, web app, dan mobile development.",
  telephone: "+6281227916969",
  email: "info@bcompbizsurakarta.com",
  foundingDate: "2000",
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
  sameAs: ["https://bcompbizsurakarta.com", "https://wa.me/6281227916969"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Family Health AI",
        url: "https://health.khelmi.biz.id",
        applicationCategory: "HealthApplication",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Ahli Investasi",
        url: "https://trade.khelmi.biz.id",
        applicationCategory: "FinanceApplication",
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
    <html
      lang="id"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cream text-charcoal font-body antialiased">
        <div className="noise-overlay" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-navy focus:text-white"
        >
          Langsung ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
