import { useEffect, useRef, useState } from 'react';
import { Line, SpecialStyle, sizes } from './SpecialText.styles';
import PropTypes from 'prop-types';
import { getLineBreaks } from '../../config/utils';

const SpecialText = ({ text, specialLine, uppercase, size = 'md' }) => {
  const textRef = useRef(null);
  const [lines, setLines] = useState([]);
  const textVariant = {
    visible: {
      transition: {
        delay: 0.2,
        staggerChildren: 2,
        ease: 'easeOut',
      },
    },
  };

  const sentenceVariant = {
    hidden: {
      opacity: 0,
      y: '200%',
      color: 'white',
    },
    visible: {
      opacity: 1,
      y: 0,
      color: '#000219',
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const textNode = document.createTextNode(text);
    textElement.appendChild(textNode);
    setLines(getLineBreaks(textNode));

    // let newText = textElement.innerHTML;
    // // Search for specialLine using regex
    // const regex = new RegExp(`\\b${specialLine}\\b`, 'gi');
    // // Replace the text with the same text but with span tag
    // newText = newText.replace(regex, '<span>$&</span>');

    // textElement.innerHTML = newText;

    textElement.removeChild(textNode);
  }, [text]);

  return (
    <SpecialStyle
      variants={textVariant}
      initial="hidden"
      animate="visible"
      ref={textRef}
      uppercase={uppercase}
      size={size}
    >
      {lines.map((line, i) => (
        <Line variants={sentenceVariant} key={i}>
          {line}
        </Line>
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
