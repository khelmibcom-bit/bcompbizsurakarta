"use client";

import { useState } from "react";

const faqs = [
  { question: "Apa itu Bcompbiz?", answer: "Bcompbiz adalah perusahaan teknologi dari Surakarta yang telah berdiri sejak 2000. Kami mengembangkan solusi digital berbasis AI untuk berbagai kebutuhan bisnis dan individu." },
  { question: "Teknologi apa yang digunakan?", answer: "Kami menggunakan stack modern: Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, dan berbagai AI engine (Gemini, Claude, OpenAI, Grok)." },
  { question: "Apakah Family Health AI gratis?", answer: "Ya, Family Health AI menyediakan akses gratis sebagai pengguna tamu. Login dengan Google untuk menyimpan data dan analisis personal." },
  { question: "Apakah Ahli Investasi tersedia di mobile?", answer: "Ya, tersedia sebagai aplikasi Android melalui Capacitor. Sedang dalam proses review untuk Play Store." },
  { question: "Bagaimana cara menghubungi Bcompbiz?", answer: "WhatsApp di 0812-2791-6969 atau email info@bcompbizsurakarta.com. Jam operasional Senin-Sabtu 08:00-17:00 WIB." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-editorial bg-white">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-4">
            <span className="label-editorial block mb-4">FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
              Pertanyaan <span className="italic text-gold">Umum</span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left group"
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-display text-base md:text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-warm-gray flex-shrink-0 mt-1 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-48 pb-5 md:pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-warm-gray text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
