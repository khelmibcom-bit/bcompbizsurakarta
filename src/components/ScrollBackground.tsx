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
      {/* Large neon orb 1 - moves with scroll */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(79,143,255,0.15) 0%, rgba(79,143,255,0.05) 40%, transparent 70%)",
          left: `${15 + Math.sin(scrollY * 0.002) * 20}%`,
          top: `${10 + Math.cos(scrollY * 0.003) * 15}%`,
          filter: "blur(80px)",
          transform: `scale(${1 + Math.sin(scrollY * 0.001) * 0.3})`,
        }}
      />

      {/* Large neon orb 2 */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
          right: `${10 + Math.cos(scrollY * 0.002) * 15}%`,
          top: `${35 + Math.sin(scrollY * 0.004) * 20}%`,
          filter: "blur(70px)",
          transform: `scale(${1 + Math.cos(scrollY * 0.002) * 0.25})`,
        }}
      />

      {/* Cyan orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(6,214,214,0.10) 0%, transparent 60%)",
          left: `${45 + Math.sin(scrollY * 0.003) * 25}%`,
          bottom: `${15 + Math.cos(scrollY * 0.002) * 10}%`,
          filter: "blur(60px)",
        }}
      />

      {/* Animated gradient bars (Microsoft-style) */}
      <div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          top: `${20 + (scrollY * 0.1) % 60}%`,
          background: "linear-gradient(90deg, transparent 0%, rgba(79,143,255,0.4) 30%, rgba(139,92,246,0.4) 70%, transparent 100%)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          top: `${50 + (scrollY * 0.08) % 40}%`,
          background: "linear-gradient(90deg, transparent 0%, rgba(6,214,214,0.3) 50%, transparent 100%)",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          top: `${75 + (scrollY * 0.12) % 25}%`,
          background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 40%, rgba(79,143,255,0.3) 60%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* Grid pattern that shifts */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(79,143,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,143,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      {/* Corner glow top-left */}
      <div
        className="absolute top-0 left-0 w-64 h-64"
        style={{
          background: "radial-gradient(circle at top left, rgba(79,143,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Corner glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Pulsing center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79,143,255,0.04) 0%, transparent 50%)",
          transform: `translate(-50%, -50%) scale(${1 + Math.sin(scrollY * 0.002) * 0.1})`,
        }}
      />
    </div>
  );
}
