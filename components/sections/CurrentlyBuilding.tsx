"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-[#0e0812] text-white relative border-y border-[#8b5cf6]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clay-card rounded-3xl p-5 sm:p-10 relative shadow-[0_0_40px_rgba(139,92,246,0.15)]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2.5 sm:space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#180c24] text-[#8b5cf6] border border-[#8b5cf6]/30">
                <Zap className="w-3.5 h-3.5 animate-bounce" /> {siteConfig.currentlyBuilding.title}
              </div>
              <h3 className="text-base sm:text-2xl font-bold text-white max-w-2xl leading-relaxed font-display">
                &ldquo;{siteConfig.currentlyBuilding.closingStatement}&rdquo;
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
              {siteConfig.currentlyBuilding.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#180c24] text-xs font-mono text-purple-200 border border-[#8b5cf6]/25 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
