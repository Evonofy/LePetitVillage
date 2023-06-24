import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";


// https://astro.build/config
export default defineConfig({
  site: "https://lepetit-village.vercel.app",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image(), sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date("2022-02-24"),
    serviceEntryPoint: '@astrojs/image/sharp',
  }), prefetch()]
});