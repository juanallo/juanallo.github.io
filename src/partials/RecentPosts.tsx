import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  GradientText,
  Section,
} from 'astro-boilerplate-components';
import { BlogGallery } from './BlogGallery';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
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
      <div className="text-md pt-8 text-center">
        <a href="/posts/2/">Older Posts →</a>
      </div>
    </>
  </Section>
);

export { RecentPosts };
