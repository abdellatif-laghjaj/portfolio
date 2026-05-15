import type { Metadata } from "next";
import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import Education from "./components/home/education";
import Certifications from "./components/home/certifications";
import Experience from "./components/home/experience";
import GitHubSection from "./components/home/github";
import HeroSection from "./components/home/hero-section";
import ProjectOverview from "./components/home/project-overview";

export const metadata: Metadata = {
  title: "Abdellatif Laghjaj - Home",
};

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
      <Divider />
      <GitHubSection />
      <Divider />
      <ProjectOverview />
      <Divider />
    </main>
  );
}
