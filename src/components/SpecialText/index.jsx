import { useEffect } from "react";
import { SpecialStyle, sizes } from "./SpecialText.styles";
import PropTypes from "prop-types";

const SpecialText = ({ text, specialLine, uppercase, size = "md" }) => {
  useEffect(() => {
    // Get Text Element
    var textElement = document.getElementById("SpeciaLine");
    var newText = textElement.innerHTML;

    // Search about Speciale Line using regex
    var regex = new RegExp("\\b" + specialLine + "\\b", "gi");

    // Replace the text with the same text but with span tag
    newText = newText.replace(regex, "<span>$&</span>");

    textElement.innerHTML = newText;
  }, []);

  return (
    <SpecialStyle id="SpeciaLine" uppercase={uppercase} size={size}>
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
