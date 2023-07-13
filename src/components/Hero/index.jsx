import PropTypes from 'prop-types';
import {
  Arraow,
  Arrows,
  Content,
  ContentWrapper,
  Wrapper,
  variants,
} from './Hero.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import hero from '../../lotties/hero.json';
import { Fragment, useState } from 'react';
import HeroArrow from '../../icons/HeroArrow';
import { arrowVariant, arrowsVariant } from './variants';

function Hero({ title, description, ...rest }) {
  const [showText, setShowText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <Wrapper ref={ref} {...rest}>
      {inView && (
        <Fragment>
          <motion.div exit={{ opacity: 0 }}>
            <Player
              keepLastFrame
              autoplay
              loop={false}
              src={hero}
              style={{ height: '50vh', width: '100%' }}
              onEvent={(e) => {
                console.log(e);
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
                <Arrows
                  variants={arrowsVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
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
        </Fragment>
      )}
    </Wrapper>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
