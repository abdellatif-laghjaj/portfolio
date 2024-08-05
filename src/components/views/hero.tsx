import BlurFadeText from "@/components/magicui/blur-fade-text";
import {DATA} from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Hero() {
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-1.5">
                        <BlurFadeText
                            delay={DATA.BLUR_FADE_DELAY}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text={`Hi 👋, I'm ${DATA.name.split(" ")[0]}`}
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl"
                            delay={DATA.BLUR_FADE_DELAY}
                            text={DATA.description}
                        />
                    </div>
                    <BlurFade delay={DATA.BLUR_FADE_DELAY}>
                        <Avatar className="size-28 border">
                            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover"/>
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}