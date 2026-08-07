"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold text-white text-xs">
              B
            </div>
            <span className="text-sm font-semibold text-white">
              Bcompbiz
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#tentang"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Tentang
            </a>
            <a
              href="#produk"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Produk
            </a>
            <a
              href="#layanan"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Layanan
            </a>
            <a
              href="#kontak"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Kontak
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-xs text-slate-600">
            &copy; {currentYear} Bcompbiz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
