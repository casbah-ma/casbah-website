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
import { useEffect, useState } from 'react';
import { links, logo, media } from '../../config/constant';
import useTranslation from 'next-translate/useTranslation';
import LanguageMenu from '../LanguageMenu';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const container = {
    hidden: {},
    visible: (i = 1) => ({
      transition: { staggerChildren: 0.05, delayChildren: i * 0 },
    }),
    click: (i = 1) => ({
      transition: { staggerChildren: 0.05, delayChildren: i * 0 },
    }),
  };

  const child = {
    visible: {
      y: [8, 0],
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 200,
      },
    },
    click: {
      y: [8, 0],
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 200,
      },
    },
    hidden: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 200,
      },
    },
  };

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
                            className={index == 0 && 'capitalize'}
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
