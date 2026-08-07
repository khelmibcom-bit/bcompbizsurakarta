"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  { num: "01", title: "Kecerdasan Buatan", desc: "Integrasi AI untuk analisis data, prediksi, dan automasi." },
  { num: "02", title: "Web Application", desc: "Aplikasi web modern Next.js, React, TypeScript." },
  { num: "03", title: "Mobile Development", desc: "Aplikasi mobile cross-platform dengan Capacitor." },
  { num: "04", title: "Database & Backend", desc: "Arsitektur backend robust PostgreSQL, Prisma, Neon." },
  { num: "05", title: "Performa & Optimasi", desc: "Core Web Vitals optimal, lazy loading, caching." },
  { num: "06", title: "Keamanan", desc: "Autentikasi JWT, rate limiting, security headers." },
];

export default function Services() {
  return (
    <section id="layanan" className="py-12 md:py-20 lg:py-28 bg-bg-elevated">
      <div className="container-tech">
        <AnimateOnScroll>
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-5">
              <span className="label block mb-4">Layanan</span>
              <h2 className="heading-lg">Keahlian <span className="text-gradient">Teknis</span></h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-text-secondary text-sm sm:text-base">Stack teknologi modern dan praktik terbaik industri.</p>
            </div>
          </div>
        </AnimateOnScroll>
        <div className="divider-tech mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 80}>
              <div className="py-6 md:py-8 px-0 sm:px-6 lg:px-8 border-b border-r border-border [&:nth-child(3n)]:border-r-0 [&:last-child]:border-r-0 group">
                <span className="font-mono text-sm text-accent block mb-3">{s.num}</span>
                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
