import { Line, LineWrapper, SpecialStyle, sizes } from './SpecialText.styles';
import PropTypes from 'prop-types';

import { lineVariants } from './variants';
import { useSplitText } from '../../hooks/useSplitText';

const SpecialText = ({ text, specialLine, uppercase, size = 'md' }) => {
  const { textRef, lines } = useSplitText(text);

  // useEffect(() => {
  //   const textElement = textRef.current;
  //   if (!textElement) return;

  //   // let newText = textElement.innerHTML;
  //   // // Search for specialLine using regex
  //   // const regex = new RegExp(`\\b${specialLine}\\b`, 'gi');
  //   // // Replace the text with the same text but with span tag
  //   // newText = newText.replace(regex, '<span>$&</span>');

  //   // textElement.innerHTML = newText;

  //   textElement.removeChild(textNode);
  // }, [text]);

  return (
    <SpecialStyle ref={textRef} uppercase={uppercase} size={size}>
      {lines?.map((line, index) => (
        <LineWrapper key={index}>
          <Line
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {line}
          </Line>
        </LineWrapper>
      ))}
    </SpecialStyle>
  );
};

// proptypes
SpecialText.propTypes = {
  text: PropTypes.string.isRequired,
  specialLine: PropTypes.string,
  uppercase: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default SpecialText;
