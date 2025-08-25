"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import confetti from "canvas-confetti";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "@/components/magicui/blur-fade";

// Use Next.js dynamic imports for better SSR support
const Hero = dynamic(() => import("@/components/views/hero"), { ssr: true });
const About = dynamic(() => import("@/components/views/about"), { ssr: true });
const Experience = dynamic(() => import("@/components/views/experience"), {
  ssr: true,
});
const Education = dynamic(() => import("@/components/views/education"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/views/skills"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/views/projects"), {
  ssr: true,
});
const Activities = dynamic(() => import("@/components/views/activities"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/views/contact"), {
  ssr: true,
});
const Certifications = dynamic(
  () => import("@/components/views/certifications"),
  { ssr: true },
);

// Keep Hackathons component as a regular import since it's used directly
import Hackathons from "@/components/views/hackathons";

export default function Page() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMarquee, setShowMarquee] = useState(false);

  const isBirthday = () => {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 7, 11);
    return (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() === birthday.getDate()
    );
  };

  const fireConfetti = () => {
    const end = Date.now() + 30 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#ffb220", "#f36d23"];

    const frame = () => {
      if (Date.now() > end) {
        setShowConfetti(false);
        return;
      }

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useEffect(() => {
    if (isBirthday()) {
      setShowConfetti(true);
      setShowMarquee(true);
      fireConfetti();
    }
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50" />
      )}

      {showMarquee && (
        <BlurFade>
          <Marquee className="py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold rounded-lg">
            <div className="text-2xl mx-4">
              🎉 Happy Birthday Abdellatif! 🎂
            </div>
            <div className="text-2xl mx-4">
              🎈 Wishing you an amazing day! 🎁
            </div>
            <div className="text-2xl mx-4">
              🥳 May all your dreams come true! 🌟
            </div>
          </Marquee>
        </BlurFade>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Certifications */}
        <Certifications />

        {/* Hackathons */}
        <Hackathons />

        {/* Projects */}
        <Projects />

        {/* Activities */}
        <Activities />

        {/* Contact */}
        <Contact />
      </Suspense>
    </main>
  );
}
