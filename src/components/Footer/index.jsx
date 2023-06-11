import {
  FooterCol,
  FooterContainer,
  FooterCopyright,
  FooterLogo,
  FooterNavigation,
  FooterNavigationTitle,
  FooterSocial,
  FooterSocialItems,
  FooterTerms,
  FooterTermsItem,
  FooterWrapper,
  LinkLabel,
  LinksCol,
  LinksWrapper,
  SocialItem,
  SocialWrapper,
  SubLink,
  imageSize,
  socialSize,
} from './Footer.styles';
import MyImage from '../MyImage';
import logo from '../../../public/logo.png';
import { links, socialMedia } from '../../config/constant';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Disclosure } from '@headlessui/react';
import ArrowDown from '@/icons/ArrowDown';

function MyDisclosure({ link }) {
  const { t } = useTranslation();
  return (
    <Disclosure>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button className="flex justify-center items-center gap-2">
            <LinkLabel>{t(link.name)}</LinkLabel>
            <ArrowDown
              color="white"
              className={open && 'rotate-180 transform transition duration-200'}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="border-l border-solid pl-4 h-fit flex flex-col justify-between mt-1 gap-2">
            {link.options.map((item, index) => (
              <Link href={item.url} key={index}>
                <SubLink>{t(item.label)}</SubLink>
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const Footer = ({}) => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCol>
          <FooterLogo>
            <MyImage src={logo} alt="casbah" sizes={imageSize} />
          </FooterLogo>
          <SocialWrapper className="lg:-mr-[4.375rem] z-20">
            <FooterSocial>{t('social')}</FooterSocial>
            <FooterSocialItems>
              {socialMedia.slice(0, 3).map((item, index) => (
                <SocialItem
                  key={index + item.name}
                  as="a"
                  href={item.url}
                  target="_blank"
                >
                  <MyImage src={item.icon} alt={item.name} sizes={socialSize} />
                </SocialItem>
              ))}
            </FooterSocialItems>
          </SocialWrapper>
          <FooterSocialItems className="lg:mr-[3.3rem]">
            {socialMedia.slice(3).map((item, index) => (
              <SocialItem
                key={index + item.name}
                as="a"
                href={item.url}
                target="_blank"
              >
                <MyImage src={item.icon} alt={item.name} sizes={socialSize} />
              </SocialItem>
            ))}
          </FooterSocialItems>
        </FooterCol>

        <FooterNavigation>
          <FooterNavigationTitle>{t('quicknavigation')}</FooterNavigationTitle>
          <LinksWrapper>
            <LinksCol>
              {links.slice(0, 3).map((link, index) =>
                link?.options ? (
                  <MyDisclosure link={link} key={index} />
                ) : (
                  link?.url && (
                    <Link
                      key={index}
                      href={link?.url}
                      className="cursor-pointer"
                    >
                      <LinkLabel>{t(link.name)}</LinkLabel>
                    </Link>
                  )
                )
              )}
            </LinksCol>
            <LinksCol>
              {links.slice(3).map((link, index) =>
                link?.options ? (
                  <MyDisclosure link={link} key={index} />
                ) : (
                  link?.url && (
                    <Link
                      key={index}
                      href={link?.url}
                      className="cursor-pointer"
                    >
                      <LinkLabel>{t(link.name)}</LinkLabel>
                    </Link>
                  )
                )
              )}
            </LinksCol>
          </LinksWrapper>
        </FooterNavigation>
      </FooterContainer>
      <FooterTerms>
        <FooterCopyright>
          {`${t('copyright')} ${year}. ${t('allrightsreserved')}`}
        </FooterCopyright>
        <FooterTermsItem>
          <a href="/privacy" target="_blank">
            {t('privacypolicy')}
          </a>
          <a href="/terms" target="_blank">
            {t('termsconditions')}
          </a>
        </FooterTermsItem>
      </FooterTerms>
    </FooterWrapper>
  );
};

export default Footer;
