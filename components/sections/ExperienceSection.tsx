"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, Cpu, User, ArrowRight, X, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, ExperienceItem } from "@/data/siteConfig";

export const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const get3DIcon = (iconType: string) => {
    switch (iconType) {
      case "star":
        return <Sparkles className="w-6 h-6 text-[#8b5cf6]" />;
      case "planet":
        return <Globe className="w-6 h-6 text-[#8b5cf6]" />;
      case "ghost":
        return <Cpu className="w-6 h-6 text-[#8b5cf6]" />;
      case "person":
        return <User className="w-6 h-6 text-[#8b5cf6]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8b5cf6]" />;
    }
  };

  return (
    <section id="experience" className="py-14 sm:py-20 lg:py-24 bg-[#0e0812] text-white relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#2a1245]/40 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Career History"
          title="Work Experience"
          subtitle="Delivering seamless digital onboarding, AI EDA workflows, IoT automation, and robotics."
        />

        {/* 2x2 Grid of Clay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {siteConfig.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="clay-card rounded-2xl p-5 sm:p-8 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Small 3D Icon Badge */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#1e0a35] border border-[#8b5cf6]/30 flex items-center justify-center mb-4 sm:mb-5 shadow-[0_0_20px_rgba(139,92,246,0.25)] group-hover:scale-110 transition-transform">
                  {get3DIcon(exp.iconType)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-1.5 sm:mb-2 font-display">
                  {exp.role}
                </h3>

                <p className="text-xs font-mono text-[#8b5cf6] font-semibold mb-3">
                  {exp.companyOrOrg} • {exp.period}
                </p>

                {/* One-line Description */}
                <p className="text-[#c9c3d1] text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                  {exp.oneLiner}
                </p>
              </div>

              {/* Outlined Pill Button "LEARN MORE" */}
              <div className="pt-4 border-t border-[#8b5cf6]/15 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedExperience(exp)}
                  className="px-4 py-2 rounded-full border border-[#8b5cf6]/50 text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] inline-flex items-center gap-1.5 active:scale-95"
                >
                  LEARN MORE <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex flex-wrap gap-1">
                  {exp.skills.slice(0, 3).map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-[#1a0b2e] text-slate-300 border border-[#8b5cf6]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
              className="fixed inset-0 bg-[#0e0812]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#180c24] border border-[#8b5cf6]/40 p-5 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] z-10 my-auto text-white"
            >
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#2a1245] text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-2xl bg-[#2a1245] border border-[#8b5cf6]/40 flex items-center justify-center mb-4">
                {get3DIcon(selectedExperience.iconType)}
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedExperience.role}
              </h3>
              <p className="text-[#8b5cf6] text-xs font-mono mb-4">
                {selectedExperience.companyOrOrg} ({selectedExperience.period})
              </p>

              <p className="text-[#c9c3d1] text-sm leading-relaxed mb-6">
                {selectedExperience.oneLiner}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Achievements & Responsibilities
                </h4>
                {selectedExperience.description.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8b5cf6]/20">
                {selectedExperience.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs rounded-lg bg-[#2a1245] text-purple-200 border border-[#8b5cf6]/30 font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
