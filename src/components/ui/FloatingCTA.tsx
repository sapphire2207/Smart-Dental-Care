"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, ChevronUp } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useAppointmentModal } from "@/components/providers/AppointmentModalProvider";
import { Button } from "@/components/ui/Button";

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    const handleScroll = () => {
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
            <div className="flex-1">
              <Button
                href={`tel:${CONTACT.phoneClean}`}
                variant="navy"
                size="sm"
                fullWidth
                icon={Phone}
              >
                Call Now
              </Button>
            </div>

            <div className="flex-[1.4]">
              <Button
                onClick={() => openModal()}
                variant="primary"
                size="sm"
                fullWidth
                icon={Calendar}
              >
                Book Appointment
              </Button>
            </div>

            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              variant="white"
              size="sm"
              icon={ChevronUp}
              className="!w-9 !h-9 !p-0 rounded-full shrink-0 shadow-md"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
