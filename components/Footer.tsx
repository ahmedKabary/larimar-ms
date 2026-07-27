"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { ImageWithLoader } from "./ImageWithLoader";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] py-16 border-t-2 border-[#C85A32] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Logo */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-40 h-16">
            <ImageWithLoader
              src="/images/logo.png"
              alt="Larimar Resort Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Minimal Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-mono font-bold text-[#A89F91] mb-12 uppercase tracking-wider">
          <a href="#overview" className="hover:text-white transition-colors">{t.header.navOverview}</a>
          <a href="#projects" className="hover:text-white transition-colors">Larimar Villas</a>
          <a href="#suites-specs" className="hover:text-white transition-colors">Larimar Suites</a>
          <a href="#projects" className="hover:text-white transition-colors">Larimar 3</a>
          <a href="#offices" className="hover:text-white transition-colors">{t.header.navOffices}</a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-mono text-[#6E6459]">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group"
          >
            <span>↑ {t.header.navOverview}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
