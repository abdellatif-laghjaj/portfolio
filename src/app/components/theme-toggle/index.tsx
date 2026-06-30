"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const visible = "scale-100 opacity-100 blur-0";
  const hidden = "scale-[0.25] opacity-0 blur-[4px]";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex min-h-[40px] min-w-[40px] w-fit items-center justify-center rounded-full border border-primary/20 p-2.5 transition-[color,background-color,transform] hover:bg-primary/5 active:scale-[0.96] sm:p-3.5"
    >
      <span className="relative size-[18px]" aria-hidden="true">
        <HugeiconsIcon
          className={`absolute inset-0 size-full transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${isDark ? visible : hidden}`}
          icon={Moon02Icon}
          size={18}
          strokeWidth={2}
        />
        <HugeiconsIcon
          className={`size-full transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${isDark ? hidden : visible}`}
          icon={Sun03Icon}
          size={18}
          strokeWidth={2}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
