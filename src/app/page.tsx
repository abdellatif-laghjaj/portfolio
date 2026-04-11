import { Suspense } from "react";
import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import Education from "./components/home/education";
import Certifications from "./components/home/certifications";
import Experience from "./components/home/experience";
import FeaturedWork from "./components/home/featured-work";
import HeroSection from "./components/home/hero-section";
import ProjectOverview from "./components/home/project-overview";

// Loading fallback component
const SectionLoader = () => (
  <div className="container">
    <div className="border-x border-primary/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-7 py-10">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-primary/10 rounded w-1/4"></div>
          <div className="h-8 bg-primary/10 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <Suspense fallback={<SectionLoader />}>
        <FeaturedWork />
      </Suspense>
      <Divider />
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      <Divider />
      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>
      <Divider />
      <Suspense fallback={<SectionLoader />}>
        <Certifications />
      </Suspense>
      <Divider />
      <Suspense fallback={<SectionLoader />}>
        <ProjectOverview />
      </Suspense>
      <Divider />
    </main>
  );
}
