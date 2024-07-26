import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectList from "./ui/ProjectList";
import projects from "@/data/projects";

const Projects = ({id}: { id: string }) => {
    return (
        <ResponsiveBox
            classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
            id={id}
        >
            <ConstrainedBox classNames="p-4 py-16">
                <SectionTitle>Recent Works</SectionTitle>

                <ProjectList projects={projects}/>
            </ConstrainedBox>
        </ResponsiveBox>
    );
};

export default Projects;
