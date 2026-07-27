"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  ShieldCheck,
  Star,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Sparkles,
  Stethoscope,
  Activity,
  ChevronRight,
  MapPin,
  Clock
} from "lucide-react";
import { BRAND, DOCTOR, CONTACT, STATS, WHY_CHOOSE_US, PATIENT_JOURNEY } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/lib/faq-data";

export default function HomePage() {
  const popularServices = SERVICES.filter((s) => s.isPopular).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO                                                          */}
      {/* ========================================================================= */}
      <section className="relative pt-4 sm:pt-6">
        <div className="container-custom">
          {/* Main Rounded Hero Container */}
          <div className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-[#EEF5FF] via-[#FAFBFD] to-white p-6 sm:p-10 lg:p-14 border border-white shadow-[0_12px_48px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Background Decorative Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4F7DF8]/10 to-[#95CCDD]/20 rounded-full blur-3xl -z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EEF5FF] rounded-full blur-2xl -z-0 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
              {/* Left Text Content Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6 sm:space-y-8"
              >
                {/* Experience Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#4F7DF8]/20 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4F7DF8] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-[#162554]">
                    17+ Years of Trusted Dental Excellence
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.1]">
                  Expert Care for{" "}
                  <span className="bg-gradient-to-r from-[#4F7DF8] via-[#3A62D4] to-[#6B93FF] bg-clip-text text-transparent">
                    Healthier, Happier
                  </span>{" "}
                  Smiles<span className="text-[#4F7DF8]">.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Advanced dental treatments with compassion, precision, and state-of-the-art technology. Specializing in painless Root Canal Treatments, Cosmetic Smile Redesigns, and Dental Implants.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/book-appointment" variant="primary" size="lg" icon={Calendar}>
                    Book an Appointment
                  </Button>
                  <Button href="/about" variant="secondary" size="lg" icon={ArrowRight}>
                    Learn More About Us
                  </Button>
                </div>

                {/* Social Proof Row */}
                <div className="pt-4 border-t border-gray-200/60 flex flex-wrap items-center gap-6">
                  <div className="flex items-center -space-x-3">
                    {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg", "/images/avatar-4.jpg"].map(
                      (src, idx) => (
                        <div
                          key={idx}
                          className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-tr from-[#4F7DF8] to-[#95CCDD] flex items-center justify-center text-white text-xs font-bold shadow-sm"
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                      )
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="text-sm font-bold text-[#162554] ml-1">4.9 / 5</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">10,000+ Happy Patients Treated</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Portrait & Floating Stats Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-5 relative flex justify-center"
              >
                {/* Main Doctor Image Container */}
                <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-tr from-[#162554] to-[#4F7DF8] shadow-[0_20px_50px_rgba(22,37,84,0.15)] border-4 border-white">
                  <div className="absolute inset-0 bg-[#EEF5FF] flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white p-1 shadow-lg relative overflow-hidden mb-4 border-2 border-[#4F7DF8]/30">
                      <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                        <Image
                          src={DOCTOR.image}
                          alt={DOCTOR.name}
                          fill
                          priority
                          sizes="160px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#162554]">{DOCTOR.name}</h3>
                    <p className="text-sm font-semibold text-[#4F7DF8] mt-1">{DOCTOR.title}</p>
                    <p className="text-xs text-gray-500 mt-2 max-w-xs">
                      BDS (Kamineni) • MDS (Mamata Dental College) • 17+ Yrs Experience
                    </p>
                    <div className="mt-4 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verified Medical Specialist</span>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1: 17+ Years */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-2 sm:right-0 bg-white/95 backdrop-blur-md rounded-[20px] p-3.5 sm:p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#162554]">
                      <AnimatedCounter value="17+" />
                    </div>
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Years Experience</div>
                  </div>
                </motion.div>

                {/* Floating Card 2: 10,000+ Happy Patients */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-[20px] p-3.5 sm:p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#162554]">
                      <AnimatedCounter value="10,000+" />
                    </div>
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Happy Patients</div>
                  </div>
                </motion.div>

                {/* Floating Card 3: 4.9 Rating */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 right-6 bg-white/95 backdrop-blur-md rounded-[20px] p-3.5 sm:p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#162554]">4.9 / 5</div>
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Patient Rating</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHY CHOOSE US CARDS BAR                                       */}
      {/* ========================================================================= */}
      <section className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.slice(0, 4).map((item, idx) => (
            <Card key={idx} hover borderGradient className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0 group-hover:bg-[#4F7DF8] group-hover:text-white transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#162554] group-hover:text-[#4F7DF8] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ABOUT CLINIC PREVIEW                                           */}
      {/* ========================================================================= */}
      <section className="container-custom">
        <div className="rounded-[32px] sm:rounded-[40px] bg-white p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-tr from-[#162554] to-[#4F7DF8] aspect-[4/3] shadow-lg border border-gray-100 flex items-center justify-center p-8 text-white text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto text-[#95CCDD]">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold">Smart Technology for Better Smiles</h3>
                  <p className="text-xs text-gray-200 max-w-sm">
                    Equipped with digital apex locators, intraoral cameras, and low-radiation RVG X-ray systems.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#162554] text-white p-6 rounded-[24px] shadow-xl max-w-xs">
                <div className="text-3xl font-extrabold text-[#95CCDD]">10,000+</div>
                <div className="text-xs text-gray-300 font-medium mt-1">Teeth Successfully Treated & Saved</div>
              </div>
            </div>

            {/* Right Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="About Smart Dental Care"
                title="Your Smile. Our Passion."
                highlightedText="Our Commitment."
                align="left"
              />

              <p className="text-base text-gray-600 leading-relaxed">
                At Smart Dental Care, we believe every smile deserves exceptional care. Led by Dr. Amulya Prrasad, our clinic combines 17+ years of clinical expertise, modern technology, and a gentle approach to deliver comfortable, stress-free dental experiences.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Experienced Endodontist & Cosmetic Dentist",
                  "Advanced Dental Technologies",
                  "Transparent & Affordable Pricing",
                  "Painless Dental Care",
                  "Strict Sterilization Protocols",
                  "100% Patient Comfort First"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-[#162554]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/about" variant="primary" size="md" icon={ArrowRight}>
                  Know More About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: POPULAR TREATMENTS PREVIEW                                    */}
      {/* ========================================================================= */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="Our Treatments"
          title="Comprehensive Dental Care"
          highlightedText="for Every Smile"
          description="From routine checkups to complex root canals and cosmetic smile transformations, explore our specialized services."
        />

        {/* 6 Popular Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularServices.map((service) => (
            <Card key={service.id} hover className="flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center group-hover:bg-[#4F7DF8] group-hover:text-white transition-colors duration-300">
                  <Activity className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4F7DF8] bg-[#EEF5FF] px-3 py-1 rounded-full inline-block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#162554] group-hover:text-[#4F7DF8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
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

        {/* View All Services CTA */}
        <div className="text-center pt-4">
          <Button href="/services" variant="navy" size="lg" icon={ArrowRight}>
            View All 24 Surgeries & Treatments
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: BEFORE & AFTER COMPARISON                                     */}
      {/* ========================================================================= */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="Before & After"
          title="Real Results."
          highlightedText="Real Smiles."
          description="Drag the slider to see how cosmetic dentistry and specialized treatments transform smiles."
        />

        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage="/images/gallery/ba-1-before.jpg"
            afterImage="/images/gallery/ba-1-after.jpg"
            title="Cosmetic Makeover & Veneers"
            beforeLabel="Before Treatment"
            afterLabel="After Treatment"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: PATIENT JOURNEY TIMELINE                                       */}
      {/* ========================================================================= */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="Patient Journey"
          title="Your Path to a"
          highlightedText="Perfect Smile"
          description="We make your dental visit simple, transparent, and completely stress-free."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {PATIENT_JOURNEY.map((step, idx) => (
            <div key={idx} className="relative">
              <Card hover className="h-full text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#162554] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-[#162554]">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: TESTIMONIALS CAROUSEL                                          */}
      {/* ========================================================================= */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="Patient Testimonials"
          title="Loved by Thousands of"
          highlightedText="Happy Patients"
          description="Read real patient reviews about their painless treatment experiences at Smart Dental Care."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <Card key={item.id} hover className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-[#162554]">{item.name}</h5>
                  <p className="text-xs text-gray-500">{item.treatment}</p>
                </div>
                {item.verified && (
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <Button href="/testimonials" variant="outline" size="md" icon={ArrowRight}>
            Read All Patient Reviews
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FAQS PREVIEW                                                   */}
      {/* ========================================================================= */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked"
          highlightedText="Questions"
          description="Got questions? We have answers to help you prepare for your visit."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={FAQS.slice(0, 5)} />
        </div>

        <div className="text-center pt-2">
          <Button href="/faq" variant="ghost" size="md" icon={ArrowRight}>
            View All FAQs
          </Button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: APPOINTMENT CTA BANNER                                        */}
      {/* ========================================================================= */}
      <section className="container-custom pb-8">
        <div className="rounded-[36px] bg-gradient-to-r from-[#162554] via-[#4F7DF8] to-[#162554] p-8 sm:p-14 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <span className="px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-white border border-white/20 inline-block">
            Ready for your healthiest smile?
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto">
            Book Your Dental Appointment Today
          </h2>

          <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto">
            Take the first step towards pain-free teeth and a bright smile. Consult with Dr. Amulya Prrasad today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/book-appointment" variant="white" size="lg" icon={Calendar}>
              Book Appointment Online
            </Button>
            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5 text-[#95CCDD]" />
              <span>Call {CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
