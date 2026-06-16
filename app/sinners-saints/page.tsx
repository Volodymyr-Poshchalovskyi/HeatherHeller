"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { 
  IoCameraOutline, 
  IoVideocamOutline, 
  IoRadioOutline, 
  IoCalendarOutline, 
  IoShareSocialOutline, 
  IoBookOutline,
  IoPlayOutline
} from "react-icons/io5";

export default function SinnersSaintsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <IoCameraOutline className="text-3xl text-gold" />,
      title: "Photography",
      description: "Editorial, high-fashion portraits and brand lifestyle imagery that establish visual authority.",
    },
    {
      icon: <IoVideocamOutline className="text-3xl text-gold" />,
      title: "Video Production",
      description: "Cinematic brand commercials, executive documentaries, and short-form storytelling assets.",
    },
    {
      icon: <IoRadioOutline className="text-3xl text-gold" />,
      title: "Podcast Production",
      description: "End-to-end studio recording, editing, sound design, and distribution setup for executive podcasts.",
    },
    {
      icon: <IoCalendarOutline className="text-3xl text-gold" />,
      title: "Event Coverage",
      description: "Prestige photo and video documentation capturing activations, galas, and VIP experiences.",
    },
    {
      icon: <IoShareSocialOutline className="text-3xl text-gold" />,
      title: "Social Media Content",
      description: "High-end vertical video reels, graphic grids, and copy that drive engaged luxury audiences.",
    },
    {
      icon: <IoBookOutline className="text-3xl text-gold" />,
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
    },
    {
      title: "Vesper Editorial Campaign",
      category: "Photography & Creative Direction",
      img: "/images/heather_portrait.jpg",
      desc: "Bespoke photography and style curation for a boutique private membership club launch in Mayfair, London.",
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
          className="space-y-24"
        >
          {/* SECTION 1: Page Title & Overview */}
          <motion.div variants={itemVariants} className="max-w-4xl space-y-6">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
              THE CONTENT ENGINE
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Sinners & Saints
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gold-light italic font-light leading-snug">
              Uncompromising content creation, photography, video, podcasting, and storytelling.
            </p>
          </motion.div>

          {/* SECTION 2: Services Grid */}
          <motion.div id="services" variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                CREATIVE SUITE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom font-medium tracking-tight">
                Production Services
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-secondary border border-gold/10 p-8 flex flex-col justify-between hover:border-gold/30 hover:y-[-4px] transition-all duration-300 group min-h-[240px]"
                >
                  <div>
                    <div className="p-3 border border-gold/15 bg-background text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300 w-fit mb-6">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-xl text-white-custom mb-3 font-semibold group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
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
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 left-4 p-2 bg-background/80 text-gold border border-gold/20 text-[10px] tracking-widest uppercase font-bold backdrop-blur-sm">
                      {item.category}
                    </div>
                    {idx === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full border border-gold/40 bg-background/85 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-background transition-all duration-300">
                          <IoPlayOutline className="text-2xl ml-1" />
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
