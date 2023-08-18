import BlogsSection from '../../components/BlogsSection';

import { allLabs, allBlogs } from 'contentlayer/generated';
import Header from '../../components/Header';

export const getStaticProps = ({ locale }) => {
  const header = allLabs.find((page) => page.lang === locale);
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'lab'
  );
  return {
    props: { data: { header, blogs } },
  };
};
const Lab = ({ data }) => {
  console.log(data.header);
  return (
    <div className="w-full min-h-full flex flex-col justify-start items-center gap-36 md:pt-16 mb-40 mt-40">
      <Header
        title={data.header.title}
        description={data.header.subtitle}
        withLine={true}
        isVertical={true}
      />
      <BlogsSection blogs={data.blogs} />
    </div>
  );
};

export default Lab;
