import PropTypes from 'prop-types';
import {
  Content,
  LottieContainer,
  LottieWrapper,
  Texts,
  TitleWrapper,
  Wrapper,
} from './HomeSection.styles';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

function HomeSection({ title, subtitle, lottie, texts = '' }) {
  return (
    <div className="section home_section">
      <LottieWrapper>
        <LottieContainer>
          <Player keepLastFrame autoplay loop={false} src={lottie} />
        </LottieContainer>
      </LottieWrapper>
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
    </div>
  );
}

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
};

export default HomeSection;
