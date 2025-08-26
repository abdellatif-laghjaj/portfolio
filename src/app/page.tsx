import { Suspense } from "react";
import dynamic from "next/dynamic";
import { BirthdayConfetti } from "@/components/birthday-confetti";
import {
  HeroSkeleton,
  AboutSkeleton,
  ExperienceSkeleton,
  SkillsSkeleton,
  ProjectsSkeleton,
  ContactSkeleton,
} from "@/components/skeletons";

// Use Next.js dynamic imports for better SSR support
const Hero = dynamic(() => import("@/components/views/hero"), {
  ssr: true,
  loading: () => <HeroSkeleton />,
});
const About = dynamic(() => import("@/components/views/about"), {
  ssr: true,
  loading: () => <AboutSkeleton />,
});
const Experience = dynamic(() => import("@/components/views/experience"), {
  ssr: true,
  loading: () => <ExperienceSkeleton />,
});
const Education = dynamic(() => import("@/components/views/education"), {
  ssr: true,
  loading: () => <ExperienceSkeleton />,
});
const Skills = dynamic(() => import("@/components/views/skills"), {
  ssr: true,
  loading: () => <SkillsSkeleton />,
});
const Projects = dynamic(() => import("@/components/views/projects"), {
  ssr: true,
  loading: () => <ProjectsSkeleton />,
});
const Activities = dynamic(() => import("@/components/views/activities"), {
  ssr: true,
  loading: () => <ExperienceSkeleton />,
});
const Contact = dynamic(() => import("@/components/views/contact"), {
  ssr: true,
  loading: () => <ContactSkeleton />,
});
const Certifications = dynamic(
  () => import("@/components/views/certifications"),
  {
    ssr: true,
    loading: () => <ExperienceSkeleton />,
  },
);

// Keep Hackathons component as a regular import since it's used directly
import Hackathons from "@/components/views/hackathons";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
      <BirthdayConfetti />

      <Suspense fallback={<HeroSkeleton />}>
        {/* Hero */}
        <Hero />
      </Suspense>

      <Suspense fallback={<AboutSkeleton />}>
        {/* About */}
        <About />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        {/* Experience */}
        <Experience />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        {/* Education */}
        <Education />
      </Suspense>

      <Suspense fallback={<SkillsSkeleton />}>
        {/* Skills */}
        <Skills />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        {/* Certifications */}
        <Certifications />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        {/* Hackathons */}
        <Hackathons />
      </Suspense>

      <Suspense fallback={<ProjectsSkeleton />}>
        {/* Projects */}
        <Projects />
      </Suspense>

      <Suspense fallback={<ExperienceSkeleton />}>
        {/* Activities */}
        <Activities />
      </Suspense>

      <Suspense fallback={<ContactSkeleton />}>
        {/* Contact */}
        <Contact />
      </Suspense>
    </main>
  );
}
