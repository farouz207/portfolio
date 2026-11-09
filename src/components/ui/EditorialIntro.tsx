"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Gère l'indicateur de progression de lecture en haut de page
 * ainsi qu'un curseur interactif discret sur ordinateur (pointeur fin).
 * Aucun écran de chargement bloquant : l'animation d'ouverture se fait
 * directement dans le Hero par révélation photographique et typographique.
 */
export function EditorialIntro() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, [role='button'], [data-interactive='true']"
        );
        setIsHoveringInteractive(Boolean(interactive));
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Barre de progression du défilement (Scroll Progress Indicator) */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: prefersReducedMotion ? scrollYProgress : scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-ivory origin-left z-[60] pointer-events-none"
      />

      {/* Curseur discret sur desktop uniquement */}
      {hasFinePointer && !prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          animate={{
            x: cursorPos.x - (isHoveringInteractive ? 20 : 6),
            y: cursorPos.y - (isHoveringInteractive ? 20 : 6),
            width: isHoveringInteractive ? 40 : 12,
            height: isHoveringInteractive ? 40 : 12,
            opacity: cursorPos.x < 0 ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 28,
            mass: 0.4,
          }}
          className="fixed top-0 left-0 z-[70] rounded-full border border-ivory/60 bg-ivory/5 pointer-events-none mix-blend-difference hidden lg:block"
        />
      )}
    </>
  );
}
