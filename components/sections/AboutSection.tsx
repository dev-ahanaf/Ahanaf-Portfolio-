"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Camera, ShieldCheck, Cpu, Flame } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BSc in CIS",
      desc: "Daffodil International University",
      color: "text-cyan-400",
    },
    {
      icon: Code2,
      title: "3+ Years Web Dev",
      desc: "Shopify Liquid, WordPress, React",
      color: "text-indigo-400",
    },
    {
      icon: Camera,
      title: "Perfect Click",
      desc: "Event Photography & Reels",
      color: "text-purple-400",
    },
    {
      icon: Cpu,
      title: "Robotics & AI",
      desc: "ESP32, Arduino PID, CircuitMind",
      color: "text-emerald-400",
    },
    {
      icon: ShieldCheck,
      title: "Air Rover Scout",
      desc: "Unit Leader & Hajj Camp Service",
      color: "text-amber-400",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Where Code Meets Vision & Leadership"
          subtitle="Combining technical rigor, creative media, and active community service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Bio Main Card (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800 p-5 sm:p-8 backdrop-blur-xl shadow-xl space-y-3.5 sm:space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" /> My Journey & Vision
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              I am a <strong className="text-white">Computing & Information Systems (CIS) student at Daffodil International University</strong> passionate about software development, artificial intelligence, electronics, photography, and creative technology.
            </p>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Over the past 3+ years, I have worked as a web developer specializing in customized Shopify storefronts, WordPress solutions, and modern React/TypeScript web apps. I build systems that bridge software logic with real-world utility - from AI-driven EDA tools like <span className="text-cyan-400 font-semibold">CircuitMind AI</span> to micro-controller robotics such as my <span className="text-emerald-400 font-semibold">PID Line Follower Robot</span> and IoT home automation.
            </p>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              In parallel, I direct photography and videography under my brand <strong className="text-purple-400">&quot;Perfect Click&quot;</strong>, capturing university convocations, cultural programs, and high-energy reels. Additionally, my service in the <strong className="text-amber-400">Bangladesh Air Rover Scouts</strong> (Unit Leader training, Hajj Camp volunteering) has instilled deep leadership, discipline, and community orientation into everything I build.
            </p>
          </motion.div>

          {/* Highlights Grid (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-4"
                >
                  <div className={`p-3 rounded-lg bg-slate-800/80 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
