"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Certifications = () => {
  const [certifications, setCertifications] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCertifications(data?.certifications);
      } catch (error) {
        console.error("Error fetching certifications:", error);
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
                Certifications
              </p>
            </div>
          </div>
          <div className="border-t border-primary/10">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {certifications?.map((cert: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="border border-primary/10 rounded-lg p-2">
                        <Image
                          src={cert?.logoUrl}
                          alt={cert?.issuer}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <Link
                          href={cert?.href}
                          className="hover:text-primary transition-colors"
                        >
                          <h5 className="mb-1">{cert?.name}</h5>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {cert?.issuer}
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                        <p className="text-sm xs:text-base text-primary">
                          {cert?.date}
                        </p>
                      </div>
                    </div>
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

export default Certifications;
