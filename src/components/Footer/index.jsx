import {
  Address,
  AddressItem,
  AddressName,
  AddressText,
  AddressWrapper,
  CopyrightSection,
  EmailText,
  FooterContainer,
  FooterCopyright,
  FooterInfo,
  FooterLabel,
  FooterNavigation,
  FooterNavigationTitle,
  FooterTerms,
  FooterTitle,
  FooterWrapper,
  Info,
  InfoSection,
  LinkLabel,
  LinksCol,
  LinksWrapper,
  MobileTerms,
  SocialInfo,
  SocialItem,
  SocialLinks,
  SocialSection,
  SocialWrapper,
  SubLink,
  TermsItem,
  TermsSection,
  TermsWrapper,
  imageSize,
} from './Footer.styles';
import MyImage from '../MyImage';
import logo from '../../../public/logo.png';
import { links, socialMedia, infos, Addresses } from '../../config/constant';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';

function MyDisclosure({ link }) {
  const { t } = useTranslation();

  return (
    <Disclosure defaultOpen={true} as="div">
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
          <Disclosure.Button className="flex justify-center items-center gap-2">
            <LinkLabel>{t(link.name)}</LinkLabel>
          </Disclosure.Button>
          <Disclosure.Panel className="border-l border-solid pl-4 h-fit flex flex-col justify-between mt-5 gap-2">
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

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Set isMobile to true for viewport width <= 768 (tablet and mobile devices)
    };

    handleResize(); // Check initial viewport width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialWrapper>
          <SocialItem>
            <FooterLabel>{t('email')}</FooterLabel>
            <EmailText>{infos.email}</EmailText>
          </SocialItem>
          <SocialItem>
            <FooterLabel>{t('followus')}</FooterLabel>
            <SocialLinks>
              {socialMedia.map((social, index) => (
                <Link
                  href={social.url}
                  target="_blank"
                  key={social.name + index}
                >
                  {social.name}
                </Link>
              ))}
            </SocialLinks>
          </SocialItem>
        </SocialWrapper>
        <AddressWrapper>
          <FooterLabel>{t('address')}</FooterLabel>
          <Address>
            {Addresses.map((adr, index) => (
              <AddressItem key={index + adr.name}>
                <AddressName>{adr.name}</AddressName>
                <AddressText>{adr.address}</AddressText>
              </AddressItem>
            ))}
          </Address>
        </AddressWrapper>
      </FooterContainer>
      <FooterTerms>
        <Link href="/">
          <MyImage src={logo} alt="casbah" sizes={imageSize} />
        </Link>
        <TermsWrapper>
          <TermsItem>Copyright © 2023. All Rights Reserved.</TermsItem>
          <Link href="/privacy" target="_blank">
            <TermsItem className="underline">privacy policy</TermsItem>
          </Link>
        </TermsWrapper>
        <Link href="/terms" target="_blank">
          <TermsItem className="underline -mt-10 md:-mt-5 lg:mt-0">
            terms & conditions
          </TermsItem>
        </Link>
      </FooterTerms>
    </FooterWrapper>
  );
};

export default Footer;
