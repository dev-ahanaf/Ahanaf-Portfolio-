"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Lab / Work", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadership" },
    { label: "Achievements", href: "#achievements" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-[#08090C]/90 backdrop-blur-xl border-b border-[#10B981]/25 py-3 shadow-[0_0_25px_rgba(16,185,129,0.1)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Minimal Brand Logo */}
        <Link
          href="#hero"
          aria-label="Home"
          onClick={() => setMobileMenuOpen(false)}
          className="group inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="FA Brand Logo"
            width={44}
            height={44}
            className="h-10 sm:h-11 w-auto object-contain rounded-md"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-[#0F131C]/70 border border-[#10B981]/25 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.08)]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-[#10B981] hover:bg-[#161B26] rounded-full transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#resume"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" /> Resume
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0F131C] text-slate-300 border border-[#10B981]/30 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#10B981]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090C]/95 backdrop-blur-2xl border-b border-[#10B981]/20 px-6 py-6 space-y-2 mt-3 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-[#10B981] hover:bg-[#161B26] border border-transparent hover:border-[#10B981]/20 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

