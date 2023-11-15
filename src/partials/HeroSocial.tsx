export type IHeroSocialProps = {
  src: string;
  alt: string;
};

export const HeroSocial = (props: IHeroSocialProps) => (
  <img
    className="h-12 w-12 hover:translate-y-1"
    src={props.src}
    alt={props.alt}
    width="48"
    height="48"
    loading="lazy"
  />
);
