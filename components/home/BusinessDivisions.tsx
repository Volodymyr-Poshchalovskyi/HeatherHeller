"use client";

import React from "react";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

const divisions = [
  {
    title: "Consulting",
    description: "Strategic partnerships, sponsorship readiness, talent advisory, business development, and brand strategy.",
    link: "/consulting",
  },
  {
    title: "Experience Lab",
    description: "Experiences at the intersection of health, wellness, sports, and luxury.",
    link: "/experience-lab",
  },
  {
    title: "Sinners & Saints",
    description: "Content creation, photography, video, podcasting, and storytelling.",
    link: "/sinners-saints",
  },
];

export default function BusinessDivisions() {
  return (
    <section className="bg-[#f4f1ec] w-full text-secondary relative z-20 border-y border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:h-[220px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full py-12 lg:py-0 gap-8 lg:gap-0 h-full">
          {divisions.map((division, idx) => (
            <div
              key={division.title}
              className={`flex flex-col justify-center h-full px-0 lg:px-12 ${
                idx !== 0 ? "lg:border-l lg:border-secondary/15" : ""
              }`}
            >
              <div>
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold font-bold mb-1 block">
                  Service Division
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-secondary font-bold tracking-tight mb-2">
                  {division.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-secondary/80 font-light leading-relaxed mb-4 max-w-sm">
                  {division.description}
                </p>
                <Link
                  href={division.link}
                  className="inline-flex items-center font-sans text-[11px] font-bold tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  Explore Division 
                  <IoChevronForward className="ml-1 text-[10px] transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
