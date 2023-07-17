import PropTypes from 'prop-types';
import MyImage from '../MyImage';
import {
  Carousel,
  Carousel2,
  CarouselParent,
  ImageWrapper,
  Wrapper,
  imageStyle,
} from './ClientsSwiper.styles';
import Header from '../Header';

function ClientsSwiper({ title, description, images }) {
  console.log(images.length);
  return (
    <Wrapper>
      <Header description={description} title={title} />
      <CarouselParent>
        <Carousel>
          {images?.length > 0 &&
            images.map((image, i) => (
              <ImageWrapper key={i}>
                <MyImage src={image.src} sizes={imageStyle} alt={image.name} />
              </ImageWrapper>
            ))}
        </Carousel>
        <Carousel2>
          {images?.length > 0 &&
            images.map((image, i) => (
              <ImageWrapper key={i * 2}>
                <MyImage src={image.src} sizes={imageStyle} alt={image.name} />
              </ImageWrapper>
            ))}
        </Carousel2>
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
