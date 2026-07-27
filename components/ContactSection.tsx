"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle, ChevronDown } from "lucide-react";
import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";
import { YoutubeIcon } from "./YoutubeIcon";

const PROJECT_OPTIONS = [
  { value: "villas", label: "Larimar Villas" },
  { value: "suites", label: "Larimar Suites" },
  { value: "l3", label: "Larimar 3" },
  { value: "all", label: "All Projects — General Inquiry" }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C85A32", "#0A8491", "#D4AF37"],
      });
    } catch {
      // fallback if canvas-confetti non-browser execution
    }

    setSubmitted(true);

    // Pre-fill WhatsApp message
    const waText = encodeURIComponent(
      `Hello Mohamed,\nMy name is ${formData.name || "Client"}.\nI'm interested in ${formData.projectInterest}.\nContact: ${formData.contactInfo}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/201005532941?text=${waText}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-[#FFFDF9] border-t border-[#E8E2D9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] tracking-tight">
                Connect with Mohamed Sharawi
              </h2>

            </div>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              
              <a
                href="https://web.facebook.com/larimarresort?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-card p-5 rounded-xl border-2 border-[#1877F2]/30 flex items-center gap-4 hover:border-[#1877F2] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1877F2] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FacebookIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#6E6459] uppercase font-bold">Official Facebook</div>
                  <div className="text-base font-bold font-mono text-[#1C1917] group-hover:text-[#1877F2]">
                    Larimar Resort
                  </div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/larimarresort"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-card p-5 rounded-xl border-2 border-[#E4405F]/30 flex items-center gap-4 hover:border-[#E4405F] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#6E6459] uppercase font-bold">Official Instagram</div>
                  <div className="text-base font-bold font-mono text-[#1C1917] group-hover:text-[#E4405F]">
                    @larimarresort
                  </div>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@LarimarResort-s4u"
                target="_blank"
                rel="noopener noreferrer"
                className="arch-card p-5 rounded-xl border-2 border-[#FF0000]/30 flex items-center gap-4 hover:border-[#FF0000] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FF0000] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <YoutubeIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#6E6459] uppercase font-bold">Official YouTube</div>
                  <div className="text-base font-bold font-mono text-[#1C1917] group-hover:text-[#FF0000]">
                    Larimar Resort
                  </div>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 arch-card p-8 rounded-2xl border-2 border-[#C85A32]/40 shadow-xl relative order-1 lg:order-2">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C1917]">
                  Enquiry Submitted!
                </h3>
                <p className="text-sm text-[#6E6459] max-w-md mx-auto">
                  Thank you, <strong className="text-[#1C1917]">{formData.name || "Valued Client"}</strong>. Mohamed Sharawi will respond directly to your enquiry.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded bg-[#1C1917] text-white text-xs font-mono font-bold uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div>
                  <div className="text-xs font-mono text-[#C85A32] font-bold uppercase tracking-wider mb-1">
                    Book Private Consultation
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1917]">
                    Send Direct Inquiry to Mohamed Sharawi
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name here"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded border border-[#E8E2D9] bg-[#FAF8F5] focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C85A32] text-sm text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">
                    Phone Number / Email Address:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your phone number or email address here"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full p-3 rounded border border-[#E8E2D9] bg-[#FAF8F5] focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C85A32] text-sm text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">
                    Project Community Interest:
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <div 
                      className={`w-full p-3 rounded border bg-[#FAF8F5] cursor-pointer flex justify-between items-center transition-colors text-sm font-semibold ${dropdownOpen ? 'border-[#C85A32] bg-[#FFFDF9]' : 'border-[#E8E2D9] hover:border-[#C85A32]/50'}`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span className={formData.projectInterest ? "text-[#1C1917]" : "text-[#A89F91]"}>
                        {PROJECT_OPTIONS.find(opt => opt.value === formData.projectInterest)?.label || "Select a project..."}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#C85A32] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </div>
                    
                    {dropdownOpen && (
                      <div className="absolute z-10 w-full mt-2 bg-[#FFFDF9] border border-[#E8E2D9] rounded-lg shadow-xl max-h-60 overflow-y-auto scrollbar-hide">
                        {PROJECT_OPTIONS.map((option) => {
                          const isSelected = formData.projectInterest === option.value;
                          return (
                            <div
                              key={option.value}
                              className={`p-3 text-sm cursor-pointer transition-colors border-b border-[#E8E2D9] last:border-0 ${
                                isSelected ? "bg-[#C85A32]/5 text-[#C85A32] font-bold" : "text-[#1C1917] hover:bg-[#FAF8F5]"
                              }`}
                              onClick={() => {
                                setFormData({ ...formData, projectInterest: option.value });
                                setDropdownOpen(false);
                              }}
                            >
                              {option.label}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#1C1917] uppercase mb-1">
                    Your Requirements / Questions:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter your requirements or questions here"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded border border-[#E8E2D9] bg-[#FAF8F5] focus:bg-[#FFFDF9] focus:outline-none focus:border-[#C85A32] text-sm text-[#1C1917]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-[#C85A32] hover:bg-[#B44B24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  Submit & Open Direct WhatsApp
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
