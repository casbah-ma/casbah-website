import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { Container } from '../../styles/portfolio.styles';
import BlogsSection from '../../components/BlogsSection';
import BlogsHero from '../../components/BlogsHero';
import { NextSeo } from 'next-seo';

export const getStaticProps = ({ locale }) => {
  const header = allPortfolios.find((portfolio) => portfolio.lang === locale);
  const blogs = allBlogs
    .filter((page) => page.lang === locale && page.parent === 'portfolio')
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  return {
    props: { data: { header, blogs } },
  };
};
 
const metadata = {
  title: 'Casbah Portfolio - Showcasing our Innovative Solutions',
  description:
    'Explore our cutting-edge solutions at Casbah, featuring dynamic web and app development, immersive augmented reality projects, and impactful territories development and digital strategies. Witness our commitment to innovation and excellence.',
};

export default function Portfolio({ data }) {
  return (
    <>
      <NextSeo {...metadata} />
      <Container>
        <BlogsHero {...data.header} />
        <BlogsSection blogs={data.blogs} />
      </Container>
    </>
  );
}
