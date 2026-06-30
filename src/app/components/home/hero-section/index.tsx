"use client";
import {
  GithubIcon,
  InstagramIcon,
  Linkedin01Icon,
  Location01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/app/components/theme-toggle";

const DECORATIONS = [
  "/images/decorations/katana.png",
  "/images/decorations/sakura-warrior.png",
  "/images/decorations/dark-1.png",
  "/images/decorations/fire.png",
  "/images/decorations/hallucination.png",
  "/images/decorations/mister-fantastic.png",
  "/images/decorations/pink-flowers.png",
  "/images/decorations/atlas-guntles.png",
  "/images/decorations/skill-issue.png",
  "/images/decorations/soul-leaving-body.png",
  "/images/decorations/the-mark.png",
  "/images/decorations/thunder.png",
  "/images/decorations/yunara.png",
] as const;

const SOCIAL_ICONS = [
  {
    icon: GithubIcon,
    href: "https://github.com/abdellatif-laghjaj",
    label: "GitHub",
  },
  {
    icon: Linkedin01Icon,
    href: "https://www.linkedin.com/in/abdellatif-laghjaj/",
    label: "LinkedIn",
  },
  {
    icon: NewTwitterIcon,
    href: "https://www.twitter.com/abdellatif_kira",
    label: "X",
  },
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/abdellatif.ai/",
    label: "Instagram",
  },
] as const;

const HeroSection = () => {
  const [decorationIndex, setDecorationIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Casablanca",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setIsFading(true);
      timeout = setTimeout(() => {
        setDecorationIndex((index) => (index + 1) % DECORATIONS.length);
        setIsFading(false);
      }, 400);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72 relative">
            <Image
              src="/images/hero-sec/banner-bg-img.webp"
              alt="banner-img"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="border-x border-primary/20">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <div className="relative size-36.2">
                  <Image
                    src="/images/hero-sec/user-img.jpg"
                    alt="Abdellatif Laghjaj"
                    width={145}
                    height={145}
                    priority
                    className="border-4 border-white rounded-full outline outline-black/10 dark:outline-white/10"
                  />
                  {/* Random Decoration */}
                  <div
                    className="absolute -inset-4 pointer-events-none transition-opacity duration-400 ease-[cubic-bezier(0.2,0,0,1)]"
                    style={{ opacity: isFading ? 0 : 1 }}
                  >
                    <Image
                      src={DECORATIONS[decorationIndex]}
                      alt="Decoration"
                      fill
                      sizes="145px"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Abdellatif Laghjaj</h1>
                <p className="text-orange-700 font-normal">
                  ERP & Software Engineer
                </p>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    aria-hidden="true"
                    icon={Location01Icon}
                    size={20}
                    strokeWidth={2}
                  />
                  <p className="text-primary">Morocco</p>
                  {localTime && (
                    <>
                      <span className="text-muted-foreground">·</span>
                      <p className="text-secondary tabular-nums">{localTime}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {SOCIAL_ICONS.map((value) => (
                    <Link
                      href={value.href}
                      key={value.label}
                      className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/20 rounded-full transition-[color,background-color,transform] active:scale-[0.96] min-w-[40px] min-h-[40px] flex items-center justify-center"
                      aria-label={value.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <HugeiconsIcon
                        aria-hidden="true"
                        icon={value.icon}
                        size={18}
                        strokeWidth={1.8}
                      />
                    </Link>
                  ))}
                </div>
                <div className="w-px h-6 bg-primary/20" />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
