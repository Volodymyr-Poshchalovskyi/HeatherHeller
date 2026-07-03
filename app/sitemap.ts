import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heatherheller.com";

  const routes = [
    "",
    "/about",
    "/consulting",
    "/experience-lab",
    "/sinners-saints",
    "/case-studies",
    "/production-portfolio",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
