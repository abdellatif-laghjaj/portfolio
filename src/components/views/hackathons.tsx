import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { HackathonCard } from "@/components/hackathon-card";

export default function Hackathons() {
  return (
    <section id="hackathons">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Hackathons
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I like building things
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                During my time in university, I attended{" "}
                {DATA.hackathons.length}+ hackathons. People from around Morocco
                would come together and build incredible things in 2-3 days.
                Here are some of the projects I worked on.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={DATA.BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
