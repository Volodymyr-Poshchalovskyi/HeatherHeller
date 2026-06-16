"use client";

import React from "react";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

export default function AboutHeatherSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary border-t border-gold/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-md border border-gold/20 group overflow-hidden bg-background">
              <img
                src="/images/heather_portrait.jpg"
                alt="Heather Heller"
                className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
              MEET THE FOUNDER
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white-custom tracking-tight leading-tight">
              Heather Heller
            </h2>
            
            <div className="w-20 h-[1px] bg-gold/40" />

            <div className="font-sans text-base text-gray-custom/95 font-light leading-relaxed space-y-6 max-w-2xl">
              <p>
                Heather Heller is a veteran strategic advisor, experience architect, and brand builder. She specializes in positioning high-profile individuals, elite athletes, founders, and prestigious brands to command authority and capture lucrative opportunities.
              </p>
              <p>
                Through her integrated approach—uniting custom business advisory, high-society experiential production, and premium storytelling—she transforms raw brand power into structured, sponsor-ready assets that drive double-digit equity growth.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-light font-semibold border border-gold/40 px-8 py-4 bg-background/50 hover:bg-gold hover:text-background hover:-translate-y-[2px] transition-all duration-300 shadow-sm"
              >
                Read Her Philosophy & Experience
                <IoChevronForward className="ml-2 text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
