import React from "react";
import { EditorialIntro } from "@/components/ui/EditorialIntro";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <EditorialIntro />
      <Navbar />
      <main className="relative bg-obsidian text-ivory">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — MA PHILOSOPHIE */}
        <PhilosophySection />

        {/* SECTION 03 — MES PROJETS */}
        <ProjectsSection />

        {/* SECTION 04 — MA FAÇON DE TRAVAILLER */}
        <ProcessSection />

        {/* SECTION 05 — MES COMPÉTENCES */}
        <SkillsSection />

        {/* SECTION 06 — À PROPOS */}
        <AboutSection />
      </main>

      {/* SECTION 07 — CONTACT & FOOTER */}
      <ContactSection />
    </>
  );
}

