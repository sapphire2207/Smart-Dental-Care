"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, ShieldCheck, Stethoscope, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { DOCTOR, BRAND, CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
    isOpen,
    onClose,
}) => {
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleBookNow = () => {
        onClose();
        router.push("/book-appointment");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.88, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.88, opacity: 0, y: 30 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden my-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors focus:outline-none backdrop-blur-sm cursor-pointer"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header Decorative Banner */}
                        <div className="bg-gradient-to-r from-[#162554] via-[#4F7DF8] to-[#162554] p-6 sm:p-8 text-white relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-44 h-44 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#95CCDD]/20 rounded-full blur-2xl pointer-events-none" />

                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3.5 py-1 rounded-full bg-white/20 text-[11px] font-bold uppercase tracking-wider text-white border border-white/20 inline-flex items-center gap-1.5 backdrop-blur-sm">
                                    <Sparkles className="w-3.5 h-3.5 text-[#95CCDD]" />
                                    <span>Instant Slot Reservation</span>
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                                Ready for Pain-Free, Expert Dental Care?
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed max-w-md">
                                Schedule your consultation with <strong className="text-white">{DOCTOR.name}</strong> (MDS Endodontist & Cosmetic Dentist with 17+ Years Experience).
                            </p>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 space-y-6 bg-white">
                            {/* Doctor Card Profile Preview */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#EEF5FF] border border-[#4F7DF8]/20 shadow-sm">
                                <div className="w-14 h-14 rounded-full bg-white p-0.5 shadow-md relative overflow-hidden shrink-0 border-2 border-[#4F7DF8]">
                                    <Image
                                        src={DOCTOR.image}
                                        alt={DOCTOR.name}
                                        fill
                                        sizes="120px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-base font-bold text-[#162554]">{DOCTOR.name}</h4>
                                    <p className="text-xs font-semibold text-[#4F7DF8]">{DOCTOR.title}</p>
                                    <p className="text-[11px] text-gray-500">10,000+ Teeth Saved • LB Nagar, Hyderabad</p>
                                </div>
                            </div>

                            {/* Patient Care Checklist */}
                            <div className="space-y-2.5 text-xs text-gray-700 font-medium">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span>Single Sitting Painless Root Canal Specialist</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span>100% Sterile & Hospital-grade Infection Control</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span>Zero Waiting Time for Online Bookings</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 pt-2">
                                <Button
                                    onClick={handleBookNow}
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    icon={Calendar}
                                >
                                    Book Appointment Now
                                </Button>

                                <a
                                    href={`tel:${CONTACT.phoneClean}`}
                                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gray-100 hover:bg-gray-200 text-[#162554] font-semibold text-sm transition-colors border border-gray-200"
                                >
                                    <Phone className="w-4 h-4 text-[#4F7DF8]" />
                                    <span>Call Clinic: {CONTACT.phone}</span>
                                </a>
                            </div>

                            <p className="text-[11px] text-gray-400 text-center">
                                🔒 Fast confirmation by our receptionist within minutes.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
