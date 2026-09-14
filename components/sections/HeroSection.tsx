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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-gradient-to-tr from-[#2a1245] via-[#4a1f7a]/30 to-transparent rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#8b5cf6]/10 rounded-full blur-[50px] sm:blur-[70px] pointer-events-none transform-gpu" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a1245_1px,transparent_1px),linear-gradient(to_bottom,#2a1245_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex flex-col items-center">
        
        {/* Flat Modern UI Card (Cool Graphite #12141A) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mt-4 sm:mt-6 mb-8 w-full max-w-md sm:max-w-lg bg-[#12141A] border border-slate-800/80 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center shadow-2xl select-none"
        >
          {/* Profile Orbit Container */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
            
            {/* Floating Speech Bubble & Red Accent at Top-Right */}
            <div className="absolute -top-10 -right-4 sm:-top-16 sm:-right-12 z-30 pointer-events-auto">
              {/* Red Scribble Accent in Top-Right Corner */}
              <svg
                className="absolute -top-4 -right-2 sm:-top-5 sm:-right-3 w-12 h-6 sm:w-14 sm:h-7 text-red-500 pointer-events-none opacity-90 z-40 overflow-visible"
                viewBox="0 0 60 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5,18 C15,8 40,5 55,12 C45,18 20,22 10,25 C25,24 45,20 52,16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Rounded Speech Bubble Badge */}
              <div className="relative bg-[#181A20] text-slate-300 border border-[#3E8FE0]/40 px-3.5 sm:px-4 py-1.5 rounded-2xl text-[11px] sm:text-sm font-normal shadow-sm whitespace-nowrap flex items-center gap-1.5">
                <span>Hello! I Am <strong className="text-[#3E8FE0] font-bold">{siteConfig.personal.name}</strong></span>
                <span className="text-sm sm:text-base">👋</span>
                {/* Pointer Tail Arrow aimed back down-left toward profile circle */}
                <div className="absolute -bottom-2 left-6 sm:left-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#181A20] -rotate-12" />
              </div>
            </div>

            {/* Hairline Circular Orbit Guide Ring */}
            <div className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full border border-slate-700/60 z-10 pointer-events-none" />

            {/* Rotating Orbit Layer */}
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
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#181A20] border border-[#3E8FE0] text-slate-200 flex items-center justify-center text-base sm:text-lg shadow-sm pointer-events-auto"
                >
                  📁
                </motion.div>
              </div>

              {/* Icon 2: Right (90deg) */}
              <div className="absolute top-1/2 -right-4.5 sm:-right-5 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#181A20] border border-[#3E8FE0] text-slate-200 flex items-center justify-center text-base sm:text-lg shadow-sm pointer-events-auto"
                >
                  🧩
                </motion.div>
              </div>

              {/* Icon 3: Bottom (180deg) */}
              <div className="absolute -bottom-4.5 sm:-bottom-5 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#181A20] border border-[#3E8FE0] text-slate-200 flex items-center justify-center text-base sm:text-lg shadow-sm pointer-events-auto"
                >
                  ⚙️
                </motion.div>
              </div>

              {/* Icon 4: Left (270deg) */}
              <div className="absolute top-1/2 -left-4.5 sm:-left-5 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#181A20] border border-[#3E8FE0] text-slate-200 flex items-center justify-center text-base sm:text-lg shadow-sm pointer-events-auto"
                >
                  💬
                </motion.div>
              </div>
            </motion.div>

            {/* Static Profile Picture */}
            <div className="relative w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden border border-[#3E8FE0] bg-[#12141A] z-10 flex items-center justify-center">
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

          {/* Small Pill Badge Below Picture */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D2028] border border-[#3E8FE0]/30 text-slate-300 text-[11px] sm:text-xs font-mono shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#3E8FE0]" />
            <span>{siteConfig.personal.eyebrow}</span>
          </div>
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
            <span className="relative inline-block text-[#3E8FE0] px-1.5 sm:px-2 font-black">
              {siteConfig.personal.headlineHighlightedWord}
              {/* SVG Hand-drawn Cobalt Ellipse */}
              <svg
                className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none overflow-visible max-w-full"
                viewBox="0 0 140 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8,25 C15,8 125,5 132,25 C138,42 12,45 6,26 C3,16 40,8 128,12"
                  stroke="#3E8FE0"
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
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3E8FE0] to-blue-600 hover:from-blue-500 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(62,143,224,0.3)] active:scale-95"
          >
            View Achievements <Trophy className="w-4 h-4 text-amber-300" />
          </Link>

          <Link
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#181A20] hover:bg-[#20232B] border border-[#3E8FE0]/40 text-slate-200 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            View Projects <ArrowRight className="w-4 h-4 text-[#3E8FE0]" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#12141A] hover:bg-[#181A20] border border-slate-800 text-slate-300 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Mail className="w-4 h-4 text-[#3E8FE0]" /> Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
