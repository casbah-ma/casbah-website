import PropTypes from 'prop-types';
import { Title, Wrapper } from './PortfolioHeader.styles';
import SpecialText from '../SpecialText';

function PortfolioHeader({ title, text, specialLine, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
      <SpecialText
        text={text}
        specialLine={specialLine}
        uppercase={true}
        size="lg"
      />
    </Wrapper>
  );
}

PortfolioHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  specialLine: PropTypes.string.isRequired,
};

export default PortfolioHeader;
