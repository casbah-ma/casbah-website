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
    <Wrapper ref={ref} {...rest}>
      <Text>
        {description} <span>{infos.email}</span>
      </Text>
      <Footer />
    </Wrapper>
  );
});

HomeFooter.propTypes = {
  description: PropTypes.string.isRequired,
};

export default HomeFooter;
