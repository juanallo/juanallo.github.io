import { PostHeader, Section, Tags } from "astro-boilerplate-components";
import type { ReactNode } from "react";

import { AppConfig } from "@/utils/AppConfig";

import { PostContent } from "./PostContent";
import { getFormattedTags, getRandomColor, slugify } from "@/utils/tags";

type IBlogPostProps = {
  data: any;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.data} author={AppConfig.author} />
    <PostContent content={props.data}>{props.children}</PostContent>
    <hr className="border-0 prose mx-auto my-8 h-[1px] bg-slate-700 " />
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
    <div className="flex gap-2 mx-auto max-w-prose mt-8">
      {getFormattedTags(props).map((t) => (
        <a href={`/tag/${slugify(t)}/`}>
          <Tags key={t} color={getRandomColor()}>
            {t}
          </Tags>
        </a>
      ))}
    </div>
  </Section>
);

export { BlogPost };
