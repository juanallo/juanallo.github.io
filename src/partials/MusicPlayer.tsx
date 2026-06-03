import { useCallback, useEffect, useRef, useState } from 'react';

import type { PlayerTrack } from '@/utils/musicTracks';

type MusicPlayerProps = {
  tracks: PlayerTrack[];
  activeSlug: string | null;
};

const broadcastState = (slug: string | null, isPlaying: boolean) => {
  window.dispatchEvent(
    new CustomEvent('music:state', { detail: { slug, isPlaying } }),
  );
};

const MusicPlayer = ({ tracks, activeSlug }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const currentTrack =
    tracks.find((track) => track.slug === currentSlug) ?? null;

  const selectTrack = useCallback(
    (slug: string, autoplay = true) => {
      const track = tracks.find((item) => item.slug === slug);
      if (!track) return;

      setIsDismissed(false);
      setCurrentSlug(slug);

      if (!audioRef.current) return;

      const sameSource = audioRef.current.src.endsWith(track.mp3);
      if (!sameSource) {
        audioRef.current.src = track.mp3;
      }

      if (autoplay) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            broadcastState(slug, true);
          })
          .catch(() => {
            setIsPlaying(false);
            broadcastState(slug, false);
          });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        broadcastState(slug, false);
      }
    },
    [tracks],
  );

  const toggleTrack = useCallback(
    (slug: string) => {
      if (currentSlug === slug) {
        if (!audioRef.current) return;
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true);
              broadcastState(slug, true);
            })
            .catch(() => {
              setIsPlaying(false);
              broadcastState(slug, false);
            });
        }
        return;
      }

      selectTrack(slug, true);
    },
    [currentSlug, isPlaying, selectTrack],
  );

  useEffect(() => {
    const onPlay = (event: Event) => {
      const customEvent = event as CustomEvent<{ slug: string }>;
      if (customEvent.detail?.slug) {
        selectTrack(customEvent.detail.slug, true);
      }
    };

    const onToggle = (event: Event) => {
      const customEvent = event as CustomEvent<{ slug: string }>;
      if (customEvent.detail?.slug) {
        toggleTrack(customEvent.detail.slug);
      }
    };

    window.addEventListener('music:play', onPlay);
    window.addEventListener('music:toggle', onToggle);
    return () => {
      window.removeEventListener('music:play', onPlay);
      window.removeEventListener('music:toggle', onToggle);
    };
  }, [selectTrack, toggleTrack]);

  useEffect(() => {
    if (!activeSlug || isDismissed) return;
    if (currentSlug === activeSlug) return;

    selectTrack(activeSlug, isPlaying);
  }, [activeSlug, currentSlug, isDismissed, isPlaying, selectTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const onPlay = () => {
      setIsPlaying(true);
      if (currentSlug) broadcastState(currentSlug, true);
    };
    const onPause = () => {
      setIsPlaying(false);
      if (currentSlug) broadcastState(currentSlug, false);
    };
    const onEnded = () => {
      setIsPlaying(false);
      if (currentSlug) broadcastState(currentSlug, false);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentSlug]);

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
    }
    setIsPlaying(false);
    setCurrentSlug(null);
    setIsDismissed(true);
    broadcastState(null, false);
  };

  const togglePlayback = () => {
    if (!currentSlug) return;
    toggleTrack(currentSlug);
  };

  if (!currentTrack) {
    return <audio ref={audioRef} preload="none" className="hidden" />;
  }

  return (
    <>
      <audio ref={audioRef} preload="none" className="hidden" />
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-800/95 backdrop-blur"
        role="region"
        aria-label="Music player">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-3">
          <button
            type="button"
            onClick={togglePlayback}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-900 transition hover:bg-cyan-400"
            aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '❚❚' : '▶'}
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {currentTrack.title}
            </p>
            <a
              href={currentTrack.detailUrl}
              className="text-xs text-cyan-400 hover:underline">
              View track
            </a>
          </div>

          <button
            type="button"
            onClick={closePlayer}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-700 hover:text-white"
            aria-label="Close player">
            ✕
          </button>
        </div>
      </div>
    </>
  );
};

export { MusicPlayer };
