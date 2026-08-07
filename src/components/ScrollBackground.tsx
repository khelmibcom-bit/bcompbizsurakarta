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

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving neon orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(circle, rgba(79,143,255,0.12) 0%, transparent 70%)`,
          left: `${20 + Math.sin(scrollY * 0.003) * 20}%`,
          top: `${15 + Math.cos(scrollY * 0.002) * 15}%`,
          transform: `scale(${1 + Math.sin(scrollY * 0.001) * 0.3})`,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)`,
          right: `${10 + Math.cos(scrollY * 0.003) * 15}%`,
          top: `${40 + Math.sin(scrollY * 0.004) * 20}%`,
          transform: `scale(${1 + Math.cos(scrollY * 0.002) * 0.2})`,
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full blur-[80px]"
        style={{
          background: `radial-gradient(circle, rgba(6,214,214,0.08) 0%, transparent 70%)`,
          left: `${50 + Math.sin(scrollY * 0.005) * 25}%`,
          bottom: `${10 + Math.cos(scrollY * 0.003) * 15}%`,
        }}
      />

      {/* Animated thunder/lightning lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
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
          <linearGradient id="thunder3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06d6d6" stopOpacity="0" />
            <stop offset="50%" stopColor="#4f8fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Thunder line 1 */}
        <path
          d={`M -100 ${300 + Math.sin(scrollY * 0.005) * 50} Q ${400 + Math.sin(scrollY * 0.003) * 150} ${100 + scrollY * 0.02} ${1600} ${400 + Math.cos(scrollY * 0.004) * 80}`}
          stroke="url(#thunder1)"
          strokeWidth="1.5"
          fill="none"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        />
        
        {/* Thunder line 2 */}
        <path
          d={`M 1600 ${200 + Math.cos(scrollY * 0.004) * 60} Q ${800 + Math.cos(scrollY * 0.005) * 100} ${500 + scrollY * 0.015} -100 ${600 + Math.sin(scrollY * 0.003) * 40}`}
          stroke="url(#thunder2)"
          strokeWidth="1"
          fill="none"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        />
        
        {/* Thunder line 3 */}
        <path
          d={`M -100 ${700 + Math.sin(scrollY * 0.006) * 40} Q ${600 + Math.sin(scrollY * 0.004) * 120} ${300 + scrollY * 0.025} 1600 ${800 + Math.cos(scrollY * 0.005) * 60}`}
          stroke="url(#thunder3)"
          strokeWidth="0.8"
          fill="none"
          style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
        />
      </svg>

      {/* Grid that shifts */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(79,143,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,143,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: `translateY(${scrollY * 0.03}px)`,
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(79,143,255,0.3), transparent)`,
          top: `${(scrollY * 0.4) % vh}px`,
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute w-full h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(139,92,246,0.15), transparent)`,
          top: `${((scrollY * 0.3) + vh * 0.5) % vh}px`,
          transform: `rotate(-3deg)`,
        }}
      />

      {/* Corner glows */}
      <div
        className="absolute top-0 left-0 w-48 h-48"
        style={{
          background: `radial-gradient(circle at top left, rgba(79,143,255,${0.08 + Math.sin(scrollY * 0.003) * 0.04}) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48"
        style={{
          background: `radial-gradient(circle at bottom right, rgba(139,92,246,${0.08 + Math.cos(scrollY * 0.003) * 0.04}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
