import { NextResponse } from "next/server";

const featureWork = [
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

export const GET = async () => {
  return NextResponse.json({
    featureWork,
  });
};
