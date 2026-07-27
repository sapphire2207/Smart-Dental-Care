"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Search,
  Calendar
} from "lucide-react";

/* ========================================================================= */
/* HELPER: CLEAN LABEL WITH SINGLE REQUIRED ASTERISK                         */
/* ========================================================================= */
const renderLabel = (label?: string, required?: boolean) => {
  if (!label) return null;
  const cleanText = label.replace(/\s*\*+\s*$/, "");
  return (
    <label className="block text-sm font-bold text-[#162554] mb-2">
      {cleanText} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

/* ========================================================================= */
/* INPUT COMPONENT                                                           */
/* ========================================================================= */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, required, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {renderLabel(label, required)}
        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 z-10 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            required={required}
            className={`w-full rounded-[18px] border border-gray-200 bg-white ${
              icon ? "pl-11" : "pl-4"
            } pr-4 py-3.5 text-sm sm:text-base font-semibold text-[#111827] placeholder-gray-400 transition-all duration-200 focus:border-[#4F7DF8] focus:ring-4 focus:ring-[#4F7DF8]/10 focus:outline-none shadow-sm ${
              error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
        {helperText && !error && <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

/* ========================================================================= */
/* TEXTAREA COMPONENT                                                        */
/* ========================================================================= */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, required, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {renderLabel(label, required)}
        <textarea
          ref={ref}
          rows={props.rows || 3}
          required={required}
          className={`w-full rounded-[18px] border border-gray-200 bg-white px-4 py-3.5 text-sm sm:text-base font-semibold text-[#111827] placeholder-gray-400 transition-all duration-200 focus:border-[#4F7DF8] focus:ring-4 focus:ring-[#4F7DF8]/10 focus:outline-none shadow-sm ${
            error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
        {helperText && !error && <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

/* ========================================================================= */
/* CUSTOM SELECT DROPDOWN COMPONENT WITH FIXED INTERNAL SCROLLING            */
/* ========================================================================= */
export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (e: any) => void;
  name?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  searchable?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  name,
  required,
  error,
  helperText,
  icon,
  placeholder = "Select option",
  className = "",
  searchable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions =
    searchable && options.length > 5
      ? options.filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()))
      : options;

  const handleSelect = (optValue: string) => {
    if (onChange) {
      onChange({ target: { name, value: optValue } });
    }
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      {renderLabel(label, required)}

      {/* Trigger Box with Centered Left Icon and Right Arrow */}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 z-10 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
            {icon}
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full rounded-[18px] border border-gray-200 bg-white text-left ${
            icon ? "pl-11" : "pl-4"
          } pr-10 py-3.5 text-sm sm:text-base font-semibold text-[#111827] transition-all duration-200 focus:border-[#4F7DF8] focus:ring-4 focus:ring-[#4F7DF8]/10 focus:outline-none flex items-center justify-between shadow-sm hover:border-gray-300 ${
            isOpen ? "border-[#4F7DF8] ring-4 ring-[#4F7DF8]/10" : ""
          } ${error ? "border-red-400" : ""} ${className}`}
        >
          <span className="truncate pr-2">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#4F7DF8]" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu Popover with Dedicated Internal Scroll */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-[100] top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden p-1.5 flex flex-col max-h-56"
          >
            {/* Optional Search Bar */}
            {searchable && options.length > 5 && (
              <div className="p-1.5 pb-2 border-b border-gray-100 mb-1 shrink-0">
                <div className="relative flex items-center">
                  <Search className="w-3.5 h-3.5 absolute left-3 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs font-semibold rounded-xl bg-gray-50 border border-gray-200 text-[#162554] placeholder-gray-400 focus:outline-none focus:border-[#4F7DF8]"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}

            {/* Scrollable Items Container with Transparent Track & Page Scroll Lock */}
            <div
              className="overflow-y-auto max-h-52 space-y-0.5 pr-1.5 touch-pan-y custom-dropdown-scroll overscroll-contain"
              onWheel={(e) => e.stopPropagation()}
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between ${
                        isSelected
                          ? "bg-[#EEF5FF] text-[#4F7DF8] font-bold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#162554]"
                      }`}
                    >
                      <span className="truncate pr-2">{opt.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#4F7DF8] shrink-0" />}
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-3 text-xs text-gray-400 text-center">
                  No matching options
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
      {helperText && !error && <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
};

/* ========================================================================= */
/* CUSTOM DATE PICKER COMPONENT                                              */
/* ========================================================================= */
interface DatePickerProps {
  label?: string;
  value?: string; // YYYY-MM-DD
  onChange?: (e: any) => void;
  name?: string;
  required?: boolean;
  min?: string;
  error?: string;
  helperText?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  name,
  required,
  min,
  error,
  helperText,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const selectedDate = value ? new Date(value) : null;
  const [viewDate, setViewDate] = useState<Date>(selectedDate || today);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const minDate = min ? new Date(min) : new Date();
  minDate.setHours(0, 0, 0, 0);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day);
    const yyyy = clickedDate.getFullYear();
    const mm = String(clickedDate.getMonth() + 1).padStart(2, "0");
    const dd = String(clickedDate.getDate()).padStart(2, "0");
    const formatted = `${yyyy}-${mm}-${dd}`;

    if (onChange) {
      onChange({ target: { name, value: formatted } });
    }
    setIsOpen(false);
  };

  const formatDisplay = (dateStr?: string) => {
    if (!dateStr) return "Select preferred date";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      {renderLabel(label, required)}

      {/* Trigger Input Box */}
      <div className="relative flex items-center">
        <div className="absolute left-4 z-10 top-1/2 -translate-y-1/2 pointer-events-none text-[#4F7DF8]">
          <Calendar className="w-4 h-4" />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full rounded-[18px] border border-gray-200 bg-white text-left pl-11 pr-4 py-3.5 text-sm sm:text-base font-semibold text-[#111827] transition-all duration-200 focus:border-[#4F7DF8] focus:ring-4 focus:ring-[#4F7DF8]/10 focus:outline-none flex items-center justify-between shadow-sm hover:border-gray-300 ${
            isOpen ? "border-[#4F7DF8] ring-4 ring-[#4F7DF8]/10" : ""
          } ${error ? "border-red-400" : ""} ${className}`}
        >
          <span className={value ? "text-[#111827] font-semibold" : "text-gray-400 font-normal"}>
            {formatDisplay(value)}
          </span>

          <div className="text-xs font-bold text-[#4F7DF8] bg-[#EEF5FF] px-2.5 py-1 rounded-lg shrink-0">
            Calendar
          </div>
        </button>
      </div>

      {/* Calendar Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-[100] top-full left-0 right-0 mt-1.5 bg-white/98 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-2xl p-4 w-full min-w-[280px]"
          >
            {/* Calendar Month Header */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-sm font-bold text-[#162554]">
                {monthNames[month]} {year}
              </div>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 text-center text-[11px] font-bold text-gray-400 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {[...Array(firstDayOfMonth)].map((_, i) => (
                <div key={`blank-${i}`} />
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const dayNum = i + 1;
                const cellDate = new Date(year, month, dayNum);
                cellDate.setHours(0, 0, 0, 0);

                const isDisabled = cellDate < minDate;
                const isToday =
                  cellDate.getFullYear() === today.getFullYear() &&
                  cellDate.getMonth() === today.getMonth() &&
                  cellDate.getDate() === today.getDate();

                const isSelected =
                  selectedDate &&
                  cellDate.getFullYear() === selectedDate.getFullYear() &&
                  cellDate.getMonth() === selectedDate.getMonth() &&
                  cellDate.getDate() === selectedDate.getDate();

                return (
                  <button
                    key={dayNum}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleDateClick(dayNum)}
                    className={`h-8 rounded-xl font-semibold transition-all flex items-center justify-center ${
                      isDisabled
                        ? "text-gray-300 cursor-not-allowed"
                        : isSelected
                        ? "bg-[#4F7DF8] text-white shadow-md font-bold"
                        : isToday
                        ? "bg-[#EEF5FF] text-[#4F7DF8] font-bold border border-[#4F7DF8]/30"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
      {helperText && !error && <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
};
