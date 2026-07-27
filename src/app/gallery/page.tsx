"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye } from "lucide-react";
import { GALLERY_ITEMS, BEFORE_AFTER_CASES, GalleryItem } from "@/lib/gallery-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Lightbox } from "@/components/ui/Lightbox";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "clinic", label: "Clinic & Reception" },
    { id: "equipment", label: "Technology & Operatory" },
    { id: "doctor", label: "Doctor & Team" },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header */}
      <section className="container-custom text-center max-w-4xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
          Smile Gallery & Clinic Media
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
          A Glimpse of{" "}
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
            Our Clinic & Smiles
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Explore our sterile operatory, advanced dental equipment, comfortable waiting lounge, and real patient smile transformations.
        </p>
      </section>

      {/* Before & After Cases Section */}
      <section className="container-custom space-y-12">
        <SectionHeading
          badge="Transformation Cases"
          title="Before & After"
          highlightedText="Smile Gallery"
          description="Interactive comparison sliders showing actual patient treatment results."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BEFORE_AFTER_CASES.map((item) => (
            <div key={item.id} className="space-y-3">
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
                beforeLabel="Before"
                afterLabel="After"
              />
              <div className="px-2">
                <h4 className="text-lg font-bold text-[#162554]">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#4F7DF8] text-white shadow-md shadow-[#4F7DF8]/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-[#EEF5FF] hover:text-[#4F7DF8] border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-[24px] overflow-hidden bg-gradient-to-tr from-[#162554] to-[#4F7DF8] aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col justify-end p-4 text-white"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 z-10" />

              <div className="relative z-20 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#95CCDD] bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm inline-block">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white leading-tight group-hover:text-[#95CCDD] transition-colors">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          onClose={handleCloseLightbox}
          imageSrc={filteredItems[lightboxIndex]?.image || ""}
          imageAlt={filteredItems[lightboxIndex]?.title || ""}
          title={filteredItems[lightboxIndex]?.title || ""}
          onNext={handleNextLightbox}
          onPrev={handlePrevLightbox}
          hasNext={lightboxIndex < filteredItems.length - 1}
          hasPrev={lightboxIndex > 0}
        />
      )}
    </div>
  );
}
