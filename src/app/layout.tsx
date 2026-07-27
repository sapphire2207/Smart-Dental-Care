import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import LenisProvider from "@/components/providers/LenisProvider";
import { AppointmentModalProvider } from "@/components/providers/AppointmentModalProvider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { BRAND, DOCTOR } from "@/lib/constants";

const urbanist = localFont({
  src: [
    {
      path: "../../public/Urbanist/Urbanist-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/Urbanist/Urbanist-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-urbanist",
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
    <html lang="en" className={urbanist.variable}>
      <body className="font-sans text-[#111827] bg-[#FAFBFD] min-h-screen flex flex-col antialiased">
        <AppointmentModalProvider>
          <LenisProvider>
            <Header />
            <main className="flex-grow pt-24 sm:pt-28">{children}</main>
            <Footer />
            <FloatingCTA />
            <ScrollToTop />
          </LenisProvider>
        </AppointmentModalProvider>
      </body>
    </html>
  );
}

