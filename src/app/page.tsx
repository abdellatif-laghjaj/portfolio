import {lazy} from "react";

// Lazy-loaded components
const Hero = lazy(() => import('@/components/views/hero'));
const About = lazy(() => import('@/components/views/about'));
const Experience = lazy(() => import('@/components/views/experience'));
const Education = lazy(() => import('@/components/views/education'));
const Skills = lazy(() => import('@/components/views/skills'));
const Projects = lazy(() => import('@/components/views/projects'));
const Activities = lazy(() => import('@/components/views/activities'));
const Contact = lazy(() => import('@/components/views/contact'));

export default function Page() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            {/* Hero */}
            <Hero/>

            {/* About */}
            <About/>

            {/* Experience */}
            <Experience/>

            {/* Education */}
            <Education/>

            {/* Skills */}
            <Skills/>

            {/* Projects */}
            <Projects/>

            {/* Activities */}
            <Activities/>

            {/* Contact */}
            <Contact/>
        </main>
    );
}
