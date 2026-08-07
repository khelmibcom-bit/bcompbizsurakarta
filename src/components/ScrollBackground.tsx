"use client";

import { useEffect, useState } from "react";

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const scrollHeight = typeof document !== "undefined" ? document.documentElement.scrollHeight : 1;
  const progress = scrollY / (scrollHeight - vh || 1);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Neon gradient orbs that move with scroll */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(79,143,255,0.08) 0%, transparent 70%)`,
          left: `${20 + Math.sin(scrollY * 0.002) * 15}%`,
          top: `${10 + Math.cos(scrollY * 0.003) * 10}%`,
          transform: `scale(${1 + Math.sin(scrollY * 0.001) * 0.2})`,
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)`,
          right: `${15 + Math.cos(scrollY * 0.002) * 10}%`,
          top: `${30 + Math.sin(scrollY * 0.004) * 15}%`,
          transform: `scale(${1 + Math.cos(scrollY * 0.001) * 0.15})`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(6,214,214,0.05) 0%, transparent 70%)`,
          left: `${50 + Math.sin(scrollY * 0.003) * 20}%`,
          bottom: `${20 + Math.cos(scrollY * 0.002) * 10}%`,
        }}
      />

      {/* Thunder/lightning lines that appear on scroll */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        <defs>
          <linearGradient id="thunder1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f8fff" stopOpacity="0" />
            <stop offset="50%" stopColor="#4f8fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="thunder2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#06d6d6" stopOpacity="1" />
            <stop offset="100%" stopColor="#4f8fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Animated thunder lines */}
        <path
          d={`M 0 ${200 + scrollY * 0.05} Q ${400 + Math.sin(scrollY * 0.005) * 100} ${100 + scrollY * 0.03} ${800} ${300 + scrollY * 0.02}`}
          stroke="url(#thunder1)"
          strokeWidth="1"
          fill="none"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        />
        <path
          d={`M ${1200} ${150 + scrollY * 0.04} Q ${800 + Math.cos(scrollY * 0.004) * 80} ${400 + scrollY * 0.02} ${400} ${500 + scrollY * 0.01}`}
          stroke="url(#thunder2)"
          strokeWidth="0.8"
          fill="none"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        />
        <path
          d={`M ${200} ${600 + scrollY * 0.03} Q ${600 + Math.sin(scrollY * 0.006) * 120} ${350 + scrollY * 0.04} ${1000} ${700 + scrollY * 0.02}`}
          stroke="url(#thunder1)"
          strokeWidth="0.6"
          fill="none"
          style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
        />
      </svg>

      {/* Grid that shifts with scroll */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,143,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,143,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      {/* Horizontal scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"
        style={{
          top: `${(scrollY * 0.5) % vh}px`,
        }}
      />

      {/* Corner accents that pulse */}
      <div
        className="absolute top-0 left-0 w-32 h-32 opacity-10"
        style={{
          background: `radial-gradient(circle at top left, rgba(79,143,255,${0.1 + Math.sin(scrollY * 0.003) * 0.05}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
        style={{
          background: `radial-gradient(circle at bottom right, rgba(139,92,246,${0.1 + Math.cos(scrollY * 0.003) * 0.05}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
