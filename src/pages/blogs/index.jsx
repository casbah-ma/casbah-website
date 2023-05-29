import BlogsSection from '../../components/BlogsSection';
import { allBlogs } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allBlogs.find((page) => page.lang === locale);
  return {
    props: { data },
  };
};
const Blogs = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16">
      <BlogsSection {...data} />
    </div>
  );
};

export default Blogs;
