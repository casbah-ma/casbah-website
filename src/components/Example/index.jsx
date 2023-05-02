import { ExampleStyled } from "./Example.styles";
import PropTypes from "prop-types";

const Example = ({ text, bgColor, color, rest }) => {
  return (
    <ExampleStyled bgColor={bgColor} color={color} {...rest}>
      {text}
    </ExampleStyled>
  );
};

Example.propTypes = {
  /**
   * content
   */
  text: PropTypes.string.isRequired,
  /**
   * What background color to use
   */
  bgColor: PropTypes.string,
  /**
   * What content color to use
   */
  color: PropTypes.string,
};

Example.defaultProps = {
  text: "Example",
  bgColor: null,
  color: null,
};

export default Example;
