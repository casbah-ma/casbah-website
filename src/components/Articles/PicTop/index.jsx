import PropTypes from 'prop-types';
import { Content, Texts, Wrapper, imageDirections } from './PicTop.styles';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
import { directions } from './PicTop.styles';
import MyImage from '../../MyImage';
function PicTop({ title, texts, variant, img, ...rest }) {
  return (
    <Wrapper {...rest}>
      <MyImage sizes={imageDirections[variant]} src={img} alt={title} />
      <Content variant={variant}>
        <Title renderAs="h2">{title}</Title>
        <Texts variant={variant}>
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
  variant: PropTypes.oneOf(Object.keys(directions)),
};

export default PicTop;
