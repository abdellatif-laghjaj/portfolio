import Image from "next/image";
import Link from "next/link";
import { certifications, type CertificationItem } from "@/lib/data";

const Certifications = () => {
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
              {certifications.map((cert: CertificationItem, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="border border-primary/10 rounded-lg p-2 shrink-0">
                          <Image
                            src={cert.logoUrl}
                            alt={cert.issuer}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={cert.href}
                            className="hover:text-primary transition-colors"
                          >
                            <h5 className="mb-1 break-words">{cert.name}</h5>
                          </Link>
                          <p className="text-sm text-muted-foreground break-words">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3 shrink-0">
                        <p className="text-sm xs:text-base text-primary whitespace-nowrap">
                          {cert.date}
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
