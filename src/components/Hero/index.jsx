import PropTypes from 'prop-types';
import {
  Arraow,
  Arrows,
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
import { forwardRef, useState } from 'react';
import HeroArrow from '../../icons/HeroArrow';
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
              <Arrows variants={arrowsVariant}>
                <Arraow variants={arrowVariant}>
                  <HeroArrow />
                </Arraow>
                <Arraow variants={arrowVariant}>
                  <HeroArrow />
                </Arraow>
                <Arraow variants={arrowVariant}>
                  <HeroArrow />
                </Arraow>
              </Arrows>
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
