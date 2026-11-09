/**
 * ============================================================================
 * CONFIGURATION CENTRALISÉE DU PORTFOLIO — FAROUZ.
 * ============================================================================
 * Direction Artistique : EDITORIAL × LUXURY MINIMAL × CREATIVE TECHNOLOGY
 * Modifiez uniquement ce fichier pour mettre à jour les textes, les projets,
 * les images, les compétences et vos coordonnées de contact.
 */

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  statusTag: "DEVELOPED" | "IN PROGRESS" | "CONCEPT";
  subtitle: string;
  category: string;
  statusDescription: string;
  summary: string;
  problem: string;
  vision: string;
  contribution: string[];
  technologies: string[];
  hoverHighlight: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  layoutVariant: "asymmetric-left" | "inverted-diptych" | "cinematic-monolith";
  externalUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  shortAction: string;
  description: string;
  deliverable: string;
}

export interface SkillDomain {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface ContactChannel {
  id: "email" | "phone" | "whatsapp";
  label: string;
  value: string;
  actionLabel: string;
  href: string;
  external?: boolean;
}

export const PORTFOLIO_DATA = {
  meta: {
    siteTitle: "FAROUZ. — Digital Creator · Technology · Creative Thinking",
    siteDescription:
      "Portfolio éditorial de Farouz — Créateur de solutions numériques, développeur et entrepreneur à la rencontre de la technologie, de la créativité et de l'intelligence artificielle.",
    edition: "ÉDITION 2026",
    location: "Cotonou, Bénin",
    institution: "UCAO-UUC de Cotonou — Informatique & Management (IIM1)",
  },

  identity: {
    signature: "FAROUZ.",
    name: "Farouz",
    role: "Créateur de solutions numériques & Développeur créatif",
    centralMessage:
      "Je ne cherche pas simplement à maîtriser les outils. Je cherche à découvrir ce qu'il est possible de créer avec eux.",
    workflowChain: [
      "OBSERVER",
      "COMPRENDRE",
      "IMAGINER",
      "EXPÉRIMENTER",
      "CONSTRUIRE",
      "AMÉLIORER",
    ],
    valuePropositions: [
      {
        audience: "Recruteurs & Équipes Tech",
        statement:
          "Un profil hybride capable d'apprendre vite, de prototyper avec rigueur et de relier le code aux enjeux réels d'un produit.",
      },
      {
        audience: "Entreprises & Studios",
        statement:
          "Une sensibilité produit et visuelle alliée à l'expérimentation technique (Web, Mobile, IA & Automatisation).",
      },
      {
        audience: "Entrepreneurs & Partenaires",
        statement:
          "Une capacité à structurer une idée brute, définir un concept clair et le transformer en solution numérique concrète.",
      },
    ],
  },

  navigation: [
    { index: "01", label: "Philosophie", href: "#philosophie" },
    { index: "02", label: "Projets", href: "#projets" },
    { index: "03", label: "Approche", href: "#approche" },
    { index: "04", label: "Compétences", href: "#competences" },
    { index: "05", label: "À propos", href: "#a-propos" },
    { index: "06", label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  hero: {
    eyebrow: "DIGITAL CREATOR · TECHNOLOGY · CREATIVE THINKING",
    titleLine1: "Je ne me contente pas de penser aux possibilités.",
    titleLine2: "Je cherche à les construire.",
    introduction:
      "Je suis Farouz. Créateur de solutions numériques, passionné par la technologie et les idées qui peuvent devenir quelque chose de concret.",
    primaryCta: {
      label: "Explorer mes projets",
      href: "#projets",
    },
    secondaryCta: {
      label: "Me contacter",
      href: "#contact",
    },
    backgroundImage: {
      src: "/images/hero-horizon.jpg",
      alt: "Architecture futuriste monumentale minimaliste ouvrant sur un horizon lumineux",
    },
  },

  philosophy: {
    sectionNumber: "01",
    sectionLabel: "PHILOSOPHIE & VISION",
    title: "Tout commence par une question.",
    subtitle: "Et si on pouvait faire autrement ?",
    lead: "Je suis attiré par les problèmes, les idées et les possibilités qu'offre la technologie.",
    paragraphs: [
      "J'aime observer, comprendre, remettre en question l'existant et imaginer de nouvelles façons de faire.",
      "Mon processus n'est pas simplement de trouver une idée et de l'exécuter. C'est de chercher ce qui pourrait être amélioré, de connecter des concepts différents et de transformer une intuition en une solution numérique concrète.",
    ],
    highlightQuote:
      "Je pense en possibilités. Je construis par expérimentation.",
    backgroundImage: {
      src: "/images/bg-philosophy.jpg",
      alt: "Architecture conceptuelle monumentale en béton brut avec puits de lumière naturelle",
    },
    pillars: [
      {
        number: "01",
        title: "Curiosité transversale",
        description:
          "Explorer plusieurs domaines — développement, intelligence artificielle, design produit et stratégie — pour faire émerger des réponses pertinentes.",
      },
      {
        number: "02",
        title: "Esprit de conception",
        description:
          "Ne jamais réduire un projet à de simples lignes de code : comprendre d'abord l'usage, le besoin humain et la cohérence d'ensemble.",
      },
      {
        number: "03",
        title: "Apprentissage par l'action",
        description:
          "Tester, prototyper et confronter rapidement les idées au réel afin de progresser à chaque itération.",
      },
    ],
  },

  projectsSection: {
    sectionNumber: "02",
    sectionLabel: "PROJETS SÉLECTIONNÉS",
    title: "Des idées qui prennent forme.",
    subtitle:
      "Trois études illustrant ma démarche : de l'identité de marque et des produits numériques jusqu'aux systèmes logiciels et à l'intelligence artificielle.",
    backgroundImage: {
      src: "/images/bg-projects.jpg",
      alt: "Galerie architecturale contemporaine minimaliste en noir et blanc",
    },
  },

  projects: [
    {
      id: "bloom",
      number: "01",
      title: "BLOOM",
      statusTag: "DEVELOPED",
      subtitle: "Marque de développement personnel et produits numériques.",
      category: "BRANDING · DIGITAL PRODUCTS · MARKETING",
      statusDescription: "Projet développé — Identité et produits numériques réalisés.",
      summary:
        "Une marque née d'une conviction : l'évolution personnelle commence de l'intérieur. Bloom structure un univers de marque et des produits digitaux autour de la confiance en soi et de la progression individuelle.",
      problem:
        "Accompagner l'évolution individuelle et la discipline personnelle à travers des outils numériques structurés, accessibles et portés par une identité forte.",
      vision:
        "Bâtir une marque cohérente où le design éditorial, le contenu à haute valeur et les produits digitaux s'unissent pour guider une progression concrète.",
      contribution: [
        "Création de l'identité visuelle et du positionnement de marque",
        "Conception et réalisation des produits numériques",
        "Définition de la stratégie de lancement et de commercialisation",
      ],
      technologies: [
        "Identité de marque",
        "Produits digitaux",
        "Landing pages",
        "Marketing digital",
      ],
      hoverHighlight: "Lire l'étude de cas complète",
      image: "/images/project-bloom.jpg",
      imageAlt: "BLOOM — Direction artistique et produits numériques",
      imageCaption: "01 / BLOOM — DEVELOPED",
      layoutVariant: "asymmetric-left",
      externalUrl: "",
    },
    {
      id: "flowrish",
      number: "02",
      title: "FLOWRISH",
      statusTag: "IN PROGRESS",
      subtitle:
        "Écosystème de solutions numériques pour entrepreneurs, avec CRM en développement.",
      category: "BUSINESS · PRODUCT DESIGN · CRM",
      statusDescription: "En développement — Architecture produit et CRM en cours.",
      summary:
        "Imaginer des outils capables d'aider les entrepreneurs à mieux organiser et développer leurs activités au sein d'un environnement numérique cohérent.",
      problem:
        "Les entrepreneurs dispersent souvent leur gestion quotidienne entre de multiples outils déconnectés, perdant en visibilité sur leurs clients et leurs opérations.",
      vision:
        "Concevoir un écosystème numérique unifié destiné aux entrepreneurs et aux entreprises, articulé autour d'un système de gestion et d'un CRM central.",
      contribution: [
        "Analyse des besoins opérationnels et modélisation des flux métiers",
        "Product Design : conception de l'expérience et de l'architecture fonctionnelle",
        "Développement progressif du système de gestion et du noyau CRM",
      ],
      technologies: [
        "Product Design",
        "Architecture CRM",
        "Développement Web & Logiciel",
        "Automatisation",
      ],
      hoverHighlight: "Explorer l'architecture du projet",
      image: "/images/project-flowrish.jpg",
      imageAlt: "FLOWRISH — Écosystème numérique et CRM pour entrepreneurs",
      imageCaption: "02 / FLOWRISH — IN PROGRESS",
      layoutVariant: "inverted-diptych",
      externalUrl: "",
    },
    {
      id: "paradoxe",
      number: "03",
      title: "PARADOXE",
      statusTag: "CONCEPT",
      subtitle:
        "Concept de studio d'animation utilisant l'intelligence artificielle et plusieurs agents.",
      category: "ARTIFICIAL INTELLIGENCE · STORYTELLING · CREATIVE TECHNOLOGY",
      statusDescription: "Concept en développement — Recherche d'architecture multi-agents IA.",
      summary:
        "Explorer les possibilités de l'intelligence artificielle dans la création audiovisuelle à travers un studio d'animation orchestré par plusieurs agents IA.",
      problem:
        "La production d'animation traditionnelle requiert des ressources lourdes qui freinent l'expérimentation d'univers narratifs indépendants et ambitieux.",
      vision:
        "Structurer un pipeline créatif où plusieurs agents IA spécialisés collaborent à la conception d'un univers narratif, à la création des personnages et à la production d'épisodes animés.",
      contribution: [
        "Conception du modèle d'orchestration multi-agents IA appliqué à la narration",
        "Direction créative de l'univers narratif et définition des personnages",
        "Expérimentation des outils d'IA générative pour le workflow d'animation",
      ],
      technologies: [
        "Intelligence artificielle",
        "Systèmes multi-agents",
        "Expérimentation technologique",
        "Storytelling",
      ],
      hoverHighlight: "Découvrir le concept narratif & IA",
      image: "/images/project-paradoxe.jpg",
      imageAlt: "PARADOXE — Concept de studio d'animation par agents IA",
      imageCaption: "03 / PARADOXE — CONCEPT",
      layoutVariant: "cinematic-monolith",
      externalUrl: "",
    },
  ] satisfies ProjectItem[],

  processSection: {
    sectionNumber: "03",
    sectionLabel: "MA FAÇON DE TRAVAILLER",
    title: "Comment je transforme une idée.",
    subtitle:
      "Un cheminement intellectuel et créatif en six temps, de la première observation jusqu'à l'amélioration continue du produit.",
    backgroundImage: {
      src: "/images/bg-process.jpg",
      alt: "Perspective architecturale aux lignes géométriques répétitives évoquant la méthode et la progression",
    },
    steps: [
      {
        number: "01",
        title: "OBSERVER",
        shortAction: "Comprendre le problème avant de chercher une solution.",
        description:
          "Analyser le contexte, écouter les usages et repérer les frictions réelles avant d'envisager la moindre piste technique.",
        deliverable: "Diagnostic",
      },
      {
        number: "02",
        title: "COMPRENDRE",
        shortAction: "Saisir l'essence du besoin.",
        description:
          "Décortiquer les enjeux humains et fonctionnels pour définir précisément ce qui mérite d'être résolu.",
        deliverable: "Cadrage",
      },
      {
        number: "03",
        title: "IMAGINER",
        shortAction: "Explorer plusieurs possibilités et penser différemment.",
        description:
          "Connecter des idées issues de différents domaines afin de faire émerger un concept original et cohérent.",
        deliverable: "Concept",
      },
      {
        number: "04",
        title: "EXPÉRIMENTER",
        shortAction: "Tester, apprendre, construire et remettre en question.",
        description:
          "Confronter rapidement l'idée aux technologies par le prototypage et valider ce qui fonctionne réellement.",
        deliverable: "Prototype",
      },
      {
        number: "05",
        title: "CONSTRUIRE",
        shortAction: "Donner une forme concrète à la vision.",
        description:
          "Développer l'architecture, soigner les détails de l'interface et transformer le concept en produit fonctionnel.",
        deliverable: "Réalisation",
      },
      {
        number: "06",
        title: "AMÉLIORER",
        shortAction: "Transformer une première version en une solution plus aboutie.",
        description:
          "Affiner l'expérience, corriger les limites et faire évoluer la solution avec exigence.",
        deliverable: "Évolution",
      },
    ] satisfies ProcessStep[],
  },

  skillsSection: {
    sectionNumber: "04",
    sectionLabel: "DOMAINES & COMPÉTENCES",
    title: "Les domaines qui nourrissent ma créativité.",
    subtitle:
      "Un croisement entre le développement logiciel, l'exploration technologique et la conception entrepreneuriale.",
    backgroundImage: {
      src: "/images/bg-skills.jpg",
      alt: "Espace architectural minimaliste contemporain évoquant la précision et l'innovation",
    },
    domains: [
      {
        id: "developpement",
        index: "01",
        title: "DÉVELOPPEMENT",
        subtitle: "Web, Logiciel & Mobile",
        description:
          "Les langages et outils avec lesquels je structure la logique applicative et construis des interfaces.",
        items: ["HTML / CSS", "JavaScript", "PHP", "Python", "Flutter"],
      },
      {
        id: "technologie",
        index: "02",
        title: "TECHNOLOGIE",
        subtitle: "IA & Innovation Produit",
        description:
          "Les leviers technologiques que j'explore pour automatiser, expérimenter et inventer de nouveaux usages.",
        items: [
          "Intelligence artificielle",
          "Automatisation",
          "Conception de produits numériques",
          "Expérimentation technologique",
        ],
      },
      {
        id: "entrepreneuriat",
        index: "03",
        title: "ENTREPRENEURIAT",
        subtitle: "Marque & Stratégie",
        description:
          "La dimension produit et stratégique indispensable pour transformer une idée en projet viable.",
        items: [
          "Marketing digital",
          "Landing pages",
          "Conception de produits digitaux",
          "Identité de marque",
        ],
      },
    ] satisfies SkillDomain[],
  },

  aboutSection: {
    sectionNumber: "05",
    sectionLabel: "À PROPOS",
    title: "Un esprit curieux, une ambition de construire.",
    lead: "Étudiant en Informatique & Management (IIM1) à l'UCAO-UUC de Cotonou, je développe mes compétences à la croisée de l'informatique, de l'entrepreneuriat et de l'intelligence artificielle.",
    paragraphs: [
      "Je considère chaque projet comme une occasion d'apprendre, d'expérimenter et de repousser les limites de ce que je sais faire.",
      "Je suis particulièrement intéressé par les projets qui demandent de réfléchir, de créer et de trouver des solutions différentes.",
    ],
    highlightQuote:
      "Je préfère une idée imparfaite que l'on construit à une grande idée qui reste sur papier.",
    backgroundImage: {
      src: "/images/bg-about.jpg",
      alt: "Horizon architectural monumental avec silhouette contemplative évoquant le chemin parcouru et l'ambition",
    },
    specs: [
      {
        label: "Formation",
        value: "Informatique & Management (IIM1)",
        detail: "UCAO-UUC de Cotonou",
      },
      {
        label: "Positionnement",
        value: "Technologie × Créativité × Entrepreneuriat",
        detail: "Créateur de solutions numériques",
      },
      {
        label: "Axes d'exploration",
        value: "Développement Web, Logiciel & IA",
        detail: "Conception & prototypage",
      },
      {
        label: "Localisation",
        value: "Cotonou, Bénin",
        detail: "Collaborations locales & à distance",
      },
    ],
  },

  contactSection: {
    sectionNumber: "06",
    sectionLabel: "CONTACT",
    title: "Une idée en tête ? Construisons quelque chose ensemble.",
    subtitle:
      "Que vous soyez une entreprise, un entrepreneur ou un porteur de projet, je suis ouvert aux discussions, aux collaborations et aux nouvelles opportunités.",
    primaryEmail: "farouzatcha@gmail.com",
    phone: "0148816078",
    phoneHref: "tel:0148816078",
    whatsappUrl: "https://wa.me/qr/MPFFH3SVKEYYH1",
    whatsappLabel: "Me contacter sur WhatsApp",
    backgroundImage: {
      src: "/images/bg-contact.jpg",
      alt: "Architecture monumentale ouverte sur la lumière et de nouvelles perspectives",
    },
    channels: [
      {
        id: "email",
        label: "Email",
        value: "farouzatcha@gmail.com",
        actionLabel: "Envoyer un email",
        href: "mailto:farouzatcha@gmail.com",
        external: false,
      },
      {
        id: "phone",
        label: "Téléphone",
        value: "0148816078",
        actionLabel: "Appeler directement",
        href: "tel:0148816078",
        external: false,
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        value: "Me contacter sur WhatsApp",
        actionLabel: "Ouvrir WhatsApp",
        href: "https://wa.me/qr/MPFFH3SVKEYYH1",
        external: true,
      },
    ] satisfies ContactChannel[],
  },

  footer: {
    signature: "FAROUZ.",
    tagline: "DIGITAL CREATOR · TECHNOLOGY · CREATIVE THINKING",
    country: "BENIN",
    copyright: "© 2026 — ALL RIGHTS RESERVED.",
  },
} as const;
