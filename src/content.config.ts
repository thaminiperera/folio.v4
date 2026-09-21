import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    github: z.string().url(),
    demo: z.string().url().optional(),
    extraLink: z
      .object({
        label: z.string(),
        href: z.string().url(),
      })
      .optional(),
    order: z.number(),
  }),
});

export const collections = { work };
