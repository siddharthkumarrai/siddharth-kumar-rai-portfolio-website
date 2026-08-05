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
    id: "humanoid-robot",
    text: "Building a 16-Axis Humanoid Robot with WiFi control and Ambient Lamp — ongoing project with build log, code, and demo videos.",
    date: "Aug 2026",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785859969/Screenshot_2026-08-04_214145_n3kurq.png",
    href: "/projects/humanoid-robot"
  },
  {
    id: "skillslms-launch",
    text: "Shipped SkillsLMS, a full-stack agentic LMS with a LangGraph + RAG tutoring service.",
    date: "Jul 2026",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866199/Screenshot_2026-08-04_232601_rvrt8f.png",
    href: "https://skillslms.vercel.app/"
  },
  {
    id: "lumenskart-launch",
    text: "Built and deployed Lumenskart, a production-style Next.js ecommerce storefront with an admin CMS.",
    date: "Jun 2026",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866439/Screenshot_2026-08-04_233009_blxwd2.png"
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
