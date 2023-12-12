import type { CollectionEntry } from 'astro:content';
import { GradientText, Section } from 'astro-boilerplate-components';

import { BlogGallery } from './BlogGallery';

type IRecentPostsProps = {
  postList: Array<CollectionEntry<'posts'>>;
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">View all Posts →</a>
        </div>
      </div>
    }
  >
    <>
      <BlogGallery postList={props.postList} />
      <div className="pt-8 text-center">
        <a href="/posts/2/">Older Posts →</a>
      </div>
    </>
  </Section>
);

export { RecentPosts };
