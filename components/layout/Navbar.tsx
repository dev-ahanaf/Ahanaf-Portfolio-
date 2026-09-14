"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
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

        {/* Right Desktop Nav Links (Home, About, Lab, Contact) */}
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
          <a
            href={siteConfig.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-xl bg-[#0F131C] border border-[#10B981]/30 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#08090C]/95 border-b border-[#10B981]/30 backdrop-blur-xl px-4 py-6"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-[#10B981] hover:bg-[#0F131C] rounded-xl transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-xl bg-[#10B981] text-slate-950 font-bold text-sm text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
