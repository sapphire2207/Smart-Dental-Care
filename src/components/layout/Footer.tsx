import React from "react";
import Link from "next/link";
import { Stethoscope, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { BRAND, CONTACT, TIMINGS, NAV_LINKS, DOCTOR } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#162554] text-white pt-10 pb-8 rounded-t-[32px] sm:rounded-t-[40px] overflow-hidden mt-12 relative">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4F7DF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10 items-start">
          {/* Col 1: Brand & Doctor Summary */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F7DF8] to-[#95CCDD] p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#162554] rounded-[10px] flex items-center justify-center text-white">
                  <Stethoscope className="w-5 h-5" />
                </div>
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

            <p className="text-gray-300/80 text-xs sm:text-sm leading-relaxed max-w-md">
              Led by <strong className="text-white">{DOCTOR.name}</strong> (MDS Endodontist & Cosmetic Dentist with 17+ years experience). Over 10,000+ teeth saved with painless modern dentistry.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-[#95CCDD] border border-white/10">
                Reg No: A7388
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-[#95CCDD] border border-white/10">
                10,000+ Teeth Treated
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Matching Navbar Routes) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide border-b-2 border-[#4F7DF8] pb-1 inline-block">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 pt-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-[#95CCDD] text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-[#4F7DF8] group-hover:translate-x-1 transition-transform font-bold text-sm">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Compact Address, Contact & Timings Strips */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide border-b-2 border-[#95CCDD] pb-1 inline-block">
              Contact & Timings
            </h4>
            
            <div className="space-y-2.5">
              {/* Compact Address Strip */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-1.5 text-xs hover:bg-white/[0.08] transition-colors">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#95CCDD] shrink-0 mt-0.5" />
                  <p className="text-gray-300/90 leading-snug">
                    <strong className="text-white">Address:</strong> {CONTACT.address.full}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1.5 border-t border-white/10 text-[11px]">
                  <a href={`tel:${CONTACT.phoneClean}`} className="flex items-center gap-1 text-gray-200 hover:text-white transition-colors">
                    <Phone className="w-3 h-3 text-[#95CCDD]" />
                    <span>{CONTACT.phone}</span>
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors truncate max-w-[200px]">
                    <Mail className="w-3 h-3 text-[#95CCDD]" />
                    <span>{CONTACT.email}</span>
                  </a>
                </div>
              </div>

              {/* Compact Timings & Directions Strip */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 text-xs hover:bg-white/[0.08] transition-colors">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#95CCDD]" />
                    <span>{TIMINGS.weekdays.days}:</span>
                  </span>
                  <span>{TIMINGS.weekdays.morning} & {TIMINGS.weekdays.evening}</span>
                </div>
                <div className="flex items-center justify-between text-gray-300 pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#95CCDD]" />
                    <span>{TIMINGS.sunday.days}:</span>
                  </span>
                  <span>{TIMINGS.sunday.morning}</span>
                </div>
                <div className="pt-1">
                  <a
                    href={CONTACT.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#4F7DF8]/20 hover:bg-[#4F7DF8]/30 border border-[#4F7DF8]/30 text-[#95CCDD] hover:text-white text-xs font-semibold transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#95CCDD] transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-[#95CCDD] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

