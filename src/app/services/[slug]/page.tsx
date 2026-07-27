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
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Clock,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Smile,
  Zap,
  HeartPulse,
  User,
  Info,
  Check,
  UtensilsCrossed,
  Award,
  ShieldAlert,
  Flame,
  Pill,
  Apple,
  FileText,
  UserCheck,
  Sparkle
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
    description: `${service.shortDescription} Performed by Dr. Amulya Prrasad (MDS Endodontist & Cosmetic Dentist). Book your consultation today.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Quick Information Metrics
  const quickInfo = {
    duration: service.quickInfo?.duration || "45 - 60 Mins",
    painLevel: service.quickInfo?.painLevel || "Painless (Local Anesthesia)",
    visits: service.quickInfo?.visits || "1 - 2 Visits",
    recovery: service.quickInfo?.recovery || "24 - 48 Hours",
    specialist: service.quickInfo?.specialist || "Dr. Amulya Prrasad (MDS)",
  };

  // What is Treatment Sections
  const whatIs = {
    definition: service.whatIs?.definition || service.overview,
    whyRecommended:
      service.whatIs?.whyRecommended ||
      `Recommended by ${DOCTOR.name} to eliminate infection, preserve natural tooth structure, and prevent recurring dental issues.`,
    whoCanBenefit:
      service.whatIs?.whoCanBenefit ||
      "Patients experiencing tooth discomfort, cavity decay, discoloration, or structural damage seeking long-lasting expert care.",
    expectedOutcome:
      service.whatIs?.expectedOutcome ||
      "Restores 100% natural chewing functionality, relieves pain permanently, and delivers a healthy aesthetic smile.",
  };

  // When to Visit Conditions
  const whenToVisitConditions = service.whenToVisit || [
    "Severe throbbing toothache while chewing or at night",
    "Persistent sensitivity to hot or cold drinks",
    "Visible discoloration, dark spots, or deep cavities",
    "Swelling, tenderness, or pimples on nearby gums",
    "Chipped, cracked, or broken tooth enamel"
  ];

  // Common Causes Icon List (Lucide Icons)
  const causesList = service.causes || [
    { icon: Activity, title: "Bacterial Plaque & Decay", description: "Plaque acid eroding tooth enamel and dentin layers." },
    { icon: ShieldAlert, title: "Inadequate Oral Hygiene", description: "Infrequent brushing & flossing leading to tartar buildup." },
    { icon: Flame, title: "Lifestyle & Habits", description: "Smoking, tobacco, or habitual nighttime teeth grinding." },
    { icon: Zap, title: "High Sugar & Acidic Diet", description: "Frequent sugary snacks or sodas wearing down enamel." },
    { icon: Pill, title: "Medications & Dry Mouth", description: "Reduced saliva flow lowering natural bacterial defense." },
    { icon: Apple, title: "Enamel Wear & Micro-Trauma", description: "Cracks, chips, or nutritional deficiencies weakening teeth." }
  ];

  // Treatment Options
  const treatmentOptions = service.treatmentOptions || (
    service.procedure.length > 0
      ? service.procedure.map(p => ({ title: p.title, description: p.description }))
      : [
          { title: "Standard Specialist Therapy", description: "Comprehensive procedure customized to your exact anatomical requirements." },
          { title: "Single-Sitting Fast Track", description: "High-efficiency procedure completed in 1 single visit using digital tools." },
          { title: "Advanced Restorative Care", description: "Includes custom shade-matched ceramic restoration for maximum strength." }
        ]
  );

  // Recovery & Aftercare Details
  const recoveryDetails = {
    immediateExpectations:
      service.recoveryDetails?.immediateExpectations ||
      "Mild numbness for 2–3 hours post-treatment. Normal eating can resume once anesthesia wears off completely.",
    healingTimeline:
      service.recoveryDetails?.healingTimeline ||
      "Most patients resume daily activities immediately, with full tissue healing within 24 to 48 hours.",
    normalSymptoms:
      service.recoveryDetails?.normalSymptoms ||
      "Slight soreness or mild sensitivity for 1–2 days, easily relieved with mild prescribed pain relievers.",
    brushingInstructions:
      service.recoveryDetails?.brushingInstructions ||
      "Brush twice daily with a soft-bristle toothbrush and gentle circular motions around the treated area.",
    foodsToAvoid:
      service.recoveryDetails?.foodsToAvoid ||
      "Avoid biting hard ice, nuts, or sticky candy on the treated tooth until final restoration is complete.",
    hygieneRecommendations:
      service.recoveryDetails?.hygieneRecommendations ||
      "Rinse with warm salt water or prescribed antiseptic mouthwash twice daily to promote healthy gums.",
    followUpSchedule:
      service.recoveryDetails?.followUpSchedule ||
      "Schedule a routine follow-up checkup in 7–14 days for crown placement or routine healing inspection."
  };

  // Standardized FAQs
  const faqList = service.faqs.length >= 6 ? service.faqs : [
    {
      question: `What causes the need for ${service.title}?`,
      answer: `The need for ${service.title} usually arises from bacterial decay, deep cavities, trauma, or gum inflammation that compromises tooth health.`
    },
    {
      question: "Is the treatment painful?",
      answer: `No! Dr. Amulya Prrasad uses modern local anesthesia and painless endodontic techniques to ensure complete patient comfort throughout the procedure.`
    },
    {
      question: "How long does the treatment take?",
      answer: `The treatment typically takes ${quickInfo.duration}, depending on the clinical complexity and tooth location.`
    },
    {
      question: "How many visits are required?",
      answer: `Most cases require ${quickInfo.visits}. Single-sitting treatment is available for eligible patients.`
    },
    {
      question: "What is the expected recovery time?",
      answer: `Initial recovery takes ${quickInfo.recovery}. Patients normally return to regular work and daily routine the very next day.`
    },
    {
      question: "Are there any risks or side effects?",
      answer: "The procedure is safe with a 98%+ success rate. Mild temporary tenderness for 1-2 days is normal and easily managed with prescribed medication."
    },
    {
      question: "How can I prevent this problem from recurring?",
      answer: "Maintain good oral hygiene by brushing twice daily, flossing, limiting sugary foods, and scheduling 6-month preventive dental checkups."
    },
    {
      question: "When should I contact the clinic after treatment?",
      answer: "Contact us immediately if you experience severe persistent pain, swelling, or if a temporary filling/crown feels dislodged."
    }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hi Dr. Amulya, I would like to inquire about ${service.title} at Smart Dental Care.`
  );

  return (
    <div className="space-y-12 sm:space-y-16 py-6">
      {/* 1. HERO & QUICK INFO METRICS BANNER (CLUBBED) */}
      <section className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-br from-[#EEF5FF] via-[#FAFBFD] to-white p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm space-y-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F7DF8] hover:text-[#3A62D4] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-white text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block shadow-sm">
                {service.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              {/* Primary Actions: Call, WhatsApp, Book Appointment */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Button href="/book-appointment" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
                  Book Appointment
                </Button>

                <a
                  href={`tel:${CONTACT.phoneClean}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white text-[#162554] font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#4F7DF8]" />
                  <span>Call {CONTACT.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp Clinic</span>
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

          {/* Quick Information Cards (Clubbed Row) */}
          <div className="pt-6 border-t border-gray-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4F7DF8] mb-3">Quick Treatment Metrics</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Duration</span>
                  <span className="text-xs sm:text-sm font-bold text-[#162554]">{quickInfo.duration}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Pain Level</span>
                  <span className="text-xs sm:text-sm font-bold text-[#162554]">{quickInfo.painLevel}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Visits Required</span>
                  <span className="text-xs sm:text-sm font-bold text-[#162554]">{quickInfo.visits}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Recovery Time</span>
                  <span className="text-xs sm:text-sm font-bold text-[#162554]">{quickInfo.recovery}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Specialist</span>
                  <span className="text-xs sm:text-sm font-bold text-[#162554] truncate block max-w-[120px]">{quickInfo.specialist}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS THIS TREATMENT? (CLUBBED MASTER CARD) */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-white border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8">
          <SectionHeading
            badge="Treatment Overview"
            title={`What Is ${service.title}?`}
            subtitle="A patient-friendly breakdown of the procedure, clinical necessity, and expected outcomes."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-2">
              <div className="flex items-center gap-2.5 text-[#4F7DF8] font-bold text-base">
                <Info className="w-5 h-5" />
                <span>What The Treatment Is</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {whatIs.definition}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-2">
              <div className="flex items-center gap-2.5 text-[#4F7DF8] font-bold text-base">
                <Award className="w-5 h-5" />
                <span>Why It Is Recommended</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {whatIs.whyRecommended}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-2">
              <div className="flex items-center gap-2.5 text-[#4F7DF8] font-bold text-base">
                <UserCheck className="w-5 h-5" />
                <span>Who Can Benefit</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {whatIs.whoCanBenefit}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-2">
              <div className="flex items-center gap-2.5 text-[#4F7DF8] font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>Expected Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {whatIs.expectedOutcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYMPTOMS, TRIGGERS & COMMON CAUSES (CLUBBED MASTER CARD) */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-white border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8">
          <SectionHeading
            badge="Diagnosis & Causes"
            title="Symptoms, Triggers & Root Causes"
            subtitle="Understand your symptoms and the biological factors leading to tooth decay or damage."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 6 Cols: Symptoms & When to Visit */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#EEF5FF] to-white border border-[#4F7DF8]/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#4F7DF8] text-white flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#162554]">Common Symptoms</h3>
                    <p className="text-[11px] text-gray-500">Key warning signs felt by patients</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {service.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100 text-xs font-semibold text-[#162554]">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-[11px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#EEF5FF] to-white border border-[#4F7DF8]/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#162554] text-white flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#162554]">When You Should Visit</h3>
                    <p className="text-[11px] text-gray-500">Clinical triggers to schedule an evaluation</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {whenToVisitConditions.map((cond, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-gray-100 text-xs font-semibold text-[#162554]">
                      <CheckCircle2 className="w-4 h-4 text-[#4F7DF8] shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 6 Cols: 6 Common Causes (Lucide Icons Grid) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-[#162554] flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#4F7DF8]" />
                <span>Common Causes & Risk Factors</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {causesList.map((cause, idx) => {
                  const CauseIcon = typeof cause.icon === "function" || typeof cause.icon === "object" ? cause.icon : Activity;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-[#EEF5FF]/40 transition-colors space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-white text-[#4F7DF8] border border-gray-200/80 flex items-center justify-center shadow-sm">
                        <CauseIcon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#162554]">{cause.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{cause.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TREATMENT OPTIONS & KEY BENEFITS (CLUBBED MASTER CARD) */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-white border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8">
          <SectionHeading
            badge="Options & Benefits"
            title="Treatment Options & Key Benefits"
            subtitle="Explore available procedures and the immediate advantages of specialist care."
            align="left"
          />

          {/* Treatment Options Row */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#162554]">Available Treatment Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {treatmentOptions.map((opt, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#4F7DF8] text-white font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-[#162554]">{opt.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{opt.description}</p>
                  </div>
                  <span className="text-[10px] font-bold text-[#4F7DF8] uppercase pt-2">Specialist Option</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="pt-6 border-t border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-[#162554]">Key Benefits of Procedure</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {service.benefits.map((ben, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold text-[#162554] leading-snug">{ben}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. RECOVERY & AFTERCARE ROADMAP (CLUBBED MASTER CARD) */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-white border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8">
          <SectionHeading
            badge="Post Care"
            title="Recovery & Aftercare Roadmap"
            subtitle="Simple steps to ensure smooth healing and long-lasting protection for your smile."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recovery Timeline */}
            <div className="p-6 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#4F7DF8] text-white flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#162554]">Recovery Timeline</h3>
                  <p className="text-[11px] text-gray-500">Healing expectations post-procedure</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white space-y-1 border border-gray-100">
                  <strong className="text-[#162554] font-bold block">⚡ Immediate Expectations</strong>
                  <p className="text-gray-600">{recoveryDetails.immediateExpectations}</p>
                </div>

                <div className="p-3 rounded-xl bg-white space-y-1 border border-gray-100">
                  <strong className="text-[#162554] font-bold block">📅 Healing Timeline</strong>
                  <p className="text-gray-600">{recoveryDetails.healingTimeline}</p>
                </div>

                <div className="p-3 rounded-xl bg-white space-y-1 border border-gray-100">
                  <strong className="text-[#162554] font-bold block">😊 Normal Symptoms</strong>
                  <p className="text-gray-600">{recoveryDetails.normalSymptoms}</p>
                </div>
              </div>
            </div>

            {/* Home Care & Hygiene */}
            <div className="p-6 rounded-2xl bg-[#EEF5FF]/50 border border-[#4F7DF8]/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#162554] text-white flex items-center justify-center shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#162554]">Home Care & Hygiene</h3>
                  <p className="text-[11px] text-gray-500">Dietary and cleaning instructions</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white space-y-1 border border-gray-100">
                  <strong className="text-[#162554] font-bold block">🪥 Brushing Instructions</strong>
                  <p className="text-gray-600">{recoveryDetails.brushingInstructions}</p>
                </div>

                <div className="p-3 rounded-xl bg-white space-y-1 border border-gray-100">
                  <strong className="text-[#162554] font-bold block">🍎 Foods & Care</strong>
                  <p className="text-gray-600">{recoveryDetails.foodsToAvoid}</p>
                </div>

                <div className="p-3 rounded-xl bg-white space-y-1 border border-gray-100">
                  <strong className="text-[#162554] font-bold block">🩺 Hygiene & Follow-up</strong>
                  <p className="text-gray-600">{recoveryDetails.hygieneRecommendations} • {recoveryDetails.followUpSchedule}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-white border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8 max-w-4xl mx-auto">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Get instant answers to common patient questions about this treatment."
          />

          <Accordion
            items={faqList.map((f, i) => ({
              id: `sf-${i}`,
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>
      </section>
    </div>
  );
}


