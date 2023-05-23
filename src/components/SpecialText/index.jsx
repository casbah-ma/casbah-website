import { useEffect, useRef } from 'react';
import { SpecialStyle, sizes } from './SpecialText.styles';
import PropTypes from 'prop-types';

const SpecialText = ({ text, specialLine, uppercase, size = 'md' }) => {
  const textRef = useRef(null);
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    let newText = textElement.innerHTML;
    // Search for specialLine using regex
    const regex = new RegExp(`\\b${specialLine}\\b`, 'gi');
    // Replace the text with the same text but with span tag
    newText = newText.replace(regex, '<span>$&</span>');

    textElement.innerHTML = newText;
  }, []);

  return (
    <SpecialStyle ref={textRef} uppercase={uppercase} size={size}>
      {text}
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
