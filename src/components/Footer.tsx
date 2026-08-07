"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg-elevated border-t border-border py-8 md:py-10">
      <div className="container-tech">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
              <span className="text-xs font-bold text-white">B</span>
            </div>
            <span className="text-xs font-semibold text-text tracking-wide">BCOMPBIZ</span>
          </div>
          <nav className="flex items-center gap-6">
            {["Tentang", "Produk", "Layanan", "Kontak"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-text-muted hover:text-accent transition-colors">{l}</a>
            ))}
          </nav>
          <div className="text-xs text-text-muted">&copy; {year} Bcompbiz. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
