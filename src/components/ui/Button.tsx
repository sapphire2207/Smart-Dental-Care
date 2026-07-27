"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none select-none";

  const variants = {
    primary:
      "bg-[#4F7DF8] hover:bg-[#3A62D4] text-white shadow-[0_4px_20px_rgba(79,125,248,0.3)] hover:shadow-[0_6px_24px_rgba(79,125,248,0.4)] focus:ring-[#4F7DF8]",
    secondary:
      "bg-[#EEF5FF] hover:bg-[#DCECFF] text-[#4F7DF8] focus:ring-[#4F7DF8]",
    navy:
      "bg-[#162554] hover:bg-[#1E3470] text-white shadow-lg hover:shadow-xl focus:ring-[#162554]",
    outline:
      "border-2 border-[#4F7DF8] text-[#4F7DF8] hover:bg-[#4F7DF8] hover:text-white focus:ring-[#4F7DF8]",
    ghost:
      "text-[#162554] hover:bg-[#EEF5FF] hover:text-[#4F7DF8] focus:ring-[#4F7DF8]",
    white:
      "bg-white hover:bg-gray-50 text-[#162554] shadow-md hover:shadow-lg focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5 font-semibold",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`;

  const renderIcon = (pos: "left" | "right") => {
    if (!icon || iconPosition !== pos) return null;
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === "function" || typeof icon === "object") {
      const IconComp = icon as React.ComponentType<{ className?: string }>;
      return <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />;
    }
    return null;
  };

  const content = (
    <>
      {renderIcon("left")}
      <span>{children}</span>
      {renderIcon("right")}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className="inline-block"
      >
        <Link href={href} className={`group ${combinedClasses}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
    >
      {content}
    </motion.button>
  );
};
