import { ColorTags } from "@/partials/Tags";
import { slug } from "github-slugger";

export function getTags(post) {
  return post.data.tags.split(", ").map((tag) => tag.toLowerCase().trim());
}

export function getFormattedTags(post) {
  return getTags(post).map((tag) => capitalizeFirstLetter(tag));
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomColor() {
  const values = Object.keys(ColorTags);
  const key = values[getRandomInt(values.length)];
  return ColorTags[key];
}

export function getAllTagsFromPosts(posts): [string] {
  const allTagsSet = new Set();

  for (const post of posts) {
    const tags = post.data.tags
      .split(", ")
      .map((tag) => tag.toLowerCase().trim());
    for (const tag of tags) {
      allTagsSet.add(capitalizeFirstLetter(tag));
    }
  }

  const allTags = [...allTagsSet] as [string]; // Convert the set to an array

  return allTags;
}

export const slugify = (content: string) => {
  if (!content) return null;

  return slug(
    content
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
  );
};
