import { getCollection } from 'astro:content';

export const sortByDate = (posts: any) => {
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
