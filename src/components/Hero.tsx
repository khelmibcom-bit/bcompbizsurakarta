"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end pb-12 sm:pb-16 md:pb-20 pt-24 md:pt-32 overflow-hidden">
      {/* Background Letter */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.08}px))` }}
      >
        <span className="font-display text-[12rem] sm:text-[18rem] md:text-[24rem] lg:text-[30rem] font-bold text-navy/[0.03] leading-none">
          B
        </span>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-border/40" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-border/40" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-border/40" />
      </div>

      <div className="container-editorial relative z-10 w-full">
        {/* Top Label */}
        <div className="mb-8 md:mb-12 animate-fade-up">
          <span className="label-editorial">
            Software Development Studio &middot; Surakarta, Indonesia
          </span>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-end">
          {/* Headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-navy leading-[0.92] tracking-tight animate-fade-up">
              Membangun
              <br />
              <span className="italic text-gold">Masa Depan</span>
              <br />
              Digital
            </h1>
            <div className="mt-6 md:mt-8 h-px bg-gold animate-fade-up" style={{ animationDelay: "0.3s", width: "80px", maxWidth: "120px" }} />
          </div>

          {/* Description + CTA */}
          <div className="lg:col-span-5 xl:col-span-4 mt-6 lg:mt-0">
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Kami merancang dan membangun solusi perangkat lunak inovatif
              yang memberdayakan bisnis dan individu. Dari kecerdasan buatan
              hingga aplikasi web modern.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a href="#produk" className="btn-editorial justify-center sm:justify-start">
                Lihat Produk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a href="https://bcompbizsurakarta.com" target="_blank" rel="noopener noreferrer" className="btn-editorial-outline justify-center sm:justify-start">
                Website Utama
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "24+", label: "Tahun Pengalaman" },
            { value: "1.500+", label: "Klien Puas" },
            { value: "5.000+", label: "Unit Terpasang" },
            { value: "AI", label: "Powered Solutions" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-1">{stat.value}</div>
              <div className="label-editorial text-[10px] md:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="label-editorial text-[9px] md:text-[10px]">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-navy to-transparent animate-pulse" />
      </div>
    </section>
  );
}
