"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Strategy",
    desc: "Positioning, partnerships and growth strategies that drive impact.",
  },
  {
    title: "Talent Management",
    desc: "Representation and career development for talent, athletes and influencers.",
  },
  {
    title: "Experiential Marketing",
    desc: "Immersive campaigns and activations that create lasting connections.",
  },
  {
    title: "Event Production",
    desc: "From intimate gatherings to large-scale events executed flawlessly.",
  },
  {
    title: "Strategic Partnerships",
    desc: "Sponsorships, brand collaborations and business development.",
  },
  {
    title: "Content & Storytelling",
    desc: "Compelling stories and content that build brands and drive engagement.",
  },
];

const images = [
  { src: "/images/luxury_f1.jpg", alt: "F1 VIP Hospitality" },
  { src: "/images/luxury_villa.jpg", alt: "Strategy Session at Villa" },
  { src: "/images/luxury_event.jpg", alt: "Luxury Brand Event" },
];

export default function HowIHelpSection() {
  return (
    <section className="bg-background py-20 lg:py-28 border-t border-gold/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-20">
        
        {/* TOP: Header */}
        <div className="max-w-2xl">
          <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-gold font-bold block mb-3">
            Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white-custom font-light tracking-tight leading-none">
            How I Help
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mt-6" />
        </div>

        {/* CENTER: Grid of blocks/tiles (3 in a row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-8 bg-secondary/40 border border-gold/10 hover:border-gold/25 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
            >
              <div>
                <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-gray-custom/90 font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM: Horizontal luxury images row (3 images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative aspect-[3/2] overflow-hidden border border-gold/10 group bg-secondary"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-background/15 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
