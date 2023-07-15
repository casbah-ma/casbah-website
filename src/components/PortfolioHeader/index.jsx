import PropTypes from 'prop-types';
import { Title, Wrapper } from './PortfolioHeader.styles';
import SpecialText from '../SpecialText';

import WordWrapper from './WordWrapper';
import { wrapperVariant } from './variants';
import { forwardRef } from 'react';

const PortfolioHeader = forwardRef(function PortfolioHeader(
  { title, description, specialLine, ...rest },
  ref
) {
  const words = title.split(' ').map((word) => [...word.split(''), '\u00A0']);

  return (
    <Wrapper
      {...rest}
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      ref={ref}
    >
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
    </Wrapper>
  );
});

export default PortfolioHeader;
