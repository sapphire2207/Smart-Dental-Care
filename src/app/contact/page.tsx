import React from "react";
import Metadata from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { BRAND, CONTACT, TIMINGS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact Us & Directions | Smart Dental Care LB Nagar",
  description: "Contact Smart Dental Care in LB Nagar, Hyderabad. View location address, phone number, clinic timings, Google Maps directions, and emergency contact details.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header */}
      <section className="container-custom text-center max-w-4xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
          Get In Touch
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
          Visit or Call{" "}
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
            Smart Dental Care
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We are conveniently located at LB Nagar Circle, Saroornagar Road, Hyderabad. Reach out to schedule a consultation or inquire about treatments.
        </p>
      </section>

      {/* Contact Cards Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Call Us Directly</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Available during clinic hours for appointments, inquiries, and emergency dental support.
            </p>
            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="inline-block text-lg font-bold text-[#4F7DF8] hover:underline"
            >
              {CONTACT.phone}
            </a>
          </Card>

          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">WhatsApp Instant</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Send us a quick WhatsApp message to get instant replies regarding slot availability.
            </p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-bold text-emerald-600 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </Card>

          <Card hover borderGradient className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF5FF] text-[#4F7DF8] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#162554]">Email Us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Send non-urgent queries, clinical reports, or corporate insurance documentation.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-block text-base font-bold text-[#4F7DF8] hover:underline"
            >
              {CONTACT.email}
            </a>
          </Card>
        </div>
      </section>

      {/* Address & Timings + Google Map Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Address Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#162554]">Clinic Location</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Smart Dental Care is situated on the 1st Floor, above Medplus Pharmacy in SBH Colony, LB Nagar Circle.
              </p>
            </div>

            <Card padding="md" className="space-y-4 border-2 border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4F7DF8] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#162554]">Full Address</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{CONTACT.address.full}</p>
                  <p className="text-xs text-gray-500 pt-1">
                    <strong className="text-[#162554]">Landmarks:</strong> {CONTACT.address.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4F7DF8] shrink-0 mt-1" />
                <div className="space-y-1 text-sm text-gray-600">
                  <h4 className="text-base font-bold text-[#162554]">Clinic Timings & Plus Code</h4>
                  <p><strong className="text-[#162554]">Mon - Sat:</strong> {TIMINGS.weekdays.morning} & {TIMINGS.weekdays.evening}</p>
                  <p><strong className="text-[#162554]">Sunday:</strong> {TIMINGS.sunday.morning}</p>
                  <p className="text-xs text-gray-500 pt-1"><strong className="text-[#162554]">Plus Code:</strong> {CONTACT.plusCode}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {CONTACT.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-semibold border border-[#4F7DF8]/20">
                    ✨ {feature}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#162554] hover:bg-[#1E3470] text-white font-semibold text-sm transition-colors"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-4 h-4 text-[#95CCDD]" />
                </a>
              </div>
            </Card>

            {/* Emergency Notice */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Dental Emergency?</strong> If you are suffering from acute unbearable pain or tooth trauma, call us immediately at {CONTACT.phone}.
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-[32px] overflow-hidden shadow-lg border border-gray-200 h-[450px] lg:h-[550px] relative bg-gray-100">
            <iframe
              src={CONTACT.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Dental Care Location Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
