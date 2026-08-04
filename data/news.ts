export type NewsItem = {
  id: string;
  text: string;
  date: string;
  image?: string;
  href?: string;
};

// Short, dated updates. Add a new entry at the top whenever something ships.
export const news: NewsItem[] = [
  {
    id: "skillslms-launch",
    text: "Shipped SkillsLMS, a full-stack agentic LMS with a LangGraph + RAG tutoring service.",
    date: "Jul 2026",
    image: "/projects/skillslms.png",
    href: "https://skillslms.vercel.app/"
  },
  {
    id: "lumenskart-launch",
    text: "Built and deployed Lumenskart, a production-style Next.js ecommerce storefront with an admin CMS.",
    date: "Jun 2026",
    image: "/projects/lumenskart.png"
  },
  {
    id: "iot-freelance",
    text: "Started freelancing on Electronics & IoT product systems at acreativestudios.",
    date: "Feb 2025",
    image: "/avatar.jpg"
  },
  {
    id: "arista-vault",
    text: "Joined Arivation Fashiontech (Arista Vault) as a Web Development Intern via the IIIT Delhi Incubation Centre.",
    date: "Mar 2025",
    image: "/avatar.jpg"
  },
  {
    id: "arista-vaulht",
    text: "Joined Arivation Fashiontech (Arista Vault) as a Web Development Intern via the IIIT Delhi Incubation Centre.",
    date: "Mar 2025",
    image: "/avatar.jpg"
  },
  {
    id: "arista-va1jult",
    text: "Joined Arivation Fashiontech (Arista Vault) as a Web Development Intern via the IIIT Delhi Incubation Centre.",
    date: "Mar 2025",
    image: "/avatar.jpg"
  }
];
