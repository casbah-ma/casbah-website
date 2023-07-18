import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Texts,
  TitleWrapper,
  Wrapper,
} from './HomeSection.styles';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';

function HomeSection({ title, subtitle, texts = '', lottie, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Container>
        <Content>
          <TitleWrapper>
            {subtitle && (
              <AnimatedDisplay
                renderAs={motion.span}
                text={subtitle}
                size="md"
              />
            )}
            <Title withoutBorder={true} renderAs="h2">
              {title}
            </Title>
          </TitleWrapper>

          {texts && (
            <Texts>
              {texts &&
                texts?.length > 0 &&
                texts.map((text, i) => (
                  <Paragraph key={i} size="md">
                    {text}
                  </Paragraph>
                ))}
            </Texts>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
}

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeSection;
