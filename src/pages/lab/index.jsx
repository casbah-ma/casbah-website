import BlogsSectionV2 from '../../components/BlogsSectionV2';
import { allLabs } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allLabs.find((page) => page.lang === locale);
  return {
    props: { data },
  };
};
const Lab = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16">
      <BlogsSectionV2 {...data} />
    </div>
  );
};

export default Lab;
