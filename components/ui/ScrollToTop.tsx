"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check immediately on mount
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[99] group p-3 sm:p-3.5 rounded-full bg-[#180c24]/95 border border-[#8b5cf6]/60 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] backdrop-blur-xl hover:bg-[#8b5cf6] hover:border-[#8b5cf6] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5 text-[#8b5cf6] group-hover:text-white transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

