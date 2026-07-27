"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useAppointmentModal } from "@/components/providers/AppointmentModalProvider";

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (>300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <div className="flex items-center gap-2 p-2 bg-[#162554]/95 backdrop-blur-lg rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/10">
            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#95CCDD]" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => openModal()}
              className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#4F7DF8] hover:bg-[#3A62D4] text-white font-semibold text-sm shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
