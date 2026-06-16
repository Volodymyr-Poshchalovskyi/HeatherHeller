"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const caseStudies = [
  {
    id: 1,
    title: "Motorsport Commercial Acquisition",
    division: "Consulting",
    challenge: "A rising motorsports athlete needed a structured, commercial-ready identity to attract tier-1 global sponsors.",
    solution: "Audited personal assets, curated their digital presence, packaged media metrics, and designed a custom sponsorship readiness framework.",
    result: "Secured a $1.2M title partnership with a leading technology brand and locked in three subsidiary deals within six months.",
    img: "/images/strategic_partnership.jpg",
  },
  {
    id: 2,
    title: "Davos Sanctuary 2025",
    division: "Experience Lab",
    challenge: "A health-tech firm wanted to establish premium authority during the World Economic Forum week.",
    solution: "Designed and executed a wellness lounge, curating thought leadership speaker panels, private chef wellness dining, and recovery salons.",
    result: "Attracted 400+ attendees including 80+ C-suite leaders, generating direct investor conversations yielding $15M in follow-up funding.",
    img: "/images/luxury_experience.jpg",
  },
  {
    id: 3,
    title: "The Ascent Documentary",
    division: "Sinners & Saints",
    challenge: "A prominent tech founder needed a powerful narrative vehicle to launch their new venture fund.",
    solution: "Produced an editorial-grade cinematic short film detailing their career hurdles, philosophy, and future vision.",
    result: "Accumulated 500,000+ views across professional networks, resulting in 40+ inbound Limited Partner inquiries for the fund.",
    img: "/images/media_production.jpg",
  },
];

const testimonials = [
  {
    quote: "Heather has an unmatched ability to connect the right people, create extraordinary experiences and deliver results that matter.",
    author: "F1 Driver Management Board",
  },
  {
    quote: "The strategic positioning work Heather did for our luxury real estate group redefined how we approach global partnerships. She operates at a level of prestige that is rare in modern consulting.",
    author: "Managing Partner, Vance & Co.",
  },
  {
    quote: "Sinners & Saints is our secret weapon. The video campaigns and creative assets they produce feel like high art, separating us completely from our tech competitors.",
    author: "Founder & CEO, Aurelia Software",
  },
];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState("All");

  const filteredCaseStudies = filter === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.division === filter);

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Background glow */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="space-y-20">
          
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
              PROOF OF CONCEPT
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Case Studies
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-sans text-base md:text-lg text-gray-custom/80 font-light leading-relaxed max-w-2xl">
              Discover how we translate strategy, experiences, and high-production content into tangible, commercial success stories.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-4 border-b border-gold/10 pb-6">
            {["All", "Consulting", "Experience Lab", "Sinners & Saints"].map((div) => (
              <button
                key={div}
                onClick={() => setFilter(div)}
                className={`px-6 py-2.5 font-sans text-xs uppercase tracking-widest border transition-all duration-300 rounded-none cursor-pointer ${
                  filter === div
                    ? "bg-gold text-background border-gold"
                    : "bg-transparent text-gray-custom border-gold/20 hover:border-gold hover:text-white-custom"
                }`}
              >
                {div}
              </button>
            ))}
          </div>

          {/* CASE STUDIES GRID */}
          <div className="grid grid-cols-1 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.map((cs) => (
                <motion.div
                  key={cs.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 bg-secondary border border-gold/10 overflow-hidden hover:border-gold/30 transition-colors duration-300"
                >
                  {/* Image Block */}
                  <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto w-full min-h-[300px] overflow-hidden bg-background border-b lg:border-b-0 lg:border-r border-gold/10">
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-background/90 text-gold font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 border border-gold/20 backdrop-blur-sm">
                      {cs.division}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                    <div className="space-y-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-white-custom font-semibold tracking-tight">
                        {cs.title}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gold/5">
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold mb-1">
                            Challenge
                          </h4>
                          <p className="font-sans text-xs text-gray-custom leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold mb-1">
                            Solution
                          </h4>
                          <p className="font-sans text-xs text-gray-custom leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-sans text-[10px] tracking-widest uppercase text-gold font-bold mb-1">
                            Result
                          </h4>
                          <p className="font-sans text-xs text-gold-light leading-relaxed font-medium">
                            {cs.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* TESTIMONIALS SECTION */}
          <div className="border-t border-gold/10 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                ENDORSEMENTS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom font-medium tracking-tight">
                Client Testimonials
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="bg-secondary border border-gold/10 p-8 flex flex-col justify-between hover:border-gold/30 transition-all duration-300 relative group"
                >
                  <div className="absolute top-4 right-4 opacity-5">
                    <FaQuoteLeft className="text-gold text-4xl" />
                  </div>
                  
                  <blockquote className="font-serif text-base text-gray-custom/95 leading-relaxed italic mb-8">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                  
                  <div>
                    <div className="w-8 h-[1px] bg-gold mb-3" />
                    <cite className="font-sans text-[11px] uppercase tracking-widest text-gold font-semibold not-italic">
                      {test.author}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
