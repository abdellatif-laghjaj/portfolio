import { cn } from "@/lib/utils";
import React from "react";

interface Item {
  name: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ name, value, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-lg p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-lg"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="text-sm sm:text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-lg font-bold dark:text-white/60">{value}</p>
        </div>
      </div>
    </figure>
  );
};

export default StatCard;
