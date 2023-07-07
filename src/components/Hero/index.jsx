import PropTypes from 'prop-types';
import { Content, Wrapper, variants } from './Hero.styles';
import { Player } from '@lottiefiles/react-lottie-player';
import Title from '../Title';
import Paragraph from '../Paragraph';
import { motion } from 'framer-motion';
import hero from '../../lotties/hero.json';

function Hero({ title, subtitle, ...rest }) {
  return (
    <Wrapper {...rest}>
      <motion.div className="self-center" exit={{ opacity: 0 }}>
        <Player
          keepLastFrame
          autoplay
          loop={false}
          src={hero}
          style={{ height: '50vh', width: '100%' }}
        />
      </motion.div>
      <Content>
        <Title withoutBorder={true} renderAs="h1">
          {title}
        </Title>
        <Paragraph size="md">{subtitle}</Paragraph>
      </Content>
    </Wrapper>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
