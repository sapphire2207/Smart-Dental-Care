"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Activity,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  Layers,
  Smile,
  CheckCircle2
} from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES, Service } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header Section */}
      <section className="container-custom">
        <div className="rounded-[36px] bg-gradient-to-br from-[#EEF5FF] via-[#FAFBFD] to-white p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm space-y-6 text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-white text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
            24 Surgeries & Treatments
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
            Comprehensive Dental Care{" "}
            <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From single-sitting root canal treatments and dental implants to Invisalign aligners and cosmetic smile redesigns. Explore all 24 specialized procedures.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-8 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search treatments (e.g. Root Canal, Implants, Braces)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 bg-white text-base text-[#111827] placeholder-gray-400 shadow-sm focus:border-[#4F7DF8] focus:ring-4 focus:ring-[#4F7DF8]/10 focus:outline-none transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#4F7DF8] text-white shadow-md shadow-[#4F7DF8]/30 scale-105"
                    : "bg-white text-gray-700 hover:bg-[#EEF5FF] hover:text-[#4F7DF8] border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Services Grid (All 24) */}
      <section className="container-custom">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-xl font-bold text-[#162554]">No treatments match your search query.</p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} variant="outline" size="md">
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} hover className="flex flex-col justify-between group overflow-hidden p-0 rounded-3xl border border-gray-100">
                {/* Image Header */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
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

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4F7DF8] hover:text-[#3A62D4] transition-colors group/link"
                    >
                      <span>View Treatment Details</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
