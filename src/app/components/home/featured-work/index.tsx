"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
  const [featureWork, setFeatureWork] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/featured-work");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeatureWork(data?.featureWork);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Featured work
              </p>
              <Button asChild variant={"outline"} className="h-auto">
                <Link href={"/"} className="py-3 px-5">
                  Download Portfolio
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
            {featureWork?.map((value: any, index: number) => {
              const isRightCol = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-primary/10" : ""}`}
                >
                  <Link
                    href={value?.href || "/"}
                    className="overflow-hidden rounded-lg"
                  >
                    <Image
                      src={value?.image}
                      alt={value?.title}
                      width={490}
                      height={300}
                      className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
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
                        .map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
