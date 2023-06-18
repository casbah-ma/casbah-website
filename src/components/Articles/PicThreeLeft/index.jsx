import PropTypes from 'prop-types';
import {
  Content,
  ImagesWrapper,
  MeduimImage,
  SmallImage,
  Texts,
  Wrapper,
  imagesSize,
} from './PicThreeLeft.styles';
import MyImage from '../../MyImage';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
function PicThreeLeft({ title, texts, bigImg, mediumImg, smallImg, ...rest }) {
  return (
    <Wrapper {...rest}>
      <ImagesWrapper>
        <MyImage src={bigImg} alt={title} sizes={imagesSize.lg} />
        <MeduimImage>
          <MyImage src={mediumImg} alt={title} sizes={imagesSize.md} />
          <SmallImage>
            <MyImage src={smallImg} alt={title} sizes={imagesSize.sm} />
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

PicThreeLeft.propTypes = {
  title: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  mediumImg: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PicThreeLeft;
