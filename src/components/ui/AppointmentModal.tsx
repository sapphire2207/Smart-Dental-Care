"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Send
} from "lucide-react";
import { BRAND, DOCTOR, CONTACT } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select, DatePicker } from "@/components/ui/FormControls";
import { LogoIcon } from "@/components/ui/LogoIcon";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || SERVICES[0]?.title || "Root Canal Treatment (RCT)",
    preferredDate: "",
    preferredTime: "10:00 AM - 12:00 PM",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userEmailSent, setUserEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const timeOptions = [
    { value: "10:00 AM - 12:00 PM", label: "Morning: 10:00 AM - 12:00 PM" },
    { value: "12:00 PM - 02:00 PM", label: "Afternoon: 12:00 PM - 02:00 PM" },
    { value: "05:00 PM - 07:00 PM", label: "Evening: 05:00 PM - 07:00 PM" },
    { value: "07:00 PM - 09:00 PM", label: "Night: 07:00 PM - 09:00 PM" },
  ];

  const serviceOptions = SERVICES.map((s) => ({
    value: s.title,
    label: s.title,
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setUserEmailSent(Boolean(data.userEmailSent));
      } else {
        setErrorMessage(data?.error || "Failed to send appointment request. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please try again or call the clinic directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setUserEmailSent(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: SERVICES[0]?.title || "Root Canal Treatment (RCT)",
      preferredDate: "",
      preferredTime: "10:00 AM - 12:00 PM",
      message: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#162554]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#162554] via-[#1E3470] to-[#4F7DF8] text-white shrink-0">
              <div className="flex items-center gap-3">
                <LogoIcon className="w-9 h-9 filter drop-shadow-md" />
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Book Dental Appointment</h3>
                  <p className="text-xs text-blue-100">Quick online slot request with Dr. Amulya Prrasad</p>
                </div>
              </div>

              <Button
                onClick={onClose}
                variant="ghost"
                size="sm"
                icon={X}
                className="!p-2 rounded-full !bg-white/10 hover:!bg-white/20 text-white shadow-none border-none"
              />
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {submitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-extrabold text-[#162554]">
                      Appointment Request Received!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#162554]">{formData.name}</strong>. We have received your booking request for{" "}
                      <strong className="text-[#4F7DF8]">{formData.service}</strong> on{" "}
                      <strong>{formData.preferredDate}</strong> ({formData.preferredTime}).
                    </p>
                  </div>

                  {userEmailSent ? (
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center justify-center gap-2 border border-emerald-200/80">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confirmation email sent to <strong>{formData.email}</strong>!</span>
                    </div>
                  ) : (
                    formData.email && (
                      <div className="p-3 rounded-2xl bg-[#EEF5FF] text-[#162554] text-xs font-medium border border-[#4F7DF8]/20">
                        <span>Details sent to clinic staff. Confirmation calls will be made shortly.</span>
                      </div>
                    )
                  )}

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-gray-600 max-w-md mx-auto space-y-1">
                    <p className="font-semibold text-[#162554]">📞 Reception Call Back</p>
                    <p>Our receptionist will call you on <strong>{formData.phone}</strong> to confirm your slot time.</p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button onClick={handleReset} variant="outline" size="sm">
                      Book Another Slot
                    </Button>
                    <Button onClick={onClose} variant="primary" size="sm">
                      Done / Close
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name *"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      icon={<User className="w-4 h-4" />}
                    />

                    <Input
                      label="Phone Number *"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      icon={<Phone className="w-4 h-4" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address (For Confirmation Email)"
                      name="email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      icon={<Mail className="w-4 h-4" />}
                    />

                    <Select
                      label="Treatment / Service *"
                      name="service"
                      required
                      options={serviceOptions}
                      value={formData.service}
                      onChange={handleChange}
                      icon={<Stethoscope className="w-4 h-4" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DatePicker
                      label="Preferred Date *"
                      name="preferredDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />

                    <Select
                      label="Preferred Time Slot *"
                      name="preferredTime"
                      required
                      options={timeOptions}
                      value={formData.preferredTime}
                      onChange={handleChange}
                      icon={<Clock className="w-4 h-4" />}
                    />
                  </div>

                  <Textarea
                    label="Symptoms or Notes (Optional)"
                    name="message"
                    placeholder="Describe any tooth pain, sensitivity, or special requests..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={loading}
                      icon={Send}
                    >
                      {loading ? "Sending Booking Request..." : "Confirm & Send Appointment Request"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      100% Sterile & Confidential
                    </span>
                    <span>Direct Doctor Notification</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
