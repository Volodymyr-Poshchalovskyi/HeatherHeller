"use client";

import React from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const divisions = [
  {
    id: "consulting",
    logo: (
      <div className="flex flex-col items-center justify-center text-center select-none">
        <span style={{ fontFamily: "var(--font-script)" }} className="text-4xl xl:text-5xl text-secondary leading-none">
          Heather Heller
        </span>
        <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mt-2 font-medium">
          consulting
        </span>
      </div>
    ),
    description: "Strategic consulting across brand strategy, partnerships, talent management and business development.",
    link: "/consulting",
  },
  {
    id: "sinners",
    logo: (
      <div className="flex flex-col items-center justify-center text-center select-none">
        <span style={{ fontFamily: "var(--font-decorative)" }} className="text-2xl xl:text-3xl text-secondary leading-tight font-bold tracking-wider">
          SINNERS
        </span>
        <span style={{ fontFamily: "var(--font-decorative)" }} className="text-2xl xl:text-3xl text-secondary leading-tight font-bold tracking-wider">
          &amp; Saints
        </span>
        <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-gold mt-2 font-medium">
          Productions
        </span>
      </div>
    ),
    description: "Full-service event production and creative direction for live, digital and experiential events that engage and inspire.",
    link: "/sinners-saints",
  },
  {
    id: "experience",
    logo: (
      <div className="flex flex-col items-center justify-center text-center select-none">
        <span style={{ fontFamily: "var(--font-decorative)" }} className="text-lg xl:text-xl text-secondary leading-snug font-light tracking-[0.3em] uppercase">
          The
        </span>
        <span style={{ fontFamily: "var(--font-decorative)" }} className="text-2xl xl:text-3xl text-secondary leading-tight font-bold tracking-wider">
          experience
        </span>
        <span style={{ fontFamily: "var(--font-decorative)" }} className="text-2xl xl:text-3xl text-secondary leading-tight font-bold tracking-wider">
          Lab
        </span>
      </div>
    ),
    description: "Our innovation hub for experiential marketing, brand activations and immersive audience engagement.",
    link: "/experience-lab",
  },
];

export default function BusinessDivisions() {
  return (
    <section className="bg-white w-full text-secondary relative z-20" style={{ height: "220px" }}>
      <div className="grid grid-cols-3 h-full w-full">
        {divisions.map((division, idx) => (
          <div key={division.id} className="relative flex h-full">
            {/* Gold half-height vertical divider on the left (except first) */}
            {idx !== 0 && (
              <div className="absolute left-0 top-0 h-full flex items-center pointer-events-none z-10">
                <div className="w-[1px] bg-gold/50" style={{ height: "50%" }} />
              </div>
            )}

            {/* Block content: left logo | right text */}
            <div className="flex flex-row w-full h-full">
              {/* LEFT: Logo */}
              <div className="w-1/2 flex items-center justify-center px-4 border-r border-transparent">
                {division.logo}
              </div>

              {/* RIGHT: Text + button */}
              <div className="w-1/2 flex flex-col justify-center px-5 xl:px-6 space-y-3">
                <p className="font-sans text-[13px] xl:text-sm text-secondary font-light leading-[1.65]">
                  {division.description}
                </p>
                <Link
                  href={division.link}
                  className="inline-flex items-center gap-2 font-sans text-sm xl:text-base font-semibold tracking-widest uppercase text-gold underline underline-offset-4 decoration-gold hover:text-gold-light hover:decoration-gold-light transition-colors duration-300 group"
                >
                  Learn More
                  <IoArrowForward className="text-xs group-hover:translate-x-1 transition-transform duration-300 no-underline" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
