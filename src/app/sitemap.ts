import type { MetadataRoute } from "next";
import { services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-27T00:00:00.000Z");
  const corePages: MetadataRoute.Sitemap = [
    { url: "https://basisserv.com", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://basisserv.com/services", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://basisserv.com/service-areas", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
  return [
    ...corePages,
    ...services.map((service) => ({
      url: `https://basisserv.com/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
