"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-10 md:py-12">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
              <span className="font-display text-sm font-bold text-white">B</span>
            </div>
            <span className="text-sm font-semibold text-white tracking-wide">BCOMPBIZ</span>
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            {["Tentang", "Produk", "Layanan", "Kontak"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-white/50 hover:text-gold transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="text-xs text-white/30">&copy; {year} Bcompbiz. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
