"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const SocialStripSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#0e0812] text-white relative border-y border-[#8b5cf6]/15 select-none">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Centered Availability Statement */}
          <h3 className="text-sm sm:text-xl font-medium text-slate-300 font-display px-2">
            Currently looking to join a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 font-bold underline decoration-[#8b5cf6]/40">
              cross-functional / creative team
            </span>
          </h3>

          {/* Row of Small Circular Social Icons (GitHub, LinkedIn, Instagram, Email) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:scale-110"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${siteConfig.personal.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
