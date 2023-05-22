import PropTypes from 'prop-types';
import {
  Content,
  ImagesWrapper,
  MeduimImage,
  SmallImage,
  Texts,
  Wrapper,
  imagesSize,
} from './Pic3Right.styles';
import MyImage from '../../MyImage';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
function Pic3Right({ title, texts, bigImg, mediumImg, smallImg }) {
  return (
    <Wrapper>
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

Pic3Right.propTypes = {
  title: PropTypes.string.isRequired,
  bigImg: PropTypes.string.isRequired,
  mediumImg: PropTypes.string.isRequired,
  smallImg: PropTypes.string.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Pic3Right;
