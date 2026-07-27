"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  badgeVariant?: "blue" | "navy" | "teal";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  description,
  align = "center",
  badgeVariant = "blue",
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const badgeStyles = {
    blue: "bg-[#EEF5FF] text-[#4F7DF8] border-[#4F7DF8]/20",
    navy: "bg-[#162554]/5 text-[#162554] border-[#162554]/10",
    teal: "bg-[#D0E7E6]/50 text-[#162554] border-[#95CCDD]/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col max-w-3xl ${alignmentClasses[align]} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border mb-4 ${badgeStyles[badgeVariant]}`}
        >
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#162554] leading-[1.15]">
        {title}{" "}
        {highlightedText && (
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#6B93FF] bg-clip-text text-transparent">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
};
