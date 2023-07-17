import PropTypes from 'prop-types';
import { Container, Title, Wrapper } from './PortfolioHeader.styles';
import SpecialText from '../SpecialText';
import { useLocomotive } from '../../hooks/useLocomotive';
import WordWrapper from './WordWrapper';
import { wrapperVariant } from './variants';
import { forwardRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const PortfolioHeader = forwardRef(function PortfolioHeader(
  { title, description, specialLine, ...rest },
  ref
) {
  const words = title.split(' ').map((word) => [...word.split(''), '\u00A0']);

  const { getIsVisible, ref: locomotiveRef, isFixed } = useLocomotive(0, 50);

  return (
    <Wrapper
      {...rest}
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={(el) => {
        ref(el);
        locomotiveRef(el);
      }}
    >
      <AnimatePresence mode="sync">
        {getIsVisible() && (
          <Container initial="hidden" animate="visible" exit="exit">
            <Title>
              {words?.map((word, i) => (
                <WordWrapper key={i} word={word} />
              ))}
            </Title>

            <SpecialText
              text={description}
              specialLine={specialLine}
              uppercase={true}
              size="lg"
              key="text"
              exit={{ opacity: 0 }}
            />
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  );
});

export default PortfolioHeader;
