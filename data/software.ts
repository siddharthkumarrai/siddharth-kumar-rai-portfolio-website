export type SoftwareGroup = {
  category: string;
  items: string[];
};

// Pinned repositories — shown as cards in a two-column GitHub-style layout.
export type Repo = {
  owner: string;
  repo: string;
  name: string;
  href: string;
  description: string;
  badge?: string;
  language?: string;
  languageColor?: string;
  stars?: number;
  forks?: number;
};

export const repos: Repo[] = [
  {
    owner: "siddharthkumarrai",
    repo: "LMS",
    name: "siddharthkumarrai/LMS",
    href: "https://github.com/siddharthkumarrai/LMS",
    description: "Agentic AI Learning Management System with a Python/FastAPI tutor service and Next.js UI.",
    badge: "Framework",
    language: "TypeScript",
    languageColor: "bg-blue-600",
    stars: 11,
    forks: 4
  },
  {
    owner: "siddharthkumarrai",
    repo: "Agentic-AI-MCP",
    name: "siddharthkumarrai/Agentic-AI-MCP",
    href: "https://github.com/siddharthkumarrai/Agentic-AI-MCP",
    description: "Model Context Protocol server patterns for connecting AI tools, browsers, and automation flows.",
    badge: "Tool",
    language: "TypeScript",
    languageColor: "bg-blue-600",
    stars: 1,
    forks: 0
  },
  {
    owner: "siddharthkumarrai",
    repo: "sidd_portfolio",
    name: "siddharthkumarrai/sidd_portfolio",
    href: "https://github.com/siddharthkumarrai/sidd_portfolio",
    description: "Earlier portfolio build that informed the current two-column Next.js redesign.",
    badge: "Website",
    language: "EJS",
    languageColor: "bg-emerald-600",
    stars: 1,
    forks: 0
  },
  {
    owner: "siddharthkumarrai",
    repo: "weather_web_application",
    name: "siddharthkumarrai/weather_web_application",
    href: "https://github.com/siddharthkumarrai/weather_web_application",
    description: "Current weather reporting app built with React and Vite.",
    badge: "Website",
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    stars: 1,
    forks: 0
  },
  {
    owner: "siddharthkumarrai",
    repo: "siddharth_Airbnb_Clone",
    name: "siddharthkumarrai/siddharth_Airbnb_Clone",
    href: "https://github.com/siddharthkumarrai/siddharth_Airbnb_Clone",
    description: "Airbnb-inspired clone showcasing UI and booking-flow practice.",
    badge: "Framework",
    language: "JavaScript",
    languageColor: "bg-yellow-500",
    stars: 1,
    forks: 0
  },
  {
    owner: "siddharthkumarrai",
    repo: "parallex_effect-_websites",
    name: "siddharthkumarrai/parallex_effect-_websites",
    href: "https://github.com/siddharthkumarrai/parallex_effect-_websites",
    description: "Parallax-effect experimental site focused on motion and frontend presentation.",
    badge: "Website",
    language: "HTML",
    languageColor: "bg-orange-600",
    stars: 1,
    forks: 0
  }
];
