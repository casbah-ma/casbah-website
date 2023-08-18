import { Container, Title, Wrapper } from './PortfolioHeader.styles';
import SpecialText from '../SpecialText';
import WordWrapper from './WordWrapper';
import { wrapperVariant } from './variants';
import { AnimatePresence } from 'framer-motion';

const PortfolioHeader = ({ title, subtitle, specialLine, ...rest }) => {
  const words = title.split(' ').map((word) => [...word.split(''), '\u00A0']);

  return (
    <Wrapper
      {...rest}
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Title>
        {words?.map((word, i) => (
          <WordWrapper key={i} word={word} />
        ))}
      </Title>

      <SpecialText
        text={subtitle}
        specialLine={specialLine}
        uppercase={true}
        size="lg"
        key="text"
        exit={{ opacity: 0 }}
      />
    </Wrapper>
  );
};

export default PortfolioHeader;
