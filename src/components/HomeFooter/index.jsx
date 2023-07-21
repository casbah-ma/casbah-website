import PropTypes from 'prop-types';
import { Text, Wrapper } from './HomeFooter.styles';
import Footer from '../Footer';
import { forwardRef } from 'react';
import { infos } from '../../config/constant';

const HomeFooter = forwardRef(function HomeFooter(
  { description, ...rest },
  ref
) {
  return (
    <div ref={ref} {...rest}>
      <Wrapper>
        <Text>
          {description} <span>{infos.email}</span>
        </Text>
        <Footer />
      </Wrapper>
    </div>
  );
});

HomeFooter.propTypes = {
  description: PropTypes.string.isRequired,
};

export default HomeFooter;
