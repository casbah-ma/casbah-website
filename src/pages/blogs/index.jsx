import { useRouter } from 'next/router';
import BlogsSection from '../../components/BlogsSection';
import { allBlogs } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allBlogs.find((page) => page.lang === locale);
  return {
    props: { data },
  };
};
const Blogs = ({ data }) => {
  const route = useRouter();

  const handleBlogClick = () => {
    route.push('/blogs/blog/test');
  };

  return (
    <div className="flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16">
      <BlogsSection {...data} onClick={handleBlogClick} />
    </div>
  );
};

export default Blogs;
