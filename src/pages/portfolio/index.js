import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { Container } from '../../styles/portfolio.styles';
import BlogsSection from '../../components/BlogsSection';
import BlogsHero from '../../components/BlogsHero';

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

export default function Portfolio({ data }) {
  return (
    <Container>
      <BlogsHero {...data.header} />
      <BlogsSection blogs={data.blogs} />
    </Container>
  );
}
