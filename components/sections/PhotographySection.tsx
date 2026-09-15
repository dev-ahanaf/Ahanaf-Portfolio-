"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  User,
  GraduationCap,
  PartyPopper,
  Heart,
  Video,
  Clapperboard,
  ExternalLink,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";
import { photographyData, GalleryPhoto } from "@/data/photography";

export const PhotographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(photographyData.gallery.map((p) => p.category))),
  ];

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case "user":
        return <User className="w-5 h-5 text-cyan-400" />;
      case "graduation-cap":
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case "party-popper":
        return <PartyPopper className="w-5 h-5 text-amber-400" />;
      case "heart":
        return <Heart className="w-5 h-5 text-red-400" />;
      case "video":
        return <Video className="w-5 h-5 text-emerald-400" />;
      case "clapperboard":
        return <Clapperboard className="w-5 h-5 text-indigo-400" />;
      default:
        return <Camera className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredPhotos =
    selectedCategory === "All"
      ? photographyData.gallery
      : photographyData.gallery.filter((p) => p.category === selectedCategory);

  const handlePrevPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!activePhoto) return;
    const currentIndex = filteredPhotos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  return (
    <section id="photography" className="py-14 sm:py-20 lg:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dedicated Photography Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-950 border border-purple-800/40 p-6 sm:p-10 mb-10 sm:mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2.5 sm:space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-mono">
                <Camera className="w-3.5 h-3.5" /> Standalone Media Studio
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                PERFECT CLICK <span className="text-purple-400">STUDIO</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-base max-w-xl leading-relaxed">
                My complete photography, videography, and event portfolio is hosted on its dedicated platform at{" "}
                <strong className="text-purple-300">perfect-click-com-bd.vercel.app</strong>.
              </p>
            </div>

            <a
              href="https://perfect-click-com-bd.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/30 shrink-0 active:scale-95"
            >
              Visit Full Photography Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Compact Services & Sample Preview */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" /> Selected Photography Previews
              </h3>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-500 text-white font-bold shadow-lg shadow-purple-500/20"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid - Max 3 Preview Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredPhotos.slice(0, 3).map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActivePhoto(photo)}
                  className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500/50 cursor-pointer shadow-lg active:scale-95"
                >
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-slate-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {photo.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                      {photo.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </section>
  );
};
