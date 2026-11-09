"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Check, Copy } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const { contactSection, footer, meta } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactSection.primaryEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${contactSection.primaryEmail}`;
    }
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative pt-28 md:pt-40 pb-16 bg-obsidian scroll-mt-16 overflow-hidden"
    >
      {/* Photographie architecturale de fond — Ouverture sur la lumière et nouvelles perspectives */}
      <SectionBackground
        src={contactSection.backgroundImage.src}
        alt={contactSection.backgroundImage.alt}
        variant="bottom-focus"
        imageOpacityClass="opacity-85"
        objectPositionClass="object-center"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        {/* En-tête éditorial de la section Contact */}
        <motion.div
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[1px] bg-ivory/20 origin-left mb-6"
        />

        <div className="pb-12 md:pb-16 flex items-center justify-between gap-4 text-xs tracking-editorial uppercase text-ash">
          <div className="flex items-center gap-3">
            <span className="text-ivory font-medium">
              {contactSection.sectionNumber}
            </span>
            <span className="w-6 h-[1px] bg-ivory/30 inline-block" />
            <span>{contactSection.sectionLabel}</span>
          </div>
          <span>{meta.location}</span>
        </div>

        {/* ===================================================================
            GRAND TITRE PRINCIPAL & TEXTE D'ACCOMPAGNEMENT (GRILLE ASYMÉTRIQUE)
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-16 md:pb-24 border-b border-ivory/20">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight text-ivory"
            >
              Une idée en tête&nbsp;?{" "}
              <span className="italic font-normal text-ivory/95 block sm:inline">
                Construisons quelque chose ensemble.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-4 lg:border-l lg:border-ivory/25 lg:pl-8"
          >
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed">
              {contactSection.subtitle}
            </p>
          </motion.div>
        </div>

        {/* ===================================================================
            COMPOSITION ÉDITORIALE ASYMÉTRIQUE DES 3 MOYENS DE CONTACT
            (Sans cartes identiques : Colonne Monumentale Email à gauche 7 cols
             + Double Rangée Éditoriale Téléphone & WhatsApp à droite 5 cols)
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-ivory/20 mb-20 md:mb-28">
          {/* Colonne Gauche (Cols 1-7) : 01 / EMAIL (Pièce maîtresse typographique) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 py-12 md:py-16 lg:pr-12 flex flex-col justify-between border-b lg:border-b-0 border-ivory/20"
          >
            <div>
              <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-ash mb-6">
                <span>01 / Email</span>
                <span>Messagerie directe</span>
              </div>

              <a
                href={`mailto:${contactSection.primaryEmail}`}
                className="group inline-flex flex-wrap items-baseline gap-4 font-serif text-3xl sm:text-5xl md:text-6xl text-ivory hover:italic transition-all duration-300 break-all"
              >
                <span>{contactSection.primaryEmail}</span>
                <ArrowUpRight
                  className="w-7 h-7 sm:w-9 sm:h-9 text-ash group-hover:text-ivory transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                  strokeWidth={1.25}
                />
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-ivory/15 flex flex-wrap items-center gap-8">
              <a
                href={`mailto:${contactSection.primaryEmail}`}
                className="group inline-flex items-center gap-4 bg-ivory text-obsidian px-7 py-4 text-xs tracking-editorial uppercase font-medium hover:bg-ivory/90 transition-all duration-300"
              >
                <span>Envoyer un email</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2.5 text-xs tracking-editorial uppercase text-ivory py-2"
                aria-label="Copier l'adresse email farouzatcha@gmail.com"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-ivory" strokeWidth={1.5} />
                    <span>Adresse copiée</span>
                  </>
                ) : (
                  <>
                    <Copy
                      className="w-3.5 h-3.5 text-ash group-hover:text-ivory transition-colors"
                      strokeWidth={1.5}
                    />
                    <span className="editorial-link">Copier l&apos;adresse</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Colonne Droite (Cols 8-12) : 02 / TÉLÉPHONE & 03 / WHATSAPP */}
          <div className="lg:col-span-5 lg:border-l lg:border-ivory/20 divide-y divide-ivory/20 flex flex-col justify-between">
            {/* Rangée 02 : TÉLÉPHONE */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-10 md:py-12 lg:pl-12 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-ash mb-4">
                <span>02 / Téléphone</span>
                <span>Ligne directe</span>
              </div>

              <a
                href={contactSection.phoneHref}
                className="group inline-flex items-baseline justify-between gap-4 py-2"
              >
                <span className="font-serif text-4xl sm:text-5xl text-ivory group-hover:italic transition-all duration-300 tracking-tight">
                  {contactSection.phone}
                </span>
                <span className="inline-flex items-center gap-2 text-xs tracking-editorial uppercase text-ivory/80 group-hover:text-ivory transition-colors">
                  <span className="editorial-link">Appeler</span>
                  <ArrowUpRight
                    className="w-4 h-4 text-ash group-hover:text-ivory transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </motion.div>

            {/* Rangée 03 : WHATSAPP */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-10 md:py-12 lg:pl-12 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs tracking-editorial uppercase text-ash mb-4">
                <span>03 / WhatsApp</span>
                <span>Discussion instantanée</span>
              </div>

              <a
                href={contactSection.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-2"
              >
                <span className="font-serif text-3xl sm:text-4xl text-ivory group-hover:italic transition-all duration-300 leading-snug">
                  {contactSection.whatsappLabel}
                </span>
                <ArrowUpRight
                  className="w-6 h-6 text-ash group-hover:text-ivory transition-transform duration-300 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                  strokeWidth={1.5}
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ===================================================================
            FOOTER MINIMALISTE & ÉDITORIAL
           =================================================================== */}
        <div className="pt-2 flex flex-col gap-10">
          {/* Ligne supérieure du Footer : Signature, Positionnement, Pays & Liens de contact */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-end justify-between">
            <div className="lg:col-span-7 space-y-3">
              <p className="font-serif text-4xl sm:text-5xl tracking-tight text-ivory leading-none">
                {footer.signature}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-editorial uppercase text-ash">
                <span>{footer.tagline}</span>
                <span aria-hidden="true" className="text-ivory/30">
                  ·
                </span>
                <span className="text-ivory/90">{footer.country}</span>
              </div>
            </div>

            {/* Liens de contact disponibles dans le footer */}
            <nav
              aria-label="Liens de contact directs"
              className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-x-8 gap-y-3 text-xs tracking-editorial uppercase"
            >
              <a
                href={`mailto:${contactSection.primaryEmail}`}
                className="group inline-flex items-center gap-1.5 text-ivory/80 hover:text-ivory transition-colors"
              >
                <span className="editorial-link">Email</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-ash group-hover:text-ivory transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>

              <a
                href={contactSection.phoneHref}
                className="group inline-flex items-center gap-1.5 text-ivory/80 hover:text-ivory transition-colors"
              >
                <span className="editorial-link">{contactSection.phone}</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-ash group-hover:text-ivory transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>

              <a
                href={contactSection.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-ivory/80 hover:text-ivory transition-colors"
              >
                <span className="editorial-link">WhatsApp</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-ash group-hover:text-ivory transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </nav>
          </div>

          {/* Ligne inférieure du Footer : Copyright & Retour en haut */}
          <div className="pt-8 border-t border-ivory/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs tracking-editorial uppercase text-ash">
            <p>{footer.copyright}</p>

            <a
              href="#top"
              className="group inline-flex items-center gap-2.5 text-ivory"
            >
              <span className="editorial-link">Haut de page</span>
              <ArrowUp
                className="w-4 h-4 text-ash group-hover:text-ivory transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
