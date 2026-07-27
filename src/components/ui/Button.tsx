"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children?: React.ReactNode;
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
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0, size: 0 });

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = Math.hypot(
      Math.max(x, rect.width - x),
      Math.max(y, rect.height - y)
    );
    const size = radius * 2.25;

    setRipplePos({ x, y, size });
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipplePos((prev) => ({ ...prev, x, y }));
    setIsHovered(false);
  }, []);

  const variantStyles = {
    primary: {
      container: "bg-[#4F7DF8] border border-transparent shadow-[0_4px_20px_rgba(79,125,248,0.3)] hover:shadow-[0_6px_24px_rgba(79,125,248,0.45)] text-white focus:ring-[#4F7DF8]",
      fill: "bg-[#162554]",
      text: "text-white",
    },
    secondary: {
      container: "bg-[#EEF5FF] border border-[#4F7DF8]/20 text-[#4F7DF8] focus:ring-[#4F7DF8]",
      fill: "bg-[#4F7DF8]",
      text: isHovered ? "text-white" : "text-[#4F7DF8]",
    },
    navy: {
      container: "bg-[#162554] border border-transparent text-white shadow-lg hover:shadow-xl focus:ring-[#162554]",
      fill: "bg-[#4F7DF8]",
      text: "text-white",
    },
    outline: {
      container: "bg-transparent border-2 border-[#4F7DF8] text-[#4F7DF8] focus:ring-[#4F7DF8]",
      fill: "bg-[#4F7DF8]",
      text: isHovered ? "text-white" : "text-[#4F7DF8]",
    },
    ghost: {
      container: "bg-transparent border border-transparent text-[#162554] focus:ring-[#4F7DF8]",
      fill: "bg-[#EEF5FF]",
      text: isHovered ? "text-[#4F7DF8]" : "text-[#162554]",
    },
    white: {
      container: "bg-white border border-gray-100 text-[#162554] shadow-md hover:shadow-lg focus:ring-white",
      fill: "bg-[#4F7DF8]",
      text: isHovered ? "text-white" : "text-[#162554]",
    },
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5 font-semibold",
  };

  const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center font-medium rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none select-none transition-shadow duration-300";

  const currentVariant = variantStyles[variant];
  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${currentVariant.container} ${sizes[size]} ${widthStyle} ${className}`;

  const renderIcon = (pos: "left" | "right") => {
    if (!icon || iconPosition !== pos) return null;
    if (React.isValidElement(icon)) {
      return icon;
    }
    if (typeof icon === "function" || typeof icon === "object") {
      const IconComp = icon as React.ComponentType<{ className?: string }>;
      return <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 shrink-0" />;
    }
    return null;
  };

  const innerContent = (
    <>
      <span
        className={`pointer-events-none absolute rounded-full ${currentVariant.fill}`}
        style={{
          left: ripplePos.x,
          top: ripplePos.y,
          width: ripplePos.size,
          height: ripplePos.size,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
          transition: isHovered
            ? "transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)"
            : "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "center center",
        }}
      />

      <span className={`relative z-10 inline-flex items-center justify-center gap-2 transition-colors duration-300 ${currentVariant.text}`}>
        {renderIcon("left")}
        {children && <span>{children}</span>}
        {renderIcon("right")}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        className={fullWidth ? "w-full" : "inline-block"}
      >
        <Link
          href={href}
          ref={buttonRef as any}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`group ${combinedClasses}`}
        >
          {innerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      ref={buttonRef as any}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group ${combinedClasses}`}
    >
      {innerContent}
    </motion.button>
  );
};
