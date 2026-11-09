"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { skillsSection } = PORTFOLIO_DATA;

  return (
    <section
      id="competences"
      aria-labelledby="skills-heading"
      className="relative py-28 md:py-40 bg-obsidian border-b border-hairline scroll-mt-16 overflow-hidden"
    >
      {/* Photographie architecturale de fond — Technologie, savoir-faire et précision */}
      <SectionBackground
        src={skillsSection.backgroundImage.src}
        alt={skillsSection.backgroundImage.alt}
        variant="right-editorial"
        imageOpacityClass="opacity-75"
        objectPositionClass="object-center"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <SectionHeader
          number={skillsSection.sectionNumber}
          label={skillsSection.sectionLabel}
          title={skillsSection.title}
          subtitle={skillsSection.subtitle}
        />

        {/* Composition typographique ouverte en 3 colonnes séparées par des filets fins */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-ivory/20 border-y border-ivory/20">
          {skillsSection.domains.map((domain, domainIdx) => (
            <motion.div
              key={domain.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: domainIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`py-10 lg:py-14 flex flex-col justify-between ${
                domainIdx === 0
                  ? "lg:pr-12"
                  : domainIdx === 1
                  ? "lg:px-12"
                  : "lg:pl-12"
              }`}
            >
              <div>
                {/* En-tête du domaine */}
                <div className="pb-8 mb-8 border-b border-ivory/20">
                  <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-ash mb-3">
                    <span>{domain.index}</span>
                    <span>{domain.subtitle}</span>
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl text-ivory tracking-tight mb-4">
                    {domain.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                {/* Liste typographique pure */}
                <ul className="divide-y divide-ivory/15">
                  {domain.items.map((skill, idx) => (
                    <li
                      key={skill}
                      className="group py-4 flex items-baseline justify-between gap-4"
                    >
                      <span className="font-serif text-2xl sm:text-3xl text-ivory/90 group-hover:text-ivory group-hover:italic group-hover:translate-x-1.5 transition-all duration-300">
                        {skill}
                      </span>
                      <span className="text-xs text-ash group-hover:text-ivory transition-colors">
                        0{idx + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
