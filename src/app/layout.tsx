import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import LenisProvider from "@/components/providers/LenisProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { BRAND, DOCTOR, CONTACT } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | ${BRAND.tagline} - LB Nagar, Hyderabad`,
    template: `%s | ${BRAND.name} Hyderabad`,
  },
  description: `${BRAND.description} Located at LB Nagar Circle, Hyderabad. Specialist Endodontist & Cosmetic Dentist.`,
  keywords: [
    "Smart Dental Care",
    "Dr Amulya Prrasad",
    "Dentist LB Nagar",
    "Root Canal Specialist Hyderabad",
    "Cosmetic Dentist Hyderabad",
    "Dental Implants LB Nagar",
    "Invisalign Hyderabad",
    "Crowns and Bridges Fixing",
    "Bleeding Gums Treatment",
    "Best Dental Clinic Saroornagar",
  ],
  authors: [{ name: DOCTOR.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smartdentalcare.in",
    title: `${BRAND.name} | Dr. Amulya Prrasad (MDS)`,
    description: BRAND.description,
    siteName: BRAND.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#4F7DF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body text-[#111827] bg-[#FAFBFD] min-h-screen flex flex-col antialiased">
        <LenisProvider>
          <Header />
          <main className="flex-grow pt-24 sm:pt-28">{children}</main>
          <Footer />
          <FloatingCTA />
          <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}
