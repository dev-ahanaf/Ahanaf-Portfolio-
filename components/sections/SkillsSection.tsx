"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Camera, Sparkles, Wrench, Terminal, Layers, TrendingUp, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "trending-up":
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case "shopping-bag":
        return <ShoppingBag className="w-5 h-5 text-purple-400" />;
      case "code":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "camera":
        return <Camera className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 bg-[#08090C] text-white relative overflow-hidden">
      {/* Background Blueprint Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[450px] bg-purple-900/10 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-teal-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Blueprint Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16 sm:mb-20 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Skills [Technical & Creative Expertise]</span>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[11px] sm:text-xs font-mono font-extrabold tracking-widest text-teal-400 uppercase bg-teal-950/40 border border-teal-500/30 px-3.5 py-2 rounded-xl backdrop-blur-md inline-block shadow-[0_0_15px_rgba(20,184,166,0.15)]">
              FROM CONCEPT TO COMPLETION
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight mb-4">
            Skills & Toolkits
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-mono">
            Technical blueprint spanning digital marketing, e-commerce storefronts, frontend engineering, and creative photography.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Timeline Spine Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#7C3AED]/80 via-[#10B981]/80 to-[#6366F1]/80 shadow-[0_0_12px_rgba(124,58,237,0.4)] z-0" />

          {/* Timeline Category Cards */}
          <div className="space-y-12 sm:space-y-20 relative z-10">
            {siteConfig.skillsCategories.map((cat, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={cat.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Spine Node Circle (Center Marker) */}
                  <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    {/* Outer Glowing Circle Node */}
                    <div className="w-8 h-8 rounded-full bg-[#08090C] border-2 border-[#7C3AED] shadow-[0_0_18px_rgba(124,58,237,0.7)] flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Floating Tech Logo Chip Accent near timeline node */}
                  <div
                    className={`hidden md:flex absolute top-5 z-20 items-center gap-2 ${
                      isEven
                        ? "left-[calc(50%+1.75rem)]"
                        : "right-[calc(50%+1.75rem)]"
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-[#0F131C] border border-[#7C3AED]/40 text-purple-300 shadow-[0_0_15px_rgba(124,58,237,0.2)] backdrop-blur-md">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    {/* Tiny glowing dot accent */}
                    <div className="w-2 h-2 rounded-full bg-cyan-400 blur-[1px] shadow-[0_0_8px_#22d3ee]" />
                  </div>

                  {/* Glassmorphism Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`w-full ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="group relative rounded-3xl bg-[#0F131C]/85 border border-slate-800 hover:border-purple-500/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden">
                      
                      {/* Ambient Glassmorphism Corner Glow */}
                      <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all pointer-events-none" />
                      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                      {/* Pill Category Label (Purple-to-Indigo Gradient) */}
                      <div className="mb-4 inline-flex items-center gap-2">
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6366F1] text-white text-xs font-mono font-extrabold tracking-wider uppercase shadow-[0_4px_15px_rgba(124,58,237,0.35)] flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-purple-200" />
                          <span>{cat.badgeLabel || cat.title}</span>
                        </span>
                      </div>

                      {/* Category Header Title & One-line Italic Description */}
                      <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight group-hover:text-purple-300 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono italic mt-1">
                          {cat.description}
                        </p>
                      </div>

                      {/* SKILLS Section */}
                      <div className="mb-6 pb-6 border-b border-slate-800/80">
                        <h4 className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3.5 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>SKILLS</span>
                        </h4>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {cat.skills.map((skill, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-snug"
                            >
                              <span className="text-[#8b5cf6] font-mono font-extrabold text-sm select-none shrink-0">
                                ▸
                              </span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* TOOLS Section */}
                      <div>
                        <h4 className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-teal-400 uppercase mb-3 flex items-center gap-2">
                          <Wrench className="w-3.5 h-3.5 text-teal-400" />
                          <span>TOOLS</span>
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {cat.tools?.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#08090C]/90 border border-slate-800/80 text-xs font-mono text-slate-300 shadow-sm hover:border-teal-500/40 transition-colors"
                            >
                              <span className="w-2 h-2 rounded-full border border-teal-400/80 shrink-0 inline-block" />
                              <span>{tool}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
