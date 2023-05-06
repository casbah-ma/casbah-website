import PropTypes from "prop-types";
import { Content, Image, Texts, Wrapper } from "./PicTop.styles";
import Title from "../../Title";
import Paragraph from "../../Paragraph";
import { directions } from "./PicTop.styles";
function PicTop({ title, texts, direction, img }) {
  return (
    <Wrapper direction={direction}>
      <Image src={img} alt={title} direction={direction} />
      <Content direction={direction}>
        <Title renderAs="h2">{title}</Title>
        <Texts>
          {texts?.length > 0 &&
            texts.map((text, i) => (
              <Paragraph key={i} size="md">
                {text}
              </Paragraph>
            ))}
        </Texts>
      </Content>
    </Wrapper>
  );
}

PicTop.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(Object.keys(directions)),
};

export default PicTop;
