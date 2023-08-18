import PortfolioHeader from '@/components/PortfolioHeader';
import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { Container } from '../../styles/portfolio.styles';
import BlogsSection from '../../components/BlogsSection';

export const getStaticProps = ({ locale }) => {
  const header = allPortfolios.find((portfolio) => portfolio.lang === locale);
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'portfolio'
  );
  return {
    props: { data: { header, blogs } },
  };
};

export default function Portfolio({ data }) {
  return (
    <Container>
      <PortfolioHeader {...data.header} />
      <BlogsSection blogs={data.blogs} />
    </Container>
  );
}
