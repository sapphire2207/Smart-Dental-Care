import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "teal" | "outline" | "success";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const variants = {
    primary: "bg-[#EEF5FF] text-[#4F7DF8] border border-[#4F7DF8]/20",
    secondary: "bg-gray-100 text-[#162554] border border-gray-200",
    teal: "bg-[#D0E7E6]/50 text-[#162554] border border-[#95CCDD]/40",
    outline: "bg-transparent text-[#4F7DF8] border border-[#4F7DF8]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs font-medium rounded-full",
    md: "px-3.5 py-1 text-sm font-semibold rounded-full",
  };

  return (
    <span className={`inline-flex items-center ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};
