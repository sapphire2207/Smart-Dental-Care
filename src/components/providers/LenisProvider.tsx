"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Instantiate Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    // Save to window object
    (window as any).lenis = lenis;

    // Animation frame hook
    let rfId: number;
    function raf(time: number) {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    }
    rfId = requestAnimationFrame(raf);

    // Clean up
    return () => {
      cancelAnimationFrame(rfId);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, [pathname]);

  return <>{children}</>;
}
