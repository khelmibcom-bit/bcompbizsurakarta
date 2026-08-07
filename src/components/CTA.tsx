"use client";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-bg-elevated to-neon-purple/10" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container-tech text-center relative z-10">
        <span className="label block mb-4">Mulai Proyek</span>
        <h2 className="heading-xl mb-6">Punya Ide <span className="text-gradient">Proyek?</span></h2>
        <p className="text-text-secondary text-base max-w-xl mx-auto mb-8">Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@bcompbizsurakarta.com" className="btn-primary">Kirim Email</a>
          <a href="https://wa.me/6281227916969" target="_blank" rel="noopener noreferrer" className="btn-outline">Chat WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
