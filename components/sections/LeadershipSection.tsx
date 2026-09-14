"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  BookOpen,
  Star,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Cpu,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const LeadershipSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ itemIdx: number; imgIdx: number } | null>(null);

  const handlePrev = () => {
    if (!activeModal) return;
    const item = siteConfig.leadership[activeModal.itemIdx];
    if (!item || !item.galleryImages) return;

    const prevIndex =
      (activeModal.imgIdx - 1 + item.galleryImages.length) % item.galleryImages.length;
    setActiveModal({ itemIdx: activeModal.itemIdx, imgIdx: prevIndex });
  };

  const handleNext = () => {
    if (!activeModal) return;
    const item = siteConfig.leadership[activeModal.itemIdx];
    if (!item || !item.galleryImages) return;

    const nextIndex = (activeModal.imgIdx + 1) % item.galleryImages.length;
    setActiveModal({ itemIdx: activeModal.itemIdx, imgIdx: nextIndex });
  };

  const currentModalItem = activeModal !== null ? siteConfig.leadership[activeModal.itemIdx] : null;
  const currentModalImg =
    currentModalItem && currentModalItem.galleryImages
      ? currentModalItem.galleryImages[activeModal!.imgIdx]
      : null;

  return (
    <section id="leadership" className="py-14 sm:py-20 lg:py-24 bg-slate-950 text-white relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Mentorship"
          title="Team Falcon Bots & DIU Air Rover Scouts"
          subtitle="Leading championship robotics teams, mentoring university workshops, and representing national public service."
        />

        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          {siteConfig.leadership.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900 to-slate-950 border border-slate-800 p-5 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              {/* Highlight Glow Corner */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-800">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="p-3 sm:p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                    {idx === 1 ? <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" /> : <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />}
                  </div>
                  <div>
                    <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 font-bold mb-1.5 sm:mb-2 inline-block">
                      {item.organization}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-black text-white font-display">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center gap-2 shadow-lg shadow-amber-500/10 shrink-0">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>{item.achievements[0]}</span>
                </div>
              </div>

              {/* Courses / Modules */}
              {item.courses && (
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Training, Workshops & Credentials
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.courses.map((course, cIdx) => (
                      <div
                        key={cIdx}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900 border border-purple-500/30 text-slate-200 text-xs font-mono font-semibold flex items-center gap-2 shadow-sm"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview Description */}
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
                {item.description}
              </p>

              {/* Key Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {item.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Photo Gallery Grid */}
              {item.galleryImages && item.galleryImages.length > 0 && (
                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" /> Event & Activity Gallery
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {item.galleryImages.map((img, imgIdx) => (
                      <motion.div
                        key={imgIdx}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setActiveModal({ itemIdx: idx, imgIdx })}
                        className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500/50 cursor-pointer shadow-lg active:scale-95"
                      >
                        <Image
                          src={img.url}
                          alt={img.caption}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-slate-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                            {img.tag}
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between">
                          <p className="text-xs font-semibold text-white line-clamp-2 pr-2">
                            {img.caption}
                          </p>
                          <Maximize2 className="w-4 h-4 text-purple-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {activeModal !== null && currentModalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black">
                <Image
                  src={currentModalImg.url}
                  alt={currentModalImg.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 text-white border border-slate-800 hover:bg-slate-900 backdrop-blur-md transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 text-white border border-slate-800 hover:bg-slate-900 backdrop-blur-md transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 font-bold mb-2 inline-block">
                    {currentModalImg.tag}
                  </span>
                  <p className="text-sm text-slate-200 font-medium">
                    {currentModalImg.caption}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {activeModal.imgIdx + 1} / {currentModalItem!.galleryImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
