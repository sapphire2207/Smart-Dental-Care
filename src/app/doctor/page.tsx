import React from "react";
import Metadata from "next";
import {
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Stethoscope,
  Building,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  FileCheck
} from "lucide-react";
import { DOCTOR, BRAND, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/lib/faq-data";

export const metadata = {
  title: `${DOCTOR.name} - Endodontist & Cosmetic Dentist | Smart Dental Care`,
  description: `${DOCTOR.name} profile. BDS, MDS Endodontist with 17+ years experience in root canal treatment, single sitting RCT, and cosmetic dentistry. Registered with AP Dental Council.`,
};

export default function DoctorPage() {
  const doctorFaqs = FAQS.filter((f) => f.category === "doctor");

  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Hero Section */}
      <section className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-br from-[#EEF5FF] via-white to-[#EEF5FF] p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Doctor Portrait */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-tr from-[#162554] to-[#4F7DF8] border-4 border-white shadow-2xl flex flex-col items-center justify-center p-8 text-white text-center">
                <div className="w-32 h-32 rounded-full bg-white text-[#4F7DF8] flex items-center justify-center shadow-lg mb-6">
                  <Stethoscope className="w-16 h-16" />
                </div>
                <h2 className="text-3xl font-extrabold">{DOCTOR.name}</h2>
                <p className="text-[#95CCDD] font-bold text-[#95CCDD] mt-1 text-base">{DOCTOR.title}</p>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  Medical Registration Verified
                </div>
              </div>
            </div>

            {/* Right Doctor Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20">
                Profile Claimed & Verified
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
                {DOCTOR.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#162554] text-white text-xs font-semibold">
                  Endodontist
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#4F7DF8] text-white text-xs font-semibold">
                  Cosmetic/Aesthetic Dentist
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  17 Years Experience Overall (11 Yrs Specialist)
                </span>
              </div>

              <blockquote className="p-6 rounded-[24px] bg-white border border-gray-100 shadow-sm text-[#162554] italic text-base leading-relaxed">
                &ldquo;Dr. Amulya Prrasad says: &lsquo;Dr. Amulya Prrasad is a specialist Endodontist, and I like to think that for over 9 years I have been helping general dental practitioners solve their endodontic problems. In that time I have treated something over 10,000 teeth!&rsquo;&rdquo;
              </blockquote>

              <div className="pt-2">
                <Button href="/book-appointment" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
                  Book Consultation with Dr. Amulya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations & Key Stats */}
      <section className="container-custom space-y-8">
        <SectionHeading
          badge="Expertise"
          title="Specializations &"
          highlightedText="Clinical Focus"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Endodontics (Root Canal Specialist)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Specialized diagnosis and treatment of infected tooth pulp, complex root canal anatomy, retreatment cases, and single-sitting RCTs.
            </p>
          </Card>

          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Cosmetic & Aesthetic Dentistry</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Smile redesigns, ceramic veneers, gap closures, composite restorations, tooth whitening, and teeth jewellery.
            </p>
          </Card>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="container-custom space-y-8">
        <SectionHeading
          badge="Qualifications"
          title="Education &"
          highlightedText="Academic Record"
          align="left"
        />

        <div className="space-y-6">
          {DOCTOR.education.map((edu, idx) => (
            <Card key={idx} hover className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#4F7DF8] uppercase tracking-wider">
                  Graduated {edu.year}
                </span>
                <h4 className="text-xl font-bold text-[#162554]">{edu.degree}</h4>
                <p className="text-sm text-gray-600 font-medium">{edu.institution}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards & Memberships */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Awards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#162554] flex items-center gap-2">
              <Award className="w-6 h-6 text-[#4F7DF8]" />
              <span>Awards & Recognitions</span>
            </h3>
            {DOCTOR.awards.map((award, idx) => (
              <Card key={idx} hover className="space-y-2">
                <span className="text-xs font-bold text-[#4F7DF8]">{award.year}</span>
                <p className="text-sm text-gray-700 font-medium">{award.title}</p>
              </Card>
            ))}
          </div>

          {/* Registrations & Memberships */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#162554] flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-[#4F7DF8]" />
              <span>Registrations & Memberships</span>
            </h3>

            <Card hover className="space-y-3">
              <h4 className="text-base font-bold text-[#162554]">Medical Registration</h4>
              {DOCTOR.registrations.map((reg, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  <strong className="text-[#162554]">{reg.number}</strong> — {reg.council}, {reg.year}
                </p>
              ))}
            </Card>

            <Card hover className="space-y-3">
              <h4 className="text-base font-bold text-[#162554]">Professional Memberships</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {DOCTOR.memberships.map((mem, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4F7DF8]" />
                    <span>{mem}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs about the Doctor */}
      <section className="container-custom space-y-8">
        <SectionHeading
          badge="Doctor FAQs"
          title="Common Questions about"
          highlightedText="Dr. Amulya Prrasad"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={doctorFaqs} />
        </div>
      </section>
    </div>
  );
}
