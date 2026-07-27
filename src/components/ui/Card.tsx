"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  borderGradient?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  borderGradient = false,
  padding = "md",
  onClick,
}) => {
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  const borderStyle = borderGradient
    ? "p-[1px] bg-gradient-to-r from-[#4F7DF8]/30 via-[#95CCDD]/40 to-[#4F7DF8]/20"
    : "border border-gray-100/80";

  return (
    <motion.div
      whileHover={hover ? { y: -6, transition: { duration: 0.3, ease: "easeOut" } } : undefined}
      onClick={onClick}
      className={`relative rounded-[28px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300 ${
        hover ? "hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]" : ""
      } ${borderStyle} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <div className={`rounded-[27px] bg-white ${paddings[padding]} h-full`}>
        {children}
      </div>
    </motion.div>
  );
};
