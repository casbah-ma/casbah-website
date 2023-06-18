import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../Title';
import { SectionTitle, Wrapper } from './SimilarBlog.styles';
import useTranslation from 'next-translate/useTranslation';
import BlogsCard from '../../BlogsCard';
import { A11y } from 'swiper';
import { useRouter } from 'next/router';

const SimilarBlog = ({ blogs }) => {
  const { t } = useTranslation();
  const router = useRouter()

  const handleClick = (slug) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <Wrapper>
      <SectionTitle>
        <Title renderAs="h2" withoutBorder>
          {t('similarBlogs')}
        </Title>
      </SectionTitle>
      <Swiper
        className="w-full"
        modules={[A11y]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 'auto',
          },
        }}
      >
        {blogs?.map((item, i) => (
          <SwiperSlide
            className="md:!w-[31.813rem] !h-fit"
            key={item.name + i}
          >
            <BlogsCard {...item} variant="v2" onClick={() => handleClick(item?.slug)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default SimilarBlog;
