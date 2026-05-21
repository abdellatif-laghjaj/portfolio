"use client";

import { useTheme } from "next-themes";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  lightSparkColor?: string;
  darkSparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
  children?: React.ReactNode;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  sparkColor,
  lightSparkColor = "#1f1f1d",
  darkSparkColor = "#ffffff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const prefersReducedMotionRef = useRef(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeSparkColor =
    sparkColor ??
    (mounted && resolvedTheme === "dark" ? darkSparkColor : lightSparkColor);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const nextWidth = Math.floor(width * dpr);
    const nextHeight = Math.floor(height * dpr);

    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const updateMotionPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    resizeCanvas();
    updateMotionPreference();
    window.addEventListener("resize", handleResize);
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, [resizeCanvas]);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing],
  );

  const draw = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (!canvas || !ctx) {
        animationIdRef.current = null;
        return;
      }

      const dpr = window.devicePixelRatio || 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;

        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);
        const x1 = (spark.x + distance * Math.cos(spark.angle)) * dpr;
        const y1 = (spark.y + distance * Math.sin(spark.angle)) * dpr;
        const x2 =
          (spark.x + (distance + lineLength) * Math.cos(spark.angle)) * dpr;
        const y2 =
          (spark.y + (distance + lineLength) * Math.sin(spark.angle)) * dpr;

        ctx.strokeStyle = activeSparkColor;
        ctx.lineWidth = 2 * dpr;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        animationIdRef.current = requestAnimationFrame(draw);
      } else {
        animationIdRef.current = null;
      }
    },
    [activeSparkColor, duration, easeFunc, extraScale, sparkRadius, sparkSize],
  );

  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotionRef.current) return;

    const now = performance.now();
    const newSparks: Spark[] = Array.from(
      { length: sparkCount },
      (_, index) => ({
        x: event.clientX,
        y: event.clientY,
        angle: (2 * Math.PI * index) / sparkCount,
        startTime: now,
      }),
    );

    sparksRef.current.push(...newSparks);

    if (!animationIdRef.current) {
      animationIdRef.current = requestAnimationFrame(draw);
    }
  };

  return (
    <div className="relative min-h-screen" onClick={handleClick}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2147483647]"
      />
      {children}
    </div>
  );
};

export default ClickSpark;
