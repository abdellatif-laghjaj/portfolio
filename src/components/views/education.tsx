import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

export default function Education() {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          → Education
        </h2>
        {DATA.education.map((education, id) => (
          <div
            key={`${education.school}-${education.start}-${id}`}
            className="animate-slide-up opacity-0"
            style={{ animationDelay: `${id * 0.1}s` }}
          >
            <ResumeCard
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
