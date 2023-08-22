import PropTypes from 'prop-types';
import { Text, TextWrapper, Wrapper } from './HomeFooter.styles';
import Footer from '../Footer';
import { forwardRef } from 'react';
import { infos } from '../../config/constant';

const HomeFooter = forwardRef(function HomeFooter({ description }, ref) {
  return (
    <div ref={ref} className="section">
      <Wrapper>
        <TextWrapper>
          <Text>
            {description} <span>{infos.email}</span>
          </Text>
        </TextWrapper>
        <Footer />
      </Wrapper>
    </div>
  );
});

HomeFooter.propTypes = {
  description: PropTypes.string.isRequired,
};

export default HomeFooter;
