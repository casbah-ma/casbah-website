import PropTypes from 'prop-types';
import { Text, Wrapper } from './HomeFooter.styles';
import Footer from '../Footer';
import { forwardRef } from 'react';

const HomeFooter = forwardRef(function HomeFooter(
  { description, email, ...rest },
  ref
) {
  return (
    <Wrapper ref={ref} {...rest}>
      <Text>
        {description} <span>{email}</span>
      </Text>
      <Footer />
    </Wrapper>
  );
});

HomeFooter.propTypes = {
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HomeFooter;
