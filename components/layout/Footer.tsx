"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#09050d] border-t border-[#8b5cf6]/20 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#8b5cf6]/15">
          {/* Col 1: Brand Logo & Subtitle */}
          <div className="md:col-span-2">
            <Link
              href="#hero"
              className="inline-flex items-center gap-2.5 text-xl font-black text-white mb-4 font-display"
            >
              <img
                src="/logo.png"
                alt={siteConfig.personal.name}
                className="h-12 w-auto object-contain rounded-md"
              />
              {siteConfig.personal.name}
            </Link>
            <p className="text-[#c9c3d1] text-sm max-w-sm mb-6 leading-relaxed">
              {siteConfig.personal.subtitle}
              <br />
              <span className="text-slate-400 text-xs">{siteConfig.personal.shortIntro}</span>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-[#180c24] hover:bg-[#2a1245] text-purple-300 hover:text-white border border-[#8b5cf6]/25 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#180c24] hover:bg-[#2a1245] text-purple-300 hover:text-white border border-[#8b5cf6]/25 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#180c24] hover:bg-[#2a1245] text-purple-300 hover:text-white border border-[#8b5cf6]/25 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-[#180c24] hover:bg-[#2a1245] text-purple-300 hover:text-white border border-[#8b5cf6]/25 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#hero" className="hover:text-[#8b5cf6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#8b5cf6] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-[#8b5cf6] transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#8b5cf6] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#8b5cf6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="text-white text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              <strong className="text-purple-300">Fayek Ahanaf</strong> - CIS Student, Robotics Builder &amp; Web Developer.
            </p>
            <a
              href={`mailto:${siteConfig.personal.email}`}
              className="text-xs font-mono text-[#8b5cf6] hover:underline break-all"
            >
              {siteConfig.personal.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Fayek Ahanaf. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <span>Built with Next.js 14, Tailwind &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
