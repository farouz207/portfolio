"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function PhilosophySection() {
  const prefersReducedMotion = useReducedMotion();
  const { philosophy, identity } = PORTFOLIO_DATA;

  return (
    <section
      id="philosophie"
      aria-labelledby="philosophy-heading"
      className="relative py-28 md:py-40 bg-obsidian border-b border-hairline scroll-mt-16 overflow-hidden"
    >
      {/* Photographie architecturale de fond — Contemplation & Exploration intellectuelle */}
      <SectionBackground
        src={philosophy.backgroundImage.src}
        alt={philosophy.backgroundImage.alt}
        variant="left-editorial"
        imageOpacityClass="opacity-85"
        objectPositionClass="object-center"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <SectionHeader
          number={philosophy.sectionNumber}
          label={philosophy.sectionLabel}
          title={philosophy.title}
          align="left"
        />

        {/* Double-page éditoriale superposée à l'image de fond */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          {/* Colonne Gauche (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3
                id="philosophy-heading"
                className="font-serif italic text-3xl sm:text-5xl text-ivory leading-[1.08] mb-8"
              >
                «&nbsp;{philosophy.subtitle}&nbsp;»
              </h3>

              <p className="text-xl sm:text-2xl text-ivory font-normal leading-snug mb-6">
                {philosophy.lead}
              </p>

              <div className="space-y-5">
                {philosophy.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg text-ivory/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Citation éditoriale mise en valeur par de simples filets fins */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 border-y border-ivory/20"
            >
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] leading-[1.08] text-ivory">
                « {philosophy.highlightQuote} »
              </blockquote>
            </motion.div>
          </div>

          {/* Colonne Droite (Cols 7-12) : Composition ouverte à filets horizontaux */}
          <div className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-ivory/20 space-y-16">
            {/* Les 3 Piliers */}
            <div>
              <span className="block text-xs tracking-editorial uppercase text-ash pb-4 border-b border-ivory/20">
                Principes de réflexion
              </span>

              <div className="divide-y divide-ivory/15 border-b border-ivory/20">
                {philosophy.pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.number}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 18 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.75,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="py-8 group"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h4 className="font-serif text-3xl sm:text-4xl text-ivory group-hover:italic transition-all">
                        {pillar.title}
                      </h4>
                      <span className="text-xs text-ash">{pillar.number}</span>
                    </div>
                    <p className="text-base text-ivory/80 leading-relaxed max-w-xl">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Valeur ajoutée présentée avec sobriété éditoriale */}
            <div>
              <span className="block text-xs tracking-editorial uppercase text-ash pb-4 border-b border-ivory/20">
                Ce que cette vision apporte
              </span>

              <div className="divide-y divide-ivory/15 border-b border-ivory/20">
                {identity.valuePropositions.map((item, idx) => (
                  <motion.div
                    key={item.audience}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 16 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.75,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="py-6"
                  >
                    <h5 className="text-xs tracking-editorial uppercase text-ivory font-medium mb-2">
                      {item.audience}
                    </h5>
                    <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                      {item.statement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
