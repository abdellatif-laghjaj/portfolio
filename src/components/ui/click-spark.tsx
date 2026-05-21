"use client";

import { useCallback, useEffect, useRef } from "react";

interface ClickSparkProps {
  sparkColor?: string;
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

const SPARK_LENGTH_DECAY_FACTOR = 0.55;

const easingMap: Record<NonNullable<ClickSparkProps["easing"]>, (t: number) => number> = {
  linear: (t) => t,
  "ease-in": (t) => t * t,
  "ease-out": (t) => 1 - (1 - t) * (1 - t),
  "ease-in-out": (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2),
};

const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children,
}: ClickSparkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef({ width: 0, height: 0 });
  const sparksRef = useRef<Spark[]>([]);
  const frameRef = useRef<number | null>(null);
  const dprRef = useRef(1);

  const resizeCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    sizeRef.current = { width: rect.width, height: rect.height };

    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas) {
      frameRef.current = null;
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      frameRef.current = null;
      return;
    }

    const now = performance.now();
    const { width, height } = sizeRef.current;
    const dpr = dprRef.current;
    const ease = easingMap[easing];
    const resolvedSparkColor =
      sparkColor === "currentColor" && container
        ? window.getComputedStyle(container).color
        : sparkColor;
    const activeSparks: Spark[] = [];

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = resolvedSparkColor;
    ctx.lineCap = "round";
    ctx.lineWidth = 2 * dpr;

    for (const spark of sparksRef.current) {
      const elapsed = now - spark.startTime;
      const progress = Math.min(1, elapsed / duration);
      if (progress >= 1) continue;

      const eased = ease(progress);
      const distance = eased * sparkRadius * extraScale;
      const length = sparkSize * (1 - progress * SPARK_LENGTH_DECAY_FACTOR) * extraScale;
      const alpha = 1 - progress;
      const cos = Math.cos(spark.angle);
      const sin = Math.sin(spark.angle);

      const startX = (spark.x + cos * distance) * dpr;
      const startY = (spark.y + sin * distance) * dpr;
      const endX = (spark.x + cos * (distance + length)) * dpr;
      const endY = (spark.y + sin * (distance + length)) * dpr;

      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      activeSparks.push(spark);
    }

    ctx.globalAlpha = 1;
    sparksRef.current = activeSparks;

    if (activeSparks.length > 0 && width > 0 && height > 0) {
      frameRef.current = window.requestAnimationFrame(animate);
    } else {
      frameRef.current = null;
    }
  }, [duration, easing, extraScale, sparkColor, sparkRadius, sparkSize]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const startTime = performance.now();

      for (let i = 0; i < sparkCount; i += 1) {
        sparksRef.current.push({
          x,
          y,
          angle: (i / sparkCount) * Math.PI * 2,
          startTime,
        });
      }

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(animate);
      }
    },
    [animate, sparkCount],
  );

  useEffect(() => {
    resizeCanvas();
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => resizeCanvas());
    observer.observe(container);

    return () => observer.disconnect();
  }, [resizeCanvas]);

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    },
    [],
  );

  return (
    <div ref={containerRef} className="relative" onClick={handleClick}>
      {children}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />
    </div>
  );
};

export default ClickSpark;
