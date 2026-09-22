import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hesaplama-sitesi-ebon.vercel.app",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
```
