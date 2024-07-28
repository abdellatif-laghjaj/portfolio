import BlurFade from "@/components/magicui/blur-fade";
import {DATA} from "@/data/resume";
import {ProjectCard} from "@/components/project-card";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                <BlurFade delay={BLUR_FADE_DELAY * 11}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div
                                className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                My Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Check out my latest work
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;ve worked on a variety of projects, from simple
                                websites to complex web applications. Here are a few of my
                                favorites.
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>

                <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                Want to see more?
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Check out my{" "}
                                <Link
                                    href={DATA.contact.social.GitHub.url}
                                    target="_blank"
                                    className="text-blue-500 hover:underline"
                                >
                                    GitHub profile
                                </Link>{" "}
                                for more projects.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}