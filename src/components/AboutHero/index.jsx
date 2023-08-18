import PropTypes from 'prop-types';
import {
  Arraow,
  Arrows,
  Container,
  Content,
  ContentWrapper,
  LottierContainer,
  Wrapper,
} from './AboutHero.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import Paragraph from '../Paragraph';

import hero from '../../lotties/hero.json';
import { forwardRef, useState } from 'react';
import HeroArrow from '../../icons/HeroArrow';
import { arrowVariant, arrowsVariant, containerVariant } from './variants';

const AboutHero = ({ title, description }) => {
  const [showText, setShowText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Container variants={containerVariant}>
      <LottierContainer exit={{ opacity: 0 }}>
        <Player
          keepLastFrame
          autoplay
          loop={false}
          src={hero}
          onEvent={(e) => {
            if (e === 'complete') {
              setShowArrow(true);
            }
          }}
        />
      </LottierContainer>

      <ContentWrapper>
        <Content>
          <Title withoutBorder={true} renderAs="h1">
            {title}
          </Title>
          <Paragraph size="md" className="max-w-sm">
            {description}
          </Paragraph>
        </Content>

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
      </ContentWrapper>
    </Container>
  );
};

AboutHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutHero;
