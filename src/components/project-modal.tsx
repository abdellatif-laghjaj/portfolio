"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar, Lock, ExternalLink } from "lucide-react";

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

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    dates: string;
    description: string;
    technologies: readonly string[];
    image?: string;
    video?: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
    private?: boolean;
  };
}

export function ProjectModal({
  open,
  onOpenChange,
  project,
}: ProjectModalProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = (
    <div className="space-y-6">
      {/* Media Section */}
      {(project.video || project.image) && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden border bg-muted/50">
          {project.video && (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          {project.image && !project.video && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority={false}
              unoptimized={false}
            />
          )}
        </div>
      )}

      {/* Date and Status */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{project.dates}</span>
        </div>
        {project.private && (
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500">
            <Lock className="w-4 h-4" />
            <span className="font-medium">Private Project</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-muted-foreground leading-relaxed">
                {children}
              </p>
            ),
          }}
        >
          {project.description}
        </Markdown>
      </div>

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">
            Technologies Used
          </h4>
          <TooltipProvider>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => {
                const iconKey = techIconMap[tech.toLowerCase()];
                const Icon = iconKey ? Icons[iconKey] : Icons.terminal;

                return (
                  <Tooltip key={tech}>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 flex items-center gap-2 hover:bg-primary/10 transition-colors cursor-default"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{tech}</span>
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">{tech}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      )}

      {/* Links */}
      {!project.private && project.links && project.links.length > 0 && (
        <div className="space-y-3 pt-2 border-t">
          <h4 className="text-sm font-semibold text-foreground">
            Project Links
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="group"
              >
                <Badge className="px-3 py-2 flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer">
                  {link.icon}
                  <span className="text-xs font-medium">{link.type}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {project.title}
          </DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-6">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}
