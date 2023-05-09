import Link from "next/link";
import {
  LinkLabel,
  LinksWrapper,
  Logo,
  MediaWrapper,
  NavbarWrapper,
} from "./Navbar.styles";
import NavMiniList from "../NavMiniList";

const Navbar = ({ logo, links, media }) => {
  return (
    <NavbarWrapper>
      <Link href="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <LinksWrapper>
        {links.map((link, index) =>
          link?.options ? (
            <NavMiniList key={index} name={link.name} options={link.options} />
          ) : (
            link?.url && (
              <Link key={index} href={link?.url}>
                <LinkLabel>{link.name}</LinkLabel>
              </Link>
            )
          )
        )}
      </LinksWrapper>
      <MediaWrapper>
        {media.map((social, index) => (
          <Link key={index} href={social.url}>
            <social.icon />
          </Link>
        ))}
      </MediaWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
