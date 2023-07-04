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
  Social,
} from './Navbar.styles';
import NavMiniList from '../NavMiniList';
import Language from '@/icons/LanguageIcon';
import Casbah from '@/icons/Casbah';
import Menu from '@/icons/Menu';
import Modal from '../Modal';
import { useState } from 'react';
import { links, logo, media } from '../../config/constant';
import useTranslation from 'next-translate/useTranslation';
import LanguageMenu from '../LanguageMenu';
import { motion } from 'framer-motion';
import { child, container } from './variants';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <NavbarWrapper>
        <MobileView>
          <PointerWrapper>
            <Link href="/">
              <Casbah />
            </Link>
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
                    <LinkLabel>
                      <motion.div
                        className="w-full flex overflow-hidden"
                        variants={container}
                        initial="hidden"
                        animate="hidden"
                        whileTap="click"
                        whileHover="visible"
                      >
                        {Array.from(t(link.name)).map((letter, index) => (
                          <motion.div
                            key={index}
                            variants={child}
                            className={index == 0 ? 'capitalize' : undefined}
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </motion.div>
                        ))}
                      </motion.div>
                    </LinkLabel>
                  </Link>
                )
              )
            )}
          </LinksWrapper>
          <Social>
            <MediaWrapper>
              {media.map((social, index) => (
                <Link key={index} href={social.url} target="_blank">
                  <social.icon />
                </Link>
              ))}
            </MediaWrapper>
            <LanguageMenu />
          </Social>
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
                    <LinkLabel className="capitalize">{link.name}</LinkLabel>
                  </Link>
                )
              )
            )}
            <MediaWrapper>
              {media.map((social, index) => (
                <Link key={index} href={social.url}>
                  <social.icon />
                </Link>
              ))}
            </MediaWrapper>

            <NavMiniList
              Icon={Language}
              languages={router.locales}
              name={t('languages')}
            />
          </MobileList>
        </MobileNav>
      </Modal>
    </>
  );
};

export default Navbar;
