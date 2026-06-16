"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { IoRibbonOutline, IoSparklesOutline, IoCompassOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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

  const corePhilosophy = [
    {
      icon: <IoCompassOutline className="text-3xl text-gold" />,
      title: "Category Dominance",
      text: "We believe in positioning our clients not just to compete, but to define their own category and command unquestioned authority.",
    },
    {
      icon: <IoSparklesOutline className="text-3xl text-gold" />,
      title: "Experiential Synergy",
      text: "A brand becomes legendary when it is felt. We merge physical luxury activations with strategic positioning to lock in brand equity.",
    },
    {
      icon: <IoRibbonOutline className="text-3xl text-gold" />,
      title: "Sponsorship Readiness",
      text: "Unlocking commercial backing requires corporate-grade alignment. We groom talent, founders, and assets to be sponsor-ready.",
    },
    {
      icon: <IoShieldCheckmarkOutline className="text-3xl text-gold" />,
      title: "Radical Discretion",
      text: "Serving elite circles, heritage brands, and high-profile individuals requires absolute confidentiality and bespoke alignment.",
    },
  ];

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Ambient background light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* SECTION 1: Page Header & Meet Heather */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Header Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
                ABOUT HEATHER
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-white-custom font-light">
                Meet Heather Heller
              </h1>
              <div className="w-24 h-[1px] bg-gold/40 my-6" />
              <div className="font-sans text-base md:text-lg text-gray-custom/95 font-light leading-relaxed space-y-6 max-w-3xl">
                <p>
                  Heather Heller is a veteran luxury brand architect, advisor, and private concierge to athletes, founders, and corporate entities. For over a decade, she has navigated the intersection of strategic brand management, luxury experiences, and high-impact media production.
                </p>
                <p>
                  Her private consultancy was built on a simple premise: talent and brands must be commercialized with absolute integrity and prestige. By designing highly structured strategic frameworks, she equips her clients to secure premier corporate backing, build sovereign brand empires, and execute activations that dominate media headlines.
                </p>
              </div>
            </div>

            {/* Portrait Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-md border border-gold/20 group overflow-hidden bg-secondary">
                <img
                  src="/images/heather_portrait.jpg"
                  alt="Heather Heller Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </motion.div>

          {/* SECTION 2: Experience */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                  TRACK RECORD
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-white-custom tracking-tight font-medium">
                  Experience & Influence
                </h2>
                <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed max-w-sm">
                  A career built on elevating high-value assets and executing flawless campaigns.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-secondary p-8 border border-gold/10 flex flex-col justify-between">
                  <span className="font-serif text-5xl text-gold/25 font-light mb-6 block">01 /</span>
                  <div>
                    <h4 className="font-serif text-xl text-white-custom mb-3 font-semibold">Luxury Brands & Advisory</h4>
                    <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                      Consulting for heritage European couture houses, luxury hospitality chains, and luxury real estate conglomerates to develop brand narratives that resonate with ultra-high-net-worth individuals.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary p-8 border border-gold/10 flex flex-col justify-between">
                  <span className="font-serif text-5xl text-gold/25 font-light mb-6 block">02 /</span>
                  <div>
                    <h4 className="font-serif text-xl text-white-custom mb-3 font-semibold">Elite Athlete Commercialization</h4>
                    <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                      Transforming global athletes (Formula 1 driver associations, professional golfers, and Olympians) into robust, sponsor-ready personal brands capable of securing long-term blue-chip partnerships.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary p-8 border border-gold/10 flex flex-col justify-between">
                  <span className="font-serif text-5xl text-gold/25 font-light mb-6 block">03 /</span>
                  <div>
                    <h4 className="font-serif text-xl text-white-custom mb-3 font-semibold">Founder & Executive Branding</h4>
                    <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                      Advising high-growth tech founders, venture capitalists, and luxury executives on media presence, book deals, speech writing, and securing board roles.
                    </p>
                  </div>
                </div>

                <div className="bg-secondary p-8 border border-gold/10 flex flex-col justify-between">
                  <span className="font-serif text-5xl text-gold/25 font-light mb-6 block">04 /</span>
                  <div>
                    <h4 className="font-serif text-xl text-white-custom mb-3 font-semibold">Experiential Formats</h4>
                    <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                      Architecting exclusive brand salons, VIP speaker panels at Davos and Cannes, health and luxury retreats, and custom spatial activations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION 3: Philosophy */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                METHODOLOGY
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom tracking-tight">
                Our Core Philosophy
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {corePhilosophy.map((philosophy) => (
                <div
                  key={philosophy.title}
                  className="bg-secondary border border-gold/10 p-8 flex flex-col items-start hover:border-gold/30 transition-all duration-300 relative group"
                >
                  <div className="p-4 bg-background border border-gold/5 mb-6 text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                    {philosophy.icon}
                  </div>
                  <h3 className="font-serif text-xl text-white-custom mb-3 group-hover:text-gold transition-colors duration-300 font-semibold">
                    {philosophy.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                    {philosophy.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 4: Why We Do What We Do */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="bg-[#f4f1ec] text-secondary p-12 md:p-20 relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-8 text-center">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                  OUR PURPOSE
                </span>
                
                <h2 className="font-serif text-3xl md:text-5xl text-secondary tracking-tight font-bold leading-tight">
                  Why We Do What We Do
                </h2>
                
                <div className="w-16 h-[1px] bg-gold/40 mx-auto" />
                
                <p className="font-serif text-lg md:text-2xl text-secondary/90 font-light leading-relaxed italic">
                  &ldquo;A brand without strategy is invisible. A strategy without experience is forgettable. And experience without content is fleeting. We build the bridges between strategy, experience, and content, helping brands and individuals achieve enduring cultural relevance.&rdquo;
                </p>
                
                <p className="font-sans text-sm text-secondary/70 leading-relaxed font-light max-w-2xl mx-auto">
                  Our purpose is to elevate individuals and institutions, transforming them into sovereign platforms. We bring structure, elegance, and scale to the stories that shape our culture.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
