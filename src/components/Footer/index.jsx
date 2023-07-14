import {
  CopyrightSection,
  FooterContainer,
  FooterCopyright,
  FooterInfo,
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
  SocialSection,
  SocialWrapper,
  SubLink,
  TermsSection,
  imageSize,
} from './Footer.styles';
import MyImage from '../MyImage';
import logo from '../../../public/logo.png';
import { links, socialMedia, infos } from '../../config/constant';
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
        <FooterInfo>
          <FooterTitle>contact info</FooterTitle>
          <InfoSection>
            <div className="w-[14.25rem] flex flex-col gap-7">
              <Info>{infos?.phone}</Info>
              <Info>{infos?.email}</Info>
            </div>
            <Info>{infos?.address}</Info>
          </InfoSection>
        </FooterInfo>

        <SocialWrapper>
          <FooterNavigation>
            <FooterTitle>{t('quicknavigation')}</FooterTitle>
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
          <SocialInfo>
            <FooterTitle>{t('social')}</FooterTitle>
            <SocialSection>
              {socialMedia.map((item, index) => {
                return (
                  <Link href={item?.url} key={index} target="_blank">
                    <Info>{item?.name}</Info>
                  </Link>
                );
              })}
            </SocialSection>
          </SocialInfo>
        </SocialWrapper>
      </FooterContainer>
      <TermsSection>
        <CopyrightSection>
          {!isMobile ? (
            <>
              <FooterCopyright>
                {`${t('copyright')} ${year}. ${t('allrightsreserved')}`}
              </FooterCopyright>
              <Link href="/">
                <MyImage src={logo} alt="casbah" sizes={imageSize} />
              </Link>
              <FooterTerms>
                <a href="/privacy" target="_blank">
                  {t('privacypolicy')}
                </a>
                <a href="/terms" target="_blank">
                  {t('termsconditions')}
                </a>
              </FooterTerms>
            </>
          ) : (
            <MobileTerms>
              <MyImage src={logo} alt="casbah" sizes={imageSize} />
              <div className="flex flex-col gap-6">
                <FooterCopyright>
                  {`${t('copyright')} ${year}. ${t('allrightsreserved')}`}
                </FooterCopyright>
                <FooterTerms>
                  <a href="/privacy" target="_blank">
                    {t('privacypolicy')}
                  </a>
                  <a href="/terms" target="_blank">
                    {t('termsconditions')}
                  </a>
                </FooterTerms>
              </div>
            </MobileTerms>
          )}
        </CopyrightSection>
      </TermsSection>
    </FooterWrapper>
  );
};

export default Footer;
