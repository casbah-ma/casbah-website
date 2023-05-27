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
import Casbah from '@/icons/Casbah';
import Menu from '@/icons/Menu';
import Modal from '../Modal';
import { useState } from 'react';
import { links, logo, media } from '../../config/constant';
import useTranslation from 'next-translate/useTranslation';
import LanguageMenu from '../LanguageMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
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
                    <LinkLabel>{t(link.name)}</LinkLabel>
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
          <LanguageMenu />
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
                    <LinkLabel>{t(link.name)}</LinkLabel>
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
            <LanguageMenu />
          </MobileList>
        </MobileNav>
      </Modal>
    </>
  );
};

export default Navbar;
