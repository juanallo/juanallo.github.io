import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

import Fill from './Fill';

const Footer = () => (
  <>
    <Section>
      <p className="w-full text-center ">
        @{new Date().getFullYear()} {AppConfig.site_name}. All Rights reserved
      </p>
    </Section>
    <Fill />
  </>
);

export { Footer };
