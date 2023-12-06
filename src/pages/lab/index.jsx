import BlogsSection from '../../components/BlogsSection';
import { allLabs, allBlogs } from 'contentlayer/generated';
import BlogsHero from '../../components/BlogsHero';
import { Container } from '../../styles/lab.styles';

export const getStaticProps = ({ locale }) => {
  const header = allLabs.find((page) => page.lang === locale);
  const blogs = allBlogs
    .filter((page) => page.lang === locale && page.parent === 'lab')
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  return {
    props: { data: { header, blogs } },
  };
};

const Lab = ({ data }) => {
  return (
    <Container>
      <BlogsHero {...data.header} />
      <BlogsSection blogs={data.blogs} />
    </Container>
  );
};

export default Lab;
