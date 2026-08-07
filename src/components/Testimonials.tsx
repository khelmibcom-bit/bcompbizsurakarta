"use client";

const testimonials = [
  {
    quote: "Family Health AI membantu saya memantau kesehatan keluarga dengan lebih mudah. Analisis lab yang otomatis sangat menghemat waktu.",
    name: "Pengguna Family Health AI",
    role: "Healthcare Platform",
  },
  {
    quote: "Dashboard investasi yang sangat lengkap. Multi-AI consensus memberikan perspektif analisis yang beragam dan akurat.",
    name: "Pengguna Ahli Investasi",
    role: "Investment Platform",
  },
  {
    quote: "Arsitektur yang solid dan performa yang cepat. Bcompbiz benar-benar memahami standar pengembangan modern.",
    name: "Technical Review",
    role: "Software Quality",
  },
];

export default function Testimonials() {
  return (
    <section className="section-editorial">
      <div className="container-editorial">
        <div className="mb-12 md:mb-16">
          <span className="label-editorial block mb-4">Testimoni</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
            Apa Kata <span className="italic text-gold">Mereka</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card-editorial p-6 md:p-8 flex flex-col">
              <span className="number-editorial text-base mb-4">0{i + 1}</span>
              <blockquote className="font-display text-base md:text-lg italic text-navy leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-semibold text-navy">{t.name}</div>
                <div className="text-xs text-warm-gray">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
