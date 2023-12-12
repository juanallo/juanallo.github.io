import type { CollectionEntry } from 'astro:content';
import { Section } from 'astro-boilerplate-components';
import type { PropsWithChildren } from 'react';

import { AppConfig } from '@/utils/AppConfig';
import { getFormattedTags, getRandomColor, slugify } from '@/utils/tags';

import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';
import { Tags } from './Tags';

const BlogPost = (props: PropsWithChildren<CollectionEntry<'posts'>>) => (
  <Section>
    <PostHeader content={props.data} author={AppConfig.author} />
    <PostContent content={props.data}>{props.children}</PostContent>
    <hr className="prose mx-auto my-8 h-[1px] border-0 bg-slate-700 " />
    <p className="mx-auto max-w-prose">
      Catch up with me on Twitter:
      <a
        className="highlight px-2 font-bold"
        href="https://twitter.com/juan_allo"
        target="_blank"
      >
        @juan_allo
      </a>
    </p>
    <div className=" mx-auto mt-8 flex max-w-prose flex-wrap gap-2">
      {getFormattedTags(props).map((t) => (
        <a href={`/tag/${slugify(t)}/`} className="inline-block">
          <Tags key={t} color={getRandomColor()}>
            {t}
          </Tags>
        </a>
      ))}
    </div>
  </Section>
);

export { BlogPost };
