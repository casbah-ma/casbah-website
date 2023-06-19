import PropTypes from 'prop-types';
import { StyledP } from './paragraph.styles';
import { sizes } from './paragraph.styles';
import { paragraphVarinat as paragraphVariant } from './varinats';

function Paragraph({ children, size, color, ...rest }) {
  return (
    <StyledP
      variants={paragraphVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      size={size}
      // color={color}
      {...rest}
    >
      {children}
    </StyledP>
  );
}

Paragraph.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default Paragraph;
