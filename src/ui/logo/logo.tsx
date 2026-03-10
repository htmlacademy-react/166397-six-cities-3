type LogoProps = {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
}

function Logo({ width = 81, height = 41, href, className, imgClassName }: LogoProps): JSX.Element {
  return (
    <a className={`${className}`} {...(href && {href: href})}>
      <img
        className={imgClassName}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </a>
  );
}

export default Logo;
