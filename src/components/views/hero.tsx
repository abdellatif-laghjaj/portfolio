import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5 min-w-0 animate-slide-in">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Hi 👋, I&apos;m {DATA.name.split(" ")[0]}
            </h1>
            <p className="max-w-[600px] md:text-xl text-foreground/80 font-medium [animation-delay:0.1s] animate-slide-in opacity-0">
              {DATA.description}
            </p>
            <div className="flex gap-3 pt-4 [animation-delay:0.2s] animate-slide-in opacity-0">
              <Link href="#projects">
                <Button
                  variant="default"
                  className="rounded-full px-4 text-xs font-light md:px-6 md:text-base md:font-normal whitespace-nowrap hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                >
                  View Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="rounded-full px-4 text-xs font-light md:px-6 md:text-base md:font-normal whitespace-nowrap hover:scale-105 transition-transform duration-300 hover:shadow-md"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <Avatar className="size-28 border-2 border-primary/20 dark:border-primary/30 shrink-0 animate-scale-in shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary/40">
            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl}
              className="object-cover"
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
