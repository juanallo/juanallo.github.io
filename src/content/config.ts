// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: image().optional(),
      imgAlt: z.string().optional(),
      hideHero: z.boolean().default(false).optional(),
      tags: z.string().default('whatever'),
      draft: z.boolean().default(false).optional(),
    }),
});
const musicCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    poster: z.string(),
    video: z.string(),
    mp3: z.string(),
    tool: z.string(),
    order: z.number().optional(),
    prompt: z.string().optional(),
    tags: z.string().optional(),
    draft: z.boolean().default(false).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  music: musicCollection,
};
