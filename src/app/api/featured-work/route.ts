import { NextResponse } from "next/server";

const featureWork = [
  {
    title: "Branding + Web Design for Cleaning Services",
    description:
      "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
    roles: ["UX Designer", "Framer Designer"],
    image: "/images/feature-work/feature-img-1.png",
  },
  {
    title: "Brand Identity for a Health Care Company",
    description:
      "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
    roles: ["UX Designer", "Framer Designer"],
    image: "/images/feature-work/feature-img-2.png",
  },
];

export const GET = async () => {
  return NextResponse.json({
    featureWork,
  });
};
