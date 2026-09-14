"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export const GlowingOrbDivider: React.FC = () => {
  const techNodes = [
    { name: "Arduino", icon: "⚡", position: "-top-4 left-1/2 -translate-x-1/2" },
    { name: "ESP32", icon: "📡", position: "top-1/2 -right-6 -translate-y-1/2" },
    { name: "Java", icon: "☕", position: "-bottom-4 left-1/2 -translate-x-1/2" },
    { name: "Next.js", icon: "⚛️", position: "top-1/2 -left-6 -translate-y-1/2" },
  ];

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

        {/* Large Glowing Orb with Orbiting Technology Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative py-12 flex items-center justify-center"
        >
          {/* Main Orbit Circle Container */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full flex items-center justify-center">

            {/* Concentric Guide Ring 1 (Outer Dashed) */}
            <div className="absolute inset-0 rounded-full border border-[#10B981]/25 border-dashed pointer-events-none" />
            
            {/* Concentric Guide Ring 2 (Middle Solid) */}
            <div className="absolute inset-8 rounded-full border border-[#10B981]/35 pointer-events-none" />

            {/* Rotating Orbit Layer (360deg Spin) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="absolute inset-0 rounded-full pointer-events-none"
            >
              {techNodes.map((node, idx) => (
                <div key={idx} className={`absolute ${node.position}`}>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                    className="px-3.5 py-1.5 rounded-full bg-[#0F131C] border border-[#10B981] text-[#10B981] font-mono text-xs font-bold shadow-[0_0_18px_rgba(16,185,129,0.25)] flex items-center gap-1.5 whitespace-nowrap pointer-events-auto"
                  >
                    <span>{node.icon}</span>
                    <span>{node.name}</span>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Minimal Centerpiece Core (Seamless transparent background & no border) */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center bg-transparent z-10">
              <Image
                src="/logo.png"
                alt={siteConfig.personal.name}
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
