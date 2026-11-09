"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionBackground } from "@/components/ui/SectionBackground";

interface EditorialCaseStudyColumnsProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

function EditorialCaseStudyDetails({
  project,
  onOpenDetails,
}: EditorialCaseStudyColumnsProps) {
  return (
    <div className="space-y-8 pt-6 border-t border-ivory/20">
      {/* Problème & Vision en deux colonnes ouvertes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
            Problème identifié
          </span>
          <p className="text-sm sm:text-base text-ivory/90 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="sm:border-l sm:border-ivory/20 sm:pl-6">
          <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
            Vision
          </span>
          <p className="text-sm sm:text-base text-ivory/90 leading-relaxed">
            {project.vision}
          </p>
        </div>
      </div>

      {/* Ma contribution */}
      <div className="pt-6 border-t border-ivory/20">
        <span className="block text-xs tracking-editorial uppercase text-ash mb-3">
          Ma contribution
        </span>
        <ul className="space-y-2">
          {project.contribution.map((item, idx) => (
            <li
              key={idx}
              className="flex items-baseline gap-4 text-sm sm:text-base text-ash leading-relaxed"
            >
              <span className="text-xs text-ivory/60">0{idx + 1}</span>
              <span className="text-ivory/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Domaines explorés & Lien typographique d'ouverture */}
      <div className="pt-6 border-t border-ivory/20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
            Domaines explorés
          </span>
          <p className="text-xs sm:text-sm text-ivory/80 tracking-wide">
            {project.technologies.join("  ·  ")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="group inline-flex items-center gap-2.5 text-xs tracking-editorial uppercase text-ivory shrink-0 py-1"
        >
          <span className="editorial-link">Présentation détaillée</span>
          <ArrowUpRight
            className="w-4 h-4 text-ash group-hover:text-ivory transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const { projectsSection, projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const bloom = projects[0];
  const flowrish = projects[1];
  const paradoxe = projects[2];

  return (
    <section
      id="projets"
      aria-labelledby="projects-heading"
      className="relative py-28 md:py-40 bg-obsidian border-b border-hairline scroll-mt-16 overflow-hidden"
    >
      {/* Photographie architecturale de fond — Création, construction et concrétisation */}
      <SectionBackground
        src={projectsSection.backgroundImage.src}
        alt={projectsSection.backgroundImage.alt}
        variant="ambient-subtle"
        imageOpacityClass="opacity-80"
        objectPositionClass="object-top"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
        <SectionHeader
          number={projectsSection.sectionNumber}
          label={projectsSection.sectionLabel}
          title={projectsSection.title}
          subtitle={projectsSection.subtitle}
        />

        {/* ===================================================================
            PROJET 01 — BLOOM — DEVELOPED
           =================================================================== */}
        <article
          aria-labelledby="project-title-bloom"
          className="pt-4 pb-28 md:pb-36 border-b border-ivory/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Colonne Visuel (Cols 1-6) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div
                onClick={() => setSelectedProject(bloom)}
                data-interactive="true"
                className="cursor-pointer"
              >
                <ParallaxImage
                  src={bloom.image}
                  alt={bloom.imageAlt}
                  caption={bloom.category}
                  statusLabel={`${bloom.title} — ${bloom.statusTag}`}
                  hoverText={bloom.hoverHighlight}
                  aspectClassName="aspect-[4/3]"
                  parallaxOffset={22}
                />
              </div>
            </motion.div>

            {/* Colonne Éditoriale (Cols 7-12) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-6 lg:border-l lg:border-ivory/20 lg:pl-12"
            >
              <div className="mb-8">
                <span className="block text-xs tracking-editorial uppercase text-ash mb-3">
                  {bloom.number} / {bloom.category}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
                  <h3
                    id="project-title-bloom"
                    className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-ivory leading-none"
                  >
                    {bloom.title}
                  </h3>
                  <span className="text-xs tracking-editorial uppercase text-ash">
                    — {bloom.statusTag}
                  </span>
                </div>

                <p className="text-lg sm:text-xl text-ivory font-normal mb-3">
                  {bloom.subtitle}
                </p>
                <p className="text-base text-ivory/80 leading-relaxed">
                  {bloom.summary}
                </p>
              </div>

              <EditorialCaseStudyDetails
                project={bloom}
                onOpenDetails={setSelectedProject}
              />
            </motion.div>
          </div>
        </article>

        {/* ===================================================================
            PROJET 02 — FLOWRISH — IN PROGRESS
           =================================================================== */}
        <article
          aria-labelledby="project-title-flowrish"
          className="py-28 md:py-36 border-b border-ivory/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Colonne Éditoriale à Gauche (Cols 1-6) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 lg:pr-12 lg:border-r lg:border-ivory/20 order-2 lg:order-1"
            >
              <div className="mb-8">
                <span className="block text-xs tracking-editorial uppercase text-ash mb-3">
                  {flowrish.number} / {flowrish.category}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
                  <h3
                    id="project-title-flowrish"
                    className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-ivory leading-none"
                  >
                    {flowrish.title}
                  </h3>
                  <span className="text-xs tracking-editorial uppercase text-ash">
                    — {flowrish.statusTag}
                  </span>
                </div>

                <p className="text-lg sm:text-xl text-ivory font-normal mb-3">
                  {flowrish.subtitle}
                </p>
                <p className="text-base text-ivory/80 leading-relaxed">
                  {flowrish.summary}
                </p>
              </div>

              <EditorialCaseStudyDetails
                project={flowrish}
                onOpenDetails={setSelectedProject}
              />
            </motion.div>

            {/* Colonne Visuel à Droite (Cols 7-12) */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-6 order-1 lg:order-2 lg:pt-8"
            >
              <div
                onClick={() => setSelectedProject(flowrish)}
                data-interactive="true"
                className="cursor-pointer"
              >
                <ParallaxImage
                  src={flowrish.image}
                  alt={flowrish.imageAlt}
                  caption={flowrish.category}
                  statusLabel={`${flowrish.title} — ${flowrish.statusTag}`}
                  hoverText={flowrish.hoverHighlight}
                  aspectClassName="aspect-[4/3]"
                  parallaxOffset={22}
                />
              </div>
            </motion.div>
          </div>
        </article>

        {/* ===================================================================
            PROJET 03 — PARADOXE — CONCEPT
           =================================================================== */}
        <article
          aria-labelledby="project-title-paradoxe"
          className="pt-28 md:pt-36"
        >
          {/* En-tête éditorial monumental */}
          <div className="mb-10">
            <span className="block text-xs tracking-editorial uppercase text-ash mb-3">
              {paradoxe.number} / {paradoxe.category}
            </span>

            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-4">
              <h3
                id="project-title-paradoxe"
                className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-ivory leading-none"
              >
                {paradoxe.title}
              </h3>
              <span className="text-xs tracking-editorial uppercase text-ash">
                — {paradoxe.statusTag}
              </span>
            </div>

            <p className="text-lg sm:text-xl text-ivory font-normal max-w-2xl">
              {paradoxe.subtitle}
            </p>
          </div>

          {/* Visuel Panoramique 21:9 */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(paradoxe)}
            data-interactive="true"
            className="cursor-pointer mb-12"
          >
            <ParallaxImage
              src={paradoxe.image}
              alt={paradoxe.imageAlt}
              caption={paradoxe.category}
              statusLabel={`${paradoxe.title} — ${paradoxe.statusTag}`}
              hoverText={paradoxe.hoverHighlight}
              aspectClassName="aspect-[16/9] md:aspect-[21/9]"
              parallaxOffset={28}
            />
          </motion.div>

          {/* Grille asymétrique ouverte sous le visuel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 pt-6 border-t border-ivory/20">
              <span className="block text-xs tracking-editorial uppercase text-ash mb-3">
                Note d&apos;intention
              </span>
              <p className="font-serif italic text-2xl sm:text-3xl text-ivory leading-snug">
                « {paradoxe.summary} »
              </p>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-ivory/20 lg:pl-12">
              <EditorialCaseStudyDetails
                project={paradoxe}
                onOpenDetails={setSelectedProject}
              />
            </div>
          </div>
        </article>
      </div>

      {/* =====================================================================
          DOSSIER ÉDITORIAL (MODAL DE PRÉSENTATION DÉTAILLÉE)
         ===================================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-dossier-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-obsidian border border-hairline p-7 sm:p-12 md:p-14 relative my-auto"
            >
              {/* En-tête du dossier */}
              <div className="flex items-center justify-between gap-4 border-b border-hairline pb-5 mb-8">
                <span className="text-xs tracking-editorial uppercase text-ash">
                  {selectedProject.number} / {selectedProject.category}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fermer la présentation"
                  className="inline-flex items-center gap-2 text-xs tracking-editorial uppercase text-ash hover:text-ivory transition-colors"
                >
                  <span>Fermer</span>
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Titre & Statut discret */}
              <div className="mb-10">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
                  <h4
                    id="modal-project-title"
                    className="font-serif text-5xl sm:text-6xl text-ivory tracking-tight leading-none"
                  >
                    {selectedProject.title}
                  </h4>
                  <span className="text-xs tracking-editorial uppercase text-ash">
                    — {selectedProject.statusTag}
                  </span>
                </div>
                <p className="text-lg sm:text-xl text-ivory/90 font-normal">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Colonnes éditoriales Problème / Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-hairline mb-8">
                <div>
                  <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
                    Problème ou besoin identifié
                  </span>
                  <p className="text-base text-ivory/90 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="md:border-l md:border-hairline md:pl-8">
                  <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
                    Vision
                  </span>
                  <p className="text-base text-ivory/90 leading-relaxed">
                    {selectedProject.vision}
                  </p>
                </div>
              </div>

              {/* Contribution & Domaines */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-hairline">
                <div className="md:col-span-7 space-y-3">
                  <span className="block text-xs tracking-editorial uppercase text-ash">
                    Ma contribution
                  </span>
                  <ul className="space-y-2.5">
                    {selectedProject.contribution.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-base text-ivory/90 flex items-baseline gap-4 leading-relaxed"
                      >
                        <span className="text-xs text-ash">0{idx + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 md:border-l md:border-hairline md:pl-8 space-y-5">
                  <div>
                    <span className="block text-xs tracking-editorial uppercase text-ash mb-2">
                      Technologies & domaines explorés
                    </span>
                    <p className="text-sm text-ivory/90 leading-relaxed">
                      {selectedProject.technologies.join(" · ")}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hairline">
                    <span className="block text-xs tracking-editorial uppercase text-ash mb-1">
                      État d&apos;avancement
                    </span>
                    <p className="text-sm text-ash">
                      {selectedProject.statusDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pied du modal */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-ash">
                  FAROUZ. — ÉTUDE DE CAS {selectedProject.number}
                </span>

                {selectedProject.externalUrl ? (
                  <a
                    href={selectedProject.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-xs tracking-editorial uppercase text-ivory"
                  >
                    <span className="editorial-link">Accéder au projet</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="group inline-flex items-center gap-2.5 text-xs tracking-editorial uppercase text-ivory"
                  >
                    <span className="editorial-link">
                      Discuter de ce projet
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
