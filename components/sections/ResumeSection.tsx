"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Github, FileText, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 backdrop-blur-xl text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mx-auto mb-4">
            <FileText className="w-8 h-8" />
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-2">Curriculum Vitae</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Review my complete technical background, project history, skills, and academic accomplishments in a single document.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* 
              REPLACE ME COMMENT:
              Ensure your real resume PDF file is placed in 'public/resume.pdf'!
            */}
            <a
              href={siteConfig.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" /> Download Resume (PDF)
            </a>

            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm inline-flex items-center gap-2 border border-slate-700 transition-all"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" /> View LinkedIn <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm inline-flex items-center gap-2 border border-slate-700 transition-all"
            >
              <Github className="w-4 h-4 text-cyan-400" /> View GitHub <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
