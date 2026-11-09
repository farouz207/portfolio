"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function ProcessSection() {
  const prefersReducedMotion = useReducedMotion();
  const { processSection } = PORTFOLIO_DATA;

  return (
    <section
      id="approche"
      aria-labelledby="process-heading"
      className="relative py-28 md:py-40 bg-obsidian border-b border-hairline scroll-mt-16 overflow-hidden"
    >
      {/* Photographie architecturale de fond — Méthode, précision et progression */}
      <SectionBackground
        src={processSection.backgroundImage.src}
        alt={processSection.backgroundImage.alt}
        variant="left-editorial"
        imageOpacityClass="opacity-80"
        objectPositionClass="object-center"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <SectionHeader
          number={processSection.sectionNumber}
          label={processSection.sectionLabel}
          title={processSection.title}
          subtitle={processSection.subtitle}
        />

        {/* Liste éditoriale monumentale à filets horizontaux superposée à l'architecture */}
        <div className="border-t border-ivory/20">
          {processSection.steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-b border-ivory/20 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline transition-colors duration-500 hover:bg-obsidian/45 px-2 sm:px-4 -mx-2 sm:-mx-4"
            >
              {/* Col 1-2 : Grand Numéro Éditorial */}
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-serif text-5xl sm:text-6xl md:text-7xl text-ivory/90 group-hover:italic group-hover:text-ivory transition-all duration-500 leading-none">
                  {step.number}
                </span>
              </div>

              {/* Col 3-6 : Titre de l'étape & Phrase clé en italique */}
              <div className="lg:col-span-4 space-y-2">
                <h3 className="text-xs tracking-wideEditorial uppercase text-ash group-hover:text-ivory transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-serif italic text-2xl sm:text-3xl text-ivory leading-snug">
                  « {step.shortAction} »
                </p>
              </div>

              {/* Col 7-10 : Explication concise */}
              <div className="lg:col-span-4">
                <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Col 11-12 : Étape / Livrable */}
              <div className="lg:col-span-2 lg:text-right">
                <span className="text-xs tracking-editorial uppercase text-ash group-hover:text-ivory transition-colors">
                  {step.deliverable}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
