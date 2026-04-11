"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Experience = () => {
  const [experienceData, setExperienceData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExperienceData(data?.experienceData);
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
                Experience
              </p>
            </div>
          </div>
          <div className="border-t border-primary/10">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16 ">
              {experienceData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="border border-primary/10 rounded-lg p-2 shrink-0">
                          <Image
                            src={value?.icon}
                            alt="icon"
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="mb-1 break-words">{value?.role}</h5>
                          <p className="text-sm text-muted-foreground break-words">
                            {value?.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3 shrink-0">
                        <div
                          className={`w-4 h-2 rounded-sm ${value?.endYear == "Present" ? "bg-primary" : "bg-primary/10"} `}
                        />
                        <p className="text-sm xs:text-base text-primary whitespace-nowrap">
                          {value?.startYear} – {value?.endYear}
                        </p>
                      </div>
                    </div>
                    <ul>
                      {value?.bulletPoints?.map((point: any, index: any) => {
                        return (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-base font-normal text-secondary"
                          >
                            <span className="w-2.5 h-2.5 text-secondary">
                              •
                            </span>
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
