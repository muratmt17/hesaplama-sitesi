```tsx id="k8xwq4"
import type { MetadataRoute } from "next";

const baseUrl = "https://hesaplama-sitesi-ebon.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```
