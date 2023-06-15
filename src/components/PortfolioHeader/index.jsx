import PropTypes from 'prop-types';
import { Title, Wrapper } from './PortfolioHeader.styles';
import SpecialText from '../SpecialText';

import WordWrapper from './WordWrapper';
import { sentenceVariant } from './variants';
import { AnimatePresence } from 'framer-motion';

function PortfolioHeader({ title, description, specialLine, ...rest }) {
  const words = title.split(' ').map((word) => [...word.split(''), '\u00A0']);

  return (
    <Wrapper {...rest}>
      <AnimatePresence>
        <Title
          variants={sentenceVariant}
          initial="hidden"
          animate="visible"
          key="title"
          exit={{ opacity: 0 }}
        >
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
      </AnimatePresence>
    </Wrapper>
  );
}

PortfolioHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specialLine: PropTypes.string.isRequired,
};

export default PortfolioHeader;
