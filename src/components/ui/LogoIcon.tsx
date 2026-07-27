"use client";

import React from "react";

interface LogoIconProps {
  className?: string;
  size?: number;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className = "w-10 h-auto", size }) => {
  const style = size ? { width: `${size}px`, height: "auto" } : undefined;

  return (
    <img
      src="/logo.png"
      alt="Smart Dental Care Logo"
      className={`object-contain shrink-0 ${className}`}
      style={style}
    />
  );
};
