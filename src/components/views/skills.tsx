import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Skills</h2>
        {Object.entries(DATA.skills).map(
          ([category, { label, skills }], index) => (
            <div key={category}>
              <h3 className="text-md font-semibold mb-1">{label}</h3>
              <div className="flex flex-wrap gap-1">
                {skills.map(({ name, icon }, id) => (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="flex items-center gap-2  hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {icon}
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
