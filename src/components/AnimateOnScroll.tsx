"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getTransform = () => {
      if (scale) return "scale(0.95)";
      switch (direction) {
        case "up": return "translateY(40px)";
        case "down": return "translateY(-40px)";
        case "left": return "translateX(-40px)";
        case "right": return "translateX(40px)";
        case "none": return "none";
      }
    };

    el.style.opacity = "0";
    el.style.transform = getTransform();
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "none";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, scale]);

  return <div ref={ref} className={className}>{children}</div>;
}
