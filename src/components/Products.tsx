"use client";

const products = [
  {
    num: "01",
    name: "Family Health AI",
    tagline: "Platform Kesehatan Preventif Berbasis AI",
    description: "Platform kesehatan preventif personal yang menggunakan kecerdasan buatan untuk memantau, menganalisis, dan memberikan rekomendasi kesehatan proaktif untuk seluruh keluarga.",
    url: "https://health.khelmi.biz.id",
    features: ["Health Score real-time", "Analisis lab via OCR", "Deteksi risiko dini", "AI Chat konsultasi"],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "AI/ML"],
    accent: "emerald",
  },
  {
    num: "02",
    name: "Ahli Investasi",
    tagline: "Dashboard Investasi Real-Time dengan Multi-AI",
    description: "Platform dashboard investasi cerdas yang mengorkestrasi multiple AI engine (Gemini, Claude, OpenAI, Grok) untuk analisis pasar kripto dan saham secara real-time.",
    url: "https://trade.khelmi.biz.id",
    features: ["Multi-AI consensus", "Dashboard kripto & saham", "Portfolio Doctor", "Trading Journal"],
    tech: ["Next.js 16", "TypeScript", "Prisma", "Neon", "Capacitor"],
    accent: "amber",
  },
];

export default function Products() {
  return (
    <section id="produk" className="section-editorial">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="label-editorial block mb-4">Produk Kami</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
            Solusi Digital <span className="italic text-gold">Nyata</span>
          </h2>
        </div>

        {/* Products */}
        <div className="space-y-12 md:space-y-16">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="card-editorial p-6 sm:p-8 md:p-10 lg:p-12"
            >
              <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
                {/* Left: Info */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="number-editorial text-xl">{product.num}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">
                    {product.name}
                  </h3>
                  <p className="label-editorial mb-4">{product.tagline}</p>

                  <p className="text-warm-gray text-sm sm:text-base leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 text-xs font-mono text-warm-gray border border-border rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy border-b border-gold pb-1 hover:text-gold transition-colors"
                  >
                    Kunjungi Produk
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Right: Features */}
                <div className="lg:col-span-5">
                  <h4 className="label-editorial mb-4 md:mb-6">Fitur Utama</h4>
                  <div className="space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        <span className="text-sm text-charcoal">{feature}</span>
                      </div>
                    ))}
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
