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
      image: image(),
      imgAlt: z.string(),
      hideHero: z.boolean().default(false).optional(),
      tags: z.string().default('whatever'),
      draft: z.boolean().default(false).optional(),
    }),
});
export const collections = {
  posts: postsCollection,
};
