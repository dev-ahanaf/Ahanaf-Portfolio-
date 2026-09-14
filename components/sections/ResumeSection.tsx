"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Github, FileText, ExternalLink, Award, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-14 sm:py-20 lg:py-24 bg-[#08090C] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-12 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden"
        >
          {/* Top Badge Icon */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] w-fit mx-auto mb-5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <FileText className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#10B981]/10 text-emerald-300 border border-[#10B981]/30 font-bold mb-3 inline-block">
            Official Document
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 font-display">
            Curriculum Vitae
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Review my complete technical background, engineering project history, competition achievements, and academic accomplishments in a single PDF document.
          </p>

          {/* Quick Highlights Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left mb-8 max-w-2xl mx-auto">
            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-2 text-[#10B981] text-xs font-bold font-mono mb-1">
                <GraduationCap className="w-4 h-4" /> Education
              </div>
              <p className="text-xs font-semibold text-white">B.Sc. in CIS (DIU)</p>
              <p className="text-[11px] text-slate-400 font-mono">CGPA 3.40 / 4.00</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono mb-1">
                <Award className="w-4 h-4" /> Championships
              </div>
              <p className="text-xs font-semibold text-white">DIU & NSTU Champion</p>
              <p className="text-[11px] text-slate-400 font-mono">Autonomous PID Robotics</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="flex items-center gap-2 text-[#10B981] text-xs font-bold font-mono mb-1">
                <Briefcase className="w-4 h-4" /> Experience
              </div>
              <p className="text-xs font-semibold text-white">3+ Years Development</p>
              <p className="text-[11px] text-slate-400 font-mono">Shopify, Next.js, IoT</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={siteConfig.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Fayek_Ahanaf_Resume.pdf"
              className="px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-950" /> Download Resume (PDF)
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-slate-800 transition-all active:scale-95"
            >
              <Linkedin className="w-4 h-4 text-[#10B981]" /> View LinkedIn <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 border border-slate-800 transition-all active:scale-95"
            >
              <Github className="w-4 h-4 text-[#10B981]" /> View GitHub <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

