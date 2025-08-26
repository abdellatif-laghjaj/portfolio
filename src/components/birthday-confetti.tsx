"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "@/components/magicui/blur-fade";
import { CONFIG } from "@/config/constants";

export function BirthdayConfetti() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMarquee, setShowMarquee] = useState(false);

  const isBirthday = () => {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 7, 11); // August 11th
    return (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() === birthday.getDate()
    );
  };

  const fireConfetti = () => {
    const end = Date.now() + CONFIG.CONFETTI_DURATION;

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
        colors: [...CONFIG.CONFETTI_COLORS],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: [...CONFIG.CONFETTI_COLORS],
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
    <>
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
    </>
  );
}