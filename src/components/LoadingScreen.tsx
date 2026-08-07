"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ${
        progress >= 100 ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)",
      }}
    >
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-neon-purple/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />

      {/* Logo */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center animate-pulse">
          <span className="text-3xl font-black text-white">B</span>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple opacity-30 blur-xl animate-pulse" />
      </div>

      {/* Brand name */}
      <div className="text-2xl font-bold text-white mb-6 tracking-wider">
        BCOMPBIZ
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading text */}
      <div className="mt-4 text-xs text-slate-500 tracking-widest uppercase">
        Memuat halaman...
      </div>
    </div>
  );
}
