// ── Experience ──────────────────────────────────────────────
export interface ExperienceItem {
  icon: string;
  role: string;
  location: string;
  startYear: string;
  endYear: string;
  bulletPoints: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    icon: "/images/icon/domainedb.jpeg",
    role: "ERP & Software Engineer, DomaineDB",
    location: "Agadir, Morocco",
    startYear: "Feb 2026",
    endYear: "Present",
    bulletPoints: [
      "Leading Odoo ERP migrations from legacy versions to modern releases, including data integrity validation and custom module adaptation",
      "Developing and maintaining internal tools and business software using Laravel, React, Docker, and Redis tailored to agri-business workflows",
      "Integrating AI capabilities into internal platforms to automate and optimize agricultural operations",
    ],
  },
  {
    icon: "/images/icon/irf.webp",
    role: "AI Developer, IRF-SIC Laboratory",
    location: "Taroudant, Morocco",
    startYear: "Feb 2025",
    endYear: "Jun 2025",
    bulletPoints: [
      "Built AI-powered team monitoring platform with LLM agents, reducing management effort by 40%",
      "Engineered scalable microservices with Flask and Next.js, achieving 50% faster processing",
      "Led design with SUS score of 77",
    ],
  },
  {
    icon: "/images/icon/hcp.webp",
    role: "Data Enumerator, HCP",
    location: "Morocco",
    startYear: "Aug 2024",
    endYear: "Sep 2024",
    bulletPoints: [
      "Managed high-volume demographic data collection ensuring 100% quality compliance",
      "Optimized survey routes, improving coverage efficiency for census operations",
    ],
  },
  {
    icon: "/images/icon/accesspoint.webp",
    role: "Full Stack Developer Intern, Accesspoint IT Solutions",
    location: "Taroudant, Morocco",
    startYear: "Jun 2023",
    endYear: "Sep 2023",
    bulletPoints: [
      "Developed multi-platform business management system using Vue.js, Laravel, and MySQL",
      "Improved operational efficiency by 25% through a custom restaurant POS system",
      "Collaborated in Agile environment contributing to sprint planning and code reviews",
    ],
  },
];

// ── Education ──────────────────────────────────────────────
export interface EducationItem {
  date: string;
  title: string;
  subtitle: string;
}

export const educationData: EducationItem[] = [
  {
    date: "2023 - 2025",
    title: "MS in Big Data and Artificial Intelligence",
    subtitle: "Ibn Zohr University — Taroudant, Morocco",
  },
  {
    date: "2020 - 2023",
    title: "BS in Computer Engineering",
    subtitle: "Ibn Zohr University — Taroudant, Morocco",
  },
];

// ── Certifications ──────────────────────────────────────────
export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  href: string;
  logoUrl: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "OCI 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "September 2025",
    href: "#",
    logoUrl: "/images/icon/oracle.webp",
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    date: "December 2024",
    href: "#",
    logoUrl: "/images/icon/simplilearn.webp",
  },
  {
    name: "Web Scraping with Beautiful Soup",
    issuer: "Simplilearn",
    date: "July 2022",
    href: "#",
    logoUrl: "/images/icon/simplilearn.webp",
  },
  {
    name: "Computer Networking Fundamentals",
    issuer: "Google",
    date: "December 2021",
    href: "#",
    logoUrl: "/images/icon/google.webp",
  },
];

// ── Project Overview ───────────────────────────────────────
export interface CaseStudy {
  name: string;
  url: string;
}

export interface ProjectOverviewData {
  caseStudies: CaseStudy[];
}

export const projectOverview: ProjectOverviewData = {
  caseStudies: [
    { name: "DevOps Monitoring Platform", url: "#" },
    { name: "Restaurant POS System", url: "#" },
    { name: "Odoo ERP Migration", url: "#" },
  ],
};

// ── Featured Work ───────────────────────────────────────────
export interface FeaturedWorkItem {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  private: boolean;
  category: string;
  description: string;
  technologies: string[];
  links: string[];
  image: string;
  video: string;
}

export const featureWork: FeaturedWorkItem[] = [
  {
    title: "DevOps Monitoring Platform",
    href: "#",
    dates: "2025",
    active: true,
    private: true,
    category: "AI & Big Data",
    description:
      "Engineered comprehensive decision-support platform for monitoring development team performance using DORA metrics and LLM agents. Built AI-powered analytics system with multi-model support (GPT-4o, Gemini 2.0, Llama 3.1) for team performance prediction and workflow optimization. Integrated Jenkins CI/CD pipeline monitoring, Discord analytics, and Google Docs portfolio tracking with secure OAuth authentication.",
    technologies: [
      "Python",
      "Flask",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Jenkins",
      "OpenAI API",
      "Google Gemini",
      "Discord API",
      "Google Docs API",
      "AI/ML",
      "DORA Metrics",
      "DevOps",
      "LLM Agents",
    ],
    links: [],
    image: "/images/feature-work/dora_ai.webp",
    video: "",
  },
  {
    title: "Restaurant POS Management System",
    href: "#",
    dates: "2023",
    active: true,
    private: true,
    category: "Web",
    description:
      "Engineered comprehensive restaurant management system across web, mobile, and desktop platforms. Built real-time order processing with Laravel WebSocket enabling instant kitchen-server communication. Developed Flutter mobile app for servers, Vue.js admin dashboard, and automated inventory management.",
    technologies: [
      "Laravel",
      "Vue.js",
      "Flutter",
      "MySQL",
      "InertiaJS",
      "Laravel WebSocket",
      "PHP",
      "Dart",
      "JavaScript",
      "Real-time Communication",
      "RFID Integration",
    ],
    links: [],
    image: "/images/feature-work/restaurant_pos.webp",
    video: "",
  },
];
