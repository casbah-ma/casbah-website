import PortfolioHeader from '@/components/PortfolioHeader';
import ProjectSection from '@/components/ProjectSection';
import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { Container } from '../../styles/portfolio.styles';
import CursorTracker from '../../components/CursorTracker';

export const getStaticProps = ({ locale }) => {
  const data = allPortfolios.find((home) => home.lang === locale);
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
      <CursorTracker text="fullProject" />
      <PortfolioHeader {...data.headerProps} />
      {data?.blogs?.map((blog, key) => (
        <ProjectSection key={key} isFirst={key === 0} {...blog} />
      ))}
    </Container>
  );
}
