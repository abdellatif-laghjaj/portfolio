import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  const servicesBedge = [
    "AI/ML",
    "Big Data",
    "Python",
    "FastAPI",
    "NLP",
    "LLM Agents",
    "Odoo ERP",
    "PostgreSQL",
    "Docker",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "Flutter",
    "Git & GitHub",
  ];
  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                About Me
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Hey there. I'm Abdellatif — ERP Engineer and Full-Stack
                Developer based in Agadir, currently{" "}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  building AI-powered solutions
                </span>{" "}
                at <span className="border-b-2">DomaineDB</span>, specializing
                in Odoo migrations and agri-tech systems.
              </h2>
              <h5 className="text-secondary font-normal">
                I specialize in Odoo ERP migrations, AI-integrated internal
                tools, and full-stack development with Laravel, React, and
                Docker — delivering end-to-end solutions that streamline
                operations and drive real business value.
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesBedge?.map((value, index) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={index}
                      className="py-1.5 px-3 rounded-lg"
                    >
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {value}
                      </p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
