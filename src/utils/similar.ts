import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;
type Posts = Array<CollectionEntry<'posts'>>;

interface SimilarityScore {
  post: Post;
  similarity: number;
}

function jaccardSimilarity(setA: Set<string>, setB: Set<string>) {
  const intersection = new Set([...setA].filter((tag) => setB.has(tag)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
}

function getTags(post: Post) {
  return post.data.tags.split(', ').map((t) => t.toLowerCase().trim());
}

function findSimilarPosts(selectedPost: Post, allPosts: Posts) {
  const selectedTags = new Set(getTags(selectedPost));

  const similarityScores: Array<SimilarityScore> = [];

  // Calculate similarity scores for all posts
  allPosts.forEach((post) => {
    const postTags = new Set(getTags(post));
    const similarity = jaccardSimilarity(selectedTags, postTags);
    similarityScores.push({ post, similarity });
  });

  // Sort posts by similarity in descending order
  similarityScores.sort((a, b) => b.similarity - a.similarity);

  // Select the top 4 similar posts
  const similarPosts = similarityScores
    .filter((item) => item.post.slug !== selectedPost.slug)
    .slice(0, 4)
    .map((item) => item.post);
  return similarPosts;
}

export default findSimilarPosts;
