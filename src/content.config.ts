import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({
    base: "./src/content/work",
    pattern: "**/*.md",
  }),
});

export const collections = { work };
