import type { MetadataRoute } from "next";
import { calculators } from "@/calculators/registry";
import { categories } from "@/data/categories";

const baseUrl = "https://hesaplama-sitesi-ebon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls: MetadataRoute.Sitemap = categories.map((category) => ({
    url: baseUrl + "/" + category.slug,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const calculatorUrls: MetadataRoute.Sitemap = calculators.map(
    (calculator) => ({
      url: baseUrl + "/" + calculator.slug,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryUrls,
    ...calculatorUrls,
  ];
}
