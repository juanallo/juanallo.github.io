import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

type MusicTracks = Array<CollectionEntry<'music'>>;

const sortTracks = (tracks: MusicTracks) =>
  tracks.sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) return orderA - orderB;
    return (
      new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
    );
  });

export const getPublishedMusic = async () => {
  const allTracks = await getCollection('music');
  return sortTracks(allTracks.filter((track) => !track.data.draft));
};
