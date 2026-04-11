import { NextResponse } from "next/server";

const experienceData = [
  {
    icon: "/images/icon/domainedb.jpeg",
    role: "ERP & Full-Stack Developer, DomaineDB",
    location: "Agadir, Morocco",
    startYear: "2025",
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

const educationData = [
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

const certifications = [
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

const projectOverview = {
  caseStudies: [
    { name: "Wellnest", url: "#" },
    { name: "ScoutHire", url: "#" },
  ],
  sideProjects: [
    { name: "Formless", url: "#" },
    { name: "Gridsnap", comingSoon: true },
    { name: "OrbitPay Mobile App", comingSoon: true },
    { name: "Siteflow Page Builder", comingSoon: true },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    experienceData,
    educationData,
    certifications,
    projectOverview,
  });
};
