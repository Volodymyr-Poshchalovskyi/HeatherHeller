"use client";

import React from "react";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

const divisions = [
  {
    title: "Heather Heller Consulting",
    description: "Bespoke global brand positioning, elite strategy, and private advisory services.",
    link: "/services",
  },
  {
    title: "Sinners & Saints Productions",
    description: "Cinematic experiential marketing, high-society events, and creative campaigns.",
    link: "/events",
  },
  {
    title: "The Experience Lab",
    description: "Physical hospitality activations, VIP experiences, and immersive digital artifacts.",
    link: "/experience-lab",
  },
];

export default function BusinessDivisions() {
  return (
    <section className="bg-[#f4f1ec] w-full text-secondary relative z-20 border-y border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:h-[180px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full py-10 lg:py-0 gap-8 lg:gap-0 h-full">
          {divisions.map((division, idx) => (
            <div
              key={division.title}
              className={`flex flex-col justify-center h-full px-0 lg:px-12 ${
                idx !== 0 ? "lg:border-l lg:border-secondary/15" : ""
              }`}
            >
              <div>
                <h3 className="font-serif text-lg md:text-xl text-secondary font-bold tracking-tight mb-2">
                  {division.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-secondary/80 font-light leading-relaxed mb-3 max-w-sm">
                  {division.description}
                </p>
                <Link
                  href={division.link}
                  className="inline-flex items-center font-sans text-[11px] font-bold tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
                >
                  Learn More 
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
