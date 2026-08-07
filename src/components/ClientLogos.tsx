"use client";

const clients = [
  { name: "RSUD Dr. Moewardi", initial: "R" },
  { name: "UNS Surakarta", initial: "U" },
  { name: "Pemkot Surakarta", initial: "P" },
  { name: "UMS", initial: "U" },
  { name: "Bank Jateng", initial: "B" },
  { name: "Telkom Indonesia", initial: "T" },
  { name: "Pertamina", initial: "P" },
  { name: "PLN", initial: "P" },
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 overflow-hidden border-t border-b border-border">
      <div className="container-editorial mb-8">
        <span className="label-editorial text-center block">Dipercaya oleh</span>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-cream to-transparent z-10" />

        <div className="flex gap-4 md:gap-6 animate-marquee">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 w-36 md:w-44 h-16 md:h-20 border border-border bg-white flex items-center justify-center hover:border-gold transition-colors duration-300 group"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cream-dark flex items-center justify-center text-xs font-bold text-navy group-hover:bg-gold group-hover:text-white transition-colors">
                  {client.initial}
                </span>
                <span className="text-[11px] md:text-xs text-warm-gray group-hover:text-navy transition-colors font-medium">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
