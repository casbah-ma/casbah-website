import PropTypes from 'prop-types';
import MyImage from '../MyImage';
import {
  Box,
  Boxes,
  Carousel,
  Carousel2,
  CarouselParent,
  ImageWrapper,
  Wrapper,
  imageStyle,
} from './ClientsSwiper.styles';
import Header from '../Header';

import Marquee from 'react-fast-marquee';

function ClientsSwiper({ title, description, images }) {
  return (
    <Wrapper>
      <Header description={description} title={title} />

      <CarouselParent>
        <Marquee gradient gradientWidth={30} autoFill pauseOnHover>
          {images?.length > 0 &&
            images.map((image, i) => (
              <ImageWrapper key={i}> 
                <MyImage
                  src={image.src}
                  sizes={imageStyle}
                  alt={image.name}
                  objectFit="contain"
                />
              </ImageWrapper>
            ))}
        </Marquee>
      </CarouselParent>
    </Wrapper>
  );
}

ClientsSwiper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ClientsSwiper;
