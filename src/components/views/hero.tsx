import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi 👋, I&apos;m {DATA.name.split(" ")[0]}
            </h1>
            <p className="max-w-[600px] md:text-xl text-foreground/80 font-medium">
              {DATA.description}
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="#projects">
                <Button variant="default" className="rounded-full px-6">
                  View Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="rounded-full px-6">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <Avatar className="size-28 border border-gray-300 dark:border-border/20">
            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl}
              className="object-cover"
              priority
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}