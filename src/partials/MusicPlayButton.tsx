import { useEffect, useState } from 'react';

type MusicStateDetail = {
  slug: string | null;
  isPlaying: boolean;
};

type MusicPlayButtonProps = {
  slug: string;
  title: string;
  variant?: 'card' | 'inline';
};

const MusicPlayButton = ({
  slug,
  title,
  variant = 'card',
}: MusicPlayButtonProps) => {
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

  const isActive = activeSlug === slug;
  const showPause = isActive && isPlaying;

  const toggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    window.dispatchEvent(new CustomEvent('music:toggle', { detail: { slug } }));
  };

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={toggle}
        className="inline-flex items-center rounded-md border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400/10 data-[active=true]:border-cyan-300 data-[active=true]:bg-cyan-400/15"
        data-active={isActive || undefined}
        aria-label={showPause ? `Pause ${title}` : `Play ${title}`}>
        {showPause ? 'Pause' : 'Play'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="group absolute inset-0 z-10 flex items-center justify-center"
      aria-label={showPause ? `Pause ${title}` : `Play ${title}`}>
      <span
        className={`flex size-16 items-center justify-center rounded-full text-2xl font-bold shadow-lg transition group-hover:scale-105 ${
          isActive
            ? 'bg-cyan-400 text-slate-900 ring-2 ring-white/80'
            : 'bg-cyan-500/90 text-slate-900 group-hover:bg-cyan-400'
        }`}>
        {showPause ? '❚❚' : '▶'}
      </span>
    </button>
  );
};

export { MusicPlayButton };
