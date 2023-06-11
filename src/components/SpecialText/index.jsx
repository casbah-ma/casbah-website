import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Line, LineWrapper, SpecialStyle, sizes } from './SpecialText.styles';
import PropTypes from 'prop-types';
import { getLineBreaks } from '../../config/utils';
import { lineVariants, sentenceVariant, textVariant } from './variants';

const SpecialText = ({ text, specialLine, uppercase, size = 'md' }) => {
  const textRef = useRef(null);
  const [lines, setLines] = useState([]);

  useLayoutEffect(() => {
    const calculateLines = () => {
      const textElement = textRef.current;
      if (!textElement) return;

      const textNode = document.createTextNode(text);
      textElement.appendChild(textNode);
      setLines(getLineBreaks(textNode));
      textElement.removeChild(textNode);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => {
      window.removeEventListener('resize', calculateLines);
    };
  }, [text]);

  // useEffect(() => {
  //   const textElement = textRef.current;
  //   if (!textElement) return;

  //   const textNode = document.createTextNode(text);
  //   textElement.appendChild(textNode);
  //   setLines(getLineBreaks(textNode));

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
