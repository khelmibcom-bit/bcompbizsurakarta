"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apa itu Bcompbiz?",
    answer:
      "Bcompbiz adalah studio pengembangan perangkat lunak dari Indonesia yang berfokus pada pembuatan solusi digital inovatif berbasis kecerdasan buatan (AI). Kami membangun produk-produk seperti Family Health AI dan Ahli Investasi.",
  },
  {
    question: "Teknologi apa yang digunakan Bcompbiz?",
    answer:
      "Kami menggunakan stack modern seperti Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, dan berbagai AI engine (Gemini, Claude, OpenAI, Grok). Semua produk kami dibangun dengan standar industri tertinggi.",
  },
  {
    question: "Apakah Family Health AI bisa digunakan gratis?",
    answer:
      "Ya, Family Health AI menyediakan akses gratis sebagai pengguna tamu. Anda juga bisa login dengan Google untuk menyimpan data kesehatan dan mendapatkan analisis yang lebih personal.",
  },
  {
    question: "Apakah Ahli Investasi tersedia di mobile?",
    answer:
      "Ya, Ahli Investasi tersedia sebagai aplikasi Android melalui Capacitor. Aplikasi ini sedang dalam proses review untuk Play Store.",
  },
  {
    question: "Bagaimana cara menghubungi Bcompbiz?",
    answer:
      "Anda bisa menghubungi kami melalui email di contact@bcompbiz.id atau WhatsApp. Silakan scroll ke bagian kontak di bawah halaman ini.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-neon-purple uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pertanyaan yang{" "}
            <span className="gradient-text">Sering Diajukan</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
