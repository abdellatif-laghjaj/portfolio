import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Certifications</h2>
        </BlurFade>
        {DATA.certifications.map((cert, id) => (
          <BlurFade
            key={cert.name}
            delay={DATA.BLUR_FADE_DELAY * 10 + id * 0.05}
          >
            <ResumeCard
              key={cert.name}
              href={cert.href}
              logoUrl=""
              altText={cert.name}
              title={cert.name}
              subtitle={cert.issuer}
              period={cert.date}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
