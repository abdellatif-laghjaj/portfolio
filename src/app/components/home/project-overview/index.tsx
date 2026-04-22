import Image from "next/image";
import Link from "next/link";
import { projectOverview, type CaseStudy } from "@/lib/data";

const ProjectOverview = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Case studies
              </p>
              <div className="flex flex-col gap-2.5">
                {projectOverview.caseStudies.map(
                  (value: CaseStudy, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={value.url}
                        className="group flex items-center gap-2"
                      >
                        <h4>{value.name}</h4>
                        <Image
                          src={"/images/icon/tile-arrow-icon.svg"}
                          alt="tile-icon"
                          width={24}
                          height={24}
                          className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                        />
                      </Link>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
