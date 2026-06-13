"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact-form" className="py-20 lg:py-[120px] bg-secondary border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Copy block */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[350px]">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold font-medium mb-3 block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white-custom tracking-tight mb-6">
                Let&apos;s Create Something Extraordinary
              </h2>
              <p className="font-sans text-sm text-gray-custom/90 font-light leading-relaxed mb-8">
                Reach out to schedule a private, confidential consultation. Let us know how we can elevate your brand story, craft legacy-defining partnerships, or manage your global profile.
              </p>
            </div>

            <div className="border-t border-gold/15 pt-8">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold block mb-2 font-semibold">
                Direct Inquiry
              </span>
              <a
                href="mailto:concierge@heatherheller.com"
                className="font-serif text-lg md:text-xl text-white-custom hover:text-gold transition-colors duration-300 block mb-1"
              >
                concierge@heatherheller.com
              </a>
              <span className="font-sans text-xs text-gray-custom/60 uppercase">
                Response within 24 business hours
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Form block */}
          <div className="lg:col-span-7 bg-background border border-gold/10 p-8 md:p-12">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <span className="text-4xl block mb-6 text-gold">✓</span>
                <h3 className="font-serif text-2xl text-white-custom mb-3">Inquiry Received</h3>
                <p className="font-sans text-sm text-gray-custom font-light leading-relaxed max-w-sm mx-auto">
                  Thank you for your interest. A representative from our private office will contact you shortly to coordinate a consultation call.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-sans text-xs text-gold uppercase tracking-widest hover:text-gold-light underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name (Required) */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Elizabeth Vance"
                      className="bg-secondary border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                    />
                  </div>

                  {/* Email (Required) */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elizabeth@aurelia.com"
                      className="bg-secondary border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone (Optional) */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (212) 555-0199"
                      className="bg-secondary border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                    />
                  </div>

                  {/* Company (Optional) */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="company" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Aurelia Maison"
                      className="bg-secondary border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                    />
                  </div>
                </div>

                {/* Message (Required) */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-semibold">
                    Inquiry Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your goals, segments, and request..."
                    className="bg-secondary border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 resize-none rounded-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full" disabled={status === "sending"}>
                    {status === "sending" ? "Scheduling Call..." : "Schedule a Call"}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
