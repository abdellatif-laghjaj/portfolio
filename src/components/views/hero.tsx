"use client";

import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const DECORATIONS = [
  "/images/decorations/atlas-guntles.png",
  "/images/decorations/dark-1.png",
  "/images/decorations/fire.png",
  "/images/decorations/hallucination.png",
  "/images/decorations/katana.png",
  "/images/decorations/mister-fantastic.png",
  "/images/decorations/pink-flowers.png",
  "/images/decorations/sakura-warrior.png",
  "/images/decorations/skill-issue.png",
  "/images/decorations/soul-leaving-body.png",
  "/images/decorations/the-mark.png",
  "/images/decorations/thunder.png",
  "/images/decorations/yunara.png",
];

export default function Hero() {
  const [decorationIndex, setDecorationIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setDecorationIndex((prev) => (prev + 1) % DECORATIONS.length);
        setIsFading(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5 min-w-0">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi 👋, I&apos;m {DATA.name.split(" ")[0]}
            </h1>
            <p className="max-w-[600px] md:text-xl text-foreground/80 font-medium">
              {DATA.description}
            </p>
            <div className="flex gap-3 pt-4">
              <Link href="#projects">
                <Button
                  variant="default"
                  className="rounded-full px-4 text-xs font-light md:px-6 md:text-base md:font-normal whitespace-nowrap"
                >
                  View Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="rounded-full px-4 text-xs font-light md:px-6 md:text-base md:font-normal whitespace-nowrap"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative shrink-0 size-28">
            <Avatar className="size-28 border border-gray-300 dark:border-border/20">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <div
              className="absolute -inset-3 pointer-events-none transition-opacity duration-400"
              style={{ opacity: isFading ? 0 : 1 }}
            >
              <Image
                src={DECORATIONS[decorationIndex]}
                alt="Decoration"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
