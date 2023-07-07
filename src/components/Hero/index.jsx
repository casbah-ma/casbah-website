import PropTypes from 'prop-types';
import { Content, Wrapper, variants } from './Hero.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
import hero from '../../lotties/hero.json';

function Hero({ title, description, ...rest }) {
  return (
    <Wrapper {...rest}>
      <motion.div exit={{ opacity: 0 }}>
        <Player
          keepLastFrame
          autoplay
          loop={false}
          src={hero}
          style={{ height: '40vh', width: '100%' }}
        />
      </motion.div>
      <Content>
        <Title withoutBorder={true} renderAs="h2">
          {title}
        </Title>
        <Paragraph size="md">{description}</Paragraph>
      </Content>
    </Wrapper>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
