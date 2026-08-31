import type { MetadataRoute } from "next";

const productionUrl = "https://portfolio-livid-tau-qf45962w1n.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${productionUrl}/sitemap.xml`,
  };
}
