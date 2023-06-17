import PropTypes from 'prop-types';
import { Line, LineWrapper, StyledTitle, titleLevels } from './title.styles';
import { useSplitText } from '../../hooks/useSplitText';
import { lineVariants } from './variants';

const Title = ({
  children,
  renderAs,
  color,
  withoutBorder = false,
  ...rest
}) => {
  const { textRef, lines } = useSplitText(children);

  return (
    <StyledTitle
      ref={textRef}
      level={renderAs}
      color={color}
      withoutBorder={withoutBorder}
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
