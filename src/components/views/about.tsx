import Markdown from "react-markdown";
import { DATA } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="animate-fade-in">
      <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        → About
      </h2>
      <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert animate-slide-up opacity-0 [animation-delay:0.1s]">
        <Markdown>{DATA.summary}</Markdown>
      </div>
    </section>
  );
}
