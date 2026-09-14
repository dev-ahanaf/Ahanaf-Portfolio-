"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, X, AlertCircle, CheckCircle2, Cpu } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="group relative rounded-2xl bg-[#0F131C] border border-slate-800/80 hover:border-[#10B981]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]"
      >
        <div>
          {/* Card Image Container */}
          <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#08090C]">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F131C] via-[#0F131C]/40 to-transparent" />
            
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#08090C]/90 text-[#10B981] border border-[#10B981]/30 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm mb-4 line-clamp-2">
              {project.tagline}
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-xs rounded-md bg-[#161B26] text-slate-300 border border-slate-700/50 font-mono"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-xs rounded-md bg-[#161B26]/60 text-slate-400 font-mono">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#10B981] hover:text-emerald-300 transition-colors pt-4"
          >
            Problem & Solution <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-3 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="text-slate-400 hover:text-[#10B981] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#08090C]/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#0F131C] border border-slate-800 p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#161B26] text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 mb-3">
                {project.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mb-6">
                {project.tagline}
              </p>

              {/* Problem Section */}
              <div className="mb-6 p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
                  <AlertCircle className="w-4 h-4" /> The Problem
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                <div className="flex items-center gap-2 text-[#10B981] font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" /> The Solution
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-slate-400 font-medium text-xs uppercase tracking-wider mb-3">
                  <Cpu className="w-4 h-4 text-[#10B981]" /> Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-[#161B26] text-emerald-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-emerald-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#161B26] hover:bg-slate-800 text-white font-semibold text-sm inline-flex items-center gap-2 border border-slate-700 transition-colors"
                  >
                    GitHub Code <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
