import PropTypes from 'prop-types';
import { Wrapper } from './Header.styles';
import Title from '../Title';
import Paragraph from '../Paragraph';

function Header({
  title,
  description,
  withLine,
  isVertical = false,
  isSplited = false,
  level = 'h1',
  hasDesc = false,
}) {
  return (
    <Wrapper isSplited={isSplited} withLine={withLine} isVertical={isVertical}>
      <Title renderAs={level} withoutBorder={true}>
        {title}
      </Title>
      {hasDesc && <Paragraph size="md">{description}</Paragraph>}
    </Wrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  withLine: PropTypes.bool,
  isVertical: PropTypes.bool,
};

export default Header;
