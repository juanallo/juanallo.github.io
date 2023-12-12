import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

type Posts = Array<CollectionEntry<'posts'>>;

const sortByDate = (posts: Posts) => {
  return posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );
};

export const getPublished = async () => {
  const allPosts = await getCollection('posts');
  const sortedPosts = sortByDate(allPosts.filter((p) => !p.data.draft));

  return sortedPosts;
};
