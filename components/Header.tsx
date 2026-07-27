"use client";

import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { WhatsappIcon } from "./WhatsappIcon";
import { ImageWithLoader } from "./ImageWithLoader";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative z-20 bg-[#FAF8F5] border-b border-[#E8E2D9]">
        {/* Top Architectural Measurement Bar */}
        <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#D4AF37]">
            PORT GHALIB | 25°32&apos;N 34°38&apos;E
          </span>
          <span className="hidden md:inline text-[#A89F91]">
            | ARCHITECTURAL EXCLUSIVITY
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="tel:+201005532941"
            className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
          >
            <span>+20 100 553 2941</span>
          </a>
          <a
            href="mailto:msharawi@larimar-resort.com"
            className="hidden sm:flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#0A8491]" />
            <span>msharawi@larimar-resort.com</span>
          </a>
        </div>
      </div>

      {/* Main Header Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Stamp */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 bg-[#FAF8F5] border-2 border-[#C85A32] rounded flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
            <ImageWithLoader
              src="/images/ms-logo.png"
              alt="Mohamed Sharawi Logo"
              fill
              className="object-contain"
              loaderVariant="small"
            />
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#C85A32] font-semibold flex items-center gap-1">
              Larimar Supervisor
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#1C1917]">
              Mohamed Sharawi
            </h1>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A443E]">
          <a href="#overview" className="hover:text-[#C85A32] transition-colors flex items-center gap-1">
            Overview
          </a>
          <a href="#projects" className="hover:text-[#C85A32] transition-colors flex items-center gap-1">
            Projects
          </a>
          <a href="#offices" className="hover:text-[#C85A32] transition-colors">
            Offices
          </a>
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/201005532941?text=Hello%20Mohamed,%20I'm%20interested%20in%20Larimar%20Port%20Ghalib%20properties."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#25D366] hover:bg-[#1EBE5A] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <WhatsappIcon className="w-4 h-4 fill-white text-[#25D366]" />
            WhatsApp
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1C1917] hover:text-[#C85A32]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full z-10 bg-[#FFFDF9] border-b border-[#E8E2D9] px-6 py-6 shadow-xl transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="space-y-4">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#C85A32]"
          >
            Overview
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#C85A32]"
          >
            Larimar Projects
          </a>

          <a
            href="#offices"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#1C1917] hover:text-[#C85A32]"
          >
            Office
          </a>
          <div className="pt-4 border-t border-[#E8E2D9] flex flex-col gap-3">
            <a
              href="https://wa.me/201005532941?text=Hello%20Mohamed,%20I'm%20interested%20in%20Larimar%20Port%20Ghalib%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded bg-[#25D366] text-white font-bold text-sm"
            >
              <WhatsappIcon className="w-5 h-5 fill-white text-[#25D366]" /> Direct WhatsApp Consultation
            </a>
            <a
              href="tel:+201005532941"
              className="flex items-center justify-center gap-2 py-3 rounded bg-[#1C1917] text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" /> Call +20 100 553 2941
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
