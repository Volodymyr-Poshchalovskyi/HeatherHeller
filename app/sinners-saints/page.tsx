"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";

import { 
  TbCamera, 
  TbMovie, 
  TbMicrophone, 
  TbCalendar, 
  TbSocial, 
  TbBook 
} from "react-icons/tb";

export default function SinnersSaintsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      num: "I",
      icon: <TbCamera className="text-3xl text-gold" />,
      title: "Photography",
      description: "Editorial, high-fashion portraits and brand lifestyle imagery that establish visual authority.",
    },
    {
      num: "II",
      icon: <TbMovie className="text-3xl text-gold" />,
      title: "Video Production",
      description: "Cinematic brand commercials, executive documentaries, and short-form storytelling assets.",
    },
    {
      num: "III",
      icon: <TbMicrophone className="text-3xl text-gold" />,
      title: "Podcast Production",
      description: "End-to-end studio recording, editing, sound design, and distribution setup for executive podcasts.",
    },
    {
      num: "IV",
      icon: <TbCalendar className="text-3xl text-gold" />,
      title: "Event Coverage",
      description: "Prestige photo and video documentation capturing activations, galas, and VIP experiences.",
    },
    {
      num: "V",
      icon: <TbSocial className="text-3xl text-gold" />,
      title: "Social Media Content",
      description: "High-end vertical video reels, graphic grids, and copy that drive engaged luxury audiences.",
    },
    {
      num: "VI",
      icon: <TbBook className="text-3xl text-gold" />,
      title: "Brand Storytelling",
      description: "Crafting a brand's narrative core, writing speeches, and scripting creative campaigns.",
    },
  ];

  const portfolioItems = [
    {
      title: "The Ascent Documentary",
      category: "Video & Documentary",
      img: "/images/media_production.jpg",
      desc: "A 10-minute cinematic film tracking the legacy of a Silicon Valley VC partner, generating over 500k high-value views.",
      alt: "The Ascent Documentary - executive video production and story",
    },
    {
      title: "Vesper Editorial Campaign",
      category: "Photography & Creative Direction",
      img: "/images/heather_portrait.jpg",
      desc: "Bespoke photography and style curation for a boutique private membership club launch in Mayfair, London.",
      alt: "Vesper Editorial Campaign - fashion brand photography and creative direction",
    },
  ];

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Background glow effects */}
      <div className="absolute top-10 left-0 w-[550px] h-[550px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-32"
        >
          {/* SECTION 1: Page Title & Overview */}
          <motion.div variants={itemVariants} className="max-w-4xl space-y-6">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
              THE CONTENT ENGINE
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Sinners &amp; Saints
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gold-light italic font-light leading-snug">
              Uncompromising content creation, photography, video, podcasting, and storytelling.
            </p>
          </motion.div>

          {/* SECTION 2: Services Grid */}
          <motion.div id="services" variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                CREATIVE SUITE
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white-custom font-light tracking-tight">
                Production Services
              </h2>
              <div className="w-16 h-[1px] bg-gold/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-24">
              {services.map((service, idx) => {
                // Determine vertical stagger shift for the middle column on desktop
                const isMiddleColumn = idx % 3 === 1;
                return (
                  <div
                    key={service.title}
                    className={`flex flex-col space-y-4 pt-6 border-t border-gold/25 group ${
                      isMiddleColumn ? "lg:translate-y-12" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-xs text-gold/60 font-semibold tracking-wider">
                        {service.num}
                      </span>
                      <div className="p-2.5 border border-gold/20 bg-secondary/20 text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl text-white-custom font-medium group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm md:text-[15px] text-gray-custom/85 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* SECTION 3: Portfolio Showcase */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                VISUAL WORK
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom font-medium tracking-tight">
                Selected Portfolio
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {portfolioItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="group flex flex-col bg-secondary border border-gold/10 overflow-hidden"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-gold/10 bg-background">
                    <img
                      src={item.img}
                      alt={item.alt || item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4 p-2 bg-background/80 text-gold border border-gold/20 text-[10px] tracking-widest uppercase font-bold backdrop-blur-sm">
                      {item.category}
                    </div>
                    {idx === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full border border-gold/40 bg-background/85 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-background transition-all duration-300">
                          {/* Premium Minimal Play Icon SVG */}
                          <svg className="w-5 h-5 fill-current ml-1 text-gold group-hover:text-background transition-colors duration-300" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="font-serif text-2xl text-white-custom font-semibold group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 4: Contact / Production CTA */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="bg-secondary border border-gold/10 p-12 md:p-20 text-center space-y-6">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                START A PROJECT
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom tracking-tight leading-tight">
                Empower Your Narrative Engine
              </h2>
              <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed max-w-xl mx-auto">
                Ready to produce a high-end podcast, record your brand commercial, or curate editorial imagery for your campaigns? Let&apos;s produce.
              </p>
              <div className="pt-4">
                <Button variant="primary" href="/contact" className="px-10 py-5">
                  Book a Production Call
                </Button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
