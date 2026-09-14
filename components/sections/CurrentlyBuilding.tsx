"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Terminal, CheckCircle, Code } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const CurrentlyBuilding: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="py-10 sm:py-16 bg-[#08090C] text-white relative border-y border-slate-800/80 overflow-hidden">
      {/* Background Subtle Mint Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
            {/* Left Statement */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#10B981]/10 text-emerald-300 border border-[#10B981]/30">
                <Zap className="w-3.5 h-3.5 text-[#10B981] animate-pulse" /> {siteConfig.currentlyBuilding.title}
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-white max-w-xl leading-relaxed font-display">
                &ldquo;{siteConfig.currentlyBuilding.closingStatement}&rdquo;
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400 pt-1">
                <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Live status: <strong className="text-emerald-400">Active Development & Competition Ready</strong></span>
              </div>
            </div>

            {/* Interactive Focus Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 max-w-lg">
              {siteConfig.currentlyBuilding.items.map((item, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium border transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${
                      isActive
                        ? "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    {isActive ? (
                      <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    ) : (
                      <Code className="w-3.5 h-3.5 text-slate-500" />
                    )}
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

