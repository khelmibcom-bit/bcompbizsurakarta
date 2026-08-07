import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bcompbiz Surakarta | Membangun Masa Depan Digital",
  description:
    "Perusahaan software development dari Surakarta. Membangun solusi digital inovatif untuk masa depan. Spesialis AI, web app, dan mobile development.",
  keywords: [
    "software development",
    "surakarta",
    "web development",
    "AI",
    "mobile app",
    "bcompbiz",
    "solo",
    "indonesia",
  ],
  authors: [{ name: "Bcompbiz Surakarta" }],
  openGraph: {
    title: "Bcompbiz Surakarta | Membangun Masa Depan Digital",
    description:
      "Perusahaan software development dari Surakarta. Membangun solusi digital inovatif untuk masa depan.",
    url: "https://bcompbizsurakarta.com",
    siteName: "Bcompbiz Surakarta",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bcompbiz Surakarta | Membangun Masa Depan Digital",
    description:
      "Perusahaan software development dari Surakarta. Membangun solusi digital inovatif untuk masa depan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-dark-950 text-slate-200 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
