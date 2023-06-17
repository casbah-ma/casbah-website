import PropTypes from 'prop-types';
import {
  LineWrapper,
  titleLevels,
  Line,
  Wrapper,
} from './AnimatedDisplay.styles';

import { lineVariants, titleVariant } from './variants';
import { useSplitText } from '../../hooks/useSplitText';

const AnimatedDisplay = ({ text, renderAs, size, color, ...rest }) => {
  const { textRef, lines } = useSplitText(text);

  return (
    <Wrapper as={renderAs} size={size} ref={textRef} color={color} {...rest}>
      {lines?.map((line, index) => (
        <LineWrapper key={index}>
          <Line
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={lineVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {line}
          </Line>
        </LineWrapper>
      ))}
    </Wrapper>
  );
};

AnimatedDisplay.propTypes = {
  renderAs: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(titleLevels)),
};

export default AnimatedDisplay;
