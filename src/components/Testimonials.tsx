"use client";

const testimonials = [
  { quote: "Family Health AI membantu saya memantau kesehatan keluarga dengan lebih mudah. Analisis lab yang otomatis sangat menghemat waktu.", name: "Pengguna Family Health AI", role: "Healthcare Platform" },
  { quote: "Dashboard investasi yang sangat lengkap. Multi-AI consensus memberikan perspektif analisis yang beragam dan akurat.", name: "Pengguna Ahli Investasi", role: "Investment Platform" },
  { quote: "Arsitektur yang solid dan performa yang cepat. Bcompbiz benar-benar memahami standar pengembangan modern.", name: "Technical Review", role: "Software Quality" },
];

export default function Testimonials() {
  return (
    <section className="section-tech bg-bg-elevated">
      <div className="container-tech">
        <div className="mb-12"><span className="label block mb-4">Testimoni</span><h2 className="heading-lg">Apa Kata <span className="text-gradient">Mereka</span></h2></div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-tech p-6 md:p-8 flex flex-col">
              <span className="font-mono text-sm text-accent mb-4">0{i + 1}</span>
              <blockquote className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-semibold text-text">{t.name}</div>
                <div className="text-xs text-text-muted">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
