import type { CollectionEntry } from 'astro:content';

export type PlayerTrack = {
  slug: string;
  title: string;
  mp3: string;
  detailUrl: string;
};

export const toPlayerTracks = (
  entries: Array<CollectionEntry<'music'>>,
): PlayerTrack[] =>
  entries.map((entry) => ({
    slug: entry.slug,
    title: entry.data.title,
    mp3: entry.data.mp3,
    detailUrl: `/music/${entry.slug}/`,
  }));
