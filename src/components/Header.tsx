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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container-editorial">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 md:gap-3 group">
              <div className="w-9 h-9 md:w-10 md:h-10 border-2 border-navy flex items-center justify-center">
                <span className="font-display text-base md:text-lg font-bold text-navy">B</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs md:text-sm font-semibold text-navy tracking-wide">BCOMPBIZ</div>
                <div className="text-[9px] md:text-[10px] text-warm-gray tracking-widest uppercase">Development</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="label-editorial text-charcoal hover:text-gold transition-colors duration-300 relative group"
                >
                  <span className="number-editorial mr-2">0{i + 1}</span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a href="#kontak" className="hidden md:inline-flex btn-editorial text-xs py-3 px-6">
                Hubungi Kami
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 -mr-2"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <span
                  className={`w-6 h-px bg-navy transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                  }`}
                />
                <span
                  className={`w-6 h-px bg-navy transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-cream shadow-2xl transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 md:p-8">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 border-2 border-navy flex items-center justify-center">
                <span className="font-display text-base font-bold text-navy">B</span>
              </div>
              <span className="text-sm font-semibold text-navy tracking-wide">BCOMPBIZ</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-11 h-11 flex items-center justify-center"
              aria-label="Tutup menu"
            >
              <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-4 py-4 px-3 rounded-lg hover:bg-cream-dark transition-colors group"
              >
                <span className="number-editorial text-sm">0{i + 1}</span>
                <span className="font-display text-xl text-navy group-hover:text-gold transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-border">
            <a
              href="#kontak"
              onClick={() => setMobileOpen(false)}
              className="btn-editorial w-full justify-center"
            >
              Hubungi Kami
            </a>
            <a
              href="https://wa.me/6281227916969"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 py-3 text-sm text-navy hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
