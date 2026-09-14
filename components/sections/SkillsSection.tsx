"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Camera, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case "cpu":
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case "camera":
        return <Camera className="w-6 h-6 text-purple-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical & Creative Expertise"
          title="Skills & Toolkits"
          subtitle="Grouped across Web Engineering, AI & Electronics hardware, and Creative visual media."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.skillsCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 p-5 sm:p-8 backdrop-blur-xl transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <ul className="space-y-2.5 my-6">
                  {cat.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-950/40 px-3 py-2 rounded-xl border border-slate-800/60"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-500">
                Category #{idx + 1} • {cat.skills.length} core competencies
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
