import type { ReactNode } from 'react';

type IPostContentProps = {
  content: any;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => {
  const showImage =
    props.content.imgSrc && !props.content.imgSrc.includes('defaultHero.jpg');
  return (
    <div className="mx-auto mt-5 max-w-prose">
      {showImage && (
        <div className="py-4">
          <img
            className="w-full rounded-lg object-contain object-center"
            src={props.content.imgSrc}
            alt={props.content.imgAlt ?? ''}
            loading="lazy"
          />
        </div>
      )}

      <div className="prose prose-invert mt-8 prose-img:rounded-lg">
        {props.children}
      </div>
    </div>
  );
};

export { PostContent };
