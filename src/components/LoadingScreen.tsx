"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); setTimeout(() => setLoading(false), 300); return 100; }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading-screen ${progress >= 100 ? "hide" : ""}`}>
      <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mb-4 animate-pulse">
        <span className="text-lg font-bold text-white">B</span>
      </div>
      <span className="text-sm font-semibold text-text tracking-wider mb-6">BCOMPBIZ</span>
      <div className="w-40 h-0.5 bg-border overflow-hidden">
        <div className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-200" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
      <span className="label text-[9px] mt-4">Memuat...</span>
    </div>
  );
}
