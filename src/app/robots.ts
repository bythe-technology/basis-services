import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://basisserv.com/sitemap.xml",
    host: "https://basisserv.com",
  };
}
