"use client";

export default function CTA() {
  return (
    <section className="section-spacing relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />

      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-dark-800 to-neon-purple/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-neon-purple/10 rounded-full blur-[60px]" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Punya Ide Proyek?
            </h2>
            <p className="max-w-lg mx-auto text-slate-400 mb-8">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan visi
              digital Anda. Dari konsep hingga deployment, kami siap menjadi
              mitra teknologi Anda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@bcompbizsurakarta.com"
                className="group relative px-8 py-3.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-xl hover:shadow-neon-blue/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Kirim Email
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </a>
              <a
                href="https://wa.me/6281227916969"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 text-sm font-semibold text-slate-300 rounded-full glass hover:text-white hover:border-green-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
