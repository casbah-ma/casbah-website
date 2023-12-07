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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Footer = () => {
  const MySwal = withReactContent(Swal);
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  const handleClick = () => {
    // Get the text field
    var copyText = infos.email;

    // // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(infos.email);

    // Alert the copied text
    MySwal.fire({
      title: <strong>{t('thankyou')}</strong>,
      html: <p>{t('emailcopied')}</p>,
      icon: 'success',
    });
  };

  return (
    <FooterWrapper>
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
