import PropTypes from 'prop-types';
import {
  Content,
  Texts,
  TitleWrapper,
  Wrapper,
  variants,
} from './HomeSection.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fragment, useEffect, useState } from 'react';
function HomeSection({
  title,
  subtitle,
  texts = '',
  lottie,
  variant,
  isScrolling,
  ...rest
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <Wrapper ref={ref} variant={variant} {...rest}>
      <AnimatePresence mode="sync">
        {inView && (
          <Fragment>
            <motion.div
              className="self-center"
              initial="hidden"
              exit={{ opacity: 0 }}
            >
              <Player
                keepLastFrame
                autoplay
                loop={false}
                src={lottie}
                style={{ height: '40vh', width: '100%' }}
              />
            </motion.div>
            <Content variant={variant}>
              <TitleWrapper>
                {subtitle && (
                  <AnimatedDisplay
                    renderAs={motion.span}
                    text={subtitle}
                    size="md"
                  />
                )}
                <Title withoutBorder={true} renderAs="h2">
                  {title}
                </Title>
              </TitleWrapper>

              {texts && (
                <Texts>
                  {texts &&
                    texts?.length > 0 &&
                    texts.map((text, i) => (
                      <Paragraph key={i} size="md">
                        {text}
                      </Paragraph>
                    ))}
                </Texts>
              )}
            </Content>
          </Fragment>
        )}
      </AnimatePresence>
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
