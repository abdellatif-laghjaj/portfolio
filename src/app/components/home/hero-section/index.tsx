"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useState, useMemo, memo } from "react";
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
    img: "/images/icon/github-icon.svg",
    href: "https://github.com/abdellatif-laghjaj",
    icon: "GitHub",
  },
  {
    img: "/images/icon/linkedin-icon.svg",
    href: "https://www.linkedin.com/in/abdellatif-laghjaj/",
    icon: "LinkedIn",
  },
  {
    img: "/images/icon/twitter-icon.svg",
    href: "https://www.twitter.com/abdellatif_kira",
    icon: "X",
  },
  {
    img: "/images/icon/instagram-icon.svg",
    href: "https://www.instagram.com/abdellatif.ai/",
    icon: "Instagram",
  },
] as const;

type DecorationState = {
  decorationIndex: number;
  isFading: boolean;
};

type DecorationAction = { type: "START_FADE" } | { type: "COMPLETE_FADE" };

const decorationReducer = (
  state: DecorationState,
  action: DecorationAction,
): DecorationState => {
  switch (action.type) {
    case "START_FADE":
      return { ...state, isFading: true };
    case "COMPLETE_FADE":
      return {
        decorationIndex: (state.decorationIndex + 1) % DECORATIONS.length,
        isFading: false,
      };
    default:
      return state;
  }
};

const HeroSection = () => {
  const [decorationState, dispatch] = useReducer(decorationReducer, {
    decorationIndex: 0,
    isFading: false,
  });
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
    const interval = setInterval(() => {
      dispatch({ type: "START_FADE" });
      setTimeout(() => {
        dispatch({ type: "COMPLETE_FADE" });
      }, 400);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentDecoration = useMemo(
    () => DECORATIONS[decorationState.decorationIndex],
    [decorationState.decorationIndex],
  );

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
          <div className="border-x border-primary/20 text-primary">
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
                    style={{ opacity: decorationState.isFading ? 0 : 1 }}
                  >
                    <Image
                      src={currentDecoration}
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
                  <Image
                    src="/images/icon/map-icon.svg"
                    alt="map-icon"
                    width={20}
                    height={20}
                    className="dark:invert"
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
                      key={value.icon}
                      className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/20 rounded-full transition-[color,background-color,transform] active:scale-[0.96] min-w-[40px] min-h-[40px] flex items-center justify-center"
                      aria-label={value.icon}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={value.img}
                        alt={value.icon}
                        width={18}
                        height={18}
                        className="dark:invert"
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

export default memo(HeroSection);
