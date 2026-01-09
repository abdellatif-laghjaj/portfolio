import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          → Certifications
        </h2>
        {DATA.certifications.map((cert, id) => (
          <div
            key={cert.name}
            className="animate-slide-up opacity-0"
            style={{ animationDelay: `${id * 0.1}s` }}
          >
            <ResumeCard
              href={cert.href}
              logoUrl={cert.logoUrl || ""}
              altText={cert.name}
              title={cert.name}
              subtitle={cert.issuer}
              period={cert.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
