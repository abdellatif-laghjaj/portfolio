import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import Markdown from "react-markdown";

import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techIconMap: Record<string, keyof typeof Icons> = {
  python: "python",
  flask: "flask",
  "next.js": "nextjs",
  postgresql: "postgresql",
  redis: "redis",
  docker: "docker",
  jenkins: "jenkins",
  "openai api": "openai",
  openai: "openai",
  "google gemini": "google",
  "google docs api": "google",
  "discord api": "discord",
  "ai/ml": "brain",
  ai: "brain",
  ml: "brain",
  "machine learning": "brain",
  nlp: "brain",
  "llm agents": "robot",
  "dora metrics": "chart",
  devops: "infinity",
  laravel: "laravel",
  php: "php",
  "tailwind css": "tailwindcss",
  tailwindcss: "tailwindcss",
  sqlite: "sqlite",
  mysql: "mysql",
  vite: "vite",
  "pest php": "php",
  composer: "composer",
  "apache kafka": "kafka",
  kafka: "kafka",
  "apache spark": "spark",
  spark: "spark",
  hdfs: "database",
  hadoop: "hadoop",
  mongodb: "mongodb",
  "computer vision": "eye",
  yolov11: "eye",
  streamlit: "streamlit",
  iot: "microchip",
  esp32: "microchip",
  "express.js": "express",
  express: "express",
  "vue.js": "vue",
  vue: "vue",
  flutter: "flutter",
  dart: "dart",
  java: "java",
  "spring boot": "springboot",
  kotlin: "kotlin",
  android: "android",
  firebase: "firebase",
  figma: "figma",
  typescript: "typescript",
  javascript: "javascript",
  js: "javascript",
  react: "react",
  "react native": "react",
  nodejs: "nodejs",
  "node.js": "nodejs",
  "data science": "chart",
  "big data": "database",
  git: "git",
  github: "source",
};

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  private?: boolean;
  className?: string;
}

export const ProjectCard = memo(function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  private: isPrivate,
  className,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description.length > 50;
  const displayDescription =
    isLongDescription && !isExpanded
      ? `${description.slice(0, 200)}...`
      : description;

  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="h-40 w-full overflow-hidden object-cover object-top"
            priority={false}
            unoptimized={false}
            suppressHydrationWarning
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            <Markdown
              components={{
                p: ({ children }) => <span className="inline">{children}</span>,
              }}
            >
              {displayDescription}
            </Markdown>
            {isLongDescription && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
                className="text-primary hover:underline font-medium ml-1 inline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <TooltipProvider>
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => {
                const iconKey = techIconMap[tag.toLowerCase()];
                const Icon = iconKey ? Icons[iconKey] : Icons.terminal;

                return (
                  <Tooltip key={tag}>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-center">
                        <Badge className="p-1" variant="outline">
                          <Icon className="size-3" />
                        </Badge>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-[10px]">{tag}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {!isPrivate && links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
        {isPrivate && (
          <div className="flex items-center text-xs text-muted-foreground">
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            This is a private project
          </div>
        )}
      </CardFooter>
    </Card>
  );
});
