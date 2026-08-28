import { allBlogs, allBlogPages } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import BlogsSection from '../../components/BlogsSection';
import BlogsHero from '../../components/BlogsHero';
import { Container } from '../../styles/blogs.style';

export const getStaticProps = ({ locale }) => {
  const header =
    allBlogPages.find((blogPage) => blogPage.lang === locale) ||
    allBlogPages.find((blogPage) => blogPage.lang === 'en') ||
    null;
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'blogs'
  );

  return {
    props: { data: { header, blogs } },
  };
};

const metadata = {
  title: 'Blog - Casbah Insights & Articles',
  description:
    "Explore Casbah's latest insights on digital strategy, design, and technology. Stay informed with expert articles and industry trends.",
};

const Blogs = ({ data }) => {
  return (
    <>
      <NextSeo {...metadata} />
      <Container>
        <BlogsHero {...data.header} />
        <BlogsSection blogs={data.blogs} />
      </Container>
    </>
  );
};

export default Blogs;

