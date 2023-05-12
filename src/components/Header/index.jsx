import PropTypes from "prop-types";
import { Wrapper } from "./Header.styles";
import Title from "../Title";
import Paragraph from "../Paragraph";

function Header({ title, description, withLine }) {
  return (
    <Wrapper withLine={withLine}>
      <Title renderAs="h1" withoutBorder={true}>
        {title}
      </Title>
      <Paragraph size="md">{description}</Paragraph>
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Header;
