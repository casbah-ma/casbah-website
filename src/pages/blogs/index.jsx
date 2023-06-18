import BlogsSection from '../../components/BlogsSection';
import { allBlogs } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'blogs'
  );

  return {
    props: { data },
  };
};

const Blogs = ({ data }) => {
 

  return (
    <div className="flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16">
      <BlogsSection blogs={data}/>
    </div>
  );
};

export default Blogs;
