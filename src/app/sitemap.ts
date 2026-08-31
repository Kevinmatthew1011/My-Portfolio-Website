import type { MetadataRoute } from "next";

const productionUrl = "https://portfolio-livid-tau-qf45962w1n.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: productionUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
