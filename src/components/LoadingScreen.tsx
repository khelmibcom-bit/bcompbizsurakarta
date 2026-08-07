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
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-cream flex flex-col items-center justify-center transition-all duration-700 ${progress >= 100 ? "opacity-0 invisible" : "opacity-100 visible"}`}>
      <div className="w-12 h-12 border-2 border-navy flex items-center justify-center mb-6 animate-pulse">
        <span className="font-display text-xl font-bold text-navy">B</span>
      </div>
      <span className="font-display text-lg text-navy tracking-wider mb-6">BCOMPBIZ</span>
      <div className="w-40 h-px bg-border overflow-hidden">
        <div className="h-full bg-gold transition-all duration-200" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
      <span className="label-editorial text-[9px] mt-4">Memuat...</span>
    </div>
  );
}
