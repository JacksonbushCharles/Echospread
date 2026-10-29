export type ProjectItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
};

export type SignalItem = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
};

export const featuredProjects: ProjectItem[] = [
  {
    slug: "excelpoint-global",
    name: "ExcelPoint Global",
    category: "Digital commerce experience",
    description: "A refined digital storefront for a technology retail business expanding into a more confident B2B and consumer presence.",
    tags: ["WEB", "E-COMMERCE", "DIGITAL PRESENCE"],
    accent: "#D8E6B2",
  },
  {
    slug: "rex-remote-control",
    name: "REX",
    category: "Remote monitoring and control",
    description: "A software and IoT platform that lets teams monitor devices, services and field operations with clarity.",
    tags: ["IOT", "SOFTWARE", "AUTOMATION"],
    accent: "#D9D1C8",
  },
  {
    slug: "signal-lab",
    name: "Signal Lab",
    category: "Brand and content systems",
    description: "An editorial growth hub for a founder-led business that needed stronger message clarity and distribution.",
    tags: ["GROWTH", "CONTENT", "STRATEGY"],
    accent: "#C7D8E7",
  },
  {
    slug: "northstar-ops",
    name: "Northstar Ops",
    category: "Operations automation",
    description: "A digital operating layer connecting lead capture, CRM updates and internal workflow automation.",
    tags: ["SYSTEMS", "AUTOMATION", "DATA"],
    accent: "#F2D7BA",
  },
];

export const signalArticles: SignalItem[] = [
  {
    slug: "the-new-rules-of-digital-presence",
    title: "The new rules of digital presence.",
    category: "Digital",
    excerpt: "Web presence is now a system that influences trust, discoverability and conversion long before a purchase happens.",
    date: "02 Aug 2026",
  },
  {
    slug: "why-your-website-should-do-more-than-look-good",
    title: "Why your website should do more than look good.",
    category: "Growth",
    excerpt: "A modern site can improve clarity, signal quality and operational leverage when it is designed as a real system.",
    date: "18 Jul 2026",
  },
  {
    slug: "what-ai-actually-changes-for-businesses",
    title: "What AI actually changes for businesses.",
    category: "AI",
    excerpt: "The real advantage is not novelty. It is better interfaces, sharper decisions and better systems for how work moves.",
    date: "09 Jul 2026",
  },
  {
    slug: "inside-an-echospread-build",
    title: "Inside an Echospread build.",
    category: "Experiments",
    excerpt: "A look at how product thinking, design systems and marketing strategy combine into practical digital growth.",
    date: "27 Jun 2026",
  },
];

export const capabilityCards = [
  {
    title: "DIGITAL PRESENCE",
    description:
      "Websites, landing pages and digital experiences designed to make businesses easier to discover, understand and trust.",
    tag: "01 / PRESENCE",
  },
  {
    title: "GROWTH",
    description:
      "SEO, advertising, content and social strategies designed to put brands in front of the right people.",
    tag: "02 / GROWTH",
  },
  {
    title: "SYSTEMS",
    description:
      "Digital workflows, integrations and automation that reduce repetitive work and connect business operations.",
    tag: "03 / SYSTEMS",
  },
  {
    title: "TECHNOLOGY",
    description:
      "AI, software, IoT and technical solutions for businesses ready to go beyond conventional digital tools.",
    tag: "04 / TECHNOLOGY",
  },
];
