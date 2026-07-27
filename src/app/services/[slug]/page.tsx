import React from "react";
import Metadata from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  CheckCircle2,
  Calendar,
  Phone,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Clock,
  ArrowLeft,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { SERVICES, Service } from "@/lib/services-data";
import { BRAND, DOCTOR, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in LB Nagar, Hyderabad | Smart Dental Care`,
    description: `${service.shortDescription} Performed by Dr. Amulya Prrasad (MDS Endodontist & Cosmetic Dentist). Book your appointment today.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Breadcrumb & Hero */}
      <section className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-br from-[#EEF5FF] via-[#FAFBFD] to-white p-8 sm:p-12 lg:p-14 border border-gray-100 shadow-sm space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F7DF8] hover:text-[#3A62D4] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-white text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
                {service.category}
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/book-appointment" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
                  Book Consultation for {service.title}
                </Button>
                <a
                  href={`tel:${CONTACT.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#162554] font-semibold text-base border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Phone className="w-5 h-5 text-[#4F7DF8]" />
                  <span>Call {CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Treatment Specific Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-[#162554] to-[#4F7DF8]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold backdrop-blur-md bg-black/40 px-3.5 py-2 rounded-xl border border-white/20 flex items-center justify-between">
                  <span className="truncate">Specialized Treatment</span>
                  <span className="text-[#95CCDD] shrink-0 font-bold ml-2">Smart Dental Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Doctor Specialist Badge */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#162554]">Treatment Overview</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {service.overview}
              </p>
            </div>

            {/* Symptoms / When is this needed? */}
            {service.symptoms && service.symptoms.length > 0 && (
              <Card hover borderGradient className="space-y-4">
                <h3 className="text-xl font-bold text-[#162554] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#4F7DF8]" />
                  <span>When Do You Need {service.title}?</span>
                </h3>
                <ul className="space-y-3">
                  {service.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#4F7DF8] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Step-by-Step Procedure */}
            {service.procedure && service.procedure.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#162554]">Step-by-Step Procedure</h3>
                <div className="space-y-4">
                  {service.procedure.map((step, idx) => (
                    <Card key={idx} hover className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#162554] text-white font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-[#162554]">{step.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#162554]">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((ben, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#162554]">{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Aftercare */}
            {service.aftercare && service.aftercare.length > 0 && (
              <Card hover className="space-y-3 bg-[#EEF5FF]/50 border-[#4F7DF8]/20">
                <h4 className="text-lg font-bold text-[#162554]">Aftercare & Maintenance</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.aftercare.map((af, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#4F7DF8] font-bold">•</span>
                      <span>{af}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-bold text-[#162554] flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#4F7DF8]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <Accordion
                  items={service.faqs.map((f, i) => ({ id: `sf-${i}`, question: f.question, answer: f.answer }))}
                />
              </div>
            )}
          </div>

          {/* Right Sidebar: Doctor Card & Quick Booking */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <Card padding="md" className="space-y-6 border-2 border-[#4F7DF8]/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#162554] text-white flex items-center justify-center shrink-0">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#162554]">{DOCTOR.name}</h4>
                  <p className="text-xs text-[#4F7DF8] font-semibold">{DOCTOR.title}</p>
                  <p className="text-[11px] text-gray-500">17+ Years Experience</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 text-xs text-gray-600 space-y-2">
                <p>✓ Super-specialist treatment execution</p>
                <p>✓ 100% sterile autoclave environment</p>
                <p>✓ Single sitting option available</p>
              </div>

              <Button href="/book-appointment" variant="primary" size="md" fullWidth icon={<Calendar className="w-4 h-4" />}>
                Book Appointment
              </Button>

              <a
                href={`tel:${CONTACT.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gray-100 hover:bg-gray-200 text-[#162554] font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#4F7DF8]" />
                <span>Call {CONTACT.phone}</span>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
