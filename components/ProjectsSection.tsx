"use client";

import React, { useState } from "react";
import { ImageWithLoader } from "./ImageWithLoader";

import { WhatsappIcon } from "./WhatsappIcon";

export default function ProjectsSection() {
  const [selectedSuiteUnit, setSelectedSuiteUnit] = useState<string>("Garden 1-Bed");

  const SUITES_UNITS = [
    { name: "Studio", indoorArea: "55 m²", outdoorArea: "—", totalArea: "55 m²", description: "Turnkey open-plan luxury layout with fitted kitchen and AC." },
    { name: "1-Bedroom", indoorArea: "64 m²", outdoorArea: "—", totalArea: "64 m²", description: "Spacious master bedroom suite with private balcony terrace." },
    { name: "Garden Studio", indoorArea: "55 m²", outdoorArea: "24 m² Garden", totalArea: "79 m² Total", description: "Ground floor unit featuring a private 24 m² landscaped garden terrace." },
    { name: "Roof Studio", indoorArea: "55 m²", outdoorArea: "50 m² Rooftop", totalArea: "105 m² Total", description: "Top floor penthouse studio with a expansive 50 m² rooftop sun deck." },
    { name: "Garden 1-Bed", indoorArea: "64 m²", outdoorArea: "24 m² Garden", totalArea: "88 m² Total", description: "Popular ground floor 1-bedroom suite with a private 24 m² green garden." },
    { name: "Roof 1-Bed", indoorArea: "64 m²", outdoorArea: "50 m² Rooftop", totalArea: "114 m² Total", description: "Exclusive rooftop 1-bedroom residence with private 50 m² lounge." },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#1C1917] text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-widest">
            Official Larimar Developments Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1C1917] tracking-tight">
            The 3 Masterpiece Communities
          </h2>

        </div>

        {/* PROJECT 1: LARIMAR VILLAS */}
        <div className="arch-card rounded-2xl overflow-hidden border-2 border-[#C85A32]/30 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side (Left 6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
              <ImageWithLoader
                src="/images/larimar-villas.png"
                alt="Larimar Villas Port Ghalib"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-[#1C1917]/90 text-white font-mono text-xs px-3 py-1.5 rounded backdrop-blur border border-white/20">
                33,000 m² TOTAL SITE AREA
              </div>
            </div>

            {/* Content Side (Right 6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="text-xs font-mono text-[#0A8491] font-bold uppercase tracking-wider mb-1">
                  Heart of Port Ghalib — Marina Steps Away
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-4">
                  Larimar Villas
                </h3>
                <p className="text-base text-[#4A443E] leading-relaxed mb-6">
                  An exclusive gated community of only <strong className="text-[#C85A32]">65 luxury standalone villas</strong> and <strong className="text-[#0A8491]">40 I-Villas</strong>, set within 33,000 m² of land with <strong className="text-[#1C1917]">24,000 m² of lush green spaces</strong>. Low-density, high-exclusivity living.
                </p>

                {/* Key Features Bullet Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-[#1C1917] mb-6">
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>65 Luxury Standalone Villas</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>40 I-Villas (vertical villa)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>Serenity Hotels & Resorts Mgmt</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>Clubhouse, Spa, Gym & Padel</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>Direct Marina & Beach Access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                    <span>Fully Gated & 24/7 Secured</span>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap gap-4 items-center justify-end">
                <a
                  href="https://wa.me/201005532941?text=Hello%20Mohamed,%20I'm%20interested%20in%20Larimar%20Villas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#C85A32] hover:bg-[#B44B24] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  Inquire Villa Availability
                </a>
              </div>

            </div>

          </div>
        </div>


        {/* PROJECT 2: LARIMAR SUITES */}
        <div id="suites-specs" className="arch-card rounded-2xl overflow-hidden border-2 border-[#0A8491]/30 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Content Side (Left 6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1">
              
              <div>
                <div className="text-xs font-mono text-[#C85A32] font-bold uppercase tracking-wider mb-1">
                  Central Port Ghalib — Steps from Beach & Marina
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
                  Larimar Suites
                </h3>
                <p className="text-base text-[#4A443E] leading-relaxed mb-6">
                  Garden and rooftop apartments with lush landscaping. All units are <strong className="text-[#C85A32]">100% turnkey — fully finished, air-conditioned, with fitted kitchens</strong>. Move in or rent out from day one.
                </p>

                {/* Unit Types Table / Selector */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider flex items-center justify-between">
                    <span>Available Turnkey Layout Configurations:</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SUITES_UNITS.map((unit) => {
                      const isSelected = selectedSuiteUnit === unit.name;
                      return (
                        <button
                          key={unit.name}
                          onClick={() => setSelectedSuiteUnit(unit.name)}
                          className={`p-3 rounded border text-left transition-all ${
                            isSelected
                              ? "bg-[#0A8491] text-white border-[#0A8491] shadow-md"
                              : "bg-[#FAF8F5] text-[#1C1917] border-[#E8E2D9] hover:border-[#0A8491]"
                          }`}
                        >
                          <div className="text-xs font-bold font-mono">{unit.name}</div>
                          <div className={`text-xs font-mono mt-0.5 ${isSelected ? "text-white/90" : "text-[#C85A32]"}`}>
                            {unit.totalArea}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Selected Unit Breakdown Box */}
                  {selectedSuiteUnit && (
                    <div className="mt-4 p-4 rounded-lg bg-[#FAF8F5] border border-[#E8E2D9]">
                      {(() => {
                        const unitObj = SUITES_UNITS.find((u) => u.name === selectedSuiteUnit);
                        if (!unitObj) return null;
                        return (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[#1C1917] text-sm">{unitObj.name} Specification</span>
                              <span className="px-2 py-0.5 bg-[#0A8491]/10 text-[#0A8491] font-mono text-xs font-bold rounded">
                                {unitObj.totalArea}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#6E6459] pt-1">
                              <div>Indoor Living: <strong className="text-[#1C1917]">{unitObj.indoorArea}</strong></div>
                              <div>Outdoor Terrace/Garden: <strong className="text-[#C85A32]">{unitObj.outdoorArea}</strong></div>
                            </div>
                            <p className="text-xs text-[#4A443E] pt-1 border-t border-[#E8E2D9]">{unitObj.description}</p>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-wrap gap-4 items-center justify-end">
                <a
                  href="https://wa.me/201005532941?text=Hello%20Mohamed,%20I'm%20interested%20in%20Larimar%20Suites."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-[#0A8491] hover:bg-[#086F7A] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  Inquire Suites Pricing
                </a>
              </div>

            </div>

            {/* Image Side (Right 6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px] order-1 lg:order-2">
              <ImageWithLoader
                src="/images/larimar-suites.png"
                alt="Larimar Suites Port Ghalib"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 left-4 bg-[#1C1917]/90 text-white font-mono text-xs px-3 py-1.5 rounded backdrop-blur border border-white/20">
                55 m² – 114 m² TOTAL AREA
              </div>
            </div>

          </div>
        </div>


        {/* PROJECT 3: LARIMAR 3 */}
        <div className="arch-card rounded-2xl overflow-hidden border-2 border-[#1C1917]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side (Left 6 cols) */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[500px]">
              <ImageWithLoader
                src="/images/larimar-3.png"
                alt="Larimar 3 Port Ghalib"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-[#FFFDF9]/90 text-[#1C1917] font-mono text-xs px-3 py-1.5 rounded backdrop-blur border border-[#1C1917]/20 font-bold">
                UNITS 132 m² – 191 m²
              </div>
            </div>

            {/* Content Side (Right 6 cols) */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="text-xs font-mono text-[#C85A32] font-bold uppercase tracking-wider mb-1">
                  Heart of Port Ghalib — Marina, Lagoon & Corniche
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1917] mb-3">
                  Larimar 3
                </h3>
                <p className="text-base text-[#4A443E] leading-relaxed mb-6">
                  Resort-style low-rise living with a central green corridor, water features, and landscaped spine. Units range from <strong className="text-[#1C1917]">132–191 m²</strong> with private gardens, terraces, and rooftop options.
                </p>

                {/* Typologies List */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono font-bold text-[#1C1917] uppercase tracking-wider">
                    Featured Layout Typologies:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#1C1917]">I-Villas</div>
                      <div className="text-xs text-[#6E6459]">Modern vertical villa lifestyle</div>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#C85A32]">Corner Townhouses (Type AB)</div>
                      <div className="text-xs text-[#6E6459]">Premium corner position with garden</div>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#0A8491]">Mid Townhouses (Type AC)</div>
                      <div className="text-xs text-[#6E6459]">Most popular layout with rooftop</div>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                      <div className="font-bold text-[#1C1917]">3-Bedroom Villas (Type AD)</div>
                      <div className="text-xs text-[#6E6459]">Expansive standalone living space</div>
                    </div>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
