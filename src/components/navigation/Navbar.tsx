"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = [
        "philosophie",
        "projets",
        "approche",
        "competences",
        "a-propos",
        "contact",
      ];
      const scrollPosition = window.scrollY + 260;

      if (window.scrollY < 220) {
        setActiveSection("");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian/85 backdrop-blur-md border-b border-hairline"
            : "bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-transparent border-b border-ivory/10"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 h-20 flex items-center justify-between">
          {/* Signature */}
          <a
            href="#top"
            className="font-serif text-2xl sm:text-3xl tracking-tight text-ivory hover:opacity-80 transition-opacity"
            aria-label="FAROUZ. — Accueil"
          >
            {PORTFOLIO_DATA.identity.signature}
          </a>

          {/* Navigation Desktop */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {PORTFOLIO_DATA.navigation.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 text-xs tracking-editorial uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-ivory font-medium"
                      : "text-ivory/70 hover:text-ivory"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-line"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute left-0 right-0 bottom-0 h-[1px] bg-ivory"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Lien typographique "Collaborer" avec flèche animée + Menu Mobile */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 text-xs tracking-editorial uppercase text-ivory group py-1"
            >
              <span className="editorial-link">Collaborer</span>
              <ArrowUpRight
                className="w-4 h-4 text-ash group-hover:text-ivory transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"
              }
              className="md:hidden inline-flex items-center justify-center w-10 h-10 text-ivory hover:opacity-75 transition-opacity"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Plein Écran */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian pt-24 pb-10 px-6 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="border-t border-hairline pt-6">
              <nav
                aria-label="Navigation mobile"
                className="flex flex-col divide-y divide-hairline border-b border-hairline"
              >
                {PORTFOLIO_DATA.navigation.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.08 }}
                    className="py-5 flex items-center justify-between group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs text-ash">{item.index}</span>
                      <span className="font-serif text-4xl text-ivory group-hover:italic transition-all">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-ash group-hover:text-ivory transition-colors"
                      strokeWidth={1.5}
                    />
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="pt-8 space-y-4">
              <p className="font-serif italic text-xl text-ivory/90 leading-relaxed">
                « {PORTFOLIO_DATA.identity.centralMessage} »
              </p>
              <div className="flex items-center justify-between text-xs text-ash pt-4 border-t border-hairline">
                <span>{PORTFOLIO_DATA.meta.location}</span>
                <span>{PORTFOLIO_DATA.meta.edition}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
