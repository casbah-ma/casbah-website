import PropTypes from 'prop-types';
import { Content, Logo, Text, TextWrapper, Wrapper } from './HomeFooter.styles';
import Footer from '../Footer';
import { forwardRef, useMemo } from 'react';
import { infos } from '../../config/constant';
import Casbah from '../../icons/Casbah';

const orangeColors = ['ahead', 'future'];
const HomeFooter = forwardRef(function HomeFooter({ description }, ref) {
  return (
    <div ref={ref} className="section home_section fp-auto-height-responsive">
      <Wrapper>
        <Content>
          <Logo>
            <Casbah />
          </Logo>
          <Text>
            {description
              .split(' ')
              .map((word, i) =>
                orangeColors.includes(word) ? (
                  <span key={i}>{word + '\n'}</span>
                ) : (
                  word + ' '
                )
              )}
          </Text>
        </Content>
        <Footer className="mt-auto" />
      </Wrapper>
    </div>
  );
});

HomeFooter.propTypes = {
  description: PropTypes.string.isRequired,
};

export default HomeFooter;
