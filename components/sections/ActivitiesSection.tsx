"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Sparkles,
  CheckCircle2,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Cpu,
  Flame,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, ActivityPost } from "@/data/siteConfig";

export const ActivitiesSection: React.FC = () => {
  // Modal state: tracks post index and active image index
  const [activeModal, setActiveModal] = useState<{
    postIdx: number;
    imgIdx: number;
  } | null>(null);

  const handlePrev = useCallback(() => {
    setActiveModal((curr) => {
      if (!curr) return null;
      const post = siteConfig.activities[curr.postIdx];
      if (!post || !post.images.length) return curr;
      const prevIdx =
        (curr.imgIdx - 1 + post.images.length) % post.images.length;
      return { postIdx: curr.postIdx, imgIdx: prevIdx };
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveModal((curr) => {
      if (!curr) return null;
      const post = siteConfig.activities[curr.postIdx];
      if (!post || !post.images.length) return curr;
      const nextIdx = (curr.imgIdx + 1) % post.images.length;
      return { postIdx: curr.postIdx, imgIdx: nextIdx };
    });
  }, []);

  // Close modal on Escape key and navigate with Arrow keys
  useEffect(() => {
    if (activeModal === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, handlePrev, handleNext]);

  const currentModalPost =
    activeModal !== null ? siteConfig.activities[activeModal.postIdx] : null;
  const currentModalImg =
    currentModalPost && currentModalPost.images
      ? currentModalPost.images[activeModal!.imgIdx]
      : null;

  return (
    <section
      id="activities"
      className="py-14 sm:py-20 lg:py-24 bg-[#0a0712] text-white relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-[#10b981]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#8b5cf6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Hackathons & Events"
          title="Campus Engagements & Hackathons"
          subtitle="Competitive AI hackathons, university dev fests, and high-impact collaborative coding sprints."
        />

        <div className="space-y-12">
          {siteConfig.activities.map((post: ActivityPost, postIdx: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl bg-[#120d1e]/85 border border-[#8b5cf6]/30 hover:border-[#10B981]/50 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.12)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#10B981]/5 rounded-full blur-3xl group-hover:bg-[#10B981]/15 transition-all pointer-events-none" />

              {/* Meta Header Pill Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/35">
                    <Cpu className="w-3.5 h-3.5" />
                    {post.category}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/35">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    {post.badge}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/35">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    {post.team}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight font-display mb-2">
                  {post.title}
                </h3>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white">
                    {post.eventName}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-300">{post.organization}</span>
                  <span className="text-slate-500">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                    {post.location}
                  </span>
                </div>
              </div>

              {/* 3-Photo Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {post.images.map((img, imgIdx) => (
                  <div
                    key={img.url}
                    onClick={() => setActiveModal({ postIdx, imgIdx })}
                    className="relative group/img h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#8b5cf6]/30 hover:border-[#10B981]/60 bg-[#080510] cursor-pointer transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0817] via-transparent to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />

                    {/* Top Tag Badge */}
                    {img.tag && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                          {img.tag}
                        </span>
                      </div>
                    )}

                    {/* Expand icon on hover */}
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity p-1.5 rounded-full bg-slate-950/80 text-white border border-white/20 backdrop-blur-md">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>

                    {/* Bottom Caption Preview */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <p className="text-xs font-medium text-slate-200 line-clamp-2 leading-relaxed">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Story Description */}
              <div className="mb-6 bg-[#1a122a]/60 border border-[#8b5cf6]/25 rounded-2xl p-5 sm:p-6">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Highlights & Tags Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-[#8b5cf6]/20">
                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Key Event Highlights
                  </h4>
                  <ul className="space-y-2">
                    {post.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Metadata */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3">
                    Technologies & Focus Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-xl text-xs font-mono bg-[#1f1633] text-slate-300 border border-[#8b5cf6]/30 hover:border-[#10B981]/50 hover:text-white transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModal && currentModalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#140e24] border border-[#8b5cf6]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Frame */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                <Image
                  src={currentModalImg.url}
                  alt={currentModalImg.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />

                {/* Left / Right Nav Arrows */}
                {currentModalPost && currentModalPost.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      aria-label="Previous photo"
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next photo"
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Tag Badge */}
                {currentModalImg.tag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#10B981]/20 text-emerald-300 border border-[#10B981]/40 backdrop-blur-md">
                      {currentModalImg.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom Caption & Controls */}
              <div className="p-4 sm:p-6 bg-[#120d1e] border-t border-[#8b5cf6]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  {currentModalImg.caption}
                </p>

                {currentModalPost && (
                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    Photo {activeModal.imgIdx + 1} of{" "}
                    {currentModalPost.images.length}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
