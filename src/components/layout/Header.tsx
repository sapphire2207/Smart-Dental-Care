"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { BRAND, NAV_LINKS, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/components/providers/AppointmentModalProvider";
import { LogoIcon } from "@/components/ui/LogoIcon";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200/90 py-2 px-4 sm:px-5"
            : "bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 py-2.5 px-4 sm:px-5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="group-hover:scale-105 transition-transform duration-300 shrink-0">
              <LogoIcon className="w-9 sm:w-10 h-auto filter drop-shadow-sm" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#162554] leading-tight group-hover:text-[#4F7DF8] transition-colors whitespace-nowrap">
                {BRAND.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-[#4F7DF8] uppercase leading-none">
                Super Speciality Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Tight Spacing */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-gray-50/80 p-1 rounded-full border border-gray-100">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)) ||
                ("children" in link && link.children?.some((c) => pathname.startsWith(c.href)));

              const isDropdownOpen = activeDropdown === link.label;

              if ("children" in link && link.children) {
                const children = link.children;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-[#EEF5FF] text-[#4F7DF8]"
                          : "text-gray-700 hover:text-[#4F7DF8] hover:bg-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-[#4F7DF8]" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-1.5 z-50 overflow-hidden"
                        >
                          {children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-700 hover:bg-[#EEF5FF] hover:text-[#4F7DF8] whitespace-nowrap transition-colors"
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
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-[#EEF5FF] text-[#4F7DF8]"
                      : "text-gray-700 hover:text-[#4F7DF8] hover:bg-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#162554] hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#4F7DF8]" />
              <span>{CONTACT.phone}</span>
            </a>

            <Button
              onClick={() => openModal()}
              variant="primary"
              size="sm"
              icon={Calendar}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-50 border border-gray-200 text-[#162554] hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-5xl mx-auto mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="p-4 space-y-3">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {"children" in link && link.children ? (
                      <div className="space-y-1 py-1">
                        <span className="px-3.5 text-xs font-bold uppercase text-[#4F7DF8] tracking-wider">
                          {link.label}
                        </span>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-[#EEF5FF] hover:text-[#4F7DF8] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-3.5 py-2.5 rounded-xl text-base font-semibold text-[#162554] hover:bg-[#EEF5FF] hover:text-[#4F7DF8] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${CONTACT.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-gray-100 text-[#162554] font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#4F7DF8]" />
                  <span>Call {CONTACT.phone}</span>
                </a>

                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={Calendar}
                >
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
