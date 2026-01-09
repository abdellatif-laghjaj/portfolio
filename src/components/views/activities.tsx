import { MyStats } from "@/components/my-stats";

export default function Activities() {
  return (
    <section id="activity">
      <div className="space-y-12 w-full py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              What I&apos;ve Been Up To
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up opacity-0 [animation-delay:0.2s]">
              Here&apos;s a live feed of my recent development activities and
              achievements.
            </p>
          </div>
        </div>
        <MyStats className="max-w-[800px] mx-auto animate-slide-up opacity-0 [animation-delay:0.3s]" />
      </div>
    </section>
  );
}
