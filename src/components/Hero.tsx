"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 40%)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Interactive glow follow cursor */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Software Development Studio &middot; Surakarta, Indonesia
          </span>
        </div>

        <h1
          className="animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          Membangun{" "}
          <span className="gradient-text-animate">Masa Depan</span>
          <br />
          Digital
        </h1>

        <p
          className="animate-slide-up max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
          style={{ animationDelay: "0.3s" }}
        >
          Kami merancang dan membangun solusi perangkat lunak inovatif yang
          memberdayakan bisnis dan individu. Dari kecerdasan buatan hingga
          aplikasi web modern, kami wujudkan visi digital Anda.
        </p>

        <div
          className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#produk"
            className="group relative px-8 py-3.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-xl hover:shadow-neon-blue/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Lihat Produk Kami
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </a>
          <a
            href="#tentang"
            className="px-8 py-3.5 text-sm font-semibold text-slate-300 rounded-full glass hover:text-white hover:border-neon-blue/30 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-slide-up mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { value: "2+", label: "Produk Aktif" },
            { value: "100%", label: "Bahasa Indonesia" },
            { value: "AI", label: "Powered Solutions" },
            { value: "24/7", label: "Monitoring" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-neon-blue animate-pulse" />
        </div>
      </div>
    </section>
  );
}
