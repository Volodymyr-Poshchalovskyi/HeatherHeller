"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { IoEyeOutline, IoPlayOutline, IoImagesOutline } from "react-icons/io5";

const mediaItems = [
  {
    id: 1,
    title: "Vesper editorial portraits",
    category: "Photography",
    client: "Vesper Private Club",
    img: "/images/heather_portrait.jpg",
    icon: <IoImagesOutline className="text-xl" />,
  },
  {
    id: 2,
    title: "The Ascent cinematic campaign",
    category: "Video Production",
    client: "Aurelia VC Fund",
    img: "/images/media_production.jpg",
    icon: <IoPlayOutline className="text-xl" />,
  },
  {
    id: 3,
    title: "Horizon Yachting VIP setup",
    category: "Event Production",
    client: "Horizon Superyachts",
    img: "/images/luxury_experience.jpg",
    icon: <IoEyeOutline className="text-xl" />,
  },
  {
    id: 4,
    title: "Vanguard F1 Sponsorship assets",
    category: "Branding",
    client: "Vanguard Racing",
    img: "/images/strategic_partnership.jpg",
    icon: <IoImagesOutline className="text-xl" />,
  },
];

export default function ProductionPortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? mediaItems
    : mediaItems.filter(item => item.category === filter);

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="space-y-16">
          
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
              VISUAL ASSETS
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Production Portfolio
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-sans text-base md:text-lg text-gray-custom/80 font-light leading-relaxed max-w-2xl">
              A gallery of our high-production campaigns, premium photography, custom commercials, and event media.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-4 border-b border-gold/10 pb-6">
            {["All", "Photography", "Video Production", "Event Production", "Branding"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 font-sans text-xs uppercase tracking-widest border transition-all duration-300 rounded-none cursor-pointer ${
                  filter === category
                    ? "bg-gold text-background border-gold"
                    : "bg-transparent text-gray-custom border-gold/20 hover:border-gold hover:text-white-custom"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[16/10] overflow-hidden bg-secondary border border-gold/10 hover:border-gold/30 transition-all duration-500"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-1000 ease-out"
                  />
                  
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-background/10 group-hover:via-background/5 transition-all duration-500" />
                  
                  {/* Icon flag */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 text-gold border border-gold/20 flex items-center justify-center backdrop-blur-sm">
                    {item.icon}
                  </div>

                  {/* Info Panel */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold font-bold block">
                        {item.category} &bull; {item.client}
                      </span>
                      <h3 className="font-serif text-2xl text-white-custom font-semibold tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CALL TO ACTION */}
          <div className="border-t border-gold/10 pt-20 text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-white-custom font-medium">
              Curate Your Custom Media Assets
            </h2>
            <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed max-w-lg mx-auto">
              We engineer beautiful content designed to convey status, trust, and luxury. Partner with our content engine.
            </p>
            <div className="pt-4">
              <Button variant="gold" href="/contact">
                Contact Our Creative Office
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
