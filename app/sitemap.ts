import type { MetadataRoute } from "next";
import { artworks, news } from "@/lib/gallery";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/gallery", "/gallery/harshan", "/gallery/bindu", "/exhibitions", "/news", "/contact"];

  return [
    ...pages.map((path) => ({
      url: `${site.url}${path || "/"}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...artworks.map((work) => ({
      url: `${site.url}/work/${work.slug}`,
      changeFrequency: "monthly" as const,
      priority: work.medium === "Acrylic" ? 0.8 : 0.5,
    })),
    ...news.flatMap((item) =>
      item.slug
        ? [{ url: `${site.url}/news/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.4 }]
        : [],
    ),
  ];
}
