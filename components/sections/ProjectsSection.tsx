"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, X, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData, Project } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["All", "AI / ML", "IoT & Robotics", "Web Development"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-24 bg-[#08090C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Selected Work"
          title="Featured Projects"
          subtitle="Explore AI systems, UI/UX platforms, robotics prototypes, and web applications."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#10B981] text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] font-bold"
                  : "bg-[#0F131C] text-slate-400 hover:text-white hover:bg-[#161B26] border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alternating Projects List */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Browser Frame Mockup Side (6 Cols) */}
                <div
                  className={`relative lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Ambient Glow behind mockup */}
                  <div className="absolute -inset-4 bg-[#10B981]/15 rounded-3xl blur-[60px] pointer-events-none transform-gpu" />

                  {/* Browser-Frame Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0F131C] shadow-[0_0_40px_rgba(16,185,129,0.1)] group">
                    
                    {/* Browser Header Bar */}
                    <div className="px-4 py-2.5 bg-[#08090C] border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 truncate max-w-[180px] sm:max-w-[200px]">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                      </span>
                      <div className="w-4" />
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative h-52 sm:h-80 w-full overflow-hidden bg-[#08090C]">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-60" />

                      {/* UI Annotation Flourishes / Callouts */}
                      <div className="absolute top-4 left-4 pointer-events-none hidden sm:block">
                        <div className="px-2.5 py-1 rounded bg-[#10B981] text-slate-950 text-[10px] font-mono font-bold shadow-md border border-white/20 flex items-center gap-1">
                          <span>GRID SYSTEM: 40PX</span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:block">
                        <div className="px-2.5 py-1 rounded bg-[#0F131C]/90 text-[#10B981] text-[10px] font-mono shadow-md border border-[#10B981]/30">
                          <span>ACCESSIBILITY VERIFIED ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Block Side (6 Cols) */}
                <div
                  className={`space-y-4 lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#10B981] font-semibold">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Project
                  </div>

                  <h3 className="text-xl sm:text-4xl font-extrabold text-white font-display">
                    {project.title}
                  </h3>

                  <p className="text-emerald-300 font-mono text-xs sm:text-sm">
                    {project.tagline}
                  </p>

                  <p className="text-[#c9c3d1] text-xs sm:text-sm leading-relaxed">
                    {project.solution}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] sm:text-xs rounded-lg bg-[#0F131C] text-emerald-300 border border-[#10B981]/25 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2.5 rounded-xl bg-[#10B981]/15 hover:bg-[#10B981]/25 border border-[#10B981]/50 text-emerald-300 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors active:scale-95"
                    >
                      Problem &amp; Solution <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#0F131C] text-emerald-300 hover:text-white border border-[#10B981]/30 hover:border-[#10B981] transition-colors active:scale-95"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#0F131C] text-emerald-300 hover:text-white border border-[#10B981]/30 hover:border-[#10B981] transition-colors active:scale-95"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Problem & Solution Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-[#08090C]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0F131C] border border-[#10B981]/40 p-5 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.2)] z-10 my-auto text-white"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#161B26] text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#161B26] text-[#10B981] border border-[#10B981]/30 mb-3 inline-block">
                {activeModalProject.category}
              </span>

              <h3 className="text-2xl font-bold text-white mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-[#10B981] text-xs font-mono mb-6">
                {activeModalProject.tagline}
              </p>

              <div className="mb-4 p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs mb-1">
                  <AlertCircle className="w-4 h-4" /> The Problem
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {activeModalProject.problem}
                </p>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-[#10B981] font-semibold text-xs mb-1">
                  <CheckCircle2 className="w-4 h-4" /> The Solution
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {activeModalProject.solution}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#161B26] hover:bg-slate-800 text-emerald-200 border border-slate-700 font-semibold text-xs inline-flex items-center gap-2 transition-colors"
                  >
                    GitHub Code <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
