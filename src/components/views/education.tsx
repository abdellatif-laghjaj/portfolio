import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

export default function Education() {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={`${education.school}-${education.start}-${id}`}
            delay={DATA.BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={`${education.school}-${education.start}-${id}`}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
