import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import SkillItem from "./ui/SkillItem";
import skills from "@/data/skills";

const Skills = ({id}: { id: string }) => {
    return (
        <ResponsiveBox
            classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
            id={id}
        >
            <ConstrainedBox classNames="p-4 py-16">
                <SectionTitle>Skills</SectionTitle>

                <GridBox
                    classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16">
                    {skills.map((skill, index) => {
                        return <SkillItem key={`skill-${index}`} data={skill}/>;
                    })}
                </GridBox>
            </ConstrainedBox>
        </ResponsiveBox>
    );
};

export default Skills;
