"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { 
  TbAward, 
  TbHeartHandshake, 
  TbUsers, 
  TbUserCheck, 
  TbRocket, 
  TbTrendingUp, 
  TbNetwork 
} from "react-icons/tb";

export default function ConsultingPage() {
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
      num: "01",
      icon: <TbAward className="text-3xl text-gold" />,
      title: "Sponsorship Readiness",
      description: "Auditing brand equity, packaging digital footprints, and building elite materials to secure blue-chip commercial backing.",
    },
    {
      num: "02",
      icon: <TbHeartHandshake className="text-3xl text-gold" />,
      title: "Partnership Strategy",
      description: "Negotiating and structuring long-term, high-value joint ventures and brand alignment initiatives.",
    },
    {
      num: "03",
      icon: <TbUsers className="text-3xl text-gold" />,
      title: "Talent Advisory",
      description: "Bespoke guidance for high-profile talent on asset commercialization, public relations, and career trajectory.",
    },
    {
      num: "04",
      icon: <TbUserCheck className="text-3xl text-gold" />,
      title: "Executive Branding",
      description: "Positioning C-suite corporate leaders as thought leaders through media placements, speaking roles, and book projects.",
    },
    {
      num: "05",
      icon: <TbRocket className="text-3xl text-gold" />,
      title: "Founder Branding",
      description: "Grooming high-growth startup founders to command investor interest and public credibility.",
    },
    {
      num: "06",
      icon: <TbTrendingUp className="text-3xl text-gold" />,
      title: "Business Development",
      description: "Accelerating market entry and high-end sales pipelines through targeted B2B client acquisition strategy.",
    },
    {
      num: "07",
      icon: <TbNetwork className="text-3xl text-gold" />,
      title: "Strategic Introductions",
      description: "Facilitating confidential warm introductions into high-net-worth circles and boardrooms.",
    },
  ];

  const clientSegments = [
    { type: "Brands", desc: "Heritage houses, luxury startups, and corporate entities looking to secure prestigious alignments and partnerships." },
    { type: "Athletes", desc: "Global sports figures, motorsports racers, and Olympians seeking to package their brand equity for commercial sponsorships." },
    { type: "Influencers", desc: "Elite digital creators and cultural icons seeking to transition from transactional sponsorships to brand ownership." },
    { type: "Founders", desc: "Venture-backed entrepreneurs and tech leaders building public authority and scaling corporate credibility." },
    { type: "Executives", desc: "C-suite officers, private equity partners, and corporate directors navigating board alignments and speaking careers." },
  ];

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Background glow effects */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

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
              SERVICES
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Brand &amp; Strategic Consulting
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gold-light italic font-light leading-snug">
              Helping brands and talent unlock growth through partnerships, positioning, and sponsorship strategy.
            </p>
          </motion.div>

          {/* SECTION 2: Detailed Services List (Elegant Row Layout) */}
          <motion.div id="services" variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                OFFERINGS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white-custom font-light tracking-tight">
                Our Consulting Services
              </h2>
              <div className="w-16 h-[1px] bg-gold/40" />
            </div>

            <div className="space-y-0">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col md:flex-row items-start justify-between py-8 border-b border-gold/15 group gap-6 first:pt-0"
                >
                  <div className="flex items-center space-x-6 md:w-5/12">
                    <span className="font-serif text-lg text-gold/40 font-medium">
                      {service.num}
                    </span>
                    <div className="p-3 border border-gold/20 bg-secondary/30 text-gold group-hover:bg-gold group-hover:text-background transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-white-custom font-medium group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:w-7/12 flex items-center h-full pt-1 md:pt-0">
                    <p className="font-sans text-base text-gray-custom/85 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION 3: Who We Serve */}
          <motion.div id="who-we-serve" variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                  CLIENT SEGMENTS
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white-custom tracking-tight font-light">
                  Who We Serve
                </h2>
                <p className="font-sans text-base text-gray-custom/80 font-light leading-relaxed">
                  We partner with select, high-value individuals and enterprises to scale influence, partnerships, and market capitalization.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-0">
                {clientSegments.map((segment, idx) => (
                  <div
                    key={segment.type}
                    className="flex flex-col md:flex-row items-start justify-between py-10 border-b border-gold/10 gap-6 group first:pt-0"
                  >
                    <div className="md:w-1/3">
                      <h3 className="font-serif text-3xl text-white-custom font-medium group-hover:text-gold transition-colors duration-300">
                        {segment.type}
                      </h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="font-sans text-base text-gray-custom/85 font-light leading-relaxed">
                        {segment.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* SECTION 4: Success Stories */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                SUCCESS STORIES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom font-medium tracking-tight">
                Case Highlights
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary border border-gold/10 p-10 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold font-bold block mb-3">
                    ATHLETE SPONSORSHIP
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white-custom mb-4 font-semibold">
                    Motorsport Sponsor Strategy
                  </h3>
                  <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed mb-6">
                    Structured and compiled the sponsorship readiness kit for a rising Formula 2 driver, directly resulting in three major corporate title sponsorship offers and securing a $1.2M annual funding pool.
                  </p>
                </div>
                <Button variant="outline" href="/case-studies" className="w-fit">
                  Read Case Study
                </Button>
              </div>

              <div className="bg-secondary border border-gold/10 p-10 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold font-bold block mb-3">
                    FOUNDER BRANDING
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white-custom mb-4 font-semibold">
                    Unlocking Series B Growth
                  </h3>
                  <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed mb-6">
                    Redefined the personal narrative and media positioning of an enterprise tech founder. Positioned the client at key industry keynotes and media outlets, accelerating their Series B raise by three months.
                  </p>
                </div>
                <Button variant="outline" href="/case-studies" className="w-fit">
                  Read Case Study
                </Button>
              </div>
            </div>
          </motion.div>

          {/* SECTION 5: Call to Action */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="bg-secondary border border-gold/10 p-12 md:p-20 text-center space-y-6">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                GET STARTED
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom tracking-tight leading-tight">
                Unlock Your Brand&apos;s Next Horizon
              </h2>
              <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed max-w-xl mx-auto">
                Ready to become sponsor-ready, establish strategic partnerships, or refine your executive narrative? Let&apos;s talk.
              </p>
              <div className="pt-4">
                <Button variant="primary" href="/contact" className="px-10 py-5">
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
