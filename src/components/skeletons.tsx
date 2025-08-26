import { cn } from "@/lib/utils";

export function HeroSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex justify-between gap-2">
          <div className="flex-1 space-y-1.5">
            <div className="h-8 bg-muted rounded-lg animate-pulse" />
            <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
          </div>
          <div className="h-28 w-28 bg-muted rounded-xl animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
        </div>
        <div className="flex gap-1">
          <div className="h-8 w-16 bg-muted rounded animate-pulse" />
          <div className="h-8 w-16 bg-muted rounded animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export function AboutSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-12", className)}>
      <div className="space-y-3">
        <div className="h-6 bg-muted rounded w-32 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse" />
          <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-20 bg-muted rounded-lg animate-pulse" />
        ))}
      </div>
    </section>
  );
}

export function ExperienceSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-12", className)}>
      <div className="h-6 bg-muted rounded w-32 animate-pulse" />
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-12 w-12 bg-muted rounded-lg animate-pulse flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-muted rounded w-1/2 animate-pulse" />
              <div className="h-4 bg-muted rounded w-1/3 animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-4/5 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SkillsSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-12", className)}>
      <div className="h-6 bg-muted rounded w-32 animate-pulse" />
      <div className="space-y-8">
        {Array.from({ length: 4 }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <div className="h-5 bg-muted rounded w-40 animate-pulse" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-muted rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-12", className)}>
      <div className="h-6 bg-muted rounded w-32 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-48 bg-muted rounded-lg animate-pulse" />
            <div className="space-y-2">
              <div className="h-5 bg-muted rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="h-6 w-16 bg-muted rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-8", className)}>
      <div className="h-6 bg-muted rounded w-32 animate-pulse" />
      <div className="space-y-4">
        <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
      </div>
      <div className="flex gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-10 w-32 bg-muted rounded animate-pulse" />
        ))}
      </div>
    </section>
  );
}
