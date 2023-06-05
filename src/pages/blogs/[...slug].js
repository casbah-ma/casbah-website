import { data } from '../../config/dummy';
import BlogHeader from '../../components/BlogHeader';
import ShareSection from '../../components/ShareSection';
import BlogInfo from '../../components/Blogs/BlogInfo';
import BlogSteps from '../../components/Blogs/BlogSteps';
import SimilarBlog from '../../components/Blogs/SimilarBlog';
import { useRouter } from 'next/router';
import PortfolioGrid from '../../components/PortfolioGrid';

const BlogInfoPage = ({}) => {
  const params = useRouter()?.query?.slug;

  return (
    <div
      className={`w-full flex flex-col justify-center items-center ${
        params[0] === 'portfolio' ? 'gap-5' : 'gap-20'
      } p-[2rem] md:p-16`}
    >
      {params[0] === 'blog' && (
        <>
          <BlogHeader {...data.header} />
          <BlogInfo {...data.blogInfo} />
          <BlogSteps {...data.blogSteps} />
          <ShareSection {...data.share} />
        </>
      )}
      {params[0] === 'portfolio' && (
        <>
          <BlogHeader {...data.header} />
          <PortfolioGrid variant="v1" {...data.portfolioBlog1} className="mb-16"/>
          <PortfolioGrid variant="v2" {...data.portfolioBlog2} className="mb-16"/>
        </>
      )}
      <SimilarBlog {...data.similarBlogs} />
    </div>
  );
};

export default BlogInfoPage;
