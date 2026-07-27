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

            <p className="text-gray-300/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Led by <strong className="text-white">{DOCTOR.name}</strong> (MDS Endodontist & Cosmetic Dentist with {DOCTOR.experienceYears}+ years experience). Painless modern dentistry with 10,000+ teeth treated.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-[#95CCDD] border border-white/10 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#95CCDD]" />
                Reg No: A7388
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-white border border-white/10">
                10,000+ Happy Smiles
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider text-[#95CCDD]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#4F7DF8] group-hover:translate-x-1 transition-transform font-bold">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Treatments List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider text-[#95CCDD]">
              Treatments
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.treatments.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#4F7DF8] group-hover:translate-x-1 transition-transform font-bold">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider text-[#95CCDD]">
              Contact & Hours
            </h4>

            <div className="space-y-2 text-xs text-gray-300">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#95CCDD] shrink-0 mt-0.5" />
                  <p className="leading-snug text-gray-200">{CONTACT.address.full}</p>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                  <Phone className="w-3.5 h-3.5 text-[#95CCDD]" />
                  <a href={`tel:${CONTACT.phoneClean}`} className="hover:text-white font-semibold text-gray-200">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#95CCDD]" />
                    {TIMINGS.weekdays.days}:
                  </span>
                  <span className="text-gray-300">{TIMINGS.weekdays.morning} & {TIMINGS.weekdays.evening}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/10">
                  <span className="font-semibold text-white flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#95CCDD]" />
                    {TIMINGS.sunday.days}:
                  </span>
                  <span className="text-gray-300">{TIMINGS.sunday.morning}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== HORIZONTAL CTA BANNER WITH ROUNDED CORNERS ===== */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E3470] via-[#254294] to-[#4F7DF8] p-6 sm:p-8 border border-white/15 shadow-2xl">
          {/* Background glow circle */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider border border-white/20 inline-block">
                Zero Wait-Time Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready for a Healthier, Brighter Smile?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                Book your consultation slot online with Dr. Amulya Prrasad. Receive immediate confirmation & direct receptionist support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-blue-50 text-[#162554] font-bold text-sm shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-[#4F7DF8]" />
                <span>Book Appointment Now</span>
              </button>

              <a
                href={`tel:${CONTACT.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#95CCDD]" />
                <span>Call {CONTACT.phone}</span>
              </a>
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
