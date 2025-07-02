"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenisScroll = () => {
  useEffect(() => {
    console.log("🔁 Lenis initialized");

    const lenis = new Lenis({
  duration: 2.0, // ⬆️ longer duration = smoother and more inertia
  lerp: 0.08,    // ⬇️ smaller lerp = more easing effect (acts like resistance)
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // spring-like ease
});

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      console.log("❌ Lenis destroyed");
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
