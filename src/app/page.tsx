import dynamic from "next/dynamic";
import PageBox from "@/components/core/PageBox";
import {menuItems} from "@/data/navMenus";

const Hero = dynamic(() => import("@/components/home/Hero"));
const Services = dynamic(() => import("@/components/home/Services"));
const Experiences = dynamic(() => import("@/components/home/Experiences"));
const Skills = dynamic(() => import("@/components/home/Skills"));
const Projects = dynamic(() => import("@/components/home/Projects"));
const Contact = dynamic(() => import("@/components/home/Contact"));

const FloatingNavbar = dynamic(() =>
    import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const Home = () => {
    return (
        <PageBox>
            <FloatingNavbar className="app_nav" navItems={menuItems}/>
            <Hero id="hero"/>
            <Services id="services"/>
            <Experiences id="experiences"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
            <ScrollToTop/>
        </PageBox>
    );
};

export default Home;
