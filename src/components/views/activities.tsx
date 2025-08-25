import BlurFade from "@/components/magicui/blur-fade";
import { MyStats } from "@/components/my-stats";
import { DATA } from "@/data/resume";

export default function Activities() {
  return (
    <section id="activity">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 15}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Recent Activity
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What I've Been Up To
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here's a live feed of my recent development activities and
                achievements.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={DATA.BLUR_FADE_DELAY * 16}>
          <MyStats className="max-w-[800px] mx-auto" />
        </BlurFade>
      </div>
    </section>
  );
}
