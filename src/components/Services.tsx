"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  { num: "01", title: "Kecerdasan Buatan", desc: "Integrasi AI untuk analisis data, prediksi, dan automasi. Mendukung Gemini, Claude, OpenAI, Grok." },
  { num: "02", title: "Web Application", desc: "Aplikasi web modern dengan Next.js, React, TypeScript. SSR, performa optimal, SEO-friendly." },
  { num: "03", title: "Mobile Development", desc: "Aplikasi mobile cross-platform dengan Capacitor. Deploy ke Play Store dan App Store." },
  { num: "04", title: "Database & Backend", desc: "Arsitektur backend robust dengan PostgreSQL, Prisma ORM, dan Neon serverless." },
  { num: "05", title: "Performa & Optimasi", desc: "Core Web Vitals optimal, lazy loading, caching strategy, dan CDN." },
  { num: "06", title: "Keamanan", desc: "Autentikasi JWT, rate limiting, input validation, dan security headers." },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-32 lg:py-40 bg-bg-elevated">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 80}>
              <div className="py-6 md:py-8 border-b border-border sm:border-r sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 px-0 sm:px-6 lg:px-8 group">
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
