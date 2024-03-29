import type { ReactNode } from 'react';

export const ColorTags = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
} as const;

type ITagsProps = {
  color: keyof typeof ColorTags;
  children: ReactNode;
};

const colorToClassMap = {
  [ColorTags.SLATE]: 'bg-slate-400 text-slate-900',
  [ColorTags.GRAY]: 'bg-gray-400 text-slate-900',
  [ColorTags.ZINC]: 'bg-zinc-400 text-slate-900',
  [ColorTags.NEUTRAL]: 'bg-neutral-400 text-slate-900',
  [ColorTags.STONE]: 'bg-stone-400 text-slate-900',
  [ColorTags.RED]: 'bg-red-400 text-slate-900',
  [ColorTags.ORANGE]: 'bg-orange-400 text-slate-900',
  [ColorTags.AMBER]: 'bg-amber-400 text-slate-900',
  [ColorTags.YELLOW]: 'bg-yellow-400 text-slate-900',
  [ColorTags.LIME]: 'bg-lime-400 text-slate-900',
  [ColorTags.GREEN]: 'bg-green-400 text-slate-900',
  [ColorTags.EMERALD]: 'bg-emerald-400 text-slate-900',
  [ColorTags.TEAL]: 'bg-teal-400 text-slate-900',
  [ColorTags.CYAN]: 'bg-cyan-400 text-slate-900',
  [ColorTags.SKY]: 'bg-sky-400 text-slate-900',
  [ColorTags.BLUE]: 'bg-blue-400 text-slate-900',
  [ColorTags.INDIGO]: 'bg-indigo-400 text-slate-900',
  [ColorTags.VIOLET]: 'bg-violet-400 text-slate-900',
  [ColorTags.PURPLE]: 'bg-purple-400 text-slate-900',
  [ColorTags.FUCHSIA]: 'bg-fuchsia-400 text-slate-900',
  [ColorTags.PINK]: 'bg-pink-400 text-slate-900',
  [ColorTags.ROSE]: 'bg-rose-400 text-slate-900',
};

const Tags = (props: ITagsProps) => (
  <div
    className={`whitespace-nowrap rounded-md px-2 py-1 text-xs font-semibold ${
      colorToClassMap[props.color]
    }`}
  >
    {props.children}
  </div>
);

export { Tags };
