import PropTypes from 'prop-types';
import {
  Container,
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
  ...rest
}) {
  const [visited, setVisited] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const { ref, inView } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView) {
        setVisited(true);
        setIsFixed(false);
        setIsLeaving(false);
      } else if (!inView && visited) {
        setTimeout(() => {
          setIsLeaving(true);
        }, 300);
        setIsFixed(true);
        setVisited(false);
      }
    },
  });

  const getIsVisible = () => {
    if (inView) {
      return true;
    } else {
      if (isFixed) {
        return !isLeaving;
      }
    }
  };
  return (
    <Wrapper ref={ref} {...rest}>
      <AnimatePresence mode="sync">
        {getIsVisible() && (
          <Container variant={variant} isFixed={isFixed}>
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
                style={{
                  height: '40vh',
                  width: '100%',
                }}
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
          </Container>
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
