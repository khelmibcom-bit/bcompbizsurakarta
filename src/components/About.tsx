"use client";

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Inovasi Berkelanjutan",
    description:
      "Kami terus mengeksplorasi teknologi terdepan seperti AI, machine learning, dan cloud computing untuk menciptakan solusi yang relevan dan berdampak.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Berpusat pada Pengguna",
    description:
      "Setiap produk kami dirancang dengan mengutamakan pengalaman pengguna. Interface intuitif dan performa cepat adalah standar, bukan fitur tambahan.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Keamanan & Kualitas",
    description:
      "Kode bersih, arsitektur terstruktur, dan keamanan berlapis. Kami menerapkan standar industri tertinggi di setiap lini produk.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="section-spacing relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-neon-blue uppercase mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Studio Pengembangan
              <br />
              <span className="gradient-text">Perangkat Lunak</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Bcompbiz adalah perusahaan teknologi dari Surakarta yang telah
              berdiri sejak tahun 2000. Dengan pengalaman lebih dari 24 tahun,
              kami melayani 1.500+ klien dengan 5.000+ unit produk terpasang di
              seluruh Indonesia.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Divisi pengembangan perangkat lunak kami berfokus pada solusi
              digital berbasis AI, dari platform kesehatan preventif hingga
              dashboard investasi real-time.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center border border-neon-blue/20">
                <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium text-white">Berkantor di Surakarta</div>
                <div className="text-xs text-slate-500">Jawa Tengah, Indonesia</div>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-xl p-6 flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center text-neon-blue border border-neon-blue/10">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
