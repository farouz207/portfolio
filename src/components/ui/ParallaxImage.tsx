"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  caption?: string;
  statusLabel?: string;
  hoverText?: string;
  aspectClassName?: string;
  priority?: boolean;
  parallaxOffset?: number;
}

export function ParallaxImage({
  src,
  alt,
  caption,
  statusLabel,
  hoverText,
  aspectClassName = "aspect-[16/10]",
  priority = false,
  parallaxOffset = 24,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport, { passive: true });
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const activeOffset = prefersReducedMotion || isMobile ? 0 : parallaxOffset;
  const y = useTransform(scrollYProgress, [0, 1], [-activeOffset, activeOffset]);

  return (
    <figure ref={containerRef} className="group relative w-full">
      {/* Révélation masquée fluide de l'image */}
      <motion.div
        initial={
          prefersReducedMotion
            ? false
            : { clipPath: "inset(10% 0% 10% 0%)", opacity: 0.25 }
        }
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        className={`relative w-full overflow-hidden bg-charcoal ${aspectClassName}`}
      >
        <motion.div
          style={{ y }}
          className="relative w-full h-[114%] -top-[7%] will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 65vw, 55vw"
            className="object-cover editorial-photo group-hover:scale-[1.045] transition-transform duration-1000 ease-editorial"
          />
        </motion.div>

        {/* Voile d'assombrissement subtil */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/65 via-transparent to-transparent z-10"
        />

        {/* Indication éditoriale au survol */}
        {hoverText && (
          <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-end bg-obsidian/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-editorial flex items-center justify-between gap-4 border-t border-ivory/40 pt-4">
              <span className="text-xs tracking-editorial uppercase text-ivory">
                {hoverText}
              </span>
              <ArrowUpRight
                className="w-4 h-4 text-ivory transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Légende éditoriale minimaliste */}
      {(caption || statusLabel) && (
        <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs text-ash">
          {caption && <span className="tracking-wider uppercase">{caption}</span>}
          {statusLabel && (
            <span className="tracking-editorial uppercase text-ivory/70">
              {statusLabel}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
