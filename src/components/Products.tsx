"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const products = [
  {
    num: "01",
    name: "Family Health AI",
    tagline: "Platform Kesehatan Preventif Berbasis AI",
    description: "Platform kesehatan preventif personal yang menggunakan kecerdasan buatan untuk memantau, menganalisis, dan memberikan rekomendasi kesehatan proaktif untuk seluruh keluarga.",
    url: "https://health.khelmi.biz.id",
    features: [
      { name: "Habits OS", desc: "Sistem manajemen kebiasaan harian untuk membentuk pola hidup sehat yang berkelanjutan" },
      { name: "Analisis Lab (OCR)", desc: "Upload hasil lab, sistem ekstrak dan analisis data secara otomatis dengan AI" },
      { name: "Body Composition (BMI)", desc: "Analisis komposisi tubuh meliputi BMI, body fat, massa otot, dan visceral fat" },
      { name: "Health Score Real-time", desc: "Skor kesehatan 0-100 dengan penjelasan kontributor positif dan negatif" },
      { name: "Deteksi Risiko Dini", desc: "Sistem peringatan dini untuk risiko kardiovaskular, metabolik, dan lainnya" },
      { name: "AI Chat Konsultasi", desc: "Tanya AI kapan saja untuk rekomendasi kesehatan personal" },
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "AI/ML"],
  },
  {
    num: "02",
    name: "Ahli Investasi",
    tagline: "Dashboard Investasi Real-Time dengan Multi-AI",
    description: "Platform dashboard investasi cerdas yang mengorkestrasi multiple AI engine untuk analisis pasar kripto, saham IDX, US Stock, dan emas secara real-time untuk trading dan investasi jangka panjang.",
    url: "https://trade.khelmi.biz.id",
    features: [
      { name: "Portfolio Doctor", desc: "Diagnosa kesehatan portofolio dengan analisis diversifikasi, HHI, dan risk score" },
      { name: "AI Analyze", desc: "Analisis mendalam dari 4 AI engine (Gemini, Claude, OpenAI, Grok) dengan consensus voting" },
      { name: "Trade Mentor", desc: "Edukasi trading personal dengan rekomendasi entry/exit berbasis AI" },
      { name: "Full Stack Support", desc: "Dukungan penuh untuk Kripto, Saham IDX, US Stock, dan Emas" },
      { name: "Trading & Investasi", desc: "Analisis untuk trading jangka pendek dan investasi jangka panjang" },
      { name: "Market Timing Agent", desc: "Rekomendasi timing Entry/Wait/DCA berbasis analisis teknikal dan sentimen" },
    ],
    tech: ["Next.js 16", "TypeScript", "Prisma", "Neon", "Capacitor"],
  },
];

export default function Products() {
  return (
    <section id="produk" className="py-12 md:py-20 lg:py-28">
      <div className="container-tech">
        <AnimateOnScroll>
          <div className="mb-12 md:mb-16">
            <span className="label block mb-4">Produk Kami</span>
            <h2 className="heading-lg">Solusi Digital <span className="text-gradient">Nyata</span></h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-8">
          {products.map((product, i) => (
            <AnimateOnScroll key={product.name} delay={i * 150}>
              <div className="card-tech p-5 sm:p-6 md:p-8">
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm text-accent">{product.num}</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="heading-md mb-1">{product.name}</h3>
                    <p className="label mb-3">{product.tagline}</p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono text-text-secondary border border-border rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors">
                      Kunjungi Produk
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                  <div className="lg:col-span-5">
                    <h4 className="label mb-3">Fitur Utama</h4>
                    <div className="space-y-0">
                      {product.features.map((feature) => (
                        <div key={feature.name} className="py-2.5 border-b border-border last:border-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-sm font-semibold text-text">{feature.name}</span>
                          </div>
                          <p className="text-xs text-text-secondary pl-3.5 leading-relaxed">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
