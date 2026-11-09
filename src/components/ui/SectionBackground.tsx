"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export type BackgroundOverlayVariant =
  | "left-editorial"
  | "right-editorial"
  | "ambient-subtle"
  | "horizon-open"
  | "bottom-focus";

interface SectionBackgroundProps {
  src: string;
  alt: string;
  variant?: BackgroundOverlayVariant;
  /** Opacité de la photographie pour moduler l'intensité selon la section */
  imageOpacityClass?: string;
  /** Positionnement du cadrage */
  objectPositionClass?: string;
}

/**
 * Intègre une photographie architecturale en arrière-plan de section
 * selon le même principe artistique et photographique que le Hero :
 * - Image en pleine largeur clairement identifiable
 * - Traitement monochrome contrasté
 * - Superpositions sombres directionnelles maîtrisées pour la lisibilité
 * - Fondus progressifs en haut et en bas pour une continuité naturelle entre les sections
 */
export function SectionBackground({
  src,
  alt,
  variant = "left-editorial",
  imageOpacityClass = "opacity-85",
  objectPositionClass = "object-center",
}: SectionBackgroundProps) {
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

  const parallaxActive = !prefersReducedMotion && !isMobile;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallaxActive ? ["-8%", "8%"] : ["0%", "0%"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    parallaxActive ? [1.06, 1.0, 1.04] : [1, 1, 1]
  );

  const renderDirectionalOverlay = () => {
    switch (variant) {
      case "left-editorial":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-obsidian/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />
          </>
        );
      case "right-editorial":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-l from-obsidian/90 via-obsidian/60 to-obsidian/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />
          </>
        );
      case "ambient-subtle":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/50 to-obsidian/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-obsidian/25" />
          </>
        );
      case "horizon-open":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/55 to-obsidian/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-obsidian/25" />
          </>
        );
      case "bottom-focus":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/50 to-obsidian/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/30" />
          </>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      <motion.div
        style={{ y, scale }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[116%] -top-[8%] will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={`object-cover ${objectPositionClass} grayscale contrast-105 brightness-95 ${imageOpacityClass}`}
        />
      </motion.div>

      {/* Superpositions directionnelles inspirées du Hero */}
      {renderDirectionalOverlay()}

      {/* Fondus progressifs en haut et en bas pour des transitions fluides entre sections */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-obsidian via-obsidian/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-obsidian via-obsidian/85 to-transparent" />
    </div>
  );
}
