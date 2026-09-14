"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const AchievementsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-8 h-8 text-amber-400" />;
      case "award":
        return <Award className="w-8 h-8 text-[#8b5cf6]" />;
      default:
        return <Star className="w-8 h-8 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-14 sm:py-20 lg:py-24 bg-[#0e0812] text-white relative">
      {/* Radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[400px] bg-[#2a1245]/50 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Honors & Awards"
          title="Robotics & Innovation Achievements"
          subtitle="Champion awards in autonomous Line Follower Robotics and technical project showcases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group rounded-3xl bg-[#180c24]/80 border border-[#8b5cf6]/35 hover:border-[#8b5cf6] p-5 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Highlight Glow Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b5cf6]/10 rounded-full blur-2xl group-hover:bg-[#8b5cf6]/20 transition-all pointer-events-none" />

              <div>
                {/* Optional Champion Banner Photo */}
                {ach.imageUrl && (
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-[#8b5cf6]/30 bg-[#0e0812]">
                    <Image
                      src={ach.imageUrl}
                      alt={ach.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180c24] via-transparent to-transparent opacity-80" />
                    
                    {ach.badgeText && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                          {ach.badgeText}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#2a1245] border border-[#8b5cf6]/40 group-hover:scale-110 transition-transform">
                    {getIcon(ach.icon)}
                  </div>
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#2a1245] text-purple-200 border border-[#8b5cf6]/30">
                    {ach.year}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono text-[#8b5cf6] font-semibold tracking-wider uppercase">
                    {ach.category}
                  </span>
                  <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors mt-1 font-display">
                    {ach.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-slate-300 mb-3">
                  {ach.event} • <span className="text-slate-400">{ach.organization}</span>
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#8b5cf6]/20 flex items-center justify-between text-xs font-mono text-amber-400">
                <span className="flex items-center gap-1.5 font-bold">
                  <Medal className="w-4 h-4 text-amber-400" /> {ach.category} Award
                </span>
                <span className="text-slate-500">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
