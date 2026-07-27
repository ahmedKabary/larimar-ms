import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Blueprint Grid (subtle) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1C1917 1px, transparent 1px),
            linear-gradient(to bottom, #1C1917 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
        

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-black text-[#1C1917] tracking-tighter mb-4">
          404
        </h1>
        
        {/* Thematic Message */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#1C1917] text-[#D4AF37] font-mono text-sm font-bold uppercase tracking-widest mb-6">
          Off the Master Plan
        </div>
        
        <p className="text-lg text-[#6E6459] mb-10 max-w-md mx-auto leading-relaxed">
          It looks like you&apos;ve wandered off the blueprint. The property or page you are looking for does not exist in Port Ghalib.
        </p>

        {/* Call to Action */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#1C1917] hover:bg-[#C85A32] text-white text-sm font-mono font-bold tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          Return to Overview
        </Link>
        
      </div>
    </div>
  );
}
