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

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialWrapper>
          <SocialItem>
            <FooterLabel>{t('email')}</FooterLabel>
            <EmailText href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@ctd.ma" target="_blank">
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
        <Link href="/terms" target="_blank">
          <TermsItem className="underline -mt-10 md:-mt-5 lg:mt-0 lg:ml-1.5">
            {t('termsconditions')}
          </TermsItem>
        </Link>
      </FooterTerms>
    </FooterWrapper>
  );
};

export default Footer;
