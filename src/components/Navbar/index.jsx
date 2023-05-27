import Link from 'next/link';
import {
  DeskView,
  LinkLabel,
  LinksWrapper,
  Logo,
  MediaWrapper,
  MobileList,
  MobileNav,
  MobileView,
  NavbarWrapper,
  PointerWrapper,
  StyledMedia,
} from './Navbar.styles';
import NavMiniList from '../NavMiniList';
import Language from '../Icons/Language';
import Casbah from '../Icons/Casbah';
import Menu from '../Icons/Menu';
import Modal from '../Modal';
import { useState } from 'react';

const Navbar = ({ logo, links, media, languages, languageLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavbarWrapper>
        <MobileView>
          <PointerWrapper>
            <Casbah />
          </PointerWrapper>
          <PointerWrapper onClick={() => setIsOpen(true)}>
            <Menu />
          </PointerWrapper>
        </MobileView>
        <DeskView>
          <Link href="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <LinksWrapper>
            {links.map((link, index) =>
              link?.options ? (
                <NavMiniList
                  key={index}
                  name={link.name}
                  options={link.options}
                />
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
          <NavMiniList Icon={Language} languages={languages} />
        </DeskView>
      </NavbarWrapper>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <MobileNav>
          <MobileList>
            {links.map((link, index) =>
              link?.options ? (
                <NavMiniList
                  key={index}
                  name={link.name}
                  options={link.options}
                />
              ) : (
                link?.url && (
                  <Link key={index} href={link?.url}>
                    <LinkLabel>{link.name}</LinkLabel>
                  </Link>
                )
              )
            )}
            <StyledMedia>
              <MediaWrapper>
                {media.map((social, index) => (
                  <Link key={index} href={social.url}>
                    <social.icon />
                  </Link>
                ))}
              </MediaWrapper>
            </StyledMedia>
            <NavMiniList
              Icon={Language}
              languages={languages}
              name={languageLabel}
            />
          </MobileList>
        </MobileNav>
      </Modal>
    </>
  );
};

export default Navbar;
