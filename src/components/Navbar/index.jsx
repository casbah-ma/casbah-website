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
import { child } from './variants';
import { useRouter } from 'next/router';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useScrollDirection } from 'react-use-scroll-direction';
import AnimatedLink from './NavLink';
const Navbar = ({ hiddenFromHome = false }) => {
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
      <NavbarWrapper $isHidden={isHidden} $hiddenFromHome={hiddenFromHome}>
        <MobileView>
          <Link href="/">
            <Casbah />
          </Link>
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
                      <AnimatedLink title={t(link.name)} />
                    </LinkLabel>
                  </Link>
                )
              )
            )}
          </LinksWrapper>

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
