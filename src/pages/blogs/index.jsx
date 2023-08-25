import { allBlogs, allBlogPages } from 'contentlayer/generated';
import BlogsSection from '../../components/BlogsSection';
import BlogsHero from '../../components/BlogsHero';
import { Container } from '../../styles/blogs.style';

export const getStaticProps = ({ locale }) => {
  const header = allBlogPages.find((blogPage) => blogPage.lang === locale);
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'blogs'
  );

  return {
    props: { data: { header, blogs } },
  };
};

const Blogs = ({ data }) => {
  return (
    <Container>
      <BlogsHero {...data.header} />
      <BlogsSection blogs={data.blogs} />
    </Container>
  );
};

export default Blogs;
