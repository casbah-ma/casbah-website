import Title from '../Title';
import Paragraph from '../Paragraph';
import { TextSection, Wrapper } from './AboutParagraph.styles';

const AboutParagraph = ({ title, text, size = 'lg' }) => {
  return (
    <Wrapper size={size}>
      <Title renderAs="h1" withoutBorder>
        {title}
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
