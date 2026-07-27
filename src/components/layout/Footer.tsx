"use client";

import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Calendar,
  ShieldCheck
} from "lucide-react";
import { BRAND, CONTACT, TIMINGS, NAV_LINKS, FOOTER_LINKS, DOCTOR } from "@/lib/constants";
import { useAppointmentModal } from "@/components/providers/AppointmentModalProvider";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  const { openModal } = useAppointmentModal();

  return (
    <footer className="bg-[#162554] text-white pt-12 sm:pt-16 pb-6 rounded-t-[36px] sm:rounded-t-[48px] overflow-hidden mt-16 relative">
      {/* Background soft glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4F7DF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#95CCDD]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 space-y-10">
        {/* ===== TOP SECTION: Brand, NavLinks, Treatments & Contact ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-8 border-b border-white/10 items-start">
          {/* Col 1: Brand & Doctor Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="group-hover:scale-105 transition-transform duration-300 shrink-0">
                <LogoIcon className="w-10 h-10 filter drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {BRAND.name}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#95CCDD] uppercase">
                  Super Speciality Dental Care
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Lead Endodontist & Cosmetic Specialist <strong className="text-white font-semibold">{DOCTOR.name}</strong> (BDS, MDS). Treating 10,000+ teeth with pain-free precision.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-blue-100">
              <ShieldCheck className="w-4 h-4 text-[#95CCDD]" />
              <span>Sterilized Autoclave Facility</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#95CCDD] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Popular Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FOOTER_LINKS.treatments.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#95CCDD] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#95CCDD] shrink-0 mt-0.5" />
                <span>{CONTACT.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#95CCDD] shrink-0" />
                <a href={`tel:${CONTACT.phoneClean}`} className="hover:text-white transition-colors font-semibold">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#95CCDD] shrink-0 mt-0.5" />
                <div>
                  <p><strong className="text-white">Mon - Sat:</strong> {TIMINGS.weekdays.morning} & {TIMINGS.weekdays.evening}</p>
                  <p><strong className="text-white">Sunday:</strong> {TIMINGS.sunday.morning}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== HORIZONTAL ROUNDED CTA BANNER ===== */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1E3470] via-[#4F7DF8] to-[#1E3470] p-6 sm:p-8 shadow-2xl border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready for a Healthier, Brighter Smile?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                Book your consultation slot online with Dr. Amulya Prrasad. Receive immediate confirmation & direct receptionist support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Button
                onClick={() => openModal()}
                variant="white"
                size="md"
                icon={Calendar}
              >
                Book Appointment Now
              </Button>

              <Button
                href={`tel:${CONTACT.phoneClean}`}
                variant="navy"
                size="md"
                icon={Phone}
              >
                Call {CONTACT.phone}
              </Button>
            </div>
          </div>
        </div>

        {/* ===== TERMS & PRIVACY LINKS ===== */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 border-t border-white/10">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Clinic Directions
            </Link>
          </div>
        </div>

        {/* ===== BIG BRAND NAME AT VERY BOTTOM ===== */}
        <div className="pt-4 pb-2 border-t border-white/5 text-center overflow-hidden">
          <span className="text-4xl sm:text-7xl lg:text-[105px] font-black text-white/5 uppercase tracking-tighter block select-none pointer-events-none leading-none">
            SMART DENTAL CARE
          </span>
        </div>
      </div>
    </footer>
  );
};
