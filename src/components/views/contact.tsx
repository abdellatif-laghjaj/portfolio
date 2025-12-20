import Link from "next/link";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pb-12">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I&apos;ll try my
            best to get back to you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={`mailto:${DATA.contact.email}`}>
              <Button className="rounded-full px-8 py-6 text-lg">
                Hire Me
              </Button>
            </Link>
            <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
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
