"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Copy,
  Check,
  Globe,
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

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please complete all fields (Name, Email, and Message) before submitting.",
      });
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address (e.g. name@example.com).",
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

  const handlePhoneClick = () => {
    if (!isPhoneRevealed) {
      setIsPhoneRevealed(true);
    } else {
      copyToClipboard(siteConfig.personal.phone, "Phone number");
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[#08090C] text-white relative overflow-hidden">
      {/* Ambient Emerald Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[500px] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Toast Alert Banner */}
        <AnimatePresence>
          {copiedField && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#10B981] text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-slate-950" />
              <span>Copied {copiedField} to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Heading */}
        <SectionHeading
          badge="Get in Touch"
          title="Contact"
          subtitle="Let's build delightful, high-performance software and autonomous systems together."
        />

        {/* Availability Statement */}
        <p className="text-slate-300 text-xs sm:text-base lg:text-lg mb-6 max-w-2xl mx-auto leading-relaxed px-2">
          {siteConfig.personal.availabilityStatement}
        </p>

        {/* Direct Quick Contact Cards (Email & Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto px-2">
          {/* Email Card */}
          <div
            onClick={() => copyToClipboard(siteConfig.personal.email, "Email")}
            className="group relative p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#10B981]/50 cursor-pointer transition-all hover:bg-slate-900 flex items-center justify-between shadow-lg active:scale-95"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Email Address</p>
                <p className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#10B981] transition-colors truncate">
                  {siteConfig.personal.email}
                </p>
              </div>
            </div>
            <div className="p-2 rounded-lg text-slate-400 group-hover:text-[#10B981] transition-colors shrink-0">
              {copiedField === "Email" ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
            </div>
          </div>

          {/* Phone Card - Click to Reveal / Click to Copy */}
          <div
            onClick={handlePhoneClick}
            className="group relative p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#10B981]/50 cursor-pointer transition-all hover:bg-slate-900 flex items-center justify-between shadow-lg active:scale-95"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Phone Direct</p>
                <p className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#10B981] transition-colors truncate">
                  {isPhoneRevealed ? siteConfig.personal.phone : "••••••••••• (Click to reveal)"}
                </p>
              </div>
            </div>
            <div className="p-2 rounded-lg text-slate-400 group-hover:text-[#10B981] transition-colors shrink-0">
              {isPhoneRevealed ? (
                copiedField === "Phone number" ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />
              ) : (
                <span className="text-[10px] font-mono text-[#10B981] font-bold">Reveal</span>
              )}
            </div>
          </div>
        </div>

        {/* Row of Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#10B981]/60 flex items-center justify-center text-slate-300 hover:text-[#10B981] transition-all shadow-md active:scale-95"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#10B981]/60 flex items-center justify-center text-slate-300 hover:text-[#10B981] transition-all shadow-md active:scale-95"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#10B981]/60 flex items-center justify-center text-slate-300 hover:text-[#10B981] transition-all shadow-md active:scale-95"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={siteConfig.socials.photographySite}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfect Click Media Site"
            className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-[#10B981]/60 flex items-center justify-center text-slate-300 hover:text-[#10B981] transition-all shadow-md active:scale-95"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl max-w-2xl mx-auto text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2 font-bold uppercase tracking-wider">
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
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 font-bold uppercase tracking-wider">
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
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 font-bold uppercase tracking-wider">
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
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/50 transition-all text-sm resize-none"
              />
            </div>

            {/* Status Message Alert */}
            {status.message && (
              <div
                className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                  status.type === "success"
                    ? "bg-emerald-950/50 text-emerald-300 border border-emerald-800"
                    : "bg-red-950/50 text-red-300 border border-red-800"
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
              className="w-full py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] disabled:opacity-50 active:scale-98"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" /> Sending Message...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4 text-slate-950" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

