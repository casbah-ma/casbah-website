import PropTypes from 'prop-types';
import {
  Content,
  ImagesWrapper,
  MeduimImage,
  SmallImage,
  Texts,
  Wrapper,
  imagesSize,
} from './PicTwoLeft.styles';
import MyImage from '../../MyImage';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
function PicTwoLeft({ title, texts, bigImg, mediumImg, ...rest }) {
  return (
    <Wrapper {...rest}>
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

PicTwoLeft.propTypes = {
  title: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  mediumImg: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PicTwoLeft;
