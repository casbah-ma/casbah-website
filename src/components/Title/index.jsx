import PropTypes from 'prop-types';
import { Line, LineWrapper, StyledTitle, titleLevels } from './title.styles';
import { useSplitText } from '../../hooks/useSplitText';
import { lineVariants } from './variants';
import { motion } from 'framer-motion';

const Title = ({
  children,
  renderAs,
  color,
  isHome,
  withoutBorder = false,
  ...rest
}) => {
  const { textRef, lines } = useSplitText(children);
  const getTitleTag = () => {
    switch (renderAs) {
      case 'h1':
        return motion.h1;
      case 'h2':
        return motion.h2;
      case 'h3':
        return motion.h3;
      default:
        break;
    }
  };

  return (
    <StyledTitle
      ref={textRef}
      as={getTitleTag()}
      level={renderAs}
      color={color}
      withoutBorder={withoutBorder}
      isHome={isHome}
      {...rest}
    >
      {lines?.map((line, index) => (
        <LineWrapper key={index}>
          <Line
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={lineVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {line.replace(',', '')}
          </Line>
        </LineWrapper>
      ))}
    </StyledTitle>
  );
};

Title.propTypes = {
  renderAs: PropTypes.oneOf(Object.keys(titleLevels)),
};

export default Title;
