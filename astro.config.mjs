import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gettoppicks.com",
  integrations: [
    sitemap({
      changefreq: "weekly",
      lastmod: new Date("2026-10-15"),
      filter: (page) => !page.includes("/go/"),
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.priority =
          path === "/" ? 1.0 : path === "/email/" || path === "/email"
            ? 0.9
            : path.startsWith("/reviews/") || path.startsWith("/guides/")
              ? 0.8
              : 0.5;
        return item;
      },
    }),
  ],
});
