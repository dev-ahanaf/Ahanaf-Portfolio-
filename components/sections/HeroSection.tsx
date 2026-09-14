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
  FolderGit2,
  Network,
  Settings,
  MessageSquare,
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
      className="relative min-h-screen pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden bg-[#0e0812] text-white"
    >
      {/* Focal Point Purple Radial Glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-gradient-to-tr from-[#2a1245] via-[#4a1f7a]/30 to-transparent rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1245_1px,transparent_1px),linear-gradient(to_bottom,#2a1245_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        
        {/* Top Centered Circular Avatar & Orbiting Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mt-4 sm:mt-8 mb-6 flex flex-col items-center justify-center"
        >
          {/* Profile Orbit Container */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
            
            {/* Floating Speech Bubble at Right (Outside Orbit Path) */}
            <div className="absolute top-4 -right-14 sm:top-6 sm:-right-24 bg-[#1a0b2e] text-white border border-[#8b5cf6]/40 px-3.5 sm:px-4 py-1.5 rounded-2xl text-[11px] sm:text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.35)] whitespace-nowrap z-30 flex items-center gap-1.5">
              <span>Hello! I Am <strong className="text-[#8b5cf6] font-bold">{siteConfig.personal.name}</strong></span>
              <span className="text-sm sm:text-base">👋</span>
              {/* Bubble Tail Arrow pointing left towards orbit */}
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#1a0b2e]" />
            </div>

            {/* Avatar Soft Purple Glow Background */}
            <div className="absolute inset-4 rounded-full bg-[#8b5cf6]/30 blur-[40px] pointer-events-none" />

            {/* Dashed Guide Ring (orbit-guide) */}
            <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full border-[1.5px] border-dashed border-[#8b5cf6]/35 z-10 pointer-events-none" />

            {/* Rotating Orbit Layer (orbit-ring) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full z-20 pointer-events-none"
            >
              {/* Icon 1: Top (0deg) */}
              <div className="absolute -top-4.5 sm:-top-5 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1a0b2e] border-[1.5px] border-[#8b5cf6] text-purple-300 flex items-center justify-center text-base sm:text-lg shadow-[0_0_14px_rgba(139,92,246,0.35)] pointer-events-auto"
                >
                  📁
                </motion.div>
              </div>

              {/* Icon 2: Right (90deg) */}
              <div className="absolute top-1/2 -right-4.5 sm:-right-5 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1a0b2e] border-[1.5px] border-[#8b5cf6] text-cyan-300 flex items-center justify-center text-base sm:text-lg shadow-[0_0_14px_rgba(139,92,246,0.35)] pointer-events-auto"
                >
                  🧩
                </motion.div>
              </div>

              {/* Icon 3: Bottom (180deg) */}
              <div className="absolute -bottom-4.5 sm:-bottom-5 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1a0b2e] border-[1.5px] border-[#8b5cf6] text-emerald-300 flex items-center justify-center text-base sm:text-lg shadow-[0_0_14px_rgba(139,92,246,0.35)] pointer-events-auto"
                >
                  ⚙️
                </motion.div>
              </div>

              {/* Icon 4: Left (270deg) */}
              <div className="absolute top-1/2 -left-4.5 sm:-left-5 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#1a0b2e] border-[1.5px] border-[#8b5cf6] text-amber-300 flex items-center justify-center text-base sm:text-lg shadow-[0_0_14px_rgba(139,92,246,0.35)] pointer-events-auto"
                >
                  💬
                </motion.div>
              </div>
            </motion.div>

            {/* Static Profile Picture (profile-pic) */}
            <div className="relative w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden border-4 border-white/5 shadow-[0_0_40px_rgba(139,92,246,0.35)] bg-[#1a0b2e] z-10 flex items-center justify-center">
              <Image
                src={siteConfig.personal.avatarImageUrl}
                alt="Fayek Ahanaf - DIU CIS Student"
                fill
                priority
                sizes="(max-width: 640px) 190px, 220px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Small Eyebrow Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#1e0a35]/80 border border-[#8b5cf6]/30 text-[#8b5cf6] text-[11px] sm:text-xs font-mono mb-3 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{siteConfig.personal.eyebrow}</span>
        </motion.div>

        {/* Large Two-line Headline with Hand-drawn Ellipse */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-3 max-w-4xl font-display"
        >
          <span className="whitespace-nowrap">
            {siteConfig.personal.headlineLine1}
            <span className="relative inline-block text-[#8b5cf6] px-1.5 sm:px-2 font-black">
              {siteConfig.personal.headlineHighlightedWord}
              {/* SVG Hand-drawn Purple Ellipse */}
              <svg
                className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none overflow-visible max-w-full"
                viewBox="0 0 140 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8,25 C15,8 125,5 132,25 C138,42 12,45 6,26 C3,16 40,8 128,12"
                  stroke="#8b5cf6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="opacity-90"
                />
              </svg>
            </span>
          </span>{" "}
          <span className="block sm:inline">{siteConfig.personal.headlineLine2}</span>
        </motion.h1>

        {/* Headline Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-xs sm:text-base font-mono mb-5 sm:mb-6 max-w-2xl px-2"
        >
          &ldquo;{siteConfig.personal.headlineSubtext}&rdquo;
        </motion.p>

        {/* Animated Typewriter Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-2xl font-mono text-slate-300 mb-5 sm:mb-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2"
        >
          <span className="text-slate-400">I&apos;m a</span>
          <Typewriter words={roles} />
        </motion.div>

        {/* Short Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[#c9c3d1] text-xs sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-8 px-2"
        >
          {siteConfig.personal.shortIntro}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          <Link
            href="#achievements"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-95"
          >
            View Achievements <Trophy className="w-4 h-4 text-amber-300" />
          </Link>

          <Link
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1e0a35]/80 hover:bg-[#2a1245] border border-[#8b5cf6]/40 text-purple-200 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            View Projects <ArrowRight className="w-4 h-4 text-[#8b5cf6]" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#140a20] hover:bg-[#1e0a35] border border-slate-800 text-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#8b5cf6]" /> Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
