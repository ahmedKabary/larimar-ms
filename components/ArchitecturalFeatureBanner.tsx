"use client";

import React from "react";
import { ImageWithLoader } from "./ImageWithLoader";


export default function ArchitecturalFeatureBanner() {
  return (
    <section className="py-20 bg-[#F4F7FA] border-y border-[#D1DBE5] relative overflow-hidden">
      
      {/* Blueprint Grid Overlay Background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14, 116, 144, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 116, 144, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Architectural Banner Header with Requested Copy */}
        <div className="bg-[#FFFDF9] rounded-2xl p-8 sm:p-10 shadow-xl mb-14 relative overflow-hidden">
          
          <div className="max-w-4xl space-y-4">
            
            <div className="py-1 relative inline-block">
              <ImageWithLoader
                src="/images/logo.png"
                alt="Larimar Resort Logo"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-base sm:text-xl text-[#334155] leading-relaxed font-medium">
              Your dedicated Sales Supervisor for exclusive properties at <strong className="text-[#C85A32]">Larimar</strong> — Port Ghalib&apos;s most prestigious luxury resort community on Egypt&apos;s Red Sea coast.
            </p>



          </div>

        </div>

      </div>
    </section>
  );
}
