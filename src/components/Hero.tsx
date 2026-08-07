"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-neon-blue/20" style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animation: `particle-float ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * -5}s`,
          }} />
        ))}
      </div>

      <div className="container-tech relative z-10 w-full pt-28 pb-20 md:pt-40 md:pb-32">
        {/* Badge */}
        <div className="animate-slide-up mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-border text-xs font-mono text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Software Development Studio &middot; Surakarta
          </span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="heading-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Membangun
              <br />
              <span className="text-gradient-animate">Masa Depan</span>
              <br />
              Digital
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-text-secondary text-base leading-relaxed mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Kami merancang dan membangun solusi perangkat lunak inovatif
              yang memberdayakan bisnis dan individu. Dari kecerdasan buatan
              hingga aplikasi web modern.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a href="#produk" className="btn-neon">
                Lihat Produk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a href="https://bcomp-online.id" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Website Utama
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "24+", label: "Tahun Pengalaman" },
            { value: "1.500+", label: "Klien Puas" },
            { value: "5.000+", label: "Unit Terpasang" },
            { value: "AI", label: "Powered Solutions" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="label text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="label text-[9px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
