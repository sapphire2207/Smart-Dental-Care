"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Stethoscope,
  Activity,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Clock,
  User,
  Scan,
  Heart,
  ExternalLink
} from "lucide-react";
import { BRAND, DOCTOR, CONTACT, STATS, WHY_CHOOSE_US, PATIENT_JOURNEY } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { FAQS } from "@/lib/faq-data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useAppointmentModal } from "@/components/providers/AppointmentModalProvider";
import { GoogleIcon } from "@/components/ui/GoogleIcon";

export default function HomePage() {
  const { openModal } = useAppointmentModal();
  const popularServices = SERVICES.filter((s) => s.isPopular).slice(0, 6);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<string>("faq-1");

  // Inline CTA form state
  const [ctaForm, setCtaForm] = useState({ name: "", phone: "" });

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="relative space-y-20 sm:space-y-28 lg:space-y-36 overflow-hidden pb-12">
      {/* ========================================================================= */}
      {/* BACKGROUND LINE GRAPHICS & FLOATING AMBIENT ORBS                           */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Ambient Gradient Orbs */}
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#4F7DF8]/12 via-[#95CCDD]/15 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-[800px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-[#EEF5FF] via-[#4F7DF8]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[2000px] right-[-100px] w-[600px] h-[600px] bg-[#95CCDD]/10 rounded-full blur-3xl" />

        {/* Elegant Geometric Line Grid Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#162554" strokeWidth="1" />
              <circle cx="60" cy="0" r="2" fill="#4F7DF8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SHOWCASE                                                   */}
      {/* ========================================================================= */}
      <section className="container-custom pt-2 sm:pt-4">
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-[#EEF5FF]/90 via-[#FAFBFD] to-white p-6 sm:p-10 lg:p-14 border border-white shadow-[0_12px_48px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Background Ambient Blur Orbs */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[#4F7DF8]/15 via-[#95CCDD]/20 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EEF5FF] rounded-full blur-2xl -z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 sm:space-y-8"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#4F7DF8]/20 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4F7DF8] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-[#162554]">
                  17+ Years of Trusted Dental Excellence
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#162554] tracking-tight leading-[1.12]">
                Expert Care for{" "}
                <span className="bg-gradient-to-r from-[#4F7DF8] via-[#3A62D4] to-[#6B93FF] bg-clip-text text-transparent">
                  Healthier, Happier
                </span>{" "}
                Smiles<span className="text-[#4F7DF8]">.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                Advanced dental treatments with compassion, precision, and state-of-the-art technology. Specializing in painless Root Canal Treatments, Cosmetic Smile Redesigns, and Dental Implants.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => openModal()}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] hover:from-[#3A62D4] hover:to-[#2A4EB8] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book an Appointment</span>
                </button>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#EEF5FF] hover:bg-white text-[#162554] font-bold text-sm sm:text-base border border-[#4F7DF8]/20 transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#4F7DF8]" />
                </Link>
              </div>

              {/* Verified Google Rating & Social Proof Row */}
              <div className="pt-4 border-t border-gray-200/60 flex flex-wrap items-center gap-5">
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 px-3.5 rounded-2xl bg-white border border-gray-200/80 hover:border-[#4F7DF8]/40 shadow-sm transition-all group"
                >
                  <GoogleIcon className="w-4 h-4 shrink-0" />
                  <div className="flex items-center gap-0.5 text-[#F59E0B]">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none" />
                    <div className="relative w-3.5 h-3.5">
                      <Star className="w-3.5 h-3.5 text-gray-300 fill-gray-200 stroke-none" />
                      <div className="absolute inset-0 w-[50%] overflow-hidden">
                        <Star className="w-3.5 h-3.5 fill-[#F59E0B] stroke-none" />
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-[#162554] text-xs">4.5 / 5.0 (49)</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#4F7DF8] transition-colors" />
                </a>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>10,000+ Teeth Treated & Saved</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Clean 4K Dental Image Card (No Tacky AI Floating Boxes) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Main Image Container */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[36px] overflow-hidden bg-gradient-to-tr from-[#162554] to-[#4F7DF8] p-1.5 shadow-[0_20px_50px_rgba(22,37,84,0.12)] border-4 border-white">
                <div className="w-full h-full rounded-[30px] overflow-hidden relative bg-[#EEF5FF]">
                  <Image
                    src="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?q=80&w=1200&auto=format&fit=crop"
                    alt="Clean 4K Dental Teeth Care"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162554]/85 via-[#162554]/20 to-transparent flex flex-col justify-end p-6 text-white space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold text-white w-fit border border-white/20 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Dental Clinic & Specialist</span>
                    </div>
                    <h4 className="text-xl font-extrabold text-white">{DOCTOR.name}</h4>
                    <p className="text-xs text-[#95CCDD] font-semibold">{DOCTOR.title}</p>
                    <p className="text-[11px] text-gray-300 pt-1">
                      BDS (Kamineni) • MDS (Mamata Dental College) • Reg No: A7388
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 3-CARD HERO GRID (Inspiration Image 1)                          */}
      {/* ========================================================================= */}
      <section className="container-custom">
        {/* Top Header Row: Category Badge + Title on Left, Copy + CTA on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-extrabold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
              Smile & Dental Care
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#162554] tracking-tight leading-[1.12]">
              Advanced dentistry <br className="hidden sm:inline" />
              for every smile<span className="text-[#4F7DF8]">.</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-md lg:pb-1">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              Complete care for your smile — prevention, restoration, and aesthetic treatments in one place led by Dr. Amulya Prrasad.
            </p>
            <div>
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#162554] hover:bg-[#1E3470] text-white text-sm font-bold shadow-lg transition-all duration-300 group"
              >
                <span>Schedule Appointment</span>
                <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-[#95CCDD]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Interactive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Main Feature Card - Dental Treatment (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#4F7DF8] via-[#3A62D4] to-[#162554] p-8 sm:p-10 text-white min-h-[380px] sm:min-h-[420px] flex flex-col justify-between shadow-xl group"
          >
            {/* Background High-Res Image Overlay */}
            <div className="absolute inset-0 mix-blend-overlay opacity-35 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
                alt="Smiling Dental Patient"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 space-y-3 max-w-lg">
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Dental Treatment
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-md">
                Comprehensive care including check-ups, fillings, single-sitting root canal therapy, crowns, and preventive treatments — tailored to your needs.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between border-t border-white/20 mt-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-white/90">
                  ✨ 17+ Years Specialist Care
                </span>
              </div>

              {/* Diagonal Action Link Button */}
              <Link
                href="/services"
                className="w-12 h-12 rounded-2xl bg-[#162554]/90 hover:bg-[#162554] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                aria-label="Explore Dental Treatments"
              >
                <ArrowUpRight className="w-6 h-6 text-[#95CCDD]" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Orthodontics & Aligners (3 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 relative rounded-[32px] overflow-hidden bg-[#EEF5FF] p-8 border border-[#4F7DF8]/20 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4F7DF8] bg-white px-3 py-1 rounded-full border border-[#4F7DF8]/20 inline-block">
                Clear Aligners
              </span>
              <h3 className="text-2xl font-black text-[#162554] pt-2">Orthodontics</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Invisible aligners & braces for teeth straightening with zero metal discomfort.
              </p>
            </div>

            {/* Vertical Stylized Typography Watermark */}
            <div className="my-auto py-4 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black text-[#162554]/10 uppercase tracking-widest rotate-90 select-none group-hover:text-[#4F7DF8]/20 transition-colors">
                Braces
              </span>
            </div>

            <Link
              href="/services/invisalign"
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white text-[#162554] font-bold text-xs hover:bg-[#4F7DF8] hover:text-white transition-colors border border-gray-200/80 shadow-sm"
            >
              <span>Explore Aligners</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Card 3: Dental Surgery & Implants (3 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 relative rounded-[32px] overflow-hidden bg-white p-8 border border-gray-100 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                Specialized Care
              </span>
              <h3 className="text-2xl font-black text-[#162554] pt-2">Dental Surgery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Implants, surgical extractions, and single-sitting root canals.
              </p>
            </div>

            {/* 3D Tooth Illustration / Card Highlight */}
            <div className="relative w-full h-36 my-2 rounded-2xl bg-gradient-to-tr from-[#EEF5FF] to-[#D0E7E6]/40 flex items-center justify-center p-4">
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-[#4F7DF8] group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-10 h-10 stroke-[1.75]" />
              </div>
            </div>

            <Link
              href="/services/dental-implants"
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#162554] text-white font-bold text-xs hover:bg-[#4F7DF8] transition-colors shadow-md"
            >
              <span>Implants & Surgery</span>
              <ChevronRight className="w-4 h-4 text-[#95CCDD]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: FLOATING CLINIC HIGHLIGHT TICKER STRIP                         */}
      {/* ========================================================================= */}
      <section className="container-custom">
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-2 space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-[#162554]">17+ Years</div>
              <div className="text-xs font-semibold text-[#4F7DF8]">Specialist Expertise</div>
            </div>
            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl font-black text-[#162554]">10,000+</div>
              <div className="text-xs font-semibold text-emerald-600">Teeth Treated & Saved</div>
            </div>
            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl font-black text-[#162554]">100%</div>
              <div className="text-xs font-semibold text-[#4F7DF8]">Painless Dentistry</div>
            </div>
            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl font-black text-[#162554]">4.5 / 5.0</div>
              <div className="text-xs font-semibold text-amber-500">49 Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: POPULAR TREATMENTS GRID                                       */}
      {/* ========================================================================= */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="Our Treatments"
          title="Comprehensive Care"
          highlightedText="for Every Smile"
          description="From single-sitting root canals to cosmetic veneers and dental implants, explore our specialized procedures."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularServices.map((service) => (
            <Card key={service.id} hover className="flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center group-hover:bg-[#4F7DF8] group-hover:text-white transition-colors duration-300">
                  <Activity className="w-7 h-7 stroke-[1.75]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#4F7DF8] bg-[#EEF5FF] px-3 py-1 rounded-full inline-block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#162554] group-hover:text-[#4F7DF8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4F7DF8] hover:text-[#3A62D4] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <Button href="/services" variant="navy" size="lg" icon={ArrowRight}>
            View All 24 Surgeries & Treatments
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: INTERACTIVE FAQ SECTION (Matching Inspiration Image 2)          */}
      {/* ========================================================================= */}
      <section className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-b from-[#FAFBFD] via-[#EEF5FF]/50 to-white p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: 3D Tooth Model Backdrop Circle */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-6">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#EEF5FF] via-white to-[#D0E7E6]/40 p-4 shadow-xl border-4 border-white flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-[#162554] flex items-center justify-center text-white shadow-inner">
                  <Stethoscope className="w-16 h-16 text-[#95CCDD] stroke-[1.5]" />
                </div>
              </div>

              <div className="space-y-2 max-w-xs">
                <h4 className="text-xl font-extrabold text-[#162554]">Need Quick Answers?</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Clear, transparent guidance on treatment procedures, painless techniques, and clinic timings.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive FAQ Accordion List */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-extrabold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
                  FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#162554] tracking-tight">
                  Get clear answers to your questions
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {FAQS.slice(0, 4).map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "bg-white border-[#4F7DF8]/40 shadow-lg p-6"
                          : "bg-white/60 border-gray-200/80 hover:bg-white p-5"
                      }`}
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? "" : faq.id)}
                        className="w-full flex items-center justify-between text-left font-bold text-base sm:text-lg text-[#162554] focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#4F7DF8] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="pt-4 space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-3"
                          >
                            <p>{faq.answer}</p>

                            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                              <button
                                onClick={() => openModal()}
                                className="px-4 py-2 rounded-xl bg-[#162554] hover:bg-[#1E3470] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                              >
                                <span>Learn more / Ask Doctor</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#95CCDD]" />
                              </button>

                              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                ✓ Verified by Dr. Amulya Prrasad
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: QUICK BOOKING CTA CARD (Matching Inspiration Image 3)           */}
      {/* ========================================================================= */}
      <section className="container-custom">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#EEF5FF] via-[#E4EFFF] to-[#D0E7E6]/40 p-8 sm:p-12 lg:p-14 border border-[#4F7DF8]/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Copy & Quick Form Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#162554] tracking-tight">
                  Your confident <br className="hidden sm:inline" />
                  smile starts here
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  Schedule your consultation and let our experienced team create a treatment plan designed just for you.
                </p>
              </div>

              {/* Quick Input Bar */}
              <form onSubmit={handleCtaSubmit} className="space-y-4 max-w-md pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={ctaForm.name}
                    onChange={(e) => setCtaForm({ ...ctaForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-xs sm:text-sm font-medium text-[#162554] placeholder-gray-400 focus:outline-none focus:border-[#4F7DF8] shadow-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Your phone"
                    value={ctaForm.phone}
                    onChange={(e) => setCtaForm({ ...ctaForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-xs sm:text-sm font-medium text-[#162554] placeholder-gray-400 focus:outline-none focus:border-[#4F7DF8] shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#162554] hover:bg-[#1E3470] text-white font-bold text-sm shadow-xl transition-all duration-300 group"
                >
                  <span>Schedule Appointment</span>
                  <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-4 h-4 text-[#95CCDD]" />
                  </div>
                </button>
              </form>

              <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero waiting time for online reservations</span>
              </div>
            </div>

            {/* Right Side: Clean Doctor Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-[36px] overflow-hidden bg-gradient-to-tr from-[#162554] to-[#4F7DF8] p-1 border-4 border-white shadow-xl">
                <div className="w-full h-full rounded-[32px] overflow-hidden relative bg-[#EEF5FF]">
                  <Image
                    src={DOCTOR.image}
                    alt={DOCTOR.name}
                    fill
                    sizes="400px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
