"use client";

const clients = [
  { name: "RSUD Dr. Moewardi", initial: "R" }, { name: "UNS Surakarta", initial: "U" },
  { name: "Pemkot Surakarta", initial: "P" }, { name: "UMS", initial: "U" },
  { name: "Bank Jateng", initial: "B" }, { name: "Telkom Indonesia", initial: "T" },
  { name: "Pertamina", initial: "P" }, { name: "PLN", initial: "P" },
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];
  return (
    <section className="py-12 overflow-hidden border-t border-b border-border">
      <div className="container-tech mb-6"><span className="label text-center block">Dipercaya oleh</span></div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="flex gap-4 animate-marquee">
          {doubled.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex-shrink-0 w-40 h-16 border border-border bg-bg-card flex items-center justify-center hover:border-accent transition-colors group">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-surface flex items-center justify-center text-xs font-bold text-accent">{c.initial}</span>
                <span className="text-[11px] text-text-secondary group-hover:text-text transition-colors">{c.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
