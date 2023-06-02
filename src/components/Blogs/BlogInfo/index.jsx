import {
  BlogContent,
  BlogQuote,
  BlogTitle,
  SwiperWrapper,
  Wrapper,
  imageSize,
  imagesSize,
} from './BlogInfo.styles';
import Title from '../../Title';
import Paragraph from '../../Paragraph';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MyImage from '../../MyImage';

const BlogInfo = ({ title, texts, quote, swiperImages, image }) => {
  texts = texts.split('.').map((element) => element + '.');
  return (
    <Wrapper>
      <BlogTitle>
        <Title renderAs="h2">{title}</Title>
      </BlogTitle>
      <BlogContent>
        {texts?.slice(0, texts.length - 2)?.map((txt, i) => (
          <Paragraph key={i + 2}>{txt}</Paragraph>
        ))}
        {quote && <BlogQuote>{quote}</BlogQuote>}
      </BlogContent>
      <SwiperWrapper>
        <Swiper
          className="w-full h-full"
          modules={[A11y]}
          slidesPerView="auto"
          spaceBetween={16}
          breakpoints={{
            768: {
              spaceBetween: 42,
            },
          }}
        >
          {swiperImages?.map((img) => (
            <SwiperSlide key={img.alt} className="w-fit h-fit">
              <MyImage sizes={imagesSize} src={img.url} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
      <BlogContent>
        {texts?.slice(-2)?.map((txt, i) => (
          <Paragraph key={i + 2}>{txt}</Paragraph>
        ))}
        <MyImage sizes={imageSize} src={image} alt={image} />
      </BlogContent>
    </Wrapper>
  );
};

export default BlogInfo;
