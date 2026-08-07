"use client";

const clients = [
  { name: "RSUD Dr. Moewardi", color: "from-blue-500 to-blue-600" },
  { name: "UNS Surakarta", color: "from-green-500 to-green-600" },
  { name: "Pemkot Surakarta", color: "from-red-500 to-red-600" },
  { name: "UMS", color: "from-purple-500 to-purple-600" },
  { name: "Bank Jateng", color: "from-amber-500 to-amber-600" },
  { name: "Telkom Indonesia", color: "from-cyan-500 to-cyan-600" },
  { name: "Pertamina", color: "from-orange-500 to-orange-600" },
  { name: "PLN", color: "from-yellow-500 to-yellow-600" },
];

export default function ClientLogos() {
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />

      <div className="container-custom mb-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Dipercaya oleh
          </span>
        </div>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10" />

        <div className="flex gap-6 animate-scroll">
          {doubledClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 w-40 h-20 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center hover:border-neon-blue/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-white text-xs font-bold`}
                >
                  {client.name.charAt(0)}
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-medium">
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
