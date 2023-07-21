import PropTypes from 'prop-types';
import { Content, Texts, TitleWrapper } from './HomeSection.styles';
import Title from '../Title';
import AnimatedDisplay from '../AnimatedDisplay';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';

function HomeSection({ title, subtitle, texts = '' }) {
  return (
    <div className="section home_section">
      <Content>
        <TitleWrapper>
          {subtitle && (
            <AnimatedDisplay renderAs={motion.span} text={subtitle} size="md" />
          )}
          <Title withoutBorder={true} renderAs="h2">
            {title}
          </Title>
        </TitleWrapper>

        <Texts>
          {texts?.length > 0 &&
            texts.map((text, i) => (
              <Paragraph key={i} size="md">
                {text}
              </Paragraph>
            ))}
        </Texts>
      </Content>
    </div>
  );
}

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  texts: PropTypes.arrayOf(PropTypes.string),
};

export default HomeSection;
