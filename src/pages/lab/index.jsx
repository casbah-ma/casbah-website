import BlogsSectionV2 from '../../components/BlogsSectionV2';
import { allLabs, allBlogs } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allLabs.find((page) => page.lang === locale);
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'lab'
  );
  return {
    props: { data: { ...data, blogs } },
  };
};
const Lab = ({ data }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16 mb-20">
      <BlogsSectionV2 {...data} />
    </div>
  );
};

export default Lab;
