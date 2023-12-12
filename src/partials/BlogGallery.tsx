import type { CollectionEntry } from 'astro:content';

import { BlogCard } from './BlogCard';

export interface BlogGalleryProps {
  postList: Array<CollectionEntry<'posts'>>;
}

const BlogGallery = (props: BlogGalleryProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.slug} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
