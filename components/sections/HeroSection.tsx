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
        
        {/* Dark Purple UI Card with Orbiting Icons & Speech Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-md bg-gradient-to-b from-[#180c2e] via-[#120820] to-[#0e0812] border border-[#8b5cf6]/35 rounded-3xl p-6 sm:p-10 mb-8 shadow-[0_0_60px_rgba(139,92,246,0.25)] flex flex-col items-center justify-center overflow-visible"
        >
          {/* Top-Right Red Scribble Line Accent */}
          <svg
            className="absolute top-4 right-4 w-10 h-10 text-rose-500 pointer-events-none overflow-visible"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8,15 C20,5 35,25 42,10 C45,28 18,35 38,42"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="opacity-80"
            />
          </svg>

          {/* Diagonally Placed Speech-Bubble Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-5 right-2 sm:-top-6 sm:right-4 z-30 bg-[#1a0b2e] text-white border border-[#8b5cf6]/50 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(139,92,246,0.4)] whitespace-nowrap flex items-center gap-1.5"
          >
            <span>
              Hello! I Am <strong className="text-[#8b5cf6] font-bold">{siteConfig.personal.name}</strong>
            </span>
            <span className="text-sm sm:text-base">👋</span>
            {/* Bubble Tail Arrow pointing down-left towards picture */}
            <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1a0b2e]" />
          </motion.div>

          {/* Orbit Container with Circular Profile Picture */}
          <div className="relative my-4 flex items-center justify-center">
            
            {/* Soft Glow Radial behind Picture */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#8b5cf6] to-[#4a1f7a] opacity-60 blur-xl animate-pulse-glow" />

            {/* Dashed Circular Orbit Path surrounding the Picture */}
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dashed border-[#8b5cf6]/40 pointer-events-none animate-spin-slow" />

            {/* 4 Orbiting Glowing Icon Bubbles sitting along the Dashed Path */}
            {/* Top Icon Bubble (Folder) */}
            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#180c28] border border-[#8b5cf6]/60 text-purple-300 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 hover:scale-110 transition-transform">
              <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
            </div>

            {/* Right Icon Bubble (Network / Puzzle) */}
            <div className="absolute top-1/2 -right-4 sm:-right-5 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#180c28] border border-[#8b5cf6]/60 text-purple-300 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 hover:scale-110 transition-transform">
              <Network className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
            </div>

            {/* Bottom Icon Bubble (Gear) */}
            <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#180c28] border border-[#8b5cf6]/60 text-purple-300 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 hover:scale-110 transition-transform">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 animate-spin-slow" />
            </div>

            {/* Left Icon Bubble (Chat) */}
            <div className="absolute top-1/2 -left-4 sm:-left-5 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#180c28] border border-[#8b5cf6]/60 text-purple-300 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20 hover:scale-110 transition-transform">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            </div>

            {/* Center Circular Profile Picture Frame */}
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-3 border-[#8b5cf6] shadow-[0_0_50px_rgba(139,92,246,0.5)] bg-[#1e0a35] z-10 flex items-center justify-center">
              <Image
                src={siteConfig.personal.avatarImageUrl}
                alt="Fayek Ahanaf - DIU CIS Student"
                fill
                priority
                sizes="(max-width: 640px) 144px, 192px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Small Pill Badge below the picture */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e0a35]/90 border border-[#8b5cf6]/40 text-[#8b5cf6] text-xs font-mono mt-4 z-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
            <span>{siteConfig.personal.eyebrow}</span>
          </motion.div>
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
