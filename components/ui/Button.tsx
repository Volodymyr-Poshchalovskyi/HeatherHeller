"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans uppercase tracking-widest text-xs font-semibold px-8 py-4 border transition-all duration-300 ease-in-out relative overflow-hidden cursor-pointer rounded-none whitespace-nowrap";

  const variants = {
    primary:
      "bg-gold text-background border-gold hover:bg-[#dbb271] hover:border-[#dbb271] hover:-translate-y-[2px] hover:shadow-[0_6px_25px_rgba(199,154,83,0.45)]",
    secondary:
      "bg-secondary text-white-custom border-secondary hover:bg-background hover:border-gold hover:-translate-y-[2px] hover:shadow-[0_6px_25px_rgba(199,154,83,0.2)]",
    outline:
      "bg-transparent text-gold border-gold/60 hover:border-gold hover:text-white-custom hover:-translate-y-[2px] hover:shadow-[0_6px_25px_rgba(199,154,83,0.2)]",
    gold:
      "bg-transparent text-gold border-gold hover:bg-gold hover:text-background hover:-translate-y-[2px] hover:shadow-[0_6px_25px_rgba(199,154,83,0.35)]",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileTap={{ scale: 0.98 }}
      {...(props as any /* eslint-disable-line @typescript-eslint/no-explicit-any */)}
    >
      {children}
    </motion.button>
  );
}
