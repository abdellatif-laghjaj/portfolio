"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, memo } from "react";
import { Button } from "@/components/ui/button";

interface Technology {
  name: string;
}

interface FeaturedWorkItem {
  title: string;
  href: string;
  dates: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
}

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<FeaturedWorkItem[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/featured-work");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching featured work:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-7 py-10">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-primary/10 rounded w-1/4"></div>
                <div className="h-64 bg-primary/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              Featured work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
            {featureWork?.map((value, index) => {
              const isRightCol = index % 2 === 1;

              return (
                <article
                  key={`${value.title}-${index}`}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-primary/10" : ""}`}
                >
                  <Link
                    href={value?.href || "/"}
                    className="overflow-hidden rounded-lg relative aspect-video"
                  >
                    <Image
                      src={value?.image}
                      alt={value?.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)] outline outline-1 outline-black/10 dark:outline-white/10"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 sm:gap-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {value?.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        • {value?.dates}
                      </span>
                    </div>
                    <Link href={value?.href || "/"}>
                      <h4 className="hover:text-primary transition-colors">
                        {value?.title}
                      </h4>
                    </Link>
                    <p className="text-sm text-secondary line-clamp-3">
                      {value?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {value?.technologies
                        ?.slice(0, 5)
                        .map((tech, techIndex) => (
                          <span
                            key={`${tech}-${techIndex}`}
                            className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      {value?.technologies?.length > 5 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{value?.technologies?.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturedWork);
