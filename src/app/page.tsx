"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Use Next.js dynamic imports for better SSR support
const Hero = dynamic(() => import("@/components/views/hero"), { ssr: true });
const About = dynamic(() => import("@/components/views/about"), { ssr: true });
const Experience = dynamic(() => import("@/components/views/experience"), {
  ssr: true,
});
const Education = dynamic(() => import("@/components/views/education"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/views/skills"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/views/projects"), {
  ssr: true,
});
const Activities = dynamic(() => import("@/components/views/activities"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/views/contact"), {
  ssr: true,
});
const Certifications = dynamic(
  () => import("@/components/views/certifications"),
  { ssr: true },
);

// Keep Hackathons component as a regular import since it's used directly
import Hackathons from "@/components/views/hackathons";

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh space-y-10 relative">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Certifications */}
        <Certifications />

        {/* Hackathons */}
        <Hackathons />

        {/* Activities */}
        <Activities />

        {/* Contact */}
        <Contact />
      </Suspense>
    </main>
  );
}
