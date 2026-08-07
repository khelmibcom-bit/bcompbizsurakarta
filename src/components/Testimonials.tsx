"use client";

const testimonials = [
  {
    quote:
      "Family Health AI membantu saya memantau kesehatan keluarga dengan lebih mudah. Analisis lab yang otomatis sangat menghemat waktu.",
    name: "Pengguna Family Health AI",
    role: "Healthcare Platform",
    product: "Family Health AI",
  },
  {
    quote:
      "Dashboard investasi yang sangat lengkap. Multi-AI consensus memberikan perspektif analisis yang beragam dan akurat.",
    name: "Pengguna Ahli Investasi",
    role: "Investment Platform",
    product: "Ahli Investasi",
  },
  {
    quote:
      "Arsitektur yang solid dan performa yang cepat. Bcompbiz benar-benar memahami standar pengembangan modern.",
    name: "Technical Review",
    role: "Software Quality",
    product: "General",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-neon-blue uppercase mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Apa Kata{" "}
            <span className="gradient-text">Mereka</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-xl p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-slate-300 leading-relaxed flex-1 mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-xs font-bold text-neon-blue">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-medium text-white">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {t.role} &middot; {t.product}
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
