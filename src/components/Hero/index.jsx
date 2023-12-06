import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  SubTitle,
  Container,
  Content,
  HeroTitle,
  Wrapper,
  Infos,
  SVGStyle,
} from './Hero.styles';

import { ImageAnimation, textAnimate } from './variants';
import HeroSVG from '../../icons/HeroSVG';

const Hero = forwardRef(function Hero({ title, description }, ref) {
  return (
    <Wrapper ref={ref} className="section">
      <Container >
        <Content>
          <Infos>
            <div className="overflow-hidden">
              <SubTitle
                variants={textAnimate}
                initial="initial"
                animate="open"
                exit="exit"
              >
                casbah
              </SubTitle>
            </div>
            <div>
              {title.split(' ').map((txt, i) => (
                <div className="overflow-hidden" key={i}>
                  <HeroTitle
                    variants={textAnimate}
                    initial="initial"
                    animate="open"
                    exit="exit"
                  >
                    {txt}
                  </HeroTitle>
                </div>
              ))}
            </div>
          </Infos>
          <HeroSVG
            id="your-svg-id"
            className={SVGStyle}
            variants={ImageAnimation}
            initial="initial"
            animate="open"
            exit="exit"
          />
        </Content>
      </Container>
    </Wrapper>
  );
});

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
