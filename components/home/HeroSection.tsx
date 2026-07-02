"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { TbCompass, TbHeartHandshake, TbDiamond, TbTrendingUp } from "react-icons/tb";

const features = [
  {
    icon: <TbCompass className="text-3xl" />,
    title: "Strategy",
    text: "Insight that drives\ngrowth and relevance.",
  },
  {
    icon: <TbHeartHandshake className="text-3xl" />,
    title: "Connections",
    text: "The right partnerships.\nThe right people.",
  },
  {
    icon: <TbDiamond className="text-3xl" />,
    title: "Experiences",
    text: "Immersive. Impactful.\nUnforgettable.",
  },
  {
    icon: <TbTrendingUp className="text-3xl" />,
    title: "Results",
    text: "Measurable impact that moves brands and careers forward.",
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
    <section className="relative flex bg-background overflow-hidden h-auto lg:h-[calc(100vh-308px)] mt-[88px] py-12 lg:py-0">
      {/* Ambient background light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 w-full h-full gap-12 lg:gap-0"
      >
        {/* LEFT: Portrait image (5 columns) */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block lg:col-span-5 h-full overflow-hidden bg-secondary"
        >
          <div className="relative w-full h-full">
            <img
              src="/images/heather_portrait.jpg"
              alt="Heather Heller"
              className="w-full h-full object-cover"
            />
            {/* Smooth transition gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505] pointer-events-none" />
          </div>
        </motion.div>

        {/* CENTER: Main Content (4 columns) */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:col-span-4 flex flex-col justify-center space-y-5 z-20 px-6 sm:px-8 lg:px-10 xl:px-12"
        >
          {/* Tagline above heading */}
          <span className="font-sans text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.2em] sm:tracking-[0.4em] uppercase text-gold font-bold block whitespace-nowrap overflow-x-auto scrollbar-none">
            Strategy&nbsp;&nbsp;·&nbsp;&nbsp;Connections&nbsp;&nbsp;·&nbsp;&nbsp;Experience&nbsp;&nbsp;·&nbsp;&nbsp;Results
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[68px] 2xl:text-[78px] text-white-custom tracking-tight leading-[1.0] font-light">
            I BUILD WHAT <br />
            MOVES BRANDS <br />
            <span className="italic font-normal text-gold-light text-[1.05em] inline-block mt-1">FORWARD.</span>
          </h1>

          <div className="w-16 h-[1px] bg-gold/40" />

          <div className="space-y-5 max-w-sm">
            <p className="font-sans text-sm md:text-base text-white-custom/90 tracking-wide leading-relaxed font-light">
              Brand Strategy.&nbsp; Strategic Partnerships.<br />
              Talent Management.&nbsp; Experiential Marketing.<br />
              Event Production.
            </p>
            <p className="font-sans text-xs md:text-sm text-gray-custom tracking-wide leading-relaxed font-light">
              I help health, wellness, sports, luxury and lifestyle brands create meaningful connections and unforgettable experiences that drive growth, visibility and impact.
            </p>
          </div>

          <div className="pt-1">
            <Button id="hero-cta" variant="primary" href="/#contact-form" className="w-full sm:w-auto px-8 py-4">
              Schedule a Strategy Session
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: Feature cards panel — horizontal grid on mobile, vertical on desktop */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:col-span-3 grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-col lg:justify-between h-auto lg:h-full border-t border-b lg:border-t-0 lg:border-b-0 border-gold/15"
        >
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col justify-center px-6 sm:px-8 lg:px-7 xl:px-10 py-6 lg:py-6 border-r border-b border-gold/15 last:border-r-0 lg:last:border-b-0 lg:border-r-0 ${
                idx % 2 === 1 ? "border-r-0" : ""
              } ${idx >= 2 ? "border-b-0" : "lg:border-b"} md:border-r md:last:border-r-0`}
            >
              <div className="flex-shrink-0 mb-3 text-gold">
                {feature.icon}
              </div>
              <h4 className="font-serif text-sm sm:text-base xl:text-lg text-white-custom font-semibold tracking-wide uppercase mb-1.5">
                {feature.title}
              </h4>
              <p className="font-sans text-[11px] sm:text-xs xl:text-[14px] text-gray-custom/80 font-light leading-relaxed whitespace-pre-line">
                {feature.text}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
