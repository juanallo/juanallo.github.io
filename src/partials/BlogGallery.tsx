import { BlogCard } from "./BlogCard";

const BlogGallery = (props: any) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.slug} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
