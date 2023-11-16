import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { astroImageTools } from "astro-imagetools";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeClassNames from "rehype-class-names";
import rehypeExternalLinks from "rehype-external-links";
// import remarkAttr from "remark-attr";
import { AppConfig } from "./src/utils/AppConfig";
import partytown from "@astrojs/partytown";
import redirects from "./redirects.json";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: AppConfig.base_path, // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: "always", // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
    },
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypeClassNames, { "p a, li a": "highlight", img: "mdImage" }],
      [rehypeExternalLinks, { rel: ["nofollow noopener noreferrer"] }],
    ],
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    mdx(),
    astroImageTools,
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  redirects,
});
