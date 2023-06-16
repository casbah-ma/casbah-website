import PropTypes from 'prop-types';
import { StyledP } from './paragraph.styles';
import { sizes } from './paragraph.styles';
import { paragraphVarinat } from './varinats';

function Paragraph({ children, size, color, ...rest }) {
  return (
    <StyledP
      variants={paragraphVarinat}
      initial="hidden"
      animate="visible"
      size={size}
      color={color}
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
