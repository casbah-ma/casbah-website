import { InfoLabel, InfoTile, InfoWrapper } from './DropUsSection.styles';
import useTranslation from 'next-translate/useTranslation';

const Info = ({ label, title, renderAs }) => {
  const { t } = useTranslation();
  return (
    <InfoWrapper>
      <InfoLabel>{t(label)}</InfoLabel>
      <InfoTile as={renderAs}>{title}</InfoTile>
    </InfoWrapper>
  );
};

export default Info;
