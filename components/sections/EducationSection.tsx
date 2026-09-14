"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-20 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal academic qualifications in Computing & Information Systems and Sciences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 p-5 sm:p-8 backdrop-blur-xl transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                    {edu.result}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-sm font-semibold text-slate-300 mb-3">{edu.institution}</h4>

                {edu.details && (
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {edu.details}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" /> Science Focus
                </span>
                <span>{edu.period || "Graduated"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
