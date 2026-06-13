import React from "react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function PagePlaceholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden">
      {/* Decorative luxury elements */}
      <div className="absolute top-1/4 left-1/4 w-[1px] h-32 bg-gold/10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[1px] h-32 bg-gold/10 pointer-events-none" />
      
      <div className="z-10 max-w-xl mx-auto space-y-6">
        <span className="font-sans text-xs tracking-[0.4em] uppercase text-gold font-semibold block">
          Heather Heller
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white-custom tracking-tight">
          {title}
        </h1>
        <div className="w-12 h-[1px] bg-gold/90 mx-auto my-6" />
        <p className="font-sans text-xs md:text-sm tracking-widest text-gray-custom uppercase font-light leading-relaxed">
          {description}
        </p>
        <p className="font-sans text-[10px] tracking-[0.2em] text-gold/60 uppercase pt-12">
          This page is currently under construction.
        </p>
      </div>
    </div>
  );
}
