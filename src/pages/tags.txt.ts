import { getPublished } from '@/utils/Posts';
import { getAllTagsFromPosts, slugify } from '@/utils/tags';

export const get = async () => {
  const posts = await getPublished();

  const tags = getAllTagsFromPosts(posts).map((tag) => slugify(tag));

  return new Response(JSON.stringify(tags), { status: 200 });
};
