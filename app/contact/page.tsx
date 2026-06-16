"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaPinterestP, 
  FaTwitter,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Consulting",
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
      setFormData({ name: "", email: "", phone: "", interest: "Consulting", company: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-background pt-32 pb-24 text-white-custom min-h-screen">
      {/* Ambient background light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="space-y-16">
          
          {/* HEADER */}
          <div className="max-w-4xl space-y-6">
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-bold block">
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-light">
              Contact Our Office
            </h1>
            <div className="w-24 h-[1px] bg-gold/40 my-6" />
            <p className="font-sans text-base md:text-lg text-gray-custom/80 font-light leading-relaxed max-w-2xl">
              Initiate a confidential conversation with Heather Heller and our creative team. Whether you require brand advisory, custom events, or high-end production, we look forward to connecting.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT COLUMN: Booking & Info */}
            <div className="lg:col-span-5 space-y-10">
              
              {/* BOOK A CALL CARD */}
              <div className="bg-secondary border border-gold/10 p-8 space-y-6 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 border border-gold/15 bg-background text-gold">
                    <FaCalendarAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white-custom font-semibold">
                      Book a Discovery Call
                    </h3>
                    <span className="font-sans text-[10px] tracking-wider text-gold uppercase font-bold">
                      15 Min Strategic Audit
                    </span>
                  </div>
                </div>
                
                <p className="font-sans text-xs md:text-sm text-gray-custom leading-relaxed">
                  Select a convenient slot for a private, 15-minute briefing session. We will align on your goals, timing, and feasibility of cooperation.
                </p>

                <div className="bg-background border border-gold/5 p-4 flex justify-between items-center">
                  <span className="font-sans text-xs text-gray-custom font-light">Availability: Mon - Fri</span>
                  <a 
                    href="mailto:concierge@heatherheller.com?subject=Discovery%20Call%20Request"
                    className="font-sans text-[10px] tracking-widest text-gold hover:text-gold-light uppercase font-bold"
                  >
                    Request Appointment
                  </a>
                </div>
              </div>

              {/* OFFICE INFO */}
              <div className="space-y-6 border-t border-gold/10 pt-8">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-gold text-lg mt-1" />
                  <div>
                    <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block mb-1">
                      Direct Inquiries
                    </span>
                    <a href="mailto:concierge@heatherheller.com" className="font-serif text-lg text-white-custom hover:text-gold transition-colors duration-300">
                      concierge@heatherheller.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-gold text-lg mt-1" />
                  <div>
                    <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block mb-1">
                      Global Headquarters
                    </span>
                    <p className="font-sans text-xs md:text-sm text-gray-custom leading-relaxed font-light">
                      Fifth Avenue & 57th Street<br />
                      New York, NY 10022
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="space-y-4 border-t border-gold/10 pt-8">
                <span className="font-sans text-[9px] tracking-widest uppercase text-gold font-bold block">
                  Follow Our Journal
                </span>
                <div className="flex items-center space-x-6 pt-2">
                  <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="Instagram">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
                    <FaLinkedinIn className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="Pinterest">
                    <FaPinterestP className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="Twitter">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Inquiry Form */}
            <div className="lg:col-span-7 bg-secondary border border-gold/10 p-8 md:p-12 hover:border-gold/20 transition-all duration-500">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <span className="text-5xl block text-gold">✓</span>
                  <h3 className="font-serif text-3xl text-white-custom font-semibold">Inquiry Received</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-custom/80 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you. A representative from our private office will contact you within 24 business hours to coordinate details.
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
                  
                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elizabeth Vance"
                        className="bg-background border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elizabeth@aurelia.com"
                        className="bg-background border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (212) 555-0199"
                        className="bg-background border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Aurelia Maison"
                        className="bg-background border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none"
                      />
                    </div>
                  </div>

                  {/* Division Selection */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="interest" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                      Primary Interest *
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="bg-background border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 rounded-none cursor-pointer"
                    >
                      <option value="Consulting">Consulting (Strategy, Partnerships, Sponsorships)</option>
                      <option value="Experience Lab">Experience Lab (Activations, Events, Retreats)</option>
                      <option value="Sinners & Saints">Sinners & Saints (Photography, Video, Storytelling)</option>
                      <option value="General">General / Private Office</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
                      Inquiry Details *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your goals, budget timeline, and core request..."
                      className="bg-background border border-gold/10 px-4 py-3 text-sm text-white-custom focus:outline-none focus:border-gold transition-all duration-300 resize-none rounded-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full" disabled={status === "sending"}>
                      {status === "sending" ? "Sending Details..." : "Submit Inquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
