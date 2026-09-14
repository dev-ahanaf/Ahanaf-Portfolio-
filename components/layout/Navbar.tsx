"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090C]/85 backdrop-blur-xl border-b border-[#10B981]/25 py-3 shadow-[0_0_25px_rgba(16,185,129,0.1)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Minimal Brand Logo */}
        <Link
          href="#hero"
          aria-label="Home"
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

        {/* Right Desktop Nav Links */}
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

        {/* Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#resume"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" /> Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

