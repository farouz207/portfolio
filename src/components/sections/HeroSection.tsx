"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Effet de profondeur subtil au défilement
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", prefersReducedMotion ? "0%" : "18%"]
  );
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, prefersReducedMotion ? 1 : 1.06]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", prefersReducedMotion ? "0%" : "-6%"]
  );

  return (
    <section
      ref={heroRef}
      id="top"
      aria-label="Introduction — Farouz"
      className="relative min-h-screen flex flex-col justify-end pt-36 pb-14 md:pb-20 overflow-hidden bg-obsidian"
    >
      {/* =====================================================================
          PHOTOGRAPHIE ARCHITECTURALE MONUMENTALE EN PLEINE LARGEUR
         ===================================================================== */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { scale: 1.1, opacity: 0 }
          }
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src={PORTFOLIO_DATA.hero.backgroundImage.src}
            alt={PORTFOLIO_DATA.hero.backgroundImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale contrast-105 brightness-95"
          />
        </motion.div>

        {/* Superposition sombre maîtrisée : préserve la clarté de l'horizon lumineux tout en assurant une lisibilité parfaite du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-obsidian/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-obsidian via-obsidian/90 to-transparent" />
      </motion.div>

      {/* =====================================================================
          COMPOSITION ÉDITORIALE ASYMÉTRIQUE
         ===================================================================== */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-14 pt-28 lg:pt-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end pb-14 md:pb-16 border-b border-ivory/15">
          {/* Colonne Principale (Cols 1-8) */}
          <div className="lg:col-span-8">
            {/* Sur-titre éditorial épuré */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="w-8 h-[1px] bg-ivory/60 inline-block" />
              <span className="text-xs tracking-editorial uppercase text-ivory/85">
                {PORTFOLIO_DATA.hero.eyebrow}
              </span>
            </motion.div>

            {/* Grand Titre Monumental */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-[5.4rem] leading-[1.01] tracking-tight text-ivory mb-8">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={
                    prefersReducedMotion ? false : { y: "105%", opacity: 0 }
                  }
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {PORTFOLIO_DATA.hero.titleLine1}
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-1">
                <motion.span
                  initial={
                    prefersReducedMotion ? false : { y: "105%", opacity: 0 }
                  }
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.34,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block italic font-normal text-ivory/95"
                >
                  {PORTFOLIO_DATA.hero.titleLine2}
                </motion.span>
              </span>
            </h1>

            {/* Présentation */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.46,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg sm:text-xl text-ivory/80 max-w-2xl leading-relaxed font-normal mb-10"
            >
              {PORTFOLIO_DATA.hero.introduction}
            </motion.p>

            {/* Actions Éditoriales */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.56,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-8"
            >
              <a
                href={PORTFOLIO_DATA.hero.primaryCta.href}
                className="group inline-flex items-center gap-5 bg-ivory text-obsidian px-7 py-4 text-xs tracking-editorial uppercase font-medium hover:bg-ivory/90 transition-all duration-300"
              >
                <span>{PORTFOLIO_DATA.hero.primaryCta.label}</span>
                <ArrowDownRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>

              <a
                href={PORTFOLIO_DATA.hero.secondaryCta.href}
                className="group inline-flex items-center gap-2.5 py-3 text-xs tracking-editorial uppercase text-ivory"
              >
                <span className="editorial-link">
                  {PORTFOLIO_DATA.hero.secondaryCta.label}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-ash group-hover:text-ivory transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </motion.div>
          </div>

          {/* Colonne Droite (Cols 9-12) : Citation Manifeste ouverte sans encadré lourd */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.64,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 border-l border-ivory/25 pl-6 sm:pl-8"
          >
            <blockquote className="font-serif italic text-2xl sm:text-[1.7rem] leading-snug text-ivory/95 mb-4">
              « {PORTFOLIO_DATA.identity.centralMessage} »
            </blockquote>
            <p className="text-xs tracking-editorial uppercase text-ash">
              {PORTFOLIO_DATA.identity.name} — {PORTFOLIO_DATA.meta.location}
            </p>
          </motion.div>
        </div>

        {/* Ligne éditoriale inférieure : Séquence méthodologique fluide */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-ash"
        >
          <span className="tracking-editorial uppercase text-ivory/70">
            Approche créative
          </span>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 tracking-editorial uppercase">
            {PORTFOLIO_DATA.identity.workflowChain.map((step, index) => (
              <React.Fragment key={step}>
                <a
                  href="#approche"
                  className="text-ash hover:text-ivory transition-colors duration-300"
                >
                  {step}
                </a>
                {index < PORTFOLIO_DATA.identity.workflowChain.length - 1 && (
                  <span aria-hidden="true" className="text-hairline">
                    —
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
