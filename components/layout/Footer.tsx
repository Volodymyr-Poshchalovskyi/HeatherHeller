import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <span className="font-serif text-xl tracking-[0.2em] uppercase text-white-custom">
              Heather Heller
            </span>
            <span className="block text-[8px] tracking-[0.4em] uppercase text-gold font-sans font-semibold mt-1">
              Brand Strategy & Consulting
            </span>
          </Link>
          <p className="text-gray-custom text-sm font-light leading-relaxed max-w-sm">
            Elevating elite brands through bespoke strategic positioning, exquisite storytelling, and unforgettable experience design.
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4">
            <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="LinkedIn">
              <FaLinkedinIn className="text-lg" />
            </a>
            <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="Pinterest">
              <FaPinterestP className="text-lg" />
            </a>
            <a href="#" className="text-gray-custom hover:text-gold transition-colors duration-300" aria-label="Twitter">
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase text-gold font-medium mb-6">Navigation</h4>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-wider">
            <li>
              <Link href="/" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/consulting" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Consulting
              </Link>
            </li>
            <li>
              <Link href="/experience-lab" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Experience Lab
              </Link>
            </li>
            <li>
              <Link href="/sinners-saints" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Sinners & Saints
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/production-portfolio" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Production Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase text-gold font-medium mb-6">Our Services</h4>
          <ul className="space-y-3 font-sans text-xs uppercase tracking-wider">
            <li>
              <Link href="/consulting#services" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Sponsorship Readiness
              </Link>
            </li>
            <li>
              <Link href="/consulting#services" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Strategic Partnerships
              </Link>
            </li>
            <li>
              <Link href="/experience-lab#services" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Brand Activations & VIP Events
              </Link>
            </li>
            <li>
              <Link href="/sinners-saints#services" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Content Creation & Production
              </Link>
            </li>
            <li>
              <Link href="/consulting#who-we-serve" className="text-gray-custom hover:text-white-custom transition-colors duration-300">
                Talent & Executive Branding
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Office Column */}
        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase text-gold font-medium mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-light text-gray-custom">
            <li>
              <span className="block text-xs uppercase tracking-widest text-white-custom mb-1">Global Headquarters</span>
              <p className="leading-relaxed">
                Fifth Avenue & 57th Street<br />
                New York, NY 10022
              </p>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-widest text-white-custom mb-1">Inquiries</span>
              <a href="mailto:concierge@heatherheller.com" className="hover:text-gold transition-colors duration-300">
                concierge@heatherheller.com
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-widest text-white-custom mb-1">Telephone</span>
              <a href="tel:+12125550199" className="hover:text-gold transition-colors duration-300">
                +1 (212) 555-0199
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-custom/60 font-light">
        <p>© {currentYear} Heather Heller. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
