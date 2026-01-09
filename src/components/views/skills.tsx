import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-6">
        <h2 className="text-xl font-bold tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          → Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(DATA.skills).map(([category, { label, skills }], idx) => (
            <div 
              key={category} 
              className="space-y-3 animate-slide-up opacity-0"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name, icon }) => (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="flex items-center gap-2 px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {icon}
                    </span>
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
