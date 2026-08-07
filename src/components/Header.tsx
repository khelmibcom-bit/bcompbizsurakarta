"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#produk", label: "Produk" },
  { href: "#layanan", label: "Layanan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-tech" : "bg-transparent"}`}>
        <div className="container-tech">
          <nav className="flex items-center justify-between h-16 md:h-18">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neon-blue/20">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-sm font-semibold text-text tracking-wide">BCOMPBIZ</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="label text-text-secondary hover:text-accent transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="#kontak" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
                Hubungi Kami
              </a>
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
                <span className={`w-5 h-px bg-text transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`w-5 h-px bg-text transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setMobileOpen(false)} />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-bg-elevated border-l border-border transition-transform duration-500 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-semibold text-text">BCOMPBIZ</span>
            <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center" aria-label="Tutup">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-4 px-3 text-lg text-text hover:text-accent transition-colors border-b border-border">
                {link.label}
              </a>
            ))}
          </div>

          <a href="#kontak" onClick={() => setMobileOpen(false)} className="btn-primary justify-center mt-6">
            Hubungi Kami
          </a>
        </div>
      </div>
    </>
  );
}
