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

export const meta = {
  title: "Casbah's Open Source Projects - A Hub of Innovation",
  description: "Explore Casbah Open Source Lab, where we show our commitment to a more open internet. Discover some of our innovative projects, showcasing the expertise of our teams in various domains of Product Development.",
}
const OpenSource = ({ data }) => {
  return (
    <Container>
      <BlogsHero {...data.header} />
      <BlogsSection blogs={data.blogs} />
    </Container>
  );
};

export default OpenSource;
