"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IoCompassOutline,
  IoKeyOutline,
  IoSparklesOutline,
  IoCreateOutline,
  IoLinkOutline,
  IoBookOutline,
} from "react-icons/io5";

const services = [
  {
    icon: <IoCompassOutline className="text-3xl text-gold" />,
    title: "Brand Strategy",
    description: "Defining unique positions, messaging blueprints, and long-term equity plans to command luxury markets.",
  },
  {
    icon: <IoKeyOutline className="text-3xl text-gold" />,
    title: "Talent Management",
    description: "Representing and aligning elite creators, visionaries, and ambassadors with world-class heritage labels.",
  },
  {
    icon: <IoSparklesOutline className="text-3xl text-gold" />,
    title: "Experiential Marketing",
    description: "Curating bespoke consumer journeys, physical popups, and luxury retail strategy that leave lasting memories.",
  },
  {
    icon: <IoCreateOutline className="text-3xl text-gold" />,
    title: "Event Production",
    description: "Flawless end-to-end execution of private gatherings, high-society launches, and VIP galas around the globe.",
  },
  {
    icon: <IoLinkOutline className="text-3xl text-gold" />,
    title: "Strategic Partnerships",
    description: "Connecting heritage houses, high-end developers, and creators to forge lucrative, high-impact alliances.",
  },
  {
    icon: <IoBookOutline className="text-3xl text-gold" />,
    title: "Content & Storytelling",
    description: "Crafting beautiful brand narratives, high-art copy, and creative assets that resonate emotionally with elite circles.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-[120px] bg-background">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-medium mb-3 block">
            Advisory & Solutions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white-custom tracking-tight mb-6">
            How I Help
          </h2>
          <p className="font-sans text-sm text-gray-custom font-light leading-relaxed">
            Delivering bespoke consultancy and production services designed to build unmatched prestige and strategic market dominance.
          </p>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        {/* 6 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: "rgba(199, 154, 83, 0.4)" }}
              className="bg-secondary border border-gold/10 p-8 flex flex-col items-start transition-all duration-300 relative group"
            >
              {/* Gold dot decorative element inside card */}
              <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300" />
              
              <div className="p-4 bg-background border border-gold/5 mb-6 text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl text-white-custom mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
