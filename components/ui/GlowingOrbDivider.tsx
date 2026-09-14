"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Settings, FileText, Figma } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const GlowingOrbDivider: React.FC = () => {
  return (
    <section className="py-20 bg-[#08090C] text-white relative overflow-hidden select-none border-y border-[#10B981]/20">
      {/* Background Deep Emerald Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#10B981]/10 rounded-full blur-[80px] pointer-events-none transform-gpu" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-12">
        
        {/* Availability Line */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-2xl font-medium text-[#c9c3d1] max-w-3xl mx-auto leading-relaxed font-display"
        >
          &ldquo;{siteConfig.personal.availabilityStatement}&rdquo;
        </motion.h3>

        {/* Two Rows of Tool & Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto"
        >
          {siteConfig.tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F131C] border border-[#10B981]/25 text-xs font-mono text-slate-300 hover:border-[#10B981] hover:text-[#10B981] transition-all shadow-[0_0_15px_rgba(16,185,129,0.08)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>{tool.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Large Glowing Orb with Concentric Orbit Rings & Floating Tool Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative py-12 flex items-center justify-center"
        >
          {/* Orbit Ring 3 (Outer - Counter Spin) */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-[#10B981]/20 animate-slow-spin border-dashed flex items-center justify-center">
            
            {/* Floating Orbit Icon 1: Code */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 rounded-full bg-[#0F131C] border border-[#10B981]/40 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Code className="w-4 h-4" />
            </div>

            {/* Floating Orbit Icon 2: Settings Gear */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-2 rounded-full bg-[#0F131C] border border-[#10B981]/40 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Settings className="w-4 h-4" />
            </div>

            {/* Orbit Ring 2 (Middle) */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-[#10B981]/35 flex items-center justify-center relative">
              
              {/* Floating Orbit Icon 3: FileText */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0F131C] border border-[#10B981]/40 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <FileText className="w-4 h-4" />
              </div>

              {/* Floating Orbit Icon 4: Figma/Design */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0F131C] border border-[#10B981]/40 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Figma className="w-4 h-4" />
              </div>

              {/* Minimal Centerpiece Core */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center p-2">
                <Image
                  src="/logo.png"
                  alt={siteConfig.personal.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-contain rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
