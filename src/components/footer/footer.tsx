import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo
        className="footer__logo-link"
        href="main.html"
        imgClassName="footer__logo"
        width={64}
        height={33}
      />
    </footer>
  );
}

export default Footer;
