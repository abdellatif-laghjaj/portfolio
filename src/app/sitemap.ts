import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const blogs = posts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt)
      .toISOString()
      .split("T")[0],
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${DATA.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
