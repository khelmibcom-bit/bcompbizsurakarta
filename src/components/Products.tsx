"use client";

const products = [
  {
    name: "Family Health AI",
    tagline: "Platform Kesehatan Preventif Berbasis AI",
    description:
      "Platform kesehatan preventif personal yang menggunakan kecerdasan buatan untuk memantau, menganalisis, dan memberikan rekomendasi kesehatan proaktif untuk seluruh keluarga.",
    url: "https://health.khelmi.biz.id",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    features: [
      "Health Score real-time (0-100)",
      "Analisis hasil lab via OCR",
      "Deteksi risiko dini berbasis AI",
      "Tren kesehatan bulanan",
      "AI Chat konsultasi kesehatan",
      "Daily & Weekly briefing otomatis",
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "AI/ML"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    name: "Ahli Investasi",
    tagline: "Dashboard Investasi Real-Time dengan Multi-AI",
    description:
      "Platform dashboard investasi cerdas yang mengorkestrasi multiple AI engine (Gemini, Claude, OpenAI, Grok) untuk analisis pasar kripto dan saham secara real-time.",
    url: "https://trade.khelmi.biz.id",
    color: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
    features: [
      "Multi-AI consensus (4 engine)",
      "Dashboard kripto & saham IDX/US",
      "Portfolio Doctor & Risk Score",
      "Trading Journal + OCR import",
      "Market Timing Agent",
      "Backtesting & Position Sizing",
    ],
    tech: ["Next.js 16", "TypeScript", "Prisma", "Neon", "Capacitor"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="produk" className="section-spacing relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-neon-purple uppercase mb-4">
            Produk Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Solusi Digital{" "}
            <span className="gradient-text">Nyata</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400">
            Dua produk unggulan yang telah live dan digunakan, dibangun dengan
            teknologi terkini dan arsitektur yang solid.
          </p>
        </div>

        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="glass-card card-3d shimmer rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white`}
                      >
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-400 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-neon-blue hover:text-neon-purple transition-colors"
                    >
                      Kunjungi Produk
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>

                  {/* Right: Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-4">
                      Fitur Utama
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.03]"
                        >
                          <svg
                            className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          <span className="text-sm text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
