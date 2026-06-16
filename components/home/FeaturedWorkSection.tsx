"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const projects = [
  {
    title: "Vanguard Sponsorship Strategy",
    division: "Consulting",
    description: "Sponsorship readiness and strategic introductions aligning global technology brands with elite F1 racing talent.",
    image: "/images/strategic_partnership.jpg",
    link: "/case-studies#consulting",
  },
  {
    title: "Aura Luxury Wellness Retreat",
    division: "Experience Lab",
    description: "An exclusive weekend at the intersection of wellness, sports, and luxury hospitality on the French Riviera.",
    image: "/images/luxury_experience.jpg",
    link: "/case-studies#experience-lab",
  },
  {
    title: "The Ascent: Executive Story",
    division: "Sinners & Saints",
    description: "A cinematic documentary and storytelling campaign detailing the journey of a world-renowned founder.",
    image: "/images/media_production.jpg",
    link: "/case-studies#sinners-saints",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section className="py-24 lg:py-32 bg-background border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold mb-3 block">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white-custom tracking-tight leading-none">
              Featured Work
            </h2>
            <div className="w-20 h-[1px] bg-gold/40 mt-6" />
          </div>
          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-light font-semibold border-b border-gold/30 pb-2 transition-all duration-300 group"
            >
              View All Case Studies
              <IoArrowForwardOutline className="ml-2 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group flex flex-col h-full bg-secondary border border-gold/10 overflow-hidden relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-gold/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/25 group-hover:bg-transparent transition-colors duration-500" />
                <span className="absolute top-4 left-4 bg-background/90 text-gold font-sans text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 border border-gold/20 backdrop-blur-sm">
                  {project.division}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white-custom mb-3 group-hover:text-gold transition-colors duration-300 font-medium tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-custom/80 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center font-sans text-[11px] font-bold tracking-widest uppercase text-gold group-hover:text-gold-light transition-colors duration-300"
                  >
                    Read Case Study
                    <IoArrowForwardOutline className="ml-1 text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
