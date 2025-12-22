import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">→ Certifications</h2>
        {DATA.certifications.map((cert) => (
          <ResumeCard
            key={cert.name}
            href={cert.href}
            logoUrl={cert.logoUrl || ""}
            altText={cert.name}
            title={cert.name}
            subtitle={cert.issuer}
            period={cert.date}
          />
        ))}
      </div>
    </section>
  );
}
