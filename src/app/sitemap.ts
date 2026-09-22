```tsx
import type { MetadataRoute } from "next";
import { calculators } from "@/calculators/registry";
import { categories } from "@/data/categories";

const baseUrl = "https://hesaplama-sitesi-ebon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorUrls: MetadataRoute.Sitemap = calculators.map(
    (calculator) => ({
      url: `${baseUrl}/${calculator.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const categoryUrls: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${baseUrl}/kategori/${category.slug}`,
      changeFrequency: "monthly",
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
```
