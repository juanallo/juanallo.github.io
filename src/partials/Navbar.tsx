import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/jar.gif"
              alt="Logo"
              className="pr-2"
              width="60px"
              height="35px"
            />
          }
          name="Juan Manuel Allo Ron"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/juanallo">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/juan_allo">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
