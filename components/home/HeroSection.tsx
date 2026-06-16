"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { IoCompassOutline, IoPeopleOutline, IoSparklesOutline, IoRibbonOutline } from "react-icons/io5";

const features = [
  {
    icon: <IoCompassOutline className="text-2xl" />,
    title: "Strategy",
    text: "Positioning brands to dominate their categories with authority.",
  },
  {
    icon: <IoPeopleOutline className="text-2xl" />,
    title: "Connections",
    text: "Unlocking access to high-society networks and alliances.",
  },
  {
    icon: <IoSparklesOutline className="text-2xl" />,
    title: "Experiences",
    text: "Architecting bespoke spatial activations and global events.",
  },
  {
    icon: <IoRibbonOutline className="text-2xl" />,
    title: "Results",
    text: "Driving double-digit brand equity and market growth.",
  },
];

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-background overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
        >
          {/* LEFT: Horizontal Image with fade-to-black mask (6 columns, full bleed to the left) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:col-span-6 flex flex-col justify-center"
          >
            <div className="relative w-full h-[55vh] lg:h-[75vh] overflow-hidden bg-secondary">
              <img 
                src="/images/heather_portrait.jpg" 
                alt="Heather Heller"
                className="w-full h-full object-cover transition-transform duration-700 ease-out" 
              />
              {/* Smooth transition gradient overlay to page background (#050505) */}
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-[#050505] lg:from-0% lg:via-60% lg:to-100% pointer-events-none" />
            </div>
          </motion.div>

          {/* CENTER: Main Content (3 columns, padded for screen layout breathing room) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:col-span-3 flex flex-col justify-center space-y-6 z-20 px-6 lg:px-4"
          >
            <div>
              <span className="font-sans text-[11px] md:text-xs tracking-[0.35em] uppercase text-gold font-bold mb-3 block">
                HEATHER HELLER CONSULTING
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-white-custom tracking-tight leading-[1.05] font-light">
                I BUILD WHAT <br />
                MOVES BRANDS <br />
                <span className="italic font-normal text-gold-light text-[1.05em] inline-block mt-1">FORWARD.</span>
              </h1>
            </div>

            <div className="w-16 h-[1px] bg-gold/40" />

            <div className="font-sans text-xs md:text-sm text-gray-custom tracking-wide leading-relaxed font-light">
              <p>
                Helping brands, athletes, founders, and executives become sponsor-ready through strategy, experiences, and content.
              </p>
            </div>

            <div className="pt-2">
              <Button variant="primary" href="/contact" className="w-full sm:w-auto px-8 py-4">
                Book a Discovery Call
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Feature Cards (3 columns, padded on desktop to align with global padding bounds) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:col-span-3 flex flex-col space-y-4 justify-center px-6 lg:pl-4 lg:pr-12 xl:pr-20"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -2, borderColor: "rgba(199, 154, 83, 0.45)", backgroundColor: "#0c0c0c" }}
                className="p-5 bg-secondary border border-gold/10 flex items-start space-x-4 transition-all duration-300 shadow-md group rounded-none min-h-[100px] flex-col justify-center"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="flex-shrink-0 p-2 border border-gold/15 bg-background text-gold group-hover:bg-gold group-hover:text-background group-hover:scale-105 transition-all duration-300 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm text-white-custom font-semibold group-hover:text-gold transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-custom/80 font-light leading-relaxed mt-1">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
