import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";
import MyImage from "../MyImage";
import {
  ImageWrapper,
  SwiperWrapper,
  Wrapper,
  imageStyle,
} from "./ClientsSwiper.styles";
import Header from "../Header";

function ClientsSwiper({ title, description, images }) {
  return (
    <Wrapper>
      <Header description={description} title={title} />
      <Swiper
        className="w-full h-full"
        modules={[A11y]}
        slidesPerView="auto"
        spaceBetween={32}
        breakpoints={{
          768: {
            spaceBetween: 42,
          },
        }}
      >
        {images?.length > 0 &&
          images.map((image, i) => (
            <SwiperSlide key={i}>
              <ImageWrapper>
                <MyImage src={image.src} sizes={imageStyle} alt={image.name} />
              </ImageWrapper>
            </SwiperSlide>
          ))}
      </Swiper>
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
