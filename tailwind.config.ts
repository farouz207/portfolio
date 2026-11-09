import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505", // Fond principal
        charcoal: "#0A0A0A", // Surfaces secondaires
        surface: "#111111",  // Blocs et éléments interactifs
        hairline: "#252525", // Séparateurs et bordures
        ivory: "#FFFFFF",    // Titres (Blanc pur)
        ash: "#A0A0A0",      // Textes secondaires
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.1em",
        wideEditorial: "0.14em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
