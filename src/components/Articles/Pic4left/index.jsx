import PropTypes from "prop-types";
import {
  Content,
  ExtraSmallImage,
  ImagesWrapper,
  MeduimImage,
  SmallImage,
  Texts,
  Wrapper,
  imagesSize,
} from "./Pic4Left.styles";
import MyImage from "../../MyImage";
import Title from "../../Title";
import Paragraph from "../../Paragraph";
import LitleLogo from "../../../icons/litleLogo";
function Pic4Left({ title, texts, bigImg, mediumImg, smallImg }) {
  return (
    <Wrapper>
      <ImagesWrapper>
        <MyImage src={bigImg} alt={title} sizes={imagesSize.lg} />
        <MeduimImage>
          <MyImage src={mediumImg} alt={title} sizes={imagesSize.md} />
          <SmallImage>
            <MyImage src={smallImg} alt={title} sizes={imagesSize.sm} />
            <ExtraSmallImage>
              <LitleLogo />
            </ExtraSmallImage>
          </SmallImage>
        </MeduimImage>
      </ImagesWrapper>
      <Content>
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

Pic4Left.propTypes = {
  title: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  mediumImg: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Pic4Left;
