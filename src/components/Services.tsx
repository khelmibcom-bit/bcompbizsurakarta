"use client";

const services = [
  { num: "01", title: "Kecerdasan Buatan", description: "Integrasi AI yang cerdas untuk analisis data, prediksi, dan automasi. Mendukung multiple AI engine." },
  { num: "02", title: "Web Application", description: "Aplikasi web modern dengan Next.js, React, dan TypeScript. SSR, performa optimal, SEO-friendly." },
  { num: "03", title: "Mobile Development", description: "Aplikasi mobile cross-platform dengan Capacitor. Deploy ke Play Store dan App Store." },
  { num: "04", title: "Database & Backend", description: "Arsitektur backend yang robust dengan PostgreSQL, Prisma ORM, dan Neon serverless." },
  { num: "05", title: "Performa & Optimasi", description: "Core Web Vitals optimal, lazy loading, caching strategy, dan CDN." },
  { num: "06", title: "Keamanan", description: "Autentikasi JWT, rate limiting, input validation, dan security headers." },
];

export default function Services() {
  return (
    <section id="layanan" className="section-editorial bg-white">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <span className="label-editorial block mb-4">Layanan</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
              Keahlian <span className="italic text-gold">Teknis</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed">
              Stack teknologi modern dan praktik terbaik industri yang kami terapkan di setiap produk.
            </p>
          </div>
        </div>

        <div className="editorial-divider mb-8 md:mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service) => (
            <div key={service.num} className="group py-6 md:py-8 border-b border-border sm:border-r sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 px-0 sm:px-6 lg:px-8">
              <span className="number-editorial text-base block mb-3">{service.num}</span>
              <h3 className="font-display text-lg md:text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
