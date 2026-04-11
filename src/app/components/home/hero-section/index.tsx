"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useMemo, memo } from "react";

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

const HeroSection = () => {
  const [decorationIndex, setDecorationIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setDecorationIndex((prev) => (prev + 1) % DECORATIONS.length);
        setIsFading(false);
      }, 400);
    }, 60000); // Change every 1 minute

    return () => clearInterval(interval);
  }, []);

  const currentDecoration = useMemo(
    () => DECORATIONS[decorationIndex],
    [decorationIndex],
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
          <div className="border-x border-primary/10">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <div className="relative w-[145px] h-[145px]">
                  <Image
                    src="/images/hero-sec/user-img.jpg"
                    alt="Abdellatif Laghjaj"
                    width={145}
                    height={145}
                    priority
                    className="border-4 border-white rounded-full"
                  />
                  <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full z-10" />
                  {/* Random Decoration */}
                  <div
                    className="absolute -inset-4 pointer-events-none transition-opacity duration-400"
                    style={{ opacity: isFading ? 0 : 1 }}
                  >
                    <Image
                      src={currentDecoration}
                      alt="Decoration"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Abdellatif Laghjaj</h1>
                <p className="text-violet-700 font-normal">
                  ERP & Software Engineer
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icon/map-icon.svg"
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-primary">Agadir, Morocco</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {SOCIAL_ICONS.map((value, index) => (
                    <Link
                      href={value.href}
                      key={index}
                      className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
                      aria-label={value.icon}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={value.img}
                        alt={value.icon}
                        width={18}
                        height={18}
                      />
                    </Link>
                  ))}
                </div>
                <Button asChild className="h-auto rounded-full p-0.5!">
                  <Link
                    href="mailto:abdelatiflaghjaj@gmail.com"
                    className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,#9282F8_12.17%,#F3CA4D_90.71%)]"
                  >
                    <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,#9282F8_12.17%,#F3CA4D_90.71%)] py-2.5 px-5 rounded-full transition-colors">
                      <Image
                        src="/images/icon/spark-icon.svg"
                        alt="spark-icon"
                        width={14}
                        height={14}
                      />
                      <span className="text-sm sm:text-base font-semibold text-white">
                        Get in touch
                      </span>
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
