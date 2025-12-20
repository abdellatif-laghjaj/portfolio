import Markdown from "react-markdown";
import { DATA } from "@/data/resume";

export default function About() {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">→ About</h2>
      <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
        <Markdown>{DATA.summary}</Markdown>
      </div>
    </section>
  );
}
