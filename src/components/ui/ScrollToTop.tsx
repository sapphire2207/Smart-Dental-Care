"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Calendar } from 'lucide-react';
import { AppointmentModal } from './BookingBubble';
import { Button } from './Button';

const ScrollToTop: React.FC = () => {
  const isDark = true;
  const [isVisible, setIsVisible] = useState(false);
  const [isStripVisible, setIsStripVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrollableContent, setHasScrollableContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stripIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAutoOpenedRef = useRef(false);

  const STRIP_HEIGHT = 120;
  const THUMB_HEIGHT = 14;

  // Auto-open appointment modal: 10 seconds timer OR 40% scroll (whichever occurs first)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAutoOpenedRef.current) {
        hasAutoOpenedRef.current = true;
        setIsModalOpen(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

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

    // Auto-open appointment modal if user scrolls 35-50% (40% mark) before timer
    if (progress >= 40 && !hasAutoOpenedRef.current) {
      hasAutoOpenedRef.current = true;
      setIsModalOpen(true);
    }

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
      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Progress Strip */}
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

      {/* Stacked Floating Action Buttons Container (Desktop Only - Bottom Right) */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col gap-3 items-center">
        {/* Top Floating Icon: Open Appointment Modal */}
        <div className="relative group">
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="primary"
            size="md"
            icon={Calendar}
            className="!w-14 !h-14 !p-0 rounded-full shadow-[0_8px_32px_rgba(79,125,248,0.4)] hover:shadow-[0_12px_40px_rgba(79,125,248,0.6)] border-2 border-white"
          />

          {/* Hover Tooltip */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#162554] text-white text-xs font-bold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Book Appointment
          </div>
        </div>

        {/* Bottom Floating Icon: Scroll To Top */}
        <AnimatePresence>
          {isVisible && (
            <Button
              onClick={scrollToTop}
              variant="navy"
              size="md"
              icon={ChevronUp}
              className="!w-14 !h-14 !p-0 rounded-full shadow-2xl border-2 border-white/20"
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ScrollToTop;

