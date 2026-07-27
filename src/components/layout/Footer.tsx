import React from "react";
import Link from "next/link";
import { Stethoscope, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { BRAND, CONTACT, TIMINGS, FOOTER_LINKS, DOCTOR } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#162554] text-white pt-16 pb-12 rounded-t-[36px] sm:rounded-t-[48px] overflow-hidden mt-16 relative">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4F7DF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Doctor Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#4F7DF8] to-[#95CCDD] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#162554] rounded-[14px] flex items-center justify-center text-white">
                  <Stethoscope className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  {BRAND.name}
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#95CCDD] uppercase">
                  Super Speciality Dental Care
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Led by <strong className="text-white">{DOCTOR.name}</strong> (MDS Endodontist & Cosmetic Dentist with 17+ years experience). Over 10,000+ teeth saved with painless modern dentistry.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-medium text-[#95CCDD] border border-white/10">
                Reg No: A7388
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-medium text-[#95CCDD] border border-white/10">
                10,000+ Teeth Treated
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#95CCDD] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#4F7DF8] group-hover:translate-x-1 transition-transform">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide">Treatments</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.treatments.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#95CCDD] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#4F7DF8] group-hover:translate-x-1 transition-transform">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address & Timings */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide">Contact & Timings</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#95CCDD] shrink-0 mt-0.5" />
                <span>{CONTACT.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#95CCDD] shrink-0" />
                <a href={`tel:${CONTACT.phoneClean}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#95CCDD] shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
                  {CONTACT.email}
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#95CCDD] shrink-0 mt-1" />
                  <div className="text-xs space-y-1">
                    <p className="font-semibold text-white">{TIMINGS.weekdays.days}:</p>
                    <p>{TIMINGS.weekdays.morning} & {TIMINGS.weekdays.evening}</p>
                    <p className="font-semibold text-white pt-1">{TIMINGS.sunday.days}:</p>
                    <p>{TIMINGS.sunday.morning}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#95CCDD] hover:text-white transition-colors underline underline-offset-4"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
