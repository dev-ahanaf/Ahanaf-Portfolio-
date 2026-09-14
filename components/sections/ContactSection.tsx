"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { submitContactForm } from "@/lib/supabase";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please complete all fields before submitting.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    const response = await submitContactForm(formData);

    setLoading(false);
    if (response.success) {
      setStatus({ type: "success", message: response.message });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus({ type: "error", message: response.message });
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[#0e0812] text-white relative">
      {/* Background Deep Violet Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[500px] bg-[#2a1245]/50 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Get in Touch"
          title="Contact"
          subtitle="Let's build delightful and accessible digital products together."
        />

        {/* Availability Statement */}
        <p className="text-[#c9c3d1] text-xs sm:text-base lg:text-lg mb-4 max-w-2xl mx-auto leading-relaxed px-2">
          {siteConfig.personal.availabilityStatement}
        </p>

        {/* Email Mailto Link */}
        <div className="mb-6 sm:mb-8 px-2">
          <a
            href={`mailto:${siteConfig.personal.email}`}
            className="inline-flex items-center gap-2 text-base sm:text-2xl md:text-3xl font-mono font-bold text-[#8b5cf6] hover:text-white transition-all underline decoration-[#8b5cf6]/50 hover:decoration-[#8b5cf6] shadow-[0_0_25px_rgba(139,92,246,0.25)] break-all"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b5cf6] shrink-0" /> {siteConfig.personal.email}
          </a>
        </div>

        {/* Row of Social Icons (Instagram, Dribbble, GitHub, LinkedIn, Email) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-10 sm:mb-16">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] active:scale-95"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] active:scale-95"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] active:scale-95"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={`mailto:${siteConfig.personal.email}`}
            aria-label="Email Direct"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#180c24] hover:bg-[#2a1245] border border-[#8b5cf6]/30 hover:border-[#8b5cf6] flex items-center justify-center text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)] active:scale-95"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Styled Dark Translucent Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clay-card rounded-3xl p-5 sm:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.2)] max-w-2xl mx-auto text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-purple-300 mb-2">
                YOUR NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Turner"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#0e0812]/90 border border-[#8b5cf6]/25 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-purple-300 mb-2">
                YOUR EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#0e0812]/90 border border-[#8b5cf6]/25 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-purple-300 mb-2">
                YOUR MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or inquiry..."
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#0e0812]/90 border border-[#8b5cf6]/25 text-white placeholder-slate-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all text-sm resize-none"
              />
            </div>

            {/* Status Message Alert */}
            {status.message && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                  status.type === "success"
                    ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800"
                    : "bg-red-950/40 text-red-300 border border-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(139,92,246,0.35)] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
