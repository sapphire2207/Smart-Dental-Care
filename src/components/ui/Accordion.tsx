"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="rounded-[20px] bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#4F7DF8]/30">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="text-lg font-semibold text-[#162554] pr-4">
          {question}
        </span>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${
            isOpen ? "bg-[#4F7DF8] text-white rotate-180" : "bg-[#EEF5FF] text-[#4F7DF8]"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-6 sm:px-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-1">
              <p className="pt-3">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
