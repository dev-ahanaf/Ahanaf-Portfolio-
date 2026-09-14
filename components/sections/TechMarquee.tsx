"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Cpu } from "lucide-react";

export const TechMarquee: React.FC = () => {
  // Duplicate array to ensure seamless infinite loop
  const marqueeItems = [...siteConfig.techStackMarquee, ...siteConfig.techStackMarquee];

  return (
    <div className="py-8 bg-slate-950/80 border-b border-slate-900 overflow-hidden relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-6 items-center">
        {marqueeItems.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-mono font-semibold tracking-wider hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
