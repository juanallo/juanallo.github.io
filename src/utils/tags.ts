import { slug } from 'github-slugger';

import { ColorTags } from '@/partials/Tags';

export function getTags(post) {
  return post.data.tags.split(', ').map((tag) => tag.toLowerCase().trim());
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getFormattedTags(post) {
  return getTags(post).map((tag) => capitalizeFirstLetter(tag));
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomColor() {
  const values = Object.keys(ColorTags);
  const key = values[getRandomInt(values.length)];
  return ColorTags[key];
}

export function getAllTagsFromPosts(posts): [string] {
  const allTagsSet = new Set();

  posts.forEach((post) => {
    const tags = post.data.tags
      .split(', ')
      .map((tag) => tag.toLowerCase().trim());
    tags.forEach((tag) => {
      allTagsSet.add(capitalizeFirstLetter(tag));
    });
  });

  const allTags = [...allTagsSet] as [string]; // Convert the set to an array

  return allTags;
}

export const slugify = (content: string) => {
  if (!content) return null;

  return slug(
    content
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
  );
};
