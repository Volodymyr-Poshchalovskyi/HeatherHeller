"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="hidden lg:flex fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-gold/20"
        >
          <div className="w-full flex items-stretch">

            {/* LEFT: Quote — ~40% width */}
            <div className="w-[40%] flex items-center gap-5 px-10 py-7">
              <FaQuoteLeft className="text-gold/40 text-3xl flex-shrink-0" />
              <div>
                <p className="font-serif text-xl text-gray-custom/90 italic leading-snug font-light">
                  &ldquo;Heather has an unmatched ability to connect the right people,
                  create extraordinary experiences and deliver results that matter.&rdquo;
                </p>
                <span className="font-sans text-[12px] tracking-[0.3em] uppercase text-gold font-semibold mt-2 block">
                  — Partner
                </span>
              </div>
            </div>

            {/* DIVIDER: gold half-height centered */}
            <div className="flex items-center justify-center py-2">
              <div className="w-[1px] bg-gold/40" style={{ height: "50%" }} />
            </div>

            {/* RIGHT: CTA — ~60% width */}
            <div className="flex-1 flex items-center justify-between px-10 py-7 gap-8">
              <div className="flex-1">
                <p className="font-serif text-2xl xl:text-3xl text-white-custom font-light tracking-wide leading-snug">
                  LET&apos;S CREATE SOMETHING{" "}
                  <span className="italic text-gold">EXTRAORDINARY</span>{" "}
                  TOGETHER.
                </p>
                <p className="font-sans text-base text-gray-custom/70 font-light mt-2 leading-relaxed">
                  Schedule a confidential strategy session to discuss how we can bring your vision to life.
                </p>
              </div>

              <Link
                href="/#contact-form"
                className="flex-shrink-0 inline-flex items-center justify-center font-sans uppercase tracking-widest text-sm font-semibold px-10 py-5 border transition-all duration-300 bg-gold text-background border-gold hover:bg-[#dbb271] hover:border-[#dbb271] hover:-translate-y-[2px] hover:shadow-[0_6px_25px_rgba(199,154,83,0.45)] whitespace-nowrap"
              >
                Schedule a Call
              </Link>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
