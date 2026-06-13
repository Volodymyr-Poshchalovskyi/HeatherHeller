import React from "react";

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function ImagePlaceholder({
  width,
  height,
  className = "",
}: ImagePlaceholderProps) {
  const style: React.CSSProperties = {};
  if (width !== undefined) style.width = typeof width === "number" ? `${width}px` : width;
  if (height !== undefined) style.height = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      style={style}
      className={`flex items-center justify-center bg-secondary border border-gold/40 text-gold font-sans tracking-widest text-xs uppercase p-4 min-h-[150px] ${className}`}
    >
      <span className="text-center font-medium opacity-80">IMAGE PLACEHOLDER</span>
    </div>
  );
}
