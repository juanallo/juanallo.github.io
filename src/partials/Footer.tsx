import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

import Fill from './Fill';

const Footer = () => (
  <>
    <Section>
      <p className="w-full text-center ">
        @{new Date().getFullYear()} {AppConfig.site_name}. All Rights reserved
      </p>
      <p className="w-full text-center ">
        <a
          className="highlight font-bold"
          href="https://x.com/juan_allo"
          target="_blank"
          rel="noopener noreferrer">
          Follow me on X
        </a>
      </p>
    </Section>
    <Fill />
  </>
);

export { Footer };
