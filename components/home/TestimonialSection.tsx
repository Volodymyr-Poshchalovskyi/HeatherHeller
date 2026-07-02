"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <section className="py-20 lg:hidden bg-background relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-10">
            <FaQuoteLeft className="text-gold/25 text-5xl" />
          </div>

          {/* Large luxury typography quote */}
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-white-custom font-light leading-relaxed tracking-tight max-w-4xl mx-auto italic mb-10">
            &ldquo;Heather has an unmatched ability to connect the right people, create extraordinary experiences and deliver results that matter.&rdquo;
          </blockquote>

          {/* Gold divider */}
          <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />

          {/* Author */}
          <cite className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-semibold not-italic">
            &mdash; Partner
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
