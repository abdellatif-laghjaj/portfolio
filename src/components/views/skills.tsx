import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        {Object.entries(DATA.skills).map(
          ([category, { label, skills }], index) => (
            <div key={category}>
              <BlurFade delay={DATA.BLUR_FADE_DELAY * (10 + index)}>
                <h6 className="text-lg font-semibold">{label}</h6>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {skills.map(({ name, icon }, id) => (
                  <BlurFade
                    key={name}
                    delay={DATA.BLUR_FADE_DELAY * (10 + id * 0.05)}
                  >
                    <Badge key={name} className="flex items-center gap-2">
                      {icon}
                      {name}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
