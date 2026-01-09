import { DATA } from "@/data/resume";
import { HackathonCard } from "@/components/hackathon-card";

export default function Hackathons() {
  return (
    <section id="hackathons">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up opacity-0 [animation-delay:0.2s]">
              During my time in university, I attended {DATA.hackathons.length}+
              hackathons. People from around Morocco would come together and
              build incredible things in 2-3 days. Here are some of the projects
              I worked on.
            </p>
          </div>
        </div>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-border/50">
          {DATA.hackathons.map((project, idx) => (
            <div
              key={project.title + project.dates}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <HackathonCard
                title={project.title}
                description={project.description}
                location={project.location}
                dates={project.dates}
                image={project.image}
                links={project.links}
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
