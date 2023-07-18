import PropTypes from 'prop-types';
import {
  Arraow,
  Arrows,
  Container,
  Content,
  ContentWrapper,
  Wrapper,
} from './Hero.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocomotive } from '../../hooks/useLocomotive';
import hero from '../../lotties/hero.json';
import { useState } from 'react';
import HeroArrow from '../../icons/HeroArrow';
import { arrowVariant, arrowsVariant, containerVariant } from './variants';

function Hero({ title, description, ...rest }) {
  const [showText, setShowText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Wrapper {...rest}>
      <Container initial="hidden" animate="visible" exit="exit">
        <motion.div exit={{ opacity: 0 }}>
          <Player
            keepLastFrame
            autoplay
            loop={false}
            src={hero}
            style={{ height: '50vh', width: '100%' }}
            onEvent={(e) => {
              if (e === 'complete') {
                setShowText(true);
                setTimeout(() => {
                  setShowArrow(true);
                }, 1000);
              }
            }}
          />
        </motion.div>
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
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
