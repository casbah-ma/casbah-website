import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ArrowsWrapper,
  Container,
  Content,
  ContentWrapper,
  LottierContainer,
  Wrapper,
} from './Hero.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import Paragraph from '../Paragraph';

import hero from '../../lotties/hero.json';
import animationDown from '../../lotties/animation_down.json';

import { arrowVariant, arrowsVariant, containerVariant } from './variants';

const Hero = forwardRef(function Hero({ title, description }, ref) {
  const [showText, setShowText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Wrapper ref={ref} className="section">
      <Container variants={containerVariant}>
        <LottierContainer exit={{ opacity: 0 }}>
          <Player
            keepLastFrame
            autoplay
            loop={false}
            src={hero}
            onEvent={(e) => {
              if (e === 'complete') {
                setShowText(true);
                setTimeout(() => {
                  setShowArrow(true);
                }, 1000);
              }
            }}
          />
        </LottierContainer>
        {showText && (
          <ContentWrapper>
            <Content>
              <Title withoutBorder={true} renderAs="h2">
                {title}
              </Title>
              <Paragraph size="md" className="max-w-sm">
                {description}
              </Paragraph>
            </Content>
            {showArrow && (
              <ArrowsWrapper variants={arrowVariant}>
                <Player
                  autoplay
                  loop
                  src={animationDown}
                  style={{ width: 64 }}
                />
              </ArrowsWrapper>
            )}
          </ContentWrapper>
        )}
      </Container>
    </Wrapper>
  );
});

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
