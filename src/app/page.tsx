import Divider from "./components/divider";
import AboutMe from "./components/home/about-me";
import Education from "./components/home/education";
import Experience from "./components/home/experience";
import FeaturedWork from "./components/home/featured-work";
import HeroSection from "./components/home/hero-section";
import ProjectOverview from "./components/home/project-overview";

const page = () => {
  return (
    <main>
      <HeroSection />
      <Divider />
      <AboutMe />
      <Divider />
      <FeaturedWork />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <ProjectOverview />
      <Divider />
    </main>
  );
};

export default page;
