export type Experience = {
  id: string;
  role: string;
  org: string;
  orgHref?: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "acreativestudios",
    role: "Electronics & IoT — Freelance",
    org: "acreativestudios",
    location: "Delhi, India",
    period: "Feb 2025 — Present",
    bullets: [
      "Built Node.js backend services and contributed to Next.js frontend architecture for hardware-integrated product systems.",
      "Developed integration flows between backend logic, AI-enabled workflows, and user-facing product interfaces.",
      "Worked across product layers instead of a single stack segment, from APIs and data handling to UI delivery."
    ]
  },
  {
    id: "arista-vault",
    role: "Web Development Intern",
    org: "Arivation Fashiontech Pvt. Ltd. (Arista Vault)",
    location: "IIIT Delhi Innovation & Incubation Centre",
    period: "Mar 2025 — Jun 2025",
    bullets: [
      "Contributed to web development for a fashion-tech ecommerce platform, shipping frontend features with JavaScript-based web technologies.",
      "Worked on feature implementation, interface cleanup, and day-to-day product development tasks in a startup environment.",
      "Supported backend API development, server-side logic, and debugging for product features in an early-stage environment."
    ]
  },
  {
    id: "agnus-media",
    role: "Web Developer — Freelance",
    org: "Agnus Media",
    location: "Delhi, India (Remote)",
    period: "May 2024 — Jul 2024",
    bullets: [
      "Led end-to-end development of agnusmedia.com, a dynamic video-first personal branding site for entrepreneurs and VCs.",
      "Designed landing pages and showcase pages for the studio's client work."
    ]
  },
  {
    id: "sponsogram",
    role: "Backend Developer Intern",
    org: "Sponsogram",
    location: "Delhi, India (Remote)",
    period: "Mar 2024 — May 2024",
    bullets: [
      "Played a key role in building the backend of the platform using Next.js."
    ]
  }
];
