import { useRouter } from 'next/router';
import BlogsSectionV2 from '../../components/BlogsSectionV2';
import { allLabs } from 'contentlayer/generated';

export const getStaticProps = ({ locale }) => {
  const data = allLabs.find((page) => page.lang === locale);
  return {
    props: { data },
  };
};
const Lab = ({ data }) => {
  const route = useRouter();

  const handlClick = () => {
    route.push('/blogs/portfolio/test');
  };
  return (
    <div className="h-full flex flex-col justify-center items-center gap-36 p-[2rem] md:p-16 mb-20">
      <BlogsSectionV2 {...data} onClick={handlClick} />
    </div>
  );
};

export default Lab;
