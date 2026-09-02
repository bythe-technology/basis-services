import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://basisserv.com", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://basisserv.com/services", lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
