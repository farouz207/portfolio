# FAROUZ. — Portfolio Éditorial Personnel

> **Direction Artistique :** `EDITORIAL × LUXURY MINIMAL × CREATIVE TECHNOLOGY` (`FULL BLACK`)  
> **Positionnement :** *Digital Creator · Technology · Creative Thinking*  
> **Message central :** *« Je ne cherche pas simplement à maîtriser les outils. Je cherche à découvrir ce qu'il est possible de créer avec eux. »*

---

## 1. Présentation & Direction Artistique

Ce portfolio a été conçu et développé sur mesure pour **Farouz** comme une expérience éditoriale numérique inspirée des magazines contemporains, du design éditorial suisse et de la photographie architecturale monochrome.

### Palette Chromatique (`FULL BLACK`)
- **Fond principal (`obsidian`)** : `#050505`
- **Surfaces secondaires (`charcoal`)** : `#0A0A0A`
- **Blocs & éléments interactifs (`surface`)** : `#111111`
- **Séparateurs & bordures (`hairline`)** : `#252525`
- **Titres (`ivory`)** : `#FFFFFF`
- **Textes secondaires (`ash`)** : `#A0A0A0`

### Typographie
- **Grands titres éditoriaux & citations** : `Instrument Serif`
- **Interface, corps de texte & métadonnées** : `Inter`

---

## 2. Architecture du Projet

```text
├── public/
│   └── images/
│       ├── hero-horizon.jpg              # Architecture monumentale en arrière-plan du Hero
│       ├── bg-philosophy.jpg             # Photographie architecturale — Section Philosophie
│       ├── bg-projects.jpg               # Photographie architecturale — Section Projets
│       ├── bg-process.jpg                # Photographie architecturale — Section Approche
│       ├── bg-skills.jpg                 # Photographie architecturale — Section Compétences
│       ├── bg-about.jpg                  # Photographie architecturale — Section À propos
│       ├── bg-contact.jpg                # Photographie architecturale — Section Contact
│       ├── project-bloom.jpg             # Visuel projet 01 — BLOOM
│       ├── project-flowrish.jpg          # Visuel projet 02 — FLOWRISH
│       └── project-paradoxe.jpg          # Visuel projet 03 — PARADOXE
├── src/
│   ├── app/
│   │   ├── globals.css                   # Styles éditoriaux, grain papier & variables CSS
│   │   ├── layout.tsx                    # Métadonnées SEO, polices & structure racine
│   │   └── page.tsx                      # Assemblage des 7 sections éditoriales
│   ├── components/
│   │   ├── navigation/
│   │   │   └── Navbar.tsx                # Navigation minimaliste + menu mobile plein écran
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx           # Section 01 — Hero architectural & manifeste
│   │   │   ├── PhilosophySection.tsx     # Section 02 — Ma Philosophie
│   │   │   ├── ProjectsSection.tsx       # Section 03 — Mes Projets (3 compositions + Dossier modal)
│   │   │   ├── ProcessSection.tsx        # Section 04 — Ma Façon de Travailler (4 étapes)
│   │   │   ├── SkillsSection.tsx         # Section 05 — Mes Compétences
│   │   │   ├── AboutSection.tsx          # Section 06 — À Propos & Fiche Signalétique
│   │   │   └── ContactSection.tsx        # Section 07 — Contact & Footer minimaliste
│   │   └── ui/
│   │       ├── EditorialIntro.tsx        # Animation d'ouverture typographique
│   │       ├── ParallaxImage.tsx         # Cadre photo N&B avec parallaxe douce
│   │       ├── SectionBackground.tsx     # Arrière-plan photographique monochrome par section
│   │       └── SectionHeader.tsx         # En-tête de section numéroté
│   └── data/
│       └── portfolio.ts                  # SOURCE DE VÉRITÉ UNIQUE (Textes, Projets, Compétences, Contact)
```

---

## 3. Lancer le Projet en Local

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

3. **Compiler pour la production :**
   ```bash
   npm run build
   npm run start
   ```

---

## 4. Guide de Personnalisation Rapide

Toutes les informations du site sont centralisées dans un seul fichier :  
👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**
