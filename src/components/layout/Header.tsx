"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Calendar, Stethoscope } from "lucide-react";
import { BRAND, NAV_LINKS, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/components/providers/AppointmentModalProvider";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAppointmentModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-3 border-b border-gray-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#162554] via-[#4F7DF8] to-[#95CCDD] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#4F7DF8]">
              <Stethoscope className="w-6 h-6 stroke-[2.25]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#162554] leading-none group-hover:text-[#4F7DF8] transition-colors">
              {BRAND.name}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#4F7DF8] uppercase mt-0.5">
              Super Speciality Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            if ("children" in link && link.children) {
              const children = link.children;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive ? "text-[#4F7DF8] font-semibold" : "text-gray-700 hover:text-[#4F7DF8]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-[#4F7DF8]" : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 overflow-hidden"
                      >
                        {children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-[#EEF5FF] hover:text-[#4F7DF8] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#EEF5FF] text-[#4F7DF8] font-semibold"
                    : "text-gray-700 hover:text-[#4F7DF8] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneClean}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#162554] hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#4F7DF8]" />
            <span>{CONTACT.phone}</span>
          </a>

          <Button onClick={() => openModal()} variant="primary" size="md" icon={Calendar}>
            Book Appointment
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-2xl bg-white border border-gray-200 text-[#162554] hover:bg-gray-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-[#162554] hover:bg-[#EEF5FF] hover:text-[#4F7DF8] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href={`tel:${CONTACT.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-gray-100 text-[#162554] font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#4F7DF8]" />
                  <span>Call {CONTACT.phone}</span>
                </a>

                <Button onClick={() => { setMobileMenuOpen(false); openModal(); }} variant="primary" size="md" fullWidth icon={Calendar}>
                  Book Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
