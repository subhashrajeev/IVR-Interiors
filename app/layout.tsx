import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialButtons from "./components/SocialButtons";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "IVR Interiors - Premium Modular Kitchens & Wardrobes in Hyderabad",
  description: "Transform your space with IVR Interiors. 15+ years of expertise in modular kitchens, wardrobes, and custom interior design in Hyderabad. Quality craftsmanship, timely delivery.",
  keywords: "modular kitchen Hyderabad, wardrobe design, interior design, custom furniture, IVR Interiors, Nizampet",
  authors: [{ name: "IVR Interiors" }],
  openGraph: {
    title: "IVR Interiors - Premium Modular Kitchens & Wardrobes",
    description: "15+ years of expertise in modular kitchens, wardrobes, and custom interior design in Hyderabad",
    type: "website",
    locale: "en_IN",
    siteName: "IVR Interiors",
  },
  twitter: {
    card: "summary_large_image",
    title: "IVR Interiors - Premium Modular Kitchens & Wardrobes",
    description: "15+ years of expertise in modular kitchens, wardrobes, and custom interior design",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SocialButtons />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
