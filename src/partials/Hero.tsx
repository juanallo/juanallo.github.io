import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Juan</GradientText> 👋
        </>
      }
      description={
        <div className="flex flex-col gap-2">
          <p>
            I am staff+ Software Engineer building engaging user experiences and
            always learning!
          </p>
          <p>
            Passionate about web performance, React, and software architecture.
            I love everything web and beyond, and I'm always exploring new
            technologies and techniques.
          </p>
          <p>
            Follow my blog for tales of design, development, and innovation.
          </p>
        </div>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/juanallo" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/juanmanuelalloron/"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          {/* <a href="/" target="_blank">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
