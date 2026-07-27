"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value and suffix/prefix (e.g., "17+", "10,000+", "4.9")
    const numericMatch = value.match(/[\d,.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const rawNumStr = numericMatch[0].replace(/,/g, "");
    const targetNum = parseFloat(rawNumStr);
    const prefix = value.substring(0, value.indexOf(numericMatch[0]));
    const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);
    const isDecimal = rawNumStr.includes(".");
    const decimalPlaces = isDecimal ? rawNumStr.split(".")[1].length : 0;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      // Easing function outQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentNum = targetNum * easeProgress;

      let formattedNum = "";
      if (isDecimal) {
        formattedNum = currentNum.toFixed(decimalPlaces);
      } else {
        formattedNum = Math.floor(currentNum).toLocaleString("en-US");
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
