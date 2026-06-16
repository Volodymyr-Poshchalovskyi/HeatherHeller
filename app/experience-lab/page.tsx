"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { FaQuoteLeft } from "react-icons/fa";
import { 
  IoSparklesOutline, 
  IoChatbubblesOutline, 
  IoMicOutline, 
  IoBedOutline, 
  IoGolfOutline, 
  IoPeopleOutline, 
  IoStarOutline 
} from "react-icons/io5";

export default function ExperienceLabPage() {
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
      icon: <IoSparklesOutline className="text-3xl text-gold" />,
      title: "Brand Activations",
      description: "Designing physical spatial campaigns and custom interactive popups that tell a brand story with prestige.",
    },
    {
      icon: <IoChatbubblesOutline className="text-3xl text-gold" />,
      title: "Panels",
      description: "Hosting high-society roundtable debates and discussions around industry trends and cultural shifts.",
    },
    {
      icon: <IoMicOutline className="text-3xl text-gold" />,
      title: "Speaker Programming",
      description: "Securing and curating prominent keynotes and experts to anchor exclusive event itineraries.",
    },
    {
      icon: <IoBedOutline className="text-3xl text-gold" />,
      title: "Retreats",
      description: "Coordinating multi-day ultra-luxury wellness and strategic alignment retreats for corporate teams and HNWI.",
    },
    {
      icon: <IoGolfOutline className="text-3xl text-gold" />,
      title: "VIP Experiences",
      description: "Managing custom hospitality and access packages at major global sports tournaments and cultural events.",
    },
    {
      icon: <IoPeopleOutline className="text-3xl text-gold" />,
      title: "Community Building",
      description: "Designing private membership clubs and select networks that foster high-impact alliances.",
    },
    {
      icon: <IoStarOutline className="text-3xl text-gold" />,
      title: "Thought Leadership Events",
      description: "Curating bespoke seminars and symposiums at Davos, Cannes, and other global power hubs.",
    },
  ];

  const pastEvents = [
    {
      title: "Monaco Grand Prix VIP Suite",
      location: "Monte Carlo",
      date: "May 2025",
      desc: "Hosted a private hospitality suite for twelve executive clients, integrating personal brand advisory sessions with exclusive paddock access.",
    },
    {
      title: "The Davos Wellness Sanctuary",
      location: "Davos, Switzerland",
      date: "January 2025",
      desc: "An exclusive wellness pop-up next to the main forum congress, featuring elite panel discussions and private recovery sessions.",
    },
    {
      title: "Riviera Brand Retreat",
      location: "Cannes, France",
      date: "September 2024",
      desc: "A three-day strategic alignment and networking retreat for high-growth tech founders on the French Riviera, focusing on media readiness.",
    },
  ];

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

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
              EXPERIENCES
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Experience Lab
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gold-light italic font-light leading-snug">
              Creating experiences at the intersection of health, wellness, sports, and luxury.
            </p>
          </motion.div>

          {/* SECTION 2: Image Highlight */}
          <motion.div variants={itemVariants} className="relative aspect-[16/9] w-full border border-gold/15 overflow-hidden bg-secondary">
            <img 
              src="/images/luxury_experience.jpg" 
              alt="Experience Lab Activation" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-xl">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold font-bold block mb-2">
                FEATURED SETUP
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white-custom font-semibold">
                French Riviera Wellness & Luxury Summit
              </h3>
            </div>
          </motion.div>

          {/* SECTION 3: Services Grid */}
          <motion.div id="services" variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                SPECIALTIES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom font-medium tracking-tight">
                Our Experiential Formats
              </h2>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-secondary border border-gold/10 p-8 flex flex-col justify-between hover:border-gold/30 hover:y-[-4px] transition-all duration-300 group min-h-[260px]"
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

          {/* SECTION 4: Past Events */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 space-y-4">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                  CHRONICLES
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-white-custom font-semibold tracking-tight">
                  Past Experiences
                </h2>
                <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed">
                  A look at some of the luxury experiences and VIP activations we have curated globally.
                </p>
              </div>

              <div className="lg:col-span-8 space-y-8">
                {pastEvents.map((event) => (
                  <div 
                    key={event.title}
                    className="p-8 bg-secondary border border-gold/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="space-y-2 max-w-xl">
                      <div className="flex items-center space-x-3">
                        <span className="font-sans text-[10px] tracking-widest text-gold uppercase border border-gold/20 px-2 py-0.5">
                          {event.location}
                        </span>
                        <span className="font-sans text-[10px] tracking-widest text-gray-custom/60 uppercase">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-white-custom font-bold group-hover:text-gold transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SECTION 5: Testimonials */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-secondary border border-gold/10 p-12 md:p-16 relative overflow-hidden">
              <div className="absolute top-6 left-6 opacity-10">
                <FaQuoteLeft className="text-gold text-7xl" />
              </div>
              
              <blockquote className="font-serif text-xl md:text-3xl text-white-custom font-light leading-relaxed italic relative z-10">
                &ldquo;The Experience Lab executed our activation at the Cannes Yachting Festival flawlessly. The synthesis of wellness programming with our yacht branding created deep relationships with twelve ultra-high-net-worth investors that we could not have reached through traditional media.&rdquo;
              </blockquote>
              
              <div className="w-12 h-[1px] bg-gold mx-auto" />
              
              <cite className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-semibold not-italic block">
                &mdash; Chief Marketing Officer, Horizon Superyachts
              </cite>
            </div>
          </motion.div>

          {/* SECTION 6: Contact / Booking CTA */}
          <motion.div variants={itemVariants} className="border-t border-gold/10 pt-20">
            <div className="bg-[#f4f1ec] text-secondary p-12 md:p-20 text-center space-y-6">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-bold block">
                DESIGN AN EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-secondary tracking-tight font-bold leading-tight">
                Curate Your Next Activation
              </h2>
              <p className="font-sans text-sm text-secondary/80 font-light leading-relaxed max-w-xl mx-auto">
                Ready to architect a bespoke VIP experience, retreats, panels, or custom activations at global landmarks? Let&apos;s build it.
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
