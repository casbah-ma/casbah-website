import PropTypes from 'prop-types';
import {
  Content,
  Subtitle,
  Texts,
  TitleWrapper,
  Wrapper,
  variants,
} from './HomeSection.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
function HomeSection({ title, subtitle, texts, lottie, variant, ...rest }) {
  return (
    <Wrapper variant={variant} {...rest}>
      <Player keepLastFrame autoplay loop={false} src={lottie} />
      <Content>
        <TitleWrapper>
          {subtitle && (
            <AnimatedDisplay renderAs={motion.span} text={subtitle} size="md" />
          )}
          <Title withoutBorder={true} renderAs="h2">
            {title}
          </Title>
        </TitleWrapper>

        <Texts>
          {texts?.length > 0 &&
            texts.map((text, i) => (
              <Paragraph key={i} size="md">
                {text}
              </Paragraph>
            ))}
        </Texts>
      </Content>
    </Wrapper>
  );
}

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeSection;
