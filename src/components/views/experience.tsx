import { DATA } from "@/data/resume";
import { ResumeCard } from "@/components/resume-card";

export default function Experience() {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          → Experience
        </h2>
        {DATA.work.map((work, id) => (
          <div
            key={`${work.company}-${work.start}-${id}`}
            className="animate-slide-up opacity-0"
            style={{ animationDelay: `${id * 0.1}s` }}
          >
            <ResumeCard
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
