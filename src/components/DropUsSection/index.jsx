import MapCard from '../Map';
import PropTypes from 'prop-types';
import Title from '../Title';
import {
  Header,
  HeaderLine,
  HeaderTitle,
  InfoSection,
  Wrapper,
} from './DropUsSection.styles';
import useTranslation from 'next-translate/useTranslation';
import Info from './Info';
import SpecialText from '../SpecialText';
import { cords, infos } from '../../config/constant';

const DropUsSection = ({ description, specialLine }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>
          <Title renderAs="h1" withoutBorder={true}>
            {t('dropus')}
          </Title>
          <HeaderLine />
        </HeaderTitle>
        <SpecialText text={description} specialLine={specialLine} />
      </Header>
      <InfoSection>
        <Info label={'phone'} title={infos?.phone} renderAs="h2" />
        <Info label={'email'} title={infos?.email} renderAs="h3" />
        <Info label={'address'} title={infos?.address} renderAs="span" />
      </InfoSection>
      <MapCard latitude={cords?.lat} longitude={cords?.lng} />
    </Wrapper>
  );
};

// proptypes
DropUsSection.propTypes = {
  description: PropTypes.string.isRequired,
  specialLine: PropTypes.string,
};

export default DropUsSection;
