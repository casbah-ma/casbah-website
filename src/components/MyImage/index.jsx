import PropTypes from 'prop-types';
import { Wrapper } from './MyImage.styles';
import Image from 'next/image';

function MyImage({ sizes, src, alt, objectFit = 'cover' }) {
  return (
    <Wrapper sizes={sizes}>
      <Image src={src} alt={alt} fill={true} style={{ objectFit }} />
    </Wrapper>
  );
}

MyImage.propTypes = {
  sizes: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MyImage;
