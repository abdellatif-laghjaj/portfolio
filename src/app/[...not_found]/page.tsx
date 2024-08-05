import BlurFade from "@/components/magicui/blur-fade";
import {getBlogPosts} from "@/data/blog";
import {DATA} from "@/data/resume";

export const metadata = {
    title: "Page Not Found",
    description: "This page does not exist. Please check the URL and try again.",
};

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <section className="flex flex-col items-center justify-center h-full">
            <BlurFade delay={DATA.BLUR_FADE_DELAY}>
                <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                    Page Not Found
                </h1>
            </BlurFade>
        </section>
    );
}
