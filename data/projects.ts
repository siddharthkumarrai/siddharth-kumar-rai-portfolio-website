export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  publisher?: string;
  publisherHref?: string;
  eyebrow?: string;
  image?: string;
  tag?: string; // e.g. "Featured", small eyebrow label
  stack: string[];
  tldr: string;
  bullets: string[];
  links: ProjectLink[];
};

// Add a new project by pushing an object here — the UI updates automatically.
export const projects: Project[] = [
  {
    id: "skillslms",
    title: "SkillsLMS — Agentic AI Learning Management System",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Introducing",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866199/Screenshot_2026-08-04_232601_rvrt8f.png",
    tag: "Featured",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "LangGraph", "RAG", "MongoDB", "Razorpay"],
    tldr:
      "A full-stack learning management system with a multi-agent GenAI tutor and a clean product shell that scales across student and instructor workflows.",
    bullets: [
      "Built the LMS front end around reusable Next.js components so new sections, dashboards, and product pages can be added without changing the overall shell.",
      "Designed the AI tutor service in Python and FastAPI with LangGraph orchestration and RAG-style retrieval so the assistant can evolve independently from the main app.",
      "Integrated auth, payments, and media handling in a way that keeps the product maintainable as features expand."
    ],
    links: [
      { label: "Live Demo", href: "https://skillslms.vercel.app/" },
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/LMS" }
    ]
  },
  {
    id: "lumenskart",
    title: "Lumenskart — Commerce Storefront with CMS",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Introducing",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866439/Screenshot_2026-08-04_233009_blxwd2.png",
    tag: "Featured",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity"],
    tldr:
      "A polished ecommerce storefront with product browsing, content-managed pages, and a checkout-ready frontend designed to feel production-native.",
    bullets: [
      "Built the storefront in Next.js with reusable UI sections so catalog, landing, and content pages stay consistent as products grow.",
      "Modeled the content flow around CMS-driven updates so merchandised pages can be changed without redeploying the core app."
    ],
    links: [
      { label: "Live Demo", href: "https://lumenskart.vercel.app/" },
      { label: "GitHub", href: "https://github.com/siddharthkumarrai" }
    ]
  },
  {
    id: "portfolio",
    title: "Matt-Inspired Portfolio Shell",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Introducing",
    image: "/projects/demo-project.svg",
    tag: "Website",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tldr:
      "A two-column portfolio system that separates a fixed profile rail from a scrollable editorial content column, tuned for content-first presentation.",
    bullets: [
      "Structured the page so the left rail stays fixed while the right side handles all vertical scrolling.",
      "Built the sections as data-driven blocks, making it easy to add, reorder, or restyle content without reworking the shell."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/sidd_portfolio" },
      { label: "Preview", href: "https://siddharth-portfolio.vercel.app/" }
    ]
  },
  {
    id: "weather-app",
    title: "Weather Web Application",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Featured",
    image: "/projects/demo-project.svg",
    tag: "Website",
    stack: ["React", "Vite", "JavaScript", "Weather API"],
    tldr:
      "A lightweight weather dashboard for checking current conditions and forecasts with a clean, fast interface optimized for quick lookups.",
    bullets: [
      "Kept the interface intentionally compact so the core weather state is visible immediately on load.",
      "Used a simple API-driven render path that is easy to extend with location search, alerts, or saved cities."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/weather_web_application" }
    ]
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Featured",
    image: "/projects/demo-project.svg",
    tag: "Framework",
    stack: ["JavaScript", "UI Design", "Responsive Layout"],
    tldr:
      "A booking-style clone focused on layout fidelity, card density, and reservation-flow practice for production-like frontend work.",
    bullets: [
      "Recreated the visual structure of a rental marketplace with a strong emphasis on spacing and component consistency.",
      "Kept the experience responsive so the browsing flow remains usable across mobile and desktop screens."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/siddharth_Airbnb_Clone" }
    ]
  }
];
