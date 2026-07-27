"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const isDark = true;
  const [isVisible, setIsVisible] = useState(false);
  const [isStripVisible, setIsStripVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrollableContent, setHasScrollableContent] = useState(false);
  const stripIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const STRIP_HEIGHT = 120;
  const THUMB_HEIGHT = 14;

  const showStripTemporarily = useCallback(() => {
    setIsStripVisible(true);
    if (stripIdleTimerRef.current) {
      clearTimeout(stripIdleTimerRef.current);
    }
    stripIdleTimerRef.current = setTimeout(() => {
      setIsStripVisible(false);
    }, 900);
  }, []);

  const toggleVisibility = useCallback((showStrip = false) => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
    const canScroll = scrollableDistance > 0;

    setHasScrollableContent(canScroll);

    if (!canScroll) {
      setScrollProgress(0);
      setIsVisible(false);
      setIsStripVisible(false);
      if (stripIdleTimerRef.current) {
        clearTimeout(stripIdleTimerRef.current);
      }
      return;
    }

    const progress = Math.min(100, Math.max(0, (scrolled / scrollableDistance) * 100));

    setScrollProgress(progress);
    setIsVisible(scrolled > 300);

    if (showStrip) {
      showStripTemporarily();
    }
  }, [showStripTemporarily]);

  const scrollToTop = () => {
    // Use Lenis if available, otherwise fall back to window.scrollTo
    if (typeof window !== 'undefined' && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    toggleVisibility(false);

    const handleLenisScroll = () => {
      toggleVisibility(true);
    };

    const handleWindowScroll = () => {
      toggleVisibility(true);
    };

    const handleWindowResize = () => {
      toggleVisibility(false);
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    window.addEventListener('resize', handleWindowResize);

    let lenisBound = false;
    const bindLenis = () => {
      if ((window as any).lenis) {
        (window as any).lenis.on('scroll', handleLenisScroll);
        lenisBound = true;
      }
    };

    bindLenis();
    const retryTimer = lenisBound ? null : window.setTimeout(bindLenis, 250);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('resize', handleWindowResize);
      if (retryTimer) {
        clearTimeout(retryTimer);
      }
      if (stripIdleTimerRef.current) {
        clearTimeout(stripIdleTimerRef.current);
      }
      if (lenisBound && (window as any).lenis) {
        (window as any).lenis.off('scroll', handleLenisScroll);
      }
    };
  }, [toggleVisibility]);

  const thumbTop = (scrollProgress / 100) * Math.max(STRIP_HEIGHT - THUMB_HEIGHT, 0);

  return (
    <>
      <AnimatePresence>
        {hasScrollableContent && isStripVisible && (
          <motion.div
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.2 }}
            className="fixed right-3 top-1/2 z-40 -translate-y-1/2 pointer-events-none"
            style={{ width: 4, height: STRIP_HEIGHT }}
          >
            <div
              className="relative h-full w-full rounded-full"
              style={{
                background: isDark ? 'rgba(79, 125, 248, 0.25)' : 'rgba(148, 163, 184, 0.32)',
              }}
            >
              <motion.div
                className="absolute left-0 rounded-full"
                animate={{ top: thumbTop }}
                transition={{ type: 'tween', duration: 0.12 }}
                style={{
                  width: 4,
                  height: THUMB_HEIGHT,
                  background: '#4F7DF8',
                  boxShadow: '0 0 10px rgba(79, 125, 248, 0.8)',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 25px 50px -12px rgba(79, 125, 248, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="
                relative w-14 h-14 rounded-full
                bg-[#162554]/80
                backdrop-blur-xl
                border border-white/20
                shadow-2xl
                flex items-center justify-center
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-white/50
                group overflow-hidden
              "
              style={{
                background: `
                  linear-gradient(135deg,
                    rgba(79, 125, 248, 0.85) 0%,
                    rgba(22, 37, 84, 0.9) 100%
                  )
                `,
                boxShadow: `
                  0 8px 32px rgba(79, 125, 248, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.4),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.2)
                `
              }}
              aria-label="Scroll to top"
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="z-10"
              >
                <ChevronUp
                  className="w-7 h-7 text-white"
                  style={{
                    filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.3))"
                  }}
                />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
