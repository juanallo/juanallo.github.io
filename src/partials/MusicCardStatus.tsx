import { useEffect, useState } from 'react';

type MusicStateDetail = {
  slug: string | null;
  isPlaying: boolean;
};

type MusicCardStatusProps = {
  slug: string;
};

const MusicCardStatus = ({ slug }: MusicCardStatusProps) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const { slug: currentSlug, isPlaying: playing } = (
        event as CustomEvent<MusicStateDetail>
      ).detail;
      setActiveSlug(currentSlug ?? null);
      setIsPlaying(Boolean(playing));
    };

    window.addEventListener('music:state', handler);
    return () => window.removeEventListener('music:state', handler);
  }, []);

  if (activeSlug !== slug) return null;

  return (
    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-cyan-400">
      {isPlaying ? 'Now playing' : 'Paused'}
    </p>
  );
};

export { MusicCardStatus };
