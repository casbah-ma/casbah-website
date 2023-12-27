import {
  Address,
  AddressItem,
  AddressName,
  AddressText,
  AddressWrapper,
  EmailText,
  FooterContainer,
  FooterLabel,
  FooterTerms,
  FooterToast,
  FooterWrapper,
  SocialItem,
  SocialLinks,
  SocialWrapper,
  TermsItem,
  TermsWrapper,
  imageSize,
} from './Footer.styles';
import MyImage from '../MyImage';
import logo from '../../../public/logo.png';
import { socialMedia, infos, Addresses } from '../../config/constant';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import withReactContent from 'sweetalert2-react-content';
import CheckedIcon from '../../icons/CheckedIcon';
import { useState } from 'react';

const Footer = ({ ...rest }) => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(infos.email);

    // alert copied and hide it after 3sec
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <FooterWrapper {...rest}>
      <FooterContainer>
        <SocialWrapper>
          <SocialItem>
            <FooterLabel>{t('email')}</FooterLabel>
            <EmailText id="email" onClick={handleClick}>
              {infos.email}
            </EmailText>
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
          <TermsItem>
            {`${t('copyright')} ${year}. ${t('allrightsreserved')}`}
          </TermsItem>
          <Link href="/privacy" target="_blank">
            <TermsItem className="underline">{t('privacypolicy')}</TermsItem>
          </Link>
        </TermsWrapper>
        <Link href="https://github.com/casbah-ma/casbah-website" target="_blank">
          <TermsItem className="underline -mt-10 md:-mt-5 lg:mt-0 lg:ml-1.5">
            {t('siteopensource')}
          </TermsItem>
        </Link>
      </FooterTerms>
      {copied && (
        <FooterToast>
          <CheckedIcon /> Email copied to clipboard
        </FooterToast>
      )}
    </FooterWrapper>
  );
};

export default Footer;
