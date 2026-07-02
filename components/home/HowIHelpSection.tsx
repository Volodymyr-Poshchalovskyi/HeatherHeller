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
    <section className="bg-background py-16 lg:py-20 border-t border-gold/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Label + Services grid */}
          <div>
            {/* Section label */}
            <div className="mb-8">
              <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-gold font-bold block mb-3">
                Services
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white-custom font-light tracking-tight">
                How I Help
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mt-4" />
            </div>

            {/* Services 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="py-5 border-b border-gold/10"
                >
                  <h3 className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold font-bold mb-1.5">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-custom font-light leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: 3 staggered images */}
          <div className="relative flex gap-3 h-[420px] lg:h-[500px]">
            {/* Image 1 — full height left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-1/2 overflow-hidden flex-shrink-0"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right column — two images stacked */}
            <div className="w-1/2 flex flex-col gap-3 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex-1 overflow-hidden"
              >
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex-1 overflow-hidden"
              >
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
