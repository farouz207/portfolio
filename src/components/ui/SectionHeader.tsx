"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "split";
}

export function SectionHeader({
  number,
  label,
  title,
  subtitle,
  align = "split",
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full mb-16 md:mb-24">
      {/* Ligne supérieure animée */}
      <motion.div
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[1px] bg-hairline origin-left mb-6"
      />

      {/* En-tête de section épuré et lisible */}
      <div className="flex items-center justify-between gap-4 pb-8 md:pb-12 text-xs tracking-editorial uppercase text-ash">
        <div className="flex items-center gap-3">
          <span className="text-ivory font-medium">{number}</span>
          <span className="w-6 h-[1px] bg-hairline inline-block" />
          <span>{label}</span>
        </div>
        <span className="hidden sm:inline-block text-ash">FAROUZ.</span>
      </div>

      {/* Titre principal et sous-titre */}
      <div
        className={
          align === "split"
            ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
            : "max-w-4xl"
        }
      >
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={align === "split" ? "lg:col-span-7" : ""}
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02] tracking-tight text-ivory">
            {title}
          </h2>
        </motion.div>

        {subtitle && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={
              align === "split"
                ? "lg:col-span-5 lg:border-l lg:border-hairline lg:pl-8"
                : "mt-6"
            }
          >
            <p className="text-base sm:text-lg text-ash leading-relaxed font-normal">
              {subtitle}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
