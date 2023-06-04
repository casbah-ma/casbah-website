import PropTypes from 'prop-types';
import {
  Content,
  Subtitle,
  Texts,
  Wrapper,
  variants,
} from './HomeSection.styles';
import { Player } from '@lottiefiles/react-lottie-player';

import Title from '../Title';
import Paragraph from '../Paragraph';
function HomeSection({ title, subtitle, texts, lottie, variant, ...rest }) {
  return (
    <Wrapper variant={variant} {...rest}>
      <Player keepLastFrame autoplay loop={false} src={lottie} />
      <Content>
        <Title withoutBorder={true} renderAs="h2">
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {title}
        </Title>
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

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HomeSection;
