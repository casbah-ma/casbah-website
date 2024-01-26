import PropTypes from 'prop-types';
import {
  CarouselParent,
  ImageWrapper,
  Wrapper,
  imageStyle,
} from './ClientsSwiper.styles';
import Header from '../Header';
import dynamic from 'next/dynamic';
import ImageParallax from '../Animations/ImageParallax';

// Assuming 'images' is the array of image objects

const LazyImageComponent = dynamic(() => import('next/image'));

function ClientsSwiper({ title, description, images }) {
  return (
    <Wrapper>
      <Header description={description} title={title} hasDesc />
      <CarouselParent>
        <ImageParallax baseVelocity={1.5}>
          <div className='m-0 flex h-full'>
            {images.map((image, i) => (
              <ImageWrapper key={i}>
                <LazyImageComponent
                  src={image?.src}
                  sizes={imageStyle}
                  alt={image?.name}
                />
              </ImageWrapper>
            ))}
          </div>
        </ImageParallax>
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
