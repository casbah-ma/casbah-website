import { Letter, Word } from './PortfolioHeader.styles';

const WordWrapper = ({ word }) => {
  const letterVariant = {
    hidden: {
      y: '150%',
      color: 'white',
    },
    visible: {
      y: 0,
      color: '#000219',
      transition: { duration: 0.6 },
    },
  };
  return (
    <Word>
      {word.map((letter, i) => (
        <Letter variants={letterVariant} key={i}>
          {letter}
        </Letter>
      ))}
    </Word>
  );
};

export default WordWrapper;
