"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
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
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 bg-background overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-16"
        >
          {/* LEFT: Portrait Image (~35% width) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[35%] flex flex-col justify-center"
          >
            <div className="relative aspect-[3/4.2] w-full max-w-md lg:max-w-none mx-auto border border-gold/20 group overflow-hidden bg-secondary">
              <ImagePlaceholder className="w-full h-full border-none transition-transform duration-700 ease-out group-hover:scale-102" />
              <div className="absolute inset-0 bg-background/15 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </motion.div>

          {/* CENTER: Main Content (~35% width) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[35%] flex flex-col justify-center space-y-8"
          >
            <div>
              <span className="font-sans text-[11px] md:text-xs tracking-[0.35em] uppercase text-gold font-bold mb-4 block">
                STRATEGY. CONNECTIONS. EXPERIENCES. RESULTS.
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[72px] xl:text-[84px] text-white-custom tracking-tight leading-[1.05] font-light">
                I BUILD WHAT <br />
                MOVES BRANDS <br />
                <span className="italic font-normal text-gold-light text-[1.05em] inline-block mt-1">FORWARD.</span>
              </h1>
            </div>

            <div className="w-20 h-[1px] bg-gold/40" />

            <div className="space-y-3 font-sans text-xs md:text-sm text-gray-custom tracking-[0.2em] uppercase font-light leading-relaxed">
              <p>Brand Strategy.</p>
              <p>Strategic Partnerships.</p>
              <p>Talent Management.</p>
              <p>Experiential Marketing.</p>
              <p>Event Production.</p>
            </div>

            <div className="pt-4">
              <Button variant="primary" href="#contact-form" className="w-full sm:w-auto px-10 py-5">
                Schedule a Strategy Session
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Feature Cards (~30% width) */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[30%] flex flex-col space-y-6 justify-center"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -4, borderColor: "rgba(199, 154, 83, 0.45)", backgroundColor: "#0c0c0c" }}
                className="p-6 bg-secondary border border-gold/10 flex items-start space-x-5 transition-all duration-300 shadow-md group rounded-none min-h-[120px] flex-col justify-center"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2.5 border border-gold/15 bg-background text-gold group-hover:bg-gold group-hover:text-background group-hover:scale-105 transition-all duration-300 mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white-custom font-semibold group-hover:text-gold transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-xs text-gray-custom/80 font-light leading-relaxed mt-1">
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
