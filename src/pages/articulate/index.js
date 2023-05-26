import { allArticulates } from 'contentlayer/generated';
//components
import Header from '@/components/Header';
import PicTop from '@/components/Articles/PicTop';
import PicLeftRight from '@/components/Articles/PicLeftRight';
import Pic4Left from '@/components/Articles/Pic4Left';

//get the data for the current locale
export const getStaticProps = async ({ locale }) => {
  const data = allArticulates.find((recipe) => recipe.lang === locale);
  return {
    props: {
      data,
    },
  };
};

function articulate({ data }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[120px] px-[72px] mb-36">
      <Header {...data.headerProps} />
      <PicTop {...data.picTopProps} variant="v1" />
      <PicLeftRight {...data.picLeftProps} variant="v1" />
      <Pic4Left {...data.pic4LeftProps} />
      <PicLeftRight {...data.picRightProps} variant="v3" />
      <PicLeftRight {...data.picLeftProps2} variant="v2" />
      <PicTop {...data.picTopProps2} variant="v1" />
    </div>
  );
}

export default articulate;
