import PortfolioHeader from '@/components/PortfolioHeader';
import ProjectSection from '@/components/ProjectSection';
import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { Container } from '../../styles/portfolio.styles';
import CursorTracker from '../../components/CursorTracker';
import useScrollDirection from '../../hooks/useScrollDirection';
import { useInView } from 'react-intersection-observer';

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
  const { ref, scrollDirection } = useScrollDirection();
  const { ref: headerRef, inView } = useInView({
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 150 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    exit: { opacity: 0, y: -100, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <Container
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      ref={ref}
    >
      {!inView && <CursorTracker text="fullProject" />}
      <PortfolioHeader ref={headerRef} inView={inView} {...data.headerProps} />
      {data?.blogs?.map((blog, key) => (
        <ProjectSection
          scrollDirection={scrollDirection}
          key={key}
          isFirst={key === 0}
          {...blog}
        />
      ))}
    </Container>
  );
}
