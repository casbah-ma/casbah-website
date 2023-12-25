import PropTypes from 'prop-types';
import {
  Content,
  LottieContainer,
  LottieWrapper,
  ScrollTopBtn,
  Texts,
  TitleWrapper,
} from './HomeSection.styles';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef } from 'react';

function HomeSection({
  id,
  activeSectionId,
  title,
  subtitle,
  lottie,
  texts = '',
}) {
  const playerRef = useRef(null);
  useEffect(() => {
    if (playerRef && id === activeSectionId) {
      playerRef.current.play();
    }
  }, [activeSectionId, id]);

  return (
    <div id={id} className="section home_section fp-auto-height-responsive">
      <LottieWrapper>
        <LottieContainer>
          <Player
            ref={playerRef}
            keepLastFrame
            loop={false}
            src={lottie}
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
