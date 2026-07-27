"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function OfficesSection() {
  return (
    <section id="offices" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C85A32]/10 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest">
            Official Locations & Headquarters
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Visit Mohamed Sharawi in Port Ghalib
          </h2>

        </div>

        {/* Office Cards Grid */}
        <div className="max-w-2xl mx-auto">
          
          {/* Office 1: Main Sales Office */}
          <div className="arch-card p-8 rounded-2xl border-2 border-[#C85A32]/30 shadow-lg flex flex-col justify-between space-y-6 hover:shadow-xl transition-all">
            
            <div>
              <div className="flex items-center justify-between border-b border-[#E8E2D9] pb-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1917]">
                      Sales Office
                    </h3>
                    <span className="text-xs font-mono text-[#C85A32] font-semibold">
                      PORT GHALIB CITY HEAD OFFICE
                    </span>
                  </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#6E6459] uppercase">Address</div>
                    <div className="text-base font-bold text-[#1C1917] mt-0.5">
                      Marina Promenade, Office No. 51-015B
                    </div>
                    <div className="text-sm text-[#4A443E]">
                      Port Ghalib City H.O., Red Sea, Egypt
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E2D9] flex items-center justify-end text-xs font-mono">
              <a
                href="https://maps.app.goo.gl/hrk19Afs5kYowikW6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#1C1917] hover:bg-[#C85A32] text-white font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>View Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>



        </div>

      </div>
    </section>
  );
}
