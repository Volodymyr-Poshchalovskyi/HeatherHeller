"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consulting", href: "/consulting" },
  { label: "Experience Lab", href: "/experience-lab" },
  { label: "Sinners & Saints", href: "/sinners-saints" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Production Portfolio", href: "/production-portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-gold py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between gap-4">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="z-50 group">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-light text-gold whitespace-nowrap block">
                Heather Heller
              </span>
            </Link>
          </div>

          {/* Right Side: Navigation + CTA */}
          <div className="hidden xl:flex items-center space-x-8 ml-auto">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="relative font-sans text-[13px] tracking-widest uppercase py-2 transition-colors duration-300 whitespace-nowrap"
                  >
                    <span
                      className={`${
                        isActive ? "text-gold" : "text-gray-custom hover:text-white-custom"
                      } transition-colors`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            <Button variant="outline" href="/#contact-form">
              Schedule a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden z-50 text-white-custom hover:text-gold transition-colors p-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <IoCloseOutline className="text-3xl" />
            ) : (
              <IoMenuOutline className="text-3xl" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Rendered outside <header> to prevent scroll jump and styling bugs) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center px-8 md:px-16"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-serif text-2xl md:text-3xl tracking-wider uppercase ${
                        isActive ? "text-gold" : "text-gray-custom hover:text-white-custom"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-6"
              >
                <Button variant="gold" href="/#contact-form" className="w-full max-w-xs mx-auto">
                  Schedule a Call
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
