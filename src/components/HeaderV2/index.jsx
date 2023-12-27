import PropTypes from 'prop-types';
import { MyParagraph, Wrapper } from './HeaderV2.styles';
import SpecialText from '../SpecialText';

function HeaderV2({ title, specialLine, description, variant = 'v1' }) {
  return (
    <Wrapper>
      <SpecialText
        specialLine={specialLine}
        text={title}
        uppercase={true}
        size="lg"
      />
      {/* <MyParagraph variant={variant} size="md">
        {description}
      </MyParagraph> */}
    </Wrapper>
  );
}

HeaderV2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  specialLine: PropTypes.string.isRequired,
};

export default HeaderV2;
