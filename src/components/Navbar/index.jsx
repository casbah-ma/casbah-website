import Link from 'next/link';
import {
  DeskView,
  LinkLabel,
  LinksWrapper,
  Logo,
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
import { useEffect, useState } from 'react';
import { links, logo } from '../../config/constant';
import useTranslation from 'next-translate/useTranslation';
import LanguageMenu from '../LanguageMenu';
import { motion } from 'framer-motion';
import { child, container } from './variants';
import { useRouter } from 'next/router';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useScrollDirection } from 'react-use-scroll-direction';
const Navbar = ({ hidden = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { t } = useTranslation();
  const router = useRouter();

  //change the navbar on scroll
  const scrollPosition = useScrollPosition();
  const { scrollDirection } = useScrollDirection();

  useEffect(() => {
    const delta = 20;
    if (scrollPosition > 100 && scrollDirection === 'DOWN') {
      setIsHidden(true);
    }

    if (scrollDirection === 'DOWN' && scrollPosition > delta) {
      setIsHidden(true);
    } else if (scrollDirection === 'UP') {
      setIsHidden(false);
    }
  }, [scrollPosition, scrollDirection]);

  return (
    <>
      <NavbarWrapper id="navbar" $isHidden={isHidden || hidden}>
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
                      <div className="wave w-full  ">
                        {Array.from(t(link.name)).map((letter, index) => (
                          <span
                            key={index}
                            variants={child}
                            className={index == 0 ? 'capitalize' : undefined}
                            style={{ animationDelay: `${0.07 * index}s` }}
                            data-index={index}
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </span>
                        ))}
                      </div>
                    </LinkLabel>
                  </Link>
                )
              )
            )}
          </LinksWrapper>
          <Social>
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
