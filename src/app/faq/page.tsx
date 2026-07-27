"use client";

import React, { useState } from "react";
import { FAQS, FAQItem } from "@/lib/faq-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Search, Phone, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "doctor", label: "Doctor & Credentials" },
    { id: "treatments", label: "Treatments & Hygiene" },
    { id: "appointments", label: "Appointments & Hours" },
    { id: "general", label: "General & Safety" },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header */}
      <section className="container-custom text-center max-w-4xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
          Help & Answers
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
            Questions
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Find instant answers to common questions about Dr. Amulya Prrasad, root canal procedures, appointment booking, timings, and sterilization standards.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative pt-4">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-8 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions (e.g. pain, experience, timing, address)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 bg-white text-base text-[#111827] placeholder-gray-400 shadow-sm focus:border-[#4F7DF8] focus:ring-4 focus:ring-[#4F7DF8]/10 focus:outline-none transition-all"
          />
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#4F7DF8] text-white shadow-md shadow-[#4F7DF8]/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-[#EEF5FF] hover:text-[#4F7DF8] border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion Component */}
      <section className="container-custom max-w-3xl mx-auto">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-xl font-bold text-[#162554]">No questions matched your search criteria.</p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} variant="outline" size="md">
              Reset Filters
            </Button>
          </div>
        ) : (
          <Accordion items={filteredFaqs} />
        )}
      </section>

      {/* Still Have Questions Banner */}
      <section className="container-custom max-w-4xl mx-auto">
        <div className="rounded-[32px] bg-gradient-to-r from-[#EEF5FF] via-white to-[#EEF5FF] p-8 sm:p-12 border border-gray-200 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#162554]">Still Have Questions?</h3>
          <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base">
            Our friendly dental team is here to help. Reach out directly via phone, WhatsApp, or schedule your visit online.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-appointment" variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
              Book Appointment
            </Button>
            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#162554] font-semibold text-sm border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#4F7DF8]" />
              <span>Call {CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
