import { data } from '../../config/dummy';
import BlogHeader from '../../components/BlogHeader';
import ShareSection from '../../components/ShareSection';
import BlogInfo from '../../components/Blogs/BlogInfo';
import BlogSteps from '../../components/Blogs/BlogSteps';
import SimilarBlog from '../../components/Blogs/SimilarBlog';

const BlogInfoPage = ({}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 p-[2rem] md:p-16">
      <BlogHeader {...data.header} />
      <BlogInfo {...data.blogInfo} />
      <BlogSteps {...data.blogSteps} />
      <ShareSection {...data.share} />
      <SimilarBlog {...data.similarBlogs} />
    </div>
  );
};

export default BlogInfoPage;
