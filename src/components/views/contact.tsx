import Link from "next/link";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pb-12">
        <div className="space-y-3 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-up opacity-0 [animation-delay:0.1s]">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I&apos;ll try my
            best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up opacity-0 [animation-delay:0.2s]">
            <Link href={`mailto:${DATA.contact.email}`}>
              <Button className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                Hire Me
              </Button>
            </Link>
            <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
