"use client";

import { useSearchParams } from "next/navigation";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/ConstrainedBox";
import { getProjectDetails } from "@/data/projects";

const ProjectsSection2 = ({ id }: Readonly<{ id?: string }>) => {
  const searchParams = useSearchParams();
  const description = getProjectDetails(searchParams.get("id")!)?.description;

  return (
    <ResponsiveBox id={id}>
      <ConstrainedBox classNames="p-4">
        <p>{description}</p>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ProjectsSection2;
