import { Letter, Word } from './BlogsHero.styles';
import { letterVariant } from './variants';

const WordWrapper = ({ word }) => {
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
