import useTranslation from 'next-translate/useTranslation';
import Title from '../Title';
import { Wrapper } from './SahreSection.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import ShareButton from '../ShareButton';

const ShareSection = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title renderAs="h2" withoutBorder>
        {t('shareon')}
      </Title>
      <Swiper
        className="w-full"
        modules={[A11y]}
        slidesPerView="auto"
        spaceBetween={15}
      >
        {data?.map((item, i) => (
          <SwiperSlide className="w-fit h-fit" key={item.name + i}>
            <ShareButton {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default ShareSection;
