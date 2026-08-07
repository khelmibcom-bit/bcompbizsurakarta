"use client";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />

      <div className="container-editorial text-center relative z-10">
        <span className="label-editorial text-gold/70 block mb-4 md:mb-6">Mulai Proyek</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Punya Ide <span className="italic text-gold">Proyek?</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-8 md:mb-10">
          Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@bcompbizsurakarta.com" className="btn-editorial bg-gold hover:bg-gold-light">
            Kirim Email
          </a>
          <a href="https://wa.me/6281227916969" target="_blank" rel="noopener noreferrer" className="btn-editorial-outline border-white/30 text-white hover:bg-white hover:text-navy">
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
