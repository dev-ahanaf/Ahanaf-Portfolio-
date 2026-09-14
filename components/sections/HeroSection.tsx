"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Trophy,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Typewriter } from "@/components/ui/Typewriter";

export const HeroSection: React.FC = () => {
  const roles = [
    "Robotics Competitor.",
    "Web Developer.",
    "AI Builder.",
    "Photographer.",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden bg-[#08090C] text-white"
    >
      {/* Focal Point Ambient Emerald Glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-gradient-to-tr from-[#10B981]/15 via-[#06B6D4]/10 to-transparent rounded-full blur-[70px] sm:blur-[90px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[#10B981]/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transform-gpu" />

      {/* Modern Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        
        {/* Top Centered Circular Avatar & Orbiting Ring */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mt-2 sm:mt-8 mb-6 flex flex-col items-center justify-center"
        >
          {/* Profile Orbit Container */}
          <div className="relative w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
            
            {/* Floating Speech Bubble at Top-Right */}
            <div className="absolute -top-11 right-0 sm:-top-16 sm:-right-16 z-30 pointer-events-auto">
              <div className="relative bg-[#0F131C] text-slate-200 border border-[#10B981]/40 px-3 sm:px-4 py-1.5 rounded-2xl text-[11px] sm:text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.15)] whitespace-nowrap flex items-center gap-1.5">
                <span>Hello! I Am <strong className="text-[#10B981] font-bold">{siteConfig.personal.name}</strong></span>
                <span className="text-sm sm:text-base">👋</span>
                {/* Pointer Tail Arrow aimed back down-left toward profile circle */}
                <div className="absolute -bottom-2 left-6 sm:left-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0F131C] -rotate-12" />
              </div>
            </div>

            {/* Avatar Soft Emerald Glow Background */}
            <div className="absolute inset-4 rounded-full bg-[#10B981]/20 blur-[30px] pointer-events-none" />

            {/* Dashed Guide Ring (orbit-guide) */}
            <div className="absolute w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] rounded-full border-[1.5px] border-dashed border-[#10B981]/35 z-10 pointer-events-none" />

            {/* Rotating Orbit Layer (orbit-ring) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] rounded-full z-20 pointer-events-none"
            >
              {/* Icon 1: Top (0deg) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#0F131C] border-[1.5px] border-[#10B981] text-emerald-300 flex items-center justify-center text-base sm:text-xl shadow-[0_0_14px_rgba(16,185,129,0.3)] pointer-events-auto"
                >
                  📁
                </motion.div>
              </div>

              {/* Icon 2: Right (90deg) */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#0F131C] border-[1.5px] border-[#10B981] text-cyan-300 flex items-center justify-center text-base sm:text-xl shadow-[0_0_14px_rgba(16,185,129,0.3)] pointer-events-auto"
                >
                  🧩
                </motion.div>
              </div>

              {/* Icon 3: Bottom (180deg) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#0F131C] border-[1.5px] border-[#10B981] text-emerald-300 flex items-center justify-center text-base sm:text-xl shadow-[0_0_14px_rgba(16,185,129,0.3)] pointer-events-auto"
                >
                  ⚙️
                </motion.div>
              </div>

              {/* Icon 4: Left (270deg) */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#0F131C] border-[1.5px] border-[#10B981] text-teal-300 flex items-center justify-center text-base sm:text-xl shadow-[0_0_14px_rgba(16,185,129,0.3)] pointer-events-auto"
                >
                  💬
                </motion.div>
              </div>
            </motion.div>

            {/* Static Profile Picture (profile-pic) */}
            <div className="relative w-[145px] h-[145px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden border-2 border-[#10B981]/70 shadow-[0_0_30px_rgba(16,185,129,0.25)] bg-[#0F131C] z-10 flex items-center justify-center">
              <Image
                src={siteConfig.personal.avatarImageUrl}
                alt="Fayek Ahanaf - DIU CIS Student"
                fill
                priority
                sizes="(max-width: 640px) 145px, 200px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Small Eyebrow Line */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0F131C]/90 border border-[#10B981]/30 text-[#10B981] text-[11px] sm:text-xs font-mono mb-3 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteConfig.personal.eyebrow}</span>
        </div>

        {/* Large Two-line Headline with Hand-drawn Ellipse */}
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-3 max-w-4xl font-display">
          <span className="whitespace-nowrap">
            {siteConfig.personal.headlineLine1}
            <span className="relative inline-block text-[#10B981] px-1.5 sm:px-2 font-black">
              {siteConfig.personal.headlineHighlightedWord}
              {/* SVG Hand-drawn Emerald Ellipse */}
              <svg
                className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none overflow-visible max-w-full"
                viewBox="0 0 140 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8,25 C15,8 125,5 132,25 C138,42 12,45 6,26 C3,16 40,8 128,12"
                  stroke="#10B981"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-90"
                />
              </svg>
            </span>
          </span>{" "}
          <span className="block sm:inline">{siteConfig.personal.headlineLine2}</span>
        </h1>

        {/* Headline Subtext */}
        <p className="text-slate-400 text-xs sm:text-base font-mono mb-5 sm:mb-6 max-w-2xl px-2">
          &ldquo;{siteConfig.personal.headlineSubtext}&rdquo;
        </p>

        {/* Animated Typewriter Line */}
        <div className="text-base sm:text-2xl font-mono text-slate-300 mb-5 sm:mb-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2">
          <span className="text-slate-400">I&apos;m a</span>
          <Typewriter words={roles} />
        </div>

        {/* Short Bio Paragraph */}
        <p className="text-[#c9c3d1] text-xs sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8 px-2">
          {siteConfig.personal.shortIntro}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
          <Link
            href="#achievements"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95"
          >
            View Achievements <Trophy className="w-4 h-4 text-slate-950" />
          </Link>

          <Link
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0F131C] hover:bg-[#161B26] border border-[#10B981]/40 text-emerald-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            View Projects <ArrowRight className="w-4 h-4 text-[#10B981]" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0B0E14] hover:bg-[#0F131C] border border-slate-800 text-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#10B981]" /> Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
};
