import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Produk Bcompbiz | Family Health AI & Ahli Investasi",
  description:
    "Jelajahi produk digital Bcompbiz: Family Health AI (platform kesehatan preventif) dan Ahli Investasi (dashboard investasi multi-AI).",
  alternates: { canonical: "https://khelmi.biz.id/produk" },
};

const products = [
  {
    name: "Family Health AI",
    url: "https://health.khelmi.biz.id",
    tagline: "Platform Kesehatan Preventif Berbasis AI",
    description:
      "Platform kesehatan preventif personal yang menggunakan kecerdasan buatan untuk memantau, menganalisis, dan memberikan rekomendasi kesehatan proaktif untuk seluruh keluarga.",
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
    name: "Ahli Investasi",
    url: "https://trade.khelmi.biz.id",
    tagline: "Dashboard Investasi Real-Time dengan Multi-AI",
    description:
      "Platform dashboard investasi cerdas yang mengorkestrasi multiple AI engine untuk analisis pasar kripto, saham IDX, US Stock, dan emas secara real-time.",
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

export default function ProdukPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container-tech">
          <h1 className="heading-xl mb-4">
            Produk <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            Solusi digital yang telah live dan digunakan, dibangun dengan teknologi terkini dan arsitektur yang solid.
          </p>

          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.name} className="card-tech p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="heading-md mb-2">{product.name}</h2>
                    <p className="label mb-4">{product.tagline}</p>
                    <p className="text-text-secondary leading-relaxed mb-6">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-mono text-text-secondary border border-border rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon"
                    >
                      Kunjungi Produk
                    </a>
                  </div>
                  <div>
                    <h3 className="label mb-4">Fitur Utama</h3>
                    <div className="space-y-0">
                      {product.features.map((f) => (
                        <div key={f.name} className="py-3 border-b border-border last:border-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span className="text-sm font-semibold text-text">{f.name}</span>
                          </div>
                          <p className="text-xs text-text-secondary pl-3.5">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
