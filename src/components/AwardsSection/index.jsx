import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import { Wrapper } from './AwardsSection.styles';
import Header from '../Header';
import AwardsCard from '../AwardsCard';

function AwardsSection({ title, description, cards }) {
  return (
    <Wrapper>
      <Header description={description} title={title} withLine={true} />
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
        {cards?.length > 0 &&
          cards.map((card, i) => (
            <SwiperSlide key={i}>
              <AwardsCard {...card} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  );
}

AwardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default AwardsSection;
