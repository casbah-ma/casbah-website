import PropTypes from 'prop-types';
import { Title, Wrapper } from './PortfolioHeader.styles';
import SpecialText from '../SpecialText';
import { motion } from 'framer-motion';
import WordWrapper from './WordWrapper';

function PortfolioHeader({ title, description, specialLine, ...rest }) {
  const sentenceVariant = {
    visible: {
      transition: {
        delay: 0.3,
        staggerChildren: 0.12,
        ease: 'ease-out',
      },
    },
  };

  const words = title.split(' ').map((word) => [...word.split(''), '\u00A0']);

  return (
    <Wrapper {...rest}>
      <Title variants={sentenceVariant} initial="hidden" animate="visible">
        {words?.map((word, i) => (
          <WordWrapper key={i} word={word} />
        ))}
      </Title>
      <SpecialText
        text={description}
        specialLine={specialLine}
        uppercase={true}
        size="lg"
      />
    </Wrapper>
  );
}

PortfolioHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  specialLine: PropTypes.string.isRequired,
};

export default PortfolioHeader;
