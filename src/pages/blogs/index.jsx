import { allBlogs, allBlogPages } from 'contentlayer/generated';
import BlogsSection from '../../components/BlogsSection';
import BlogsHero from '../../components/BlogsHero';

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
    <div className="flex flex-col justify-center items-center gap-36 p-[2rem]  md:p-0 md:mt-28">
      <BlogsHero {...data.header} />
      <BlogsSection blogs={data.blogs} />
    </div>
  );
};

export default Blogs;
