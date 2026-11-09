"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const { aboutSection } = PORTFOLIO_DATA;

  return (
    <section
      id="a-propos"
      aria-labelledby="about-heading"
      className="relative py-28 md:py-40 bg-obsidian border-b border-hairline scroll-mt-16 overflow-hidden"
    >
      {/* Photographie architecturale de fond — Horizon monumental, ambition et chemin à construire */}
      <SectionBackground
        src={aboutSection.backgroundImage.src}
        alt={aboutSection.backgroundImage.alt}
        variant="horizon-open"
        imageOpacityClass="opacity-90"
        objectPositionClass="object-center"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <SectionHeader
          number={aboutSection.sectionNumber}
          label={aboutSection.sectionLabel}
          title={aboutSection.title}
          align="left"
        />

        {/* Composition éditoriale asymétrique sur l'horizon architectural (sans portrait) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonne Principale (Cols 1-7) : Récit & Citation mise en évidence */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-2xl md:text-[1.65rem] text-ivory font-normal leading-snug">
                {aboutSection.lead}
              </p>

              {aboutSection.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-ivory/80 leading-relaxed max-w-2xl"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Citation éditoriale encadrée par deux filets fins */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-10 border-y border-ivory/25"
            >
              <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-ivory leading-[1.06]">
                « {aboutSection.highlightQuote} »
              </blockquote>
            </motion.div>
          </div>

          {/* Colonne Droite (Cols 8-12) : Repères d'identité */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 lg:border-l lg:border-ivory/20 lg:pl-12 divide-y divide-ivory/20 border-t lg:border-t-0 border-ivory/20"
          >
            {aboutSection.specs.map((spec) => (
              <div
                key={spec.label}
                className="py-6 first:pt-6 lg:first:pt-0 last:pb-0"
              >
                <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
                  {spec.label}
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-ivory mb-1">
                  {spec.value}
                </p>
                <p className="text-xs sm:text-sm text-ivory/75">{spec.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
