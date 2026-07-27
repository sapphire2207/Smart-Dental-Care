import React from "react";
import Metadata from "next";
import Link from "next/link";
import { Calendar, Clock, User, ChevronRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Dental Health Blog & Articles | Smart Dental Care",
  description: "Read expert dental tips, root canal guides, pediatric oral care advice, and teeth whitening insights by Dr. Amulya Prrasad.",
};

export default function BlogPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-6">
      {/* Header */}
      <section className="container-custom text-center max-w-4xl mx-auto space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#EEF5FF] text-[#4F7DF8] text-xs font-bold uppercase tracking-wider border border-[#4F7DF8]/20 inline-block">
          Oral Health Articles & Tips
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162554] tracking-tight leading-[1.15]">
          Smart Dental Care{" "}
          <span className="bg-gradient-to-r from-[#4F7DF8] to-[#3A62D4] bg-clip-text text-transparent">
            Blog & Guides
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Expert dental advice, treatment guides, and preventive hygiene tips authored by Dr. Amulya Prrasad and our clinical team.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} hover className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="px-3 py-1 rounded-full bg-[#EEF5FF] text-[#4F7DF8] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#4F7DF8]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#4F7DF8]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#162554] hover:text-[#4F7DF8] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#162554]">
                  <User className="w-4 h-4 text-[#4F7DF8]" />
                  <span>{post.author}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#4F7DF8]">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
