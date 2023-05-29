import Title from '../Title';
import Paragraph from '../Paragraph';
import { TextSection, Wrapper } from './AboutParagraph.styles';
import useTranslation from 'next-translate/useTranslation';

const AboutParagraph = ({ title, text, size = 'lg' }) => {
  const { t } = useTranslation();

  return (
    <Wrapper size={size}>
      <Title renderAs="h2" withoutBorder>
        {t(title)}
      </Title>
      <TextSection>
        {text?.map((item, i) => (
          <Paragraph key={i} size="md">
            {item}
          </Paragraph>
        ))}
      </TextSection>
    </Wrapper>
  );
};

export default AboutParagraph;
