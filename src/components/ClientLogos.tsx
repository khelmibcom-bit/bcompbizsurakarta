"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "24+", label: "Tahun Pengalaman", suffix: "tahun" },
  { value: "1.500+", label: "Klien Puas", suffix: "klien" },
  { value: "5.000+", label: "Unit Terpasang", suffix: "unit" },
  { value: "50+", label: "Kota di Indonesia", suffix: "kota" },
];

const clients = [
  "RSUD Dr. Moewardi", "UNS Surakarta", "Pemkot Surakarta", "UMS",
  "Bank Jateng", "Telkom Indonesia", "Pertamina", "PLN",
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-elevated via-bg to-bg-elevated" />

      <div className="container-tech relative z-10 py-20 md:py-28">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center p-6 border border-border bg-bg-card/50 hover:border-accent/30 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="label text-[10px] md:text-xs">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Client Logos */}
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <span className="label">Dipercaya oleh</span>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, i) => (
            <AnimateOnScroll key={client} delay={i * 60}>
              <div className="flex items-center justify-center gap-3 p-4 md:p-5 border border-border bg-bg-card/30 hover:border-accent/30 hover:bg-bg-card/60 transition-all duration-300 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center flex-shrink-0 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all">
                  <span className="text-sm md:text-base font-bold text-accent">{client.charAt(0)}</span>
                </div>
                <span className="text-xs md:text-sm text-text-secondary group-hover:text-text transition-colors font-medium leading-tight">
                  {client}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom divider with glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
