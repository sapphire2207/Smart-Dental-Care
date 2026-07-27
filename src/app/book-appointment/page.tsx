"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  ShieldCheck
} from "lucide-react";
import { BRAND, DOCTOR, CONTACT, TIMINGS } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Textarea, Select, DatePicker } from "@/components/ui/FormControls";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0]?.title || "Root Canal Treatment (RCT)",
    preferredDate: "",
    preferredTime: "10:00 AM - 12:00 PM",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userEmailSent, setUserEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage(data?.error || "Failed to submit appointment. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error occurred. Please call the clinic directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header */}
      <section className="container-custom text-center max-w-4xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
          Online Slot Reservation
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
          Book Your Dental{" "}
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
            Appointment
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Reserve your consultation slot with Dr. Amulya Prrasad (17+ Years Experience). Fast, convenient, and instant confirmation.
        </p>
      </section>

      {/* Main Form & Info Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7">
            <Card padding="lg" className="border-2 border-gray-100 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-[#162554]">
                    Appointment Request Received!
                  </h3>

                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
                    Thank you, <strong className="text-[#162554]">{formData.name}</strong>. We have received your booking request for{" "}
                    <strong className="text-[#4F7DF8]">{formData.service}</strong> on{" "}
                    <strong>{formData.preferredDate}</strong> ({formData.preferredTime}).
                  </p>

                  {userEmailSent && (
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-medium flex items-center justify-center gap-2 max-w-md mx-auto border border-emerald-200">
                      <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Confirmation email sent to <strong>{formData.email}</strong>!</span>
                    </div>
                  )}

                  <div className="p-4 rounded-2xl bg-[#EEF5FF] text-xs text-[#162554] font-medium max-w-md mx-auto">
                    Our receptionist will call you shortly on <strong>{formData.phone}</strong> to confirm your exact time slot.
                  </div>

                  <div className="pt-4">
                    <Button onClick={() => setSubmitted(false)} variant="outline" size="md">
                      Book Another Appointment
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#162554] pb-2 border-b border-gray-100">
                    Patient Details & Slot Choice
                  </h3>

                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      icon={<User className="w-4 h-4" />}
                    />

                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      icon={<Phone className="w-4 h-4" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Email Address (Optional)"
                      name="email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      icon={<Mail className="w-4 h-4" />}
                    />

                    <Select
                      label="Select Service / Treatment"
                      name="service"
                      required
                      options={serviceOptions}
                      value={formData.service}
                      onChange={handleChange}
                      icon={<Stethoscope className="w-4 h-4" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <DatePicker
                      label="Preferred Date *"
                      name="preferredDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />

                    <Select
                      label="Preferred Time Slot"
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
                    placeholder="Describe any pain, tooth condition, or special preferences..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={loading}
                      icon={Calendar}
                    >
                      {loading ? "Submitting Booking..." : "Confirm & Send Appointment Request"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center">
                    🔒 Your personal details are safe with us. We respect patient privacy.
                  </p>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Clinic Information & Phone Call Option */}
          <div className="lg:col-span-5 space-y-6">
            <Card padding="md" className="space-y-6 border-2 border-[#4F7DF8]/20 bg-gradient-to-b from-[#EEF5FF]/50 to-white">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#162554] text-white flex items-center justify-center shrink-0">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#162554]">{DOCTOR.name}</h4>
                  <p className="text-xs text-[#4F7DF8] font-semibold">{DOCTOR.title}</p>
                  <p className="text-[11px] text-gray-500">17+ Yrs Experience (MDS Endodontist)</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-gray-600 border-t border-gray-200/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Single Sitting Root Canal available</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Sterile Autoclave Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero waiting time for online appointments</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2">
                <h5 className="text-xs font-bold text-[#162554] uppercase tracking-wider">
                  Clinic Hours
                </h5>
                <p className="text-xs text-gray-600">
                  <strong>Mon - Sat:</strong> {TIMINGS.weekdays.morning} & {TIMINGS.weekdays.evening}
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Sunday:</strong> {TIMINGS.sunday.morning}
                </p>
              </div>

              <div className="pt-2 text-center space-y-2">
                <p className="text-xs font-semibold text-gray-500">Need Immediate Booking over Phone?</p>
                <a
                  href={`tel:${CONTACT.phoneClean}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#162554] hover:bg-[#1E3470] text-white font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#95CCDD]" />
                  <span>Call {CONTACT.phone}</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
