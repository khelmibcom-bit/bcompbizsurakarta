"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  { q: "Apa itu Bcompbiz?", a: "Bcompbiz adalah perusahaan teknologi dari Surakarta yang telah berdiri sejak 2000. Kami mengembangkan solusi digital berbasis AI." },
  { q: "Teknologi apa yang digunakan?", a: "Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, dan berbagai AI engine (Gemini, Claude, OpenAI, Grok)." },
  { q: "Apakah Family Health AI gratis?", a: "Ya, tersedia akses gratis sebagai pengguna tamu. Login dengan Google untuk data dan analisis personal." },
  { q: "Apakah Ahli Investasi tersedia di mobile?", a: "Ya, tersedia sebagai aplikasi Android melalui Capacitor." },
  { q: "Bagaimana cara menghubungi Bcompbiz?", a: "WhatsApp di 0812-2791-6969 atau email cs@bcomp-online.id." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-32 lg:py-40">
      <div className="container-tech">
        <div className="grid lg:grid-cols-12 gap-8">
          <AnimateOnScroll className="lg:col-span-4">
            <span className="label block mb-4">FAQ</span>
            <h2 className="heading-lg">Pertanyaan <span className="text-gradient">Umum</span></h2>
          </AnimateOnScroll>
          <div className="lg:col-span-8">
            <div className="divide-y divide-border">
              {faqs.map((f, i) => (
                <AnimateOnScroll key={i} delay={i * 80}>
                  <div>
                    <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start justify-between gap-4 py-5 text-left group" aria-expanded={open === i}>
                      <span className="text-base font-semibold text-text group-hover:text-accent transition-colors">{f.q}</span>
                      <svg className={`w-5 h-5 text-text-muted flex-shrink-0 mt-1 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                      <p className="text-text-secondary text-sm leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
