import PropTypes from 'prop-types';
import {
  Content,
  ImagesWrapper,
  MeduimImage,
  SmallImage,
  Texts,
  Wrapper,
  imagesSize,
} from './Pic2Left.styles';
import MyImage from '../../MyImage';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
function Pic2Left({ title, texts, bigImg, mediumImg }) {
  return (
    <Wrapper>
      <ImagesWrapper>
        <MyImage src={bigImg} alt={title} sizes={imagesSize.lg} />
        <MeduimImage>
          <MyImage src={mediumImg} alt={title} sizes={imagesSize.md} />
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

Pic2Left.propTypes = {
  title: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  mediumImg: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Pic2Left;
