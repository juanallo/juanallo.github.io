import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

import avatar from "@/images/avatar.png";
import linkedinIcon from "@/images/linkedin-icon.png";
import twitterIcon from "@/images/twitter-icon.png";

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
            I'm a staff+ Software Engineer building engaging user experiences
            and always learning!
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
          src={avatar.src}
          alt=""
          width={avatar.width}
          height={avatar.height}
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/juan_allo" target="_blank">
            <HeroSocial src={twitterIcon.src} alt="Twitter icon" />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="../images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/juanmanuelalloron/"
            target="_blank"
          >
            <HeroSocial src={linkedinIcon.src} alt="Linkedin icon" />
          </a>
          {/* <a href="/" target="_blank">
            <HeroSocial
              src="../images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
