"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg-elevated border-t border-border py-10 md:py-12 relative overflow-hidden">
      {/* Subtle neon glow at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />

      <div className="container-tech">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo with neon */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center relative">
              <span className="text-xs font-bold text-white relative z-10">B</span>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <span className="text-sm font-semibold text-text tracking-wide">BCOMPBIZ</span>
          </div>

          {/* Nav links with neon hover */}
          <nav className="flex items-center gap-6 md:gap-8">
            {["Tentang", "Produk", "Layanan", "Kontak"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="relative text-xs text-text-muted hover:text-neon-blue transition-colors duration-300 group">
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue group-hover:w-full transition-all duration-300 shadow-[0_0_4px_rgba(79,143,255,0.4)]" />
              </a>
            ))}
          </nav>

          {/* Copyright with subtle neon */}
          <div className="text-xs text-text-muted">
            &copy; {year} <span className="text-neon-blue/60">Bcompbiz</span>. All rights reserved.
          </div>
        </div>

        {/* Bottom decorative neon line */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-muted">
            <span>Software Development Studio &middot; Surakarta, Indonesia</span>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/6281227916969" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">WhatsApp</a>
              <a href="mailto:info@bcompbizsurakarta.com" className="hover:text-neon-blue transition-colors">Email</a>
              <a href="https://bcompbizsurakarta.com" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">Website Utama</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
