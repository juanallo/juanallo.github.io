import type { ReactNode } from "react";

type IPostContentProps = {
  content: any;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => {
  const showImage =
    !props.content.hideHero &&
    props.content.image &&
    !props.content.image.src.includes("defaultHero.jpg");
  return (
    <div className="mx-auto mt-5 max-w-prose">
      {showImage && (
        <div className="py-4">
          <img
            className="w-full rounded-lg object-contain object-center"
            width={props.content.image.width}
            height={props.content.image.height}
            src={props.content.image.src}
            alt={props.content.imgAlt ?? ""}
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
