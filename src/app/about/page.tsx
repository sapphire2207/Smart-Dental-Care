import React from "react";
import Metadata from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Calendar,
  Users,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  ArrowRight,
  GraduationCap,
  MapPin,
  Clock,
  ChevronRight
} from "lucide-react";
import { BRAND, DOCTOR, CONTACT, TIMINGS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us | Smart Dental Care LB Nagar",
  description: "Learn about Smart Dental Care, led by Dr. Amulya Prrasad (MDS Endodontist & Cosmetic Dentist with 17+ years experience). Over 10,000+ teeth treated in LB Nagar, Hyderabad.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Hero Section */}
      <section className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-br from-[#EEF5FF] via-[#FAFBFD] to-white p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20">
              About Smart Dental Care
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
              Pioneering{" "}
              <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
                Painless & Advanced
              </span>{" "}
              Endodontics
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established in 2009 in LB Nagar, Hyderabad, Smart Dental Care was founded with a singular mission: providing world-class dental care with compassion, transparency, and modern precision technology.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Bio & Credentials Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Profile Card */}
          <div className="lg:col-span-5 relative">
            <Card padding="none" className="overflow-hidden border-4 border-white shadow-xl">
              <div className="relative aspect-[4/5] bg-gradient-to-tr from-[#162554] to-[#4F7DF8] flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white p-1 shadow-2xl mb-5 relative overflow-hidden shrink-0 border-4 border-white/80 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-[#EEF5FF]">
                    <Image
                      src={DOCTOR.image}
                      alt={DOCTOR.name}
                      fill
                      priority
                      sizes="200px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold">{DOCTOR.name}</h3>
                <p className="text-[#95CCDD] font-semibold mt-1 text-base">{DOCTOR.title}</p>
                <p className="text-xs text-gray-300 mt-2">
                  Reg No: A7388 • AP State Dental Council
                </p>
                <div className="mt-6 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  ✓ Claimed & Verified Medical Profile
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Doctor Story & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Meet The Specialist"
              title="From the Desk of"
              highlightedText={DOCTOR.name}
              align="left"
            />

            <blockquote className="p-6 rounded-[24px] bg-[#EEF5FF] border-l-4 border-[#4F7DF8] text-[#162554] font-medium italic text-base sm:text-lg leading-relaxed">
              &ldquo;Dr. Amulya Prrasad says: &lsquo;I like to think that for over 9 years I have been helping general dental practitioners solve their endodontic problems. In that time I have treated something over 10,000 teeth!&rsquo;&rdquo;
            </blockquote>

            <p className="text-gray-600 leading-relaxed">
              Dr. Amulya Prrasad qualified in 2009 from the Kamineni Institute of Dental Sciences, Narketpally, Telangana. Following his undergraduate degree, he pursued his Master&apos;s degree (MDS) in Conservative Dentistry and Endodontics at Mamata Dental College, Khammam, Telangana.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-[#4F7DF8]">17+</div>
                <div className="text-xs font-semibold text-gray-500">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-[#4F7DF8]">10,000+</div>
                <div className="text-xs font-semibold text-gray-500">Teeth Treated</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                <div className="text-2xl font-bold text-[#4F7DF8]">24+</div>
                <div className="text-xs font-semibold text-gray-500">Treatments</div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/doctor" variant="primary" size="md" icon={<ChevronRight className="w-5 h-5" />}>
                View Full Doctor Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To deliver gentle, high-precision root canal and aesthetic dental procedures using advanced technology so patients can keep their natural teeth comfortably for life.
            </p>
          </Card>

          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To remain the most trusted super-speciality dental clinic in LB Nagar & Hyderabad, renowned for ethical treatment, single-sitting endodontics, and patient satisfaction.
            </p>
          </Card>

          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Our Values</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Painless technique, 100% sterilization integrity, transparent pricing with zero hidden costs, and personal individual attention to every patient.
            </p>
          </Card>
        </div>
      </section>

      {/* Clinic Location & Hours Banner */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-[#162554] text-white p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-[#95CCDD]">
                Location & Accessibility
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">Visit Smart Dental Care</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {CONTACT.address.full}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-[#95CCDD]" />
                <span>Landmark: {CONTACT.address.landmark}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-[24px] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#95CCDD] font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Working Hours</span>
              </div>
              <div className="text-xs text-gray-200 space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Sat Morning:</span>
                  <span className="font-semibold text-white">{TIMINGS.weekdays.morning}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Sat Evening:</span>
                  <span className="font-semibold text-white">{TIMINGS.weekdays.evening}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday Morning:</span>
                  <span className="font-semibold text-white">{TIMINGS.sunday.morning}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
