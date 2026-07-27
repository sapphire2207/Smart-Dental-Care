import React from "react";
import Metadata from "next";
import { Star, ShieldCheck, Quote, Calendar } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Patient Reviews & Testimonials | Smart Dental Care LB Nagar",
  description: "Read real patient testimonials and reviews for Dr. Amulya Prrasad at Smart Dental Care. 4.9/5 star rating across 10,000+ satisfied patients in Hyderabad.",
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header */}
      <section className="container-custom text-center max-w-4xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
          Verified Patient Feedback
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
          What Our Patients Say About{" "}
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
            Smart Dental Care
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Over 10,000+ happy patients trust Dr. Amulya Prrasad for painless root canals, cosmetic transformations, and dental implants.
        </p>

        {/* Rating Banner */}
        <div className="inline-flex items-center gap-4 p-4 rounded-full bg-white border border-gray-200 shadow-sm mx-auto">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-lg font-bold text-[#162554]">4.9 / 5 Average Rating</span>
          <span className="text-xs text-gray-500 border-l pl-4 font-medium">Based on 500+ Online Reviews</span>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <Card key={item.id} hover className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#EEF5FF]" />
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-[#162554]">{item.name}</h4>
                  <p className="text-xs text-[#4F7DF8] font-semibold">{item.treatment}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{item.location}</p>
                </div>
                {item.verified && (
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    ✓ Verified
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom">
        <div className="rounded-[32px] bg-[#162554] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Experience Painless Dental Care Today</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Join thousands of satisfied patients who trust Dr. Amulya Prrasad for their family dental health.
          </p>
          <Button href="/book-appointment" variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
