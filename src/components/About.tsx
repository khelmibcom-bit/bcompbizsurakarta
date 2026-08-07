"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const values = [
  { num: "01", title: "Inovasi Berkelanjutan", description: "Kami terus mengeksplorasi teknologi terdepan seperti AI, machine learning, dan cloud computing." },
  { num: "02", title: "Berpusat pada Pengguna", description: "Interface intuitif dan performa cepat adalah standar, bukan fitur tambahan." },
  { num: "03", title: "Keamanan & Kualitas", description: "Kode bersih, arsitektur terstruktur, dan keamanan berlapis di setiap lini produk." },
];

export default function About() {
  return (
    <section id="tentang" className="py-12 md:py-20 lg:py-28 bg-bg-elevated">
      <div className="container-tech">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <AnimateOnScroll className="lg:col-span-5">
            <span className="label block mb-4">Tentang Kami</span>
            <h2 className="heading-lg">
              Studio<br />
              <span className="text-gradient">Pengembangan</span><br />
              Perangkat Lunak
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="lg:col-span-7 flex flex-col justify-end" delay={100}>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
              Bcompbiz adalah perusahaan teknologi dari Surakarta yang telah berdiri sejak tahun 2000.
              Dengan pengalaman lebih dari 24 tahun, kami melayani 1.500+ klien dengan 5.000+ unit produk terpasang.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Divisi pengembangan perangkat lunak kami berfokus pada solusi digital berbasis AI,
              dari platform kesehatan preventif hingga dashboard investasi real-time.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="divider-tech mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, i) => (
            <AnimateOnScroll key={value.num} delay={i * 100}>
              <div className="group">
                <span className="font-mono text-sm text-accent block mb-3">{value.num}</span>
                <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
