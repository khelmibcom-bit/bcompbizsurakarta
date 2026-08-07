"use client";

export default function Contact() {
  return (
    <section id="kontak" className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-neon-purple uppercase mb-4">
              Kontak
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mari{" "}
              <span className="gradient-text">Terhubung</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Tertarik bekerja sama atau ingin mengetahui lebih lanjut tentang
              produk kami? Jangan ragu untuk menghubungi kami melalui channel
              di bawah ini.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:contact@bcompbiz.id"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center text-neon-blue border border-neon-blue/10 group-hover:border-neon-blue/30 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-neon-blue transition-colors">
                    contact@bcompbiz.id
                  </div>
                  <div className="text-xs text-slate-500">Email</div>
                </div>
              </a>

              <a
                href="https://wa.me/628xxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center text-green-400 border border-green-500/10 group-hover:border-green-500/30 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">
                    +62 8XX-XXXX-XXXX
                  </div>
                  <div className="text-xs text-slate-500">WhatsApp</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 flex items-center justify-center text-neon-purple border border-neon-purple/10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Surakarta, Jawa Tengah
                  </div>
                  <div className="text-xs text-slate-500">Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-col justify-center">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6">
                Produk Kami
              </h3>
              <div className="space-y-4">
                <a
                  href="https://health.khelmi.biz.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-emerald-500/20 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-emerald-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                        Family Health AI
                      </div>
                      <div className="text-xs text-slate-500">
                        health.khelmi.biz.id
                      </div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>

                <a
                  href="https://trade.khelmi.biz.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-amber-500/20 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                        Ahli Investasi
                      </div>
                      <div className="text-xs text-slate-500">
                        trade.khelmi.biz.id
                      </div>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
