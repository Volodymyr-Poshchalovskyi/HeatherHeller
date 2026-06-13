"use client";

import React from "react";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-[120px] bg-secondary border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-medium mb-3 block">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white-custom tracking-tight mb-6">
            Curated Showcase
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto" />
        </div>

        {/* Three horizontally aligned equal-width placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num, idx) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative aspect-[4/3] w-full border border-gold/10 group overflow-hidden bg-background"
            >
              <ImagePlaceholder className="w-full h-full border-none transition-transform duration-700 group-hover:scale-102" />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
