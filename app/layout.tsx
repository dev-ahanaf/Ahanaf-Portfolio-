import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090C",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.personal.name} - Web Developer, Photographer & AI Builder`,
    template: `%s | ${siteConfig.personal.name}`,
  },
  description: siteConfig.personal.shortIntro,
  keywords: [
    "Fayek Ahanaf",
    "Daffodil International University",
    "DIU CIS Student",
    "Web Developer Bangladesh",
    "Shopify Expert",
    "WordPress Developer",
    "Perfect Click Photography",
    "CircuitMind AI",
    "Robotics IoT",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.personal.name }],
  creator: siteConfig.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahanaf-portfolio.vercel.app",
    title: `${siteConfig.personal.name} - Web Developer, Photographer & AI Builder`,
    description: siteConfig.personal.shortIntro,
    siteName: siteConfig.personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.personal.name} - Portfolio`,
    description: siteConfig.personal.shortIntro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#08090C] text-slate-100 antialiased selection:bg-[#10B981] selection:text-slate-950`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
