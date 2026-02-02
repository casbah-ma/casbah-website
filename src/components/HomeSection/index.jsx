import PropTypes from 'prop-types';
import {
  Content,
  LottieContainer,
  LottieWrapper,
  Texts,
  TitleWrapper,
} from './HomeSection.styles';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
import Player from '../LottiePlayer';
import { useEffect, useRef, useState, useCallback } from 'react';

function HomeSection({
  id,
  activeSectionId,
  title,
  subtitle,
  lottie,
  texts = '',
}) {
  const playerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const handleEvent = useCallback((event) => {
    if (event === 'load') {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (id !== activeSectionId || !isReady) return;

    const inst = playerRef.current;
    if (inst && typeof inst.play === 'function') {
      // Reset to beginning and play
      if (typeof inst.setSeeker === 'function') {
        inst.setSeeker(0, false);
      }
      inst.play();
    }
  }, [activeSectionId, id, isReady]);

  return (
    <div id={id} className="section home_section fp-auto-height-responsive">
      <LottieWrapper>
        <LottieContainer>
          <Player
            ref={playerRef}
            keepLastFrame
            loop={false}
            src={lottie}
            onEvent={handleEvent}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          />
        </LottieContainer>
      </LottieWrapper>

      <Content>
        <TitleWrapper>
          {subtitle && (
            <AnimatedDisplay
              renderAs={motion.span}
              text={subtitle}
              size="home"
            />
          )}
          <Title withoutBorder={true} renderAs="h2" isHome={true}>
            {title}
          </Title>
        </TitleWrapper>
        <Texts>
          {texts?.length > 0 &&
            texts.map((text, i) => (
              <Paragraph key={i} size="home">
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
