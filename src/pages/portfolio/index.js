import PortfolioHeader from '@/components/PortfolioHeader';
import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { Container } from '../../styles/portfolio.styles';
import BlogsSectionV2 from '../../components/BlogsSectionV2';

export const getStaticProps = ({ locale }) => {
  const data = allPortfolios.find((portfolio) => portfolio.lang === locale);
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'portfolio'
  );
  return {
    props: { data: { ...data, blogs } },
  };
};

export default function Portfolio({ data }) {
  return (
    <Container>
      <BlogsSectionV2 {...data} isPortfolio={true} />
    </Container>
  );
}
