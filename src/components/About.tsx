"use client";

const values = [
  {
    num: "01",
    title: "Inovasi Berkelanjutan",
    description: "Kami terus mengeksplorasi teknologi terdepan seperti AI, machine learning, dan cloud computing untuk menciptakan solusi yang relevan dan berdampak.",
  },
  {
    num: "02",
    title: "Berpusat pada Pengguna",
    description: "Setiap produk kami dirancang dengan mengutamakan pengalaman pengguna. Interface intuitif dan performa cepat adalah standar, bukan fitur tambahan.",
  },
  {
    num: "03",
    title: "Keamanan & Kualitas",
    description: "Kode bersih, arsitektur terstruktur, dan keamanan berlapis. Kami menerapkan standar industri tertinggi di setiap lini produk.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="section-editorial bg-white">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <span className="label-editorial block mb-4">Tentang Kami</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              Studio
              <br />
              <span className="italic text-gold">Pengembangan</span>
              <br />
              Perangkat Lunak
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed mb-4">
              Bcompbiz adalah perusahaan teknologi dari Surakarta yang telah
              berdiri sejak tahun 2000. Dengan pengalaman lebih dari 24 tahun,
              kami melayani 1.500+ klien dengan 5.000+ unit produk terpasang di
              seluruh Indonesia.
            </p>
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed">
              Divisi pengembangan perangkat lunak kami berfokus pada solusi
              digital berbasis AI, dari platform kesehatan preventif hingga
              dashboard investasi real-time.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="editorial-divider-thick mb-12 md:mb-16" />

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {values.map((value) => (
            <div key={value.num} className="group">
              <span className="number-editorial text-lg block mb-3">{value.num}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
